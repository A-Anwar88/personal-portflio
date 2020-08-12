
//preloader
window.addEventListener("load" , function(){
    document.querySelector(".preloader").classList.add("opcity-0");
    setTimeout(function(){
        document.querySelector(".preloader").style.display="none";
    },2000)
})



//portfolio item filter

    const filterContainer = document.querySelector(".portfolio-filter"), filterBtns = filterContainer.children, totalFilterBtn = filterBtns.length, portfolioItems = document.querySelectorAll(".portfolio-item"), totalportfolioItem = portfolioItems.length;
    for (let i = 0; i < totalFilterBtn; i++) {
        filterBtns[i].addEventListener("click", function () {
            filterContainer.querySelector(".active").classList.remove("active");
            this.classList.add("active");
            const filterValue = this.getAttribute("data-filter");
            for (let k = 0; k < totalportfolioItem; k++) {
                if (filterValue === portfolioItems[k].getAttribute("data-category")) {
                    portfolioItems[k].classList.remove("hide");
                    portfolioItems[k].classList.add("show");
                }
                else {
                    portfolioItems[k].classList.remove("show");
                    portfolioItems[k].classList.add("hide");
                }
                if (filterValue === "all") {
                    portfolioItems[k].classList.remove("hide");
                    portfolioItems[k].classList.add("show");
                }
            }
        });
    }

//portfolio lightbox
/*
    const lightbox=document.querySelector(".lightbox"),
          lightboxImg=lightbox.querySelector(".lightbox-img"),
          lightboxColse=lightbox.querySelector(".lightbox-close"),
          lightboxText=lightbox.querySelector(".caption-text"),
          lightboxCounter=lightbox.querySelector(".caption-counter");
    let itemIndex=0;

    for(let i=0; i<totalportfolioItem; i++) {
        portfolioItems[i].addEventListener("click" , function(){
            itemIndex=i;
            changeItem();
            toggleLightbox();
        })
    }
    function nextItem(){
        if(itemIndex === totalportfolioItem-1){
            itemIndex=0;
        }else{
            itemIndex++
        }
        changeItem();
    }
    function prevItem(){
        if(itemIndex === 0){
            itemIndex =totalportfolioItem-1;
        }else{
            itemIndex--
        }
        changeItem();
    }

    function toggleLightbox(){
        lightbox.classList.toggle("open");
    }

    function changeItem(){
        imgsrc=portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
        lightboxImg.src=imgsrc;
        lightboxText.innerHTML=portfolioItems[itemIndex].querySelector("h4").innerHTML;
        lightboxCounter.innerHTML=(itemIndex+1) + "of" +totalportfolioItem;
    }

//close lightbox
lightbox.addEventListener("click",function(event){
    if(event.target === lightboxColse || event.target ===lightbox){
        toggleLightbox();
    }
})
*/

//nav asaid

const nav=document.querySelector(".nav"),
      navList=nav.querySelectorAll("li"),
      totalNavList=navList.length,
      allSection=document.querySelectorAll(".section"),
      totalSection=allSection.length;

for(let i=0; i<totalNavList; i++){
    const a=navList[i].querySelector("a");
     a.addEventListener("click", function(){
     
       for(let i=0; i<totalSection; i++){
          allSection[i].classList.remove("back-section");
         }

        for(let n=0; n<totalNavList; n++){
           if (navList[n].querySelector("a").classList.contains("active")){
               
           allSection[n].classList.add("back-section");
           }

           navList[n].querySelector("a").classList.remove("active");
        }

        this.classList.add("active");
        showSection(this);

        // for close aside nav
        if(window.innerWidth < 1200){
            asideSectionTogglerBtn();
        }
    })
}

function showSection(element){
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove("active");
    }
    const target=element.getAttribute("href").split("#")[1];
   document.querySelector("#"+target).classList.add("active")
}
//hire-me btn
  function updateNev(element){
      for(let i=0; i<totalNavList; i++){
          navList[i].querySelector("a").classList.remove("active");
          const target=element.getAttribute("href").split("#")[1];
          if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
            navList[i].querySelector("a").classList.add("active");
          }
      }
  }

  document.querySelector(".hire-me").addEventListener("click" , function(){
      showSection(this);
      updateNev(this)
  })


//togglerbtn
    const navTogglerBtn=document.querySelector(".nav-toggler"),
          aside=document.querySelector(".aside");

    navTogglerBtn.addEventListener("click" , () =>{
        asideSectionTogglerBtn();
    })

    function asideSectionTogglerBtn(){
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for(let i=0; i<totalSection; i++){
            allSection[i].classList.toggle("open");
        }
    }
