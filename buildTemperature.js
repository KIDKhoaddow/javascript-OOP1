class Temperature{
    constructor(parameter){
        this._parameter=parameter
    }

    showTemperature(){
        let temp= this._parameter+" độ C"
        return temp
    }

    convertToFahrenheit(){
        let result=9/5*parseFloat( this._parameter)+32
        return result.toFixed(2)+" độ F"
    }
    convertToKelvin(){
        let result=parseFloat( this._parameter)+273.15
        return result.toFixed(2)+" độ K"
    }

    getParameter(){
        return this._parameter
    }
    setParameter(parameter){
        this._parameter=parameter
    }
    
}
let temp=new Temperature()
function getParameter(){
    let parameter=document.getElementById("inputTemp").value;
    temp.setParameter(parameter)
    
}


function showTemp(){
    getParameter();
    document.getElementById("result").innerText=temp.showTemperature()
}

function convertToKelvin(){
    getParameter();
    document.getElementById("result").innerText=temp.convertToKelvin()
}
function convertToFahrenheit(){
    getParameter();
    document.getElementById("result").innerText=temp.convertToFahrenheit()
}