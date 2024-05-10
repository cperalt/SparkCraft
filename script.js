const products = document.querySelector('#products');

async function fetchData() {
    try {
        const response = await fetch('./data.json');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json()

        sortData(data);
        displayData(data);
    } catch (error) {
        console.error('Error:', error);
    }
};

const sortData = (data) => {
    return data.sort((a, b) => {
        if (a.color == 'white') {
            return 1;
        }
        if (a.color == 'black') {
            return -1;
        }
    });
};

const displayData = (data) => {
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

        console.log(para2);

        products.appendChild(anchor);
        anchor.appendChild(card)
        card.appendChild(img);
        card.appendChild(section);
        section.appendChild(header);
        section.appendChild(para1);
        section.appendChild(para2);
        
    })
}

fetchData();





