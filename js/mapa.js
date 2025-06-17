// Mapa interativo simplificado do Brasil usando SVG
// Estados em destaque: MAIOR produção de renováveis (exemplo: RS, BA, MG, SP, PE)
// Pontos de recarga: capitais selecionadas

const estadosDestaque = ['RS', 'BA', 'MG', 'SP', 'PE'];
const pontosRecarga = [
  { nome: 'São Paulo', x: 420, y: 420 },
  { nome: 'Belo Horizonte', x: 470, y: 370 },
  { nome: 'Salvador', x: 600, y: 320 },
  { nome: 'Porto Alegre', x: 400, y: 600 },
  { nome: 'Recife', x: 700, y: 250 }
];

function renderMapaBrasil() {
  const svg = `
  <svg viewBox="0 0 800 700" width="100%" height="400">
    <g>
      <path d="M100,200 Q200,100 400,120 Q600,140 700,300 Q750,400 600,600 Q400,650 200,600 Q120,500 100,200 Z" fill="#e0e0e0" stroke="#888" stroke-width="2"/>
      <!-- Destaque dos estados (simulação, não geográfico) -->
      <ellipse cx="400" cy="600" rx="60" ry="40" fill="#4caf50" opacity="0.7"/><!-- RS -->
      <ellipse cx="600" cy="320" rx="50" ry="30" fill="#2196f3" opacity="0.7"/><!-- BA -->
      <ellipse cx="470" cy="370" rx="40" ry="25" fill="#ff9800" opacity="0.7"/><!-- MG -->
      <ellipse cx="420" cy="420" rx="35" ry="20" fill="#43a047" opacity="0.7"/><!-- SP -->
      <ellipse cx="700" cy="250" rx="30" ry="18" fill="#fbc02d" opacity="0.7"/><!-- PE -->
      <!-- Pontos de recarga -->
      ${pontosRecarga.map(p => `<g><circle cx="${p.x}" cy="${p.y}" r="10" fill="#fff" stroke="#2e7d32" stroke-width="3"/><text x="${p.x+15}" y="${p.y+5}" font-size="16" fill="#333">🔋</text></g>`).join('')}
    </g>
  </svg>
  <div class="mt-2">
    <span class="badge bg-success">RS</span>
    <span class="badge bg-primary">BA</span>
    <span class="badge bg-warning text-dark">MG</span>
    <span class="badge bg-success">SP</span>
    <span class="badge bg-warning text-dark">PE</span>
    <span class="ms-3">🔋 Pontos de recarga</span>
  </div>
  `;
  document.getElementById('mapa-brasil').innerHTML = svg;
}

window.addEventListener('DOMContentLoaded', renderMapaBrasil);
