function bubbles() {
    "use strict";
    
    document.getElementById("graph").className = "none";
    document.getElementById("surv").className = "no_op";
    
    
    
    if (document.getElementById('drop1').value === 'musica') {
    
        document.getElementById("op1").className = "bb1";
        document.getElementById("op2").className = "no_op";
        document.getElementById("op3").className = "no_op";
    }
    
    if (document.getElementById('drop1').value === 'lit') {
        
        document.getElementById("op2").className = "bb2";
        document.getElementById("op1").className = "no_op";
        document.getElementById("op3").className = "no_op";
    }
    
    if (document.getElementById('drop1').value === 'cine') {
        
        document.getElementById("op3").className = "bb3";
        document.getElementById("op1").className = "no_op";
        document.getElementById("op2").className = "no_op";
    }
    
    if (document.getElementById('drop1').value === 'none') {
    
        document.getElementById("op1").className = "no_op";
        document.getElementById("op2").className = "no_op";
        document.getElementById("op3").className = "no_op";
    }
    //dd2
    if (document.getElementById('drop2').value === 'musica') {
    
        document.getElementById("op1").className = "bb1";
        document.getElementById("op2").className = "no_op";
        document.getElementById("op3").className = "no_op";
    
    }
    
    if (document.getElementById('drop2').value === 'lit') {
        
        document.getElementById("op2").className = "bb2";
        document.getElementById("op1").className = "no_op";
        document.getElementById("op3").className = "no_op";
    }
    
    if (document.getElementById('drop2').value === 'cine') {
        
        document.getElementById("op3").className = "bb3";
        document.getElementById("op1").className = "no_op";
        document.getElementById("op2").className = "no_op";
    }
    
    if (document.getElementById('drop2').value === 'none') {
    
        document.getElementById("op1").className = "no_op";
        document.getElementById("op2").className = "no_op";
        document.getElementById("op3").className = "no_op";
    }
    //
}

