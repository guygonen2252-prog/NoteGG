const courses = [
    {
        title: "Treble Clef",
        description: "Learn higher notes from the keyboard upward.",
        summary: "Start with middle C, connect the staff to the keyboard, then use G as your reading landmark.",
        takeaway: "Find middle C on the keyboard, locate G on the second staff line, and count by letter from either landmark.",
        sections: [
            {
                title: "What the treble clef shows",
                text: "A staff has five lines and four spaces. The treble clef is normally used for notes around middle C and higher.",
                visual: { type: "notes", clef: "treble", notes: ["c4", "g4", "c5"], caption: "Notes rise as they move higher on the staff" }
            },
            {
                title: "Find middle C on the keyboard",
                text: "Black keys repeat in groups of two and three. Find the group of two nearest the centre of the piano: middle C is the white key immediately to its left.",
                visual: { type: "keyboard", caption: "Every white and black key has a note name" }
            },
            {
                title: "Middle C on the staff",
                text: "In treble clef, middle C is written on a short ledger line below the five staff lines.",
                visual: { type: "notes", clef: "treble", notes: ["c4"], caption: "C4 — middle C" }
            },
            {
                title: "Follow the musical alphabet",
                text: "The white keys repeat A, B, C, D, E, F, G. Moving one white key to the right moves to the next letter; after G, the pattern begins again at A.",
                chips: [["A B C D E F G", "White-key note names"], ["♯ / ♭", "Black keys use sharp or flat names"]]
            },
            {
                title: "The G landmark",
                text: "The treble-clef spiral circles the second line from the bottom. A note on that line is G4, the G above middle C.",
                visual: { type: "notes", clef: "treble", notes: ["g4"], caption: "G4 — second line" }
            },
            {
                title: "Lines",
                text: "The five treble lines, read from bottom to top, are E, G, B, D and F.",
                visual: { type: "notes", clef: "treble", notes: ["e4", "g4", "b4", "d5", "f5"], caption: "E G B D F — treble lines" },
                chips: [["E G B D F", "Bottom line to top line"]]
            },
            {
                title: "Spaces",
                text: "The four treble spaces, read from bottom to top, are F, A, C and E.",
                visual: { type: "notes", clef: "treble", notes: ["f4", "a4", "c5", "e5"], caption: "F A C E — treble spaces" },
                chips: [["F A C E", "Bottom space to top space"]]
            },
            {
                title: "Complete treble range",
                text: "The practice keyboard covers A3 through C6. Match each step on the staff to the next white key; sharps are the black keys immediately above those notes.",
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
        description: "Learn lower notes from the keyboard downward.",
        summary: "Start with middle C, move left on the keyboard, then use F as your reading landmark.",
        takeaway: "Bass notes are mainly left of middle C. Find F on the fourth line and count by letter to nearby notes.",
        sections: [
            {
                title: "What the bass clef shows",
                text: "A staff has five lines and four spaces. The bass clef is normally used for notes around middle C and lower.",
                visual: { type: "notes", clef: "bass", notes: ["c4", "f3", "c3"], caption: "Lower notes sit lower on the staff" }
            },
            {
                title: "Find middle C on the keyboard",
                text: "Find the group of two black keys nearest the centre of the piano. Middle C is the white key immediately to its left. Most bass-clef notes continue to the left of it.",
                visual: { type: "keyboard", caption: "Move left from middle C to reach lower notes" }
            },
            {
                title: "Middle C on the staff",
                text: "In bass clef, middle C is written on a short ledger line above the five staff lines.",
                visual: { type: "notes", clef: "bass", notes: ["c4"], caption: "C4 — middle C" }
            },
            {
                title: "Move down the keyboard",
                text: "Moving one white key left reverses the musical alphabet: C, B, A, G, F, E, D, C. The same seven letters repeat in every octave.",
                chips: [["C B A G F E D C", "Move left toward lower notes"], ["♯ / ♭", "Black keys use sharp or flat names"]]
            },
            {
                title: "The F landmark",
                text: "The two dots of the bass clef surround the fourth line from the bottom. A note on that line is F3.",
                visual: { type: "notes", clef: "bass", notes: ["f3"], caption: "F3 — fourth line" }
            },
            {
                title: "Lines",
                text: "The five bass lines, read from bottom to top, are G, B, D, F and A.",
                visual: { type: "notes", clef: "bass", notes: ["g2", "b2", "d3", "f3", "a3"], caption: "G B D F A — bass lines" },
                chips: [["G B D F A", "Bottom line to top line"]]
            },
            {
                title: "Spaces",
                text: "The four bass spaces, read from bottom to top, are A, C, E and G.",
                visual: { type: "notes", clef: "bass", notes: ["a2", "c3", "e3", "g3"], caption: "A C E G — bass spaces" },
                chips: [["A C E G", "Bottom space to top space"]]
            },
            {
                title: "Complete bass range",
                text: "The practice keyboard covers C2 through E4. Match each staff step to the next white key and use middle C as the point where bass and treble meet.",
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
        description: "Understand pulse, note lengths and rests.",
        summary: "Rhythm organises sound and silence in time. Begin with the pulse, then learn how each symbol divides it.",
        takeaway: "In 4/4 time, a quarter note receives one beat. Other notes and rests are measured in relation to that beat.",
        sections: [
            {
                title: "Pulse and beat",
                text: "The pulse is the steady underlying movement of the music. Each counted pulse is called a beat.",
                chips: [["♩  ♩  ♩  ♩", "Count evenly: 1 2 3 4"]]
            },
            {
                title: "Measures and bar lines",
                text: "Bar lines divide music into measures. Each measure contains the number of beats specified by the time signature.",
                example: "bar line  |  one measure  |  bar line"
            },
            {
                title: "Time signatures",
                text: "The top number shows how many beats are in each measure. In 4/4, there are four quarter-note beats per measure.",
                chips: [["4/4", "Four beats"], ["3/4", "Three beats"], ["2/4", "Two beats"]]
            },
            {
                title: "Whole and half notes",
                text: "In 4/4 time, a whole note lasts four beats and fills the measure. A half note lasts two beats, so two half notes fill the measure.",
                chips: [["𝅝", "Whole note — 4 beats"], ["𝅗𝅥", "Half note — 2 beats"]]
            },
            {
                title: "Quarter notes",
                text: "A quarter note lasts one beat in 4/4 time. Four quarter notes fill one measure.",
                chips: [["♩ ♩ ♩ ♩", "Count: 1 2 3 4"]]
            },
            {
                title: "Eighth notes",
                text: "An eighth note lasts half a beat. Two eighth notes fit inside one quarter-note beat.",
                chips: [["♪ + ♪ = ♩", "Count: 1 &"]]
            },
            {
                title: "Sixteenth notes",
                text: "A sixteenth note lasts one quarter of a beat. Four sixteenth notes fit inside one quarter-note beat.",
                chips: [["𝅘𝅥𝅯 𝅘𝅥𝅯 𝅘𝅥𝅯 𝅘𝅥𝅯 = ♩", "Count: 1 e & a"]]
            },
            {
                title: "Rests",
                text: "A rest represents measured silence. Every note value has a rest of exactly the same duration.",
                chips: [["𝄻", "Whole rest — 4 beats"], ["𝄼", "Half rest — 2 beats"], ["𝄽", "Quarter rest — 1 beat"], ["𝄾", "Eighth rest — ½ beat"], ["𝄿", "Sixteenth rest — ¼ beat"]]
            },
            {
                title: "Dots and ties",
                text: "A dot adds half of a note's original value. A tie joins two notes of the same pitch so they sound as one continuous note.",
                chips: [["♩.", "Dotted quarter — 1½ beats"], ["𝅗𝅥 + ♩", "Tied length — 3 beats"]]
            },
            {
                title: "Count before playing",
                text: "Keep the beat even. Say the count aloud first, then clap or play the rhythm without changing speed.",
                chips: [["1 2 3 4", "Quarter notes"], ["1 & 2 &", "Eighth notes"], ["1 e & a", "Sixteenth notes"]]
            }
        ]
    },
    {
        title: "Accidentals",
        description: "Sharps, flats and naturals.",
        summary: "Accidentals alter the pitch of a written note by a semitone and normally remain active for that pitch until the end of the measure.",
        takeaway: "A sharp raises, a flat lowers, and a natural cancels an earlier sharp or flat.",
        sections: [
            {
                title: "Sharp",
                text: "A sharp raises the written note by one semitone—the smallest standard step on the piano.",
                chips: [["♯", "Raise"]]
            },
            {
                title: "Flat",
                text: "A flat lowers the written note by one semitone. A black key may therefore have both a sharp name and a flat name.",
                chips: [["♭", "Lower"]]
            },
            {
                title: "Natural",
                text: "A natural cancels a previous sharp or flat and restores the white-key version of that note for the remainder of the measure.",
                chips: [["♮", "Cancel"]]
            }
        ]
    },
    {
        title: "Key Signatures",
        description: "All 15 major and relative minor key signatures.",
        summary: "A key signature appears after the clef and shows which note names remain sharp or flat throughout the music.",
        takeaway: "Every major key shares its signature with a relative minor key, although each has a different tonic.",
        sections: [
            { title: "How key signatures work", text: "Sharps or flats written after the clef apply to that note name in every octave. They remain active until the key signature changes, although a written accidental can temporarily override them." },
            { title: "Major and relative minor", text: "A major key and its relative minor contain the same notes and use the same key signature. The difference is their tonic—the note that feels like home.", chips: [["C major · A minor", "No sharps or flats"], ["G major · E minor", "One sharp"]] },
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
                text: `${detail}. Both keys use this signature, but ${major} centres on its major tonic and ${minor} centres on its minor tonic.`,
                visual: { type: "key", clef: "treble", key, caption: `${major} · ${minor}` }
            })),
            { title: "Order of accidentals", text: "Key-signature sharps and flats are always written in a fixed order. Counting them lets you identify the key.", chips: [["F C G D A E B", "Sharps"], ["B E A D G C F", "Flats"]] }
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
        summary: "Dynamic markings indicate the intended level of sound and how that level should change through a phrase.",
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
        summary: "Music signs provide performance instructions that are not contained in pitch and rhythm alone.",
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
        summary: "A major scale contains seven different notes before the tonic repeats. Its interval pattern is whole, whole, half, whole, whole, whole, half.",
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
        summary: "The natural minor scale contains seven different notes before the tonic repeats. Its interval pattern is whole, half, whole, whole, half, whole, whole.",
        takeaway: "Each natural minor shares a signature with a relative major key.",
        sections: minorScaleSpecs.map(([name, key]) => ({
            title: name,
            text: `${name} ascending through one octave.`,
            visual: { type: "scale", clef: "treble", key, notes: makeScaleNotes(name), caption: name }
        }))
    }
);

const rhythmQuestions = [
    { symbol: "𝅝", name: "Whole note" },
    { symbol: "𝅗𝅥", name: "Half note" },
    { symbol: "♩", name: "Quarter note" },
    { symbol: "♪", name: "Eighth note" },
    { symbol: "𝅘𝅥𝅯", name: "Sixteenth note" },
    { symbol: "𝄻", name: "Whole rest" },
    { symbol: "𝄼", name: "Half rest" },
    { symbol: "𝄽", name: "Quarter rest" },
    { symbol: "𝄾", name: "Eighth rest" },
    { symbol: "𝄿", name: "Sixteenth rest" }
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

function showScreen(name) {
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
            (["setup", "exercise"].includes(name) && section === "practice");

        button.classList.toggle("active", active);
    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
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
                                    <span>${section.visual.caption}</span>
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
                                <div class="symbol-line">
                                    ${section.chips.map(chip => `
                                        <div class="symbol-chip">
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
        `).join("");

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
    });
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
                    <div class="mini-keyboard" aria-label="Piano keyboard landmarks">
                        <div class="mini-white-keys">
                            ${["C", "D", "E", "F", "G", "A", "B"].map(note => `<span class="mini-white-key${note === "C" || note === "F" ? " landmark" : ""}">${note}</span>`).join("")}
                        </div>
                        ${["C#", "D#", "F#", "G#", "A#"].map((note, index) => `<span class="mini-black-key black-${index + 1}">${note}</span>`).join("")}
                    </div>
                `;
                return;
            }

            const width = Math.max(
                220,
                Math.min(["scale", "range"].includes(visual.type) ? 680 : 320, target.clientWidth || (["scale", "range"].includes(visual.type) ? 680 : 320))
            );

            try {
                const VexFlow = window.Vex?.Flow || window.VexFlow;

                if (!VexFlow) {
                    throw new Error("Music notation library did not load.");
                }

                const factory = new VexFlow.Factory({
                    renderer: {
                        elementId: target.id,
                        width,
                        height: 145
                    }
                });

                const score = factory.EasyScore();
                const system = factory.System({
                    x: 10,
                    y: 10,
                    width: width - 30
                });

                const hasNotes = Array.isArray(visual.notes);
                const notes = hasNotes
                    ? visual.notes.map(note => `${note}/q`).join(", ")
                    : "c5/w";

                const voice = score.voice(
                    score.notes(notes, { clef: visual.clef }),
                    { time: hasNotes ? `${visual.notes.length}/4` : "4/4" }
                );

                const stave = system
                    .addStave({ voices: [voice] })
                    .addClef(visual.clef);

                if (visual.key) {
                    stave.addKeySignature(visual.key);
                }

                factory.draw();
            } catch (error) {
                target.innerHTML = `
                    <div class="notation-fallback" role="img" aria-label="${visual.caption}">
                        <span class="fallback-clef">${visual.clef === "bass" ? "𝄢" : "𝄞"}</span>
                        <span class="fallback-staff-lines" aria-hidden="true"></span>
                        <strong>${visual.caption}</strong>
                    </div>
                `;
                console.warn("Lesson visual fallback used:", error);
            }
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

    const factory = new (window.Vex?.Flow || window.VexFlow).Factory({
        renderer: {
            elementId: container.id,
            width: width,
            height: 165
        }
    });

    const score =
        factory.EasyScore();

    const system =
        factory.System({
            x: 10,
            y: 15,
            width: width - 30
        });

    system
        .addStave({
            voices: [
                score.voice(
                    score.notes(
                        `${question.vNote}/w`,
                        {
                            clef: question.clef
                        }
                    )
                )
            ]
        })
        .addClef(question.clef);

    factory.draw();
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
            onSelect(item, key);
        });

        whiteContainer.appendChild(key);
    });

    const totalWhite =
        whiteNotes.length;

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
    document.getElementById("rhythm-symbol").textContent = currentQuestion.symbol;
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
showScreen("home");