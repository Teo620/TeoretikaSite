
const DEPARTMENTS = [
  {
    name: "Programming",
    icon: '<path d="M8 9l-4 3 4 3M16 9l4 3-4 3" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'
  },
  {
    name: "3D Design",
    icon: '<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linejoin="round"/><path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linejoin="round"/>'
  },
  {
    name: "Mecanica",
    icon: '<path d="M14.7 6.3a4 4 0 10-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 005.4-5.4l-2.1 2.1-2-2 2.1-2.1z" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linejoin="round"/>'
  },
  {
    name: "Public Relations",
    icon: '<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'
  },
  {
    name: "Mascota",
    icon: '<path d="M12 17.3l-5.4 3 1.4-6-4.6-4h6L12 4.3l2.6 5.9h6l-4.6 4 1.4 6z" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linejoin="round"/>'
  },
  {
    name: "Marketing",
    icon: '<path d="M3 11v2a1 1 0 001 1h2l4 4V6L6 10H4a1 1 0 00-1 1z" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linejoin="round"/><path d="M15 9a3 3 0 010 6M18 6a7 7 0 010 12" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/>'
  }
];

const MEMBERS = [
  { name: "Azyz", grade: "Clasa XII", department: "Programming", photo: "Images/azyz.jpg" },
  { name: "Alexandru", grade: "Clasa X", department: "Programming", photo: "Images/alexandru.jpg" },
  { name: "Vasile", grade: "Clasa XII", department: "Mecanica", photo: "Images/vasile.jpg" },
  { name: "Adelin", grade: "Clasa X", department: "Mecanica", photo: "Images/adelin.jpg" },
  { name: "Darius", grade: "Clasa XII", department: "Mecanica", photo: "Images/darius.jpg" },
  { name: "Denis", grade: "Clasa XII", department: "3D Design", photo: "Images/denis.jpg" },
  { name: "Emanuel", grade: "Clasa X", department: "3D Design", photo: "Images/emanuel.jpg" },
  { name: "Azyz", grade: "Clasa XII", department: "Marketing", photo: "Images/azyz.jpg" },
  { name: "Denis", grade: "Clasa XII", department: "Marketing", photo: "Images/denis.jpg" },
  { name: "Alexandra", grade: "Clasa XII", department: "Public Relations", photo: "Images/alexandra.jpg" },
  { name: "Raluca", grade: "Clasa XII", department: "Public Relations", photo: "Images/raluca.jpg" },
  { name: "Mayer", grade: "Clasa XII", department: "Mascota", photo: "Images/mayer.jpg" }
];

const MENTORS = [
  { name: "Vasile", role: "Mentor", note: "", photo: "Images/vasile.jpg" },
  { name: "Paula", role: "Mentor", note: "", photo: "Images/paula.jpg" }
];

const VOLUNTEERS = [
  { name: "Tzompa", role: "", photo: "Images/tzompa.jpg" },
  { name: "Lucică", role: "", photo: "Images/lucica.jpg" },
  { name: "Maria", role: "", photo: "Images/maria.jpg" },
  { name: "Larisa", role: "", photo: "Images/larisa.jpg" },
  { name: "Laura", role: "", photo: "Images/laura.jpg" },
  { name: "Ana", role: "", photo: "Images/ana.jpg" },
  { name: "Delia", role: "", photo: "Images/delia.jpg" },
  { name: "Eliza", role: "", photo: "Images/eliza.jpg" }
];

/* ===================================================================== */

// placeholder silhouette shown when a person has no "photo" set
const personIcon = '<svg viewBox="0 0 24 24" width="34%" height="34%"><circle cx="12" cy="8" r="4" fill="currentColor"/><path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" fill="currentColor"/></svg>';

function photoHTML(person) {
  return person.photo
    ? `<img src="${person.photo}" alt="${person.name}">`
    : personIcon;
}

function renderMemberCard(person) {
  return `
    <div class="mb-member-card">
      <div class="mb-member-photo${person.photo ? "" : " is-placeholder"}">${photoHTML(person)}</div>
      <div class="mb-member-info">
        <div class="mb-member-name">${person.name}</div>
        <div class="mb-member-grade">${person.grade}</div>
      </div>
    </div>
  `;
}

function renderFeatureCard(person) {
  return `
    <div class="mb-feature-card">
      <div class="mb-feature-photo${person.photo ? "" : " is-placeholder"}">${photoHTML(person)}</div>
      <div class="mb-feature-info">
        <div class="mb-feature-name">${person.name}</div>
        ${person.role ? `<div class="mb-feature-role">${person.role}</div>` : ""}
        ${person.note ? `<div class="mb-feature-note">${person.note}</div>` : ""}
      </div>
    </div>
  `;
}

function renderStats() {
  const el = document.getElementById("mb-header-stats");
  el.innerHTML = `<b>${MEMBERS.length}</b> students &nbsp;·&nbsp; <b>${MENTORS.length}</b> mentors &nbsp;·&nbsp; <b>${VOLUNTEERS.length}</b> volunteers`;
}

function renderMentors() {
  const wrap = document.getElementById("mb-mentors");
  if (!MENTORS.length) { wrap.style.display = "none"; return; }
  wrap.innerHTML = `
    <div class="mb-section-head">
      <div class="mb-section-title">Mentors</div>
      <div class="mb-section-count">${MENTORS.length}</div>
      <div class="mb-section-rule"></div>
    </div>
    <div class="mb-feature-grid">${MENTORS.map(renderFeatureCard).join("")}</div>
  `;
}

function renderVolunteers() {
  const wrap = document.getElementById("mb-volunteers");
  if (!VOLUNTEERS.length) { wrap.style.display = "none"; return; }
  wrap.innerHTML = `
    <div class="mb-section-head">
      <div class="mb-section-title">Volunteers</div>
      <div class="mb-section-count">${VOLUNTEERS.length}</div>
      <div class="mb-section-rule"></div>
    </div>
    <div class="mb-feature-grid">${VOLUNTEERS.map(renderFeatureCard).join("")}</div>
  `;
}

function renderDepartments() {
  const container = document.getElementById("mb-departments");
  container.innerHTML = DEPARTMENTS.map(dept => {
    const people = MEMBERS.filter(m => m.department === dept.name);
    if (!people.length) return "";
    return `
      <div class="mb-dept-section">
        <div class="mb-section-head">
          <div class="mb-section-icon"><svg viewBox="0 0 24 24">${dept.icon}</svg></div>
          <div class="mb-section-title">${dept.name}</div>
          <div class="mb-section-count">${people.length}</div>
          <div class="mb-section-rule"></div>
        </div>
        <div class="mb-dept-grid">${people.map(renderMemberCard).join("")}</div>
      </div>
    `;
  }).join("");
}

function setupScrollReveal() {
  const cards = document.querySelectorAll(".ts-members-page .mb-member-card, .ts-members-page .mb-feature-card");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    cards.forEach(c => c.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(c => observer.observe(c));
}

function renderPeople(skipAnimation) {
  renderMentors();
  renderDepartments();
  renderVolunteers();
  if (skipAnimation) {
    document.querySelectorAll(".mb-member-card, .mb-feature-card").forEach(c => c.classList.add("is-visible"));
  } else {
    setupScrollReveal();
  }
}

renderStats();
renderPeople(false);