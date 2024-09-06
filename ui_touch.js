document.addEventListener("DOMContentLoaded",()=>{

    const layout = document.getElementById("layout")
    const section = document.querySelectorAll("section")

    let page = 0;
    const last = section.length - 1;
    



    window.addEventListener("wheel", e => {
        e.preventDefault();
        if(e.deltaY > 0){
            page++;

        }else if (e.deltaY < 0){
            page--;
        }

        if(page < 0) {
            page = 0;
        }else if(page > last){
            page = last;
        }

        console.log(e.deltaY)

        layout.style.top = page * (-100) + "vh"

    } , {passive:false})

    const ev = ["touchstart", "touchend"]
    let start;

    window.addEventListener("touchstart" , e =>{
        start = e.touches[0].clientY;
    })

    window.addEventListener("touchend", e => {
        const end = e.changedTouches[0].clientY;
        const delY = start - end;

        if(Math.abs(Math.trunc(delY)) > 50 ){
            if(delY > 0){
                page++;
    
            }else if (delY < 0){
                page--;
            }
        
            if(page < 0) {
                page = 0;
            }else if(page > last){
                page = last;
            }
        
        }
        console.log(page)
        console.log(delY)
        layout.style.top = page * (-100) + "dvh"
    },{passvie:false})


})//end of script