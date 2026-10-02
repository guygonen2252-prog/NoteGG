/* Guided beta curriculum. No checkout, tracking or external notation dependency. */
const originalCourses = courses.slice();
const originalReadingPool = getReadingPool;
const originalQuestionRenderer = renderQuestion;
const originalShowScreen = showScreen;
const originalStaffSvg = createStaffSvg;
// Include common enharmonic spellings as well as all twelve pitch classes.
majorScaleSpecs.push(["D-flat major","Db"],["G-flat major","Gb"],["C-flat major","Cb"]);
minorScaleSpecs.push(["B-flat minor","Db"],["E-flat minor","Gb"],["A-flat minor","Cb"]);
scalePitchClasses["C-flat"] = 11;
const letters = ["C", "D", "E", "F", "G", "A", "B"];
const choose = items => items[Math.floor(Math.random() * items.length)];
const shuffled = items => {
    const result = items.slice();
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
};
const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const question = (prompt, answer, choices, explanation, visual = "") => ({prompt, answer, choices, explanation, visual});
const fact = (prompt, answer, choices, explanation) => () => question(prompt, answer, choices, explanation);
const step = (title, text, visual, quiz) => ({title, text, visual, quiz});
const staff = (notes, clef = "treble", key = "C", test = false) => createStaffSvg({notes, clef, key, width: Math.max(330, notes.length * 46 + 170), practice:test, label:test ? `Identify the written note in ${clef} clef` : `${clef} clef: ${notes.join(", ")}`});
const displayNote = n => n.toUpperCase().replace("#", "♯").replace("B", "B");

// Paths instead of OS-dependent music glyphs: reliable clefs on iOS and desktop.
function clefPath(clef) {
    if (clef === "bass") return '<g fill="currentColor"><path d="M23 91C19 72 47 68 51 86C56 108 33 125 20 129C38 117 47 98 43 86C40 77 27 78 25 88C35 82 37 96 28 98C22 99 20 94 23 91Z"/><circle cx="60" cy="81.5" r="3"/><circle cx="60" cy="94.5" r="3"/></g>';
    return '<g fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"><path d="M42 145C58 152 46 174 35 159M42 145L32 60C29 35 48 34 46 56C45 76 20 86 22 108C23 128 55 133 57 113C59 91 29 92 31 111C32 118 40 120 44 116"/><path d="M33 59C28 49 38 35 43 37"/></g>';
}
function accidentalPath(symbol, x, y) {
    if (symbol === "♭") return `<path d="M${x-2} ${y-20}v27c16-8 14-20 0-11" fill="none" stroke="currentColor" stroke-width="2.2"/>`;
    if (symbol === "♮") return `<path d="M${x-4} ${y-17}v25l9-4V${y-13}M${x+5} ${y-4}v22M${x-4} ${y-4}l9-4" fill="none" stroke="currentColor" stroke-width="2.2"/>`;
    return `<g stroke="currentColor" fill="none"><path d="M${x-4} ${y-14}v29M${x+4} ${y-17}v29" stroke-width="1.8"/><path d="M${x-9} ${y-3}l18-5M${x-9} ${y+7}l18-5" stroke-width="3"/></g>`;
}
createStaffSvg = function(options) {
    let svg = originalStaffSvg(options);
    svg = svg.replace(/<text class="staff-clef [\s\S]*?<\/text>/, clefPath(options.clef || "treble"));
    svg = svg.replace(/<text class="staff-accidental[^"]*" x="([^"]+)" y="([^"]+)">([^<]+)<\/text>/g,
        (_, x, y, symbol) => accidentalPath(symbol, Number(x), Number(y)-7));
    if (options.practice) svg = svg.replace(/aria-label="[^"]*"/, `aria-label="${options.clef || "treble"} staff question"`);
    return svg;
};

function keyboardVisual() {
    return `<div class="piano-map"><div class="map-white">${letters.map(n=>`<button type="button" data-demo-note="${n.toLowerCase()}4" aria-label="Play ${n}">${n}</button>`).join("")}</div>${[1,2,4,5,6].map((p,i)=>`<button type="button" class="map-black" style="left:calc(${p} * 100% / 7 - 4%)" data-demo-note="${["c#4","d#4","f#4","g#4","a#4"][i]}" aria-label="Play black key ${i+1}"></button>`).join("")}</div><p class="diagram-caption">Lower ← &nbsp; groups of two and three black keys &nbsp; → Higher</p>`;
}
function noteQuiz(notes, clef) {
    return () => {
        const n = choose(notes), answer=n[0].toUpperCase();
        return question("Which note name belongs here?", answer, letters,
            `${displayNote(n)}. ${clef === "bass" ? "The bass landmark F3 is on the fourth line." : "The treble landmark G4 is on the second line."} Count lines and spaces from a landmark.`, staff([n],clef,"C",true));
    };
}
function rhythmQuiz(rest = false, allowed = ["whole","half","quarter","eighth","sixteenth"]) {
    return () => {
        const name = choose(allowed), suffix = rest ? " rest" : " note";
        return question(rest ? "Name this rest." : "Name this note value.", name+suffix, allowed.map(n=>n+suffix),
            `${name[0].toUpperCase()+name.slice(1)}${suffix}. ${rest ? "A rest means silence for the indicated duration." : {whole:"An open head with no stem.",half:"An open head with a stem.",quarter:"A filled head with a stem and no flag.",eighth:"One flag, or one beam when grouped.",sixteenth:"Two flags, or two beams when grouped."}[name]}`,
            `<div class="quiz-symbol" aria-hidden="true">${rhythmIcon(name+(rest?"-rest":""))}</div>`);
    };
}
function measureVisual() {
    return `<div class="measure-diagram" aria-label="Two measures in four-four time"><span class="time-signature">4<br>4</span>${[0,1].map(()=>`<div>${Array.from({length:4},()=>rhythmIcon("quarter")).join("")}<small>One measure</small></div>`).join("")}</div>`;
}
function signVisual(name) {
    const drawings = {
        Fermata:'<path d="M25 62Q60 0 95 62"/><circle cx="60" cy="57" r="5" fill="currentColor"/>',
        Staccato:'<ellipse cx="60" cy="65" rx="12" ry="8" fill="currentColor"/><path d="M71 65V25"/><circle cx="60" cy="16" r="4" fill="currentColor"/>',
        Accent:'<path d="M43 15L79 25L43 35"/><ellipse cx="60" cy="76" rx="12" ry="8" fill="currentColor"/><path d="M71 75V43"/>',
        Repeat:'<path d="M64 14V84M74 14V84"/><circle cx="51" cy="39" r="4" fill="currentColor"/><circle cx="51" cy="60" r="4" fill="currentColor"/>',
        Crescendo:'<path d="M100 20L20 50L100 80"/>',
        Diminuendo:'<path d="M20 20L100 50L20 80"/>',
        Slur:'<ellipse cx="30" cy="50" rx="10" ry="7" fill="currentColor"/><ellipse cx="90" cy="30" rx="10" ry="7" fill="currentColor"/><path d="M20 68Q65 99 103 47"/>'
    };
    return `<svg class="music-sign" viewBox="0 0 120 100" role="img" aria-label="${name}"><g stroke="currentColor" stroke-width="3" fill="none">${drawings[name] || ""}</g></svg>`;
}

