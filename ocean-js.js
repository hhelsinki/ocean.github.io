    var menu = document.getElementsByClassName("navS");
    var i;

    for (i=0; i < menu.length; i++) {
        menu[i].addEventListener("click", function() {
            //this.classList.toggle("activeS");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
