const lessonsData = {
    dynamics: {
        title: "Dynamics",
        content: `
            <p>Dynamics refer to the volume of a sound or note, telling the performer how loudly or softly to play.</p>
            <div class="visual-guide-box">
                <div class="visual-item"><strong>ppp</strong> <span class="visual-desc">Extremely soft</span></div>
                <div class="visual-item"><strong>pp</strong> <span class="visual-desc">Very soft</span></div>
                <div class="visual-item"><strong>p</strong> <span class="visual-desc">Soft</span></div>
                <div class="visual-item"><strong>mp</strong> <span class="visual-desc">Moderately soft</span></div>
                <div class="visual-item"><strong>mf</strong> <span class="visual-desc">Moderately loud</span></div>
                <div class="visual-item"><strong>f</strong> <span class="visual-desc">Loud</span></div>
                <div class="visual-item"><strong>ff</strong> <span class="visual-desc">Very loud</span></div>
                <div class="visual-item"><strong>fff</strong> <span class="visual-desc">Extremely loud</span></div>
            </div>
            <p style="margin-top: 15px;">Gradual changes:</p>
            <div class="visual-guide-box">
                <div class="visual-item"><strong>&lt;</strong> <span class="visual-desc">Crescendo (Gradually getting louder)</span></div>
                <div class="visual-item"><strong>&gt;</strong> <span class="visual-desc">Decrescendo (Gradually getting softer)</span></div>
            </div>
        `
    },
    length: {
        title: "Length of the Notes",
        content: `
            <p>Note values determine how long a note is played relative to other notes. Here is what each note and rest looks like:</p>
            <div class="visual-guide-box">
                <div class="visual-item">
                    <span class="note-symbol">𝅝</span>
                    <div><strong>Whole Note</strong><br><span class="visual-desc">Lasts for 4 beats</span></div>
                </div>
                <div class="visual-item">
                    <span class="note-symbol">𝄻</span>
                    <div><strong>Whole Rest</strong><br><span class="visual-desc">4 beats of silence</span></div>
                </div>
                <div class="visual-item">
                    <span class="note-symbol">𝅗𝅥</span>
                    <div><strong>Half Note</strong><br><span class="visual-desc">Lasts for 2 beats</span></div>
                </div>
                <div class="visual-item">
                    <span class="note-symbol">𝄼</span>
                    <div><strong>Half Rest</strong><br><span class="visual-desc">2 beats of silence</span></div>
                </div>
                <div class="visual-item">
                    <span class="note-symbol">♩</span>
                    <div><strong>Quarter Note</strong><br><span class="visual-desc">Lasts for 1 beat</span></div>
                </div>
                <div class="visual-item">
                    <span class="note-symbol">𝄽</span>
                    <div><strong>Quarter Rest</strong><br><span class="visual-desc">1 beat of silence</span></div>
                </div>
                <div class="visual-item">
                    <span class="note-symbol">♪</span>
                    <div><strong>Eighth Note</strong><br><span class="visual-desc">Lasts for 1/2 beat</span></div>
                </div>
                <div class="visual-item">
                    <span class="note-symbol">𝄾</span>
                    <div><strong>Eighth Rest</strong><br><span class="visual-desc">1/2 beat of silence</span></div>
                </div>
                <div class="visual-item">
                    <span class="note-symbol">𝉆</span>
                    <div><strong>Sixteenth Note</strong><br><span class="visual-desc">Lasts for 1/4 beat</span></div>
                </div>
                <div class="visual-item">
                    <span class="note-symbol">𝄿</span>
                    <div><strong>Sixteenth Rest</strong><br><span class="visual-desc">1/4 beat of silence</span></div>
                </div>
            </div>
        `
    },
    signs: {
        title: "Signs of Music",
        content: `
            <p>Musical signs and symbols provide instructions for reading and interpreting a score:</p>
            <div class="visual-guide-box">
                <div class="visual-item">
                    <span class="note-symbol">𝄞</span>
                    <div><strong>Treble Clef</strong><br><span class="visual-desc">Defines higher pitch ranges</span></div>
                </div>
                <div class="visual-item">
                    <span class="note-symbol">𝄢</span>
                    <div><strong>Bass Clef</strong><br><span class="visual-desc">Defines lower pitch ranges</span></div>
                </div>
                <div class="visual-item">
                    <span class="note-symbol">♯</span>
                    <div><strong>Sharp</strong><br><span class="visual-desc">Raises a pitch by a half step</span></div>
                </div>
                <div class="visual-item">
                    <span class="note-symbol">♭</span>
                    <div><strong>Flat</strong><br><span class="visual-desc">Lowers a pitch by a half step</span></div>
                </div>
                <div class="visual-item">
                    <span class="note-symbol">♮</span>
                    <div><strong>Natural</strong><br><span class="visual-desc">Cancels a sharp or flat</span></div>
                </div>
                <div class="visual-item">
                    <span class="note-symbol">𝄴</span>
                    <div><strong>Time Signature</strong><br><span class="visual-desc">Indicates meter (e.g., 4/4 beats)</span></div>
                </div>
            </div>
        `
    }
};

