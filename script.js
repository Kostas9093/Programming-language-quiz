VanillaTilt.init(document.querySelectorAll("img"), {
    max: 30,
    speed: 400,
    glare: true
    });
    


// Function to show score and timer
function showScoreAndTimer() {
    const scoreElement = document.getElementById('floating-score');
    const timerElement = document.getElementById('timer-display');
    scoreElement.style.display = 'block';
    timerElement.style.display = 'block';
}

// Function to hide score and timer
function hideScoreAndTimer() {
    const scoreElement = document.getElementById('floating-score');
    const timerElement = document.getElementById('timer-display');
    scoreElement.style.display = 'none';
    timerElement.style.display = 'none';
}
const quizContainer = document.getElementById('quiz-container');
quizContainer.style.display = 'none';
quizContainer.style.display = 'none';

function loadQuiz(quizType) {
    const quizContainer = document.getElementById('quiz-container');
    const quizTitle = document.getElementById('quizTitle');
    quizContainer.style.display = 'flex';
    quizContainer.innerHTML = '';
   
    
    
    // Hide the quiz title when a quiz is loaded
       quizTitle.style.display = 'none';
      

    // Show score and timer when a quiz is chosen
    showScoreAndTimer();

    let quizHtml = '';

    switch (quizType) {
        case 'html-css':
            quizHtml = generateHtmlCssQuiz();
            break;
        case 'javascript':
            quizHtml = generateJavaScriptQuiz();
            break;
        case 'python':
            quizHtml = generatePythonQuiz();
            break;
        default:
            quizHtml = '<p>Quiz not found.</p>';
    }

    quizContainer.innerHTML = quizHtml;

     // Start the timer
     startTimer();
}



let score = 0;
let timerInSeconds = 0;
let timerStarted = false;

function startTimer() {
    if (!timerStarted) {
        timerInterval = setInterval(() => {
            timerInSeconds++;
            document.getElementById('timer-display').textContent = formatTime(timerInSeconds);
        }, 1000);
        timerStarted = true;
    }
   
}

function updateScoreDisplay() {
    document.getElementById('floating-score').textContent = score;
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

     // Html Quiz // 
function check1() {
    let answer = document.getElementById('q1').value.trim().toLowerCase();
    if (answer === 'hypertext markup language') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('one').disabled = true;
        gameOver();
    } else {
        alert('Incorrect. Remember the answer includes 3 words');
    }
}

function check2() {
    let answer = document.getElementById('q2').value.trim().toLowerCase();
    if (answer === '<style>') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('two').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.Did you forgot the tags?<>');
    }
}

function check3() {
    let answer = document.getElementById('q3').value.trim().toLowerCase();
    if (answer === 'true') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('three').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function check4() {
    let answer = document.getElementById('q4').value.trim().toLowerCase();
    if (answer === 'h1{background-color:}') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('four').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.Did you forgot {}?');
    }
}

