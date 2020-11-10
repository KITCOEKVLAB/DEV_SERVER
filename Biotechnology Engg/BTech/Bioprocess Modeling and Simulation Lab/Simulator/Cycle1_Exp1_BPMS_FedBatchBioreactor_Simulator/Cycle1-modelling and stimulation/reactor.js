var lineno = 0, linestotal = 7

function startsimulation() {
    document.getElementById('Start').innerHTML = "Next"
    var button = document.querySelector('.btn-success')
    button.classList.add('btn-info')

    procedure()

}

lst = ['1.	Dissolve 2g of Antrone reagent in 1000 ml of concentrated sulphuric acid.',
'2.	D. Media composition For culture medium – Nutrient agar, 28 g/lMedia: Mineral medium used previously for batch cultivation of the bacteria Innoculum: 10% of fresh b.licheniforms culture grown on mineral medium. For Growth media in flask ']
lst1 = ['1.	Batch cultures are started in the reactor by inoculating the bacteria (Bacillus licheniformis NRRL B-642) and the OD was measured at regular time intervals and supernatant stored for glucose estimation.','2.	The samples are drawn at 1-2 hours time interval.',
'3.	A feeding rate F according to equation (9) is obtained by substituting values of X0, V0 and S0, S in the fermenter of 1.5 g/L and µ is determined previously from batch kinetics.',
'4.	Samples are withdrawn every one hour and analyzed for glucose and biomass concentration.', 
'5.	Feeding will be started at the end of exponential growth phase in the reactor.',
'6.	Calculate feed rate F.',
'7.	 Monitor maintenance of exponential growth phase and time profile of biomass and glucose concentration in the reactor under batch and fed batch mode.'] 
function procedure() {
    lineno = lineno + 1
    str = 'line' + lineno
    if (str == 'line1') {
        document.getElementById('procedure-image').src = 'images/image1.png'
        const text2 = document.querySelector('#procedure')
        text2.innerHTML = '<em>' + lst[0] + '</em>'
    }
    if (str == 'line2') {
        document.getElementById('procedure-image').src = 'images/image2.jpg'
        const text2 = document.querySelector('#procedure')
        text2.innerHTML = '<em>' + lst[1] + '</em>'
        
    }
    if (str == 'line3') {
        document.getElementById('procedure-image').src = 'images/image3.png'
        const text2 = document.querySelector('#procedure1')
        text2.innerHTML = '<em>' + lst1[0] + '</em>'
                document.getElementById('Start').innerHTML = "Part B"

    }
    if (str == 'line4') {
        document.getElementById('procedure-image').src = 'images/image4.png'
        const text2 = document.querySelector('#procedure1')
        text2.innerHTML = '<em>' + lst1[1] + '</em>'
    }
    if (str == 'line5') {
        document.getElementById('procedure-image').src = 'images/image5.jpg'
        const text2 = document.querySelector('#procedure1')
        text2.innerHTML = '<em>' + lst1[2] + '</em>'
    }
    if (str == 'line6') {
        document.getElementById('procedure-image').src = 'images/image6.png'
        const text2 = document.querySelector('#procedure1')
        text2.innerHTML = '<em>' + lst1[3] + '</em>'
    }
    if (str == 'line7') {
        document.getElementById('procedure-image').src = 'images/image7.svg'
        const text2 = document.querySelector('#procedure1')
        text2.innerHTML = '<em>' + lst1[4] + '</em>'
    }
    if (str == 'line8') {
        document.getElementById('procedure-image').src = 'images/image8.webp'
        const text2 = document.querySelector('#procedure1')
        text2.innerHTML = '<em>' + lst1[5] + '</em>'
    }
    if (str == 'line9') {
        document.getElementById('procedure-image').src = 'images/image9.jpg'
        const text2 = document.querySelector('#procedure1')
        text2.innerHTML = '<em>' + lst1[6] + '</em>'
                document.getElementById('Start').innerHTML = "Run-Again"

        var button = document.querySelector('.btn-success')
        button.classList.add('btn-danger')
        document.getElementById('complete').innerHTML = 'Simulation Completed <i class="fa fa-thumbs-up"></i>'
        document.body.classList.add('background')
        
    }
    if (str == 'line10') {
        lineno = 0
        window.location.reload()
    }

}

function reset() {
    document.getElementById('Start').innerHTML = "Start"
    var button = document.querySelector('.btn-success')
    button.classList.remove('btn-info')
    window.location.reload()
}