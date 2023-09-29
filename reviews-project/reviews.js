// const reviews = [
//     {
//         id: 0,
//         name: 'Christopher smith',
//         job: 'frontend developer',
//         img: './review_images/chris.jpg',
//         // img: 'C:\Users\HP ELITEBOOK\Documents\GitHub\Javascript-Arena\reviews-project\review_images\chris.jpg',
//         information: 'qwerty ui op asdf ghjk l zxc v bnm ssjs siydi iuedied i k oio game f;iauhf dsuifad;ifu asufdiud uasdh;dufdf uidh;difdf isdhodfh oidhodifd oihdfosidhf oidhods uiaukasjbcjbcjwb kuaskuaskusaaso  jyfjy grsyersyer fhtrsdhtr fore osuhduif sdufgisdfgisd onoli qwerty asd gfjin xmzknl zkjckxjc  kzjckj'
//     },
//     {
//         id: 1,
//         name: 'Devi Vishwakuma',
//         job: 'backend developer',
//         img: './review_images/devi.png',
//         information: 'I am a backend developer and it feels so graet. I work with node.js, express.js, php, python, mongoDB, MySQL and PostgreSQL. My duties involves working with servers and interacting with databases. I work behind the scenes, hand in hand with the frontend developer to create and maintain applications'
//     },
//     {
//         id: 2,
//         name: 'James Rodriguez',
//         job: 'UX designer',
//         img: './review_images/chris1.jpg',
//         information: 'rambo race qwerty ui op asdf ghjk l zxc v bnm ssjs siydi iuedied i k oio game uiaukasjbcjbcjwb kuaskuaskusaaso  jyfjy grsyersyer fhtrsdhtr fore aksjalsdhals idhslaidalsdlsh lslasihdlsai asahlsdihas laisdlasi liahdilasj alihlaish laishlaihs aisj'
//     },
//     {
//         id: 3,
//         name: 'Jim Parkson',
//         job: 'mobile developer',
//         img: './review_images/cybernet.jpg',
//         information: 'obolo ui qwerty ui op asdf ghjk l zxc v bnm skjaskas kajsnlasdlas alkndlslaskdssjs siydi iuedied i k oio game uiaukasjbcjbcjwb kuaskuaskusaaso  jyfjy grsyersyer fhtrsdhtr foreaksjnskjdnas kajskasjnda jksajsljas aksjulashdalsd alsjhlasihlasdas'
//     },
//     {
//         id: 4,
//         name: 'Nessy Adams',
//         job: 'intern',
//         img: './review_images/wednesday.png',
//         information: 'banana pie qwerty ui op asdf ghjk l zxc v bnm ssjs siydi iuedied i k oio game uiaukasjbcjbcjwb kuaskuaskusaaso  jyfjy grsyersyer fhtrsdhtr fore'
//     },
// ]

// const img = document.getElementById("image")
// const fullname = document.getElementById("name")
// const job = document.getElementById("job-description")
// const info = document.querySelector(".info")

// // targeting the buttons
// const prevBtn = document.querySelector(".prev-btn")
// const nxtBtn = document.querySelector(".next-btn")
// const randomBtn = document.querySelector(".random-btn")

// currentItem = 0;

// // load Initial item
// window.addEventListener("DOMContentLoaded", () => {
//     const item = reviews[currentItem];
//     img.src = item.img;
//     fullname.textContent = item.name;
//     job.textContent = item.job;
//     info.textContent = item.information;
// });

// //show person baesd on item index
// function showPerson(currentItem){
//     const item = reviews[currentItem]
//     img.src = item.img;
//     fullname.textContent = item.name;
//     job.textContent = item.job;
//     info.textContent = item.information;
// }

// nxtBtn.addEventListener("click", () => {
//     currentItem++;
//     console.log(currentItem);
//     if(currentItem > reviews.length - 1){

//         currentItem = 0;
//     }
//     showPerson(currentItem);
// })

// prevBtn.addEventListener("click", () => {
//     currentItem--;
//     console.log(currentItem);
//     if(currentItem < 0){

//         currentItem = reviews.length - 1;
//     }
//     showPerson(currentItem);
// })

// randomBtn.addEventListener("click", () => {
//     let randomNumber = Math.floor(Math.random() * reviews.length);
//     console.log(randomNumber)
//     showPerson(randomNumber);
// })





const reviews = [
    {
        id: 0,
        name: 'Christopher smith',
        job: 'Frontend Developer',
        img: './review_images/chris.jpg',
        // img: 'C:\Users\HP ELITEBOOK\Documents\GitHub\Javascript-Arena\reviews-project\review_images\chris.jpg',
        information: 'qwerty ui op asdf ghjk l zxc v bnm ssjs siydi iuedied i k oio game f;iauhf dsuifad;ifu asufdiud uasdh;dufdf uidh;difdf isdhcjwb '
    },
    {
        id: 1,
        name: 'Devi Vishwakuma',
        job: 'Backend Developer',
        img: './review_images/devi.png',
        information: 'I am a backend developer and it feels so graet. I work with node.js, express.js, php, python, mongoDB, MySQL and PostgreSQL. My duties involves working with servers and interacting with databases.'
    },
    {
        id: 2,
        name: 'James Rodriguez',
        job: 'UX Designer',
        img: './review_images/chris1.jpg',
        information: 'rambo race qwerty ui op asdf ghjk l zxc v bnm ssjs siydi iuedied i k oio game uiaukasjbcjbcjwb kuaskuaskusaaso  jyfjy grsyersyer fhtrsdhtr fore aksjals'
    },
    {
        id: 3,
        name: 'Jim Parkson',
        job: 'Mobile Developer',
        img: './review_images/cybernet.jpg',
        information: 'obolo ui qwerty ui op asdf ghjk l zxc v bnm skjaskas kajsnlasdlas alkndlslaskdssjs siydi iuedied i k oio game uiaukasjbcjbcjwb kuaskuaskusaaso  jyfjy grsyersyer fhtrs.'
    },
    {
        id: 4,
        name: 'Nessy Adams',
        job: 'Intern',
        img: './review_images/wednesday.png',
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
const randomBtn = document.querySelector(".random-btn")

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

randomBtn.addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    console.log(randomNumber)
    showPerson(randomNumber);
})