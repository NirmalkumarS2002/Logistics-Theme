
        //header nav bar bg
        const header = document.querySelector(".header");

        window.addEventListener("scroll", () => {
            if (scrollY > 50) {
                header.classList.add("active");
            } else {
                header.classList.remove("active");
            }
        });

        //header toggle

        const menuBtn = document.querySelector(".menu-btn");
        const navContainer = document.querySelector(".nav-container");
        const closeBtn = document.querySelector(".close-btn");

        menuBtn.addEventListener("click", () => {
            navContainer.classList.toggle("show");
        });

        closeBtn.addEventListener("click", () => {
            navContainer.classList.remove("show");
        });

        // //header grid toggle

        const girdcontainer = document.querySelector(".header-grid-container")
        const girdclosebtn = document.querySelector(".grid-close-btn")
        const gridmenu = document.querySelector(".gridmenu")

        gridmenu.addEventListener("click", () => {
            girdcontainer.classList.toggle("vis");
        });

        girdclosebtn.addEventListener("click", () => {
            girdcontainer.classList.remove("vis");
        });


        //errorpage

        let errorpage = document.querySelectorAll(".errorpage")
        errorpage.forEach((error) => {
            error.addEventListener("click", () => {
                window.location.href = "404.html";
            })
        })

        //footer subscribe

        const footersubscribe=document.querySelector("#footer-subscribe")
         const subscribe=document.querySelector(".subscribe")

        subscribe.addEventListener("click",()=>{

            let emailpattern =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if(footersubscribe.value.trim()==""){
                alert("please enter Your email")
                footersubscribe.focus();
                return;
            }

            if(!emailpattern.test(footersubscribe.value.trim())){
                alert("Enter Your email correctly")
                footersubscribe.focus();
                return;
            }

            alert("subscribe successfully!")
            footersubscribe.value=""
        })

        //logo

        const herologo=document.querySelectorAll(".company-logo")
        herologo.forEach((clogo)=>{
            clogo.addEventListener("click",()=>{
                    window.location.href="index.html"
            })
        })

        //reveal js

// const observer=new IntersectionObserver((entries)=>{
//     entries.forEach((entry)=>{
//         if(entry.isIntersecting){
//             entry.target.classList.add("visible")
//         }
//     })
// },{

//     root:null,
//     rootMargin:"0px",
//     threshold:0.2
// })

// const revels=document.querySelectorAll(".reveal, .reveal-right, .reveal-left").forEach((el)=>{
//     observer.observe(el)
// })
