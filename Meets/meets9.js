
const MEETS = [
  {
    name: "Maramu’ Robotics Festival",
    date: "OCT 2025",
    location: "Cluj-Napoca, Romania",
    description: "Echipa noastră de robotică, Teoretika, a participat la Maramu’ Robotics Festival, un eveniment dedicat educației STEM, inovației și competițiilor de robotică. Festivalul a reunit echipe din mai multe școli, oferindu-ne ocazia de a interacționa cu alți pasionați de tehnologie și de a observa diferite soluții tehnice aplicate în construcția și programarea roboților.În cadrul competiției, ne-am testat robotul în probe specifice, unde am pus în practică cunoștințele de programare, mecanică și electronică. Participarea ne-a ajutat să ne îmbunătățim abilitățile de lucru în echipă, să gestionăm mai bine timpul și să învățăm să rezolvăm problemele apărute în condiții de concurs. Experiența acumulată la acest festival a contribuit semnificativ la dezvoltarea noastră tehnică și ne-a motivat să continuăm să ne perfecționăm pentru competițiile viitoare.",
    photos: [
      "images/meet1a.jpg",
      
    ]
  },
  {
    name: "Meet the Techs",
    date: "NOV 2025",
    location: "București, Romania",
    description: "Meet the Techs a fost un league meet regional din cadrul FIRST Tech Challenge organizat de echipa StarTech în colaborare cu PrismaTech. Evenimentul s-a desfășurat in municipiul Satu Mare și a reunit aproximativ 18 echipe de robotică din mai multe județe ale țării, oferindu-le participanților oportunitatea de a-și testa roboții în meciuri dinamice într-un cadru competitiv și prietenos.Acest meet ne-a permis să observăm și să învățăm din soluțiile tehnice ale celorlalte echipe, să evaluăm strategia de joc și să primim feedback valoros pe partea de mecanică, programare și tactici de concurs. Interacțiunea directă cu alte echipe ne-a ajutat să identificăm punctele forte și zonele în care putem aduce îmbunătățiri robotului și echipei noastre.Participarea la Meet the Techs a fost un pas important în pregătirea noastră pentru competițiile oficiale ale sezonului, contribuind la dezvoltarea abilităților tehnice, spiritului de echipă și rezilienței în condiții de competiție reală, reprezentând totodată o experiență de învățare și colaborare cu comunitatea FTC din România.",
    photos: [
      "images/meet2a.jpg"

    ]
  },
  {
    name: "Valentech 2",
    date: "DEC 2025",
    location: "Timișoara, Romania",
    description: "ValenTech 2, organizat de echipa CNAPSys 22586 pe data de 14 februarie, a reprezentat un moment important în parcursul nostru competițional din cadrul FIRST Tech Challenge. Evenimentul a reunit mai multe echipe într-un cadru competitiv bine structurat, oferindu-ne oportunitatea de a ne testa robotul în meciuri dinamice, desfășurate într-un ritm apropiat de cel al competițiilor oficiale.Pe parcursul zilei, am avut ocazia să observăm diferite abordări tehnice adoptate de celelalte echipe, analizând soluții de design mecanic, sisteme de transmisie, mecanisme de scoring și strategii de programare. În același timp, ne-am evaluat propria performanță, atât din punct de vedere tehnic, cât și strategic, identificând punctele forte ale robotului nostru și aspectele care necesită optimizare. Feedback-ul primit și discuțiile cu ceilalți participanți ne-au ajutat să înțelegem mai bine unde ne situăm și ce îmbunătățiri putem implementa.De asemenea, experiența ne-a ajutat să ne dezvoltăm capacitatea de coordonare în timpul meciurilor, să gestionăm mai eficient emoțiile și presiunea competițională și să luăm decizii rapide în situații neprevăzute. Participarea la ValenTech 2 a contribuit astfel la consolidarea spiritului de echipă, la creșterea nivelului nostru tehnic și la o pregătire mai solidă pentru etapele oficiale ale sezonului.",
    photos: [
      "images/meet3a.jpg"

    ]
  },
  {
    name: "Regionala nord",
    date: "DEC 2025",
    location: "Timișoara, Romania",
    description: "Am încheiat etapa regională a competiției de robotică cu un rezultat de care suntem extrem de mândri: locul 5 la nivel de regiune și locul 11 în clasamentul de avansare. Aceste performanțe ne-au adus calificarea la etapa națională, un obiectiv pentru care am muncit intens și consecvent încă de la începutul sezonului, investind timp, energie și pasiune în fiecare etapă a pregătirii. Parcursul nostru până în acest punct a fost marcat de numeroase ore de proiectare, testare și îmbunătățire continuă a robotului, dar și de dezvoltarea strategiilor de joc și a colaborării în echipă. Am analizat constant performanțele noastre, am identificat punctele slabe și am lucrat pentru a le transforma în atuuri. Fiecare provocare întâlnită ne-a ajutat să devenim mai organizați, mai creativi și mai determinați. Am învățat să gestionăm presiunea competiției, să ne adaptăm rapid la situații neprevăzute și să găsim soluții eficiente în timp real, chiar și în momentele decisive.Această reușită se datorează muncii susținute a întregii echipe și sprijinului constant al mentorilor și profesorilor care ne-au ghidat la fiecare pas. Suntem mândri de progresul realizat împreună, recunoscători pentru experiența acumulată și motivați de calificarea la etapa națională să ne autodepășim, să continuăm să evoluăm și să reprezentăm cu onoare echipa și comunitatea noastră.",
    photos: [
      "images/meet3a.jpg"

    ]
  }
];

