

/* Don't Change the order of elements inside details section */
/* Use " <br> " if u want a line break at actual simulator use " <br><br> " to get a blank line */
const details = [
    {
        title: `THERMAL CONDUCTIVITY OF INSULATING POWDER`,


        aim: `To determine thermal conductivity of insulating powder.`,

        // For theory is is not a single quote it is called string literal in javascript
        // So by mistake you removed it just press the button above tab and to the left of number 1 button.

        theory: `Thermal insulation is of great importance because it involves considerable cost in industries in minimizing the heat losses. Different materials are used as insulating materials. These materials used may be of solid (sheet or powder or yarn etc), liquid and gases. Solid insulating materials are popular as they can be easily used in many situations. One of the desirable properties of insulating materials is low thermal conductivity or high thermal resistance. <br>
        Thermal conductivity is defined as the ' rate of heat transfer by conduction per unit area per unit temperature gradient' and its S.I unit is W/mK or W/m℃. While calculating the thermal conductivity experimentally Fourier's law of heat conduction is used. It can be stated as: <br>
        'Rate of heat transfer by conduction in steady state is directly proportional to the normal area and temperature gradient'. 
        <br>Mathematically, <br>Q ∝ A(dx/dT); 	Where	Q  = heat transfer rate in W<br>T = Temperature in 0C or K <br>A = Area normal to heat transfer in m2 
        <br>Removing proportionality the law can be written as <br>Q = -kA(dx/dT); <br>where k = constant of proportionality called as 'Thermal conductivity'. Negative sign here indicates that the there is decrease in temperature in the direction of heat transfer.
        <br>Insulating materials need to have high thermal resistance. Thermal resistance can be calculated using electrical analogy as given below. <br>
        Heat transfer rate = (Thermal Potential Difference/Thermal Resistance) ;       Q = ΔT/Rth <br>Where Q is analogous to Current I , ΔT analogous to Voltage V and Rth analogous to Electrical Resistance R. S.I unit of thermal resistance is ℃/w or K/W. Expression for thermal resistance depends on the geometry for heat conduction. Rth expression for slab, hollow cylinder and hollow sphere is given below.
        <br>Slab:<br>Rth = L/kA ;  	where L =thickness of slab, k = thermal conductivity and A = normal area. <br>Hollow Cylinder: <br>
        Rth = ( ln(r2/r1) )/2πkL ;  where r2 = outer radius , r1= inner radius, k= thermal conductivity and L=length of cylinder. <br>
        Hollow Sphere: <br>Rth = (r2-r1)/4πkr1r2 ;  	where r2 = outer radius , r1= inner radius, k= thermal conductivity<br>
        <hr>
        <h5>DISCRIPTION OF APPARATUS:</h5> <img src="img/diagram.PNG"><hr><br>
        <h5>SPECIFICATIONS:</h5><br>1. Radius of inner sphere = ri =50mm
        <br>2. Radius of outer sphere = ro =100mm
       <br> 3. Mica heater: 1000 W
       <br> 4. Dimmerstat: 2 - 5 kW
        <br>5. Voltmeter: 0 - 300 Volts
        <br>6. Ammeter: 0 - 5 Amperes
        <br>7. Multi channel digital temperature indicator: 0 - 400°C
        <br>8. Thermocouples: k-type (12 Nos.) <br><hr>
        <h5>CALCULATIONS:</h5><br>
        1. Heat Input = Q = V x I (W)<br>
        2. Average surface temperatures: Ti = (T1+T2+T3+T4+T5+T6)/6 ;<br>
                                         To = (T7+T8+T9+T10+T11+T12)/6 ;<br>

        3. Thermal Conductivity of Insulating Powder: Q = ΔT/Rth = (Ti - To) / [ (ro - ri) / (4πk*ri*ro) ] ;
        <br>Therefore, k = [Q (ro - ri) ] / [ 4πk*ri*ro*(Ti - To) ] ;`


    }
]

const procedure = [
    {
        //step1
        step: `1.	Set the values of Voltage and Current.`
    },
    {
        //step2
        step: `2.	Note down the temperature readings of all twelve thermocouples.`
    },
    {
        //step3
        step: `3.	Calculate Thermal Conductivity (k) of insulating powder using given formulae.`
    },
    {
        //step3
        step: `4.	Repeat the above procedure 3 more times with different Voltage and Current inputs`
    },
    {
        //step3
        step: `5.	Calculate average Thermal Conductivity.`
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
            Developer: "Kiran Patil (IT)",     //Name of devloper and inside () give department name Use short form for department like CSE, BioTech, Mech
            BA: "Vedant Mandrupkar (Mechanical)",            //same as above
            Tester: "Akhil Kamble (Mechanical)"

        }
    }
]

const expPageDetails = [
    {
        pageName: "index.html",       // Your html file name with extension (simulator file)
        screenShot: "img/ss.PNG",     // Take screen shot of simulator (Take a good one) and give the name of image with extension
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


function buildPage() {

    titleContainer.innerHTML = details[0].title
    aimContainer.innerHTML = details[0].aim
    theoryContainer.innerHTML = details[0].theory

    var op = []
    for (var i = 0; i < procedure.length; i++) {
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
        for (tag in item.team) {
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