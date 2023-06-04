function get1(ra){
    
    let r=parseFloat(ra)
    let x = document.getElementById("result1");
    let y = document.getElementById("result2");
    const pi=3.1415926535897932384626433832795;
    
    return x.innerHTML=(2*pi*r),y.innerHTML=(pi*r*r)

}