const trebleNotes = [
    { note: "C", vNote: "c4", clef: "treble", octave: 4 },
    { note: "C#", vNote: "c#4", clef: "treble", octave: 4 },
    { note: "D", vNote: "d4", clef: "treble", octave: 4 },
    { note: "D#", vNote: "d#4", clef: "treble", octave: 4 },
    { note: "E", vNote: "e4", clef: "treble", octave: 4 },
    { note: "F", vNote: "f4", clef: "treble", octave: 4 },
    { note: "F#", vNote: "f#4", clef: "treble", octave: 4 },
    { note: "G", vNote: "g4", clef: "treble", octave: 4 },
    { note: "G#", vNote: "g#4", clef: "treble", octave: 4 },
    { note: "A", vNote: "a4", clef: "treble", octave: 4 },
    { note: "A#", vNote: "a#4", clef: "treble", octave: 4 },
    { note: "B", vNote: "b4", clef: "treble", octave: 4 },
    { note: "C", vNote: "c5", clef: "treble", octave: 5 },
    { note: "C#", vNote: "c#5", clef: "treble", octave: 5 },
    { note: "D", vNote: "d5", clef: "treble", octave: 5 },
    { note: "D#", vNote: "d#5", clef: "treble", octave: 5 },
    { note: "E", vNote: "e5", clef: "treble", octave: 5 },
    { note: "F", vNote: "f5", clef: "treble", octave: 5 },
    { note: "F#", vNote: "f#5", clef: "treble", octave: 5 },
    { note: "G", vNote: "g5", clef: "treble", octave: 5 },
    { note: "G#", vNote: "g#5", clef: "treble", octave: 5 },
    { note: "A", vNote: "a5", clef: "treble", octave: 5 },
    { note: "A#", vNote: "a#5", clef: "treble", octave: 5 },
    { note: "B", vNote: "b5", clef: "treble", octave: 5 },
    { note: "C", vNote: "c6", clef: "treble", octave: 6 }
];

const bassNotes = [
    { note: "C", vNote: "c2", clef: "bass", octave: 2 },
    { note: "C#", vNote: "c#2", clef: "bass", octave: 2 },
    { note: "D", vNote: "d2", clef: "bass", octave: 2 },
    { note: "D#", vNote: "d#2", clef: "bass", octave: 2 },
    { note: "E", vNote: "e2", clef: "bass", octave: 2 },
    { note: "F", vNote: "f2", clef: "bass", octave: 2 },
    { note: "F#", vNote: "f#2", clef: "bass", octave: 2 },
    { note: "G", vNote: "g2", clef: "bass", octave: 2 },
    { note: "G#", vNote: "g#2", clef: "bass", octave: 2 },
    { note: "A", vNote: "a2", clef: "bass", octave: 2 },
    { note: "A#", vNote: "a#2", clef: "bass", octave: 2 },
    { note: "B", vNote: "b2", clef: "bass", octave: 2 },
    { note: "C", vNote: "c3", clef: "bass", octave: 3 },
    { note: "C#", vNote: "c#3", clef: "bass", octave: 3 },
    { note: "D", vNote: "d3", clef: "bass", octave: 3 },
    { note: "D#", vNote: "d#3", clef: "bass", octave: 3 },
    { note: "E", vNote: "e3", clef: "bass", octave: 3 },
    { note: "F", vNote: "f3", clef: "bass", octave: 3 },
    { note: "F#", vNote: "f#3", clef: "bass", octave: 3 },
    { note: "G", vNote: "g3", clef: "bass", octave: 3 },
    { note: "G#", vNote: "g#3", clef: "bass", octave: 3 },
    { note: "A", vNote: "a3", clef: "bass", octave: 3 },
    { note: "A#", vNote: "a#3", clef: "bass", octave: 3 },
    { note: "B", vNote: "b3", clef: "bass", octave: 3 },
    { note: "C", vNote: "c4", clef: "bass", octave: 4 }
];

const fullNotePool = [...trebleNotes, ...bassNotes];

