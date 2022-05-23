class Mobile {
    constructor(battery, status, inbox, outbox, message) {
        this._battery = parseInt(battery);
        this._status = Boolean(status);
        this._inbox = Array(inbox);
        this._outbox = Array(outbox);
        this._message = String(message);
    }
    getBattery() {
        return this._battery
    }
    getStatus() {
        return this._status
    }
    getInbox() {
        if (this._status && this._battery > 5) {
            return this._inbox
        } else return null

    }
    getOutbox() {
        if (this._status && this._battery > 5) {
            return this._outbox
        } else return null

    }
    getMessage() {
        if (this._status && this._battery > 5) {
            return this._message
        } else return null

    }


    setBattery(battery) {
        this._battery = battery
    }
    setStatus(status) {
        this._status = status
    }
    setInbox(inbox) {
        this._inbox = inbox
    }
    setOutbox(outbox) {
        this._outbox = outbox
    }
    setMessage(message) {
        this._message = message
    }

    checkStatus() {
        if (this._battery > 0 && this._status == true) {
            return true
        }
        else return false
    }

    turnOn() {
        if (this._battery > 0) {
            return false
        }
        else {
            this._status = true
            return true
        }
    }
    turnOff() {
        if (this._status) {
            this._status = false
            return true
        }
        else if (this._battery > 5) {
            this._status = true
            return true
        }
        else return false
    }

    chargeBattery() {
        return this._battery += 1
    }

    useBattery() {
        return this._battery -= 1
    }

    receiveMessage(message) {
        return this._inbox.unshift(message)
    }

    sendMessage(message) {
        return this._outbox.unshift(message)
    }

}

let nokia = new Mobile(50, false, [], [])
let iphone = new Mobile(50, false, [], [])
let fone
let page = 0
let isInbox = false
let isOutbox = false
let isMessage = false
function power() {
    fone = document.getElementById("selectionFone").value;
    if (fone == "nokia") {
        if (nokia.checkStatus()) {
            return nokia.turnOn()
        } else
            return nokia.turnOff()
    } else if (fone = "iphone") {
        if (iphone.checkStatus()) {
            return iphone.turnOn()
        } else
            return iphone.turnOff()
    }
}

function showScreenBox() {
    let screen = "<table style=background-color:white;height:200px;width:300px;>" +
        "<tr><td><button onClick=prev()>Prev</button></td>" +
        "<th id=nameBox style=height:20px;width:200px></th>" +
        "<td><button onClick=back()>Back</button></td></tr>" +
        "<tr><td colspan=3 > <output type=text style=height:180px; width:300px; ></output></td></tr></table>"

    document.getElementById("screen").innerHTML = screen;
}

function openInbox() {
    isOutbox = false
    isMessage = false
    isInbox = true
    showScreenBox();
    page = 1
    document.getElementById("nameBox").innerText = "Inbox" + page
}

function openOutbox(){
    
    isInbox = false
    isMessage = false
    isOutbox = true
    showScreenBox()
    page = 1
    document.getElementById("nameBox").innerText = "Outbox" + page
}



function showNameBox(name, number) {
    return document.getElementById("nameBox") = name + number
}



function back() {
    page++
    if (isInbox)
        showNameBox()
}


function showScreenMessage() {
    let screen = " <table style=background-color:white;height:200px;width:300px; >" + "<tr><td><input type=text style=height:160px;width:300px; ></input></td></tr>" + "<tr><td style=text-align:center><button onClick=sendMessage()>Send</button></td></tr></table>"

    document.getElementById("screen").innerHTML = screen;
}


function openMessage() {
    isInbox = false
    isOutbox = false
    isMessage = true
    showScreenMessage()
}




