

/* Don't Change the order of elements inside details section */
/* Use " <br> " if u want a line break at actual simulator use " <br><br> " to get a blank line */ 
const details = [
    {
        title: `Bifilar Suspension`,


        aim : `To determine the radius of gyration of a rectangular bar by bifilar suspension.`,

        // For theory is is not a single quote it is called string literal in javascript
        // So by mistake you removed it just press the button above tab and to the left of number 1 button.

        theory: `Bifilar suspension method is used to find the Moment of Inertia of different objects practically.
        <br>The experiment gives an idea about the theory behind the Moment of Inertia.
        <br>Also to find the Center of gravity of components like the connecting rod is studied in this experiment.`

    }
]

const procedure = [
    {
        //step1
        step: `Enter Length of Suspension ‘L’.`
    },
    {   
        //step2
        step: `Run the simulation.`
    },
    {
        //step3
        step: `Note down the time period ‘t’ of 10 oscillations.`
    },
    {
        //step4
        step: `Repeat above with 4 different values of Length of Suspension.`
    },
    {
        //step5
        step: `Calculate periodic time ‘T’ and mean time ‘T(exp)’.`
    },
    {
        //step6
        step: `Use the following formula to calculate experimental ‘K(exp)’ and theoretical ‘K(th)’ radius of gyration of the rectangular bar and also calculate experimental ‘M.I.(exp)’ and theoretical ‘M.I.(th)’ Moment of inertia.`
    },
    {
        //step7
        step: `Compare the results and draw a conclusion.`
    },
    
]


/*
If there are more step just copy paste below code..    
    {
        step: ``
    },

*/

const team = [
    {
        team: {
            Devloper : "Shivba Pawar (IT)" ,     //Name of devloper and inside () give department name Use short form for department like CSE, BioTech, Mech
            BA : "Vedant Madrupkar (Mech)",            //same as above
            Tester: "Shamita Karvekar (Mech)"
    
        }
    }
]

const expPageDetails = [
    {
        pageName: "cycle1_BS_sim.html",       // Your html file name with extension (simulator file)
        screenShot: "sim1.jpg",     // Take screen shot of simulator (Take a good one) and give the name of image with extension
    }
]


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

const aimContainer = document.getElementById('aimText')
const titleContainer = document.getElementById('titleText')
const theoryContainer = document.getElementById('theoryText')
const procedureContainer = document.getElementById('procedureText')
const teamContainer = document.getElementById('devTeam')
const previewUrl = document.getElementById('previewURL')
const previewImg = document.getElementById('previewImg')
const gotoURL = document.getElementById('gotoURL')
const titleHead = document.getElementById('titleHead')


function buildPage(){

    titleContainer.innerHTML = details[0].title
    aimContainer.innerHTML = details[0].aim
    theoryContainer.innerHTML = details[0].theory

    var op = []
    for(var i = 0; i < procedure.length; i++){
        op.push(
            `
            <li>
                <h6>${procedure[i].step}</h6>
            </li>
            `
        )        
    }
    procedureContainer.innerHTML = op.join("")

    op = []

    team.forEach((item) => {
        for(tag in item.team){
            op.push(
                `
                <div class = "list_feat">
                    <h3>${tag}</h3>
                    <ul>
                        <li>
                            <i class="fas fa-user"><span> ${item.team[`${tag}`]}</span></i>
                        </li>
                    </ul>
                </div>
                
                `
            )
        }
    })

    teamContainer.innerHTML = op.join("")

    previewUrl.setAttribute("href", `${expPageDetails[0].pageName}`)
    previewImg.setAttribute("src", `img/${expPageDetails[0].screenShot}`)
    gotoURL.setAttribute("href", `${expPageDetails[0].pageName}`)
    titleHead.innerHTML = `<span></span>${details[0].title}`

}

buildPage()
/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////