const allScales = [
    { name: "C Major Scale", type: "major", clef: "treble", notes: [{note:"C", vNote:"c4", octave:4}, {note:"D", vNote:"d4", octave:4}, {note:"E", vNote:"e4", octave:4}, {note:"F", vNote:"f4", octave:4}, {note:"G", vNote:"g4", octave:4}, {note:"A", vNote:"a4", octave:4}, {note:"B", vNote:"b4", octave:4}, {note:"C", vNote:"c5", octave:5}] },
    { name: "G Major Scale", type: "major", clef: "treble", notes: [{note:"G", vNote:"g4", octave:4}, {note:"A", vNote:"a4", octave:4}, {note:"B", vNote:"b4", octave:4}, {note:"C", vNote:"c5", octave:5}, {note:"D", vNote:"d5", octave:5}, {note:"E", vNote:"e5", octave:5}, {note:"F#", vNote:"f#5", octave:5}, {note:"G", vNote:"g5", octave:5}] },
    { name: "D Major Scale", type: "major", clef: "treble", notes: [{note:"D", vNote:"d4", octave:4}, {note:"E", vNote:"e4", octave:4}, {note:"F#", vNote:"f#4", octave:4}, {note:"G", vNote:"g4", octave:4}, {note:"A", vNote:"a4", octave:4}, {note:"B", vNote:"b4", octave:4}, {note:"C#", vNote:"c#5", octave:5}, {note:"D", vNote:"d5", octave:5}] },
    { name: "A Major Scale", type: "major", clef: "treble", notes: [{note:"A", vNote:"a4", octave:4}, {note:"B", vNote:"b4", octave:4}, {note:"C#", vNote:"c#5", octave:5}, {note:"D", vNote:"d5", octave:5}, {note:"E", vNote:"e5", octave:5}, {note:"F#", vNote:"f#5", octave:5}, {note:"G#", vNote:"g#5", octave:5}, {note:"A", vNote:"a5", octave:5}] },
    { name: "E Major Scale", type: "major", clef: "treble", notes: [{note:"E", vNote:"e4", octave:4}, {note:"F#", vNote:"f#4", octave:4}, {note:"G#", vNote:"g#4", octave:4}, {note:"A", vNote:"a4", octave:4}, {note:"B", vNote:"b4", octave:4}, {note:"C#", vNote:"c#5", octave:5}, {note:"D#", vNote:"d#5", octave:5}, {note:"E", vNote:"e5", octave:5}] },
    { name: "B Major Scale", type: "major", clef: "treble", notes: [{note:"B", vNote:"b4", octave:4}, {note:"C#", vNote:"c#5", octave:5}, {note:"D#", vNote:"d#5", octave:5}, {note:"E", vNote:"e5", octave:5}, {note:"F#", vNote:"f#5", octave:5}, {note:"G#", vNote:"g#5", octave:5}, {note:"A#", vNote:"a#5", octave:5}, {note:"B", vNote:"b5", octave:5}] },
    { name: "F# Major Scale", type: "major", clef: "treble", notes: [{note:"F#", vNote:"f#4", octave:4}, {note:"G#", vNote:"g#4", octave:4}, {note:"A#", vNote:"a#4", octave:4}, {note:"B", vNote:"b4", octave:4}, {note:"C#", vNote:"c#5", octave:5}, {note:"D#", vNote:"d#5", octave:5}, {note:"F", vNote:"f5", octave:5}, {note:"F#", vNote:"f#5", octave:5}] },
    { name: "F Major Scale", type: "major", clef: "treble", notes: [{note:"F", vNote:"f4", octave:4}, {note:"G", vNote:"g4", octave:4}, {note:"A", vNote:"a4", octave:4}, {note:"A#", vNote:"a#4", octave:4}, {note:"C", vNote:"c5", octave:5}, {note:"D", vNote:"d5", octave:5}, {note:"E", vNote:"e5", octave:5}, {note:"F", vNote:"f5", octave:5}] },
    { name: "Bb Major Scale", type: "major", clef: "treble", notes: [{note:"A#", vNote:"a#4", octave:4}, {note:"C", vNote:"c5", octave:5}, {note:"D", vNote:"d5", octave:5}, {note:"D#", vNote:"d#5", octave:5}, {note:"F", vNote:"f5", octave:5}, {note:"G", vNote:"g5", octave:5}, {note:"A", vNote:"a5", octave:5}, {note:"A#", vNote:"a#5", octave:5}] },
    { name: "Eb Major Scale", type: "major", clef: "treble", notes: [{note:"D#", vNote:"d#4", octave:4}, {note:"F", vNote:"f4", octave:4}, {note:"G", vNote:"g4", octave:4}, {note:"G#", vNote:"g#4", octave:4}, {note:"A#", vNote:"a#4", octave:4}, {note:"C", vNote:"c5", octave:5}, {note:"D", vNote:"d5", octave:5}, {note:"D#", vNote:"d#5", octave:5}] },
    { name: "Ab Major Scale", type: "major", clef: "treble", notes: [{note:"G#", vNote:"g#4", octave:4}, {note:"A#", vNote:"a#4", octave:4}, {note:"C", vNote:"c5", octave:5}, {note:"C#", vNote:"c#5", octave:5}, {note:"D#", vNote:"d#5", octave:5}, {note:"F", vNote:"f5", octave:5}, {note:"G", vNote:"g5", octave:5}, {note:"G#", vNote:"g#5", octave:5}] },
    { name: "Db Major Scale", type: "major", clef: "treble", notes: [{note:"C#", vNote:"c#4", octave:4}, {note:"D#", vNote:"d#4", octave:4}, {note:"F", vNote:"f4", octave:4}, {note:"F#", vNote:"f#4", octave:4}, {note:"G#", vNote:"g#4", octave:4}, {note:"A#", vNote:"a#4", octave:4}, {note:"C", vNote:"c5", octave:5}, {note:"C#", vNote:"c#5", octave:5}] },

    { name: "A Minor Scale", type: "minor", clef: "treble", notes: [{note:"A", vNote:"a4", octave:4}, {note:"B", vNote:"b4", octave:4}, {note:"C", vNote:"c5", octave:5}, {note:"D", vNote:"d5", octave:5}, {note:"E", vNote:"e5", octave:5}, {note:"F", vNote:"f5", octave:5}, {note:"G", vNote:"g5", octave:5}, {note:"A", vNote:"a5", octave:5}] },
    { name: "E Minor Scale", type: "minor", clef: "treble", notes: [{note:"E", vNote:"e4", octave:4}, {note:"F#", vNote:"f#4", octave:4}, {note:"G", vNote:"g4", octave:4}, {note:"A", vNote:"a4", octave:4}, {note:"B", vNote:"b4", octave:4}, {note:"C", vNote:"c5", octave:5}, {note:"D", vNote:"d5", octave:5}, {note:"E", vNote:"e5", octave:5}] },
    { name: "B Minor Scale", type: "minor", clef: "treble", notes: [{note:"B", vNote:"b4", octave:4}, {note:"C#", vNote:"c#5", octave:5}, {note:"D", vNote:"d5", octave:5}, {note:"E", vNote:"e5", octave:5}, {note:"F#", vNote:"f#5", octave:5}, {note:"G", vNote:"g5", octave:5}, {note:"A", vNote:"a5", octave:5}, {note:"B", vNote:"b5", octave:5}] },
    { name: "F# Minor Scale", type: "minor", clef: "treble", notes: [{note:"F#", vNote:"f#4", octave:4}, {note:"G#", vNote:"g#4", octave:4}, {note:"A", vNote:"a4", octave:4}, {note:"B", vNote:"b4", octave:4}, {note:"C#", vNote:"c#5", octave:5}, {note:"D", vNote:"d5", octave:5}, {note:"E", vNote:"e5", octave:5}, {note:"F#", vNote:"f#5", octave:5}] },
    { name: "C# Minor Scale", type: "minor", clef: "treble", notes: [{note:"C#", vNote:"c#4", octave:4}, {note:"D#", vNote:"d#4", octave:4}, {note:"E", vNote:"e4", octave:4}, {note:"F#", vNote:"f#4", octave:4}, {note:"G#", vNote:"g#4", octave:4}, {note:"A", vNote:"a4", octave:4}, {note:"B", vNote:"b4", octave:4}, {note:"C#", vNote:"c#5", octave:5}] },
    { name: "G# Minor Scale", type: "minor", clef: "treble", notes: [{note:"G#", vNote:"g#4", octave:4}, {note:"A#", vNote:"a#4", octave:4}, {note:"B", vNote:"b4", octave:4}, {note:"C#", vNote:"c#5", octave:5}, {note:"D#", vNote:"d#5", octave:5}, {note:"E", vNote:"e5", octave:5}, {note:"F#", vNote:"f#5", octave:5}, {note:"G#", vNote:"g#5", octave:5}] },
    { name: "D# Minor Scale", type: "minor", clef: "treble", notes: [{note:"D#", vNote:"d#4", octave:4}, {note:"F", vNote:"f4", octave:4}, {note:"F#", vNote:"f#4", octave:4}, {note:"G#", vNote:"g#4", octave:4}, {note:"A#", vNote:"a#4", octave:4}, {note:"B", vNote:"b4", octave:4}, {note:"C#", vNote:"c#5", octave:5}, {note:"D#", vNote:"d#5", octave:5}] },
    { name: "D Minor Scale", type: "minor", clef: "treble", notes: [{note:"D", vNote:"d4", octave:4}, {note:"E", vNote:"e4", octave:4}, {note:"F", vNote:"f4", octave:4}, {note:"G", vNote:"g4", octave:4}, {note:"A", vNote:"a4", octave:4}, {note:"A#", vNote:"a#4", octave:4}, {note:"C", vNote:"c5", octave:5}, {note:"D", vNote:"d5", octave:5}] },
    { name: "G Minor Scale", type: "minor", clef: "treble", notes: [{note:"G", vNote:"g4", octave:4}, {note:"A", vNote:"a4", octave:4}, {note:"A#", vNote:"a#4", octave:4}, {note:"C", vNote:"c5", octave:5}, {note:"D", vNote:"d5", octave:5}, {note:"D#", vNote:"d#5", octave:5}, {note:"F", vNote:"f5", octave:5}, {note:"G", vNote:"g5", octave:5}] },
    { name: "C Minor Scale", type: "minor", clef: "treble", notes: [{note:"C", vNote:"c4", octave:4}, {note:"D", vNote:"d4", octave:4}, {note:"D#", vNote:"d#4", octave:4}, {note:"F", vNote:"f4", octave:4}, {note:"G", vNote:"g4", octave:4}, {note:"G#", vNote:"g#4", octave:4}, {note:"A#", vNote:"a#4", octave:4}, {note:"C", vNote:"c5", octave:5}] },
    { name: "F Minor Scale", type: "minor", clef: "treble", notes: [{note:"F", vNote:"f4", octave:4}, {note:"G", vNote:"g4", octave:4}, {note:"G#", vNote:"g#4", octave:4}, {note:"A#", vNote:"a#4", octave:4}, {note:"C", vNote:"c5", octave:5}, {note:"C#", vNote:"c#5", octave:5}, {note:"D#", vNote:"d#5", octave:5}, {note:"F", vNote:"f5", octave:5}] },
    { name: "Bb Minor Scale", type: "minor", clef: "treble", notes: [{note:"A#", vNote:"a#4", octave:4}, {note:"C", vNote:"c5", octave:5}, {note:"C#", vNote:"c#5", octave:5}, {note:"D#", vNote:"d#5", octave:5}, {note:"F", vNote:"f5", octave:5}, {note:"F#", vNote:"f#5", octave:5}, {note:"G#", vNote:"g#5", octave:5}, {note:"A#", vNote:"a#5", octave:5}] }
];

