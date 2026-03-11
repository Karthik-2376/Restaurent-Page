            let main = document.querySelector(".main");
            let food = document.getElementById("food");
            let food1 = document.getElementById("food1");
            let food2 = document.getElementById("food2");
            let food3 = document.getElementById("food3");
            let food4 = document.getElementById("food4");
            let menu = document.getElementsByClassName("left4")[0];
            let items = document.querySelector(".items");
            let a2 = document.getElementsByClassName("a2")[0];
            let navbar = document.getElementsByClassName("navbar");
            let logo = document.getElementsByClassName("logo");
            let links = document.getElementsByClassName("links");
            let home = document.querySelector(".home");
            

            food1.addEventListener('click',()=>{food.style.backgroundImage="url('food1.png')";});
            food2.addEventListener('click',()=>{food.style.backgroundImage="url('food2.png')";});
            food3.addEventListener('click',()=>{food.style.backgroundImage="url('food3.png')";});
            food4.addEventListener('click',()=>{food.style.backgroundImage="url('food4.png')";});
            menu.addEventListener('click',()=>{
               if(items.style.display === "block"){
                 items.style.display = "none";
                  main.style.opacity = "1"; 
                  } 
                  else {
                    items.style.display = "block";
                      main.style.opacity = "0.4";
                 }});

                a2.addEventListener('click',()=>{
                  if(items.style.display === "block"){
                      items.style.display = "none";
                        main.style.opacity = "1"; 
                    }
                     else {
                       items.style.display = "block";
                        main.style.opacity = "0.4";
                 }});
                home.addEventListener('click',()=>{items.style.display = "none"; main.style.opacity = "1";});

                window.onload = function() {
                 window.scrollTo(0, 0);
                 if (window.location.hash) {
                 history.replaceState(null, null, window.location.pathname);
                  }
                 };