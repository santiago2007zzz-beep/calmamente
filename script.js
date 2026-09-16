// DATOS DE EMOCIONES
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

// FUNCIONALIDAD DE EMOCIONES
document.querySelectorAll('.emocion-card').forEach(card => {
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
        
        document.getElementById('emocion-contenido').classList.remove('oculto');
        document.getElementById('emocion-contenido').scrollIntoView({ behavior: 'smooth' });
    });
});

document.getElementById('cerrar-emocion').addEventListener('click', function() {
    document.getElementById('emocion-contenido').classList.add('oculto');
});

// FUNCIONALIDAD DEL TEST
document.getElementById('calcular-test').addEventListener('click', function() {
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
        alert('Por favor responde todas las preguntas');
        return;
    }
    
    let titulo, mensaje;
    
    if (total <= 5) {
        titulo = "🌟 Bienestar óptimo";
        mensaje = "¡Excelente! Parece que estás en un buen momento emocional. Sigue cuidándote y mantén tus hábitos saludables.";
    } else if (total <= 10) {
        titulo = "💚 Bienestar moderado";
        mensaje = "Estás manejando las cosas, pero hay espacio para mejorar. Te recomendamos explorar nuestras herramientas de bienestar.";
    } else if (total <= 15) {
        titulo = "💛 Bienestar bajo";
        mensaje = "Parece que estás pasando por un momento difícil. No tienes que hacerlo solo. Te recomendamos hablar con alguien de confianza o considerar orientación profesional.";
    } else {
        titulo = "🧡 Necesitas apoyo";
        mensaje = "Tus respuestas indican que podrías estar experimentando un nivel significativo de malestar emocional. Te recomendamos fuertemente buscar apoyo profesional. Aquí hay recursos que pueden ayudarte.";
    }
    
    document.getElementById('resultado-titulo').textContent = titulo;
    document.getElementById('resultado-mensaje').textContent = mensaje;
    document.getElementById('test-formulario').classList.add('oculto');
    document.getElementById('test-resultado').classList.remove('oculto');
});

document.getElementById('reiniciar-test').addEventListener('click', function() {
    document.getElementById('test-formulario').classList.remove('oculto');
    document.getElementById('test-resultado').classList.add('oculto');
    document.querySelectorAll('input[type="radio"]').forEach(radio => radio.checked = false);
});

// FORMULARIO DE AYUDA
document.getElementById('form-ayuda').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Te contactaremos pronto. Si es una emergencia, llama a la línea 106.');
    this.reset();
});

// SCROLL SUAVE
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});