const trebleSteps = [
    step("Find your way around the piano", "You do not need to know any music yet. A piano repeats the same pattern: two black keys, then three. C is the white key immediately to the left of a group of TWO black keys. Tap the keys below and notice that moving right makes the sound higher.", keyboardVisual, fact("Which group helps you find C?","Two black keys",["Two black keys","Three black keys","Any white key"],"C is immediately left of the two-black-key group.")),
    step("Seven letters, repeated", "White keys follow C, D, E, F, G, A, B, then start again at C. The next C has the same name but a higher sound. This distance is an octave. Middle C is a particular C near the centre of the piano; we call it C4. The number tells you which octave, not which finger to use.", keyboardVisual, ()=>{const i=Math.floor(Math.random()*7); return question(`What comes immediately after ${letters[i]} going right?`,letters[(i+1)%7],letters,"Follow C D E F G A B, then repeat C.");}),
    step("Meet the staff", "Written notes sit on a staff: five lines and four spaces. Count both from the BOTTOM. A note head can sit on a line or between two lines. Higher on the staff means a higher sound. Moving from a line to the next space moves one letter up.", ()=>staff(["e4","f4","g4"]), fact("A note moves from E to the next space above. What is it?","F",letters,"A line-to-space move is one letter step: E to F.")),
    step("Why the clef matters", "The symbol at the start tells you how to name the lines. The treble clef curls around the second line: G4. Use G as a landmark. One step down is F4 in a space; one step up is A4 in a space. Piano right-hand parts often use treble clef, but either hand can play these notes.", ()=>staff(["f4","g4","a4"]), noteQuiz(["f4","g4","a4"],"treble")),
    step("Middle C connects staff and piano", "C4 is middle C. It sits on one short extra line BELOW the treble staff. These extra lines are called ledger lines. D4 sits just below the staff; E4 sits on its bottom line. Find C on the piano first, then move right to D and E.", ()=>staff(["c4","d4","e4"]), noteQuiz(["c4","d4","e4"],"treble")),
    step("Read the line notes", "Starting at the bottom, the five line notes are E4, G4, B4, D5 and F5. Each move from one line to the next skips the letter in the space between. Do not try to memorise everything at once: locate G, then count toward the note you need.", ()=>staff(["e4","g4","b4","d5","f5"]), noteQuiz(["e4","g4","b4","d5","f5"],"treble")),
    step("Read the space notes", "The spaces spell F A C E from bottom to top: F4, A4, C5, E5. C5 is higher than middle C, even though both are C. Read the note's height before choosing its octave on a piano.", ()=>staff(["f4","a4","c5","e5"]), noteQuiz(["f4","a4","c5","e5"],"treble")),
    step("Read above and below the staff", "Ledger lines continue the same line-space pattern. Below middle C come B3, then A3. Above the top line F5 come G5, A5, B5 and C6. Use nearby notes as landmarks; there is no new alphabet to learn. The reference below is split into rows so notes stay readable on a phone.", ()=>rangeVisual("treble"), noteQuiz(["a3","b3","c4","g5","a5","b5","c6"],"treble")),
    step("Read a short phrase", "Read left to right. First identify the starting note, then notice whether the melody moves up, down or repeats. C–D–E moves up by steps; E–D–C moves down. Looking for these shapes is more useful than guessing every note separately.", ()=>staff(["c4","d4","e4","d4","c4"]), ()=>phraseQuestion("treble"))
];
const bassSteps = [
    step("Start from middle C", "Bass clef uses the same piano and the same repeating letter names. Find C beside a group of two black keys. From middle C (C4), move LEFT for lower notes: B3, A3, G3 and so on. The octave number changes when you cross from C down to B.", keyboardVisual, fact("Going left from middle C, which white key comes next?","B",letters,"The alphabet runs backward going left: C B A G F E D.")),
    step("A new clef, the same staff", "Bass clef names lower notes. Its two dots surround the fourth line from the bottom: F3. That is your landmark. The same written position has a different name in treble and bass, so always look at the clef first.", ()=>staff(["e3","f3","g3"],"bass"), noteQuiz(["e3","f3","g3"],"bass")),
    step("Middle C above the bass staff", "Middle C is on one ledger line ABOVE the bass staff. It is exactly the same piano key as middle C in treble clef. Below it are B3 in the space above the staff and A3 on the top line. This is how the two clefs connect.", ()=>staff(["a3","b3","c4"],"bass"), noteQuiz(["a3","b3","c4"],"bass")),
    step("Bass line notes", "Count the lines from the bottom: G2, B2, D3, F3, A3. F3 is the fourth line, between the clef's dots. Adjacent lines skip one letter, just as they do in treble clef.", ()=>staff(["g2","b2","d3","f3","a3"],"bass"), noteQuiz(["g2","b2","d3","f3","a3"],"bass")),
    step("Bass space notes", "Count the four spaces upward: A2, C3, E3, G3. C3 is one octave below middle C. Use these spaces together with the F landmark rather than learning a separate rule for every note.", ()=>staff(["a2","c3","e3","g3"],"bass"), noteQuiz(["a2","c3","e3","g3"],"bass")),
    step("Ledger lines and the full range", "Below the bottom line G2 come F2, E2, D2 and C2. Above A3 come B3, C4, D4 and E4. Keep counting alternating lines and spaces. The short ledger lines are simply an extension of the staff.", ()=>rangeVisual("bass"), noteQuiz(["c2","d2","e2","f2","c4","d4","e4"],"bass")),
    step("Read bass patterns", "Read the first note, then follow the direction. A repeated position repeats the pitch. A move to the next line or space is a step; a line-to-line move is a skip. Read this pattern aloud before using the keyboard.", ()=>staff(["c3","d3","e3","d3","c3"],"bass"), ()=>phraseQuestion("bass"))
];
function rangeVisual(clef) {
    const notes = originalCourses.find(c=>c.title === (clef === "bass" ? "Bass Clef" : "Treble Clef")).sections.find(s=>s.visual?.type === "range").visual.notes;
    return Array.from({length:Math.ceil(notes.length/4)},(_,i)=>staff(notes.slice(i*4,i*4+4),clef)).join("");
}
const durationNames = ["whole","half","quarter","eighth","sixteenth"];
const rhythmSteps = [
    step("Pulse is steady; rhythm changes", "Tap a steady pulse, like a clock. Rhythm is the pattern of sounds and silences placed against that pulse. Notes can last longer or shorter than one pulse. Tempo tells you how fast the pulse goes; changing tempo does not change a quarter note into an eighth note.", ()=>`<div class="pulse-demo">${rhythmSequence(["quarter","quarter","quarter","quarter"])}</div><button class="button button-secondary" data-pulse>Play four steady pulses</button>`, fact("What changes when the tempo gets faster?","The pulse gets faster",["The pulse gets faster","All notes become eighth notes","The clef changes"],"Tempo changes speed, not the written note values.")),
    step("Recognise a note's parts", "The oval is the note head. The vertical line is the stem. Curved strokes attached to a stem are flags. A stem can point up or down without changing the note's duration. Look at whether the head is open or filled, then count flags or beams.", ()=>rhythmSequence(["half","quarter","eighth","sixteenth"]), rhythmQuiz(false,["half","quarter","eighth","sixteenth"])),
    step("Whole, half and quarter", "A whole note has an open head and no stem. A half note has an open head and a stem. A quarter note has a filled head and a stem. One whole equals two halves or four quarters. In 4/4 time, a quarter is one beat, so these last four, two and one beats respectively.", ()=>rhythmSequence(["half","+","half","=","whole"]), rhythmQuiz(false,["whole","half","quarter"])),
    step("Eighth notes divide quarters", "An eighth note has one flag. Two eighth notes last as long as one quarter. When several eighth notes are together, a single beam may connect their stems instead of separate flags. In 4/4, count two equal eighths as ‘1 and’.", ()=>rhythmSequence(["eighth","+","eighth","=","quarter"]), rhythmQuiz(false,["quarter","eighth"])),
    step("Sixteenth notes divide again", "A sixteenth note has two flags, or two beams in a group. Four sixteenths equal one quarter; two equal one eighth. In 4/4, ‘1 e and a’ divides one beat into four equal parts. Keep the subdivisions even, not hurried at the end.", ()=>rhythmSequence(["sixteenth","sixteenth","sixteenth","sixteenth","=","quarter"]), rhythmQuiz(false,["eighth","sixteenth","quarter"])),
    step("Dots add half the original value", "A dot after a note adds half of that note's original length. A dotted half equals a half plus a quarter. A dotted quarter equals a quarter plus an eighth. The dot changes duration; it does not change pitch.", ()=>rhythmSequence(["dotted-quarter","=","quarter","+","eighth"]), fact("A dotted quarter equals which combination?","Quarter + eighth",["Quarter + eighth","Quarter + quarter","Half + quarter"],"The added half of a quarter is an eighth.")),
    step("Ties sustain one sound", "A tie is a curved line connecting two notes of the SAME pitch. Play once and hold for their combined duration. Do not strike the second note again. A slur can connect different pitches and asks for smooth playing instead; it does not add their lengths into one sustained note.", ()=>rhythmIcon("tie"), fact("What do you do with two tied notes?","Play once and hold",["Play once and hold","Play twice","Play the second louder"],"Tied notes make one continuous sound for their combined duration."))
];
const restSteps = [
    step("Silence has a written length", "A rest tells you not to play for a specific duration. Keep counting during silence so your next note starts on time. Rest names match note names: whole, half, quarter, eighth and sixteenth.", ()=>rhythmSequence(["quarter","quarter-rest","quarter","quarter-rest"]), rhythmQuiz(true)),
    step("Whole and half rests", "A whole rest hangs BELOW a staff line; a half rest sits ON TOP of a line. A whole rest can also indicate a complete empty measure, including in time signatures other than 4/4. A half rest has the same duration as a half note.", ()=>rhythmSequence(["whole-rest","half-rest"]), rhythmQuiz(true,["whole","half"])),
    step("Quarter, eighth and sixteenth rests", "A quarter rest has a distinctive zigzag shape. An eighth rest has one dot-and-hook shape; a sixteenth rest has two. Their durations match the corresponding notes. Practise recognising the shape before trying to count a whole passage.", ()=>rhythmSequence(["quarter-rest","eighth-rest","sixteenth-rest"]), rhythmQuiz(true,["quarter","eighth","sixteenth"])),
    step("Count through the gap", "In 4/4, a quarter note, quarter rest and half note fill one measure. Play on count 1, stay silent on 2, then play and hold across 3–4. The beat continues even when you make no sound.", ()=>rhythmSequence(["quarter","quarter-rest","half"]), fact("During a rest, what happens to your counting?","Keep counting",["Keep counting","Stop until the next note","Start the measure again"],"Counting through silence keeps the next entrance in time."))
];
const meterSteps = [
    step("Measures organise music", "Vertical bar lines divide music into measures, also called bars. Each measure contains a set amount of musical time. Notes and rests both use that time. The bar line is not a rest: do not stop merely because you reach one.", measureVisual, fact("Does a bar line tell you to pause?","No",["No","Yes, always"],"A bar line groups time. Only a rest or another instruction tells you to pause.")),
    step("Read 2/4, 3/4 and 4/4", "The top number gives the number of beats in these simple meters. The bottom 4 tells you a quarter note is the beat unit. In 3/4, count 1–2–3 and repeat; in 4/4, count 1–2–3–4. Emphasise the first beat gently to feel each new measure.", measureVisual, ()=>{const n=choose([2,3,4]);return question(`How many quarter notes fill ${n}/4?`,String(n),["2","3","4"],`The upper ${n} means ${n} quarter-note beats per measure.`);}),
    step("Different values can fill the same measure", "Four quarters, two halves, or a half plus two quarters all fill 4/4. A rest can replace a note of equal duration. Count the total length, not the number of symbols: two halves contain four quarter-note beats even though there are only two notes.", ()=>rhythmSequence(["half","+","quarter","+","quarter"]), ()=>buildBarQuestion()),
    step("Meet 6/8", "In 6/8 there are six eighth-note units per measure, usually felt as TWO groups of three. Count ‘1 2 3, 4 5 6’, with emphasis on 1 and 4. Each larger pulse lasts a dotted quarter. This is why the top number does not always equal the number of main pulses.", ()=>`<div class="compound-groups">${rhythmSequence(["eighth","eighth","eighth"])}${rhythmSequence(["eighth","eighth","eighth"])}</div>`, fact("How is 6/8 usually grouped?","Two groups of three",["Two groups of three","Three groups of two","Six groups of four"],"Six eighths are normally felt as two dotted-quarter pulses."))
];
const accidentalSteps = [
    step("A semitone is the nearest key", "Move to the very next piano key, white OR black: that is one semitone, also called a half step. C to C-sharp is a semitone. E to F and B to C are also semitones because there is no black key between them. Two semitones make a whole step.", keyboardVisual, fact("Which pair has no black key between them?","E and F",["E and F","C and D","F and G"],"E–F and B–C are neighbouring white keys with no black key between.")),
    step("Sharps raise the written note", "A sharp raises a note by one semitone. C-sharp is the black key just right of C. But a sharp does not always mean a black key: E-sharp sounds on F. Read the letter first, then make the alteration.", ()=>staff(["c4","c#4"]), fact("Which key sounds E-sharp?","F",letters,"Raising E one semitone reaches F, with no black key in between.")),
    step("Flats lower the written note", "A flat lowers a note by one semitone. D-flat is the black key just left of D: the same piano key as C-sharp. These are two spellings of the same pitch on a piano. B-flat is just left of B; C-flat sounds on B.", ()=>staff(["d4","db4"]), fact("C-sharp and D-flat use…","The same piano key",["The same piano key","Two neighbouring keys","Keys an octave apart"],"C raised and D lowered reach the same black key.")),
    step("Naturals cancel alterations", "A natural sign restores the unaltered letter name. F-natural is F, even when the key signature normally asks for F-sharp. An accidental normally lasts for that pitch at that octave until the next bar line; a new accidental can change it earlier.", ()=>`<svg class="music-sign" viewBox="0 0 120 100" aria-label="Natural sign" role="img">${accidentalPath("♮",60,50)}</svg>`, fact("What does a natural sign do?","Cancels a sharp or flat",["Cancels a sharp or flat","Adds a rest","Doubles the length"],"Natural restores the unaltered note letter."))
];
const intervalSteps = [
    step("Steps, skips and repeated notes", "Two notes in the same position repeat. A move from a line to the neighbouring space is a step, such as C to D. A move from one line to the next line skips a letter, such as C to E. Recognising the shape helps you read several notes at once.", ()=>staff(["c4","c4","d4","f4"]), ()=>phraseQuestion("treble")),
    step("Count interval numbers", "An interval is the distance between notes. Count letter names INCLUDING both ends: C–D is a second; C–D–E is a third; C through G is a fifth. This number describes the written distance, not yet its exact size in semitones.", ()=>staff(["c4","e4","g4"]), ()=>intervalQuestion()),
    step("Octaves repeat the letter", "C4 to C5 is an octave: count C D E F G A B C, eight letters including both ends. The notes share a name but are not the same pitch. On the piano, an octave spans twelve semitones.", ()=>staff(["c4","c5"]), fact("Which pair is an octave?","C4 to C5",["C4 to C5","C4 to D4","C4 to G4"],"An octave reaches the next version of the same letter name."))
];

