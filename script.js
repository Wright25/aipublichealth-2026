/*======================================================
    WACP 2026 AI KEYNOTE WEBSITE
    script.js
======================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==========================================
        SMOOTH SCROLL
    ==========================================*/

    document.querySelectorAll('nav a[href^="#"]').forEach(link => {

        link.addEventListener("click", function(e){

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior: "smooth",
                    block: "start"

                });

            }

        });

    });

    /*==========================================
        ACTIVE NAVIGATION
    ==========================================*/

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;

            if(window.scrollY >= sectionTop){

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if(link.getAttribute("href") === "#" + current){

                link.classList.add("active");

            }

        });

    });

    /*==========================================
        HEADER SHADOW
    ==========================================*/

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if(window.scrollY > 60){

            header.style.boxShadow =
                "0 12px 35px rgba(0,0,0,.12)";

        }else{

            header.style.boxShadow =
                "0 4px 18px rgba(0,0,0,.05)";

        }

    });

    /*==========================================
        FADE-IN ANIMATION
    ==========================================*/

    const animatedItems = document.querySelectorAll(

        ".tool-card,\
         .objective-card,\
         .info-card,\
         .threat-card,\
         .timeline-item,\
         .eco-card,\
         .demo-card,\
         .resource-card,\
         .contact-card,\
         .evaluation-card,\
         .speaker-highlights div"

    );

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:0.15

    });

    animatedItems.forEach(item=>{

        item.classList.add("fade-in");

        observer.observe(item);

    });

    /*==========================================
        COUNTER ANIMATION
    ==========================================*/

    const counters = document.querySelectorAll(".speaker-highlights h4");

    const animateCounter = (counter) => {

        const target = parseInt(counter.textContent);

        if(isNaN(target)) return;

        let count = 0;

        const speed = Math.max(20, Math.floor(2000 / target));

        const update = () => {

            count++;

            counter.textContent = count;

            if(count < target){

                setTimeout(update, speed);

            }else{

                if(target >= 1000){

                    counter.textContent = target + "+";

                }else if(target >= 20){

                    counter.textContent = target + "+";

                }else{

                    counter.textContent = target;

                }

            }

        };

        update();

    };

    counters.forEach(counter => {

        animateCounter(counter);

    });

    /*==========================================
        TOOL CARD HOVER EFFECT
    ==========================================*/

    const cards = document.querySelectorAll(".tool-card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-15px) scale(1.02)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });

    /*==========================================
        COPY PROMPT BUTTONS (Optional)
    ==========================================*/

    document.querySelectorAll(".prompt-card").forEach(card => {

        const button = document.createElement("button");

        button.textContent = "Copy Prompt";

        button.className = "btn";

        button.style.marginTop = "20px";

        card.appendChild(button);

        button.addEventListener("click", () => {

            const prompt =
                card.querySelector("pre").innerText;

            navigator.clipboard.writeText(prompt);

            button.textContent = "Copied ✓";

            setTimeout(() => {

                button.textContent = "Copy Prompt";

            },2000);

        });

    });

    /*==========================================
        BACK TO TOP BUTTON
    ==========================================*/

    const topBtn = document.createElement("button");

    topBtn.innerHTML =
        '<i class="fas fa-arrow-up"></i>';

    topBtn.id = "topBtn";

    document.body.appendChild(topBtn);

    Object.assign(topBtn.style,{

        position:"fixed",
        right:"25px",
        bottom:"25px",
        width:"55px",
        height:"55px",
        borderRadius:"50%",
        border:"none",
        background:"#005EB8",
        color:"#fff",
        cursor:"pointer",
        display:"none",
        fontSize:"20px",
        zIndex:"999",
        boxShadow:"0 8px 20px rgba(0,0,0,.2)"

    });

    window.addEventListener("scroll",()=>{

        topBtn.style.display =
            window.scrollY > 400 ? "block":"none";

    });

    topBtn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

    /*==========================================
        CURRENT YEAR
    ==========================================*/

    const footer = document.querySelector("footer p:last-child");

    if(footer){

        footer.innerHTML =
        `© ${new Date().getFullYear()} Engr. Abraham Wright Enoh | Guest Speaker | West African College of Physicians (Nigeria Chapter).`;

    }

});