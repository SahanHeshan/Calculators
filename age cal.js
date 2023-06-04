function get1(a,b){
    let x = document.getElementById("result");
    let from=0,to=0,age,y,m,d,i=0

        from= a[8]+a[9]
        to=b[8]+b[9]
        d=parseInt(to)-parseInt(from)

        if(d<0){
            d=30+parseInt(to)-parseInt(from)
            i=-1
        }

        from= a[5]+a[6]
        to=b[5]+b[6]
        m=i+parseInt(to)-parseInt(from)

        if(m<0){
            m=12+i+parseInt(to)-parseInt(from)
            i=-1
        }
        else
            i=0

        from= a[0]+a[1]+a[2]+a[3]
        to=b[0]+b[1]+b[2]+b[3]
        y=i+parseInt(to)-parseInt(from)

        
    if(y<0){
        alert("Starting date is more than ending date")
        return x.innerHTML=("Invalid inputs")
    }
    else{
        return x.innerHTML=(y+" Years  "+m+" months  "+d+" days") 
    }
}

       /* switch(i){
            case 0:
                from=from+(parseInt(a[i])*1000*365)
                to=to+(parseInt(b[i])*1000*365)
                break;
            case 1:
                from=from+(parseInt(a[i])*100*365)
                to=to+(parseInt(b[i])*100*365)
                break;        
            case 2:
                from=from+(parseInt(a[i])*10*365)
                to=to+(parseInt(b[i])*10*365)
                break; 
            case 3:
                from=from+(parseInt(a[i])*1*365)
                to=to+(parseInt(b[i])*1*365)
                break; 
            case 5:
                from=from+(parseInt(a[i])*10*30)
                to=to+(parseInt(b[i])*10*30)
                break;
            case 6:
                from=from+(parseInt(a[i])*1*30)
                to=to+(parseInt(b[i])*1*30)
                break;
            case 8:
                from=from+(parseInt(a[i])*10)
                to=to+(parseInt(b[i])*10)
                break;
            case 9:
                from=from+(parseInt(a[i]))
                to=to+(parseInt(b[i]))
                break;
            case 4:
            case 7:    
                break;
            default: alert("Unexpected")                     
        }
    }*/