const listEl = document.getElementById('mt-list');
const statsEl = document.getElementById('mt-header-stats');
const lightbox = document.getElementById('mt-lightbox');
const lightboxImg = document.getElementById('mt-lightbox-img');
const lightboxClose = document.getElementById('mt-lightbox-close');
const lightboxPrev = document.getElementById('mt-lightbox-prev');
const lightboxNext = document.getElementById('mt-lightbox-next');
const lightboxCount = document.getElementById('mt-lightbox-count');

let activePhotos = [];
let activeIndex = 0;

function openLightbox(photos, index) {
  activePhotos = photos;
  activeIndex = index;
  updateLightboxImg();
  lightbox.classList.add('active');
}

function closeLightbox() {
  lightbox.classList.remove('active');
}

function showRelative(delta) {
  activeIndex = (activeIndex + delta + activePhotos.length) % activePhotos.length;
  updateLightboxImg();
}

function updateLightboxImg() {
  lightboxImg.src = activePhotos[activeIndex];
  lightboxCount.textContent = `${activeIndex + 1} / ${activePhotos.length}`;
}

lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', () => showRelative(-1));
lightboxNext.addEventListener('click', () => showRelative(1));
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') showRelative(-1);
  if (e.key === 'ArrowRight') showRelative(1);
});

function renderStats() {
  const totalPhotos = MEETS.reduce((sum, m) => sum + m.photos.length, 0);
  statsEl.innerHTML = `<b>${MEETS.length}</b> events &nbsp;·&nbsp; <b>${totalPhotos}</b> photos`;
}

function renderMeets() {
  listEl.innerHTML = '';

  MEETS.forEach((meet, meetIndex) => {
    const isHero = meetIndex === 0;

    const card = document.createElement('div');
    card.className = 'mt-card' + (isHero ? ' mt-hero' : '');

    const thumbs = meet.photos.length > 1
      ? meet.photos.map((url, i) => `
          <div class="mt-thumb${i === 0 ? ' active' : ''}" data-index="${i}">
            <img src="${url}" alt="">
          </div>
        `).join('')
      : '';

    card.innerHTML = `
      <div class="mt-banner" data-index="0">
        <img src="${meet.photos[0]}" alt="${meet.name}">
        <div class="mt-banner-caption">
          ${isHero ? '<span class="mt-tag">Latest meet</span><br>' : ''}
          <p class="mt-banner-meta">${meet.date} &nbsp;·&nbsp; ${meet.location}</p>
          <h2>${meet.name}</h2>
        </div>
      </div>
      ${thumbs ? `<div class="mt-filmstrip">${thumbs}</div>` : ''}
      <div class="mt-body">
        <p class="mt-desc">${meet.description}</p>
        <button class="mt-readmore">Read more</button>
      </div>
    `;

    const bannerImg = card.querySelector('.mt-banner img');
    const bannerEl = card.querySelector('.mt-banner');
    let current = 0;

    function goTo(i) {
      if (i === current) return;
      bannerImg.classList.add('mt-fade');
      setTimeout(() => {
        bannerImg.src = meet.photos[i];
        current = i;
        bannerEl.dataset.index = i;
        card.querySelectorAll('.mt-thumb').forEach((t, idx) => t.classList.toggle('active', idx === i));
        bannerImg.classList.remove('mt-fade');
      }, 140);
    }

    card.querySelectorAll('.mt-thumb').forEach(thumb => {
      thumb.addEventListener('click', () => goTo(parseInt(thumb.dataset.index, 10)));
    });

    bannerEl.addEventListener('click', () => {
      openLightbox(meet.photos, parseInt(bannerEl.dataset.index, 10));
    });

    // read more / less toggle
    const descEl = card.querySelector('.mt-desc');
    const readMoreBtn = card.querySelector('.mt-readmore');

    if (isHero) {
      readMoreBtn.style.display = 'none';
    } else {
      requestAnimationFrame(() => {
        if (descEl.scrollHeight <= descEl.clientHeight + 2) {
          readMoreBtn.style.display = 'none';
        }
      });
      readMoreBtn.addEventListener('click', () => {
        const isExpanded = descEl.classList.toggle('expanded');
        readMoreBtn.textContent = isExpanded ? 'Show less' : 'Read more';
      });
    }

    listEl.appendChild(card);
  });

  setupScrollReveal();
}

function setupScrollReveal() {
  const cards = document.querySelectorAll('.ts-meets-page .mt-card');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion || !('IntersectionObserver' in window)) {
    cards.forEach(c => c.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  cards.forEach(c => observer.observe(c));
}

renderStats();
renderMeets();