let activeNotePool = [];
let currentQuestion = {};
let currentScale = null;
let scaleIndex = 0;
let scaleStage = 1; 
let score = 0;
let streak = 0;
let timeLeft = 60;
let timerInterval = null;
let isPlaying = false;
let selectedGameMode = "timeAttack";
let selectedClefMode = "treble";
let selectedScaleName = "random";

function renderKeyboard(clefMode) {
    const whiteContainer = document.getElementById("white-keys-container");
    const blackContainer = document.getElementById("black-keys-container");
    whiteContainer.innerHTML = "";
    blackContainer.innerHTML = "";

    let octaves = clefMode === "bass" ? [2, 3] : [4, 5];
    const noteNames = ["C", "D", "E", "F", "G", "A", "B"];
    let whiteKeysConfig = [];

    octaves.forEach(oct => {
        noteNames.forEach(n => {
            whiteKeysConfig.push({ n: n, o: oct });
        });
    });
    const finalOctave = octaves[octaves.length - 1] + 1;
    whiteKeysConfig.push({ n: "C", o: finalOctave });

    const totalWhite = whiteKeysConfig.length;
    const blackKeyWidthPercent = (100 / totalWhite) * 0.65;

    whiteKeysConfig.forEach((k) => {
        const div = document.createElement("div");
        div.className = "key white";
        div.setAttribute("data-note", k.n);
        div.setAttribute("data-octave", k.o);
        div.innerText = k.n;
        div.addEventListener("click", () => checkAnswer(k.n, k.o, div));
        whiteContainer.appendChild(div);
    });

    const blackOffsets = [0, 1, 3, 4, 5];
    const sharpNames = ["C#", "D#", "F#", "G#", "A#"];

    octaves.forEach((oct, octIdx) => {
        const baseWhiteIndex = octIdx * 7;
        blackOffsets.forEach((offset, bIdx) => {
            const whiteIdx = baseWhiteIndex + offset;
            const sharpName = sharpNames[bIdx];
            const leftPercent = ((whiteIdx + 1) * (100 / totalWhite)) - (blackKeyWidthPercent / 2);

            const div = document.createElement("div");
            div.className = "key black";
            div.setAttribute("data-note", sharpName);
            div.setAttribute("data-octave", oct);
            div.style.left = leftPercent + "%";
            div.style.width = blackKeyWidthPercent + "%";
            div.innerText = sharpName;
            div.addEventListener("click", () => checkAnswer(sharpName, oct, div));
            blackContainer.appendChild(div);
        });
    });
}

