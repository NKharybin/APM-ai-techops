const analyzeBtn = document.getElementById('analyzeBtn');
const evidenceSection = document.getElementById('evidenceSection');
const analysisSection = document.getElementById('analysisSection');
const reviewBtn = document.getElementById('reviewBtn');
const approveBtn = document.getElementById('approveBtn');
const reviewNotice = document.getElementById('reviewNotice');
const successSection = document.getElementById('successSection');

analyzeBtn.addEventListener('click', () => {
  analyzeBtn.disabled = true;
  analyzeBtn.textContent = 'Collecting evidence…';

  setTimeout(() => {
    evidenceSection.classList.remove('hidden');
    evidenceSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

    setTimeout(() => {
      analyzeBtn.textContent = 'Evidence collected';
      analysisSection.classList.remove('hidden');
      analysisSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 500);
  }, 650);
});

reviewBtn.addEventListener('click', () => {
  reviewNotice.classList.remove('hidden');
  approveBtn.disabled = false;
  reviewBtn.textContent = 'Recommendation Reviewed';
});

approveBtn.addEventListener('click', () => {
  successSection.classList.remove('hidden');
  approveBtn.disabled = true;
  approveBtn.textContent = 'Routing Approved';
  successSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