function scaleIntro(minor) {
    const pattern=minor?"whole, half, whole, whole, half, whole, whole":"whole, whole, half, whole, whole, whole, half";
    return [step("What a scale is", `A scale is an ordered set of pitches. The first note is the tonic, or home note. Ascending one octave returns to that letter at a higher pitch. We use each letter name once before repeating the tonic. ${minor?"This course uses the basic minor pattern. Harmonic and melodic minor change some notes and are different forms.":"C major uses only white keys, but other major scales need black keys to keep the same spacing."}`, ()=>staff(makeScaleNotes(minor?"A minor":"C major")), fact("What is the first or home note called?","Tonic",["Tonic","Clef","Bar line"],"A scale is named after its tonic.")),
    step("Build it by distances", `Start on the tonic and follow: ${pattern}. A half step is the very next piano key, including black keys; a whole step skips one key. This pattern, not the colour of the keys, makes the scale ${minor?"minor":"major"}.`, keyboardVisual, fact("A whole step contains how many semitones?","Two",["One","Two","Three"],"A whole step is two adjacent semitone moves."))];
}
function scaleSteps(minor) {
    return [...scaleIntro(minor), ...(minor?minorScaleSpecs:majorScaleSpecs).map(([name,key])=>step(name,
        `Start on ${name.split(" ")[0]}. Read the key signature first, then follow the labelled notes upward. The signature alters every occurrence of those letters, including the final tonic. Say the note names, then find them on the keyboard.`,
        ()=>staff(makeScaleNotes(name),"treble",key), ()=>keyQuestion(key)))];
}
const signatureRows = originalCourses.find(c=>c.title === "Key Signatures").sections.filter(s=>s.visual?.type === "key");
function keyQuestion(key = choose(signatureRows).visual.key) {
    const entry=signatureRows.find(s=>s.visual.key===key);
    return question("Which major / minor pair shares this signature?",entry.title,shuffled([entry.title,...shuffled(signatureRows.filter(s=>s!==entry)).slice(0,3).map(s=>s.title)]),
        `${entry.title}: ${entry.text.split(".")[0]}. Relative major and minor share a signature; their home notes differ.`,staff([],"treble",key,true));
}
const keySteps = [
    step("A shortcut at the start", "A key signature is a group of sharps or flats after the clef. It saves repeating the same accidentals beside many notes. If the signature includes F-sharp, every F in every octave is sharpened unless a local accidental changes it. The signature continues until a new one replaces it.", ()=>staff(["f4","f5"],"treble","G"), fact("An F-sharp in the key signature changes…","Every F in every octave",["Every F in every octave","Only the first F","Only the top line"],"Key signatures apply to that letter across octaves.")),
    step("Major and relative minor", "Each signature belongs to a major key and its relative minor. C major and A minor both have no sharps or flats. They use the same collection but different home notes. The signature alone cannot tell you which one you are hearing; the melody and harmony provide that context.", ()=>staff([],"treble","C"), fact("Can the signature alone always tell major from minor?","No",["Yes","No"],"Relative major and minor share the same signature.")),
    step("Read the fixed order", "Sharps appear F C G D A E B. Flats appear in reverse: B E A D G C F. For sharp major keys, the last sharp is a semitone below the tonic. With two or more flats, the next-to-last flat names the major key. F major, with one flat, is the exception to that shortcut.", ()=>staff([],"treble","D"), ()=>keyQuestion()),
    ...signatureRows.map(s=>step(s.title,`${s.text} Read the symbols from left to right. Apply them to the same letter names throughout the piece. A natural or other local accidental can temporarily override the signature.`,()=>staff([],"treble",s.visual.key),()=>keyQuestion(s.visual.key)))
];
const dynamicsSteps = [
    step("Volume, not speed", "Dynamics describe how softly or loudly to play. They are relative: piano means softer than forte in the same musical context, not an exact volume setting. Change the strength of your touch without changing tempo unless the music also asks for a tempo change.", ()=>'<div class="dynamic-row"><span>p<small>soft</small></span><span>f<small>loud</small></span></div>', fact("Does forte mean faster?","No, louder",["No, louder","Yes, faster","No, slower"],"Dynamics change loudness; tempo changes speed.")),
    step("The dynamic ladder", "From softer to louder: ppp, pp, p, mp, mf, f, ff, fff. Mezzo means moderately: mp is moderately soft and mf moderately loud. Extra p or f letters ask for a greater degree of softness or loudness, not a new playing speed.", ()=>'<div class="dynamic-row">ppp · pp · p · mp · mf · f · ff · fff</div>', ()=>dynamicQuestion()),
    step("Change gradually", "A crescendo grows louder; a diminuendo or decrescendo becomes softer. The hairpin opens in the direction of increasing volume. Spread the change across its full length rather than making one sudden jump.", ()=>`<div class="sign-pair">${signVisual("Crescendo")}${signVisual("Diminuendo")}</div>`, ()=>{const a=choose(["Crescendo","Diminuendo"]);return question("What does this marking ask for?",a,["Crescendo","Diminuendo"],a==="Crescendo"?"Gradually get louder.":"Gradually get softer.",signVisual(a));}),
    step("Emphasis and sudden changes", "An accent brings out one note. Sforzando (sfz) asks for a strong, sudden emphasis. These differ from a long crescendo. Listen for the phrase: emphasis should make a musical point, not simply make every note equally loud.", ()=>signVisual("Accent"), fact("An accent usually focuses attention on…","One note",["One note","Every later measure","The tempo only"],"An accent gives a particular note extra emphasis."))
];
const signsSteps = [
    step("Repeat a section", "An end-repeat sign sends you back to the matching start-repeat. If no start-repeat is shown, go back to the beginning. Usually play the section twice unless another instruction says otherwise. Keep the pulse moving through the repeat.", ()=>signVisual("Repeat"), ()=>signQuestion("Repeat")),
    step("Hold with a fermata", "A fermata asks you to hold a note or rest longer than its usual value. Its exact length depends on the musical context or the conductor; it does not automatically double the note. Resume the pulse together afterward.", ()=>signVisual("Fermata"), ()=>signQuestion("Fermata")),
    step("Staccato and accent", "A dot above or below the note head means staccato: play it short and detached. A dot AFTER the note is a duration dot instead. An accent looks like a small wedge and asks for emphasis, not necessarily a shorter note.", ()=>`<div class="sign-pair">${signVisual("Staccato")}${signVisual("Accent")}</div>`, ()=>signQuestion(choose(["Staccato","Accent"]))),
    step("Slur versus tie", "A slur connects a group of notes to be played smoothly. A tie connects two notes of the same pitch into one continuous sound. Follow the pitches and the context, not just the curved shape, to tell them apart.", ()=>signVisual("Slur"), fact("A curve connects different pitches. It is a…","Slur",["Slur","Tie","Rest"],"A tie joins identical pitches; a slur can connect different ones.")),
    step("Octave signs", "8va asks you to play one octave above the written notes. 8vb asks for one octave below. Continue the change through the marked line, then return to the written octave. These signs keep very high or low passages from needing many ledger lines.", ()=>'<div class="octave-line">8va ─ ─ ─ ─ ┐</div>', fact("What does 8va ask you to do?","Play one octave higher",["Play one octave higher","Play eight times","Play twice as fast"],"8va changes pitch by an octave, not duration or tempo."))
];
courses.splice(0,courses.length,
    {title:"Treble Clef",description:"Start here: piano keys, the staff and your first notes.",sections:trebleSteps},
    {title:"Bass Clef",description:"Find lower notes and connect both clefs.",sections:bassSteps},
    {title:"Rhythm",description:"Note shapes, lengths, dots and ties.",sections:rhythmSteps},
    {title:"Rests",description:"Read silence and keep your place.",sections:restSteps},
    {title:"Time Signatures",description:"Measures, counting, simple and compound time.",sections:meterSteps},
    {title:"Accidentals",description:"Half steps, sharps, flats and naturals.",sections:accidentalSteps},
    {title:"Intervals & Patterns",description:"Read steps, skips and short phrases.",sections:intervalSteps},
    {title:"Major Scales",description:"Build the pattern; explore all 12 pitch classes.",sections:scaleSteps(false)},
    {title:"Minor Scales",description:"Build the minor pattern and explore 12 scales.",sections:scaleSteps(true)},
    {title:"Key Signatures",description:"Understand all 15 signatures and their relative minors.",sections:keySteps},
    {title:"Dynamics",description:"Volume, gradual changes and emphasis.",sections:dynamicsSteps},
    {title:"Music Signs",description:"Repeats, articulation, holds and octave signs.",sections:signsSteps}
);

