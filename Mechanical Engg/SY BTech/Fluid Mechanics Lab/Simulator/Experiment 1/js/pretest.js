/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "#1dc230";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

/////////////// Write the MCQ below in the exactly same described format ///////////////


    
const myQuestions = [
  {
    question: "In which of the following types of flows is the Bernoulli’s theorem strictly applicable:",  ///// Write the question inside double quotes
    answers: {
      a: "Streamlined and Rotational",                        ///// Write the option 1 inside double quotes
      b: "Turbulent and Rotational",     
      c: "Turbulent and Irrotational",
      d: "Streamlined and Irrotational"            ///// Write the option 2 inside double quotes
    },
    correctAnswer: "d"                ///// Write the correct option inside double quotes
  },

  {
    question: "Water is flowing through a pipe under constant pressure. At some place the pipe becomes narrow. The pressure of water at this place ",  ///// Write the question inside double quotes
    answers: {
      a: "Remains unchanged",                        ///// Write the option 1 inside double quotes
      b: "Increases",
      c: "Decreases",
      d: "Depends on several factors."          ///// Write the option 2 inside double quotes
    },
    correctAnswer: "c"                ///// Write the correct option inside double quotes
  },                                  ///// To add more questions, copy the section below 
  
  {
    question: "The equation of continuity for fluid flow can be derived from the conservation of:",  ///// Write the question inside double quotes
    answers: {
      a: "energy ",                        ///// Write the option 1 inside double quotes
      b: "mass",
      c: "angular momentum",
      d: "pressure"              ///// Write the option 4 inside double quotes
    },
    correctAnswer: "b"                ///// Write the correct option inside double quotes
  },  

  {
    question: "Streamline and equipotential lines in a flow field",
    answers: {
      a: "are parallel to each other",                        ///// Write the option 1 inside double quotes
      b: "are identical to each other",
      c: "are perpendicular to each other ",
      d: "intersect at acute angles"
    },
    correctAnswer: "c"
  },
  
  {
    question: "A Newtonian fluid is defined as the fluid which",
    answers: {
      a: "Obeys Hooks Law",                        ///// Write the option 1 inside double quotes
      b: "Is incompressible",
      c: "Obeys Newton’s Law of Viscosity",
      d: "Is compressible"
    },
    correctAnswer: "c"
  },

  /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
      till closing curly braces comma ( }, )
      and paste it below the curly braces comma ( below correct answer }, ) of above 
      question
  Copy below section
  {
    question: "This is question n?",
    answers: {
      a: "Option 1",
      b: "Option 2",
      c: "Option 3",
      d: "Option 4"
    },
    correctAnswer: "c"
  },
  Copy above section
  */




];






/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
    