function drawStaff(clef, noteString) {
    const container = document.getElementById("staff-container");
    container.innerHTML = "";

    const vf = new VexFlow.Factory({
        renderer: { elementId: container, width: 240, height: 130 }
    });

    const scoreTool = vf.EasyScore();
    const system = vf.System();

    system.addStave({
        voices: [
            scoreTool.voice(scoreTool.notes(noteString + "/w", { clef: clef }))
        ]
    }).addClef(clef).addTimeSignature("4/4");

    vf.draw();
}

function loadNewQuestion() {
    if (!isPlaying) return;
    const randomIndex = Math.floor(Math.random() * activeNotePool.length);
    currentQuestion = activeNotePool[randomIndex];

    drawStaff(currentQuestion.clef, currentQuestion.vNote);
    document.getElementById("question-box").innerText = "Identify note:";
}

function loadNewScale() {
    if (!isPlaying) return;
    
    if (selectedScaleName === "random") {
        const randomIndex = Math.floor(Math.random() * allScales.length);
        currentScale = allScales[randomIndex];
    } else {
        currentScale = allScales.find(s => s.name === selectedScaleName) || allScales[0];
    }
    
    scaleIndex = 0;
    scaleStage = 1;

    runScaleStage();
}

function runScaleStage() {
    if (!isPlaying) return;
    const questionBox = document.getElementById("question-box");

    if (scaleStage === 1) {
        questionBox.style.color = "";
        questionBox.innerText = `Demo: ${currentScale.name} (${scaleIndex + 1}/${currentScale.notes.length})`;
        const target = currentScale.notes[scaleIndex];
        drawStaff(currentScale.clef, target.vNote);

        highlightKeyOnPiano(target.note, target.octave);

        setTimeout(() => {
            if (!isPlaying) return;
            clearPianoHighlights();
            scaleIndex++;
            if (scaleIndex < currentScale.notes.length) {
                runScaleStage();
            } else {
                scaleIndex = 0;
                scaleStage = 2;
                questionBox.innerText = `Play: ${currentScale.name}`;
                const nextTarget = currentScale.notes[scaleIndex];
                drawStaff(currentScale.clef, nextTarget.vNote);
            }
        }, 800);
    } else if (scaleStage === 2) {
        const target = currentScale.notes[scaleIndex];
        drawStaff(currentScale.clef, target.vNote);
        questionBox.innerText = `Play: ${target.note}`;
    } else if (scaleStage === 3) {
        questionBox.innerText = `Memory: ${currentScale.name} (${scaleIndex + 1}/${currentScale.notes.length})`;
        document.getElementById("staff-container").innerHTML = "<div style='color:#666; font-style:italic; padding:30px;'>Staff hidden</div>";
    }
}

