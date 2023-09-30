let products = [
    {
        name: "Head Phone",
        price: 500,
        discount: 7
    },
    {
        name: "Mobile Phone",
        price: 1000,
        discount: 7
    },
    {
        name: "Tablate",
        price: 3000,
    }
];

function checkPrice(obj) {
    if (Array.isArray(obj).length == 0) {
        return false;
    }
    return obj.forEach((elem) => {
        if (Object(elem).hasOwnProperty("discount")) {
            if (elem["price"] >= 1000) {
                elem["discount"] = 10;
                elem["price"] = elem["price"] - (elem["discount"] * elem["price"]) / 100;
                console.log(elem);
            } else {
                elem["price"] = elem["price"] - (elem["discount"] * elem["price"]) / 100;
                console.log(elem);
            }
        } else {
            console.log(elem);
        }
    });
}

checkPrice(products);
