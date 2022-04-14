document.addEventListener("DOMContentLoaded", function() {
    const linksParent = document.querySelector(".decision-filter");
    
    if (linksParent) {
        const links = linksParent.querySelectorAll(".decision-filter__link");
        
        links.forEach(link => {
            link.addEventListener("click", function(e) {
                const el = e.target;
                e.preventDefault();
                
                
                if (!el.classList.contains("decision-filter__link--active")) {
                    links.forEach(link => {
                        if (link.classList.contains("decision-filter__link--active")) {
                            link.classList.remove("decision-filter__link--active");
                        }
                    });
                    el.classList.add("decision-filter__link--active");
                    
                }
            });
        })
        
    }
});