let lessonStep = 0;
let lastInlineQuestion = "";
let inlineGenerator = null;
let lessonPulseToken = 0;
showScreen = function(name, add = true) {
    lessonPulseToken++;
    stopCourseMotionDemo();
    originalShowScreen(name,add);
    document.querySelectorAll(".main-nav [data-go]").forEach(b=>b.setAttribute("aria-current", b.dataset.go===name || (name==="course" && b.dataset.go==="learn") ? "page":"false"));
};
openCourse = function(index) {
    selectedCourseIndex=index;
    lessonStep=0;
    showScreen("course");
    renderGuidedStep();
};
function renderGuidedStep() {
    const course=courses[selectedCourseIndex], section=course.sections[lessonStep];
    document.getElementById("course-kicker").textContent="GUIDED LESSON";
    document.getElementById("course-title").textContent=course.title;
    document.getElementById("course-summary").textContent=course.description;
    document.querySelector(".course-footer").classList.add("hidden");
    document.getElementById("course-body").innerHTML=`
        <div class="step-picker"><label for="lesson-step-select">Explore this course</label><select id="lesson-step-select">${course.sections.map((s,i)=>`<option value="${i}" ${i===lessonStep?"selected":""}>${i+1}. ${escapeHTML(s.title)}</option>`).join("")}</select></div>
        <section class="guided-step"><p class="section-label">STEP ${lessonStep+1} OF ${course.sections.length}</p><h2>${section.title}</h2><p class="teaching-copy">${section.text}</p><div class="guided-visual">${section.visual?section.visual():""}</div></section>
        <section class="inline-challenge"><p class="section-label">PUT IT INTO PRACTICE</p><div id="inline-question"></div></section>
        <div class="step-navigation"><button class="button button-secondary" id="step-prev" ${lessonStep===0?"disabled":""}>Previous step</button><button class="button button-primary" id="step-next">${lessonStep===course.sections.length-1?"Choose practice":"Next step"}</button></div>`;
    document.getElementById("lesson-step-select").onchange=e=>{lessonStep=Number(e.target.value);renderGuidedStep();};
    document.getElementById("step-prev").onclick=()=>{lessonStep--;renderGuidedStep();};
    document.getElementById("step-next").onclick=()=>{if(lessonStep===course.sections.length-1){showScreen("practice");}else{lessonStep++;renderGuidedStep();}};
    inlineGenerator=section.quiz;
    lastInlineQuestion="";
    renderInlineQuestion();
    bindDemoKeys(document.getElementById("course-body"));
    document.querySelector("[data-pulse]")?.addEventListener("click",e=>{
        const token=++lessonPulseToken,button=e.currentTarget;
        button.disabled=true;button.textContent="Playing…";
        [0,1,2,3].forEach(i=>scheduleMotionStep(()=>{if(token===lessonPulseToken){playMidiValue(i?76:84,.09,0,.1);button.textContent=String(i+1);}},i*600));
        scheduleMotionStep(()=>{button.disabled=false;button.textContent="Play four steady pulses";},2500);
    });
    window.scrollTo({top:0,behavior:"auto"});
}
function renderInlineQuestion() {
    let q=inlineGenerator();
    const generators=courses[selectedCourseIndex].sections.slice(0,lessonStep+1).map(s=>s.quiz);
    for(let n=0;n<24 && q.prompt+q.answer+q.visual===lastInlineQuestion;n++)q=choose(generators)();
    if(q.prompt+q.answer+q.visual===lastInlineQuestion){
        document.getElementById("inline-question").innerHTML='<p>You have completed this check. Continue to the next step to learn something new.</p>';
        return;
    }
    lastInlineQuestion=q.prompt+q.answer+q.visual;
    mountQuestion(document.getElementById("inline-question"),q,renderInlineQuestion);
}
function mountQuestion(target,q,next) {
    target.innerHTML=`<h3>${q.prompt}</h3><div class="question-visual">${q.visual||""}</div><div class="learning-answers">${shuffled([...new Set(q.choices)]).map(a=>`<button type="button" class="answer-option" data-answer="${escapeHTML(a)}">${escapeHTML(a)}</button>`).join("")}</div><p class="answer-explanation" aria-live="polite"></p><button type="button" class="button button-secondary another-question hidden">Another question</button>`;
    let done=false;
    target.querySelectorAll("[data-answer]").forEach(button=>button.onclick=()=>{
        if(done)return;
        const correct=button.dataset.answer===q.answer;
        button.classList.add(correct?"correct":"incorrect");
        const feedback=target.querySelector(".answer-explanation");
        feedback.textContent=correct?`Correct. ${q.explanation}`:"Not quite. Look at the example above and try again.";
        if(correct){done=true;target.querySelectorAll("[data-answer]").forEach(b=>b.disabled=true);target.querySelector(".another-question").classList.remove("hidden");}
    });
    target.querySelector(".another-question").onclick=next;
}

