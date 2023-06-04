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

    