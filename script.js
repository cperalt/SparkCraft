const products = document.querySelector('#products');

async function fetchData() {
    try {
        const response = await fetch('./data.json');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json()
        displayData(data);
    } catch (error) {
        console.error('Error:', error);
    }
};

const displayData = (data) => {
    data.forEach((obj) => {
        const card = document.createElement('div');
        const img = document.createElement('img');
        const header = document.createElement('h3');
        const section = document.createElement('section');
        const para1 = document.createElement('p');
        const para2 = document.createElement('p');

        card.className = "card"
        header.className = "title"
        para2.className = "price white"

        img.src = obj.imgFront;
        header.textContent = obj.company;
        para1.textContent = obj.name;
        para2.textContent = obj.price;

        console.log(para2);

        card.appendChild(img);
        card.appendChild(section);
        products.appendChild(card);
        section.appendChild(header);
        section.appendChild(para1);
        section.appendChild(para2);
        
    })
}

fetchData();





