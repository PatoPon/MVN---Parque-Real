const imageDescriptions = [
    "Descrição da imagem 1",
    "Descrição da imagem 2",
    "Descrição da imagem 3",
    "Descrição da imagem 4",
    "Descrição da imagem 5",
    "Descrição da imagem 6",
    "Descrição da imagem 7",
    "Descrição da imagem 8",
    "Descrição da imagem 9",
    "Descrição da imagem 10",
    "Descrição da imagem 11",
    "Descrição da imagem 12",
    "Descrição da imagem 13",
    "Descrição da imagem 14",
    "Descrição da imagem 15",
    "Descrição da imagem 16",
    "Descrição da imagem 17",
    "Descrição da imagem 18",
    "Descrição da imagem 19",
    "Descrição da imagem 20",
    "Descrição da imagem 21",
    "Descrição da imagem 22",
    "Descrição da imagem 23",
    "Descrição da imagem 24",
    "Descrição da imagem 25",
    "Descrição da imagem 26",
    "Descrição da imagem 27",
    "Descrição da imagem 28",
];

function updateImage(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");

    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.dataset.description;

    document.querySelector(".container").style.display = "block";

    var desiredScrollPosition = expandImg.parentElement.offsetTop - 50; 

    document.body.scrollTop = desiredScrollPosition;
    document.documentElement.scrollTop = desiredScrollPosition;

    var slides = document.getElementsByClassName("column");
    for (var i = 0; i < slides.length; i++) {
        if (slides[i] === imgs) {
            slideIndex = i;
            break;
        }
    }
}

const imageUrls = [];

const baseUrl = "../Imagens/Fotos/fotos (";
const numberOfImages = 28; 

for (let i = 1; i <= numberOfImages; i++) {
    const imageUrl = `${baseUrl}${i}).jpg`;
    imageUrls.push(imageUrl);
}

const galleryContainer = document.querySelector(".row");

function createImageElements() {
    // Verifique se imageUrls e imageDescriptions estão definidos corretamente
    if (Array.isArray(imageUrls) && Array.isArray(imageDescriptions) && imageUrls.length === imageDescriptions.length) {
        imageUrls.forEach((imageUrl, index) => {
            const imgElement = document.createElement("img");
            imgElement.src = imageUrl;
            imgElement.alt = "Image"; 
            imgElement.classList.add("column");
            imgElement.dataset.description = imageDescriptions[index];
            imgElement.addEventListener("click", function() {
                updateImage(imgElement);
            });
            galleryContainer.appendChild(imgElement);
        });
    } else {
        console.error("imageUrls e imageDescriptions devem ser arrays com o mesmo comprimento.");
    }
}

createImageElements();

var slideIndex = 0;

function plusSlides(n) {
    showSlides(slideIndex + n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("column");
    var imgText = document.getElementById("imgtext");
    
    slideIndex = n; 

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    updateImage(slides[slideIndex])
    
    imgText.innerHTML = slides[slideIndex].querySelector("img").alt;
}