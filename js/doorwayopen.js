const door = document.querySelector(".doorway");

            const unlocked = localStorage.getItem("doorUnlocked") === "true";
            const doorSound = document.getElementById("doorSound");

            if (!unlocked) {
                door.style.cursor = "not-allowed";
            } else {
                door.style.cursor = "pointer";

                door.addEventListener("click", () => {
                    door.classList.add("doorway-animate");
                    
                doorSound.currentTime = 0;
                doorSound.play();
                    
                door.addEventListener("animationend", () => {
                window.location.href = "end.html";
            }, { once: true });
                });
}