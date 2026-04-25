const door = document.querySelector(".doorway");

            const unlocked = localStorage.getItem("doorUnlocked") === "true";
            const doorSound = document.getElementById("doorSound");//music for ending

            if (!unlocked) {
                door.style.cursor = "not-allowed";
            } else {
                door.style.cursor = "pointer";

                door.addEventListener("click", () => {
                    door.classList.add("doorway-animate");//run animation
                    
                doorSound.currentTime = 0;
                doorSound.play();
                    
                door.addEventListener("animationend", () => {
                window.location.href = "end.html";//go to end page on anim ending
            }, { once: true });
        
    }, { once: true });//makes it so code can only be run once
            
}