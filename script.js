var links=document.querySelectorAll('.linka');

var ulmenu=document.getElementById("menuul");



// menu

var menu=document.getElementById("menu");
var menuhide=document.getElementById("menuhide");









links.forEach(link=>{
    link.addEventListener('click', function(){
        var numberLinks=links.length;
        for(var i=0;i<numberLinks;i++){
            links[i].classList.remove('active');
        }
        link.classList.add('active');
    })
});

var section=document.querySelectorAll('section');
var navtop=document.getElementById('navbartop');

menu.addEventListener('click', function(){
    menu.style.display="none";
    menuhide.style.display="block";
    ulmenu.style.display="flex";
});
menuhide.addEventListener('click', function(){
    menu.style.display="block";
    menuhide.style.display="none";
    ulmenu.style.display="none";
});


window.addEventListener("scroll", function(){
    

    
   if(navtop.offsetWidth<=526&&scrollY>10){
       if(ulmenu.style.display){
            ulmenu.style.display="none";
            menu.style.display="block";
            menuhide.style.display="none";
       }
   }
    if(scrollY>80){
        navtop.style.background="#fdfdfd";
        
    }else{
        
        navtop.style.background="transparent";
       
    }
    section.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-200;
        let heightofSec=sec.offsetHeight;
        let id=sec.getAttribute("id");
        let widthSection=sec.offsetWidth;
        if(top>=offset&&top<offset+heightofSec){
            links.forEach(link=>{
                link.classList.remove('active');
                document.querySelector(".navbartop .right ul li a[href*="+id+"").classList.add('active');
                document.querySelector(".navbartop .right ul li a[href*="+id+"").classList.add('scrolllink');
            })
        }else{
            document.querySelector(".navbartop .right ul li a[href*="+id+"").classList.remove('scrolllink');

        }

        if(window.scrollY<61){
            document.querySelector(".navbartop .right ul li a[href*="+id+"").classList.remove('scrolllink');
        };
    })
   
})


/*dark mode*/
var dark=document.getElementById('darkmode');
var light=document.getElementById('lightmode');
var body=document.getElementById('body');
dark.addEventListener('click', function(){
    body.classList.toggle('darkbody');
    dark.classList.toggle('hide');
    light.classList.remove('hide');
});

light.addEventListener('click', function(){
    body.classList.remove('darkbody');
    dark.classList.remove('hide');
    light.classList.toggle('hide');
})




/*project filter*/

var alllanguages=document.querySelectorAll('.project .filter .languages');
var allcard=document.querySelectorAll(".project .content .card");
alllanguages.forEach(language=>{
    language.addEventListener('click', function(){
        for(var k=0;k<alllanguages.length;k++){
            alllanguages[k].classList.remove('active');
            language.classList.add('active');
          
        }
        
        var id=language.getAttribute('id');

        var elementShown=document.querySelectorAll('.project .content .'+id);
        allcard.forEach(card=>{
            card.classList.add('hidecontent');
        })

        if(id=="all"){
            allcard.forEach(card=>{
                card.classList.remove('hidecontent');
            })
        }else{
            elementShown.forEach(showhere=>{
                showhere.classList.remove('hidecontent');
            })
        }
   
    })
})




window.addEventListener('resize',function(){
    if(navtop.offsetWidth<=526){
        menu.style.display="block";
        ulmenu.style.display="none";
        menu.addEventListener('click', function(){
            menu.style.display="none";
            menuhide.style.display="block";
            ulmenu.style.display="flex";
        });
        menuhide.addEventListener('click', function(){
            menu.style.display="block";
            menuhide.style.display="none";
            ulmenu.style.display="none";
        });
    }else{
        menu.style.display="none";
        menuhide.style.display="none";
        ulmenu.style.display="flex";
    }
})