function intervalQuestion() {
    const start=Math.floor(Math.random()*4), distance=choose([1,2,3,4,5,6,7]);
    const ns=Array.from({length:15},(_,i)=>letters[i%7].toLowerCase()+String(4+Math.floor(i/7)));
    const names=["Unison","Second","Third","Fourth","Fifth","Sixth","Seventh","Octave"];
    return question("Name the interval number.",names[distance],names.slice(1),`Count both endpoints: ${distance+1} letter positions. This asks for the interval number, not its quality.`,staff([ns[start],ns[start+distance]],"treble","C",true));
}
function phraseQuestion(clef="treble") {
    const base=clef==="bass"?["c3","d3","e3","f3","g3"]:["c4","d4","e4","f4","g4"];
    const i=choose([0,1,2]), delta=choose([0,1,2]);
    const reverse=Math.random()<.5;
    const pair=[base[i],base[i+delta]];if(reverse)pair.reverse();
    const answer=delta===0?"Repeat":`${reverse?"Down":"Up"} a ${delta===1?"step":"skip"}`;
    return question("How does the second note move?",answer,["Repeat","Up a step","Down a step","Up a skip","Down a skip"],"A step moves to the adjacent line or space. A skip jumps over one letter.",staff(pair,clef,"C",true));
}
function buildBarQuestion() {
    const pools=[{shown:["half"],answer:"Half note",why:"Two halves equal a whole."},{shown:["half","quarter"],answer:"Quarter note",why:"A half and two quarters fill 4/4."},{shown:["quarter","quarter","quarter"],answer:"Quarter note",why:"Four quarters fill 4/4."},{shown:["half","eighth","quarter"],answer:"Eighth note",why:"A half, quarter and two eighths fill 4/4."},{shown:["half","quarter","eighth","sixteenth"],answer:"Sixteenth note",why:"An eighth and two sixteenths equal a quarter."}];
    const p=choose(pools);
    return question("Which note completes this 4/4 measure?",p.answer,["Whole note","Half note","Quarter note","Eighth note","Sixteenth note"],p.why,`<div class="bar-builder"><span class="time-signature">4<br>4</span>${rhythmSequence(p.shown)}<span class="missing-note">?</span></div>`);
}
function dynamicQuestion() {
    const entries=[["pp","Very soft"],["p","Soft"],["mp","Moderately soft"],["mf","Moderately loud"],["f","Loud"],["ff","Very loud"]];
    const [symbol,answer]=choose(entries);
    return question("What does this dynamic mean?",answer,entries.map(p=>p[1]),`${symbol} means ${answer.toLowerCase()}. Keep the tempo unchanged.`,`<div class="dynamic-row" aria-hidden="true">${symbol}</div>`);
}
function signQuestion(name=choose(["Repeat","Fermata","Staccato","Accent","Slur"])) {
    const meanings={Repeat:"Repeat the section",Fermata:"Hold longer",Staccato:"Short and detached",Accent:"Give emphasis",Slur:"Play smoothly"};
    return question("What does this sign ask you to do?",meanings[name],Object.values(meanings),`${name}: ${meanings[name].toLowerCase()}.`,`<div aria-hidden="true">${signVisual(name)}</div>`);
}

