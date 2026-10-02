function rhythmIcon(type) {
    const icons = {
        whole: {
            label: "Whole note",
            drawing: '<ellipse cx="30" cy="48" rx="14" ry="8" fill="none" stroke="currentColor" stroke-width="4"/>'
        },
        half: {
            label: "Half note",
            drawing: '<ellipse cx="27" cy="49" rx="13" ry="8" fill="none" stroke="currentColor" stroke-width="4" transform="rotate(-18 27 49)"/><path d="M39 47V10" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>'
        },
        quarter: {
            label: "Quarter note",
            drawing: '<ellipse cx="27" cy="49" rx="13" ry="8" fill="currentColor" transform="rotate(-18 27 49)"/><path d="M39 47V10" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>'
        },
        eighth: {
            label: "Eighth note",
            drawing: '<ellipse cx="24" cy="50" rx="12" ry="8" fill="currentColor" transform="rotate(-18 24 50)"/><path d="M35 48V10" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><path d="M35 11C50 15 51 28 39 34C45 25 43 20 35 19Z" fill="currentColor"/>'
        },
        sixteenth: {
            label: "Sixteenth note",
            drawing: '<ellipse cx="23" cy="52" rx="12" ry="8" fill="currentColor" transform="rotate(-18 23 52)"/><path d="M34 50V8" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><path d="M34 9C50 13 51 24 39 30C45 22 42 18 34 17Z" fill="currentColor"/><path d="M34 22C49 26 49 37 38 43C44 35 41 31 34 30Z" fill="currentColor"/>'
        },
        "whole-rest": {
            label: "Whole rest",
            drawing: '<path d="M9 27H51" stroke="currentColor" stroke-width="3"/><rect x="20" y="27" width="20" height="10" rx="1" fill="currentColor"/>'
        },
        "half-rest": {
            label: "Half rest",
            drawing: '<path d="M9 39H51" stroke="currentColor" stroke-width="3"/><rect x="20" y="29" width="20" height="10" rx="1" fill="currentColor"/>'
        },
        "quarter-rest": {
            label: "Quarter rest",
            drawing: '<path d="M35 7L22 25L35 36L24 48L32 61" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>'
        },
        "eighth-rest": {
            label: "Eighth rest",
            drawing: '<circle cx="22" cy="18" r="6" fill="currentColor"/><path d="M27 20C41 20 41 31 34 39L25 58" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>'
        },
        "sixteenth-rest": {
            label: "Sixteenth rest",
            drawing: '<circle cx="20" cy="15" r="5" fill="currentColor"/><circle cx="29" cy="29" r="5" fill="currentColor"/><path d="M24 17C39 18 41 29 34 38L25 59M33 31C45 32 45 42 39 49" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>'
        },
        "dotted-quarter": {
            label: "Dotted quarter note",
            drawing: '<ellipse cx="23" cy="49" rx="12" ry="8" fill="currentColor" transform="rotate(-18 23 49)"/><path d="M34 47V10" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><circle cx="48" cy="49" r="4" fill="currentColor"/>'
        },
        tie: {
            label: "Tied notes",
            drawing: '<ellipse cx="15" cy="39" rx="10" ry="6" fill="none" stroke="currentColor" stroke-width="3"/><path d="M24 38V10" stroke="currentColor" stroke-width="3"/><ellipse cx="46" cy="39" rx="10" ry="6" fill="currentColor"/><path d="M55 38V10" stroke="currentColor" stroke-width="3"/><path d="M15 52C24 63 38 63 47 52" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>'
        }
    };

    const icon = icons[type];
    if (!icon) return "";

    return `<svg class="rhythm-svg" viewBox="0 0 60 70" role="img" aria-label="${icon.label}" focusable="false" style="color:#13213c">${icon.drawing}</svg>`;
}

function rhythmSequence(items) {
    return `<span class="rhythm-sequence">${items.map(item =>
        ["+", "="].includes(item)
            ? `<span class="rhythm-operator">${item}</span>`
            : rhythmIcon(item)
    ).join("")}</span>`;
}

const courses = [
    {
        title: "Treble Clef",
        description: "Read notes from A3 to C6.",
        summary: "Find middle C, then use G as a landmark.",
        takeaway: "Find G, then count by letter.",
        sections: [
            {
                title: "What the treble clef shows",
                text: "Treble clef is used for higher notes.",
                visual: { type: "notes", clef: "treble", notes: ["c4", "g4", "c5"], caption: "Notes rise as they move higher on the staff" }
            },
            {
                title: "Find middle C on the keyboard",
                text: "Middle C is left of the two black keys near the centre.",
                visual: { type: "keyboard", caption: "Every white and black key has a note name" }
            },
            {
                title: "Middle C on the staff",
                text: "Middle C sits on a short line below the staff.",
                visual: { type: "notes", clef: "treble", notes: ["c4"], caption: "C4 — middle C" }
            },
            {
                title: "Follow the musical alphabet",
                text: "White keys repeat A to G. Move right to go higher.",
                chips: [["A B C D E F G", "White-key note names"], ["♯ / ♭", "Black keys use sharp or flat names"]]
            },
            {
                title: "The G landmark",
                text: "The treble clef circles the G line.",
                visual: { type: "notes", clef: "treble", notes: ["g4"], caption: "G4 — second line" }
            },
            {
                title: "Lines",
                text: "Treble lines: E, G, B, D, F.",
                visual: { type: "notes", clef: "treble", notes: ["e4", "g4", "b4", "d5", "f5"], caption: "E G B D F — treble lines" },
                chips: [["E G B D F", "Bottom line to top line"]]
            },
            {
                title: "Spaces",
                text: "Treble spaces: F, A, C, E.",
                visual: { type: "notes", clef: "treble", notes: ["f4", "a4", "c5", "e5"], caption: "F A C E — treble spaces" },
                chips: [["F A C E", "Bottom space to top space"]]
            },
            {
                title: "Complete treble range",
                text: "Practice range: A3 to C6.",
                visual: {
                    type: "range",
                    clef: "treble",
                    notes: ["a3", "b3", "c4", "d4", "e4", "f4", "g4", "a4", "b4", "c5", "d5", "e5", "f5", "g5", "a5", "b5", "c6"],
                    caption: "A3 → C6 — complete treble practice range"
                }
            }
        ]
    },
    {
        title: "Bass Clef",
        description: "Read notes from C2 to E4.",
        summary: "Find middle C, then use F as a landmark.",
        takeaway: "Find F, then count by letter.",
        sections: [
            {
                title: "What the bass clef shows",
                text: "Bass clef is used for lower notes.",
                visual: { type: "notes", clef: "bass", notes: ["c4", "f3", "c3"], caption: "Lower notes sit lower on the staff" }
            },
            {
                title: "Find middle C on the keyboard",
                text: "Find middle C, then move left for lower notes.",
                visual: { type: "keyboard", caption: "Move left from middle C to reach lower notes" }
            },
            {
                title: "Middle C on the staff",
                text: "Middle C sits on a short line above the staff.",
                visual: { type: "notes", clef: "bass", notes: ["c4"], caption: "C4 — middle C" }
            },
            {
                title: "Move down the keyboard",
                text: "Move left: C, B, A, G, F, E, D, C.",
                chips: [["C B A G F E D C", "Move left toward lower notes"], ["♯ / ♭", "Black keys use sharp or flat names"]]
            },
            {
                title: "The F landmark",
                text: "The bass-clef dots surround the F line.",
                visual: { type: "notes", clef: "bass", notes: ["f3"], caption: "F3 — fourth line" }
            },
            {
                title: "Lines",
                text: "Bass lines: G, B, D, F, A.",
                visual: { type: "notes", clef: "bass", notes: ["g2", "b2", "d3", "f3", "a3"], caption: "G B D F A — bass lines" },
                chips: [["G B D F A", "Bottom line to top line"]]
            },
            {
                title: "Spaces",
                text: "Bass spaces: A, C, E, G.",
                visual: { type: "notes", clef: "bass", notes: ["a2", "c3", "e3", "g3"], caption: "A C E G — bass spaces" },
                chips: [["A C E G", "Bottom space to top space"]]
            },
            {
                title: "Complete bass range",
                text: "Practice range: C2 to E4.",
                visual: {
                    type: "range",
                    clef: "bass",
                    notes: ["c2", "d2", "e2", "f2", "g2", "a2", "b2", "c3", "d3", "e3", "f3", "g3", "a3", "b3", "c4", "d4", "e4"],
                    caption: "C2 → E4 — complete bass practice range"
                }
            }
        ]
    },
    {
        title: "Rhythm",
        description: "Learn note lengths and rests.",
        summary: "Rhythm controls when sounds and silences happen.",
        takeaway: "Use the quarter note as one beat in 4/4.",
        sections: [
            {
                title: "Pulse and beat",
                text: "The beat is the steady pulse of music.",
                chips: [[rhythmSequence(["quarter", "quarter", "quarter", "quarter"]), "Count evenly: 1 2 3 4"]]
            },
            {
                title: "Measures and bar lines",
                text: "Bar lines divide music into measures.",
                example: "bar line  |  one measure  |  bar line"
            },
            {
                title: "Time signatures",
                text: "The top number shows the beats in each measure.",
                chips: [["4/4", "Four beats"], ["3/4", "Three beats"], ["2/4", "Two beats"]]
            },
            {
                title: "Whole and half notes",
                text: "Whole note: 4 beats. Half note: 2 beats.",
                chips: [[rhythmIcon("whole"), "Whole note — 4 beats"], [rhythmIcon("half"), "Half note — 2 beats"]]
            },
            {
                title: "Quarter notes",
                text: "Quarter note: 1 beat.",
                chips: [[rhythmSequence(["quarter", "quarter", "quarter", "quarter"]), "Count: 1 2 3 4"]]
            },
            {
                title: "Eighth notes",
                text: "Eighth note: ½ beat.",
                chips: [[rhythmSequence(["eighth", "+", "eighth", "=", "quarter"]), "Count: 1 &"]]
            },
            {
                title: "Sixteenth notes",
                text: "Sixteenth note: ¼ beat.",
                chips: [[rhythmSequence(["sixteenth", "sixteenth", "sixteenth", "sixteenth", "=", "quarter"]), "Count: 1 e & a"]]
            },
            {
                title: "Rests",
                text: "Rests are measured silences.",
                chips: [[rhythmIcon("whole-rest"), "Whole rest — 4 beats"], [rhythmIcon("half-rest"), "Half rest — 2 beats"], [rhythmIcon("quarter-rest"), "Quarter rest — 1 beat"], [rhythmIcon("eighth-rest"), "Eighth rest — ½ beat"], [rhythmIcon("sixteenth-rest"), "Sixteenth rest — ¼ beat"]]
            },
            {
                title: "Dots and ties",
                text: "A dot adds half. A tie joins matching notes.",
                chips: [[rhythmIcon("dotted-quarter"), "Dotted quarter — 1½ beats"], [rhythmIcon("tie"), "Tied length — 3 beats"]]
            },
            {
                title: "Count before playing",
                text: "Count evenly before playing.",
                chips: [["1 2 3 4", "Quarter notes"], ["1 & 2 &", "Eighth notes"], ["1 e & a", "Sixteenth notes"]]
            }
        ]
    },
    {
        title: "Accidentals",
        description: "Sharps, flats and naturals.",
        summary: "Accidentals change a note by one semitone.",
        takeaway: "Sharp raises. Flat lowers. Natural cancels.",
        sections: [
            {
                title: "Sharp",
                text: "A sharp raises a note by one semitone.",
                chips: [["♯", "Raise"]]
            },
            {
                title: "Flat",
                text: "A flat lowers a note by one semitone.",
                chips: [["♭", "Lower"]]
            },
            {
                title: "Natural",
                text: "A natural cancels a sharp or flat.",
                chips: [["♮", "Cancel"]]
            }
        ]
    },
    {
        title: "Key Signatures",
        description: "All major and minor key signatures.",
        summary: "Key signatures show which notes are sharp or flat.",
        takeaway: "Major and relative minor keys share a signature.",
        sections: [
            { title: "How key signatures work", text: "The signature applies throughout the music." },
            { title: "Major and relative minor", text: "Relative major and minor keys use the same notes.", chips: [["C major · A minor", "No sharps or flats"], ["G major · E minor", "One sharp"]] },
            ...[
                ["C major", "A minor", "C", "No sharps or flats"],
                ["G major", "E minor", "G", "1 sharp"],
                ["D major", "B minor", "D", "2 sharps"],
                ["A major", "F-sharp minor", "A", "3 sharps"],
                ["E major", "C-sharp minor", "E", "4 sharps"],
                ["B major", "G-sharp minor", "B", "5 sharps"],
                ["F-sharp major", "D-sharp minor", "F#", "6 sharps"],
                ["C-sharp major", "A-sharp minor", "C#", "7 sharps"],
                ["F major", "D minor", "F", "1 flat"],
                ["B-flat major", "G minor", "Bb", "2 flats"],
                ["E-flat major", "C minor", "Eb", "3 flats"],
                ["A-flat major", "F minor", "Ab", "4 flats"],
                ["D-flat major", "B-flat minor", "Db", "5 flats"],
                ["G-flat major", "E-flat minor", "Gb", "6 flats"],
                ["C-flat major", "A-flat minor", "Cb", "7 flats"]
            ].map(([major, minor, key, detail]) => ({
                title: `${major} / ${minor}`,
                text: `${detail}. Shared by ${major} and ${minor}.`,
                visual: { type: "key", clef: "treble", key, caption: `${major} · ${minor}` }
            })),
            { title: "Order of accidentals", text: "Sharps and flats follow a fixed order.", chips: [["F C G D A E B", "Sharps"], ["B E A D G C F", "Flats"]] }
        ]
    }];


