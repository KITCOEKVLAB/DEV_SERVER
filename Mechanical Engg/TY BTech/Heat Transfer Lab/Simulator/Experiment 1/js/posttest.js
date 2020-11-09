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

  const quizContainer = document.getElementById("quiz1");
  const resultsContainer = document.getElementById("results1");
  const submitButton = document.getElementById("submit1");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

/////////////// Write the MCQ below in the exactly same described format ///////////////


  
  const myQuestions = [
    {
      question: "",  ///// Write the question inside double quotes
      answers: {
        a: "",                        ///// Write the option 1 inside double quotes
        b: "",     
        c: "",
        d: ""            ///// Write the option 2 inside double quotes
      },
      correctAnswer: ""                ///// Write the correct option inside double quotes
    },

    {
      question: "",  ///// Write the question inside double quotes
      answers: {
        a: "",                        ///// Write the option 1 inside double quotes
        b: "",
        c: "",
        d: ""          ///// Write the option 2 inside double quotes
      },
      correctAnswer: ""                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    
    {
      question: "",  ///// Write the question inside double quotes
      answers: {
        a: "",                        ///// Write the option 1 inside double quotes
        b: "",
        c: "",
        d: ""              ///// Write the option 4 inside double quotes
      },
      correctAnswer: ""                ///// Write the correct option inside double quotes
    },  

    {
      question: "",
      answers: {
        a: "",                        ///// Write the option 1 inside double quotes
        b: "",
        c: "",
        d: ""
      },
      correctAnswer: ""
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
    