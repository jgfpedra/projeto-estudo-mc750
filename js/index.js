
function abrirLink(elemento) {
    const urls = {
        torre: 'https://unfccc.int/',
        casa1: 'https://www.irena.org/',
        casa2: 'https://www.iea.org/',
        carro: 'https://www.ipcc.ch/'
    };
    
    // Feedback visual
    const elementoDOM = event.currentTarget;
    elementoDOM.style.transform = 'scale(1.15)';
    elementoDOM.style.filter = 'brightness(1.3)';
    
    setTimeout(() => {
        elementoDOM.style.transform = '';
        elementoDOM.style.filter = '';
        window.open(urls[elemento], '_blank');
    }, 200);
}

// Detectar dispositivo móvel
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Se for mobile, mostrar QR codes sempre visíveis
if (isMobile()) {
    document.querySelectorAll('.qr-code').forEach(qr => {
        qr.style.opacity = '1';
        qr.style.transform = 'translate(-50%, -170%)';
    });
}

// Animação de entrada
window.addEventListener('load', () => {
    document.querySelectorAll('.elemento').forEach((el, index) => {
        el.style.animationDelay = `${index * 0.5}s`;
    });
});
