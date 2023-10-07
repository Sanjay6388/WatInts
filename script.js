burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')



burger.addEventListener('click', () => {
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');

})

document.addEventListener('DOMContentLoaded', function() {
    const calculatorForm = document.getElementById('calculator-form');
    const resultDiv = document.getElementById('result');

    // A simple mapping of water footprints for different products (in liters)
    const waterFootprints = {
        product1: 140,   // Replace with actual water footprint data
        product2: 8000,
        product3: 200,
        product4: 1259,   
        product5: 300,
        product6: 1200,
        product7: 600,
        product8: 160,
        product9: 100,   
        product10: 3900,
        product11: 2600,
        product12: 4000,
        product13: 300,
        product14: 1320,   
        product15: 700,
        product16: 1500,
        product17: 95,
        product18: 1,
        product19: 1,   
        product20: 6,
        product21: 76,
        product22: 23,
        product23: 155,
        product24: 19,   
        product25: 0.47,
        product26: 0.47,
        product27: 38,
        product28: 200,
        product29: 83,   
        product30: 95,
        product31: 6800,
        product32: 1960,
        product33: 2720,
        product34: 1330,   
        product35: 185,
        product36: 197,
        product37: 185,
        product38: 125,
        product39: 133,   
        product40: 11,
        product41: 159,
        product42: 110,
        product43: 166,
        product44: 98,   
        product45: 0.095,
        product46: 32400,
        product47: 148200,
        product48: 379,
        product49: 151,
        product50: 1,
       
    };

    calculatorForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get the selected product from the form
        const productSelect = document.getElementById('product');
        const selectedProduct = productSelect.value;

        // Check if the selected product is in the waterFootprints object
        if (selectedProduct in waterFootprints) {
            // Calculate the water footprint based on the selected product
            const waterFootprint = waterFootprints[selectedProduct];

            // Display the result in the resultDiv
            resultDiv.textContent = `Water Footprint: ${waterFootprint} liters`;
        } else {
            // If the selected product is not found in the waterFootprints object
            resultDiv.textContent = "Water footprint data not available for this product.";
        }
    });

});
document.getElementById("calculate-button").addEventListener("click", function () {
    // Show the result div
    var resultDiv = document.getElementById("result");
    resultDiv.style.display = "grid";
     });



function redirectToCamera() {
    event.preventDefault();
    window.location.href = "./camera/camera.html";
}



function loadVideos() {
    var videos = document.querySelectorAll('video');
    for (const video of videos) {

        window.addEventListener('scroll', function () {
            // Check if the video is in the viewport
            var rect = video.getBoundingClientRect();
            var inViewport = (rect.top >= 0 && rect.bottom <= window.innerHeight);

            if (inViewport) {
                if (video.paused) {
                    video.play();
                }
            } else {
                if (!video.paused) {
                    video.pause();
                }
            }
        });
    }
}

loadVideos();

