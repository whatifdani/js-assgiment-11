

function headandtails(){
    var du=prompt("pick a side head or tails ")
    var du1=prompt("enter your name ")
    var du2=prompt("enter other one's name ")
    if(du.toLowerCase ==="heads"||"HEADS"||"Heads"){
        var biglol=Math.floor(Math.random()*2)
    
    
    if(biglol==1){
        alert("its heads yayayayya")
    }else{
        alert("its tails yayayayya")
    }
    }else if(biglol==0){
            alert("its tails yayayayya")
}else{
    alert("input invalid")
}   
    }        

function dice(){
    let d=Math.floor((Math.random()*6)+1)
    if(d===1){
        alert("DICE ROLLED 1")
    }else if(d===2){
        alert("DICE ROLLED 2")
    }
    else if(d===3){
        alert("DICE ROLLED  3")
    }
    else if(d===4){
        alert("DICE ROLLED  4")
    }
    else if(d===5){
        alert("DICE ROLLED  5")
    }
    else if(d===6){
        alert("DICE ROLLED 6 ")
    }
}
function Pass() {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
        'abcdefghijklmnopqrstuvwxyz0123456789@#$';

    for (let i = 1; i <= 10; i++) {
        let char = Math.floor(Math.random()
            * str.length + 1);

        pass += str.charAt(char)
    }

    alert("our suggested password for you is " + pass)
}

