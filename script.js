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
})() ; 