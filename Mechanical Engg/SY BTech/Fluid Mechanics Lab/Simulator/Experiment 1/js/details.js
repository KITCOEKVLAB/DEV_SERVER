

/* Don't Change the order of elements inside details section */
/* Use " <br> " if u want a line break at actual simulator use " <br><br> " to get a blank line */ 
const details = [
    {
        title: `Verification of the Bernoulli’s Theorem.`,


        aim : `To study flow through a variable duct area.`,

        // For theory is is not a single quote it is called string literal in javascript
        // So by mistake you removed it just press the button above tab and to the left of number 1 button.

        theory: `When an incompressible fluid flowing through closed conduit is may be subjected to various forces, which cause charge of velocity, acceleration and energies involved. The major forces involved are pressure may changes or due to change of cross section velocity of fluid may change. But through there is change of velocity, pressure also changes accordingly. In other words it velocity energy of fluid is raised, its pressure will drops, i.e. total energy of fluid is constant at any two points in path of flow. The theorem is known as Bernoulli’s theorem. Hence when applied to study irrigational flow of incompressible fluids. P\W + V2 /2g+Z = C P = pressure V = velocity at point. Z= potential head from datum`

    }
]

const procedure = [
    {
        //step1
        step: `Select the value of the Volume Flow Rate from choices available.`
    },
    {   
        //step2
        step: `Note the readings of velocities and pressure heads at section 1, section 2 and section 3.`
    },
    {
        //step3
        step: `Calculate the value of total head at these 3 sections and enter them at space provided.`
    },
    {
        //step3
        step: `Analyze the value of ‘C’ calculated from inlet readings and outlet readings.`
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
            Devloper : "Sameesh Yadav (CSE)" ,     //Name of devloper and inside () give department name Use short form for department like CSE, BioTech, Mech
            BA : "Akash Salunkhe (MECH)",            //same as above
            Tester: "Pushkar Shinde (MECH)"
    
        }
    }
]

const expPageDetails = [
    {
        pageName: "simulation.html",       // Your html file name with extension (simulator file)
        screenShot: "ss.png",     // Take screen shot of simulator (Take a good one) and give the name of image with extension
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
