// Quiz interativo
function renderQuiz() {
  const quiz = document.getElementById('quiz-section-inner');
  if (!quiz) return;
  quiz.innerHTML = `
    <h4>Quiz Rápido: ODS e Energia</h4>
    <form id="quizForm">
      <div class="mb-2">
        <label>Qual é a principal fonte de energia elétrica no Brasil?</label><br>
        <input type="radio" name="q1" value="hidreletrica"> Hidrelétrica<br>
        <input type="radio" name="q1" value="solar"> Solar<br>
        <input type="radio" name="q1" value="fossil"> Fóssil<br>
      </div>
      <div class="mb-2">
        <label>ODS 13 trata de:</label><br>
        <input type="radio" name="q2" value="agua"> Água potável<br>
        <input type="radio" name="q2" value="clima"> Ação climática<br>
        <input type="radio" name="q2" value="educacao"> Educação<br>
      </div>
      <button type="submit" class="btn btn-success btn-sm">Enviar</button>
      <div id="quizResult" class="mt-2"></div>
    </form>
  `;
  document.getElementById('quizForm').onsubmit = function(e) {
    e.preventDefault();
    let acertos = 0;
    if (quizForm.q1.value === 'hidreletrica') acertos++;
    if (quizForm.q2.value === 'clima') acertos++;
    document.getElementById('quizResult').innerHTML = `<strong>Você acertou ${acertos}/2!</strong>`;
  };
}

// Curiosidades
function renderCuriosidades() {
  const curiosidades = [
    'O Brasil é um dos países com maior participação de renováveis na matriz elétrica.',
    'A energia solar cresceu mais de 300% no Brasil nos últimos 5 anos.',
    'Carros elétricos emitem até 70% menos CO₂ que carros a combustão.',
    'A ONU estabeleceu 17 ODS para transformar o mundo até 2030.'
  ];
  const curiosidadesDiv = document.getElementById('curiosidades-section-inner');
  if (!curiosidadesDiv) return;
  curiosidadesDiv.innerHTML = `<h4>Curiosidades</h4><ul>${curiosidades.map(c => `<li>${c}</li>`).join('')}</ul>`;
}

// Compartilhamento
function renderShareButtons() {
  const shareDiv = document.getElementById('share-section-inner');
  if (!shareDiv) return;
  shareDiv.innerHTML = `
    <h4>Compartilhe</h4>
    <button class="btn btn-primary btn-sm me-2" onclick="navigator.share ? navigator.share({title:document.title,url:location.href}) : window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(location.href),'_blank')">Facebook</button>
    <button class="btn btn-info btn-sm me-2" onclick="window.open('https://twitter.com/intent/tweet?url='+encodeURIComponent(location.href),'_blank')">Twitter/X</button>
    <button class="btn btn-success btn-sm" onclick="window.open('https://wa.me/?text='+encodeURIComponent(location.href),'_blank')">WhatsApp</button>
  `;
}

// Fade-in ao rolar
function enableFadeInOnScroll() {
  const fadeEls = document.querySelectorAll('.fadein');
  function checkFade() {
    fadeEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        el.classList.add('show');
      }
    });
  }
  window.addEventListener('scroll', checkFade);
  checkFade();
}

// Botão voltar ao topo
function renderBackToTop() {
  let btn = document.createElement('button');
  btn.id = 'backToTop';
  btn.innerHTML = '↑';
  btn.title = 'Voltar ao topo';
  btn.className = 'btn btn-success';
  btn.style.position = 'fixed';
  btn.style.bottom = '30px';
  btn.style.right = '30px';
  btn.style.zIndex = '9999';
  btn.style.display = 'none';
  document.body.appendChild(btn);
  window.addEventListener('scroll', () => {
    btn.style.display = window.scrollY > 200 ? 'block' : 'none';
  });
  btn.onclick = () => window.scrollTo({top:0,behavior:'smooth'});
}

// Formulário de feedback
function renderFeedbackForm() {
  const feedbackDiv = document.getElementById('feedback-section-inner');
  if (!feedbackDiv) return;
  feedbackDiv.innerHTML = `
    <h4>Deixe seu feedback</h4>
    <form id="feedbackForm">
      <input type="text" class="form-control mb-2" name="nome" placeholder="Seu nome" required>
      <input type="email" class="form-control mb-2" name="email" placeholder="Seu e-mail" required>
      <textarea class="form-control mb-2" name="mensagem" placeholder="Sua mensagem" required></textarea>
      <button type="submit" class="btn btn-success btn-sm">Enviar</button>
      <div id="feedbackMsg" class="mt-2"></div>
    </form>
  `;
  document.getElementById('feedbackForm').onsubmit = function(e) {
    e.preventDefault();
    document.getElementById('feedbackMsg').innerHTML = 'Obrigado pelo feedback!';
    feedbackForm.reset();
  };
}

// Sugestão de leitura complementar
function renderLeituraComplementar() {
  const leituraDiv = document.getElementById('leitura-section-inner');
  if (!leituraDiv) return;
  leituraDiv.innerHTML = `<h4>Leitura Complementar</h4><ul>
    <li><a href="https://www.ipea.gov.br/ods/" target="_blank">ODS no Brasil (IPEA)</a></li>
    <li><a href="https://www.iea.org/" target="_blank">Agência Internacional de Energia</a></li>
    <li><a href="https://www.energiaeambiente.org.br/" target="_blank">Energia e Ambiente</a></li>
    <li><a href="https://www.un.org/sustainabledevelopment/pt/energy/" target="_blank">ONU - Energia Sustentável</a></li>
  </ul>`;
}

// Acessibilidade: fonte e contraste
function toggleFontSize() {
  document.body.classList.toggle('font-large');
}
function toggleContrast() {
  document.body.classList.toggle('high-contrast');
}
function showAccessibilityMenu() {
  let menu = document.getElementById('accessibility-menu');
  if (!menu) {
    menu = document.createElement('div');
    menu.id = 'accessibility-menu';
    menu.style.position = 'fixed';
    menu.style.bottom = '80px';
    menu.style.left = '30px';
    menu.style.zIndex = '10000';
    menu.innerHTML = `
      <div class='card p-3'>
        <button class='btn btn-outline-success mb-2 w-100' onclick='toggleFontSize()'>Aumentar/Reduzir Fonte</button>
        <button class='btn btn-outline-dark w-100' onclick='toggleContrast()'>Alto Contraste</button>
      </div>
    `;
    document.body.appendChild(menu);
  } else {
    menu.remove();
  }
}
document.getElementById('accessibility-btn').onclick = showAccessibilityMenu;

// Inicialização
window.addEventListener('DOMContentLoaded', () => {
  renderQuiz();
  renderCuriosidades();
  renderShareButtons();
  enableFadeInOnScroll();
  renderBackToTop();
  renderFeedbackForm();
  renderLeituraComplementar();
});
