// Q1 

let oddNum = [];

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        oddNum.push(i)
    }
}

// console.log('Q1:', oddNum.toString())


// Q2 

let numbers = [3, 4, 50, 5, 3, 10, 4, 6, 7, 8, 0, 8, 10, 1, 9, 32, 67, 9, 10];

let ascendingNumber = numbers.sort((a, b) => a - b);

// console.log('Q2:', ascendingNumber);

// Q3 

let sum = numbers.reduce((total, num) => total + num)

// console.log('Q3:', sum);

// Q4 

let removeDuplicate = numbers.filter((unique, index) => numbers.indexOf(unique) === index)

// console.log('Q4:', removeDuplicate);

// Q5 

let numbers2 = [3, 4, -1, -5, 3, 10, -7, 10, 1, 9, 7, -9, 0]

let negativeNumber = numbers2.filter(number => {
    if (number < 0) {
        return number;
    }
})

// console.log('Q5', negativeNumber);

// Q6 

let dividedBy10 = numbers.filter(number => {
    if (number % 10 === 0) {
        return number;
    }
})

// console.log('Q6', dividedBy10)

// Q7 

let name = 'How are you'

let convertArray = name.toLowerCase().split('').filter(value => value.trim().length > 0);
let findVowels = convertArray.filter(vowel => {
    if (vowel === 'a' || vowel === 'e' || vowel === 'o' || vowel === 'i' || vowel === 'u') {
        return vowel
    }
})

// console.log('Q7:', findVowels.length);

// Q8 


let jsonData = [
    { "name": "I Phone 13 Pro", "price": 899, "brand": "iphone", "rating": { "average": "4.2", "user_count": 200 }, "discount": "20%" },
    { "name": "I Phone 7", "price": 399, "brand": "iphone", "rating": { "average": "3.9", "user_count": 600 }, "discount": "0%" },
    { "name": "I Phone sr", "price": 599, "brand": "iphone", "rating": { "average": "4.24", "user_count": 450 }, "discount": "20%" },
    { "name": "I Phone 12", "price": 599, "brand": "iphone", "rating": { "average": "4.3", "user_count": 167 }, "discount": "14%" },
    { "name": "Samsung Note 10", "price": 699, "brand": "samsung", "rating": { "average": "3.2", "user_count": 154 }, "discount": "0%" },
    { "name": "Samsung Note 11", "price": 799, "brand": "samsung", "rating": { "average": "4.7", "user_count": 312 }, "discount": "5%" },
    { "name": "A52s", "price": 499, "brand": "samsung", "rating": { "average": "4.6", "user_count": 180 }, "discount": "6%" },
    { "name": "A52s 5G", "price": 599, "brand": "samsung", "rating": { "average": "4.4", "user_count": 61 }, "discount": "0%" },
    { "name": "I Phone 14", "price": 800, "brand": "iphone", "rating": { "average": "4.8", "user_count": 20 }, "discount": "0%" },
    { "name": "I Phone 14 pro max", "price": 1200, "brand": "iphone", "rating": { "average": "5", "user_count": 1 }, "discount": "50%" },
    { "name": "Xiaomi Poco M5", "price": 267, "brand": "xiaomi", "rating": { "average": "2.3", "user_count": 5 }, "discount": "10%" },
    { "name": "Xiaomi A1", "price": 199, "brand": "xiaomi", "rating": { "average": "2.1", "user_count": 9 }, "discount": "23%" },
    { "name": "Vivo Y75s", "price": 256, "brand": "vivo", "rating": { "average": "4.1", "user_count": 43 }, "discount": "16%" },
    { "name": "Vivo iQOO 9T", "price": 476, "brand": "vivo", "rating": { "average": "4.5", "user_count": 134 }, "discount": "20%" }
]


let sortPrice = jsonData.sort((a, b) => b.price - a.price);

// console.log('Q8', sortPrice);

// Q9 

let discount = jsonData.map(data => {
    let discountPrice = data.price * (parseInt(data.discount) / 100);
    return { ...data, discount_price: discountPrice.toFixed(2) };
})

// console.log('Q9:', discount);

// Q10 

let sortDiscountPrice = discount.sort((a, b) => b.discount_price - a.discount_price)

// console.log('Q10:', sortDiscountPrice);

// Q11 

let sortRaging = discount.sort((a, b) => b.rating.average - a.rating.average)

// console.log('Q11:', sortRaging);

// Q12 

let findIphone = discount.filter(phone => {
    if (phone.brand === 'iphone' && phone.price > 500) {
        return phone;
    }
})

// console.log('Q12:', findIphone);

// Q13 

let findAllIphone = discount.filter(phone => {
    if ((phone.brand === 'iphone' || phone.brand === 'samsung') && phone.price > 400) {
        return phone;
    }
})

// console.log('Q13:', findAllIphone);

// Q14 

let childrenData = [
    {
        "id": 1,
        "parent_id": null,
        "name": "Courses",
        "children": [
            {
                "id": 3,
                "parent_id": 1,
                "name": "Subject Wise Videos",
                "children": []
            },
            {
                "id": 4,
                "parent_id": 1,
                "name": "Bangla",
                "children": [
                    {
                        "id": 7,
                        "parent_id": 4,
                        "name": "Subject Wise Videos",
                        "children": [
                            {
                                "id": 10,
                                "parent_id": 7,
                                "name": "Something",
                                "children": [
                                    {
                                        "id": 14,
                                        "parent_id": 10,
                                        "name": "Anything",
                                        "children": [
                                            {
                                                "id": 18,
                                                "parent_id": 10,
                                                "name": "Im last level",
                                                "children": []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "id": 2,
        "parent_id": 16,
        "name": "Books",
        "children": [
            {
                "id": 7,
                "parent_id": 4,
                "name": "Subject Wise Videos",
                "children": []
            }
        ]
    }
];

// Q14 main answer 

let childrenName = [];

childrenData.map(data1 => {
    let findData = (data) => {
        data.children.map(data2 => {
            childrenName.push(data2.name)
            findData(data2)
        })
    }
    findData(data1);
})

// console.log('Q14:', childrenName)

// Q15 

let parentName = [];

childrenData.map(data1 => {
    parentName.push({ parentName: data1.name, children: data1.children.length })
    let findData = (data) => {
        if (data.children.length > 0) {
            data.children.map(data2 => {
                if (data2.children.length > 0) {
                    parentName.push({ parentName: data2.name, children: data2.children.length })
                    findData(data2)
                }
            })
        }
    }
    findData(data1);
})

// console.log('Q15:', parentName)

