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
        description: "Beat, note values and rests.",
        summary: "Rhythm tells you when to play and how long to hold a note.",
        takeaway: "Count a steady beat. Give every note its full value.",
        sections: [
            {
                title: "The beat",
                text: "The beat is the steady pulse of the music.",
                chips: [["♩  ♩  ♩  ♩", "Count: 1  2  3  4"]]
            },
            {
                title: "Note values",
                text: "Learn the main beat divisions.",
                chips: [
                    ["♩", "Quarter note — 1 beat"],
                    ["♪", "Eighth note — ½ beat"],
                    ["𝅘𝅥𝅯", "Sixteenth note — ¼ beat"]
                ]
            },
            {
                title: "Rests",
                text: "A rest marks silence. Its shape shows how long the silence lasts.",
                chips: [["𝄽", "Quarter rest"], ["𝄾", "Eighth rest"], ["𝄿", "Sixteenth rest"]]
            }
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
        description: "The sharps or flats used throughout a piece.",
        summary: "A key signature appears after the clef and shows which notes are normally sharp or flat.",
        takeaway: "Read the clef, then the key signature, before reading the notes.",
        sections: [
            {
                title: "C major",
                text: "C major has no sharps or flats.",
                visual: { type: "key", clef: "treble", key: "C", caption: "C major — no sharps or flats" }
            },
            {
                title: "G major",
                text: "G major has one sharp: F♯. Every F is normally played as F♯.",
                visual: { type: "key", clef: "treble", key: "G", caption: "G major — F♯" }
            },
            {
                title: "D major",
                text: "D major has two sharps: F♯ and C♯.",
                visual: { type: "key", clef: "treble", key: "D", caption: "D major — F♯ and C♯" }
            },
            {
                title: "F major",
                text: "F major has one flat: B♭. Every B is normally played as B♭.",
                visual: { type: "key", clef: "treble", key: "F", caption: "F major — B♭" }
            },
            {
                title: "B-flat major",
                text: "B-flat major has two flats: B♭ and E♭.",
                visual: { type: "key", clef: "treble", key: "Bb", caption: "B♭ major — B♭ and E♭" }
            },
            {
                title: "Remember the order",
                text: "Sharps and flats always appear in the same order.",
                chips: [["F  C  G  D  A  E  B", "Order of sharps"], ["B  E  A  D  G  C  F", "Order of flats"]]
            }
        ]
    }
];

const rhythmQuestions = [
    { symbol: "♩", name: "Quarter note" },
    { symbol: "♪", name: "Eighth note" },
    { symbol: "𝅘𝅥𝅯", name: "Sixteenth note" },
    { symbol: "𝄽", name: "Quarter rest" },
    { symbol: "𝄾", name: "Eighth rest" },
    { symbol: "𝄿", name: "Sixteenth rest" }
];

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
                                    class="lesson-visual"
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

            const width = Math.max(
                220,
                Math.min(300, target.clientWidth || 300)
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

            const notes =
                visual.type === "notes"
                    ? visual.notes
                        .map(note => `${note}/q`)
                        .join(", ")
                    : "c5/w";

            const voice = score.voice(
                score.notes(notes, { clef: visual.clef }),
                { time: visual.type === "notes" ? `${visual.notes.length}/4` : "4/4" }
            );

            const stave = system
                .addStave({ voices: [voice] })
                .addClef(visual.clef);

            if (visual.type === "key") {
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