function makeScaleNotes(tonic) {
    const letters = ["c", "d", "e", "f", "g", "a", "b"];
    const start = letters.indexOf(tonic[0].toLowerCase());
    let octave = start >= 5 ? 3 : 4;

    return Array.from({ length: 8 }, (_, step) => {
        const position = start + step;
        if (step > 0 && position % 7 === 0) octave++;
        return `${letters[position % 7]}${octave}`;
    });
}

const majorScaleSpecs = [
    ["C major", "C"], ["G major", "G"], ["D major", "D"], ["A major", "A"],
    ["E major", "E"], ["B major", "B"], ["F-sharp major", "F#"], ["C-sharp major", "C#"],
    ["F major", "F"], ["B-flat major", "Bb"], ["E-flat major", "Eb"], ["A-flat major", "Ab"]
];

const minorScaleSpecs = [
    ["A minor", "C"], ["E minor", "G"], ["B minor", "D"], ["F-sharp minor", "A"],
    ["C-sharp minor", "E"], ["G-sharp minor", "B"], ["D-sharp minor", "F#"], ["A-sharp minor", "C#"],
    ["D minor", "F"], ["G minor", "Bb"], ["C minor", "Eb"], ["F minor", "Ab"]
];

courses.push(
    {
        title: "Dynamics",
        description: "How softly or loudly to play.",
        summary: "Dynamics show volume.",
        takeaway: "More p means softer. More f means louder.",
        sections: [
            { title: "Soft", text: "Piano means soft.", chips: [["ppp", "Very, very soft"], ["pp", "Very soft"], ["p", "Soft"]] },
            { title: "Medium", text: "Mezzo means moderately.", chips: [["mp", "Moderately soft"], ["mf", "Moderately loud"]] },
            { title: "Loud", text: "Forte means loud.", chips: [["f", "Loud"], ["ff", "Very loud"], ["fff", "Very, very loud"]] },
            { title: "Gradual change", text: "Crescendo becomes louder. Diminuendo becomes softer.", chips: [["<", "Crescendo"], [">", "Diminuendo"]] },
            { title: "Sudden emphasis", text: "Sforzando means a sudden strong emphasis.", chips: [["sfz", "Sforzando"]] }
        ]
    },
    {
        title: "Music Signs",
        description: "Common symbols used in written music.",
        summary: "Music signs show how to perform the notes.",
        takeaway: "Notice each sign before playing the passage.",
        sections: [
            { title: "Repeat", text: "Play the marked section again.", chips: [["𝄆  𝄇", "Repeat signs"]] },
            { title: "Fermata", text: "Hold the note or rest longer.", chips: [["𝄐", "Fermata"]] },
            { title: "Staccato", text: "Play the note short and detached.", chips: [["•", "Staccato"]] },
            { title: "Accent", text: "Play the note with extra emphasis.", chips: [[">", "Accent"]] },
            { title: "Tie", text: "Join two notes of the same pitch into one longer sound.", chips: [["⌒", "Tie"]] },
            { title: "Slur", text: "Connect different notes into one smooth phrase.", chips: [["⌒", "Slur"]] },
            { title: "Octave signs", text: "8va means one octave higher. 8vb means one octave lower.", chips: [["8va", "Higher"], ["8vb", "Lower"]] }
        ]
    },
    {
        title: "Major Scales",
        description: "All 12 major scales.",
        summary: "Major pattern: whole, whole, half, whole, whole, whole, half.",
        takeaway: "Each scale begins and ends on its tonic.",
        sections: majorScaleSpecs.map(([name, key]) => ({
            title: name,
            text: `${name} ascending through one octave.`,
            visual: { type: "scale", clef: "treble", key, notes: makeScaleNotes(name), caption: name }
        }))
    },
    {
        title: "Minor Scales",
        description: "All 12 minor scales.",
        summary: "Minor pattern: whole, half, whole, whole, half, whole, whole.",
        takeaway: "Each natural minor shares a signature with a relative major key.",
        sections: minorScaleSpecs.map(([name, key]) => ({
            title: name,
            text: `${name} ascending through one octave.`,
            visual: { type: "scale", clef: "treble", key, notes: makeScaleNotes(name), caption: name }
        }))
    }
);

