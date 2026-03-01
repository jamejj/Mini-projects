function calculate(event){

    const maxWeight = parseFloat(document.getElementById('weight').value);
    const maxReps = parseFloat(document.getElementById('reps').value);
    const result = document.getElementById('result');


    if(isNaN(maxWeight) || isNaN(maxReps)){
        alert('Please enter valid numbers');
        return;
    }

    let oneRepMax;
    if(maxReps === 1){
        oneRepMax = maxWeight
    }else{
        oneRepMax = maxWeight*(1+(0.0333*maxReps));
    }

    result.textContent ='Your 1RM is ~ ' + oneRepMax.toFixed(2) + ' kg';
}