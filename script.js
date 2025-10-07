const cursor = document.getElementById('cursor-animation');

let mouseX = 700, mouseY = 350;
let currentX = 0, currentY = 0;

window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Animation loop for smooth trailing
function animateCursor() {
    // Smooth movement (0.15 = trailing speed)
    currentX += (mouseX - currentX) * 0.2;
    currentY += (mouseY - currentY) * 0.2;

    cursor.style.left = `${currentX}px`;
    cursor.style.top = `${currentY}px`;

    requestAnimationFrame(animateCursor);
}

animateCursor();
window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    const isOverBigText = e.target.closest('#big-text');
    cursor.classList.toggle('blend', isOverBigText);

    const isAboutImg = e.target.closest('.owner-pic');
    cursor.classList.toggle('blend-color', isAboutImg);
});


const menuIcon = document.getElementById('menuIcon');
const fullScreenMenu = document.getElementById('fullScreenMenu');
const closeMenu = document.getElementById('closeMenu');
const navLinks = document.querySelectorAll('.nav-link a');


menuIcon.addEventListener("click", () => {
    fullScreenMenu.classList.add("show");
    fullScreenMenu.classList.remove("hide");
    fullScreenMenu.style.display = "block";
});

closeMenu.addEventListener("click", () => {
    fullScreenMenu.classList.add("hide");
    
});

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');

        fullScreenMenu.classList.add("show");
        fullScreenMenu.classList.remove("hide");
        
        setTimeout( () =>{
            fullScreenMenu.style.display = "none";

            document.querySelector(targetId)?.scrollIntoView({
                behavior: "smooth"
            });

        }, 800);


    });

});









{/* <script>
    const menuIcon = document.getElementById("openMenu");
    const closeIcon = document.getElementById("closeMenu");
    const fullscreenMenu = document.getElementById("fullscreenMenu");
    const navLinks = document.querySelectorAll(".nav-item");

    // Open the menu
    menuIcon.addEventListener("click", () => {
        fullscreenMenu.classList.add("active");
    });

    // Close the menu
    closeIcon.addEventListener("click", () => {
        fullscreenMenu.classList.remove("active");
    });

    // Handle nav link click with delay (to allow animation)
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Stop immediate jump
            const targetId = link.getAttribute("href");
            
            // Close the menu smoothly
            fullscreenMenu.classList.remove("active");

            // Wait for the menu to fade out before jumping to section
            setTimeout(() => {
                window.location.hash = targetId;
            }, 500); // Matches CSS transition duration
        });
    });
</script> */}