const rhythmQuestions = [
    { symbol: rhythmIcon("whole"), name: "Whole note" },
    { symbol: rhythmIcon("half"), name: "Half note" },
    { symbol: rhythmIcon("quarter"), name: "Quarter note" },
    { symbol: rhythmIcon("eighth"), name: "Eighth note" },
    { symbol: rhythmIcon("sixteenth"), name: "Sixteenth note" },
    { symbol: rhythmIcon("whole-rest"), name: "Whole rest" },
    { symbol: rhythmIcon("half-rest"), name: "Half rest" },
    { symbol: rhythmIcon("quarter-rest"), name: "Quarter rest" },
    { symbol: rhythmIcon("eighth-rest"), name: "Eighth rest" },
    { symbol: rhythmIcon("sixteenth-rest"), name: "Sixteenth rest" }
]

const screens = {
    home: document.getElementById("home-screen"),
    learn: document.getElementById("learn-screen"),
    course: document.getElementById("course-screen"),
    practice: document.getElementById("practice-screen"),
    setup: document.getElementById("setup-screen"),
    scaleSetup: document.getElementById("scale-setup-screen"),
    exercise: document.getElementById("exercise-screen")
};

let selectedCourseIndex = 0;
let selectedClef = "treble";
let selectedScaleGroup = "both";
let selectedScaleClef = "treble";
let scaleStep = 0;
let activeExercise = "reading";
let currentQuestion = null;
let answerLocked = false;
let sessionToken = 0;
let currentScreen = "home";
const screenHistory = [];

