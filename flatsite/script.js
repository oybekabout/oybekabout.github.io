document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- Mobile nav toggle ---------- */
const navToggle = document.getElementById('navToggle');
const dossierNav = document.getElementById('dossierNav');
navToggle.addEventListener('click', () => {
  const open = dossierNav.classList.toggle('menu-open');
  navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});
document.querySelectorAll('.tab').forEach(t => {
  t.addEventListener('click', () => {
    dossierNav.classList.remove('menu-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

/* ---------- Active tab highlighting on scroll ---------- */
const sections = document.querySelectorAll('main section[id], header.hero[id]');
const tabs = document.querySelectorAll('.tab');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === id));
    }
  });
}, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });

sections.forEach(s => sectionObserver.observe(s));

/* ---------- Seal stamp-in animation per section ---------- */
const seals = document.querySelectorAll('[data-seal]');
const sealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('stamped');
      sealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });
seals.forEach(s => sealObserver.observe(s));

/* ---------- Hero seal button ---------- */
const sealButton = document.getElementById('sealButton');
const sealCaption = document.getElementById('sealCaption');
const captions = [
  'Click the seal — certified 31.03.2026',
  'Scope: trademarks, patents, industrial designs',
  'Registered patent attorney, Tashkent',
  'IP · arbitration · commercial law'
];
let capIndex = 0;
sealButton.addEventListener('click', () => {
  sealButton.classList.remove('stamped');
  void sealButton.offsetWidth; // restart animation
  sealButton.classList.add('stamped');
  capIndex = (capIndex + 1) % captions.length;
  sealCaption.textContent = captions[capIndex];
});

/* ---------- Docket accordion ---------- */
document.querySelectorAll('.file-head').forEach(head => {
  head.addEventListener('click', () => {
    const file = head.closest('.file');
    const isOpen = file.getAttribute('data-open') === 'true';
    file.setAttribute('data-open', String(!isOpen));
    head.setAttribute('aria-expanded', String(!isOpen));
    const body = file.querySelector('.file-body');
    if (!isOpen) {
      body.style.maxHeight = body.scrollHeight + 'px';
    } else {
      body.style.maxHeight = '0px';
    }
  });
});

// Initialize open state (File No. 01 starts expanded)
window.addEventListener('load', () => {
  document.querySelectorAll('.file[data-open="true"] .file-body').forEach(body => {
    body.style.maxHeight = body.scrollHeight + 'px';
  });
});
window.addEventListener('resize', () => {
  document.querySelectorAll('.file[data-open="true"] .file-body').forEach(body => {
    body.style.maxHeight = body.scrollHeight + 'px';
  });
});

/* ---------- Gallery lightbox ---------- */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    lightboxImg.src = item.dataset.full;
    lightboxImg.alt = item.querySelector('img').alt;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
  });
});

function closeLightbox(){
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImg.src = '';
}
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});
