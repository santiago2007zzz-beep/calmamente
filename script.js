/* =========================================
   CALMAMENTE - JAVASCRIPT PROFESIONAL
   Versión 2.0 - Nivel Premium
   ========================================= */

// =========================================
// DATOS DE EMOCIONES
// =========================================
const emocionesData = {
    ansiedad: {
        titulo: "Ansiedad",
        mensaje: "La ansiedad puede sentirse como un motor acelerado que no se detiene. Es normal sentirse así, y hay formas de calmarlo.",
        acciones: [
            "Respiración 4-7-8: Inhala 4 segundos, sostén 7, exhala 8. Repite 3 veces.",
            "Grounding 5-4-3-2-1: Nombra 5 cosas que ves, 4 que tocas, 3 que oyes, 2 que hueles, 1 que saboreas.",
            "Toma un vaso de agua fría y concéntrate en la sensación."
        ]
    },
    tristeza: {
        titulo: "Tristeza",
        mensaje: "La tristeza es una emoción válida. No tienes que 'estar bien' todo el tiempo. Permítete sentirla, pero no te quedes atrapado.",
        acciones: [
            "Escribe en un diario: ¿Qué me hizo sentir así? ¿Qué necesito ahora?",
            "Habla con alguien de confianza, aunque sea solo para decir 'me siento triste hoy'.",
            "Haz algo pequeño que te genere placer: una canción, un paseo, una comida rica."
        ]
    },
    estres: {
        titulo: "Estrés",
        mensaje: "El estrés es tu cuerpo pidiendo una pausa. Escúchalo antes de que te obligue a detenerte.",
        acciones: [
            "Técnica Pomodoro: Trabaja 25 min, descansa 5. Repite.",
            "Haz una lista: ¿Qué es urgente? ¿Qué puede esperar?",
            "Estírate, camina 5 minutos, respira profundamente."
        ]
    },
    soledad: {
        titulo: "Soledad",
        mensaje: "Sentirse solo no significa que estés solo. A veces el aislamiento es interno, pero hay formas de reconectar.",
        acciones: [
            "Envía un mensaje a alguien: 'Hola, ¿cómo estás?' (aunque sea simple).",
            "Participa en una actividad grupal, aunque sea virtual.",
            "Ve a un lugar público: cafetería, biblioteca, parque."
        ]
    },
    enojo: {
        titulo: "Enojo",
        mensaje: "El enojo es una señal de que algo no está bien. No lo reprimas, pero tampoco dejes que te controle.",
        acciones: [
            "Cuenta hasta 10 antes de reaccionar.",
            "Escribe lo que te molesta, luego rompe el papel (sí, literalmente).",
            "Haz ejercicio intenso: correr, saltar, bailar."
        ]
    },
    confusion: {
        titulo: "Confusión",
        mensaje: "Sentirse perdido es parte del proceso. No tienes que tener todas las respuestas ahora.",
        acciones: [
            "Escribe 3 preguntas que tienes. No necesitas responderlas aún.",
            "Habla con un orientador o mentor.",
            "Toma una decisión pequeña hoy, solo una."
        ]
    },
    abrumado: {
        titulo: "Abrumado",
        mensaje: "Cuando todo parece demasiado, es señal de que necesitas dividir las cosas. No tienes que hacerlo todo hoy.",
        acciones: [
            "Elige UNA sola cosa pequeña que puedas hacer ahora.",
            "Di en voz alta: 'Solo voy a hacer esto. Lo demás puede esperar.'",
            "Haz una lista de TODO, luego elimina lo que no es urgente."
        ]
    }
};

// =========================================
// INICIALIZACIÓN
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initParticles();
    initThemeToggle();
    initEmociones();
    initTest();
    initScrollAnimations();
    initStatsCounter();
    initHeaderScroll();
    initSmoothScroll();
    initFormSubmit();
});

// =========================================
// LOADER
// =========================================
function initLoader() {
    const loader = document.getElementById('loader');
    
    // Simular carga
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 2000);
}

// =========================================
// PARTÍCULAS ANIMADAS
// =========================================
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Tamaño aleatorio
    const size = Math.random() * 60 + 20;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Posición aleatoria
    particle.style.left = `${Math.random() * 100}%`;
    
    // Duración aleatoria
    const duration = Math.random() * 10 + 10;
    particle.style.animationDuration = `${duration}s`;
    
    // Delay aleatorio
    particle.style.animationDelay = `${Math.random() * 5}s`;
    
    // Opacidad aleatoria
    particle.style.opacity = `${Math.random() * 0.3 + 0.1}`;
    
    container.appendChild(particle);
    
    // Remover y recrear partícula después de la animación
    setTimeout(() => {
        particle.remove();
        createParticle(container);
    }, duration * 1000);
}

// =========================================
// MODO OSCURO/CLARO
// =========================================
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Verificar preferencia guardada
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    }
    
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        body.classList.toggle('dark-mode');
        
        // Guardar preferencia
        const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);
    });
}

