const reviews = [
    {
        id: 0,
        name: 'Christopher smith',
        job: 'frontend developer',
        img: './review_images/chris.jpg',
        // img: 'C:\Users\HP ELITEBOOK\Documents\GitHub\Javascript-Arena\reviews-project\review_images\chris.jpg',
        information: 'qwerty ui op asdf ghjk l zxc v bnm ssjs siydi iuedied i k oio game uiaukasjbcjbcjwb kuaskuaskusaaso  jyfjy grsyersyer fhtrsdhtr fore'
    },
    {
        id: 1,
        name: 'Devi Vishwakuma',
        job: 'backend developer',
        img: 'C:\Users\HP ELITEBOOK\Documents\GitHub\Javascript-Arena\reviews-project\review_images',
        information: 'asdf qwerty ui op asdf ghjk l zxc v bnm ssjs siydi iuedied i k oio game uiaukasjbcjbcjwb kuaskuaskusaaso  jyfjy grsyersyer fhtrsdhtr fore'
    },
    {
        id: 2,
        name: 'James Rodriguez',
        job: 'UX designer',
        img: 'C:\Users\HP ELITEBOOK\Documents\GitHub\Javascript-Arena\reviews-project\review_images',
        information: 'rambo race qwerty ui op asdf ghjk l zxc v bnm ssjs siydi iuedied i k oio game uiaukasjbcjbcjwb kuaskuaskusaaso  jyfjy grsyersyer fhtrsdhtr fore'
    },
    {
        id: 3,
        name: 'Jim Parkson',
        job: 'mobile developer',
        img: 'C:\Users\HP ELITEBOOK\Documents\GitHub\Javascript-Arena\reviews-project\review_images',
        information: 'obolo ui qwerty ui op asdf ghjk l zxc v bnm ssjs siydi iuedied i k oio game uiaukasjbcjbcjwb kuaskuaskusaaso  jyfjy grsyersyer fhtrsdhtr fore'
    },
    {
        id: 4,
        name: 'Nessy Adams',
        job: 'intern',
        img: 'C:\Users\HP ELITEBOOK\Documents\GitHub\Javascript-Arena\reviews-project\review_images',
        information: 'banana pie qwerty ui op asdf ghjk l zxc v bnm ssjs siydi iuedied i k oio game uiaukasjbcjbcjwb kuaskuaskusaaso  jyfjy grsyersyer fhtrsdhtr fore'
    },
]

const img = document.getElementById("image")
const fullname = document.getElementById("name")
const job = document.getElementById("job-description")
const info = document.querySelector(".info")

// targeting the buttons
const prevBtn = document.querySelector(".prev-btn")
const nxtBtn = document.querySelector(".next-btn")
const randonBtn = document.querySelector(".random-btn")

currentItem = 0;

// load Initial item
window.addEventListener("DOMContentLoaded", () => {
    const item = reviews[currentItem];
    img.src = item.img;
    fullname.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.information;
});

//show person baesd on item index
function showPerson(currentItem){
    const item = reviews[currentItem]
    img.src = item.img;
    fullname.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.information;
}

nxtBtn.addEventListener("click", () => {
    currentItem++;
    console.log(currentItem);
    if(currentItem > reviews.length - 1){

        currentItem = 0;
    }
    showPerson(currentItem);
})

prevBtn.addEventListener("click", () => {
    currentItem--;
    console.log(currentItem);
    if(currentItem < 0){

        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
})

// randonBtn.addEventListener("click", () => {
//     currentItem = Math.floor(Math.random * reviews.length);
//     showPerson(currentItem)
// })