function showScreen(name, addToHistory = true) {
    if (!screens[name]) return;

    if (addToHistory && name !== currentScreen) {
        screenHistory.push(currentScreen);
    }

    currentScreen = name;
    sessionToken++;

    Object.values(screens).forEach(screen => {
        screen.classList.add("hidden");
    });

    screens[name].classList.remove("hidden");

    document.querySelectorAll(".main-nav button").forEach(button => {
        const section = button.dataset.go;

        const active =
            section === name ||
            (name === "course" && section === "learn") ||
            (["setup", "scaleSetup", "exercise"].includes(name) && section === "practice");

        button.classList.toggle("active", active);
    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function goBack() {
    const previousScreen = screenHistory.pop() || "home";
    showScreen(previousScreen, false);
}

function renderCourseGrid() {
    const grid = document.getElementById("course-grid");
    grid.innerHTML = "";

    courses.forEach((course, index) => {
        const button = document.createElement("button");

        button.type = "button";
        button.className =
            `course-card${index === 0 ? " recommended" : ""}`;

        button.innerHTML = `
            <span class="course-index">
                ${String(index + 1).padStart(2, "0")}
            </span>

            <span>
                <strong>${course.title}</strong>
                <small>${course.description}</small>
            </span>

            <span class="course-status">
                ${index === 0 ? "Start here" : "Open"} →
            </span>
        `;

        button.addEventListener("click", () => {
            openCourse(index);
        });

        grid.appendChild(button);
    });
}

const courseMotionDemos = {
    "Rhythm": {
        type: "rhythm",
        title: "Quarter-note pulse",
        description: "Four evenly spaced quarter notes."
    },
    "Dynamics": {
        type: "dynamics",
        title: "Soft to loud",
        description: "Hear and see a gradual crescendo."
    },
    "Major Scales": {
        type: "scale",
        title: "C major in motion",
        description: "Watch one octave rise and return to C.",
        notes: [60, 62, 64, 65, 67, 69, 71, 72]
    },
    "Minor Scales": {
        type: "scale",
        title: "A minor in motion",
        description: "Watch one octave rise and return to A.",
        notes: [57, 59, 60, 62, 64, 65, 67, 69]
    }
};

function renderCourseMotionDemo(course) {
    const demo = courseMotionDemos[course.title];
    if (!demo) return "";

    let visual = "";

    if (demo.type === "rhythm") {
        visual = `
            <div class="motion-rhythm" aria-label="Four quarter notes">
                ${[1, 2, 3, 4].map(count => `
                    <div class="motion-beat" data-motion-step>
                        <strong>${rhythmIcon("quarter")}</strong>
                        <span>${count}</span>
                    </div>
                `).join("")}
            </div>
        `;
    }

    if (demo.type === "dynamics") {
        visual = `
            <div class="motion-dynamics" aria-label="Crescendo from soft to loud">
                <span class="motion-dynamic-label">p</span>
                <div class="motion-dynamic-bars">
                    ${[1, 2, 3, 4, 5].map(level => `
                        <span style="--dynamic-level: ${level}" data-motion-step></span>
                    `).join("")}
                </div>
                <span class="motion-dynamic-label">f</span>
            </div>
        `;
    }

    if (demo.type === "scale") {
        visual = `
            <div class="motion-scale-keyboard" aria-label="One-octave scale demonstration">
                ${[
                    ["C", 0], ["D", 2], ["E", 4], ["F", 5],
                    ["G", 7], ["A", 9], ["B", 11]
                ].map(([name, pitch]) => `
                    <div class="motion-scale-key" data-motion-pitch="${pitch}">
                        ${name}
                    </div>
                `).join("")}
            </div>
        `;
    }

    return `
        <section class="motion-demo" data-motion-demo data-motion-type="${demo.type}">
            <div class="motion-demo-copy">
                <span>ANIMATED DEMONSTRATION</span>
                <h2>${demo.title}</h2>
                <p>${demo.description}</p>
            </div>
            <div class="motion-demo-stage">
                ${visual}
            </div>
            <button class="motion-demo-play" type="button" data-motion-play>
                Play demonstration
            </button>
        </section>
    `;
}

let motionDemoTimers = [];

function stopCourseMotionDemo() {
    motionDemoTimers.forEach(timer => window.clearTimeout(timer));
    motionDemoTimers = [];
}

function scheduleMotionStep(callback, delay) {
    const timer = window.setTimeout(callback, delay);
    motionDemoTimers.push(timer);
}

function setupCourseMotionDemo(course) {
    stopCourseMotionDemo();

    const settings = courseMotionDemos[course.title];
    const demo = document.querySelector("[data-motion-demo]");
    if (!settings || !demo) return;

    const playButton = demo.querySelector("[data-motion-play]");

    playButton.addEventListener("click", () => {
        stopCourseMotionDemo();
        demo.querySelectorAll(".active").forEach(item => item.classList.remove("active"));
        playButton.disabled = true;
        playButton.textContent = "Playing";

        if (settings.type === "rhythm") {
            const beats = [...demo.querySelectorAll("[data-motion-step]")];
            beats.forEach((beat, index) => {
                scheduleMotionStep(() => {
                    beats.forEach(item => item.classList.remove("active"));
                    beat.classList.add("active");
                    playMidiValue(84, 0.09, 0, 0.1);
                }, index * 520);
            });

            scheduleMotionStep(() => {
                beats.forEach(item => item.classList.remove("active"));
                playButton.disabled = false;
                playButton.textContent = "Play again";
            }, beats.length * 520 + 180);
        }

        if (settings.type === "dynamics") {
            const bars = [...demo.querySelectorAll("[data-motion-step]")];
            bars.forEach((bar, index) => {
                scheduleMotionStep(() => {
                    bar.classList.add("active");
                    playMidiValue(69, 0.34, 0, 0.035 + index * 0.035);
                }, index * 430);
            });

            scheduleMotionStep(() => {
                bars.forEach(item => item.classList.remove("active"));
                playButton.disabled = false;
                playButton.textContent = "Play again";
            }, bars.length * 430 + 300);
        }

        if (settings.type === "scale") {
            const keys = [...demo.querySelectorAll("[data-motion-pitch]")];
            settings.notes.forEach((midi, index) => {
                scheduleMotionStep(() => {
                    keys.forEach(item => item.classList.remove("active"));
                    const pitch = ((midi % 12) + 12) % 12;
                    demo.querySelector(`[data-motion-pitch="${pitch}"]`)?.classList.add("active");
                    playMidiValue(midi, 0.32, 0, 0.12);
                }, index * 360);
            });

            scheduleMotionStep(() => {
                keys.forEach(item => item.classList.remove("active"));
                playButton.disabled = false;
                playButton.textContent = "Play again";
            }, settings.notes.length * 360 + 260);
        }
    });
}

const lessonMemoryPairs = {
    "Treble Clef": [["G landmark", "Second line"], ["F A C E", "Spaces"], ["E G B D F", "Lines"]],
    "Bass Clef": [["F landmark", "Fourth line"], ["A C E G", "Spaces"], ["G B D F A", "Lines"]],
    "Rhythm": [["Quarter note", "1 beat"], ["Half note", "2 beats"], ["Whole note", "4 beats"]],
    "Accidentals": [["Sharp", "Raises"], ["Flat", "Lowers"], ["Natural", "Cancels"]],
    "Key Signatures": [["C major", "No sharps or flats"], ["G major", "1 sharp"], ["F major", "1 flat"]],
    "Dynamics": [["p", "Soft"], ["f", "Loud"], ["Crescendo", "Gradually louder"]],
    "Music Signs": [["Fermata", "Hold"], ["Repeat sign", "Play again"], ["Staccato", "Short"]],
    "Major Scales": [["C major", "No sharps or flats"], ["G major", "F sharp"], ["F major", "B flat"]],
    "Minor Scales": [["A minor", "No sharps or flats"], ["E minor", "F sharp"], ["D minor", "B flat"]]
};

function renderMemoryGame(course) {
    if (!lessonMemoryPairs[course.title]) return "";

    return `
        <section class="memory-game" data-memory-game>
            <div class="memory-game-header">
                <div>
                    <span>MATCHING GAME</span>
                    <h2>Connect the pairs</h2>
                </div>
                <button type="button" class="memory-reset" data-memory-reset>Shuffle</button>
            </div>
            <p class="memory-instruction">Choose two cards that belong together.</p>
            <div class="memory-grid" data-memory-grid></div>
            <p class="memory-feedback" data-memory-feedback aria-live="polite"></p>
        </section>
    `;
}

function setupMemoryGame(course) {
    const pairs = lessonMemoryPairs[course.title];
    const game = document.querySelector("[data-memory-game]");
    if (!pairs || !game) return;

    const grid = game.querySelector("[data-memory-grid]");
    const feedback = game.querySelector("[data-memory-feedback]");
    const resetButton = game.querySelector("[data-memory-reset]");
    let firstCard = null;
    let locked = false;
    let matchedPairs = 0;

    function shuffle(items) {
        const copy = [...items];
        for (let index = copy.length - 1; index > 0; index -= 1) {
            const randomIndex = Math.floor(Math.random() * (index + 1));
            [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
        }
        return copy;
    }

    function startGame() {
        const cards = pairs.flatMap((pair, pairIndex) => [
            { text: pair[0], pairIndex },
            { text: pair[1], pairIndex }
        ]);

        firstCard = null;
        locked = false;
        matchedPairs = 0;
        feedback.textContent = "";
        grid.innerHTML = shuffle(cards).map(card => `
            <button
                type="button"
                class="memory-card"
                data-memory-card
                data-pair-index="${card.pairIndex}"
            >
                ${card.text}
            </button>
        `).join("");

        grid.querySelectorAll("[data-memory-card]").forEach(card => {
            card.addEventListener("click", () => {
                if (locked || card.disabled || card === firstCard) return;

                card.classList.add("selected");

                if (!firstCard) {
                    firstCard = card;
                    feedback.textContent = "Choose its match.";
                    return;
                }

                const isMatch = firstCard.dataset.pairIndex === card.dataset.pairIndex;

                if (isMatch) {
                    firstCard.disabled = true;
                    card.disabled = true;
                    firstCard.classList.add("matched");
                    card.classList.add("matched");
                    firstCard.classList.remove("selected");
                    card.classList.remove("selected");
                    firstCard = null;
                    matchedPairs += 1;
                    feedback.textContent = matchedPairs === pairs.length
                        ? "All pairs matched."
                        : "Match found.";
                    return;
                }

                locked = true;
                feedback.textContent = "Those do not match.";
                firstCard.classList.add("mismatch");
                card.classList.add("mismatch");

                const previousCard = firstCard;
                window.setTimeout(() => {
                    previousCard.classList.remove("selected", "mismatch");
                    card.classList.remove("selected", "mismatch");
                    firstCard = null;
                    locked = false;
                    feedback.textContent = "";
                }, 650);
            });
        });
    }

    resetButton.addEventListener("click", startGame);
    startGame();
}

const lessonChallenges = {
    "Treble Clef": [
        { question: "Which line does the treble clef curl around?", choices: ["C", "F", "G"], answer: 2 },
        { question: "Where is middle C in treble clef?", choices: ["Below the staff", "On the top line", "Inside the staff"], answer: 0 },
        { question: "Which letters are used for white-key notes?", choices: ["A to G", "A to Z", "C to B only"], answer: 0 }
    ],
    "Bass Clef": [
        { question: "Which line sits between the bass-clef dots?", choices: ["F", "G", "C"], answer: 0 },
        { question: "Where is middle C in bass clef?", choices: ["Above the staff", "On the bottom line", "Below the staff"], answer: 0 },
        { question: "Which are the bass-clef line notes?", choices: ["G B D F A", "E G B D F", "F A C E"], answer: 0 }
    ],
    "Rhythm": [
        { question: "How long is a quarter note in 4/4?", choices: ["1 beat", "2 beats", "4 beats"], answer: 0 },
        { question: "How long is a half note in 4/4?", choices: ["1 beat", "2 beats", "Half a beat"], answer: 1 },
        { question: "Four sixteenth notes equal:", choices: ["One quarter note", "One half note", "Two whole notes"], answer: 0 }
    ],
    "Accidentals": [
        { question: "What does a sharp do?", choices: ["Raises a note", "Lowers a note", "Silences a note"], answer: 0 },
        { question: "What does a flat do?", choices: ["Raises a note", "Lowers a note", "Repeats a note"], answer: 1 },
        { question: "What does a natural sign do?", choices: ["Cancels a sharp or flat", "Makes a note longer", "Makes a note louder"], answer: 0 }
    ],
    "Key Signatures": [
        { question: "Where is a key signature written?", choices: ["After the clef", "At the end only", "Under the staff"], answer: 0 },
        { question: "How long does a key signature apply?", choices: ["Until it changes", "For one note", "For one measure only"], answer: 0 },
        { question: "Which pair has no sharps or flats?", choices: ["C major and A minor", "G major and E minor", "D major and B minor"], answer: 0 }
    ],
    "Dynamics": [
        { question: "What does p mean?", choices: ["Soft", "Loud", "Fast"], answer: 0 },
        { question: "What does f mean?", choices: ["Loud", "Soft", "Slow"], answer: 0 },
        { question: "What does crescendo mean?", choices: ["Gradually louder", "Gradually softer", "Suddenly stop"], answer: 0 }
    ],
    "Music Signs": [
        { question: "What does a fermata mean?", choices: ["Hold the note", "Play very short", "Repeat from the start"], answer: 0 },
        { question: "What does a repeat sign mean?", choices: ["Play the section again", "Skip the section", "Play one octave higher"], answer: 0 },
        { question: "What does staccato mean?", choices: ["Short and detached", "Smooth and connected", "Very loud"], answer: 0 }
    ],
    "Major Scales": [
        { question: "What is the major-scale step pattern?", choices: ["W W H W W W H", "W H W W H W W", "H W W H W W W"], answer: 0 },
        { question: "Which major scale has no sharps or flats?", choices: ["C major", "G major", "F major"], answer: 0 },
        { question: "A scale begins and ends on its:", choices: ["Tonic", "Dominant", "Leading note"], answer: 0 }
    ],
    "Minor Scales": [
        { question: "What is the minor-scale step pattern taught here?", choices: ["W H W W H W W", "W W H W W W H", "H W W W H W W"], answer: 0 },
        { question: "Which minor scale has no sharps or flats?", choices: ["A minor", "E minor", "D minor"], answer: 0 },
        { question: "A scale begins and ends on its:", choices: ["Tonic", "Third", "Fifth"], answer: 0 }
    ]
};

function renderLessonChallenge(course) {
    if (!lessonChallenges[course.title]) return "";

    return `
        <section class="lesson-challenge" data-lesson-challenge>
            <div class="challenge-topline">
                <span>QUICK CHALLENGE</span>
                <span data-challenge-progress>1 / 3</span>
            </div>
            <h2 data-challenge-question></h2>
            <div class="challenge-choices" data-challenge-choices></div>
            <p class="challenge-feedback" data-challenge-feedback aria-live="polite"></p>
            <button class="challenge-next hidden" type="button" data-challenge-next>Next</button>
        </section>
    `;
}

function setupLessonChallenge(course) {
    const questions = lessonChallenges[course.title];
    const challenge = document.querySelector("[data-lesson-challenge]");
    if (!questions || !challenge) return;

    const progress = challenge.querySelector("[data-challenge-progress]");
    const questionText = challenge.querySelector("[data-challenge-question]");
    const choices = challenge.querySelector("[data-challenge-choices]");
    const feedback = challenge.querySelector("[data-challenge-feedback]");
    const nextButton = challenge.querySelector("[data-challenge-next]");
    let questionIndex = 0;

    function renderQuestion() {
        const current = questions[questionIndex];
        progress.textContent = `${questionIndex + 1} / ${questions.length}`;
        questionText.textContent = current.question;
        feedback.textContent = "";
        feedback.className = "challenge-feedback";
        nextButton.classList.add("hidden");
        choices.innerHTML = current.choices.map((choice, choiceIndex) => `
            <button type="button" class="challenge-choice" data-choice-index="${choiceIndex}">
                ${choice}
            </button>
        `).join("");

        choices.querySelectorAll("[data-choice-index]").forEach(button => {
            button.addEventListener("click", () => {
                const selectedIndex = Number(button.dataset.choiceIndex);
                const isCorrect = selectedIndex === current.answer;
                const allChoices = choices.querySelectorAll("[data-choice-index]");

                allChoices.forEach((choiceButton, index) => {
                    choiceButton.disabled = true;
                    if (index === current.answer) choiceButton.classList.add("correct");
                });

                if (!isCorrect) button.classList.add("wrong");

                feedback.textContent = isCorrect
                    ? "Correct."
                    : `The answer is ${current.choices[current.answer]}.`;
                feedback.classList.add(isCorrect ? "correct" : "wrong");
                nextButton.textContent = questionIndex === questions.length - 1
                    ? "Play again"
                    : "Next";
                nextButton.classList.remove("hidden");
            });
        });
    }

    nextButton.addEventListener("click", () => {
        questionIndex = (questionIndex + 1) % questions.length;
        renderQuestion();
    });

    renderQuestion();
}

function openCourse(index) {
    selectedCourseIndex = index;

    const course = courses[index];

    document.getElementById("course-kicker").textContent =
        `COURSE ${String(index + 1).padStart(2, "0")}`;

    document.getElementById("course-title").textContent =
        course.title;

    document.getElementById("course-summary").textContent =
        course.summary;

    document.getElementById("course-takeaway").textContent =
        course.takeaway;

    document.getElementById("course-body").innerHTML =
        course.sections.map((section, sectionIndex) => `
            <section class="lesson-section">
                <div class="lesson-section-number">
                    ${String(sectionIndex + 1).padStart(2, "0")}
                </div>

                <div>
                    <h2>${section.title}</h2>

                    <p>${section.text}</p>

                    ${
                        section.visual
                            ? `
                                <div
                                    class="lesson-visual${["scale", "range"].includes(section.visual.type) ? " lesson-visual-wide" : ""}"
                                    data-visual-index="${sectionIndex}"
                                >
                                    <div class="lesson-staff"></div>
                                    <div class="lesson-visual-copy">
                                        <span>${section.visual.caption}</span>
                                        ${Array.isArray(section.visual.notes) && section.visual.notes.length === 1 ? `
                                            <button class="visual-find" type="button" data-find-visual="${sectionIndex}" aria-expanded="false">
                                                Find this note
                                            </button>
                                        ` : section.visual.type === "keyboard" ? `
                                            <small class="visual-hint">Use the groups of two and three black keys as landmarks</small>
                                        ` : ""}
                                    </div>
                                    ${Array.isArray(section.visual.notes) && section.visual.notes.length === 1 ? `
                                        <div class="visual-keyboard-guide hidden" data-keyboard-guide="${sectionIndex}"></div>
                                    ` : ""}
                                </div>
                            `
                            : ""
                    }

                    ${
                        section.example
                            ? `
                                <div class="theory-example">
                                    ${section.example}
                                </div>
                            `
                            : ""
                    }

                    ${
                        section.chips
                            ? `
                                <div class="symbol-line${course.title === "Rhythm" ? " rhythm-symbol-line" : ""}">
                                    ${section.chips.map(chip => `
                                        <div class="symbol-chip${String(chip[0]).includes("rhythm-sequence") ? " rhythm-sequence-chip" : ""}">
                                            <strong>${chip[0]}</strong>
                                            <small>${chip[1]}</small>
                                        </div>
                                    `).join("")}
                                </div>
                            `
                            : ""
                    }
                </div>
            </section>
        `).join("") + renderCourseMotionDemo(course) + renderMemoryGame(course) + renderLessonChallenge(course);

    const previous = document.getElementById("previous-course");
    const next = document.getElementById("next-course");

    previous.style.visibility =
        index === 0 ? "hidden" : "visible";

    next.textContent =
        index === courses.length - 1
            ? "All courses"
            : "Next course";

    showScreen("course");

    requestAnimationFrame(() => {
        renderCourseVisuals(course);
        setupLessonInteractions(course);
        setupCourseMotionDemo(course);
        setupMemoryGame(course);
        setupLessonChallenge(course);
    });
}

let lessonAudioContext = null;

const keySignatureAccidentals = {
    C: {},
    G: { F: 1 },
    D: { F: 1, C: 1 },
    A: { F: 1, C: 1, G: 1 },
    E: { F: 1, C: 1, G: 1, D: 1 },
    B: { F: 1, C: 1, G: 1, D: 1, A: 1 },
    "F#": { F: 1, C: 1, G: 1, D: 1, A: 1, E: 1 },
    "C#": { F: 1, C: 1, G: 1, D: 1, A: 1, E: 1, B: 1 },
    F: { B: -1 },
    Bb: { B: -1, E: -1 },
    Eb: { B: -1, E: -1, A: -1 },
    Ab: { B: -1, E: -1, A: -1, D: -1 },
    Db: { B: -1, E: -1, A: -1, D: -1, G: -1 },
    Gb: { B: -1, E: -1, A: -1, D: -1, G: -1, C: -1 },
    Cb: { B: -1, E: -1, A: -1, D: -1, G: -1, C: -1, F: -1 }
};

function lessonNoteToMidi(note, keySignature = "C") {
    const match = /^([a-g])([#b]?)(-?\d+)$/i.exec(note);
    if (!match) return null;

    const letter = match[1].toUpperCase();
    const explicitAccidental = match[2];
    const octave = Number(match[3]);
    const naturalPitch = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 }[letter];
    const accidental = explicitAccidental === "#"
        ? 1
        : explicitAccidental === "b"
            ? -1
            : (keySignatureAccidentals[keySignature]?.[letter] || 0);

    return (octave + 1) * 12 + naturalPitch + accidental;
}

let pianoAudioOutput = null;
function getLessonAudioContext() {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return null;
    if (!lessonAudioContext || lessonAudioContext.state === "closed") {
        lessonAudioContext = new AudioContextClass();
        pianoAudioOutput = lessonAudioContext.createDynamicsCompressor();
        pianoAudioOutput.threshold.value = -12;
        pianoAudioOutput.knee.value = 12;
        pianoAudioOutput.ratio.value = 4;
        pianoAudioOutput.attack.value = 0.003;
        pianoAudioOutput.release.value = 0.18;
        pianoAudioOutput.connect(lessonAudioContext.destination);
    }
    return lessonAudioContext;
}

function playMidiValue(midi, duration = 0.5, startDelay = 0, volume = 0.16) {
    const context = getLessonAudioContext();
    if (!context || midi === null || !Number.isFinite(midi)) return;
    const soundNote = () => {
        const start = context.currentTime + Math.max(0, startDelay) + 0.005;
        const length = Math.max(0.35, duration);
        const frequency = 440 * Math.pow(2, (midi - 69) / 12);
        const level = Math.min(0.38, Math.max(0.015, volume * 1.8));
        const envelope = context.createGain();
        const partials = [];
        envelope.gain.setValueAtTime(0.0001, start);
        envelope.gain.exponentialRampToValueAtTime(level, start + 0.008);
        envelope.gain.exponentialRampToValueAtTime(level * 0.65, start + 0.08);
        envelope.gain.exponentialRampToValueAtTime(level * 0.28, start + length);
        envelope.gain.exponentialRampToValueAtTime(0.0001, start + length + 0.22);
        envelope.connect(pianoAudioOutput);
        // A strong fundamental and softer upper partials make low notes audible
        // on small speakers while keeping the written pitch unchanged.
        [1, 0.38, 0.18, 0.08].forEach((strength, index) => {
            const harmonic = index + 1;
            if (frequency * harmonic >= context.sampleRate * 0.45) return;
            const oscillator = context.createOscillator();
            const gain = context.createGain();
            oscillator.type = "sine";
            oscillator.frequency.setValueAtTime(frequency * harmonic, start);
            gain.gain.setValueAtTime(strength / 1.64, start);
            oscillator.connect(gain);
            gain.connect(envelope);
            partials.push({oscillator, gain});
            oscillator.start(start);
            oscillator.stop(start + length + 0.24);
        });
        if (partials.length) partials[0].oscillator.onended = () => {
            partials.forEach(({oscillator, gain}) => { oscillator.disconnect(); gain.disconnect(); });
            envelope.disconnect();
        };
    };
    if (context.state === "running") soundNote();
    else context.resume().then(soundNote).catch(() => {});
}

const pianoGuideWhiteNotes = [
    { name: "C", pitch: 0 },
    { name: "D", pitch: 2 },
    { name: "E", pitch: 4 },
    { name: "F", pitch: 5 },
    { name: "G", pitch: 7 },
    { name: "A", pitch: 9 },
    { name: "B", pitch: 11 }
];

const pianoGuideBlackNotes = [
    { audioName: "c#4" },
    { audioName: "d#4" },
    { audioName: "f#4" },
    { audioName: "g#4" },
    { audioName: "a#4" }
];

function buildKeyboardGuide(visual) {
    const targetMidi = lessonNoteToMidi(visual.notes[0], visual.key || "C");
    const targetPitch = targetMidi === null ? -1 : ((targetMidi % 12) + 12) % 12;

    return `
        <div class="keyboard-guide-heading">
            <strong>Choose the matching key</strong>
            <span>Octave numbers are ignored in this one-octave exercise.</span>
        </div>
        <div class="mini-keyboard piano-guide-keyboard" aria-label="Choose the matching key">
            <div class="mini-white-keys">
                ${pianoGuideWhiteNotes.map(note => `
                    <button
                        type="button"
                        class="mini-white-key"
                        data-demo-note="${note.name.toLowerCase()}4"
                        data-guide-pitch="${note.pitch}"
                        data-guide-answer="${targetPitch}"
                        aria-label="Choose ${note.name}"
                    >${note.name}</button>
                `).join("")}
            </div>
            ${pianoGuideBlackNotes.map((note, index) => {
                const blackPitches = [1, 3, 6, 8, 10];
                return `
                    <button
                        type="button"
                        class="mini-black-key black-${index + 1}"
                        data-demo-note="${note.audioName}"
                        data-guide-pitch="${blackPitches[index]}"
                        data-guide-answer="${targetPitch}"
                        aria-label="Choose black key"
                    ></button>
                `;
            }).join("")}
        </div>
        <p class="keyboard-guide-feedback" data-keyboard-feedback aria-live="polite">
            Select the key that matches the note on the staff.
        </p>
        <small class="visual-hint">The same note names repeat in every octave.</small>
    `;
}

function bindKeyboardQuiz(scope) {
    const feedback = scope.querySelector("[data-keyboard-feedback]");

    scope.querySelectorAll("[data-guide-pitch]").forEach(key => {
        key.addEventListener("click", () => {
            const isCorrect = Number(key.dataset.guidePitch) === Number(key.dataset.guideAnswer);

            scope.querySelectorAll("[data-guide-pitch]").forEach(item => {
                item.classList.remove("quiz-correct", "quiz-wrong");
            });

            key.classList.add(isCorrect ? "quiz-correct" : "quiz-wrong");
            feedback.textContent = isCorrect
                ? "Correct. This note name repeats in every octave."
                : "Not this one. Try another key.";
            feedback.classList.toggle("correct", isCorrect);
            feedback.classList.toggle("wrong", !isCorrect);
        });
    });
}

function bindDemoKeys(scope = document) {
    scope.querySelectorAll("[data-demo-note]").forEach(key => {
        if (key.dataset.audioReady === "true") return;
        key.dataset.audioReady = "true";
        key.addEventListener("click", () => {
            playMidiValue(lessonNoteToMidi(key.dataset.demoNote), 0.55);
            key.classList.add("is-active");
            window.setTimeout(() => key.classList.remove("is-active"), 180);
        });
    });
}

function setupLessonInteractions(course) {
    document.querySelectorAll("[data-find-visual]").forEach(button => {
        button.addEventListener("click", () => {
            const visualIndex = Number(button.dataset.findVisual);
            const visual = course.sections[visualIndex]?.visual;
            const guide = document.querySelector(`[data-keyboard-guide="${visualIndex}"]`);
            if (!visual?.notes || !guide) return;

            const willOpen = guide.classList.contains("hidden");
            if (willOpen && !guide.innerHTML) {
                guide.innerHTML = buildKeyboardGuide(visual);
                bindDemoKeys(guide);
                bindKeyboardQuiz(guide);
            }

            guide.classList.toggle("hidden", !willOpen);
            button.setAttribute("aria-expanded", String(willOpen));
            button.textContent = willOpen ? "Hide keyboard" : "Find this note";
        });
    });

    bindDemoKeys();
}

const staffLetterIndex = { c: 0, d: 1, e: 2, f: 3, g: 4, a: 5, b: 6 };

function parseWrittenNote(note) {
    const match = /^([a-g])([#b]?)(-?\d+)$/i.exec(note);
    if (!match) return null;

    return {
        letter: match[1].toLowerCase(),
        accidental: match[2],
        octave: Number(match[3])
    };
}

function staffStep(note) {
    const parsed = parseWrittenNote(note);
    return parsed ? parsed.octave * 7 + staffLetterIndex[parsed.letter] : 0;
}

function keySignatureMarks(key, clef, startX) {
    const marks = keySignatureAccidentals[key] || {};
    const sharpOrder = ["F", "C", "G", "D", "A", "E", "B"];
    const flatOrder = ["B", "E", "A", "D", "G", "C", "F"];
    const isFlat = Object.values(marks)[0] === -1;
    const order = isFlat ? flatOrder : sharpOrder;
    const trebleNotes = isFlat
        ? ["b4", "e5", "a4", "d5", "g4", "c5", "f4"]
        : ["f5", "c5", "g5", "d5", "a4", "e5", "b4"];
    const bassNotes = isFlat
        ? ["b2", "e3", "a2", "d3", "g2", "c3", "f2"]
        : ["f3", "c3", "g3", "d3", "a2", "e3", "b2"];
    const positions = clef === "bass" ? bassNotes : trebleNotes;

    return order
        .filter(letter => Object.prototype.hasOwnProperty.call(marks, letter))
        .map((letter, index) => ({
            symbol: isFlat ? "♭" : "♯",
            note: positions[index],
            x: startX + index * 15
        }));
}

function createStaffSvg({ notes = [], clef = "treble", key = "C", label = "Music notation", width = 680, practice = false }) {
    const safeWidth = Math.max(300, Math.round(width), notes.length * 44 + 170);
    const height = 200;
    const topLineY = 75;
    const lineGap = 13;
    const bottomLineY = topLineY + lineGap * 4;
    const bottomNote = clef === "bass" ? "g2" : "e4";
    const bottomStep = staffStep(bottomNote);
    const clefSpace = 72;
    const keyMarks = keySignatureMarks(key, clef, clefSpace);
    const noteStart = clefSpace + (keyMarks.length ? keyMarks.length * 15 + 18 : 20);
    const noteEnd = safeWidth - 24;
    const spacing = notes.length > 1 ? (noteEnd - noteStart) / (notes.length - 1) : 0;
    const lineStart = 14;
    const lineEnd = safeWidth - 12;
    const escapeText = value => String(value).replace(/[&<>\"]/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '\"': "&quot;" })[character]);
    const yFor = note => bottomLineY - (staffStep(note) - bottomStep) * (lineGap / 2);
    const lines = Array.from({ length: 5 }, (_, index) =>
        `<line x1="${lineStart}" y1="${topLineY + index * lineGap}" x2="${lineEnd}" y2="${topLineY + index * lineGap}" />`
    ).join("");
    const clefSymbol = clef === "bass" ? "𝄢" : "𝄞";
    const clefY = clef === "bass" ? 120 : 129;
    const keyMarkup = keyMarks.map(mark =>
        `<text class="staff-accidental key-accidental" x="${mark.x}" y="${yFor(mark.note) + 7}">${mark.symbol}</text>`
    ).join("");

    const noteMarkup = notes.map((note, index) => {
        const parsed = parseWrittenNote(note);
        if (!parsed) return "";

        const x = notes.length === 1 ? (noteStart + noteEnd) / 2 : noteStart + index * spacing;
        const y = yFor(note);
        const minLineY = Math.min(y, bottomLineY);
        const maxLineY = Math.max(y, topLineY);
        const ledger = [];

        if (y > bottomLineY + 1) {
            for (let ledgerY = bottomLineY + lineGap; ledgerY <= y + 1; ledgerY += lineGap) {
                ledger.push(`<line class="ledger-line" x1="${x - 13}" y1="${ledgerY}" x2="${x + 13}" y2="${ledgerY}" />`);
            }
        }

        if (y < topLineY - 1) {
            for (let ledgerY = topLineY - lineGap; ledgerY >= y - 1; ledgerY -= lineGap) {
                ledger.push(`<line class="ledger-line" x1="${x - 13}" y1="${ledgerY}" x2="${x + 13}" y2="${ledgerY}" />`);
            }
        }

        const accidental = parsed.accidental === "#" ? "♯" : parsed.accidental === "b" ? "♭" : "";
        const stemUp = y >= (topLineY + bottomLineY) / 2;
        const stem = practice || notes.length <= 8
            ? stemUp
                ? `<line class="note-stem" x1="${x + 7}" y1="${y}" x2="${x + 7}" y2="${minLineY - 31}" />`
                : `<line class="note-stem" x1="${x - 7}" y1="${y}" x2="${x - 7}" y2="${maxLineY + 31}" />`
            : "";

        const namedAccidental = accidental || ((keySignatureAccidentals[key] || {})[parsed.letter.toUpperCase()] === 1 ? "♯" : (keySignatureAccidentals[key] || {})[parsed.letter.toUpperCase()] === -1 ? "♭" : "");
        const nameLabel = practice ? "" : `<text x="${x}" y="190" text-anchor="middle" font-family="sans-serif" font-size="12" fill="currentColor">${parsed.letter.toUpperCase()}${namedAccidental}${parsed.octave}</text>`;
        return `${ledger.join("")}${accidental ? `<text class="staff-accidental" x="${x - 20}" y="${y + 6}">${accidental}</text>` : ""}<ellipse class="note-head" cx="${x}" cy="${y}" rx="8" ry="5.5" transform="rotate(-18 ${x} ${y})" />${stem}${nameLabel}`;
    }).join("");

    return `<svg class="staff-svg" viewBox="0 0 ${safeWidth} ${height}" role="img" aria-label="${escapeText(label)}" preserveAspectRatio="xMidYMid meet"><g class="staff-lines">${lines}</g><text class="staff-clef staff-clef-${clef}" x="20" y="${clefY}">${clefSymbol}</text>${keyMarkup}<g class="staff-notes">${noteMarkup}</g></svg>`;
}

function renderCourseVisuals(course) {
    document
        .querySelectorAll("[data-visual-index]")
        .forEach(wrapper => {
            const visualIndex =
                Number(wrapper.dataset.visualIndex);

            const section =
                course.sections[visualIndex];

            const visual =
                section.visual;

            const target =
                wrapper.querySelector(".lesson-staff");

            target.innerHTML = "";

            target.id =
                `course-visual-${selectedCourseIndex}-${visualIndex}`;

            if (visual.type === "keyboard") {
                target.innerHTML = `
                    <div class="mini-keyboard" aria-label="Interactive piano keyboard">
                        <div class="mini-white-keys">
                            ${["C", "D", "E", "F", "G", "A", "B"].map(note => `<button type="button" class="mini-white-key${note === "C" || note === "F" ? " landmark" : ""}" data-demo-note="${note.toLowerCase()}4" aria-label="Play ${note}">${note}</button>`).join("")}
                        </div>
                        ${["c#4", "d#4", "f#4", "g#4", "a#4"].map((note, index) => `<button type="button" class="mini-black-key black-${index + 1}" data-demo-note="${note}" aria-label="Play black key"></button>`).join("")}
                    </div>
                `;
                return;
            }

            const width = Math.max(
                220,
                Math.min(["scale", "range"].includes(visual.type) ? 680 : 320, target.clientWidth || (["scale", "range"].includes(visual.type) ? 680 : 320))
            );

            target.innerHTML = createStaffSvg({
                notes: Array.isArray(visual.notes) ? visual.notes : [],
                clef: visual.clef,
                key: visual.key || "C",
                label: visual.caption,
                width
            });
        });
}

function noteFromMidi(midi, clef) {
    const names = [
        "C",
        "C#",
        "D",
        "D#",
        "E",
        "F",
        "F#",
        "G",
        "G#",
        "A",
        "A#",
        "B"
    ];

    const note = names[midi % 12];
    const octave = Math.floor(midi / 12) - 1;

    return {
        note,
        octave,
        clef,
        midi,
        vNote: `${note.toLowerCase()}${octave}`
    };
}

function makeNotePool(startMidi, endMidi, clef) {
    const pool = [];

    for (let midi = startMidi; midi <= endMidi; midi++) {
        pool.push(noteFromMidi(midi, clef));
    }

    return pool;
}

const trebleNotes =
    makeNotePool(57, 84, "treble");

const bassNotes =
    makeNotePool(36, 64, "bass");

function getReadingPool() {
    if (selectedClef === "treble") {
        return trebleNotes;
    }

    if (selectedClef === "bass") {
        return bassNotes;
    }

    return [
        ...trebleNotes,
        ...bassNotes
    ];
}

function drawStaff(question) {
    const container =
        document.getElementById("staff-container");

    container.innerHTML = "";

    const width = Math.max(
        220,
        Math.min(300, container.clientWidth || 300)
    );

    container.innerHTML = createStaffSvg({
        notes: [question.vNote],
        clef: question.clef,
        label: `${question.note}${question.octave} on the ${question.clef} staff`,
        width,
        practice: true
    });
}

function naturalKeyboardNotes(startMidi, endMidi) {
    const notes = [];

    for (let midi = startMidi; midi <= endMidi; midi++) {
        const item =
            noteFromMidi(midi, "treble");

        if (!item.note.includes("#")) {
            notes.push(item);
        }
    }

    return notes;
}

function renderKeyboard(startMidi, endMidi, onSelect, labeler = item => item.note) {
    const whiteContainer =
        document.getElementById("white-keys-container");

    const blackContainer =
        document.getElementById("black-keys-container");

    whiteContainer.innerHTML = "";
    blackContainer.innerHTML = "";

    const whiteNotes =
        naturalKeyboardNotes(startMidi, endMidi);

    whiteNotes.forEach(item => {
        const key =
            document.createElement("button");

        key.type = "button";
        key.className = "key white";
        key.dataset.note = item.note;
        key.dataset.octave = item.octave;
        key.textContent = labeler(item);

        key.setAttribute(
            "aria-label",
            `${item.note}${item.octave}`
        );

        key.addEventListener("click", () => {
            playMidiValue(item.midi, 0.42);
            onSelect(item, key);
        });

        whiteContainer.appendChild(key);
    });

    const totalWhite =
        whiteNotes.length;

    const keyboardStage = document.querySelector(".keyboard-stage");
    if (keyboardStage) {
        keyboardStage.style.setProperty("--white-key-count", totalWhite);
        document.getElementById("piano-container").scrollLeft = 0;
    }

    const blackWidth =
        (100 / totalWhite) * 0.64;

    whiteNotes
        .slice(0, -1)
        .forEach((item, index) => {
            if (
                !["C", "D", "F", "G", "A"]
                    .includes(item.note)
            ) {
                return;
            }

            const pitchClasses = [
                "C",
                "C#",
                "D",
                "D#",
                "E",
                "F",
                "F#",
                "G",
                "G#",
                "A",
                "A#",
                "B"
            ];

            const sharpMidi =
                (item.octave + 1) * 12 +
                pitchClasses.indexOf(`${item.note}#`);

            if (
                sharpMidi < startMidi ||
                sharpMidi > endMidi
            ) {
                return;
            }

            const sharp =
                noteFromMidi(sharpMidi, "treble");

            const key =
                document.createElement("button");

            key.type = "button";
            key.className = "key black";
            key.dataset.note = sharp.note;
            key.dataset.octave = sharp.octave;
            key.textContent = labeler(sharp);

            key.setAttribute(
                "aria-label",
                `${sharp.note}${sharp.octave}`
            );

            key.style.left =
                `${
                    ((index + 1) * (100 / totalWhite)) -
                    (blackWidth / 2)
                }%`;

            key.style.width =
                `${blackWidth}%`;

            key.addEventListener("click", () => {
                playMidiValue(sharp.midi, 0.42);
                onSelect(sharp, key);
            });

            blackContainer.appendChild(key);
        });
}

function keyboardRange() {
    if (selectedClef === "treble") {
        return [57, 84];
    }

    if (selectedClef === "bass") {
        return [36, 64];
    }

    return [36, 84];
}

function clearExerciseState() {
    document
        .getElementById("staff-panel")
        .classList.add("hidden");

    document
        .getElementById("rhythm-panel")
        .classList.add("hidden");

    document
        .getElementById("piano-container")
        .classList.add("hidden");

    document
        .getElementById("answer-options")
        .classList.add("hidden");

    const feedback =
        document.getElementById("feedback");

    feedback.textContent = "";
    feedback.className = "feedback";
}

function startExercise(type) {
    activeExercise = type;
    answerLocked = false;

    showScreen("exercise");
    renderQuestion();
}

function renderQuestion() {
    answerLocked = false;

    clearExerciseState();

    if (activeExercise === "reading") {
        renderReadingQuestion();
    }

    if (activeExercise === "noteDuration" || activeExercise === "rests") {
        renderRhythmQuestion();
    }

    if (activeExercise === "scale") {
        renderScaleQuestion();
    }
}

function renderReadingQuestion() {
    const pool =
        getReadingPool();

    currentQuestion =
        pool[Math.floor(Math.random() * pool.length)];

    document.getElementById("exercise-label").textContent =
        "NOTE READING";

    document.getElementById("exercise-title").textContent =
        "Play this note";

    document.getElementById("exercise-instruction").textContent =
        "Choose the piano key.";

    document
        .getElementById("staff-panel")
        .classList.remove("hidden");

    document
        .getElementById("piano-container")
        .classList.remove("hidden");

    drawStaff(currentQuestion);

    const [start, end] =
        keyboardRange();

    renderKeyboard(
        start,
        end,
        checkReadingAnswer
    );
}

function checkReadingAnswer(answer, key) {
    if (answerLocked) {
        return;
    }

    const correct =
        answer.note === currentQuestion.note &&
        answer.octave === currentQuestion.octave;

    finishAnswer(
        correct,
        key,
        `${currentQuestion.note}${currentQuestion.octave}`
    );
}

function renderRhythmQuestion() {
    const pool = rhythmQuestions.filter(question =>
        activeExercise === "rests"
            ? question.name.includes("rest")
            : question.name.includes("note")
    );

    currentQuestion = pool[Math.floor(Math.random() * pool.length)];

    document.getElementById("exercise-label").textContent =
        activeExercise === "rests" ? "NOTE RESTS" : "NOTE DURATION";
    document.getElementById("exercise-title").textContent =
        activeExercise === "rests" ? "What rest is this?" : "What note is this?";
    document.getElementById("exercise-instruction").textContent =
        "Choose the correct musical name.";

    document.getElementById("rhythm-panel").classList.remove("hidden");
    document.getElementById("answer-options").classList.remove("hidden");
    document.getElementById("rhythm-symbol").innerHTML = currentQuestion.symbol;
    document.getElementById("rhythm-name").textContent = "";

    renderNoteNameOptions(
        pool.map(question => question.name),
        currentQuestion.name
    );
}

function renderNoteNameOptions(values, correctValue) {
    const container =
        document.getElementById("answer-options");

    container.innerHTML = "";

    values.forEach(value => {
        const button =
            document.createElement("button");

        button.type = "button";
        button.className = "answer-option";
        button.textContent = value;

        button.addEventListener("click", () => {
            if (answerLocked) {
                return;
            }

            const correct =
                value === correctValue;

            button.classList.add(
                correct ? "correct" : "incorrect"
            );

            finishAnswer(
                correct,
                null,
                correctValue
            );
        });

        container.appendChild(button);
    });
}

const scalePitchClasses = {
    "C": 0, "C-sharp": 1, "D-flat": 1, "D": 2,
    "D-sharp": 3, "E-flat": 3, "E": 4, "F": 5,
    "F-sharp": 6, "G-flat": 6, "G": 7,
    "G-sharp": 8, "A-flat": 8, "A": 9,
    "A-sharp": 10, "B-flat": 10, "B": 11
};

function scalePracticePool() {
    const major = majorScaleSpecs.map(([name]) => ({ name, mode: "major" }));
    const minor = minorScaleSpecs.map(([name]) => ({ name, mode: "minor" }));

    if (selectedScaleGroup === "major") return major;
    if (selectedScaleGroup === "minor") return minor;
    return [...major, ...minor];
}

function buildScaleQuestion(scale) {
    const tonicName = scale.name.replace(" major", "").replace(" minor", "");
    const tonicClass = scalePitchClasses[tonicName];
    const intervals = scale.mode === "major"
        ? [0, 2, 4, 5, 7, 9, 11, 12]
        : [0, 2, 3, 5, 7, 8, 10, 12];
    const range = selectedScaleClef === "treble" ? [57, 84] : [36, 64];
    let tonicMidi = range[0];

    while (tonicMidi % 12 !== tonicClass) tonicMidi++;
    if (tonicMidi + 12 > range[1]) tonicMidi -= 12;

    return {
        ...scale,
        tonicName,
        sequence: intervals.map(interval => tonicMidi + interval)
    };
}

function scaleKeyboardLabel(midi, scaleName) {
    const useFlats = scaleName.includes("flat") ||
        ["F major", "D minor", "G minor", "C minor", "F minor"].includes(scaleName);
    const sharpNames = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"];
    const flatNames = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"];
    return (useFlats ? flatNames : sharpNames)[midi % 12];
}

function renderScaleQuestion() {
    const pool = scalePracticePool();
    const scale = pool[Math.floor(Math.random() * pool.length)];
    currentQuestion = buildScaleQuestion(scale);
    scaleStep = 0;
    answerLocked = false;

    document.getElementById("exercise-label").textContent = "SCALE PRACTICE";
    document.getElementById("exercise-title").textContent =
        "Play " + currentQuestion.name;
    document.getElementById("exercise-instruction").textContent =
        "Start on " + currentQuestion.tonicName + " and play one octave upward.";
    document.getElementById("piano-container").classList.remove("hidden");

    const range = selectedScaleClef === "treble" ? [57, 84] : [36, 64];
    renderKeyboard(range[0], range[1], checkScaleAnswer, item =>
        scaleKeyboardLabel(item.midi, currentQuestion.name)
    );
}

function checkScaleAnswer(answer, key) {
    if (answerLocked) return;

    const expectedMidi = currentQuestion.sequence[scaleStep];

    if (answer.midi !== expectedMidi) {
        key.classList.add("incorrect");
        document.getElementById("feedback").textContent =
            "Next note: " + scaleKeyboardLabel(expectedMidi, currentQuestion.name);
        document.getElementById("feedback").className = "feedback error";
        setTimeout(() => key.classList.remove("incorrect"), 350);
        return;
    }

    key.classList.add("correct");
    scaleStep++;
    document.getElementById("feedback").textContent = "Correct";
    document.getElementById("feedback").className = "feedback success";

    if (scaleStep === currentQuestion.sequence.length) {
        answerLocked = true;
        document.getElementById("feedback").textContent = "Scale complete";
        const token = sessionToken;

        setTimeout(() => {
            if (token !== sessionToken) return;
            renderQuestion();
        }, 900);
    }
}


function beatLabel(value) {
    if (value === "0.25") {
        return "¼ beat";
    }

    if (value === "0.5") {
        return "½ beat";
    }

    return `${value} ${
        value === "1" ? "beat" : "beats"
    }`;
}

function renderAnswerOptions(values, correctValue) {
    const container =
        document.getElementById("answer-options");

    container.innerHTML = "";

    values.forEach(value => {
        const button =
            document.createElement("button");

        button.type = "button";
        button.className = "answer-option";
        button.textContent = beatLabel(value);

        button.addEventListener("click", () => {
            if (answerLocked) {
                return;
            }

            const correct =
                value === correctValue;

            button.classList.add(
                correct ? "correct" : "incorrect"
            );

            finishAnswer(
                correct,
                null,
                beatLabel(correctValue)
            );
        });

        container.appendChild(button);
    });
}

function finishAnswer(correct, key, correctLabel) {
    if (answerLocked) {
        return;
    }

    answerLocked = true;

    const token =
        sessionToken;

    const feedback =
        document.getElementById("feedback");

    if (correct) {
        if (key) {
            key.classList.add("correct");
        }

        feedback.textContent = "Correct";
        feedback.className = "feedback success";
    } else {
        if (key) {
            key.classList.add("incorrect");
        }

        feedback.textContent =
            `Answer: ${correctLabel}`;

        feedback.className =
            "feedback error";
    }

    setTimeout(() => {
        if (token !== sessionToken) {
            return;
        }

        renderQuestion();
    }, 750);
}

document
    .querySelectorAll("[data-go]")
    .forEach(button => {
        button.addEventListener("click", () => {
            showScreen(button.dataset.go);
        });
    });

document
    .querySelectorAll("[data-back]")
    .forEach(button => {
        button.addEventListener("click", goBack);
    });

document
    .querySelectorAll(".practice-card")
    .forEach(button => {
        button.addEventListener("click", () => {
            const type =
                button.dataset.exercise;

            if (type === "reading") {
                showScreen("setup");
            } else if (type === "scale") {
                showScreen("scaleSetup");
            } else {
                startExercise(type);
            }
        });
    });

document
    .querySelectorAll("[data-clef]")
    .forEach(button => {
        button.addEventListener("click", () => {
            selectedClef =
                button.dataset.clef;

            document
                .querySelectorAll("[data-clef]")
                .forEach(option => {
                    const selected =
                        option === button;

                    option.classList.toggle(
                        "selected",
                        selected
                    );

                    option.setAttribute(
                        "aria-checked",
                        String(selected)
                    );
                });
        });
    });


document
    .querySelectorAll("[data-scale-group]")
    .forEach(button => {
        button.addEventListener("click", () => {
            selectedScaleGroup = button.dataset.scaleGroup;
            document.querySelectorAll("[data-scale-group]").forEach(option => {
                const selected = option === button;
                option.classList.toggle("selected", selected);
                option.setAttribute("aria-checked", String(selected));
            });
        });
    });

document
    .querySelectorAll("[data-scale-clef]")
    .forEach(button => {
        button.addEventListener("click", () => {
            selectedScaleClef = button.dataset.scaleClef;
            document.querySelectorAll("[data-scale-clef]").forEach(option => {
                const selected = option === button;
                option.classList.toggle("selected", selected);
                option.setAttribute("aria-checked", String(selected));
            });
        });
    });

document
    .getElementById("start-scale-practice")
    .addEventListener("click", () => {
        startExercise("scale");
    });

document
    .getElementById("start-reading")
    .addEventListener("click", () => {
        startExercise("reading");
    });

document
    .getElementById("previous-course")
    .addEventListener("click", () => {
        openCourse(
            Math.max(
                0,
                selectedCourseIndex - 1
            )
        );
    });

document
    .getElementById("next-course")
    .addEventListener("click", () => {
        if (
            selectedCourseIndex >=
            courses.length - 1
        ) {
            showScreen("learn");
        } else {
            openCourse(
                selectedCourseIndex + 1
            );
        }
    });

renderCourseGrid();
showScreen("home", false);