function highlightKeyOnPiano(noteName, octave) {
    const keys = document.querySelectorAll(".key");
    keys.forEach(k => {
        if (k.getAttribute("data-note") === noteName && parseInt(k.getAttribute("data-octave")) === octave) {
            k.style.background = "#2196F3";
        }
    });
}

function clearPianoHighlights() {
    const keys = document.querySelectorAll(".key");
    keys.forEach(k => {
        k.style.background = "";
    });
}

function startGame() {
    score = 0;
    streak = 0;
    timeLeft = 60;
    isPlaying = true;
    
    document.getElementById("score").innerText = score;
    document.getElementById("restart-btn").classList.add("hidden");
    
    const timerWrapper = document.getElementById("timer-wrapper");
    if (selectedGameMode === "timeAttack") {
        timerWrapper.style.display = "inline";
        document.getElementById("timer").innerText = timeLeft;
    } else {
        timerWrapper.style.display = "none";
    }
    
    renderKeyboard(selectedClefMode);

    document.getElementById("clef-menu-container").classList.add("hidden");
    document.getElementById("scales-menu-container").classList.add("hidden");
    document.getElementById("major-menu-container").classList.add("hidden");
    document.getElementById("minor-menu-container").classList.add("hidden");
    document.getElementById("game-container").classList.remove("hidden");
    
    if (selectedGameMode === "scales") {
        loadNewScale();
    } else {
        loadNewQuestion();
    }
    
    clearInterval(timerInterval);
    if (selectedGameMode === "timeAttack") {
        timerInterval = setInterval(() => {
            timeLeft--;
            document.getElementById("timer").innerText = timeLeft;
            
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                isPlaying = false;
                clearPianoHighlights();
                endGame();
            }
        }, 1000);
    }
}

function endGame() {
    const questionBox = document.getElementById("question-box");
    questionBox.innerHTML = `Finished. Score: <strong>${score}</strong>`;
    clearPianoHighlights();
    
    const bestScore = localStorage.getItem("noteGG_best") || 0;
    if (score > bestScore) {
        localStorage.setItem("noteGG_best", score);
        questionBox.innerHTML += ` (New Best)`;
    } else {
        questionBox.innerHTML += ` (Best: ${bestScore})`;
    }

    document.getElementById("restart-btn").classList.remove("hidden");
    document.getElementById("staff-container").innerHTML = "";
}

