function get1(a,b,c){

    let x = document.getElementById("result");
 
    function add(a,b){ 
        return x.innerHTML=(parseFloat(a)+parseFloat(b))  
    }
    
    function sub(a,b){
        return x.innerHTML=(a-b)
    }
    
    function multi(a,b){
        return x.innerHTML=(a*b)
    }
    
    function div(a,b){
        return x.innerHTML=(a/b)
    }
    
    function percent(a,b){
        return x.innerHTML=(a*b/100)
    }
    
    function modulus(a,b){
        return x.innerHTML=(a%b)
    }

    switch (c){
        case '+':add(a,b)
            break;
        case '-':sub(a,b)
            break;
        case '*':multi(a,b)
            break;
        case '/':
            if (b==0){
                alert("Division By 0 NOT ALLOWED")
                return x.innerHTML=('Invalid !')
                break;
            }
            else{
                div(a,b)
                break;
            }
        case '%':percent(a,b)
            break;
        case 'mod':
            if (b==0){
                alert("Division By 0 NOT ALLOWED")
                return x.innerHTML=('Invalid !')
                break;
            }
            else{
                modulus(a,b)
                break;
            }    
        default: alert("Invalid Input");
    }   
}
