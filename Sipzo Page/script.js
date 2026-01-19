document.addEventListener("DOMContentLoaded", function () {

    const mainImage = document.getElementById("mainImage");
    const thumbnails = document.querySelectorAll(".thumbnail");
    const BackgroundCircle = document.getElementById("BackgroundCircle");

    thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener("click", () => {
            // Remove the active class from all thumbnails
            mainImage.classList.remove("scale-100","opacity-100");
            mainImage.classList.add("scale-90","opacity-0");
    
            // change the bg color 
            const newColor = thumbnail.getAttribute("data-color");
            BackgroundCircle.style.backgroundColor = newColor;

            setTimeout(() => {
                mainImage.src = thumbnail.src;
                mainImage.classList.remove("scale-90","opacity-0");
                mainImage.classList.add("scale-100","opacity-100");
            },500);
        });
    });
});