function checkScaleAnswer(selectedKey, selectedOctave, keyElement) {
    if (scaleStage === 1) return;

    const target = currentScale.notes[scaleIndex];
    const questionBox = document.getElementById("question-box");
    const isLastNoteOfScale = (scaleIndex === currentScale.notes.length - 1);

    if (selectedKey === target.note && selectedOctave === target.octave) {
        keyElement.style.background = "#4CAF50";
        questionBox.style.color = "#4CAF50";
        score += 10;
        document.getElementById("score").innerText = score;
        
        scaleIndex++;
        if (scaleIndex >= currentScale.notes.length) {
            setTimeout(() => {
                if (!(scaleStage === 3 && isLastNoteOfScale)) {
                    clearPianoHighlights();
                }
                questionBox.style.color = "";
                
                if (scaleStage === 2) {
                    scaleStage = 3;
                    scaleIndex = 0;
                    questionBox.innerText = `Starting memory mode for ${currentScale.name}.`;
                    setTimeout(() => runScaleStage(), 1500);
                } else if (scaleStage === 3) {
                    score += 100;
                    document.getElementById("score").innerText = `Mastered: ${currentScale.name}`;
                    setTimeout(() => {
                        if (!isPlaying) return;
                        clearPianoHighlights();
                        loadNewScale();
                    }, 1500);
                }
            }, 300);
        } else {
            const nextTarget = currentScale.notes[scaleIndex];
            if (scaleStage === 2) {
                questionBox.innerText = `Next: ${nextTarget.note}`;
                drawStaff(currentScale.clef, nextTarget.vNote);
            } else {
                runScaleStage();
            }
            
            setTimeout(() => {
                if (!isPlaying) return;
                keyElement.style.background = "";
                questionBox.style.color = "";
            }, 300);
        }
    } else {
        keyElement.style.background = "#f44336";
        questionBox.style.color = "#f44336";
        questionBox.innerText = `Incorrect. Expected ${target.note}.`;
        
        scaleIndex = 0;
        setTimeout(() => {
            if (!isPlaying) return;
            clearPianoHighlights();
            keyElement.style.background = "";
            questionBox.style.color = "";
            runScaleStage();
        }, 800);
    }
}

function checkAnswer(selectedKey, selectedOctave, keyElement) {
    if (!isPlaying) return;
    
    if (selectedGameMode === "scales") {
        checkScaleAnswer(selectedKey, selectedOctave, keyElement);
        return;
    }
    
    const questionBox = document.getElementById("question-box");
    
    if (selectedKey === currentQuestion.note && selectedOctave === currentQuestion.octave) {
        streak++;
        score += (streak >= 3 ? 15 : 10);
        
        document.getElementById("score").innerText = score;
        
        keyElement.style.background = "#4CAF50";
        questionBox.style.color = "#4CAF50";
        questionBox.innerText = "Correct";
    } else {
        streak = 0;
        keyElement.style.background = "#f44336";
        questionBox.style.color = "#f44336";
        questionBox.innerText = `Incorrect. Was ${currentQuestion.note}`;
    }
    
    setTimeout(() => {
        if (!isPlaying) return;
        keyElement.style.background = "";
        questionBox.style.color = "";
        loadNewQuestion();
    }, 400);
}

function populateScaleMenus() {
    const majorGrid = document.getElementById("major-scales-grid");
    const minorGrid = document.getElementById("minor-scales-grid");
    majorGrid.innerHTML = "";
    minorGrid.innerHTML = "";

    allScales.forEach(scale => {
        const btn = document.createElement("button");
        btn.className = "scale-select-btn menu-btn";
        btn.innerText = scale.name.replace(" Scale", "");
        btn.setAttribute("data-scale", scale.name);
        
        btn.addEventListener("click", () => {
            selectedGameMode = "scales";
            selectedScaleName = scale.name;
            selectedClefMode = scale.clef;
            startGame();
        });

        if (scale.type === "major") {
            majorGrid.appendChild(btn);
        } else {
            minorGrid.appendChild(btn);
        }
    });
}

