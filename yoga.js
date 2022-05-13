 let closebtn=document.querySelector(".icofont-close");
            let showbtn=document.querySelector(".icofont-navigation-menu");
            let nav=document.querySelector(".nav");
            function show(){
                nav.style.height="600px";
                showbtn.style.display="none";
                closebtn.style.display="block";
            }
            function hide(){
                nav.style.height="60px";
                showbtn.style.display="block";
                closebtn.style.display="none";  
            }
            // aboutus learn more
            function learnmore(){
                document.querySelector(".readmore").style.display="block";
            }
//-------------------------------------------------------------------
           var yoga=document.querySelectorAll("#yoga");
          var list=document.querySelectorAll("#list");
            for(var i=0;i<list.length;i++){
            list[i].addEventListener("click",function(){
               for(var j=0;j<yoga.length;j++){
               yoga[j].classList.add("hide"); 
               yoga[j].classList.remove("show");
             }   
                 let datafilter=event.target.getAttribute("data-filter");
             for(var a=0;a<yoga.length;a++){
                 if(datafilter==yoga[a].getAttribute("data-name")||datafilter=="All"){ 
                         yoga[a].classList.add("show");
                          yoga[a].classList.remove("hide");
}
}
});
}