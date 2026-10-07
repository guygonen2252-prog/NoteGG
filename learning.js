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

// Engraved outlines from Bravura, Copyright Steinberg Media Technologies GmbH.
// SIL Open Font License 1.1; see NOTATION-LICENSE.txt. Embedded paths need no font download.
const engravedSymbols = {"treble": "M376 415C374 427 376 428 382 434C398 449 419 470 438 491C522 583 572 702 572 815C572 902 548 988 507 1048C492 1070 466 1098 455 1098C441 1098 410 1072 390 1050C316 968 292 843 292 739C292 681 299 616 306 575C308 563 309 561 297 551C233 498 164 437 112 373C43 287 0 194 0 87C0 -87 119 -252 364 -252C387 -252 413 -250 433 -246C444 -244 446 -243 448 -255C460 -322 475 -409 475 -456C475 -604 375 -622 316 -622C262 -622 236 -606 236 -593C236 -586 245 -583 268 -576C299 -567 335 -540 335 -482C335 -427 300 -380 239 -380C172 -380 132 -433 132 -495C132 -560 171 -658 322 -658C389 -658 519 -628 519 -458C519 -401 501 -306 490 -244C488 -232 489 -233 503 -227C604 -187 671 -102 671 11C671 139 577 252 430 252C404 252 404 252 401 270ZM470 943C503 943 530 916 530 861C530 792 497 728 419 650C403 634 379 611 356 591C349 585 345 586 343 599C339 625 337 659 337 691C337 847 409 943 470 943ZM361 262C364 243 364 244 346 238C258 208 201 129 201 44C201 -46 248 -110 316 -133C324 -136 336 -139 343 -139C351 -139 355 -134 355 -128C355 -121 347 -118 340 -115C298 -97 268 -54 268 -8C268 49 307 92 368 109C384 113 386 112 388 101L438 -197C440 -208 439 -208 424 -211C408 -214 388 -216 368 -216C193 -216 80 -119 80 20C80 79 90 158 173 252C233 319 279 356 326 394C336 402 338 401 340 390ZM430 103C428 115 429 118 441 117C522 110 589 42 589 -46C589 -109 551 -160 495 -188C483 -194 481 -194 479 -182Z", "bass": "M252 262C78 262 0 135 0 39C0 -41 42 -110 123 -110C186 -110 229 -66 229 -4C229 60 182 100 133 100C106 100 96 93 83 93C70 93 67 101 67 111C67 151 127 224 229 224C335 224 381 120 381 -37C381 -140 359 -260 297 -356C237 -449 134 -534 10 -605C1 -610 -5 -615 -5 -623C-5 -629 -1 -635 8 -635C13 -635 19 -633 25 -630C158 -565 286 -489 392 -375C479 -281 531 -159 531 -28C531 146 425 262 252 262ZM629 180C598 180 574 156 574 125C574 94 598 70 629 70C660 70 684 94 684 125C684 156 660 180 629 180ZM630 -71C599 -71 576 -94 576 -125C576 -156 599 -179 630 -179C661 -179 684 -156 684 -125C684 -94 661 -71 630 -71Z", "flat": "M12 -170C15 -174 18 -175 21 -175C24 -175 27 -173 27 -173C57 -156 81 -129 106 -112C195 -50 226 11 226 57C226 114 182 150 136 153C129 153 122 152 115 150C104 147 92 143 81 136C75 131 64 122 59 122C57 122 56 122 54 123C47 126 43 133 43 140C44 162 50 402 50 422C50 433 41 439 31 439C17 439 1 429 0 411C0 411 4 -160 12 -170ZM47 -81C47 -81 44 -21 44 19C44 35 45 47 46 51C50 63 76 85 90 93C99 98 108 100 116 100C126 100 135 96 141 89C151 78 157 61 157 42C157 24 152 3 140 -18C127 -42 98 -74 68 -93C64 -95 61 -96 58 -96C49 -96 47 -86 47 -81Z", "natural": "M141 181C139 181 138 180 137 180C137 180 73 157 47 157C41 157 37 158 37 162V329C37 336 31 341 25 341H12C5 341 0 336 0 329V-186C0 -192 3 -195 8 -195C9 -195 11 -194 12 -194C12 -194 14 -194 15 -193C29 -187 85 -163 114 -163C124 -163 131 -166 131 -174V-323C131 -330 136 -335 143 -335H156C162 -335 168 -330 168 -323V179C168 184 164 187 160 187C159 187 157 187 156 186ZM37 39C37 53 98 79 122 79C128 79 131 78 131 74V-29C131 -47 74 -70 49 -70C42 -70 37 -68 37 -64Z", "sharp": "M237 118C244 121 249 129 249 135V206C249 211 246 214 242 214C240 214 239 214 237 213C237 213 217 205 212 204C205 204 198 209 198 217V339C198 345 192 350 184 350C174 350 168 345 168 339V209C167 199 164 186 155 180C143 173 109 159 92 155C83 155 80 167 80 175V295C80 301 73 306 66 306C56 306 50 301 50 295V160C50 146 44 136 38 133C32 130 12 122 12 122C5 120 0 112 0 106V35C0 29 3 26 8 26C9 26 11 27 12 27C12 27 27 33 34 37C35 37 36 38 37 38C44 38 50 28 50 20V-79C50 -90 45 -99 39 -102C33 -104 12 -113 12 -113C5 -115 0 -123 0 -129V-200C0 -206 3 -209 8 -209C9 -209 11 -208 12 -208C12 -208 26 -202 35 -199C36 -198 37 -198 38 -198C45 -198 50 -209 50 -214V-337C50 -343 56 -348 63 -348C73 -348 80 -343 80 -337V-198C80 -185 85 -178 90 -176L151 -151C152 -151 154 -150 155 -150C163 -150 168 -162 168 -168V-293C168 -299 174 -304 181 -304C192 -304 198 -299 198 -293V-151C198 -143 202 -131 209 -128C216 -125 237 -117 237 -117C244 -114 249 -106 249 -100V-29C249 -24 246 -21 242 -21C240 -21 239 -21 237 -22L211 -32C205 -32 198 -26 198 -14V79C198 86 203 105 211 108ZM168 -45C162 -65 115 -85 92 -85C86 -85 81 -83 80 -80C78 -76 77 -54 77 -30C77 1 78 36 80 44C82 61 128 82 153 82C160 82 166 80 168 76C170 71 172 46 172 19C172 -8 170 -36 168 -45Z"};
function clefPath(clef) {
    const bass = clef === "bass";
    // SMuFL origins: G4 on line two (114), F3 on line four (88).
    return `<path class="engraved-clef" fill="currentColor" stroke="none" transform="translate(22 ${bass ? 88 : 114}) scale(0.052 -0.052)" d="${engravedSymbols[bass ? 'bass' : 'treble']}"/>`;
}
function accidentalPath(symbol, x, y) {
    const name = symbol === "♭" ? "flat" : symbol === "♮" ? "natural" : "sharp";
    return `<path class="engraved-accidental" fill="currentColor" stroke="none" transform="translate(${x} ${y}) scale(0.052 -0.052)" d="${engravedSymbols[name]}"/>`;
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
// Bravura outlines keep notation identical on desktop and mobile, without font loading.
const notationGlyphs = {"whole":{"path":"M235 136C90 136 0 75 0 1C0 -72 62 -137 224 -137C402 -137 459 -75 459 1C459 78 336 136 235 136ZM121 68C133 105 173 111 207 111C281 111 341 31 341 -35C341 -42 340 -49 339 -55C334 -82 318 -101 291 -108C280 -111 269 -112 258 -112C248 -112 239 -111 229 -108C211 -102 193 -92 178 -79C170 -72 162 -64 155 -55C134 -30 117 7 117 41C117 50 118 59 121 68Z","bounds":[0,-137,459,136],"advance":459},"half":{"path":"M112 -145C302 -145 341 9 341 48V875H311V118C291 135 262 145 227 145C54 145 0 11 0 -49C0 -110 49 -145 112 -145ZM139 52C196 85 232 97 256 97C278 97 290 87 298 73C302 66 305 59 305 51C305 28 281 0 200 -53C148 -88 112 -100 87 -100C63 -100 49 -88 41 -74C37 -67 34 -59 34 -51C34 -26 59 6 139 52Z","bounds":[0,-145,341,875],"advance":341},"quarter":{"path":"M302 115C283 132 255 141 222 141C99 141 0 50 0 -47C0 -106 48 -141 109 -141C209 -141 332 -48 332 47V875H302Z","bounds":[0,-141,332,875],"advance":332},"eighth":{"path":"M451 594C400 673 358 755 342 851C339 867 331 873 312 873C307 873 303 871 302 864V118C283 135 255 144 222 144C99 144 0 53 0 -44C0 -103 48 -138 109 -138C209 -138 332 -45 332 50V611C394 573 468 463 499 390C514 356 523 299 523 240C523 195 516 148 499 103C497 97 496 92 496 88C496 72 506 63 512 59L514 58C523 57 535 61 540 78C540 78 566 173 566 251C566 376 514 494 451 594Z","bounds":[0,-138,566,873],"advance":566},"sixteenth":{"path":"M552 327C552 330 551 332 551 336C551 338 551 340 552 343C555 349 577 409 577 470C577 483 576 494 574 506C564 574 538 602 466 680C412 738 356 754 339 860C337 871 325 873 319 873C313 873 302 872 302 872V118C283 135 255 144 222 144C99 144 0 53 0 -44C0 -103 48 -138 109 -138C209 -138 332 -45 332 50V474C387 470 449 453 509 331C532 283 541 234 541 182C541 153 538 123 533 93C532 89 532 87 532 84C532 70 539 62 546 60C549 59 551 58 554 58C561 58 568 62 574 75C578 80 581 137 581 185V207C581 249 570 290 552 327ZM538 440C536 432 536 422 531 414C530 411 523 408 518 408C515 408 513 409 511 412C495 437 478 457 457 481C410 535 364 559 343 641C342 642 342 643 342 644C342 648 348 654 356 654H364C425 654 479 598 512 549C530 523 539 492 539 460C539 453 539 447 538 440Z","bounds":[0,-138,581,873],"advance":581},"whole-rest":{"path":"M282 -109V-17C282 -2 270 9 256 9H26C11 9 0 -2 0 -17V-109C0 -123 11 -135 26 -135H256C270 -135 282 -123 282 -109Z","bounds":[0,-135,282,9],"advance":283},"half-rest":{"path":"M282 24V116C282 131 270 142 256 142H26C11 142 0 131 0 116V24C0 10 11 -2 26 -2H256C270 -2 282 10 282 24Z","bounds":[0,-2,282,142],"advance":283},"quarter-rest":{"path":"M78 -38C94 -58 108 -77 121 -98C123 -102 127 -110 127 -112C127 -113 127 -115 126 -116C124 -120 120 -121 115 -121C111 -121 103 -119 99 -118C94 -118 88 -115 83 -115C40 -115 1 -158 1 -211C1 -261 44 -310 117 -366C125 -372 135 -375 143 -375C150 -375 157 -373 158 -369C159 -366 160 -364 160 -362C160 -353 152 -345 144 -338C131 -338 120 -311 118 -302C115 -294 114 -285 114 -276C114 -245 129 -210 161 -204C166 -203 171 -203 177 -203C206 -203 239 -214 255 -220C256 -220 257 -221 258 -221C261 -222 263 -222 265 -222C268 -222 270 -221 270 -218C270 -206 244 -173 233 -161C195 -115 164 -78 164 -22C164 -18 165 -13 165 -9C169 49 205 97 231 138C234 143 235 148 235 153C235 163 231 172 231 172C231 172 83 348 66 365C61 370 54 373 48 373C38 373 28 366 28 352C28 347 29 342 32 336C36 325 93 274 93 202C93 165 78 122 33 75C23 65 19 54 19 46C19 32 29 22 29 22Z","bounds":[1,-375,270,373],"advance":270},"eighth-rest":{"path":"M134 107C134 144 104 174 67 174C30 174 0 144 0 107C0 86 12 68 27 56C36 50 45 45 55 43C63 41 72 39 81 39C95 39 109 42 120 46C134 50 143 54 156 61C158 62 160 62 161 62C165 62 166 58 166 53C166 50 166 46 165 42C162 27 90 -172 72 -238C72 -250 95 -251 101 -251C112 -251 126 -249 136 -241C139 -239 237 112 237 112C241 130 246 146 247 151C247 161 237 166 235 167C233 167 230 167 224 163C217 157 167 97 134 97Z","bounds":[0,-251,247,174],"advance":250},"sixteenth-rest":{"path":"M208 111C208 149 178 179 140 179C103 179 72 149 72 111C72 91 84 72 100 60C108 54 118 49 128 46C135 44 143 43 152 43C166 43 182 46 194 50C208 54 217 58 230 65C233 66 235 67 237 67C240 67 242 65 242 60C242 57 241 52 239 45C237 37 193 -101 184 -120C176 -139 149 -151 135 -151C136 -147 136 -144 136 -141C136 -103 105 -73 68 -73C30 -73 0 -103 0 -141C0 -161 12 -180 28 -192C36 -198 45 -203 55 -206C63 -208 71 -209 80 -209C94 -209 110 -206 122 -202C136 -198 142 -195 155 -188C157 -188 159 -190 159 -193C159 -194 158 -195 158 -196L63 -479C63 -480 62 -481 62 -482C62 -490 71 -500 93 -500C122 -500 127 -488 131 -477L247 -96C273 -11 292 56 292 56C292 56 317 144 319 157C319 159 320 160 320 161C320 167 312 171 310 172C305 172 302 170 299 168C292 162 242 102 208 101Z","bounds":[0,-500,320,179],"advance":320},"fermata":{"path":"M302 221C515 221 558 63 568 25C569 22 569 19 570 18C577 4 581 -3 591 -3C600 -3 605 1 605 11C605 14 605 17 604 21C542 327 333 329 304 329C272 329 65 327 4 21C3 17 3 13 3 10C3 0 8 -3 16 -3C25 -3 30 4 36 18C37 19 38 23 39 27C51 68 96 221 302 221ZM358 52C358 81 333 106 303 106C274 106 249 81 249 52C249 22 274 -3 303 -3C333 -3 358 22 358 52Z","bounds":[3,-3,605,329],"advance":605},"staccato":{"path":"M84 42C84 65 65 84 42 84C19 84 0 65 0 42C0 19 19 0 42 0C65 0 84 19 84 42Z","bounds":[0,0,84,84],"advance":84},"accent":{"path":"M326 105C339 108 339 115 339 123C339 131 339 137 326 141L26 243C22 244 18 245 17 245C8 245 5 239 2 231C1 227 0 224 0 221C0 216 3 211 14 207C14 207 230 134 240 130C245 129 247 126 247 123C247 120 245 118 239 116C228 113 14 40 14 40C3 35 0 30 0 25C0 22 1 19 2 16C5 9 9 1 16 1C17 1 19 1 20 2Z","bounds":[0,1,339,245],"advance":339},"p":{"path":"M274 274C243 274 221 264 203 248C189 236 186 228 182 228C177 228 180 235 171 252C164 264 149 273 123 273C64 273 32 231 1 174C-4 165 -6 160 -6 155C-6 148 -1 144 5 144C12 144 16 150 21 159C50 209 70 235 88 235C96 235 99 230 99 223C99 215 96 205 93 198L-30 -107C-33 -115 -35 -117 -45 -117H-76C-85 -117 -89 -121 -89 -130C-89 -138 -85 -142 -77 -142H116C125 -142 129 -138 129 -129C129 -121 125 -117 117 -117H77C71 -117 68 -117 68 -114C68 -113 69 -110 70 -107L115 5C117 10 119 17 124 17C129 17 132 7 148 -1C162 -8 175 -10 192 -10C288 -10 366 90 366 185C366 243 330 274 274 274ZM247 237C264 237 270 222 270 200C270 151 217 24 169 24C152 24 144 35 144 56C144 77 152 97 163 125L183 174C197 208 223 237 247 237Z","bounds":[-89,-142,366,274],"advance":365},"m":{"path":"M367 274C338 274 315 260 299 243C289 233 288 229 284 229C279 229 282 237 276 250C270 263 257 274 232 274C203 274 180 260 164 243C154 233 153 229 149 229C144 229 147 236 141 250C135 263 121 273 102 273C49 273 18 230 -13 174C-18 165 -20 160 -20 155C-20 148 -15 144 -9 144C-2 144 1 149 6 157C36 208 56 235 74 235C82 235 85 230 85 223C85 215 82 205 79 198L6 17C4 12 3 9 3 6C3 2 6 0 14 0H63C72 0 75 2 79 12L144 174C156 203 177 224 199 224C211 224 214 218 214 210C214 198 210 187 204 173C204 172 203 172 141 17C139 12 138 9 138 6C138 2 141 0 149 0H198C207 0 210 2 214 12L279 174C291 203 312 224 334 224C346 224 349 218 349 210C349 175 287 72 287 30C287 4 303 -10 332 -10C370 -10 405 18 437 71C443 81 446 87 446 92C446 98 442 101 437 101C430 101 427 96 422 88C403 58 384 34 371 34C365 34 363 37 363 43C363 78 421 165 421 220C421 245 408 274 367 274Z","bounds":[-20,-10,446,274],"advance":437},"f":{"path":"M16 264C5 264 0 259 0 248C0 238 5 233 15 233H73C79 233 81 233 81 229C81 227 80 224 79 219L16 0C-12 -98 -30 -130 -70 -130C-83 -130 -88 -126 -88 -121C-88 -113 -79 -118 -64 -108C-52 -100 -44 -87 -44 -71C-44 -45 -62 -30 -89 -30C-119 -30 -141 -54 -141 -85C-141 -129 -108 -152 -66 -152C10 -152 57 -101 112 12C141 73 163 135 187 219C187 220 188 221 188 222C188 224 196 233 201 233H266C277 233 282 238 282 249C282 259 277 264 267 264H207C200 264 197 264 197 269C197 272 198 275 199 281C219 368 241 421 291 421C299 421 307 419 307 413C307 407 302 408 291 403C278 397 270 383 270 365C270 337 290 323 315 323C341 323 364 340 364 377C364 414 341 444 278 444C181 444 127 375 94 279C89 264 88 264 74 264Z","bounds":[-141,-152,364,444],"advance":364},"s":{"path":"M147 273C88 273 47 243 47 190C47 155 66 136 101 112C130 92 139 79 139 59C139 37 120 14 88 14C63 14 46 22 46 29C46 34 52 32 63 39C72 45 77 55 77 68C77 88 60 101 41 101C17 101 0 81 0 54C0 21 34 -10 87 -10C152 -10 202 25 202 83C202 111 192 132 153 161C117 188 105 199 105 218C105 234 117 251 148 251C165 251 179 247 179 240C179 236 174 236 167 231C161 226 157 218 157 207C157 187 172 175 192 175C216 175 229 194 229 213C229 250 198 273 147 273Z","bounds":[0,-10,229,273],"advance":229},"z":{"path":"M231 268C223 268 218 265 207 262C196 259 180 257 166 257C106 257 77 266 65 266C55 266 50 262 47 253L23 183C21 177 20 172 20 168C20 161 25 158 31 158C38 158 42 164 46 173L56 194C59 200 61 206 67 206C71 206 88 203 117 203C135 203 149 210 155 210C155 206 137 188 136 187L-18 31C-26 23 -30 19 -30 11C-30 4 -25 -1 -17 -1C-8 -1 -2 7 3 11C11 17 19 21 27 21C55 21 75 -10 124 -10C180 -10 206 30 206 71C206 102 188 115 170 115C152 115 137 101 137 80C137 61 150 50 164 50C174 50 177 55 180 55C182 55 183 54 183 52C183 50 181 46 179 42C175 35 168 31 159 31C129 31 120 66 81 66C68 66 62 60 59 60C59 60 66 72 71 77L231 235C239 243 244 249 244 257C244 264 238 268 231 268Z","bounds":[-30,-10,244,268],"advance":244},"ottava":{"path":"M248 463C146 463 75 413 75 328C75 299 83 274 99 255C104 249 107 244 107 240C107 235 102 232 89 226C25 200 0 156 0 108C0 42 48 -10 156 -10C253 -10 338 41 338 132C338 169 329 195 306 220C299 228 294 233 294 238C294 243 299 247 311 253C365 281 386 322 386 359C386 416 346 463 248 463ZM246 433C294 433 310 401 310 368C310 335 295 300 262 277C258 274 254 273 250 273C245 273 240 275 232 281C185 316 170 334 170 363C170 407 201 433 246 433ZM134 200C138 202 141 204 144 204C149 204 155 201 163 194C227 144 243 130 243 100C243 49 205 20 158 20C97 20 78 61 78 97C78 128 92 174 134 200Z","bounds":[0,-10,386,463],"advance":386},"ottavaBassa":{"path":"M248 463C146 463 75 413 75 328C75 299 83 274 99 255C104 249 107 244 107 240C107 235 102 232 89 226C25 200 0 156 0 108C0 42 48 -10 156 -10C253 -10 338 41 338 132C338 169 329 195 306 220C299 228 294 233 294 238C294 243 299 247 311 253C365 281 386 322 386 359C386 416 346 463 248 463ZM246 433C294 433 310 401 310 368C310 335 295 300 262 277C258 274 254 273 250 273C245 273 240 275 232 281C185 316 170 334 170 363C170 407 201 433 246 433ZM817 209C818 213 819 216 819 218C819 223 816 225 808 225H784C775 225 772 221 770 213C767 201 766 197 763 197C761 197 758 202 754 208C746 221 735 227 717 227C654 227 597 147 597 71C597 13 629 -10 657 -10C679 -10 698 3 712 23C713 24 718 34 723 34C726 34 727 28 729 19C733 2 744 -9 766 -9C805 -9 826 43 834 62C834 67 839 74 839 80C839 87 833 90 828 90C822 90 819 86 817 81C807 56 792 19 774 19C766 19 763 24 763 32C763 36 764 42 766 47ZM440 225C403 225 383 187 369 148C366 140 365 135 365 131C365 124 371 121 376 121C381 121 385 124 387 130C395 156 410 193 427 193C433 193 436 189 436 183C436 148 393 99 393 50C393 11 424 -10 460 -10C523 -10 579 66 579 163C579 195 565 223 540 223C521 223 507 206 507 188C507 173 518 163 528 156C539 148 546 140 546 123C546 78 506 19 472 19C452 19 444 32 444 46C444 84 482 125 482 173C482 202 466 225 440 225ZM134 200C138 202 141 204 144 204C149 204 155 201 163 194C227 144 243 130 243 100C243 49 205 20 158 20C97 20 78 61 78 97C78 128 92 174 134 200ZM722 197C738 197 744 182 744 166C744 122 701 20 668 20C654 20 646 34 646 58C646 106 679 197 722 197Z","bounds":[0,-10,839,463],"advance":839}};
function musicGlyph(name, x, y, scale = .056) {
    const glyph = notationGlyphs[name];
    if (!glyph) throw new Error(`Unknown music glyph: ${name}`);
    return `<path data-glyph="${name}" d="${glyph.path}" transform="translate(${x} ${y}) scale(${scale} ${-scale})" fill="currentColor" stroke="none"/>`;
}
function symbolStaff(width = 190, top = 42, gap = 14) {
    return `<g stroke="#8992a2" stroke-width=".9">${Array.from({length:5},(_,i)=>`<path d="M12 ${top+i*gap}H${width-12}"/>`).join('')}</g>`;
}
rhythmIcon = function(type) {
    const names = {whole:'Whole note',half:'Half note',quarter:'Quarter note',eighth:'Eighth note',sixteenth:'Sixteenth note','whole-rest':'Whole rest','half-rest':'Half rest','quarter-rest':'Quarter rest','eighth-rest':'Eighth rest','sixteenth-rest':'Sixteenth rest','dotted-quarter':'Dotted quarter note',tie:'Tied notes'};
    if (!names[type]) return '';
    let drawing;
    if (type.endsWith('-rest')) {
        // Whole rests hang from the fourth line; half rests sit on the third.
        const baseline = type==='whole-rest'?36:type==='half-rest'?50:50;
        const glyph = notationGlyphs[type];
        const x = 50-(glyph.bounds[0]+glyph.bounds[2])*.056/2;
        drawing = symbolStaff(100,22,14)+musicGlyph(type,x,baseline);
    } else if (type==='tie') {
        drawing = musicGlyph('quarter',15,60)+musicGlyph('quarter',65,60)+`<path d="M24 74Q49 91 74 74Q49 86 24 74Z" fill="currentColor" stroke="none"/>`;
    } else {
        const name = type==='dotted-quarter'?'quarter':type;
        const glyph = notationGlyphs[name];
        const x = (100-glyph.advance*.056)/2-(type==='dotted-quarter'?7:0);
        drawing = musicGlyph(name,x,type==='whole'?54:70);
        if(type==='dotted-quarter') drawing += `<circle cx="${x+glyph.advance*.056+9}" cy="69" r="2.5" fill="currentColor" stroke="none"/>`;
    }
    return `<svg class="rhythm-svg engraved-rhythm" viewBox="0 0 100 100" role="img" aria-label="${names[type]}" focusable="false" style="color:#13213c">${drawing}</svg>`;
};
function dynamicVisual(mark) {
    let x=0; const scale=.065; let min=0,max=0;
    const paths=[...mark].map(letter=>{const g=notationGlyphs[letter];if(!g)throw new Error('Unknown dynamic');min=Math.min(min,x+g.bounds[0]*scale);max=Math.max(max,x+g.bounds[2]*scale);const p=musicGlyph(letter,x,35,scale);x+=(g.advance+18)*scale;return p;}).join('');
    const width=max-min+16;
    return `<svg class="dynamic-svg" viewBox="${min-8} 0 ${width} 52" role="img" aria-label="${mark}" style="width:${width}px">${paths}</svg>`;
}
function signVisual(name) {
    const note=(x,y)=>musicGlyph('quarter',x,y);
    let drawing=symbolStaff(),height=126;
    if(name==='Slur'||name==='Tie') {
        const same=name==='Tie';
        drawing+=same?note(48,84)+note(126,84):note(48,84)+note(87,70)+note(126,56);
        drawing+=same?`<path d="M57 97Q96 121 135 97Q96 115 57 97Z" fill="currentColor" stroke="none"/>`:`<path d="M57 99C84 117 118 105 135 71C111 99 82 110 57 99Z" fill="currentColor" stroke="none"/>`;
    } else if(['Fermata','Staccato','Accent'].includes(name)) {
        drawing+=note(83,84);
        const glyph=name==='Fermata'?'fermata':name==='Staccato'?'staccato':'accent';
        const g=notationGlyphs[glyph],x=92-(g.bounds[0]+g.bounds[2])*.056/2;
        drawing+=musicGlyph(glyph,x,name==='Fermata'?26:26);
    } else if(name==='Repeat') {
        drawing+=note(48,84)+note(86,70);
        drawing+=`<path d="M140 42V98" stroke="currentColor" stroke-width="1.4"/><path d="M148 42V98" stroke="currentColor" stroke-width="4.5"/><circle cx="129" cy="63" r="2.5" fill="currentColor"/><circle cx="129" cy="77" r="2.5" fill="currentColor"/>`;
    } else if(name==='Crescendo'||name==='Diminuendo') {
        height=145; drawing+=note(40,84)+note(82,70)+note(124,56);
        drawing+=name==='Crescendo'?`<path d="M145 108L44 118L145 128"/>`:`<path d="M44 108L145 118L44 128"/>`;
    } else if(name==='8va'||name==='8vb') {
        height=150;drawing+=note(40,84)+note(82,70)+note(124,56);
        const y=name==='8va'?18:132;
        drawing+=`<text x="23" y="${y}" font-family="serif" font-style="italic" font-size="15" fill="currentColor" stroke="none">${name}</text><path d="M55 ${y-4}H158" stroke-dasharray="5 4"/><path d="M158 ${y-4}v${name==='8va'?8:-8}"/>`;
    } else throw new Error(`Unknown sign: ${name}`);
    return `<svg class="music-sign engraved-sign" viewBox="0 0 190 ${height}" role="img" aria-label="${name}"><g stroke="currentColor" stroke-width="1.4" fill="none">${drawing}</g></svg>`;
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
    step("Volume, not speed", "Dynamics describe how softly or loudly to play. They are relative: piano means softer than forte in the same musical context, not an exact volume setting. Change the strength of your touch without changing tempo unless the music also asks for a tempo change.", ()=>`<div class="dynamic-row"><span>${dynamicVisual("p")}<small>soft</small></span><span>${dynamicVisual("f")}<small>loud</small></span></div>`, fact("Does forte mean faster?","No, louder",["No, louder","Yes, faster","No, slower"],"Dynamics change loudness; tempo changes speed.")),
    step("The dynamic ladder", "From softer to louder: ppp, pp, p, mp, mf, f, ff, fff. Mezzo means moderately: mp is moderately soft and mf moderately loud. Extra p or f letters ask for a greater degree of softness or loudness, not a new playing speed.", ()=>`<div class="dynamic-row">${["ppp","pp","p","mp","mf","f","ff","fff"].map(dynamicVisual).join("")}</div>`, ()=>dynamicQuestion()),
    step("Change gradually", "A crescendo grows louder; a diminuendo or decrescendo becomes softer. The hairpin opens in the direction of increasing volume. Spread the change across its full length rather than making one sudden jump.", ()=>`<div class="sign-pair">${signVisual("Crescendo")}${signVisual("Diminuendo")}</div>`, ()=>{const a=choose(["Crescendo","Diminuendo"]);return question("What does this marking ask for?",a,["Crescendo","Diminuendo"],a==="Crescendo"?"Gradually get louder.":"Gradually get softer.",signVisual(a));}),
    step("Emphasis and sudden changes", "An accent brings out one note. Sforzando (sfz) asks for a strong, sudden emphasis. These differ from a long crescendo. Listen for the phrase: emphasis should make a musical point, not simply make every note equally loud.", ()=>`<div class="sign-pair">${signVisual("Accent")}${dynamicVisual("sfz")}</div>`, fact("An accent usually focuses attention on…","One note",["One note","Every later measure","The tempo only"],"An accent gives a particular note extra emphasis."))
];
const signsSteps = [
    step("Repeat a section", "An end-repeat sign sends you back to the matching start-repeat. If no start-repeat is shown, go back to the beginning. Usually play the section twice unless another instruction says otherwise. Keep the pulse moving through the repeat.", ()=>signVisual("Repeat"), ()=>signQuestion("Repeat")),
    step("Hold with a fermata", "A fermata asks you to hold a note or rest longer than its usual value. Its exact length depends on the musical context or the conductor; it does not automatically double the note. Resume the pulse together afterward.", ()=>signVisual("Fermata"), ()=>signQuestion("Fermata")),
    step("Staccato and accent", "A dot above or below the note head means staccato: play it short and detached. A dot AFTER the note is a duration dot instead. An accent looks like a small wedge and asks for emphasis, not necessarily a shorter note.", ()=>`<div class="sign-pair">${signVisual("Staccato")}${signVisual("Accent")}</div>`, ()=>signQuestion(choose(["Staccato","Accent"]))),
    step("Slur versus tie", "A slur connects a group of notes to be played smoothly. A tie connects two notes of the same pitch into one continuous sound. Follow the pitches and the context, not just the curved shape, to tell them apart.", ()=>`<div class="sign-pair">${signVisual("Slur")}${signVisual("Tie")}</div>`, fact("A curve connects different pitches. It is a…","Slur",["Slur","Tie","Rest"],"A tie joins identical pitches; a slur can connect different ones.")),
    step("Octave signs", "8va asks you to play one octave above the written notes. 8vb asks for one octave below. Continue the change through the marked line, then return to the written octave. These signs keep very high or low passages from needing many ledger lines.", ()=>`<div class="sign-pair">${signVisual("8va")}${signVisual("8vb")}</div>`, fact("What does 8va ask you to do?","Play one octave higher",["Play one octave higher","Play eight times","Play twice as fast"],"8va changes pitch by an octave, not duration or tempo."))
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
    const entries=[["pp","Very soft"],["p","Soft"],["mp","Moderately soft"],["mf","Moderately loud"],["f","Loud"],["ff","Very loud"],["ppp","Extremely soft"],["fff","Extremely loud"],["sfz","Sudden strong emphasis"]];
    const [symbol,answer]=choose(entries);
    return question("What does this dynamic mean?",answer,entries.map(p=>p[1]),`${symbol} means ${answer.toLowerCase()}. Keep the tempo unchanged.`,`<div class="dynamic-row" aria-hidden="true">${dynamicVisual(symbol)}</div>`);
}
function signQuestion(name=choose(["Repeat","Fermata","Staccato","Accent","Slur","Tie","Crescendo","Diminuendo","8va","8vb"])) {
    const meanings={Repeat:"Repeat the section",Fermata:"Hold longer",Staccato:"Short and detached",Accent:"Give emphasis",Slur:"Play smoothly",Tie:"Play once and hold across both notes",Crescendo:"Gradually get louder",Diminuendo:"Gradually get softer","8va":"Play one octave higher","8vb":"Play one octave lower"};
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
premium.innerHTML=`<button type="button" class="text-button back-control" id="premium-back">← Back</button><div class="page-heading"><div><p class="section-label">PREMIUM PREVIEW</p><h1>NoteGG Premium</h1><p>A look at what could come next. All current lessons and practice stay free during beta.</p></div></div><div class="premium-grid"><section class="premium-card"><h2>Free beta</h2><p class="price">Free</p><ul><li>Every current course</li><li>Unlimited practice</li><li>No account required</li></ul><button class="button button-secondary" id="premium-free">Keep practising</button></section><section class="premium-card premium-featured"><span class="beta-badge">PLANNED · NOT AVAILABLE YET</span><h2>Premium</h2><p>Proposed features—not included in this beta:</p><ul><li>Personalised practice for difficult notes and rhythms</li><li>Saved progress across devices</li><li>Generated sight-reading passages</li><li>Practice with a connected MIDI keyboard</li></ul><label>Preview plan<select id="premium-plan"><option value="monthly">Monthly · $3.99 USD / month</option><option value="annual">Annual · $29.99 USD / year</option></select></label><p class="fine-print">Illustrative prices. No subscription or payment will be created.</p><button class="button button-primary" id="premium-buy">Buy Premium — demo</button><p id="premium-result" role="status"></p></section></div>`;
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

