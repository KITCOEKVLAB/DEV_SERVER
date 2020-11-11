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
      question: "1. Carbon residue of an oil is determined by",  ///// Write the question inside double quotes
      answers: {
        a: "By Conradson method only ",                        ///// Write the option 1 inside double quotes
        b: "By Ramsbottom method only",     
        c: "Either by Conradson or Ramsbottom method",
        d: "By Pensky-Martens (closed) method"            ///// Write the option 2 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },

    {
      question: "2. Carbon residue in diesel oil should not be more than",  ///// Write the question inside double quotes
      answers: {
        a: "1%",                        ///// Write the option 1 inside double quotes
        b: "0.5%",
        c: "0.1%",
        d: "0.01%"          ///// Write the option 2 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    
    {
      question: "3. Viscosity of multi-grade oils",  ///// Write the question inside double quotes
      answers: {
        a: "Reduces with temperature but at higher sensitivity compare to mono-grade oil.",                        ///// Write the option 1 inside double quotes
        b: "Increases with temperature but at higher sensitivity compare to mono-grade oil.",
        c: "Reduces with temperature but at lower sensitivity compare to mono-grade oil.",
        d: "Increases with temperature but at lower sensitivity compare to mono-grade oil."              ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },  

    {
      question: "4. Which one is the common system for oil classification?",
      answers: {
        a: "SAE (Society of Automobile Engineers)",                        ///// Write the option 1 inside double quotes
        b: "API (American Petroleum Institute)",
        c: "ISO (International Organization for Standardization)",
        d: "All of the above"
      },
      correctAnswer: "d"
    },
    {
      question: "5. Which of the following is/are the constituents of grease?",
      answers: {
        a: "Base oil",
        b: "Additive",
        c: "Thickness fiber",
        d: "All of above"
      },
      correctAnswer: "d"
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
    