// Unlimited practice: manual next question gives time to understand feedback.
const extraPractice={patterns:{title:"Melody Patterns",description:"Read steps, skips and repeated notes.",generate:()=>phraseQuestion()},intervals:{title:"Interval Reading",description:"Recognise distances on the staff.",generate:intervalQuestion},bars:{title:"Complete the Measure",description:"Choose the missing note value.",generate:buildBarQuestion},signatures:{title:"Key Signatures",description:"Match major and relative minor keys.",generate:()=>keyQuestion()},symbols:{title:"Signs & Dynamics",description:"Turn written instructions into meaning.",generate:()=>Math.random()<.5?dynamicQuestion():signQuestion()}};
Object.entries(extraPractice).forEach(([id,exercise])=>{
    const b=document.createElement("button");b.type="button";b.className="practice-card";
    b.innerHTML=`<span class="practice-type">READING SKILLS</span><strong>${exercise.title}</strong><small>${exercise.description}</small><span class="card-link">Start →</span>`;
    b.onclick=()=>startExercise(id);document.querySelector(".practice-grid").append(b);
});
const practiceQuestionHost=document.createElement("div");practiceQuestionHost.id="extended-practice";practiceQuestionHost.className="hidden";
document.querySelector(".exercise-workspace").append(practiceQuestionHost);
let previousPracticeFingerprint="";
renderQuestion=function(){
    practiceQuestionHost.classList.add("hidden");
    document.getElementById("continue-question")?.remove();
    if(!extraPractice[activeExercise]){originalQuestionRenderer();return;}
    clearExerciseState();answerLocked=false;
    const exercise=extraPractice[activeExercise];
    document.getElementById("exercise-label").textContent="UNLIMITED PRACTICE";
    document.getElementById("exercise-title").textContent=exercise.title;
    document.getElementById("exercise-instruction").textContent="Take your time. There is no timer.";
    let q=exercise.generate();
    for(let i=0;i<20 && JSON.stringify(q)===previousPracticeFingerprint;i++)q=exercise.generate();
    previousPracticeFingerprint=JSON.stringify(q);
    practiceQuestionHost.classList.remove("hidden");mountQuestion(practiceQuestionHost,q,renderQuestion);
};
finishAnswer=function(correct,key,correctLabel){
    if(answerLocked)return;
    const feedback=document.getElementById("feedback");
    if(!correct){key?.classList.add("incorrect");feedback.textContent="Not quite. Try another answer.";feedback.className="feedback error";return;}
    answerLocked=true;key?.classList.add("correct");feedback.textContent=`Correct — ${correctLabel}.`;feedback.className="feedback success";
    const next=document.createElement("button");next.id="continue-question";next.className="button button-primary";next.textContent="Next question";next.onclick=renderQuestion;feedback.after(next);
};
let readingLevel="starter", readingInput="letters";
const setup=document.querySelector("#setup-screen .setup-panel");
const opts=document.createElement("div");opts.className="reading-settings";
opts.innerHTML='<label>Note range<select id="reading-level"><option value="starter">First five notes · white keys</option><option value="staff">Inside the staff · white keys</option><option value="full">Full range · includes sharps</option></select></label><label>Answer with<select id="reading-input"><option value="letters">Large note-name buttons</option><option value="piano">Piano keyboard · exact octave</option></select></label>';
setup.querySelector("#start-reading").before(opts);
document.getElementById("reading-level").onchange=e=>readingLevel=e.target.value;
document.getElementById("reading-input").onchange=e=>readingInput=e.target.value;
getReadingPool=function(){
    const pool=originalReadingPool();
    if(readingLevel==="full")return pool;
    return pool.filter(n=>!n.note.includes("#") && (n.clef==="bass" ? (readingLevel==="starter"?n.midi>=48&&n.midi<=55:n.midi>=43&&n.midi<=57) : (readingLevel==="starter"?n.midi>=60&&n.midi<=67:n.midi>=64&&n.midi<=77)));
};
const originalReadingRenderer=renderReadingQuestion;
renderReadingQuestion=function(){
    originalReadingRenderer();
    if(readingInput==="letters"){
        document.getElementById("piano-container").classList.add("hidden");
        document.getElementById("answer-options").classList.remove("hidden");
        document.getElementById("exercise-title").textContent="Name this note";
        document.getElementById("exercise-instruction").textContent="Choose its name. Octave numbers are not needed.";
        const options=readingLevel==="full"?["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"]:letters;
        renderNoteNameOptions(options,currentQuestion.note);
    }else document.getElementById("exercise-instruction").textContent="Choose the exact key and octave. Slide the keyboard if needed.";
};

