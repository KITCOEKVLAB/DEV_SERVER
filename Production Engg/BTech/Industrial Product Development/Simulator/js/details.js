

/* Don't Change the order of elements inside details section */
/* Use " <br> " if u want a line break at actual simulator use " <br><br> " to get a blank line */ 
const details = [
    {
        title: `3 D Printing using FDM`,


        aim : `To print The Prototype Part using FDM based Printer`,

        // For theory is is not a single quote it is called string literal in javascript
        // So by mistake you removed it just press the button above tab and to the left of number 1 button.

        theory: `
        1.	In FDM CAD files must be translated into a file type, that 3D printing machines can understand.
        <br><br>2.	Standard Tessellation Language (STL) is one such file type and is the language most commonly used for stereolithography, 
        <br><br>3.	The file is digitally sliced into a series of parallel horizontal cross--‐sections which are then provided to a FDM one at a time.
        <br><br>4.	Since additive manufacturing works by adding one layer of material on top of another, CAD models must be broken up into layers before being printed in three dimensions. 
        <br><br>5.	FDM is the second most widely used rapid prototyping technology, after stereolithography. 
        <br><br>6.  In Fused Deposition Modelling (FDM) process a temperature-controlled head extrudes thermoplastic material layer by layer.
        <br><br>7.	The FDM process starts with importing an STL file of a model into a pre-processing software. This model is mathematically sliced into horizontal layers varying from +/- 0.127 - 0.254 mm thickness. After generating the toolpaths, the data is downloaded to the FDM machine. 
        <hr>
        <h3>DISCRIPTION OF APPARATUS </h3>
        <br><br>1.  As the nozzle is moved over the table in the required geometry, it deposits a thin bead of extruded plastic to form each layer. 
        <br><br>2.  The plastic hardens immediately after being discharged from the nozzle and bonds to the layer below. 
        <br><br>3.  The object is built on a mechanical stage which moves vertically downward layer by layer as the part is formed. 
        <br><br>4.  The entire system is contained within a chamber which is held at a temperature just below the melting point of the plastic.
        <hr>
        <h3>Advantages:</h3>
        <br><br>1.  FDM Models are Strong and Durable.
        <br><br>2.  Models are Stable and never warp / shrink
        <br><br>3.  Models can go through milling, tapping and boring operations
        <br><br>4.  Models can be sanded, painted and finished as required
        <br><br>5.  Models can be sanded, painted and finished as required
        <br><br>6.  Models are non toxic and safe to handle 
        <br><br>7.  ABS material can be used
        <br><br>8.  Multiple material colors can be obtained
        <hr>
        <h3>Limitations:</h3>
        <br><br>1.  Process is comparatively slower for larger parts.
        <br><br>2  Support structures are required (sometimes may require more support material than the part itself).
        <br><br>3.  The finished parts are anisotropic, that is they exhibit different mechanical characteristics in different directio1.  
        <hr>
        <h3>Applications:</h3>
        <br><br>1.  The resolution is not as fine as with stereolithography
        <br><br>2.  Prototypes for functional testing; you can install and run the parts in your production intent material for the best possible proof that your design really works
        <br><br>3.  Prototypes for form and fit testing
        <br><br>4.  Prototypes directly constructed in production materials
        <br><br>5.  Quality parts with a high structural stability
        <br><br>6.  Durable single piece parts up to 900 x 600 x 900 1.  
        `
    }
]

const procedure = [
    {
        //step1
        step: `The heated nozzle and bed is heated to prerequired temperature. Th filament is passed through the nozzle hole and the program is executed.`
    },
    /*{   
        //step2
        step: ``
    },
    {
        //step3
        step: ``
    },*/
    
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
            Developer : "Akshay Nimbekar (CSE)" ,     //Name of devloper and inside () give department name Use short form for department like CSE, BioTech, Mech
            BA : "Sushant More (Prod)",            //same as above
            Tester: "Aishwarya Bhasme (Prod)"
    
        }
    }
]

const expPageDetails = [
    {
        pageName: "simulation.html",       // Your html file name with extension (simulator file)
        screenShot: "screenshot.jpg",     // Take screen shot of simulator (Take a good one) and give the name of image with extension
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