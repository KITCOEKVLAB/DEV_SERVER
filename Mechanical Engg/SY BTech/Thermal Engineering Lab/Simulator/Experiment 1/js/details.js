

/* Don't Change the order of elements inside details section */
/* Use " <br> " if u want a line break at actual simulator use " <br><br> " to get a blank line */ 
const details = [
    {
        title: `Experiment on Carbon Residue Apparatus`,


        aim : `To determine the percentages of carbon residue after evaporation of oil`,

        // For theory is is not a single quote it is called string literal in javascript
        // So by mistake you removed it just press the button above tab and to the left of number 1 button.

        theory: `Carbon residue term is used to designate the carbonaceous residue formed during evaporation & pyrolysis of petroleum product.
				<br>This residue is not entirely of carbon is but a coke which can further changed by residue is called carbon residue.
				<br><br>
				<hr>

			    <h3>References<h3>
			    Google Drive link: <br>
				Experiment on carbon residue (Thermal Engg. Lab Folder ) <a href="https://drive.google.com/drive/folders/1LsUqxm2hCArjGN5-IcbNMCX-_JqXLW3K?usp=sharing">Google Drive Link</a><br>
				Please see the attached documents with mail for more information.`
    }
]

const procedure = [
    {
        //step1
        step: `Note the weight of the empty bulb (W1).`
    },
    {   
        //step2
        step: `Select the type of engine oil.`
    },
    {
        //step3
        step: `Note the weight of the bulb with the engine oil.`
    },
    {
        //step4
        step: `Run the simulation.`
    },
    {
        //step5
        step: `Wait for bulb to return to its position.`
    },
    {
        //step6
        step: `Note the weight of the bulb with carbon residue.`
    },
    {
        //step7
        step: `Calculate the percentage of carbon residue by using formula  carbon residue =   A/W   X 100 .                                                                      
            	<br>where,
            	<br>A = A1 - W1       (weight of carbon residue in gms) 
            	<br>W = W2 - W1       (weight of sample in gms) `
    },
    {
        //step8
        step: `Enter the calculated % carbon residue in the block in front of the formula and check whether it is correct or not.`
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
            Developer : "Jaydatt Patil (CSE)" ,     //Name of devloper and inside () give department name Use short form for department like CSE, BioTech, Mech
            BA : "Akash Salunkhe (Mechanical)",            //same as above
            Tester: "Pushkar Shinde (Mechanical)"
    
        }
    }
]

const expPageDetails = [
    {
        pageName: "simulation.html",       // Your html file name with extension (simulator file)
        screenShot: "main.png",     // Take screen shot of simulator (Take a good one) and give the name of image with extension
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