function check5() {
    let answer = document.getElementById('q5').value.trim().toLowerCase();
    if (answer === 'style') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('five').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function check6() {
    let answer = document.getElementById('q6').value.trim().toLowerCase();
    if (answer === 'font-size') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('six').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function check7() {
    let answer = document.getElementById('q7').value.trim().toLowerCase();
    if (answer === 'border:1px solid black;') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('seven').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function check8() {
    let answer = document.getElementById('q8').value.trim().toLowerCase();
    if (answer === 'font-family') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('eight').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function check9() {
    let answer = document.getElementById('q9').value.trim().toLowerCase();
    if (answer === 'list-style:square;') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('nine').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function check10() {
    let answer = document.getElementById('q10').value.trim().toLowerCase();
    if (answer.includes(',') || answer.includes('.')) {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('ten').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function check11() {
    let answer = document.getElementById('q11').value.trim().toLowerCase();
    if (answer === 'static') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('eleven').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function check12() {
    let answer = document.getElementById('q12').value.trim();
    if (answer.startsWith('/*') && answer.endsWith('*/')) {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('twelve').disabled = true;
        gameOver();
    } else {
        alert('Incorrect. Comments in CSS are written between /* and */.');
    }
}

function check13() {
    let answer = document.getElementById('q13').value.trim().toLowerCase();
    if (answer === 'margin-left') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('thirteen').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function check14() {
    let answer = document.getElementById('q14').value.trim().toLowerCase();
    if (answer === 'cascading style sheets') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('fourteen').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function check15() {
    let answer = document.getElementById('q15').value.trim().toLowerCase();
    if (answer === '#demo') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('fifteen').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function check16() {
    let answer = document.getElementById('q16').value.trim().toLowerCase();
    if (answer === 'list-style:none;') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('sixteen').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function check17() {
    let answer = document.getElementById('q17').value.trim().toLowerCase();
    if (answer.includes('alternative text') || answer.includes('alt text')) {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('seventeen').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function check18() {
    let answer = document.getElementById('q18').value.trim().toLowerCase();
    if (answer.includes('target="_blank"') || answer.includes('target=\'_blank\'')) {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('eighteen').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function check19() {
    let answer = document.getElementById('q19').value.trim().toLowerCase();
    if (answer === 'flex-direction:row;' || answer === 'flex-direction:column;' || answer.includes('flex-direction')) {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('nineteen').disabled = true;
        gameOver();
    } else {
        alert('Incorrect. Use \'flex-direction\' property with values like \'row\' or \'column\' to change the direction of flex items.');
    }
}

function check20() {
    let answer = document.getElementById('q20').value.trim().toLowerCase();
    if (answer.includes('a[title="example"]')) {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('twenty').disabled = true;
        gameOver();
    } else {
        alert('Incorrect. Remember to target the border first.');
    }
}

function check21() {
    let answer = document.getElementById('q21').value.trim();
    if (answer === 'div p') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('twenty-one').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function check22() {
    let answer = document.getElementById('q22').value.trim().toLowerCase();
    if (answer === 'text-decoration:none;' || answer === 'none') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('twenty-two').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function check23() {
    let answer = document.getElementById('q23').value.trim().toLowerCase();
    if (answer === '<input type="checkbox">' || answer === '<input type=checkbox>') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('twenty-three').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function check24() {
    let answer = document.getElementById('q24').value.trim().toLowerCase();
    if (answer === '<video>') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('twenty-four').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function check25() {
    let answer = document.getElementById('q25').value.trim().toLowerCase();
    if (answer.includes('<ol>')) {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('twenty-five').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function check26() {
    let answer = document.getElementById('q26').value.trim().toLowerCase();
    if (answer.includes('section')) {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('twenty-six').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}
function check27() {
    let answer = document.getElementById('q27').value.trim().toLowerCase();
    if (answer.includes('flex-wrap:wrap;')) {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('twenty-seven').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}
function check28() {
    let answer = document.getElementById('q28').value.trim().toLowerCase();
    if (answer.includes('font-weight:bold;')) {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('twenty-eight').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}
function check29() {
    let answer = document.getElementById('q29').value.trim().toLowerCase();
    if (answer.includes('<footer>')) {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('twenty-nine').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}
function check30() {
    let answer = document.getElementById('q30').value.trim().toLowerCase();
    if (answer.includes('box-shadow')) {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('thirty').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function gameOver() {
    if (score === 30) {
        clearInterval(timerInterval);
        alert('Game Over! Congratulations! Your final score is ' + score + ' and your time is ' + formatTime(timerInSeconds) + '.');
        document.getElementById('final-score').textContent = score;
        document.getElementById('final-time').textContent = formatTime(timerInSeconds);
    }
}




function generateHtmlCssQuiz() {
    return `
    <h1>HTML & CSS Quiz</h1>
    <p>Welcome to our HTML & CSS Quiz, a fundamental part of our web development curriculum designed to assess your knowledge and skills in HTML and CSS.

This quiz comes without the stress of grades. It's an outstanding chance to practice and show your understanding of HTML elements, attributes, structure, and semantic markup, alongside CSS selectors, properties, layouts, and responsive design principles. Additionally, it will test your ability to craft visually appealing web pages and implement design best practices.<br><br> Enjoy the challenge!

    <!-- Question 1 - What does HTML stand for? -->

    <form id="myForm1" onsubmit="check1(); return false" autocomplete="off">
    <h2>Task 1</h2>
    <p>What does HTML stand for?</p>
    <input type="text" id="q1"><br>
    <button id="one" class="btn" type="submit">Submit</button>
</form>


<!-- Question 2 - Which HTML tag is used for internal stylesheets? -->
<form id="myForm2" onsubmit="check2(); return false" autocomplete="off">
    <h2>Task 2</h2>
    <p>Which HTML tag is used to define an internal stylesheet?</p>
    <input type="text" id="q2"><br>
    <button id="two" class="btn" type="submit">Submit</button>
</form>

<!-- Question 3 - True/False: The <div> element is a block-level element. -->
<form id="myForm3" onsubmit="check3(); return false" autocomplete="off">
    <h2>Task 3</h2>
    <p>True or False: The &lt;div&gt; element is a block-level element.</p>
    <input type="text" id="q3" placeholder="True/False"><br>
    <button id="three"class="btn" type="submit">Submit</button>
</form>

<!-- Question 4 - How to add a background color for all <h1> elements -->
<form id="myForm4" onsubmit="check4(); return false" autocomplete="off">
    <h2>Task 4</h2>
    <p>How do you add a background color for all &lt;h1&gt; elements?</p>
    <input type="text" id="q4"><br>
    <button id="four" class="btn" type="submit">Submit</button>
</form>

<!-- Question 5 - Which HTML attribute is used to define inline styles? -->
<form id="myForm5" onsubmit="check5(); return false" autocomplete="off">
    <h2>Task 5</h2>
    <p>Which HTML attribute is used to define inline styles?</p>
    <input type="text" id="q5"><br>
    <button id="five" class="btn" type="submit">Submit</button>
</form>

<!-- Question 6 - Which CSS property controls the text size? -->
<form id="myForm6" onsubmit="check6(); return false" autocomplete="off">
    <h2>Task 6</h2>
    <p>Which CSS property controls the text size?</p>
    <input type="text" id="q6"><br>
    <button id="six" class="btn" type="submit">Submit</button>
</form>

<!-- Question 7 - How do you display a border like this: "1px solid black"? -->
<form id="myForm7" onsubmit="check7(); return false" autocomplete="off">
    <h2>Task 7</h2>
    <p>How do you display a border like this: "1px solid black"?</p>
    <input type="text" id="q7"><br>
    <button id="seven" class="btn" type="submit">Submit</button>
</form>

<!-- Question 8 - Which property is used to change the font of an element? -->
<form id="myForm8" onsubmit="check8(); return false" autocomplete="off">
    <h2>Task 8</h2>
    <p>Which property is used to change the font of an element?</p>
    <input type="text" id="q8"><br>
    <button id="eight" class="btn" type="submit">Submit</button>
</form>

<!-- Question 9 - How can you make a list that lists its items with squares? -->
<form id="myForm9" onsubmit="check9(); return false" autocomplete="off">
    <h2>Task 9</h2>
    <p>How can you make a list that lists its items with squares?</p>
    <input type="text" id="q9"><br>
    <button id="nine" class="btn" type="submit">Submit</button>
</form>

<!-- Question 10 - How do you group selectors? -->
<form id="myForm10" onsubmit="check10(); return false" autocomplete="off">
    <h2>Task 10</h2>
    <p>How do you group selectors?</p>
    <input type="text" id="q10"><br>
    <button id="ten" class="btn" type="submit">Submit</button>
</form>

<!-- Question 11 - What is the default value of the position property? -->
<form id="myForm11" onsubmit="check11(); return false" autocomplete="off">
    <h2>Task 11</h2>
    <p>What is the default value of the position property?</p>
    <input type="text" id="q11"><br>
    <button id="eleven" class="btn" type="submit">Submit</button>
</form>

<!-- Question 12 - How do you insert a comment in a CSS file? -->
<form id="myForm12" onsubmit="check12(); return false" autocomplete="off">
    <h2>Task 12</h2>
    <p>How do you insert a comment in a CSS file?</p>
    <input type="text" id="q12"><br>
    <button id="twelve" class="btn" type="submit">Submit</button>
</form>

<!-- Question 13 - Which property is used to change the left margin of an element? -->
<form id="myForm13" onsubmit="check13(); return false" autocomplete="off">
    <h2>Task 13</h2>
    <p>Which property is used to change the left margin of an element?</p>
    <input type="text" id="q13"><br>
    <button id="thirteen" class="btn" type="submit">Submit</button>
</form>

<!-- Question 14 - What does CSS stand for? -->
<form id="myForm14" onsubmit="check14(); return false" autocomplete="off">
    <h2>Task 14</h2>
    <p>What does CSS stand for?</p>
    <input type="text" id="q14"><br>
    <button id="fourteen" class="btn" type="submit">Submit</button>
</form>

<!-- Question 15 - How do you select an element with id "demo"? -->
<form id="myForm15" onsubmit="check15(); return false" autocomplete="off">
    <h2>Task 15</h2>
    <p>How do you select an element with id "demo"?</p>
    <input type="text" id="q15"><br>
    <button id="fifteen" class="btn" type="submit">Submit</button>
</form>

<!-- Question 16 - How do you make a list not display bullet points? -->
<form id="myForm16" onsubmit="check16(); return false" autocomplete="off">
    <h2>Task 16</h2>
    <p>How do you make a list not display bullet points?</p>
    <input type="text" id="q16"><br>
    <button id="sixteen" class="btn" type="submit">Submit</button>
</form>

<!-- Question 17 - What is the purpose of the alt attribute in images? -->
<form id="myForm17" onsubmit="check17(); return false" autocomplete="off">
    <h2>Task 17</h2>
    <p>What is the purpose of the alt attribute in images?</p>
    <input type="text" id="q17"><br>
    <button id="seventeen" class="btn" type="submit">Submit</button>
</form>

<!-- Question 18 - How do you specify an HTML link that should open in a new tab/window? -->
<form id="myForm18" onsubmit="check18(); return false" autocomplete="off">
    <h2>Task 18</h2>
    <p>How do you specify an HTML link that should open in a new tab/window?</p>
    <input type="text" id="q18"><br>
    <button id="eighteen" class="btn" type="submit">Submit</button>
</form>

<!-- Question 19 - CSS Flexbox -->
<form id="myForm19" onsubmit="return false" autocomplete="off">
    <h2>Task 19</h2>
    <p>How do you change the direction of flex items in a flex container?</p>
    <input type="text" id="q19"><br>
    <button id="nineteen" class="btn" onclick="check19()">Submit</button>
</form>

<!-- Question 20 - How do you apply a CSS style for all <a> elements with the title "example"? -->
<form id="myForm20" onsubmit="check20(); return false" autocomplete="off">
    <h2>Task 20</h2>
    <p>How do you apply a CSS style for all &lt;a&gt; elements with the title "example"?</p>
    <input type="text" id="q20"><br>
    <button id="twenty" class="btn" type="submit">Submit</button>
</form>

<!-- Question 21 - How do you select all p elements inside a div element? -->
<form id="myForm21" onsubmit="check21(); return false" autocomplete="off">
    <h2>Task 21</h2>
    <p>How do you select all &lt;p&gt; elements inside a &lt;div&gt; element?</p>
    <input type="text" id="q21"><br>
    <button id="twenty-one" class="btn" type="submit">Submit</button>
</form>

<!-- Question 22 - How do you display hyperlinks without an underline? -->
<form id="myForm22" onsubmit="check22(); return false" autocomplete="off">
    <h2>Task 22</h2>
    <p>How do you display hyperlinks without an underline?</p>
    <input type="text" id="q22"><br>
    <button id="twenty-two" class="btn" type="submit">Submit</button>
</form>

<!-- Question 23 - What is the correct HTML for creating a checkbox? -->
<form id="myForm23" onsubmit="check23(); return false" autocomplete="off">
    <h2>Task 23</h2>
    <p>What is the correct HTML for creating a checkbox?</p>
    <input type="text" id="q23"><br>
    <button id="twenty-three" class="btn" type="submit">Submit</button>
</form>

<!-- Question 24 - What is the correct HTML element for playing video files? -->
<form id="myForm24" onsubmit="check24(); return false" autocomplete="off">
    <h2>Task 24</h2>
    <p>What is the correct HTML element for playing video files?</p>
    <input type="text" id="q24"><br>
    <button id="twenty-four" class="btn" type="submit">Submit</button>
</form>

<!-- Question 25 - How can you create an ordered list? -->
<form id="myForm25" onsubmit="check25(); return false" autocomplete="off">
    <h2>Task 25</h2>
    <p>How can you create an ordered list?</p>
    <input type="text" id="q25"><br>
    <button id="twenty-five" class="btn" type="submit">Submit</button>
</form>

<!-- Question 26 - How do you group sections of content in HTML5? -->
<form id="myForm26" onsubmit="check26(); return false" autocomplete="off">
    <h2>Task 26</h2>
    <p>How do you group sections of content in HTML5?</p>
    <input type="text" id="q26"><br>
    <button id="twenty-six" class="btn" type="submit">Submit</button>
</form>

<!-- Question 27 - CSS Flexbox flex-wrap -->
<form id="myForm27" onsubmit="return false" autocomplete="off">
    <h2>Task 27</h2>
    <p>How do you make flex items wrap onto multiple lines if needed in a flex container?</p>
    <input type="text" id="q27"><br>
    <button id="twenty-seven" class="btn" onclick="check27()">Submit</button>
</form>

<!-- Question 28 - How do you make the text bold in CSS? -->
<form id="myForm28" onsubmit="check28(); return false" autocomplete="off">
    <h2>Task 28</h2>
    <p>How do you make the text bold in CSS?</p>
    <input type="text" id="q28"><br>
    <button id="twenty-eight" class="btn" type="submit">Submit</button>
</form>

<!-- Question 29 - What HTML5 element is used for specifying a footer for a document or section? -->
<form id="myForm29" onsubmit="check29(); return false" autocomplete="off">
    <h2>Task 29</h2>
    <p>What HTML5 element is used for specifying a footer for a document or section?</p>
    <input type="text" id="q29"><br>
    <button id="twenty-nine" class="btn" type="submit">Submit</button>
</form>

<!-- Question 30 - How do you add a shadow to elements in CSS? -->
<form id="myForm30" onsubmit="check30(); return false" autocomplete="off">
    <h2>Task 30</h2>
    <p>How do you add a shadow to elements in CSS?</p>
    <input type="text" id="q30"><br>
    <button id="thirty" class="btn" type="submit">Submit</button>
</form>   `;
}
 
// JavaScript quiz///
function generateJavaScriptQuiz() {
    return `
    <h1>JavaScript Quiz</h1>
    <p>Welcome to our JavaScript Quiz, a key feature of our programming curriculum designed to assess your knowledge and skills in JavaScript.<br><br> There's no pressure, as this quiz isn't graded. It's an excellent opportunity to practice and demonstrate your grasp of JavaScript basics, including variables, functions, loops, and ES6 features, as well as your ability to manipulate the DOM and handle events.<br><br> Enjoy the challenge!</p>



<!-- Question 1 - JavaScript in HTML -->

<form id="myForm1" onsubmit="checkj1(); return false" autocomplete="off">
<h2>Task 1</h2>
<p>Inside which HTML element do we put the JavaScript?</p>
<input type="text" id="qj1"><br>
<button id="one" class="btn" type="submit">Submit</button>
    </form>

<!-- Question 2 - Correct place to insert JavaScript -->

<form id="myForm2" onsubmit="checkj2(); return false" autocomplete="off">
<h2>Task 2</h2>
<p>Where is the correct place to insert a JavaScript?</p>
<ul>
<li>a) The &lt;body&gt; section</li>
<li>b) The &lt;head&gt; section</li>
<li>c) Both a and b are correct</li>
 </ul>
 <input type="text" id="qj2"><br>
 <button id="two" class="btn" type="submit">Submit</button>
 </form>

 <!-- Question 3 - External JavaScript file -->

<form id="myForm3" onsubmit="checkj3(); return false" autocomplete="off">
<h2>Task 3</h2>
<p>How do you link to an external JavaScript file?</p>
<input type="text" id="qj3"><br>
<button id="three" class="btn" type="submit">Submit</button>
 </form>

            <!-- Question 4 - Display an alert -->
            <form id="myForm4" onsubmit="checkj4(); return false" autocomplete="off">
                <h2>Task 4</h2>
                <p>How do you write "Hello World" in an alert box?</p>
                <input type="text" id="qj4"><br>
                <button id="four" class="btn" type="submit">Submit</button>
            </form>

            <!-- Question 5 - Create a function -->
            <form id="myForm5" onsubmit="checkj5(); return false" autocomplete="off">
                <h2>Task 5</h2>
                <p>How do you create a function in JavaScript?</p>
                <input type="text" id="qj5"><br>
                <button id="five"class="btn" type="submit">Submit</button>
            </form>

            <!-- Question 6 - Call a function -->
            <form id="myForm6" onsubmit="checkj6(); return false" autocomplete="off">
                <h2>Task 6</h2>
                <p>How do you call a function named "myFunction"?</p>
                <input type="text" id="qj6"><br>
                <button id="six"class="btn" type="submit">Submit</button>
            </form>

            <!-- Question 7 - External script tag -->
            <form id="myForm7" onsubmit="checkj7(); return false" autocomplete="off">
                <h2>Task 7</h2>
                <p>What is the correct syntax for referring to an external script called "xxx.js"?</p>
                <input type="text" id="qj7"><br>
                <button id="seven" class="btn" type="submit">Submit</button>
            </form>

            <!-- Question 8 - Comment in JavaScript -->
            <form id="myForm8" onsubmit="checkj8(); return false" autocomplete="off">
                <h2>Task 8</h2>
                <p>How do you write a comment in JavaScript?</p>
                <input type="text" id="qj8"><br>
                <button id="eight"class="btn" type="submit">Submit</button>
            </form>

            <!-- Question 9 - Declare a variable -->
            <form id="myForm9" onsubmit="checkj9(); return false" autocomplete="off">
                <h2>Task 9</h2>
                <p>How do you declare a JavaScript variable called name?</p>
                <input type="text" id="qj9"><br>
                <button id="nine" class="btn" type="submit">Submit</button>
            </form>

            <!-- Question 10 - Conditional Statement -->
            <form id="myForm10" onsubmit="checkj10(); return false" autocomplete="off">
                <h2>Task 10</h2>
                <p>How do you create an if statement in JavaScript?</p>
                <input type="text" id="qj10"><br>
                <button id="ten" class="btn" type="submit">Submit</button>
            </form>
            

                         <!-- Question 11 - Using Console.log -->
            <form id="myForm11" onsubmit="checkj11(); return false" autocomplete="off">
                <h2>Task 11</h2>
                <p>How do you log the message "Hello, console!" to the browser's console?</p>
                <input type="text" id="qj11"><br>
                <button id="eleven" class="btn" type="submit">Submit</button>
            </form>

            <!-- Question 12 - Creating an Array -->
            <form id="myForm12" onsubmit="checkj12(); return false" autocomplete="off">
                <h2>Task 12</h2>
                <p>How do you create an array called fruits containing the elements "Apple", "Banana", and "Cherry"?</p>
                <input type="text" id="qj12"><br>
                <button id="twelve" class="btn" type="submit">Submit</button>
            </form>

            <!-- Question 13 - Adding Elements to an Array -->
            <form id="myForm13" onsubmit="checkj13(); return false" autocomplete="off">
                <h2>Task 13</h2>
                <p>Which method adds one or more elements to the end of an array?</p>
                <input type="text" id="qj13"><br>
                <button id="thirteen" class="btn" type="submit">Submit</button>
            </form>

            <!-- Question 14 - Removing Elements from an Array -->
            <form id="myForm14" onsubmit="checkj14(); return false" autocomplete="off">
                <h2>Task 14</h2>
                <p>Which method removes the last element from an array?</p>
                <input type="text" id="qj14"><br>
                <button id="fourteen" class="btn" type="submit">Submit</button>
            </form>

            <!-- Question 15 - Finding the Index of an Element in an Array -->
            <form id="myForm15" onsubmit="checkj15(); return false" autocomplete="off">
                <h2>Task 15</h2>
                <p>What function would you need to find the index position of "Banana"?</p>
                <input type="text" id="qj15"><br>
                <button id="fifteen" class="btn" type="submit">Submit</button>
            </form>

            <!-- Question 16 - Conditional (Ternary) Operator -->
            <form id="myForm16" onsubmit="checkj16(); return false" autocomplete="off">
                <h2>Task 16</h2>
                <p>Write a line of JavaScript code using the ternary operator that assigns the value "Yes" to a variable named </p><code>answer</code> <p>if true, and "No" if the condition is false.</p>
                <input type="text" id="qj16"><br>
                <button id="sixteen" class="btn" type="submit">Submit</button>
            </form>

            <!-- Question 17 - Function Declaration Syntax -->
            <form id="myForm17" onsubmit="checkj17(); return false" autocomplete="off">
                <h2>Task 17</h2>
                <p>What is the correct syntax to declare a function named "multiply" with the parameters (x,y) that multiplies two numbers and returns them?</p>
                <input type="text" id="qj17"><br>
                <button id="seventeen" class="btn" type="submit">Submit</button>
            </form>

            <!-- Question 18 - Event Listener -->
            <form id="myForm18" onsubmit="checkj18(); return false" autocomplete="off">
                <h2>Task 18</h2>
                <p>How do you add an event listener in JavaScript that reacts to the "click" event?</p>
                <input type="text" id="qj18"><br>
                <button id="eighteen" class="btn" type="submit">Submit</button>
            </form>

            <!-- Question 19 - QuerySelector -->
            <form id="myForm19" onsubmit="checkj19(); return false" autocomplete="off">
                <h2>Task 19</h2>
                <p>How do you select an HTML element with the id "demo" using JavaScript?</p>
                <input type="text" id="qj19"><br>
                <button id="nineteen" class="btn" type="submit">Submit</button>
            </form>

            <!-- Question 20 - Understanding 'const' -->
            <form id="myForm20" onsubmit="checkj20(); return false" autocomplete="off">
                <h2>Task 20</h2>
                <p>What does the keyword 'const' represent in JavaScript?</p>
                <input type="text" id="qj20" placeholder="Type your answer here"><br>
                <button id="twenty" class="btn" type="submit">Submit</button>
            </form>



            <!-- Question 21 - Arrow Functions Simplified -->
            <form id="myForm21" onsubmit="checkj21(); return false" autocomplete="off">
                <h2>Task 21</h2>
                <p>Write the simplest form of an arrow function that returns the number 5.</p>
                <input type="text" id="qj21" placeholder="()=> ___;"><br>
                <button id="twenty-one" class="btn" type="submit">Submit</button>
            </form>


            <!-- Question 22 - Async Function -->
            <form id="myForm22" onsubmit="checkj22(); return false" autocomplete="off">
                <h2>Task 22</h2>
                <p>What keyword is used to declare an asynchronous function?</p>
                <input type="text" id="qj22"><br>
                <button id="twenty-two" class="btn" type="submit">Submit</button>
            </form>

            <!-- Question 23 - Promises -->
            <form id="myForm23" onsubmit="checkj23(); return false" autocomplete="off">
                <h2>Task 23</h2>
                <p>Which object is used for asynchronous computations in JavaScript?</p>
                <input type="text" id="qj23"><br>
                <button id="twenty-three" class="btn" type="submit">Submit</button>
            </form>

            <!-- Question 24 - Fetch API -->
            <form id="myForm24" onsubmit="checkj24(); return false" autocomplete="off">
                <h2>Task 24</h2>
                <p>What keyword helps you to get data from a URL using JavaScript?</p>
                <input type="text" id="qj24"><br>
                <button id="twenty-four" class="btn" type="submit">Submit</button>
            </form>

            <!-- Question 25 - DOM Element Selection -->
            <form id="myForm25" onsubmit="checkj25(); return false" autocomplete="off">
                <h2>Task 25</h2>
                <p>How can you select an element with the class 'example' using JavaScript?</p>
                <input type="text" id="qj25"><br>
                <button id="twenty-five" class="btn" type="submit">Submit</button>
            </form>

            <!-- Question 26 - Adding New DOM Elements Simplified -->
            <form id="myForm26" onsubmit="checkj26(); return false" autocomplete="off">
                <h2>Task 26</h2>
                <p>Given the JavaScript code</p>
                <code>let div = document.createElement('div');</code>
                <p> complete the next line to append the 'div' element to the document's body.</p>
                <input type="text" id="qj26"><br>
                <button id="twenty-six" class="btn" type="submit">Submit</button>
            </form>

            <!-- Question 27 - Event Handling Simplified -->
            <form id="myForm27" onsubmit="checkj27(); return false" autocomplete="off">
                <h2>Task 27</h2>
                <p>Write a line to add a click event listener to a function named handleClick</p>
                <input type="text" id="qj27" placeholder="addEventListener(___);"><br>
                <button id="twenty-seven" class="btn" type="submit">Submit</button>
            </form>


            <!-- Question 28 - Local Storage -->
            <form id="myForm28" onsubmit="checkj28(); return false" autocomplete="off">
                <h2>Task 28</h2>
                <p>How do you store a value 'hello' with the key 'greeting' in local storage?</p>
                <input type="text" id="qj28"><br>
                <button id="twenty-eight"class="btn" type="submit">Submit</button>
            </form>

            <!-- Question 29 - Removing DOM Elements Simplified -->
        <form id="myForm29" onsubmit="checkj29(); return false" autocomplete="off">
            <h2>Task 29</h2>
            <p>Complete the JS line to remove an element with ID 'toRemove' from the document. Start with: <code>document.getElementById('toRemove').</code></p>
            <input type="text" id="qj29" placeholder="___;"><br>
            <button id="twenty-nine" class="btn" type="submit">Submit</button>
        </form>


            <!-- Question 30 - Understanding DOM -->
        <form id="myForm30" onsubmit="checkj30(); return false" autocomplete="off">
            <h2>Task 30</h2>
            <p>What does "DOM" stand for in web development?</p>
            <input type="text" id="qj30"><br>
            <button id="thirty" class="btn" type="submit">Submit</button>
        </form>
    `;
}

function checkj1() {
    let answer = document.getElementById('qj1').value.trim().toLowerCase();
    if (answer === '<script>') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('one').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function checkj2() {
    let answer = document.getElementById('qj2').value.trim().toLowerCase();
    if (answer === 'c') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('two').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function checkj3() {
    let answer = document.getElementById('qj3').value.trim().toLowerCase();
    if (answer === '<script src="filename.js">') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('three').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function checkj4() {
    let answer = document.getElementById('qj4').value.trim().toLowerCase();
    if (answer === 'alert("Hello World");') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('four').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function checkj5() {
    let answer = document.getElementById('qj5').value.trim().toLowerCase();
    if (answer === 'function (){};') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('five').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function checkj6() {
    let answer = document.getElementById('qj6').value.trim().toLowerCase();
    if (answer === 'myFunction();') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('six').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function checkj7() {
    let answer = document.getElementById('qj7').value.trim().toLowerCase();
    if (answer === '<script src="xxx.js">') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('seven').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function checkj8() {
    let answer = document.getElementById('qj8').value.trim().toLowerCase();
    if (answer === '// /**/') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('eight').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function checkj9() {
    let answer = document.getElementById('qj9').value.trim().toLowerCase();
    if (answer === 'let name') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('nine').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function checkj10() {
    let answer = document.getElementById('qj10').value.trim().toLowerCase();
    if (answer === 'if{}') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('ten').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function checkj11() {
    let answer = document.getElementById('qj11').value.trim().toLowerCase();
    if (answer === 'console.log("Hello, console!");') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('eleven').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function checkj12() {
    let answer = document.getElementById('qj2').value.trim();
    if (answer === 'let fruits = ["Apple", "Banana", "Cherry"];') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('twelve').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function checkj13() {
    let answer = document.getElementById('qj13').value.trim().toLowerCase();
    if (answer === '.push()') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('thirteen').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function checkj14() {
    let answer = document.getElementById('qj14').value.trim().toLowerCase();
    if (answer === '.pop()') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('fourteen').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function checkj15() {
    let answer = document.getElementById('qj15').value.trim().toLowerCase();
    if (answer === 'indexOf("Banana");') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('fifteen').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function checkj16() {
    let answer = document.getElementById('qj16').value.trim().toLowerCase();
    if (answer === 'answer =  true ? "Yes" : "No"') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('sixteen').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function checkj17() {
    let answer = document.getElementById('qj17').value.trim().toLowerCase();
    if (answer === 'function multiply(x, y) {return x * y}') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('seventeen').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function checkj18() {
    let answer = document.getElementById('qj18').value.trim().toLowerCase();
    if (answer === 'Element.addEventListener("click",function)') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('eighteen').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function checkj19() {
    let answer = document.getElementById('qj19').value.trim().toLowerCase();
    if (answer === 'document.querySelector("#demo");') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('nineteen').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function checkj20() {
    let answer = document.getElementById('qj20').value.trim().toLowerCase();
    if (answer === 'constant cannot be reassigned') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('twenty').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function checkj21() {
    let answer = document.getElementById('qj21').value.trim();
    if (answer === '() => 5') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('twenty-one').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function checkj22() {
    let answer = document.getElementById('qj22').value.trim().toLowerCase();
    if (answer === 'async' || answer === 'none') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('twenty-two').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function checkj23() {
    let answer = document.getElementById('qj23').value.trim().toLowerCase();
    if (answer === 'promise' || answer === '<input type=checkbox>') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('twenty-three').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function checkj24() {
    let answer = document.getElementById('qj24').value.trim().toLowerCase();
    if (answer === 'fetch()') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('twenty-four').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function checkj25() {
    let answer = document.getElementById('qj25').value.trim().toLowerCase();
    if (answer === 'document.querySelector(".example");') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('twenty-five').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function checkj26() {
    let answer = document.getElementById('qj26').value.trim().toLowerCase();
    if (answer === 'document.body.appendChild(div);') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('twenty-six').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}
function checkj27() {
    let answer = document.getElementById('qj27').value.trim().toLowerCase();
    if (answer === 'addEventListener("click", handleClick);') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('twenty-seven').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}
function checkj28() {
    let answer = document.getElementById('qj28').value.trim().toLowerCase();
    if (answer === 'localStorage.setItem("greeting", "hello");') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('twenty-eight').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}
function checkj29() {
    let answer = document.getElementById('qj29').value.trim().toLowerCase();
    if (answer === 'remove();') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('twenty-nine').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}
function checkj30() {
    let answer = document.getElementById('qj30').value.trim().toLowerCase();
    if (answer === 'document object model') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('thirty').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}


//Python quiz//

function generatePythonQuiz(){
    return `
       <h1>Python Exercises</h1>
        <p>Welcome to Python Exercises.<br><br>
        Try not to panic though. This isn't a marked piece of work, its just helping you to test your skills with not only Python and its syntax, but with industry specific names.<br><br>
        Enter your answer to each task and then press submit to get your score!<br><br>
        Have fun!</p>

    <!-- =====================QUESTION 1================================================== -->

        <form id="myForm" id="submit-score" onsubmit="checkp1(event); return false" autocomplete="off">
            <h2>Task 1</h2> 
        
            <p>How would you make the terminal say Hello World?</p>
            <input type="text" name="q1" id="qp1"><br>
            <button id="one" class="btn" >Submit</button> 
        </form>

    <!-- ======================QUESTION 2=================================================  -->


        <form id="myForm2"onsubmit="checkp2();  return false" autocomplete="off">
            <h2>Task 2</h2> 
        
            <p>Create a variable called carname and give it a value of Volvo</p>
            <input type="text" id="qp2"><br>
            <button id="two" class="btn" type="submit">Submit</button> 
        </form>

    <!-- ========================QUESTION 3=============================================== -->  


        <form id="myForm3"onsubmit="checkp3(); return false"autocomplete="off">
            <h2>Task 3</h2> 
        
            <p>Create a variable named i and assign it a value of 50</p>
            <input type="text" id="qp3" ><br>
            <button id="three" class="btn" type="submit">Submit</button> 
        </form>

    <!-- =========================QUESTION 4==============================================  -->


        <form id="myForm4" onsubmit="checkp4(); return false"autocomplete="off">
            <h2>Task 4</h2> 
            
            <p>Fix this variable so it is best practice</p>
            
            <code>2my-1st_name = "john'</code>

            <input type="text" id="qp4"><br>
            <button id="four" class="btn" type="submit">Submit</button> 
        </form>

    <!-- =========================QUESTION 5==============================================  -->


        <form id="myForm5" onsubmit="checkp5(); return false"autocomplete="off">
            <h2>Task 5</h2> 
            <p>How would we print this string in all capitals?</p>

            <code>"i live in england"</code>
                    

            <input type="text" id="qp5"><br>
            <button id="five" class="btn" type="submit">Submit</button> 
        </form>

    <!-- =========================QUESTION 6============================================== -->


        <form id="myForm6" onsubmit="checkp6(); return false"autocomplete="off">
            <h2>Task 6</h2> 
            <p>How would you access the random library?</p>

            <input type="text" id="qp6"><br>
            <button id="six" class="btn" type="submit">Submit</button> 
        </form>

    <!--==============================QUESTION 7=========================================  -->


        <form id="myForm7" onsubmit="checkp7(); return false"autocomplete="off">
            <h2>Task 7</h2> 
            <p>After you have imported the random library, how would you generate and print a random integer between 1 and 10?</p>


            <input type="text" id="qp7"><br>
            <button id="seven" class="btn" type="submit">Submit</button> 
        </form>

    <!--==============================QUESTION 8=========================================  -->


        <form id="myForm8" onsubmit="checkp8(); return false"autocomplete="off">
            <h2>Task 8</h2> 
            <p>How would you make a programme that asks for your name as input?</p>


            <input type="text" id="qp8"><br>
            <button id="eight" class="btn" type="submit">Submit</button> 
        </form>

    <!--==============================QUESTION 9=========================================  -->


        <form id="myForm9" onsubmit="checkp9(); return false"autocomplete="off">
            <h2>Task 9</h2> 
            <p>How would you print out this variable?</p>
            <code>fav_drink="coffee"</code>


            <input type="text" id="qp9"><br>
            <button id="nine" class="btn" type="submit">Submit</button> 
        </form>

    <!--==============================QUESTION 10=========================================  -->


        <form id="myForm10" onsubmit="checkp10(); return false"autocomplete="off">
            <h2>Task 10</h2> 
            <p>How would you convert this to an f string?</p>
            <code>print("My favourite drink is {}".format(fav_drink)) </code>


            <input type="text" id="qp10"><br>
            <button id="ten" class="btn" type="submit">Submit</button> 
        </form>

    <!--==============================QUESTION 11=========================================  -->


        <form id="myForm11" onsubmit="checkp11(); return false"autocomplete="off">
            <h2>Task 11</h2> 
        <p>Without changing this code what would be the best way to add 2 to i?</p>
        <code>i = 10 </code>


            <input type="text" id="qp11"><br>
            <button id="eleven" class="btn" type="submit">Submit</button> 
        </form>

    <!--==============================QUESTION 12=========================================  -->


        <form id="myForm12" onsubmit="checkp12(); return false"autocomplete="off">
            <h2>Task 12</h2> 
            <p>What would you expect the terminal output to be for this code snippet?</p>

            <code class="code1">

            age = 21 
                <br><br>
            if age > 17: <br>
            print("Yes I can serve you")   <br>
            else:  <br>
                print("You aren’t old enough")    <br> 
            </code>


            <input type="text" id="qp12"><br>
            <button id="twelve" class="btn" type="submit">Submit</button> 
        </form>

    <!--==============================QUESTION 13=========================================  -->


        <form id="myForm13" onsubmit="checkp13(); return false"autocomplete="off">
            <h2>Task 13</h2> 
            <code>print(10/3)</code><p> gives a result of 9</p>
            <p>What would we expect the output be for this code? </p><code>print(10%3)</code>



            <input type="text" id="qp13"><br>
            <button id="thirteen" class="btn" type="submit">Submit</button> 
        </form>

    <!--==============================QUESTION 14=========================================  -->


        <form id="myForm14" onsubmit="checkp14(); return false"autocomplete="off">
            <h2>Task 14</h2> 
            <p>If you were to run this code, what would the expected output be?</p>

            <code>
            password = "qwerty" <br><br>

            if len(password) < 8: <br>
            
            print("Password is too short") <br>
            
            else: <br>
            
            print(password) </code>



            <input type="text" id="qp14"><br>
            <button id="fourteen" class="btn" type="submit">Submit</button> 
        </form>

    <!--==============================QUESTION 15=========================================  -->


        <form id="myForm15" onsubmit="checkp15(); return false"autocomplete="off">
            <h2>Task 15</h2> 
            <p>If you were to run this code, what would the expected output be?</p>

            <code>
            num = 21 <br><br><br>

            if num % 3 == 0 and num % 7 == 0: <br>

            print("Fizz Buzz") <br><br>

            elif num % 7 == 0: <br>

            print("Buzz") <br><br>

            elif num % 3 == 0: <br>

            print("Fizz") <br><br>

            else: <br>

            print(num)  </code>

            <input type="text" id="qp15"><br>
            <button id="fifteen" class="btn" type="submit">Submit</button> 
        </form>



    <!--==============================QUESTION 16=========================================  -->


        <form id="myForm16" onsubmit="checkp16(); return false"autocomplete="off">
            <h2>Task 16</h2> 
            <p>What would you add to the bottom of this code to order a large latte?</p>

            <code>
            def coffee_order(size, drink_type): <br><br><br>

                print(f"Here’s your {size} {drink_type}.") <br>
            
            </code>

            <input type="text" id="qp16"><br>
            <button id="sixteen" class="btn" type="submit">Submit</button> 
        </form>

    <!--==============================QUESTION 17=========================================  -->



        <form id="myForm17" onsubmit="checkp17(); return false"autocomplete="off">
            <h2>Task 17</h2> 

            <p>This function isn't working, everything seems to be there but I'm getting this error</p>
            <p class="error">Traceback (most recent call last):
                File "/Users/Desktop/CodeNation/python/Exercises/tasks.py", line 23, 
                cash_machine(1234, 400) <br><br>
                File "/Users/Desktop/CodeNation/python/Exercises/tasks.py", line 15, in cash_machine
                if entered_pin == actual_pin and amount <= balance: <br><br>
            UnboundLocalError: local variable 'balance' referenced before assignment</p>
            <p>What do I need to add to make it work?</p>

            <code>
            actual_pin = 1234 <br>

            balance = 500 <br><br>

            

            def cash_machine(entered_pin, amount): <br><br>

            ________________<br><br>

            if entered_pin == actual_pin and amount <= balance: <br>

            balance -= amount <br>

            print(f"Dispensing cash of £{amount}. Your new balance is £{balance}.") <br><br>

            elif entered_pin == actual_pin and amount > balance: <br>

            print(f"Insufficient funds, you cannot withdraw £{amount}. You only have £{balance} in your account.") <br>

            else: <br>

            print("Incorrect PIN") <br><br><br>

            cash_machine(1234, 400) <br>


                
            </code>

            <input type="text" id="qp17"><br>
            <button id="seventeen" class="btn" type="submit">Submit</button> 
        </form>

    <!--==============================QUESTION 18=========================================  -->


        <form id="myForm18" onsubmit="checkp18(); return false"autocomplete="off">
            <h2>Task 18</h2> 
            <p>Rewrite this line of code so it works</p>

            <code>
                fav_films == "Ghostbusters" 'Deadpool" "Titanic"]
                
            </code>

            <input type="text" id="qp18"><br>
            <button id="eighteen" class="btn" type="submit">Submit</button> 
        </form>

    <!--==============================QUESTION 19=========================================  -->


        <form id="myForm19" onsubmit="checkp19(); return false"autocomplete="off">
            <h2>Task 19</h2> 
            <p>Now print the list into the terminal</p>


            <input type="text" id="qp19"><br>
            <button id="nineteen" class="btn" type="submit">Submit</button> 
        </form>

    <!--==============================QUESTION 20=========================================  -->


        <form id="myForm20" onsubmit="checkp20(); return false"autocomplete="off">
            <h2>Task 20</h2> 
            <p>Now print Ghostbusters into the terminal using the list</p>


            <input type="text" id="qp20"><br>
            <button id="twenty" class="btn" type="submit">Submit</button> 
        </form>



    <!--==============================QUESTION 21=========================================  -->


        <form id="myForm21" onsubmit="checkp21(); return false"autocomplete="off">
            <h2>Task 21</h2> 
            <p>What method would you use to remove the last item from your list?</p>


            <input type="text" id="qp21"><br>
            <button id="twenty-one" class="btn" type="submit">Submit</button> 
        </form>

    <!--==============================QUESTION 22=========================================  -->


        <form id="myForm22" onsubmit="checkp22(); return false"autocomplete="off">
            <h2>Task 22</h2> 
            <p>Using a for loop, how would you write a programme that counts from 1-10?</p>


            <input type="text" id="qp22"><br>
            <button id="twenty-two" class="btn" type="submit">Submit</button> 
        </form>

    <!--==============================QUESTION 23=========================================  -->


        <form id="myForm23" onsubmit="checkp23(); return false"autocomplete="off">
            <h2>Task 23</h2> 
            <p>Now what would you add to the code to print 1-10 in the terminal?</p>


            <input type="text" id="qp23"><br>
            <button id="twenty-three" class="btn" type="submit">Submit</button> 
        </form>

    <!--==============================QUESTION 24=========================================  -->


        <form id="myForm24" onsubmit="checkp24(); return false"autocomplete="off">
            <h2>Task 24</h2> 
            <p>So taking the previous code into account, how would you count to 10 in increments of 2</p>


            <input type="text" id="qp24"><br>
            <button id="twenty-four" class="btn" type="submit">Submit</button> 
        </form>

    <!--==============================QUESTION 25=========================================  -->


        <form id="myForm25" onsubmit="checkp25(); return false"autocomplete="off">
            <h2>Task 25</h2> 
            <p>How would you write a programme to make the numbers count backwards?</p>


            <input type="text" id="qp25"><br>
            <button id="twenty-five" class="btn" type="submit">Submit</button> 
        </form>


    <!--==============================QUESTION 26=========================================  -->


        <form id="myForm26" onsubmit="checkp26(); return false"autocomplete="off">
            <h2>Task 26</h2> 
            <p>What would you expect the output of this code to be?</p>

            <code>for i in range(5):<br><br> 

            print("hello ") </code>


            <input type="text" id="qp26"><br>
            <button id="twenty-six" class="btn" type="submit">Submit</button> 
        </form>

    <!--==============================QUESTION 27=========================================  -->


        <form id="myForm27" onsubmit="checkp27(); return false"autocomplete="off">
            <h2>Task 27</h2> 
            <p>A while loop in Python is used for what type of iteration?</p>
            
            <p>
                Indeterminate<br>
                Indefinite<br>
                Discriminant<br>
                Definite
            </p>


            <input type="text" id="qp27"><br>
            <button id="twenty-seven" class="btn" type="submit">Submit</button> 
        </form>

    <!--==============================QUESTION 28=========================================  -->


        <form id="myForm28" onsubmit="checkp28(); return false"autocomplete="off">
            <h2>Task 28</h2> 
            <p>What would I need to add to line 3 to stop this programme running infinitely?</p>

            <code>
                1.    n = 5<br><br>
                2.    while n > 0:<br>
                3.    <br>
                4.    print(n)
            </code>

            <input type="text" id="qp28"><br>
            <button id="twenty-eight" class="btn" type="submit">Submit</button> 
        </form>

    <!--==============================QUESTION 29=========================================  -->


        <form id="myForm29" onsubmit="checkp29(); return false"autocomplete="off">
            <h2>Task 29</h2> 
            <p>What is this data type?</p>

            <code>
            True
            </code>

            <input type="text" id="qp29"><br>
            <button id="twenty-nine" class="btn" type="submit">Submit</button> 
        </form>

    <!--==============================QUESTION 30=========================================  -->


        <form id="myForm30" onsubmit="checkp30(); return false" autocomplete="off">
            <h2>Task 30</h2> 
            <p>How would you make this code a comment?</p>

            <code>
                This is a comment
            </code>

            <input type="text" id="qp30"><br>
            <button id="thirty" class="btn" type="submit">Submit</button> 
        </form>


    `;
}

function checkp1() {
    let answer = document.getElementById('qp1').value.trim();
    if (answer == 'print("Hello World")') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('one').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}



function checkp2() {
    let answer = document.getElementById('qp2').value.trim();
    if (answer === 'carname= "Volvo"') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('two').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function checkp3() {
    let answer = document.getElementById('qp3').value.trim().toLowerCase();
    if (answer === 'i = 50') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('three').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function checkp4() {
    let answer = document.getElementById('qp4').value.trim().toLowerCase();
    if (answer === 'my_first_name="john"') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('four').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function checkp5() {
    let answer = document.getElementById('qp5').value.trim().toLowerCase();
    if (answer === 'print("i live in england".upper());') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('five').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function checkp6() {
    let answer = document.getElementById('qp6').value.trim().toLowerCase();
    if (answer === 'import random') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('six').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function checkp7() {
    let answer = document.getElementById('qp7').value.trim().toLowerCase();
    if (answer === 'print(random.randint(1,10))') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('seven').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function checkp8() {
    let answer = document.getElementById('qp8').value.trim().toLowerCase();
    if (answer === 'input("what is your name?")') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('eight').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function checkp9() {
    let answer = document.getElementById('qp9').value.trim().toLowerCase();
    if (answer === 'print(fav_drink)') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('nine').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function checkp10() {
    let answer = document.getElementById('qp10').value.trim().toLowerCase();
    if (answer === 'print(f"My favourite drink is {fav_drink}")') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('ten').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function checkp11() {
    let answer = document.getElementById('qp11').value.trim().toLowerCase();
    if (answer === 'i+=2') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('eleven').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function checkp12() {
    let answer = document.getElementById('qp12').value.trim();
    if (answer === 'Yes I can serve you') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('twelve').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function checkp13() {
    let answer = document.getElementById('qp13').value.trim().toLowerCase();
    if (answer === '1') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('thirteen').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function checkp14() {
    let answer = document.getElementById('qp14').value.trim();
    if (answer === 'Password is too short') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('fourteen').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function checkp15() {
    let answer = document.getElementById('qp15').value.trim();
    if (answer === 'Fizz Buzz;') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('fifteen').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function checkp16() {
    let answer = document.getElementById('qp16').value.trim().toLowerCase();
    if (answer === 'coffee_order("large", "latte")') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('sixteen').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function checkp17() {
    let answer = document.getElementById('qp17').value.trim().toLowerCase();
    if (answer === 'global balance') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('seventeen').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function checkp18() {
    let answer = document.getElementById('qp18').value.trim();
    if (answer === 'fav_films=["Ghostbusters", "Deadpool", "Titanic"]') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('eighteen').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function checkp19() {
    let answer = document.getElementById('qp19').value.trim().toLowerCase();
    if (answer === 'print(fav_films)') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('nineteen').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function checkp20() {
    let answer = document.getElementById('qp20').value.trim().toLowerCase();
    if (answer === 'print(fav_films[0])') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('twenty').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function checkp21() {
    let answer = document.getElementById('qp21').value.trim();
    if (answer === '.pop()') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('twenty-one').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function checkp22() {
    let answer = document.getElementById('qp22').value.trim().toLowerCase();
    if (answer === 'for i in range(1, 11)') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('twenty-two').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function checkp23() {
    let answer = document.getElementById('qp23').value.trim().toLowerCase();
    if (answer === 'print(i)') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('twenty-three').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function checkp24() {
    let answer = document.getElementById('qp24').value.trim().toLowerCase();
    if (answer === 'for i in range(1,10,2)') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('twenty-four').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function checkp25() {
    let answer = document.getElementById('qp25').value.trim().toLowerCase();
    if (answer === 'for i in reversed(range(10)):') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('twenty-five').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}

function checkp26() {
    let answer = document.getElementById('qp26').value.trim().toLowerCase();
    if (answer === 'hello hello hello hello hello') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('twenty-six').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}
function checkp27() {
    let answer = document.getElementById('qp27').value.trim().toLowerCase();
    if (answer === 'Indefinite') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('twenty-seven').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}
function checkp28() {
    let answer = document.getElementById('qp28').value.trim().toLowerCase();
    if (answer === 'n-=1') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('twenty-eight').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}
function checkp29() {
    let answer = document.getElementById('qp29').value.trim().toLowerCase();
    if (answer === 'boolean') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('twenty-nine').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}
function checkp30() {
    let answer = document.getElementById('qp30').value.trim();
    if (answer === '#This is a comment') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('thirty').disabled = true;
        gameOver();
    } else {
        alert('Incorrect.');
    }
}




