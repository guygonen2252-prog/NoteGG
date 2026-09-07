const courses = [
    {
        title: "Music Basics",
        description: "Staff, pitch and measures.",
        summary: "Start here if written music is completely new to you.",
        takeaway: "Higher notes sit higher. Bar lines divide music into measures.",
        sections: [
            {
                title: "The staff",
                text: "Music is written on five lines and four spaces.",
                visual: {
                    type: "notes",
                    clef: "treble",
                    notes: ["c4", "c5"],
                    caption: "Low C → High C"
                }
            },
            {
                title: "Clefs",
                text: "Treble clef is typically used for higher notes, while bass clef is used for lower notes.",
                chips: [
                    ["𝄞", "Treble"],
                    ["𝄢", "Bass"]
                ]
            },
            {
                title: "Find notes on the keyboard",
                text: "Black keys repeat in groups of two and three. Use those groups as landmarks.",
                visual: { type: "keyboard", caption: "C is left of two black keys. F is left of three black keys." }
            },
            {
                title: "Find C and F",
                text: "C is immediately left of two black keys. F is immediately left of three black keys.",
                chips: [["C", "Left of 2 black keys"], ["F", "Left of 3 black keys"]]
            },
            {
                title: "Measures",
                text: "Bar lines divide music into small sections called measures.",
                example: "bar line  |  measure  |  bar line"
            }
        ]
    },
    {
        title: "Treble Clef",
        description: "Notes often played by the right hand.",
        summary: "Use G as your first landmark. Then count up or down.",
        takeaway: "Find G first. Nearby notes are only a step away.",
        sections: [
            {
                title: "The G landmark",
                text: "The clef curls around the second line. That line is G.",
                visual: {
                    type: "notes",
                    clef: "treble",
                    notes: ["g4"],
                    caption: "G4 — second line"
                }
            },
            {
                title: "Lines",
                text: "From bottom to top: E, G, B, D, F.",
                visual: { type: "notes", clef: "treble", notes: ["e4", "g4", "b4", "d5", "f5"], caption: "E G B D F — notes on the lines" },
                chips: [["E  G  B  D  F", "Treble lines"]]
            },
            {
                title: "Spaces",
                text: "From bottom to top: F, A, C, E.",
                visual: { type: "notes", clef: "treble", notes: ["f4", "a4", "c5", "e5"], caption: "F A C E — notes in the spaces" },
                chips: [["F  A  C  E", "Treble spaces"]]
            },
            {
                title: "Middle C",
                text: "Middle C sits on a short line below the staff.",
                visual: {
                    type: "notes",
                    clef: "treble",
                    notes: ["c4"],
                    caption: "C4 — middle C"
                }
            }
        ]
    },
    {
        title: "Bass Clef",
        description: "Notes often played by the left hand.",
        summary: "Use F as your first landmark. The two dots point to it.",
        takeaway: "Find F first. Use it to read the notes around it.",
        sections: [
            {
                title: "The F landmark",
                text: "The two dots surround the fourth line. That line is F.",
                visual: {
                    type: "notes",
                    clef: "bass",
                    notes: ["f3"],
                    caption: "F3 — fourth line"
                }
            },
            {
                title: "Lines",
                text: "From bottom to top: G, B, D, F, A.",
                visual: { type: "notes", clef: "bass", notes: ["g2", "b2", "d3", "f3", "a3"], caption: "G B D F A — notes on the lines" },
                chips: [["G  B  D  F  A", "Bass lines"]]
            },
            {
                title: "Spaces",
                text: "From bottom to top: A, C, E, G.",
                visual: { type: "notes", clef: "bass", notes: ["a2", "c3", "e3", "g3"], caption: "A C E G — notes in the spaces" },
                chips: [["A  C  E  G", "Bass spaces"]]
            },
            {
                title: "Middle C",
                text: "Middle C sits on a short line above the bass staff.",
                visual: {
                    type: "notes",
                    clef: "bass",
                    notes: ["c4"],
                    caption: "C4 — middle C"
                }
            }
        ]
    },
    {
        title: "Rhythm",
        description: "Note values and matching rests.",
        summary: "Each note and rest symbol represents a specific length of sound or silence.",
        takeaway: "Notes create sound. Rests create silence. Their values are counted in the same way.",
        sections: [
            { title: "The beat", text: "The beat is the steady pulse of the music.", chips: [["♩  ♩  ♩  ♩", "Count: 1  2  3  4"]] },
            { title: "Notes", text: "Learn each note by its proper name.", chips: [["𝅝", "Whole note"], ["𝅗𝅥", "Half note"], ["♩", "Quarter note"], ["♪", "Eighth note"], ["𝅘𝅥𝅯", "Sixteenth note"]] },
            { title: "Rests", text: "Rests use the same lengths, but represent silence.", chips: [["𝄻", "Whole rest"], ["𝄼", "Half rest"], ["𝄽", "Quarter rest"], ["𝄾", "Eighth rest"], ["𝄿", "Sixteenth rest"]] }
        ]
    },
    {
        title: "Accidentals",
        description: "Sharps, flats and naturals.",
        summary: "Accidentals raise, lower or reset a note.",
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
                text: "A natural cancels a sharp or flat and returns the note to its natural pitch.",
                chips: [["♮", "Cancel"]]
            }
        ]
    },
    {
        title: "Key Signatures",
        description: "All commonly written major key signatures.",
        summary: "The symbols after the clef show which notes are normally sharp or flat.",
        takeaway: "Major and minor keys can share the same key signature.",
        sections: [
            { title: "How they work", text: "A key-signature accidental applies to that note name throughout the music, unless another accidental changes it." },
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
                title: major,
                text: `${detail}. It shares this signature with ${minor}.`,
                visual: { type: "key", clef: "treble", key, caption: `${major} · ${minor}` }
            })),
            { title: "Order", text: "Sharps and flats always appear in the same order.", chips: [["F C G D A E B", "Sharps"], ["B E A D G C F", "Flats"]] }
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
        summary: "Dynamics use Italian symbols to show volume and changes in volume.",
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
        summary: "These signs control repetition, articulation, phrasing and timing.",
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
        summary: "Major scales use the pattern: whole, whole, half, whole, whole, whole, half.",
        takeaway: "Each scale begins and ends on its tonic.",
        sections: majorScaleSpecs.map(([name, key]) => ({
            title: name,
            text: `${name} ascending through one octave.`,
            visual: { type: "scale", clef: "treble", key, notes: makeScaleNotes(name), caption: name }
        }))
    },
    {
        title: "Natural Minor Scales",
        description: "All 12 natural minor scales.",
        summary: "Natural minor scales use: whole, half, whole, whole, half, whole, whole.",
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
    exercise: document.getElementById("exercise-screen")
};