// Preview only: nothing submits a payment or saves card details.
const beta=document.createElement("span");beta.className="beta-badge";beta.textContent="BETA";document.querySelector(".brand").append(beta);
const premiumButton=document.createElement("button");premiumButton.type="button";premiumButton.textContent="Premium";premiumButton.dataset.go="premium";
premiumButton.onclick=()=>showScreen("premium");document.querySelector(".main-nav").append(premiumButton);
const premium=document.createElement("section");premium.id="premium-screen";premium.className="screen content-screen hidden";
premium.innerHTML=`<button type="button" class="text-button back-control" id="premium-back">← Back</button><div class="page-heading"><div><p class="section-label">PREMIUM PREVIEW</p><h1>NoteGG Premium</h1><p>A look at what could come next. All current lessons and practice stay free during beta.</p></div></div><div class="premium-grid"><section class="premium-card"><h2>Free beta</h2><p class="price">Free</p><ul><li>Every current course</li><li>Unlimited practice</li><li>No account required</li></ul><button class="button button-secondary" id="premium-free">Keep practising</button></section><section class="premium-card premium-featured"><span class="beta-badge">PLANNED · NOT AVAILABLE YET</span><h2>Premium</h2><p>Proposed features—not included in this beta:</p><ul><li>Personalised practice for difficult notes and rhythms</li><li>Saved progress across devices</li><li>Generated sight-reading passages</li><li>Practice with a connected MIDI keyboard</li></ul><label>Preview plan<select id="premium-plan"><option value="monthly">Monthly · ₪12.90 / month</option><option value="annual">Annual · ₪89 / year</option></select></label><p class="fine-print">Illustrative prices. No subscription or payment will be created.</p><button class="button button-primary" id="premium-buy">Buy Premium — demo</button><p id="premium-result" role="status"></p></section></div>`;
document.querySelector("main").append(premium);screens.premium=premium;
document.getElementById("premium-back").onclick=goBack;
document.getElementById("premium-free").onclick=()=>showScreen("practice");
document.getElementById("premium-buy").onclick=()=>document.getElementById("premium-result").textContent="Preview only. Checkout is not open, and no payment has been taken. Keep using the free beta.";
document.querySelector(".brand-caption").textContent="Piano reading";
document.querySelector(".home-intro .lead").textContent="Learn one idea. Try it. Build confidence at your own pace.";
document.querySelector("#setup-screen .setup-panel > p:not(.section-label)").textContent="Start with a few notes, or choose the full range.";
document.querySelector('[data-scale-group="both"] small').textContent="30 spellings · 24 distinct scales";
document.querySelector('[data-scale-group="major"] small').textContent="15 key signatures";
document.querySelector('[data-scale-group="minor"] small').textContent="15 key signatures";
renderCourseGrid();
