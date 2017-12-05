/*
QUESTIONS will hold an object for each question
containing the question 4 options and the answer.
*/
const QUESTIONS = [
  {question: 'What is Semantic HTML and why is it important?',option1: 'Semantic HTML Is HTML written without meaning.',option2: 'Semantic HTML is HTML using all of the new HTML 5 tags.',option3: 'Semantic HTML is HTML that is meaningful and communicates the structure of the page.',option4: 'Semantic HTML is HTML that stands alone without CSS or Javascript.',answer: 'Semantic HTML is HTML that is meaningful and communicates the structure of the page.',feedback: 'Semantic HTML is descriptive of what the markup creates. And is important to developing better websites.'},
  {question: 'Question 2: What is the difference between classes and IDs?',option1: 'There is no difference they work the same.',option2: 'A class is used when multiple elements need to be styled. An Id is used when you have a single unique element to style.',option3: 'A class is used when the user interacts with the element. Ids are static.',option4: 'A class is used only when an element is being styled. An id is used when the element will not be styled.',answer: 'A class is used when multiple elements need to be styled. An Id is used when you have a single unique element to style.',feedback: 'Classes are used to signify that the group of elements are to be styled and classified as a collective unit. Meanwhile Ids are used to select and identify a single significant element.'},
  {question: 'What does `* { box-sizing: border-box; }` do?',option1: 'Makes the box model stay within the widths set for all elements.',option2: 'adds a border to all elements.',option3: 'says no elements can have a border.',option4: 'says all box elements must have a border.',answer: 'Makes the box model stay within the widths set for all elements.',feedback: 'Selecting all elements and setting them all to borderbox forces elements to stay within given widths.'},
  {question: 'How is an inline element different from a block level element?',option1: 'Inline elements cannot be contain a block element.',option2: 'Block elements cannot contain an inline element.',option3: 'There is no difference.',option4: 'Inline elements dont start on a new line while block level elements get displayed on a new line.',answer: 'Inline elements dont start on a new line while block level elements get displayed on a new line.',feedback: 'Inline elements are created on the line that the elements parent is inside. Block level creates elements on a completely new line.'},
  {question: 'What are media queries?',option1: 'Media queries find out what if any kinds of media will play on the page.',option2: 'Media queries are used to determine what size to make img elements.',option3: 'They do not exist.',option4: 'Media queries apply css rules to only certain viewports making a page responsive to screen size.',answer: 'Media queries apply css rules to only certain viewports making a page responsive to screen size.',feedback: 'Media queries are used to create responsive designs by applying styles only when the page is viewed from a given viewport.'},
  {question: 'Why are grids used?',option1: 'Grids are used to prevent styling on elements.',option2: 'Grids style elements into boxes.',option3: 'Divids a page into major regions while defining the size and position.',option4: 'Grids give specific styles to elements in specific sections.',answer: 'Divids a page into major regions while defining the size and position.',feedback: 'Grids are used to divide a page and define size and position in which elements will be placed and styled.'},
  {question: 'What is a function?',option1: 'Code that is easy and "fun" to write.',option2: 'A repeatable process or behavior that can be defined and called.',option3: 'The ability to repair code.',option4: 'Structuring data into useable pieces.',answer: 'A repeatable process or behavior that can be defined and called.',feedback: 'Functions are used in javascript to create repeatable pieces of code that are the foundation of many programs.'},
  {question: 'What is DOM manipulation?',option1: 'When you change the color of selected elements.',option2: 'Adding a new document to the project.',option3: 'When the Document Object model is accessed and manipulated.',option4: 'When a copy of the DOM is made.',answer: 'When the Document Object model is accessed and manipulated.', feedback: 'The DOM is the cornerstone of front end development. DOM stands for document object model which is a representation of every element that can be manipulated by javascript.'},
  {question: 'What is an event listener?',option1: 'Code that listens to see what sounds the user makes.',option2: 'Code that makes sound when called.',option3: 'Commenting out code.',option4: 'Check to see if an event has occured and then preforming something in response.',answer: 'Check to see if an event has occured and then preforming something in response.',feedback: 'Event handlers are used to listen for an events occurance and to then respond to the event.'},
  {question: 'What is spaghetti code?',option1: 'The bible of the church of the flying spaghetti monster.',option2: 'Code written in Italian.',option3: 'Complicated and messy code often found laying inside one giant function.',option4: 'Straight lines of code written like uncooked spaghetti.',answer: 'Complicated and messy code often found laying inside one giant function.',feedback: 'Spaghetti code is a phrased used to describe unecesicarily complicated and messy code. This is to be avoided by breaking down code as much as possible into functions.'}
];
/*
These variables will serve to hold the value of what question
is currently being displayed as well as the number of correct
and incorrect answers and if the currently answered question
was answered correctly.
*/
let counter = 0;
let correctAnswers = 0;
let incorrectAnswers =0;
let questionStatus = false;
/*
These functions serve to advance the quiz position and to
update the current value of correct and incorrect answers.
*/
function iterateCounter() {
  counter++;
}

