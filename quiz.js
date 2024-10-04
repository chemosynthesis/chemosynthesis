const questions = [
    {
        question: "What is the primary energy source for organisms that perform chemosynthesis?",
        options: ["Sunlight", "Chemical reactions", "Organic molecules", "Water"],
        answer: "B",
        hint: "Unlike photosynthesis, chemosynthesis relies on chemical reactions."
    },
    {
        question: "Where is chemosynthesis most likely to occur?",
        options: ["In forests", "In deep-sea hydrothermal vents", "On the surface of leaves", "In freshwater lakes"],
        answer: "B",
        hint: "Think about environments without sunlight."
    },
    {
        question: "Which of the following organisms perform chemosynthesis?",
        options: ["Plants", "Fungi", "Chemosynthetic bacteria", "Fish"],
        answer: "C",
        hint: "Consider organisms that live in environments without sunlight."
    },
    {
        question: "Which compound is typically oxidized in chemosynthesis at deep-sea vents?",
        options: ["Methane", "Carbon dioxide", "Hydrogen sulfide", "Oxygen"],
        answer: "C",
        hint: "This chemical is often found in volcanic areas."
    },
    {
        question: "Chemosynthesis is similar to photosynthesis because both processes produce which of the following?",
        options: ["Oxygen", "Glucose", "Sulfur", "Carbon dioxide"],
        answer: "B",
        hint: "Both processes create energy-rich molecules."
    },
    {
        question: "Chemosynthesis occurs in environments where which of the following is absent?",
        options: ["Water", "Light", "Chemicals", "Carbon dioxide"],
        answer: "B",
        hint: "If photosynthesis needs sunlight, what does chemosynthesis not require?"
    },
    {
        question: "Which of the following is a byproduct of chemosynthesis involving hydrogen sulfide?",
        options: ["Water", "Oxygen", "Sulfur", "Nitrogen"],
        answer: "C",
        hint: "When bacteria use hydrogen sulfide in chemosynthesis, they produce a substance associated with volcanic activity."
    },
    {
        question: "Chemosynthesis helps sustain life in extreme environments by producing:",
        options: ["Heat", "Organic compounds", "Inorganic gases", "Light energy"],
        answer: "B",
        hint: "The organisms that perform chemosynthesis need to create something that serves as food."
    },
    {
        question: "Which of the following ecosystems is most dependent on chemosynthetic organisms?",
        options: ["Coral reefs", "Rainforests", "Hydrothermal vent communities", "Grasslands"],
        answer: "C",
        hint: "Think about the environments that have no sunlight."
    },
    {
        question: "Which of the following molecules is not directly involved in the chemosynthesis process?",
        options: ["Hydrogen sulfide", "Methane", "Glucose", "Oxygen"],
        answer: "D",
        hint: "Consider which substances are essential for the chemosynthesis reactions."
    }
];
let currentQuestionIndex = 0;
let score = 0;
let incorrectCount = 0;

function startQuiz() {
    document.getElementById('welcome-page').classList.add('hidden');
    document.getElementById('quiz-page').classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    const questionObj = questions[currentQuestionIndex];
    document.getElementById('question').innerText = questionObj.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = ''; // Clear previous options
    questionObj.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('option-btn');
        button.innerText = option;
        button.onclick = () => selectAnswer(option); // Pass the option text directly
        optionsContainer.appendChild(button);
    });
    document.getElementById('hint').classList.add('hidden'); // Hide hint when a new question is displayed
}

function selectAnswer(option) {
    const correctAnswer = questions[currentQuestionIndex].options[questions[currentQuestionIndex].answer.charCodeAt(0) - 65]; // Get correct answer text
    if (option === correctAnswer) {
        score += 10;
        document.getElementById('score').innerText = score;
    } else {
        incorrectCount++;
        alert("Incorrect! But don't worry, keep going!");
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function showHint() {
    const hintText = questions[currentQuestionIndex].hint;
    document.getElementById('hint').innerText = hintText;
    document.getElementById('hint').classList.remove('hidden');
}

function endQuiz() {
    document.getElementById('quiz-page').classList.add('hidden');
    document.getElementById('end-page').classList.remove('hidden');
    document.getElementById('final-score').innerText = score;
    alert(`You answered ${incorrectCount} questions incorrectly. Your final score is ${score} Coins.`);
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    incorrectCount = 0;
    document.getElementById('score').innerText = score;
    document.getElementById('end-page').classList.add('hidden');
    document.getElementById('welcome-page').classList.remove('hidden');
}