// =========================================
// EMOCIONES
// =========================================
function initEmociones() {
    const cards = document.querySelectorAll('.emocion-card');
    const contenido = document.getElementById('emocion-contenido');
    const btnCerrar = document.getElementById('cerrar-emocion');
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const emocion = this.dataset.emocion;
            const data = emocionesData[emocion];
            
            document.getElementById('emocion-titulo').textContent = data.titulo;
            document.getElementById('emocion-mensaje').textContent = data.mensaje;
            
            const accionesList = document.getElementById('emocion-acciones');
            accionesList.innerHTML = '';
            data.acciones.forEach(accion => {
                const li = document.createElement('li');
                li.textContent = accion;
                accionesList.appendChild(li);
            });
            
            contenido.classList.remove('oculto');
            
            // Scroll suave al contenido
            setTimeout(() => {
                contenido.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
        });
    });
    
    btnCerrar.addEventListener('click', () => {
        contenido.classList.add('oculto');
    });
}

// =========================================
// TEST DE BIENESTAR
// =========================================
function initTest() {
    const btnCalcular = document.getElementById('calcular-test');
    const btnReiniciar = document.getElementById('reiniciar-test');
    const formulario = document.getElementById('test-formulario');
    const resultado = document.getElementById('test-resultado');
    
    if (btnCalcular) {
        btnCalcular.addEventListener('click', () => calcularTest(formulario, resultado));
    }
    
    if (btnReiniciar) {
        btnReiniciar.addEventListener('click', () => reiniciarTest(formulario, resultado));
    }
}

function calcularTest(formulario, resultado) {
    let total = 0;
    let completas = true;
    
    for (let i = 1; i <= 5; i++) {
        const seleccion = document.querySelector(`input[name="p${i}"]:checked`);
        if (seleccion) {
            total += parseInt(seleccion.value);
        } else {
            completas = false;
        }
    }
    
    if (!completas) {
        alert('Por favor responde todas las preguntas para darte un resultado preciso.');
        return;
    }
    
    let titulo, mensaje, icono;
    
    if (total <= 5) {
        titulo = "🌟 Bienestar óptimo";
        mensaje = "¡Excelente! Parece que estás en un buen momento emocional. Sigue cuidándote y mantén tus hábitos saludables.";
        icono = "🌟";
    } else if (total <= 10) {
        titulo = " Bienestar moderado";
        mensaje = "Estás manejando las cosas, pero hay espacio para mejorar. Te recomendamos explorar nuestras herramientas de bienestar.";
        icono = "💚";
    } else if (total <= 15) {
        titulo = "💛 Bienestar bajo";
        mensaje = "Parece que estás pasando por un momento difícil. No tienes que hacerlo solo. Te recomendamos hablar con alguien de confianza o considerar orientación profesional.";
        icono = "💛";
    } else {
        titulo = "🧡 Necesitas apoyo";
        mensaje = "Tus respuestas indican que podrías estar experimentando un nivel significativo de malestar emocional. Te recomendamos fuertemente buscar apoyo profesional. Aquí hay recursos que pueden ayudarte.";
        icono = "🧡";
    }
    
    document.getElementById('resultado-titulo').textContent = titulo;
    document.getElementById('resultado-mensaje').textContent = mensaje;
    document.getElementById('resultado-icon').textContent = icono;
    
    formulario.classList.add('oculto');
    resultado.classList.remove('oculto');
    resultado.scrollIntoView({ behavior: 'smooth' });
}

function reiniciarTest(formulario, resultado) {
    formulario.classList.remove('oculto');
    resultado.classList.add('oculto');
    document.querySelectorAll('input[type="radio"]').forEach(radio => radio.checked = false);
    formulario.scrollIntoView({ behavior: 'smooth' });
}

// =========================================
// ANIMACIONES AL HACER SCROLL
// =========================================
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });
}

// =========================================
// CONTADOR DE ESTADÍSTICAS ANIMADO
// =========================================
function initStatsCounter() {
    const stats = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    stats.forEach(stat => {
        const target = parseInt(stat.dataset.target);
        observer.observe(stat);
    });
}

function animateCounter(element) {
    const target = parseInt(element.dataset.target);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target + (target === 100 ? '%' : target === 24 ? '/7' : '+');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// =========================================
// HEADER SCROLL EFFECT
// =========================================
function initHeaderScroll() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// =========================================
// SMOOTH SCROLL
// =========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// =========================================
// SCROLL TO CRISIS
// =========================================
function scrollToCrisis() {
    const crisisSection = document.getElementById('crisis');
    if (crisisSection) {
        crisisSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// =========================================
// FORM SUBMIT
// =========================================
function initFormSubmit() {
    const form = document.getElementById('form-ayuda');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Animación de éxito
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            btn.textContent = '✓ Enviado';
            btn.style.background = 'var(--success)';
            
            setTimeout(() => {
                alert('¡Gracias por tu mensaje! Te contactaremos pronto. Si es una emergencia, llama a la línea 106.');
                form.reset();
                btn.textContent = originalText;
                btn.style.background = '';
            }, 500);
        });
    }
}

// =========================================
// ACTIVE NAV LINK
// =========================================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});