let selectedCourseIndex = 0;
let selectedClef = "treble";
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
                                    class="lesson-visual${section.visual.type === "scale" ? " lesson-visual-wide" : ""}"
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
                        ${[1, 2, 3, 4, 5].map(number => `<span class="mini-black-key black-${number}"></span>`).join("")}
                    </div>
                `;
                return;
            }

            const width = Math.max(
                220,
                Math.min(visual.type === "scale" ? 560 : 320, target.clientWidth || (visual.type === "scale" ? 560 : 320))
            );

            const factory = new (window.Vex?.Flow || window.VexFlow).Factory({
                renderer: {
                    elementId: target.id,
                    width: width,
                    height: 145
                }
            });

            const score =
                factory.EasyScore();

            const system =
                factory.System({
                    x: 10,
                    y: 10,
                    width: width - 30
                });

            const hasNotes = Array.isArray(visual.notes);

            const notes = hasNotes
                ? visual.notes
                    .map(note => `${note}/q`)
                    .join(", ")
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

function renderKeyboard(startMidi, endMidi, onSelect) {
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
        key.textContent = item.note;

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
            key.textContent = sharp.note;

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

    if (activeExercise === "rhythm") {
        renderRhythmQuestion();
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
    currentQuestion =
        rhythmQuestions[
            Math.floor(
                Math.random() *
                rhythmQuestions.length
            )
        ];

    document.getElementById("exercise-label").textContent =
        "RHYTHM";

    document.getElementById("exercise-title").textContent =
        "What note is this?";

    document.getElementById("exercise-instruction").textContent =
        "Choose the correct note name.";

    document
        .getElementById("rhythm-panel")
        .classList.remove("hidden");

    document
        .getElementById("answer-options")
        .classList.remove("hidden");

    document.getElementById("rhythm-symbol").textContent =
        currentQuestion.symbol;

    document.getElementById("rhythm-name").textContent =
        "";

    renderNoteNameOptions(
        rhythmQuestions.map(question => question.name),
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