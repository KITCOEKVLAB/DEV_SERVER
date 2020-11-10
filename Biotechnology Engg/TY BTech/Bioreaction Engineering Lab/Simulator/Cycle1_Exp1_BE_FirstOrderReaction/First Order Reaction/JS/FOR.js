var lineno = 0, linestotal = 6

function startsimulation() {
    document.getElementById('Start').innerHTML = "Next"
    var button = document.querySelector('.btn-success')
    button.classList.add('btn-info')

    procedure()

}

lst = ['1. Add 5ml of ethyl acetate in one reagent bottle and 100ml 0.5N HCl in other. Keep these bottles at room temperature for 10 min.',
    '2. Fill the burette with 0.1N NaOH.', '3. Take some ice in conical flask (to stop the hydrolysis) and add 2 drops of phenolphthalein (indicator) in it.',
    '4. Now mix the both reagent bottles to each other and quickly pipette out 5ml of product sample which is said to be the sample at time 0 and titrate it with 0.1N NaOH by adding it in conical flasks containing ice + phenolphthalein. Note down the burette reading asB.R. (0)',
    '5. Similarly titrate samples at 10, 20, 30, 40, 50, infinity minutes and note down the burette readings as B.R.(t)',
    '6. Calculate CA and K for each reading respectively']

function procedure() {
    lineno = lineno + 1
    str = 'line' + lineno
    if (str == 'line1') {
        document.getElementById('procedure-image').src = '../CSS/Procedure/1.1. BOTTLE 1.jpg'
        const text2 = document.querySelector('#procedure')
        text2.innerHTML = '<em>' + lst[0] + '</em>'
    }
    if (str == 'line2') {
        document.getElementById('procedure-image').src = '../CSS/Procedure/2.2. burette.jpg'
        const text2 = document.querySelector('#procedure')
        text2.innerHTML = '<em>' + lst[1] + '</em>'
    }
    if (str == 'line3') {
        document.getElementById('procedure-image').src = '../CSS/Procedure/3.2. Conical Flask.jpg'
        const text2 = document.querySelector('#procedure')
        text2.innerHTML = '<em>' + lst[2] + '</em>'
    }
    if (str == 'line4') {
        document.getElementById('procedure-image').src = '../CSS/Procedure/3.3. Conical Flask.jpg'
        const text2 = document.querySelector('#procedure')
        text2.innerHTML = '<em>' + lst[3] + '</em>'
    }
    if (str == 'line5') {
        document.getElementById('procedure-image').src = '../CSS/Procedure/4.3 titrate.jpg'
        const text2 = document.querySelector('#procedure')
        text2.innerHTML = '<em>' + lst[4] + '</em>'
    }
    if (str == 'line6') {
        document.getElementById('procedure-image').src = '../CSS/Procedure/4.7.1 titrate.jpg'
        const text2 = document.querySelector('#procedure')
        text2.innerHTML = '<em>' + lst[5] + '</em>'
        document.getElementById('Start').innerHTML = "Re run"
        var button = document.querySelector('.btn-success')
        button.classList.add('btn-danger')
        document.getElementById('complete').innerHTML = 'Simulation Complete <i class="fa fa-thumbs-up"></i>'
        document.body.classList.add('background')
    }
    if (str == 'line7') {
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