window.onload = () => {
    populateScaleMenus();

    const menuContainer = document.getElementById("menu-container");
    const lessonsMenuContainer = document.getElementById("lessons-menu-container");
    const lessonContentContainer = document.getElementById("lesson-content-container");
    const exercisesMenuContainer = document.getElementById("exercises-menu-container");
    const modeMenuContainer = document.getElementById("mode-menu-container");
    const scalesMenuContainer = document.getElementById("scales-menu-container");
    const majorMenuContainer = document.getElementById("major-menu-container");
    const minorMenuContainer = document.getElementById("minor-menu-container");
    const clefMenuContainer = document.getElementById("clef-menu-container");
    const gameContainer = document.getElementById("game-container");
    
    const gotoLessonsMenuBtn = document.getElementById("goto-lessons-menu");
    const gotoExercisesMenuBtn = document.getElementById("goto-exercises-menu");
    const gotoSightReadingBtn = document.getElementById("goto-sight-reading");
    const gotoScalesMenuBtn = document.getElementById("goto-scales-menu");
    const gotoMajorMenuBtn = document.getElementById("goto-major-menu");
    const gotoMinorMenuBtn = document.getElementById("goto-minor-menu");
    
    const backToMainFromLessonsBtn = document.getElementById("back-to-main-from-lessons");
    const backToLessonsMenuBtn = document.getElementById("back-to-lessons-menu");
    const backToMainFromExercisesBtn = document.getElementById("back-to-main-from-exercises");
    const backToExercisesFromModeBtn = document.getElementById("back-to-exercises");
    const backToExercisesFromScalesBtn = document.getElementById("back-to-exercises-from-scales");
    const backToScalesMainBtn = document.getElementById("back-to-scales-main");
    const backToScalesMainMinorBtn = document.getElementById("back-to-scales-main-minor");
    const backToModeBtn = document.getElementById("back-to-mode");
    const backToClefMenuBtn = document.getElementById("back-to-clef-menu");
    
    const lessonSelectBtns = document.querySelectorAll(".lesson-select-btn");
    const modeSelectBtns = document.querySelectorAll(".mode-select-btn");
    const clefSelectBtns = document.querySelectorAll(".clef-select-btn");
    const restartBtn = document.getElementById("restart-btn");

    gotoLessonsMenuBtn.addEventListener("click", () => {
        menuContainer.classList.add("hidden");
        lessonsMenuContainer.classList.remove("hidden");
    });

    lessonSelectBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const lessonKey = btn.getAttribute("data-lesson");
            const lesson = lessonsData[lessonKey];
            if (lesson) {
                document.getElementById("lesson-title").innerText = lesson.title;
                document.getElementById("lesson-body").innerHTML = lesson.content;
                lessonsMenuContainer.classList.add("hidden");
                lessonContentContainer.classList.remove("hidden");
            }
        });
    });

    backToMainFromLessonsBtn.addEventListener("click", () => {
        lessonsMenuContainer.classList.add("hidden");
        menuContainer.classList.remove("hidden");
    });

    backToLessonsMenuBtn.addEventListener("click", () => {
        lessonContentContainer.classList.add("hidden");
        lessonsMenuContainer.classList.remove("hidden");
    });

    gotoExercisesMenuBtn.addEventListener("click", () => {
        menuContainer.classList.add("hidden");
        exercisesMenuContainer.classList.remove("hidden");
    });

    backToMainFromExercisesBtn.addEventListener("click", () => {
        exercisesMenuContainer.classList.add("hidden");
        menuContainer.classList.remove("hidden");
    });

    gotoSightReadingBtn.addEventListener("click", () => {
        exercisesMenuContainer.classList.add("hidden");
        modeMenuContainer.classList.remove("hidden");
    });

    gotoScalesMenuBtn.addEventListener("click", () => {
        exercisesMenuContainer.classList.add("hidden");
        scalesMenuContainer.classList.remove("hidden");
    });

    gotoMajorMenuBtn.addEventListener("click", () => {
        scalesMenuContainer.classList.add("hidden");
        majorMenuContainer.classList.remove("hidden");
    });

    gotoMinorMenuBtn.addEventListener("click", () => {
        scalesMenuContainer.classList.add("hidden");
        minorMenuContainer.classList.remove("hidden");
    });

    backToExercisesFromModeBtn.addEventListener("click", () => {
        modeMenuContainer.classList.add("hidden");
        exercisesMenuContainer.classList.remove("hidden");
    });

    backToExercisesFromScalesBtn.addEventListener("click", () => {
        scalesMenuContainer.classList.add("hidden");
        exercisesMenuContainer.classList.remove("hidden");
    });

    backToScalesMainBtn.addEventListener("click", () => {
        majorMenuContainer.classList.add("hidden");
        scalesMenuContainer.classList.remove("hidden");
    });

    backToScalesMainMinorBtn.addEventListener("click", () => {
        minorMenuContainer.classList.add("hidden");
        scalesMenuContainer.classList.remove("hidden");
    });

    backToModeBtn.addEventListener("click", () => {
        clefMenuContainer.classList.add("hidden");
        modeMenuContainer.classList.remove("hidden");
    });

    backToClefMenuBtn.addEventListener("click", () => {
        gameContainer.classList.add("hidden");
        if (selectedGameMode === "scales") {
            scalesMenuContainer.classList.remove("hidden");
        } else {
            clefMenuContainer.classList.remove("hidden");
        }
        isPlaying = false;
        clearInterval(timerInterval);
    });

    modeSelectBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            selectedGameMode = btn.getAttribute("data-type");
            modeMenuContainer.classList.add("hidden");
            clefMenuContainer.classList.remove("hidden");
        });
    });

    clefSelectBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            selectedClefMode = btn.getAttribute("data-mode");
            if (selectedClefMode === "both") {
                activeNotePool = fullNotePool;
            } else if (selectedClefMode === "bass") {
                activeNotePool = bassNotes;
            } else {
                activeNotePool = trebleNotes;
            }
            startGame();
        });
    });

    restartBtn.addEventListener("click", () => {
        startGame();
    });
};