function updateCorrect() {
  correctAnswers++;
}

function updateIncorrect() {
  incorrectAnswers++;
}
/*
Listens for submit button clich then hides button and calls
displayQuestion.
*/
function start() {
  $('main').on('click', '.submit-button', event => {
    $('.submit-button').addClass('hidden');
    displayQuestion();
  });
}
/*
Selects the empty section above the button and inserts html that
contains the quiz position, the question, and 4 options.
*/
function displayQuestion() {
  $('.question-section').html(`
    <section>
      <h3>Question ${counter + 1} out of 10</h3>
      <p class='score'>You currently have a score of: ${correctAnswers}/${counter}</p>
    <h4 class='question'>${QUESTIONS[counter].question}</h4>
      <div class="positionform">
        <form>
          <input type='radio' id='option1' name='answer' value='${QUESTIONS[counter].option1}'>
          <label for='option1'>${QUESTIONS[counter].option1}</label><br>
          <input type='radio' id='option2' name='answer' value='${QUESTIONS[counter].option2}'>
          <label for='option2'>${QUESTIONS[counter].option2}</label><br>
          <input type='radio' id='option3' name='answer' value='${QUESTIONS[counter].option3}'>
          <label for='option3'>${QUESTIONS[counter].option3}</label><br>
          <input type='radio' id='option4' name='answer' value='${QUESTIONS[counter].option4}'>
          <label for='option4'>${QUESTIONS[counter].option4}</label><br>
          <button class='submit hidden'>Submit</button>
        </form>
    </section><br>
  `);
}
/*
checks to see an option has been selected and then unhides the submit button
*/
function displaySubmit() {
  $('main').on('click', 'form', event => {
    if ($('input[name="answer"]:checked').val() !== undefined) {
      $('.submit').removeClass('hidden');
    }
  })
}
/*
Will accept an answer given the input submitted compare it to the
correct answer and update the status of the answer being answered
correctly or incorrectly and updating the score accordingly.
*/
function registerAnswer() {
  let answer = $('input[name="answer"]:checked').val();
  if (answer === QUESTIONS[counter].answer){
    updateCorrect();
    questionStatus = true;
  }
  else {
    updateIncorrect();
    questionStatus = false;
  }
}
/*
When submit button is clicked will prevent the default action
call a register answer function and an iterateCounter function.
*/
function submitQuestion(){
  $('main').on('click','.submit', event => {
    event.preventDefault();
    registerAnswer();
    iterateCounter();
    displayFeedback();
  });
}

function displayFeedback(){
  let status = `Incorrect, The correct answer is ${QUESTIONS[counter - 1].answer}.`;
  if (questionStatus) {
    status = 'Correct.'
  }
  if (counter === QUESTIONS.length) {
    $('.question-section').html(`
      <section>
        <h3>Question ${counter} out of 10</h3>
        <p>You have a score of: ${correctAnswers}/${counter}</p>
        <h1 class='status'>${status}</h1>
        <div>
          <p class='feedback'>${QUESTIONS[counter - 1].feedback}</p>
        </div>
        <button class='finish'>Finish</button>
      </section><br>
    `);
  }
  else {
    $('.question-section').html(`
      <section>
        <h3>Question ${counter} out of 10</h3>
        <p>You currently have a score of: ${correctAnswers}/${counter}</p>
        <h1>${status}</h1>
        <div class='feedback-container'>
          <p class='feedback'>${QUESTIONS[counter - 1].feedback}</p>
        </div>
        <button class='next'>Next Question</button>
      </section><br>
      `);
  }
}

function nextQuestion(){
  $('main').on('click', '.next', event => {
    displayQuestion();
  });
}

function finish(){
  $('main').on('click', '.finish', event => {
    $('.question-section').html(`
      <section>
        <h3>You scored ${correctAnswers}/${counter}!</h3>
        <button class='reset'>Restart</button>
      </section><br>
    `);
  });
}

function reset() {
  $('main').on('click', '.reset', event => {
    counter = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    questionStatus = false;
    $('.question-section').html(``);
    displayQuestion();
  });
}


function addEventListeners() {
  start();
  submitQuestion();
  displaySubmit();
  nextQuestion();
  finish();
  reset();
}

$(addEventListeners)
