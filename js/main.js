// about section tabs
(() =>{
    const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");
    
    tabsContainer.addEventListener("click", (event) =>{
        if(event.target.classList.contains("tab-item") && 
        !event.target.classList.contains("active")){
            const target = event.target.getAttribute("data-target");
            console.log(target);
            // deactivate existing active 'tab-item'
            tabsContainer.querySelector(".active").classList.remove("outer-shadow","active");
            // active new tab 'tab-items'
            event.target.classList.add("active","outer-shadow");
            // deactiveate existing active 'tab-content'
            aboutSection.querySelector(".tab-content.active").classList.remove("active");
            // activate new ' tabcontent'
            aboutSection.querySelector(target).classList.add("active");
        }
    })
})();