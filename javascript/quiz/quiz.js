"use strict";
// Preguntas del Quiz
const questions = [
    {
        question: "¿Qué es una clase en POO?",
        options: ["Un objeto", "Una plantilla para crear objetos", "Un método", "Una variable"],
        correctAnswer: 1 // El índice de la respuesta correcta
    },
    {
        question: "¿Qué significa la herencia en POO?",
        options: ["Un objeto hereda atributos y métodos de otro objeto", "Un objeto se destruye cuando ya no se usa", "Los objetos no pueden interactuar entre sí", "El proceso de crear nuevas clases"],
        correctAnswer: 0
    },
    {
        question: "¿Qué es el polimorfismo en POO?",
        options: ["El proceso de ocultar detalles internos", "La capacidad de usar diferentes tipos de objetos", "El concepto de que una clase puede heredar de más de una clase", "El proceso de modificar las propiedades de un objeto"],
        correctAnswer: 1
    },
    {
        question: "¿Qué es un objeto en POO?",
        options: ["Un tipo de dato primitivo", "Una instancia de una clase", "Una función", "Un método"],
        correctAnswer: 1
    },
    {
        question: "¿Qué es la encapsulación en POO?",
        options: ["El proceso de destruir objetos", "El ocultamiento de detalles internos y mostrar solo lo necesario", "El uso de múltiples clases", "La capacidad de las clases para heredar de otras clases"],
        correctAnswer: 1
    }
];
// Variables para el estado del quiz
let currentQuestionIndex = 0;
let score = 0;
// Elementos del DOM
const questionElement = document.getElementById('question');
const options = Array.from(document.querySelectorAll('.option-button'));
const nextButton = document.getElementById('nextButton');
const resultContainer = document.getElementById('result');
const scoreElement = document.getElementById('score');
// Función para cargar la pregunta actual
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    options.forEach((button, index) => {
        button.textContent = currentQuestion.options[index];
        button.onclick = () => checkAnswer(index);
    });
}
// Función para verificar la respuesta seleccionada
function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correctAnswer) {
        score++;
    }
    // Mostrar la siguiente pregunta
    nextButton.style.display = 'block';
}
// Función para pasar a la siguiente pregunta
function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
        nextButton.style.display = 'none';
    }
    else {
        showResults();
    }
}
// Función para mostrar los resultados finales
function showResults() {
    resultContainer.style.display = 'block';
    scoreElement.textContent = `Tu puntuación es: ${score} de ${questions.length}`;
    nextButton.style.display = 'none';
}
// Cargar la primera pregunta
loadQuestion();
