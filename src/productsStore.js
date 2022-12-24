const productsArray = [
    {
        id: '1',
        title: 'Whole Chicken',
        price: 39.99,
        img: './images/roasted-chicken.jpg'
    },
    {
        id: '2',
        title: 'Green beans',
        price: 2.99,
        img: './images/green-beans.jpg'
    },
    {
        id: '3',
        title: 'Turkey',
        price: 45.99,
        img: './images/turkey.jpg'
    },
    {
        id: '4',
        title: 'Ham',
        price: 40.99,
        img: './images/ham.jpg'
    },
    {
        id: '5',
        title: 'Lettuce',
        price: 3.99,
        img: './images/lettuce.jpg'
    },
    {
        id: '6',
        title: 'Sweet Potatoes',
        price: 4.99,
        img: './images/sweet-potatoes.jpg'
    },
    {
        id: '7',
        title: 'Vanilla Cake',
        price: 9.99,
        img: './images/vanilla-cake.jpg'
    },
    {
        id: '8',
        title: 'Cheesecake',
        price: 10.99,
        img: './images/cheesecake.jpg'
    },
    {
        id: '9',
        title: 'Asparagus',
        price: 4.99,
        img: './images/asparagus.jpg'
    },
    {
        id: '10',
        title: 'Red Potatoes',
        price: 2.99,
        img: './images/red-potatoes.jpg'
    }
] 

function getProductData(id){
    let productData = productsArray.find(product => product.id === id);

    if(productData === undefined){
        console.log("Product data does not exist for ID: "  + id);
        return undefined;
    }

    return productData; 
}

export {productsArray, getProductData}; 