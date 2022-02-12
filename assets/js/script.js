(function(){
console.log("Script Loaded!!") ; 

var socialMediaIcons = document.getElementsByClassName("socialMediaIcons") ; 
console.log(socialMediaIcons) ; 

for(let i = 0 ; i < socialMediaIcons.length ; i += 1){
    socialMediaIcons[i].addEventListener("mouseover" , function(event){
        event.stopPropagation() ; 

        if(i == 0){
            socialMediaIcons[i].style.color = "#0a66c2" ; 
        }
        if(i == 1){
            socialMediaIcons[i].style.color = "#c32aa3" ; 
        }
        if(i == 2){
            socialMediaIcons[i].style.color = "#1b1f23" ; 
        }
        if(i == 3){
            socialMediaIcons[i].style.color = "#f7f400" ; 
        }
       
        return ; 
    }) ; 

    socialMediaIcons[i].addEventListener("mouseout" , function(event){
        event.stopImmediatePropagation() ; 
        socialMediaIcons[i].style.color = "#f1faee" ; 
        
    }) ; 
}
// var tick1 =  document.getElementsByClassName("far fa-square fa-2x") ; 
// var tick2 = document.getElementsByClassName("far fa-check-square fa-2x") ; 

// for(let i = 0 ; i < tick1.length ; i += 1){
//     tick1[i].addEventListener("click" , function(event){
//         tick1[i].setAttribute("class" , "far fa-check-square fa-2x") ;
//         tick2 = document.getElementsByClassName("far fa-check-square fa-2x") ; 
//         tick1.splice(i , 1) ; 
//     }) ; 
// }

// for(let i = 0 ; i < tick2.length ; i += 1){
//     tick2[i].addEventListener("click" , function(event){
//         tick2[i].setAttribute("class" , "far fa-square fa-2x") ; 
//         tick1 =  document.getElementsByClassName("far fa-square fa-2x") ; 
//         tick2.splice(i , 1) ; 
//     }) ;
// }
})() ; 