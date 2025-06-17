// Linha do tempo interativa de energias renováveis
const timelineData = [
  { ano: '1970', evento: 'Primeiros grandes projetos hidrelétricos no Brasil.' },
  { ano: '1992', evento: 'ECO-92 no Rio: energia renovável ganha destaque global.' },
  { ano: '2002', evento: 'Criação do PROINFA para incentivar eólica e biomassa.' },
  { ano: '2012', evento: 'Primeiros leilões de energia solar no Brasil.' },
  { ano: '2016', evento: 'Brasil ultrapassa 10 GW de energia eólica instalada.' },
  { ano: '2018', evento: 'Renováveis atingem 79% da matriz elétrica brasileira.' },
  { ano: '2020', evento: 'Pandemia acelera investimentos em energia limpa.' },
  { ano: '2022', evento: 'Solar atinge 20 GW e eólica 22 GW no Brasil.' },
  { ano: '2024', evento: 'Renováveis chegam a 83% da matriz elétrica nacional.' },
  { ano: '2030', evento: 'Meta da ONU: acesso universal à energia limpa.' }
];

function renderTimeline() {
  const timeline = document.getElementById('timeline');
  if (!timeline) return;
  timeline.innerHTML = `<div class="timeline-bar"></div>` +
    timelineData.map((item, i) => `
      <div class="timeline-item ${i%2===0?'left':'right'} fadein show">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <span class="timeline-year">${item.ano}</span>
          <span class="timeline-event">${item.evento}</span>
        </div>
      </div>
    `).join('');
}

window.addEventListener('load', renderTimeline);
