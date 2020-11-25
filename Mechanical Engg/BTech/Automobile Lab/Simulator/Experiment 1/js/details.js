

/* Don't Change the order of elements inside details section */
/* Use " <br> " if u want a line break at actual simulator use " <br><br> " to get a blank line */ 
const details = [
    {
        title: `STUDY OF DEMONSYTRATION OF FINAL DRIVE AND DIFFERNTIAL`,


        aim : `STUDY OF DEMONSYTRATION OF FINAL DRIVE AND DIFFERNTIAL`,

        // For theory is is not a single quote it is called string literal in javascript
        // So by mistake you removed it just press the button above tab and to the left of number 1 button.

        theory: `Differential Unit - Construction and Working: <br>
        The purpose of the differential assembly is to allow the two drive wheels to turn at different speeds when the car
        goes around a corner. This is necessary because when cornering, the wheel on the inside of the turn goes through
        a smaller arc or corner than the wheels on the outside. If the wheels were not allowed to turn at different speeds,
        they would tend to skip around the corner and steering would be very difficult.<br><br>
        
        Differentials are used in:<br>
        i) The rear drive axle of front engine, rear wheel drives vehicles.<br>
        ii) The transaxles of front engine, front wheel drive and rear engine, rear wheel drive vehicles.<br>
        iii) The front drive axle and rear drive axle of four wheel drive vehicles.<br>
        iv) The transfer case of some four wheel drive vehicles.<br> <br>
        
        Construction of Differential Gear: Differential is an arrangement of gears which work together and allow the
        vehicle to take a turn smoothly. In the differential, bevel pinion gear is fixed to the propeller shaft which rotates
        the crown wheel. The crown wheel has another unit called the differential unit. It consists of two bevel gears (sun
        gear) and two bevel gears (planet gear). The bevel gears are in contact with the half shaft of the rear axle. When
        the crown wheel is rotating, it rotates the differential unit. The bevel (sun) gears of the differential rotate the two
        shafts.<br><br>
        
        Working of Differential Gear: When the car is on a straight road, the ring gear, differential case, differential
        pinion gears, and two differential side gears all turn as a unit. The two differential pinion gears do not rotate on
        the pinion shaft. This is because they exert equal force on the two differential side gears. As a result the side
        gears turn at the same speed as the ring gear, which causes both drive wheels to turn at the same speed also.
        However, when the car begins to round a curve, the differential pinion gears rotate on the pinion shaft. This
        permits the outer wheel to turn faster than the inner wheel <br><br>

    

        Final Drive:<br>
        The functions of the final drive are to provide a permanent speed reduction and also to turn the drive round
        through 90°. The reduction provided is about 4:1 in cars and 10:1 in heavier vehicles. This is done either in one or
        two stages. For lesser reduction, say up to about 7:1 single reduction is used, while higher reductions are achieved
        in two steps.<br>
        The final drive in practice consists of a bevel pinion and a crown wheel or alternatively, worm and wheel
        arrangement. The bevel pinion is mounted on a shaft which is connected to the propeller shaft generally through
        a universal joint. From the crown wheel the drive goes to the differential.<br><br>
        
        Three types of gears are used for the final drive gearing.<br>
        1. Straight Bevel Gears<br>
        2. Spiral Bevel Gears<br>
        3. Hypoid Gears <br><br>
        
        FINAL DRIVE GEARING <br>
        1. Straight Bevel Gears: These contain the straight teeth. They are the simplest and the cheapest of all types.
        However, with straight bevel gears, at one instant only one pair of teeth of pinion and the crown wheel will be in
        contact. As a result an uneven transmission of motion will take place as the load is transferred from one pair of
        teeth to the next. Thus these gears are noisy and suffer from high wear. <br><br>
        
        2. Spiral Bevel Gears: The spiral bevel gears have curved teeth which result in greater contact of the teeth. Because
        of this spiral bevel gears are silent in running and stronger than the straight bevel gears. <br><br> 
        
        3. Hypoid Gears: These types of gears are widely used for final drive these days. In this the pinion shaft is placed
        below the axis of the crown wheel. This permits a lower position of the propeller shaft, thus allowing low chassis
        height. The name 'hypoid' is derived from the 'hyperboloid of revolution'. The basic surface on which the teeth
        are cut in their case, is hyperboloid, which is a solid obtained by rotating a hyperbola about an offset axis.<br><br>

        `

    }
]

const procedure = [
    {
        //step1
        step: ``
    },
    {   
        //step2
        step: ``
    },
    {
        //step3
        step: ``
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
            Devloper : "Sakshi Suhas Patil(CSE)" ,     //Name of devloper and inside () give department name Use short form for department like CSE, BioTech, Mech
            BA : "Sandesh Anil Kamble(Electrical)",            //same as above
            Tester: ""
    
        }
    }
]

const expPageDetails = [
    {
        pageName: "Vlab.html",       // Your html file name with extension (simulator file)
        screenShot: "img2.jpg",     // Take screen shot of simulator (Take a good one) and give the name of image with extension
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