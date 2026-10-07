/* Playable scores: embedded engraved notation and local acoustic piano samples. */
(() => {
    const modes = {
        notes: ['Play the Notes', 'Read a short phrase on the piano.'],
        rhythm: ['Play the Rhythm', 'Hold notes and follow the rests.'],
        patterns: ['Play a Melody', 'Follow steps, skips and repeated notes.'],
        accidentals: ['Play Accidentals', 'Read sharps, flats and naturals.'],
        scales: ['Play a Scale', 'Play every note in the selected scale.'],
        keys: ['Play in a Key', 'Use the key signature as you play.'],
        dynamics: ['Play with Dynamics', 'Hear the phrase grow louder or softer.'],
        signs: ['Play Musical Signs', 'Hear articulation and emphasis in a phrase.']
    };
    const lengths = {whole:4, half:2, quarter:1, eighth:.5, sixteenth:.25};
    const noteNames = ['C','C♯','D','D♯','E','F','F♯','G','G♯','A','A♯','B'];
    const letterPitches = {c:0,d:2,e:4,f:5,g:7,a:9,b:11};
    const allScales = [...majorScaleSpecs, ...minorScaleSpecs].map(s=>s[0]);
    let current = null;
    function midi(note, key='C') {
        const m=/^([a-g])([#bn]?)(\d)$/i.exec(note);
        if (!m) throw new Error(`Invalid score note: ${note}`);
        return (+m[3]+1)*12+letterPitches[m[1].toLowerCase()]+(m[2]==='n'?0:m[2]==='#'?1:m[2]==='b'?-1:(keySignatureAccidentals[key]?.[m[1].toUpperCase()]||0));
    }
    function event(note, value='quarter', key='C', volume=.12) {
        return {note,value,midi:note?midi(note,key):null,units:lengths[value],volume};
    }
    function build(mode, clef='treble', scale='C major', seed=Math.random(), lessonNotes=null, lessonKey=null, lessonMarking=null) {
        let key='C', marking='', timed=mode==='rhythm';
        const octave=clef==='bass'?3:4;
        const pool=['c','d','e','f','g','a','b'].map(n=>n+octave);
        let notes;
        if (mode==='scales') {
            key=[...majorScaleSpecs,...minorScaleSpecs].find(s=>s[0]===scale)?.[1]||'C';
            notes=makeScaleNotes(scale,clef);
            // makeScaleNotes in the app accepts only a scale name; transpose for bass.
            if (clef==='bass') {const shift=Number(notes[0].slice(-1))-2;notes=notes.map(n=>n.replace(/\d$/,d=>String(+d-shift)));}
        } else if (mode==='accidentals') {
            notes=[`c${octave}`,`c#${octave}`,`dn${octave}`,`eb${octave}`,`en${octave}`,`f#${octave}`,`g${octave}`,`c${octave+1}`];
        } else if (mode==='keys') {
            const choices=['G','D','F','Bb'];key=lessonKey||choices[Math.floor(seed*choices.length)%choices.length];
            notes=key==='F'||key==='Bb'?[`f${octave}`,`g${octave}`,`a${octave}`,`b${octave}`,`a${octave}`,`g${octave}`,`f${octave}`]:[`g${octave}`,`a${octave}`,`b${octave}`,`c${octave+1}`,`b${octave}`,`a${octave}`,`f${octave}`];
        } else if (lessonNotes) notes=lessonNotes;
        else {
            const patterns=[[0,1,2,1,0,2,1,0],[2,3,4,3,2,1,2,0],[0,2,4,2,3,1,2,0],[4,3,2,2,1,0,1,0]];
            notes=patterns[Math.floor(seed*patterns.length)%patterns.length].map(i=>pool[i]);
            if(mode==='notes'||mode==='patterns'){let pos=Math.floor(seed*5);notes=Array.from({length:8},()=>{const n=pool[pos];pos=Math.max(0,Math.min(4,pos+choose(mode==='patterns'?[-2,-1,0,1,2]:[-1,0,1])));return n;});}
        }
        if (mode==='dynamics') marking=seed<.5?'Crescendo':'Diminuendo';
        if (mode==='signs') marking=lessonMarking||['Staccato','Accent','Slur','Fermata'][Math.floor(seed*4)%4];
        let events=notes.map((n,i)=>event(n,'quarter',key,marking?(marking==='Crescendo'?.055+.14*i/(notes.length-1):.195-.14*i/(notes.length-1)):.12));
        if(mode==='signs') events=notes.map((n,i)=>({...event(n,'quarter',key,marking==='Accent'&&i===0?.2:.12),articulation:marking==='Staccato'?.3:marking==='Slur'?1.05:marking==='Fermata'&&i===notes.length-1?2:1}));
        if(timed) events=[event(pool[0],'quarter'),event(null,'quarter'),event(pool[1],'half'),event(pool[2],'eighth'),event(pool[3],'eighth'),event(pool[4],'quarter'),event(null,'quarter'),event(pool[0],'quarter')];
        // Each bar is full: final shorter phrase is padded with written rests.
        const units=events.reduce((s,e)=>s+e.units,0);let remaining=(4-units%4)%4;
        for(const value of ['half','quarter','eighth','sixteenth']) while(remaining>=lengths[value]) {events.push(event(null,value,key));remaining-=lengths[value];}
        return {mode,clef,key,marking,scale,events,timed};
    }
    function noteY(note,clef) {
        const m=/^([a-g])[^\d]*(\d)$/i.exec(note);
        const diatonic=+m[2]*7+'cdefgab'.indexOf(m[1].toLowerCase());
        const bottom=clef==='bass'?2*7+4:4*7+2;
        return 127-(diatonic-bottom)*6.5;
    }
    function scoreSvg(score) {
        let cursor=0,bar=0;
        const positions=[];let x=155;
        score.events.forEach((e,i)=>{
            positions.push(x);x+=Math.max(58,e.units*28);
            cursor+=e.units;
            if(Math.abs(cursor-4)<.0001){bar++;cursor=0;x+=20;}
        });
        const width=x+25,extra=Math.max(0,Object.keys(keySignatureAccidentals[score.key]||{}).length*16-40);
        let drawing=`<g stroke="#8992a2" stroke-width="1">${[75,88,101,114,127].map(y=>`<path d="M15 ${y}H${width+extra-15}"/>`).join('')}</g>${clefPath(score.clef)}`;
        drawing+=`<text x="65" y="97" font-size="22" text-anchor="middle" fill="currentColor">4</text><text x="65" y="122" font-size="22" text-anchor="middle" fill="currentColor">4</text>`;
        const sharpNotes=score.clef==='bass'?['f3','c3','g3','d3','a2','e3','b2']:['f5','c5','g5','d5','a4','e5','b4'];
        const flatNotes=score.clef==='bass'?['b2','e3','a2','d3','g2','c3','f2']:['b4','e5','a4','d5','g4','c5','f4'];
        const signature=keySignatureAccidentals[score.key]||{};
        Object.entries(signature).forEach(([letter,alter],i)=>{drawing+=accidentalPath(alter>0?'♯':'♭',85+i*16,noteY((alter>0?sharpNotes:flatNotes)[i],score.clef));});
        // Give signatures with several accidentals their own space.
        if(extra) positions.forEach((p,i)=>positions[i]=p+extra);
        cursor=0;
        score.events.forEach((e,i)=>{
            const px=positions[i],y=e.note?noteY(e.note,score.clef):e.value==='whole'?88:101;
            let glyph='';
            if(e.note) {
                for(let ly=140;ly<=y;ly+=13) glyph+=`<path d="M${px-6} ${ly}h30" stroke="currentColor" stroke-width="1.3"/>`;
                for(let ly=62;ly>=y;ly-=13) glyph+=`<path d="M${px-6} ${ly}h30" stroke="currentColor" stroke-width="1.3"/>`;
                const a=/^[a-g]([#bn])/.exec(e.note);
                if(a) glyph+=accidentalPath(a[1]==='#'?'♯':a[1]==='b'?'♭':'♮',px-21,y);
                glyph+=musicGlyph(e.value,px,y,.045);
            } else glyph+=musicGlyph(e.value+'-rest',px,y,.052);
            drawing+=`<g class="score-event" data-score-index="${i}" data-score-x="${px}" data-midi="${e.midi??''}"><rect class="score-focus" x="${px-28}" y="34" width="65" height="125" rx="9"/>${glyph}</g>`;
            cursor+=e.units;
            if(Math.abs(cursor-4)<.0001){cursor=0;drawing+=`<path d="M${positions[i]+Math.max(58,e.units*28)+7} 75v52" stroke="currentColor" stroke-width="1.5"/>`;}
        });
        if(['Crescendo','Diminuendo'].includes(score.marking)){const start=positions[0],end=positions[score.events.filter(e=>e.note).length-1]+18;
            drawing+=score.marking==='Crescendo'?`<path d="M${end} 172L${start} 184L${end} 196" fill="none" stroke="currentColor" stroke-width="1.8"/>`:`<path d="M${start} 172L${end} 184L${start} 196" fill="none" stroke="currentColor" stroke-width="1.8"/>`;
            drawing+=`<text x="${start}" y="219" font-size="13" fill="currentColor">${score.marking}</text>`;
        }
        if(score.mode==='signs') {
            const played=score.events.map((e,i)=>e.note?i:null).filter(i=>i!==null);
            played.forEach((i,j)=>{const e=score.events[i],px=positions[i],y=noteY(e.note,score.clef);
                if(score.marking==='Staccato')drawing+=musicGlyph('staccato',px+6,y+20,.045);
                if(score.marking==='Accent'&&j===0)drawing+=musicGlyph('accent',px,y+32,.045);
                if(score.marking==='Fermata'&&j===played.length-1)drawing+=musicGlyph('fermata',px-6,40,.045);
            });
            if(score.marking==='Slur'){const a=positions[played[0]],b=positions[played[played.length-1]];drawing+=`<path d="M${a+7} 154Q${(a+b)/2} 194 ${b+7} 154Q${(a+b)/2} 187 ${a+7} 154Z" fill="currentColor"/>`;}
            drawing+=`<text x="${positions[0]}" y="219" font-size="13" fill="currentColor">${score.marking}</text>`;
        }
        return `<svg class="playable-score" viewBox="0 0 ${width+extra} 240" width="${width+extra}" height="240" role="img" aria-label="${score.clef} clef, ${score.key} key signature, four-four time. Read and play the highlighted symbol.">${drawing}</svg>`;
    }
    function stop() {
        if(!current)return;
        current.token++;clearTimeout(current.timer);clearInterval(current.holdTimer);
        current.sources.forEach(s=>{try{s.stop();}catch{}});current.sources.clear();
        current.pressed=null;current.busy=false;
    }
    function sound(m,seconds,volume) {
        const state=current,context=getLessonAudioContext();
        if(!context||!pianoBuffers)return;
        const root=[...pianoBuffers.keys()].reduce((a,b)=>Math.abs(b-m)<Math.abs(a-m)?b:a);
        const source=context.createBufferSource(),gain=context.createGain();
        source.buffer=pianoBuffers.get(root);source.playbackRate.value=2**((m-root)/12);
        const t=context.currentTime,level=Math.min(1,Math.max(.03,volume/.16));
        gain.gain.setValueAtTime(level,t);gain.gain.setValueAtTime(level,t+seconds);
        gain.gain.exponentialRampToValueAtTime(.0001,t+seconds+.25);
        source.connect(gain);gain.connect(pianoAudioOutput);source.start();source.stop(t+seconds+.27);
        state.sources.add(source);source.onended=()=>{state.sources.delete(source);source.disconnect();gain.disconnect();};
    }
    function status(message){current.host.querySelector('.score-feedback').textContent=message;}
    function duration(e){return e.units*60/Number(current.host.querySelector('.score-tempo').value);}
    function highlight() {
        const s=current,e=s.score.events[s.index];
        s.host.querySelectorAll('.score-event').forEach((g,i)=>{g.classList.toggle('is-current',i===s.index);g.classList.toggle('is-done',i<s.index);});
        const g=s.host.querySelector(`[data-score-index="${s.index}"]`),viewport=s.host.querySelector('.score-viewport');
        if(g) viewport.scrollTo({left:Math.max(0,Number(g.dataset.scoreX)-viewport.clientWidth*.35),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
        s.host.querySelector('.score-progress').textContent=e?`Measure ${Math.floor(s.score.events.slice(0,s.index).reduce((a,b)=>a+b.units,0)/4)+1}`:'Phrase complete';
        if(e?.midi!=null) keyboard(Math.floor(e.midi/12)*12);
        s.host.querySelector('.score-hold-fill').style.width='0%';
    }
    function keyboard(base) {
        const s=current,box=s.host.querySelector('.score-keyboard');
        if(Number(box.dataset.base)===base)return;
        box.dataset.base=base;
        box.innerHTML=`<div class="score-whites">${[0,2,4,5,7,9,11,12].map((p,i)=>`<button type="button" class="score-piano-key white" data-play-midi="${base+p}" aria-label="${noteNames[p%12]}${Math.floor((base+p)/12)-1}"><span>${noteNames[p%12]}<small>${Math.floor((base+p)/12)-1}</small></span></button>`).join('')}</div>${[1,3,6,8,10].map((p,i)=>`<button type="button" class="score-piano-key black" data-play-midi="${base+p}" aria-label="${noteNames[p]}${base/12-1}" style="left:${[1,2,4,5,6][i]*12.5-3.6}%"><span>${noteNames[p]}</span></button>`).join('')}`;
        s.host.querySelector('.score-octave').textContent=`Keyboard: C${base/12-1}–C${base/12}`;
        box.querySelectorAll('[data-play-midi]').forEach(button=>{
            button.onpointerdown=e=>{e.preventDefault();button.setPointerCapture(e.pointerId);press(+button.dataset.playMidi,button);};
            button.onpointerup=()=>release(button);button.onpointercancel=()=>release(button);
            button.onkeydown=e=>{if((e.key===' '||e.key==='Enter')&&!e.repeat){e.preventDefault();press(+button.dataset.playMidi,button);}};
            button.onkeyup=e=>{if(e.key===' '||e.key==='Enter'){e.preventDefault();release(button);}};
        });
    }
    function next() {
        const s=current;s.busy=false;s.pressed=null;clearInterval(s.holdTimer);
        s.index++;highlight();
        if(s.index===s.score.events.length){status('Phrase complete. Play it again or choose a new phrase.');s.host.querySelector('.score-start').textContent='Play again';s.started=false;return;}
        const e=s.score.events[s.index];
        if(e.midi===null) rest();else status(s.score.timed?'Press and hold the highlighted note.':'Play the highlighted note.');
    }
    function rest() {
        const s=current;s.busy=true;status(`${s.score.events[s.index].value} rest — stay silent.`);
        const token=s.token;s.timer=setTimeout(()=>{if(current===s&&s.token===token)next();},duration(s.score.events[s.index])*1000);
    }
    function press(m,button) {
        const s=current;if(!s||!s.ready)return;
        if(!s.started){status('Press Start first.');return;}
        if(s.demo||s.busy){if(!s.demo&&s.score.events[s.index]?.midi===null)status('This is a rest. Stay silent.');return;}
        const e=s.score.events[s.index];if(!e)return;
        button.classList.add('is-pressed');
        if(e.midi!==m){sound(m,.18,.09);status('Try another key. The highlighted note stays in place.');setTimeout(()=>button.classList.remove('is-pressed'),180);return;}
        const sec=duration(e);sound(m,sec*(e.articulation||1),e.volume);s.busy=true;
        if(!s.score.timed){status(s.score.marking?`${s.score.marking} — ${s.score.marking==='Crescendo'?'a little louder':'a little softer'}.`:'Correct.');const token=s.token;s.timer=setTimeout(()=>{button.classList.remove('is-pressed');if(current===s&&s.token===token)next();},250);return;}
        s.pressed={button,started:performance.now(),seconds:sec};status(`Hold the ${e.value} note.`);
        s.holdTimer=setInterval(()=>{if(current===s&&s.pressed)s.host.querySelector('.score-hold-fill').style.width=`${Math.min(100,(performance.now()-s.pressed.started)/(sec*10))}%`;},40);
        const token=s.token;s.timer=setTimeout(()=>{if(current===s&&s.token===token){button.classList.remove('is-pressed');next();}},sec*1000);
    }
    function release(button) {
        button.classList.remove('is-pressed');const s=current;if(!s?.pressed||s.pressed.button!==button)return;
        if(performance.now()-s.pressed.started<s.pressed.seconds*1000-80){
            stop();s.sources.clear();s.host.querySelector('.score-hold-fill').style.width='0%';status('Released early. Hold this note until the bar fills.');
        }
    }
    async function enable() {
        const s=current,token=++s.token;status('Loading piano sound…');
        try{const context=getLessonAudioContext();if(!context)throw new Error('Audio unavailable');await Promise.all([context.resume(),loadPianoSamples()]);if(current!==s||s.token!==token)return false;s.ready=true;return true;}
        catch{if(current===s)status('Sound could not load. Press Start to retry.');return false;}
    }
    async function start(demo=false) {
        stop();const s=current;s.demo=false;s.index=0;s.started=false;highlight();
        if(!await enable())return;
        s.started=true;s.demo=demo;s.host.querySelector('.score-start').textContent='Restart';
        if(!demo){status(s.score.timed?'Press and hold the highlighted note.':'Play the highlighted note.');return;}
        status('Listening to the phrase…');const token=s.token;
        function tick(){if(current!==s||s.token!==token)return;const e=s.score.events[s.index];if(!e){s.demo=false;s.started=false;status('Your turn. Press Start to play.');s.host.querySelector('.score-start').textContent='Start';return;}highlight();if(e.midi!==null)sound(e.midi,duration(e)*(e.articulation||1),e.volume);s.timer=setTimeout(()=>{s.index++;tick();},duration(e)*Math.max(1,e.articulation||1)*1000);}
        tick();
    }
    function render(host,mode,options={}) {
        stop();const score=build(mode,options.clef||'treble',options.scale||'C major',Math.random(),options.notes,options.key,options.marking);
        current={host,score,index:0,token:0,sources:new Set(),ready:!!pianoBuffers,started:false,busy:false,demo:false,pressed:null};
        host.innerHTML=`<div class="score-game-heading"><div><p class="section-label">PLAY THE SCORE</p><h2>${modes[mode][0]}</h2></div><span class="score-progress"></span></div><p class="score-instruction">${score.timed?'Hold each key until the bar fills. During rests, stay silent.':'Play the highlighted note. The score moves when you get it right.'}${score.marking?' The piano sound follows the marked volume change.':''}</p><div class="score-settings"><label>Clef <select class="score-clef"><option value="treble" ${score.clef==='treble'?'selected':''}>Treble</option><option value="bass" ${score.clef==='bass'?'selected':''}>Bass</option></select></label>${mode==='scales'?`<label>Scale <select class="score-scale">${allScales.map(n=>`<option ${n===score.scale?'selected':''}>${escapeHTML(n)}</option>`).join('')}</select></label>`:''}<label>Tempo <select class="score-tempo"><option value="60">Slow</option><option value="90" selected>Medium</option><option value="120">Quick</option></select></label></div><div class="score-viewport">${scoreSvg(score)}</div><div class="score-hold" ${score.timed?'':'hidden'}><span class="score-hold-fill"></span></div><div class="score-keyboard" role="group" aria-label="Playable piano keyboard"></div><p class="score-octave"></p><p class="score-feedback" role="status" aria-live="polite">Press Start to enable piano sound.</p><div class="score-actions"><button class="button button-primary score-start" type="button">Start</button><button class="button button-secondary score-listen" type="button">Listen first</button><button class="button button-secondary score-new" type="button">New phrase</button><button class="text-button score-stop" type="button">Stop</button></div>`;
        highlight();
        host.querySelector('.score-start').onclick=()=>start();host.querySelector('.score-listen').onclick=()=>start(true);
        const rerender=()=>render(host,mode,{...options,clef:host.querySelector('.score-clef').value,scale:host.querySelector('.score-scale')?.value});
        host.querySelector('.score-new').onclick=rerender;host.querySelector('.score-clef').onchange=rerender;host.querySelector('.score-scale')?.addEventListener('change',rerender);
        host.querySelector('.score-tempo').onchange=()=>{stop();current.started=false;status('Tempo changed. Press Start.');};
        host.querySelector('.score-stop').onclick=()=>{stop();current.demo=false;current.started=false;status('Stopped. Press Start to begin again.');};
    }
    const screen=document.createElement('section');screen.id='score-game-screen';screen.className='screen content-screen hidden';
    screen.innerHTML='<button class="text-button back-control" type="button">← Back</button><div class="score-mode-picker"><label>Game <select id="score-mode-select"></select></label></div><section id="practice-score-game" class="score-game"></section>';
    document.querySelector('main').append(screen);screens.scoreGame=screen;
    screen.querySelector('.back-control').onclick=goBack;
    const modeSelect=screen.querySelector('select');modeSelect.innerHTML=Object.entries(modes).map(([id,m])=>`<option value="${id}">${m[0]}</option>`).join('');
    modeSelect.onchange=()=>render(screen.querySelector('.score-game'),modeSelect.value);
    const card=document.createElement('button');card.type='button';card.className='practice-card';card.dataset.exercise='playScore';
    card.innerHTML='<span class="practice-type">PLAYABLE MUSIC</span><strong>Play the Score</strong><small>Notes, rhythm, scales and expression on the piano.</small><span class="card-link">Play →</span>';
    card.onclick=()=>{showScreen('scoreGame');modeSelect.value='notes';render(screen.querySelector('.score-game'),'notes');};
    practiceGrid.querySelector('[data-exercise="reading"]').after(card);
    const previousScreen=showScreen;
    showScreen=function(name,add=true){stop();current=null;previousScreen(name,add);if(name==='scoreGame'){document.querySelector('[data-go="practice"]').classList.add('active');document.querySelector('[data-go="practice"]').setAttribute('aria-current','page');}};
    const previousStep=renderGuidedStep;
    renderGuidedStep=function(){stop();current=null;previousStep();const course=courses[selectedCourseIndex],section=course.sections[lessonStep];
        let mode=null,notes=null;const clef=course.title==='Bass Clef'?'bass':'treble';
        if((course.title==='Treble Clef'&&lessonStep>=4)||(course.title==='Bass Clef'&&lessonStep>=2)){mode='notes';const n=clef==='bass'?3:4;notes=lessonStep===4&&clef==='treble'?['c4','d4','e4','d4']:['c'+n,'d'+n,'e'+n,'g'+n,'e'+n,'d'+n,'c'+n,'c'+n];}
        else if(course.title==='Accidentals'&&lessonStep>=1)mode='accidentals';
        else if(['Rhythm','Rests','Time Signatures'].includes(course.title)&&lessonStep===course.sections.length-1)mode='rhythm';
        else if(course.title==='Intervals & Patterns')mode='patterns';
        else if(['Major Scales','Minor Scales'].includes(course.title)&&lessonStep>=2)mode='scales';
        else if(course.title==='Key Signatures'&&lessonStep>=2)mode='keys';
        else if(course.title==='Dynamics'&&lessonStep===2)mode='dynamics';
        else if(course.title==='Music Signs'&&[1,2,3].includes(lessonStep))mode='signs';
        if(!mode)return;
        const host=document.createElement('section');host.className='score-game lesson-score-game';
        document.querySelector('.inline-challenge').replaceWith(host);
        render(host,mode,{clef,notes,key:mode==='keys'?signatureRows.find(s=>s.title===section.title)?.visual.key:null,marking:mode==='signs'?(lessonStep===1?'Fermata':lessonStep===2?'Staccato':'Slur'):null,scale:mode==='scales'&&allScales.includes(section.title)?section.title:course.title==='Minor Scales'?'A minor':'C major'});
    };
    document.addEventListener('visibilitychange',()=>{if(document.hidden&&current){stop();current.started=false;current.demo=false;status('Paused. Press Start when you return.');}});
    window.addEventListener('blur',()=>{if(current?.pressed)release(current.pressed.button);});
    // Read-only hooks for exhaustive notation/pitch checks.
    window.NoteGGScoreChecks={build,scoreSvg,midi,modes:Object.keys(modes)};
})();
