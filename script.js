document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Reveal
    const reveals = document.querySelectorAll('.reveal');
    const checkReveal = () => {
        reveals.forEach(el => {
            const top = el.getBoundingClientRect().top;
            if (top < window.innerHeight - 100) el.classList.add('active');
        });
    };
    window.addEventListener('scroll', checkReveal);
    checkReveal();

    // 2. Quiz Logic
    const submitBtn = document.getElementById('submit-quiz');
    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            const resultDiv = document.getElementById('score-display');
            const total = 5;
            const score = document.querySelectorAll('input.correct:checked').length;
            
            resultDiv.style.display = 'block';
            resultDiv.style.background = score >= 3 ? 'rgba(0, 255, 136, 0.1)' : 'rgba(255, 75, 43, 0.1)';
            resultDiv.style.border = `1px solid ${score >= 3 ? '#00ff88' : '#ff4b2b'}`;
            
            if (score >= 3) {
                resultDiv.innerHTML = `🎉 ยอดเยี่ยม! คุณได้คะแนน ${score} / ${total} <br> <small>คุณมีความเข้าใจในเนื้อหานี้เป็นอย่างดี</small>`;
                resultDiv.style.color = '#00ff88';
            } else {
                resultDiv.innerHTML = `✌️ พยายามอีกนิด! คุณได้คะแนน ${score} / ${total} <br> <small>ลองทบทวนเนื้อหาและทำแบบทดสอบใหม่อีกครั้งนะ</small>`;
                resultDiv.style.color = '#ff4b2b';
            }
            resultDiv.scrollIntoView({ behavior: 'smooth' });
        });
    }
});