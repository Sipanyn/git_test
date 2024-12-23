let $=document
let o_p_icon=$.querySelector(".o_p_icon")
let title=$.querySelectorAll(".title")
let main_container=$.querySelector(".main_container")
let is_open=false
console.log(title)
/////////////////////////////
o_p_icon.addEventListener("click",()=>{
    if(is_open==false){
        o_p_icon.style.cssText=`
        background-color:rgba(250, 215, 160) ;
       transform: rotate(180deg);
       -webkit-transform: rotate(180deg);
       -moz-transform: rotate(180deg);
       -ms-transform: rotate(180deg);
       -o-transform: rotate(180deg);
       `
       title.forEach(function(item){
           item.style.cssText=`display: block;
           opacity: 1;
           visibility: visible;`
       })
       main_container.style.cssText=`
        max-width: 100%;
       `
       is_open=true
    }
    else{
        o_p_icon.style.cssText=`
            background-color:white ;
            transform: rotate(0deg);
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
           -ms-transform: rotate(0deg);
           -o-transform: rotate(0deg);
            `
            main_container.style.cssText=`
            max-width: 90px;
           `
            title.forEach(function(item){
                     item.style.cssText=`display: none;
                     opacity: 0;
                     visibility: hidden;`
                 })
     
            is_open=false
    }

})