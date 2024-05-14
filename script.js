
//async function that fetches data
async function fetchData() {
    try {
        const response = await fetch('./data.json');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
    const data = await response.json()
    return data;
    } catch (error) {
        console.error('Error:', error);
    }
};


const sortData = (data) => {
    data.sort((a, b) => {
        if (a.color == 'white') {
            return 1;
        }
        if (a.color == 'black') {
            return -1;
        }
    });

    let arr = [];
    let a = data.length - 1; 
    let b = a/2;
    for(let i = 0; i < b; i++) {
        arr.push( data[i], data[a - i])
    };

    return arr;
};

const displayData = (data) => {

    const products = document.querySelector('#products');


    data.forEach((obj) => {
        const anchor = document.createElement('a');
        const card = document.createElement('div');
        const img = document.createElement('img');
        const header = document.createElement('h3');
        const section = document.createElement('section');
        const para1 = document.createElement('p');
        const para2 = document.createElement('p');

        card.className = "card"
        anchor.className = "card_hover";
        img.className = "card_img"
        section.className = "card-section"
         
        if (obj.color == 'white') {
            header.className = "title title-black";
            para1.className = "description black"
            para2.className = "price black"
        } else {
            header.className = "title title-white"
            para1.className = "description white"
            para2.className = "price white"
        }

        img.src = obj.imgFront;
        header.textContent = obj.company;
        para1.textContent = obj.name;
        para2.textContent = obj.price;

        //Checks if products container exist so the other pages dont run into errors since products variable is
        //only found in products page
        if (products) {
            products.appendChild(anchor);
        }
        anchor.appendChild(card)
        card.appendChild(img);
        card.appendChild(section);
        section.appendChild(header);
        section.appendChild(para1);
        section.appendChild(para2);

        const mouseOver = () => {
            header.textContent = obj.name;
            para2.textContent = obj.history;
            para1.style.display = "none";
            // img.src = obj.imgBack;
        }

        const mouseOut = () => {
            header.textContent = obj.company;
            para1.textContent = obj.name;
            para2.textContent = obj.price;
            para1.style.display = "block";
            // img.src = obj.imgFront;
        }

        anchor.addEventListener("mouseover", mouseOver)
        anchor.addEventListener("mouseout", mouseOut)
        
    })
}

// const mouseOver = () => {
//     const anchor = document.querySelectorAll(".card_hover");
//     const title = document.querySelectorAll(".title");
//     const para = document.querySelectorAll(".decription");
//     const para2 = document.querySelectorAll(".price");

//     title.
// }


const main = async () => {
    const data = await fetchData();

    const sortedData = sortData(data);
    displayData(sortedData);
}

main();


//Add an event listener to hamburger menu that upon click toggles the navbar_links display, and also the overflow behavior
//Also does extra styling for a better mobile experience

let menu = document.querySelector("#navbar--hamburger");
menu.addEventListener("click", () => {

    let links = document.querySelector(".navbar_links");


     if ( links.style.display === "flex") {
         links.style.display = "none";
         document.body.style.overflow = "auto";
     } else {
         links.style.display = "flex";
         links.style.flexDirection = "column";
         links.style.alignItems = "center";
         document.body.style.overflow = "hidden";
     }

});



// const displayHomeCards = ((data) => {

//     const container = document.querySelector('.home-cards')

//     const anchor = document.createElement('a');
//     const card = document.createElement('div');
//     const img = document.createElement('img');
//     const header = document.createElement('h3');
//     const section = document.createElement('section');
//     const para1 = document.createElement('p');
//     const para2 = document.createElement('p');


// })

const paymentNumbers = document.querySelectorAll(".num_field");

paymentNumbers.forEach((btn) => {
    btn.addEventListener("keydown", () => {

         // Regrex checks for non numerical characters, if no match it will return -1 which means all characters are numbers
         // I set the condition to check if its not -1 meaning non numerical numbers were typed. I run an alert to notify
         // the user to enter only numbers.
        if ( event.key.search(/\D/g) != -1 && event.key !== "Backspace" && event.key !== "Enter") {
            window.alert("PLEASE ENTER ONLY NUMBERS");

            //prevents the key from being pressed/added to the cardnumber.value
            event. preventDefault()

        }
    })
});


const cardNumber = document.querySelector("#cardnumber");

console.log(cardNumber);
