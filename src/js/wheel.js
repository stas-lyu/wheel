const modal = document.getElementById('modal-one');

const sectors = [
    {color:"#f82", label:"1"},
    {color:"#0bf", label:"2"},
    {color:"#fb0", label:"3"},
    {color:"#0fb", label:"4"},
    {color:"#b0f", label:"5"},
    {color:"#f0b", label:"6"},
];

const rand = (m, M) => Math.random() * (M - m) + m;
const tot = sectors.length;
const EL_spin = document.querySelector("#spin");
const EL_spinModal = document.querySelector('#spinModal');
const ctx = document.querySelector("#wheel").getContext('2d');
const dia = ctx.canvas.width;
const rad = dia / 2;
const PI = Math.PI;
const TAU = 2 * PI;
const arc = TAU / sectors.length;

const friction = 0.991; // 0.995=soft, 0.99=mid, 0.98=hard
let angVel = 0; // Angular velocity
let ang = 0; // Angle in radians

const getIndex = () => Math.floor(tot - ang / TAU * tot) % tot;

function drawSector(sector, i) {
    const ang = arc * i;
    ctx.save();
    // COLOR
    ctx.beginPath();
    ctx.fillStyle = sector.color;
    ctx.moveTo(rad, rad);
    ctx.arc(rad, rad, rad, ang, ang + arc);
    ctx.lineTo(rad, rad);
    ctx.fill();
    // TEXT
    ctx.translate(rad, rad);
    ctx.rotate(ang + arc / 2);
    ctx.textAlign = "right";
    ctx.fillStyle = "#fff";
    ctx.font = "bold 30px sans-serif";
    ctx.fillText(sector.label, rad - 10, 10);
    //
    ctx.restore();
}

function rotate() {
    const sector = sectors[getIndex()];
    ctx.canvas.style.transform = `rotate(${ang - PI / 2}rad)`;
    EL_spin.textContent = !angVel ? "SPIN" : sector.label;
    EL_spin.style.background = sector.color;
}

function frame() {
    if (!angVel) return;
    angVel *= friction; // Decrement velocity by friction
    if (angVel < 0.002) angVel = 0; // Bring to stop
    ang += angVel; // Update angle
    ang %= TAU; // Normalize angle
    rotate();
}

function engine() {
    frame();
    requestAnimationFrame(engine)
}

function popup(element) {
    element.classList.add('open');
    const exits = element.querySelectorAll('.modal-exit');
    exits.forEach(function(exit) {
        exit.addEventListener('click', function(event) {
            event.preventDefault();
            element.classList.remove('open');
        });
    });
}

// INIT
sectors.forEach(drawSector);
rotate(); // Initial rotation
engine(); // Start engine
EL_spin.addEventListener("click", () => {
    if (!angVel) angVel = rand(0.25, 0.35);
    setTimeout(()=> {
        popup(modal);
    },10000)
});

EL_spinModal.addEventListener("click", () => {
    modal.classList.remove('open')
    if (!angVel) angVel = rand(0.25, 0.35);

});
