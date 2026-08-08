const SUBSYSTEMS = {
  chassis: {
    title: "Chassis",
    subtitle: "SUBSYSTEM.CHASSIS",
    image: "Images/S10Chasis.png",
    description: "Custom-machined aluminum extrusion frame with integrated cable routing channels. Mecanum wheel drivetrain for omnidirectional movement across the competition field.",
    stats: [
      { label: "Greutate", value: "4.2", unit: "kg" },
      { label: "Motoare", value: "4×", unit: "GoBilda" },
      { label: "Roti odometrie", value: "2", unit: "buc" },
      { label: "Wheel Type", value: "96mm", unit: "Mecanum" }
    ]
  },
  intake: {
    title: "Intake",
    subtitle: "SUBSYSTEM.INTAKE",
    image: "Images/S10Intake.png",
    description: "Intake-ul este realizat cu un sistem de elastice care, prin rotirea rapidă, preiau artefactele și le conduc pe rampă spre turela.",
    stats: [
      { label: "Roti Intake", value: "6", unit: "buc" },
      { label: "Motoare", value: "2×", unit: "GoBilda" },
      { label: "Viteza", value: "312", unit: "RPM" },
      { label: "Rampa", value: "3D", unit: "Printed" },
    ]
  },
  outtake: {
    title: "Outtake",
    subtitle: "SUBSYSTEM.OUTTAKE",
    image: "Images/S10Outtake.png",
    description: "Linear slide outtake with a servo-actuated release mechanism, tuned for consistent scoring height and placement accuracy.",
    stats: [
      { label: "Slide Extension", value: "600", unit: "mm" },
      { label: "Lift Motors", value: "2×", unit: "GoBilda" },
      { label: "Release", value: "Servo", unit: "" },
      { label: "Max Height", value: "1.1", unit: "m" }
    ]
  },
}

 
const buttons = document.querySelectorAll('.rp-sub-btn');
const mainImg = document.getElementById('rp-main-img');
const subTitle = document.getElementById('rp-sub-title');
const subSubtitle = document.getElementById('rp-sub-subtitle');
const description = document.getElementById('rp-description');
const statGrid = document.getElementById('rp-stat-grid');
 
function renderStats(stats) {
  statGrid.innerHTML = '';
  stats.forEach(stat => {
    const card = document.createElement('div');
    card.className = 'rp-stat-card';
    card.innerHTML = `
      <span class="rp-stat-label">${stat.label}</span>
      <span class="rp-stat-big">${stat.value}<span class="rp-stat-unit">${stat.unit}</span></span>
    `;
    statGrid.appendChild(card);
  });
}
 
function showSubsystem(key) {
  const data = SUBSYSTEMS[key];
  if (!data) return;
 
  mainImg.style.opacity = 0;
  setTimeout(() => {
    mainImg.src = data.image;
    mainImg.alt = data.title;
    mainImg.style.opacity = 1;
  }, 150);
 
  subTitle.textContent = data.title;
  subSubtitle.textContent = data.subtitle;
  description.textContent = data.description;
  renderStats(data.stats);
 
  buttons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.subsystem === key);
  });
}
 
buttons.forEach(btn => {
  btn.addEventListener('click', () => showSubsystem(btn.dataset.subsystem));
});
 
// initial render
renderStats(SUBSYSTEMS.chassis.stats);