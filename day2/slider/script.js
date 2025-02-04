const imageArr = [
    'https://picsum.photos/id/13/367/267',
    'https://picsum.photos/id/14/367/267',
    'https://picsum.photos/id/19/367/267',
    'https://picsum.photos/id/21/367/267'
]



const imageElement = document.querySelector('#img');

let currentIndex = 1;
imageElement.src = imageArr[currentIndex];


document.querySelector('.btn-group').addEventListener("click", (e) => {

    if (e.target.classList.contains("btn1")) {

        //scroll to the left
        currentIndex = (currentIndex - 1 + imageArr.length) % imageArr.length;

    }
    if (e.target.classList.contains("btn2")) {

        //scroll to the right
        currentIndex = (currentIndex + 1) % imageArr.length;
    }
    imageElement.src = imageArr[currentIndex];


})