let $form = document.querySelector(".form");
let $list = document.querySelector(".list");
let $userName = document.querySelector(".user-name");
let $userAddress = document.querySelector(".list");
let $userPhone = document.querySelector(".user-phone");
let $ = document.querySelector(".list");
let $pizzaSize = document.querySelector(".on-pizza");
let $userSelect = document.querySelectorAll(".user-select");
let $addCheck = document.querySelectorAll(".add-check");


let newArr = []

let renderFnc = function (array, element) {
    element.innerHTML = null;
    for (let i = 0; i < array.length; i++) {
        element.innerHTML += `
            <li>
                <h5 class="mt-3">Order: ${array[i].id}</h5>
                <p><strong>Name:</strong> ${array[i].name}</p>
                <p><strong>Phone:</strong> ${array[i].phone}</p>
                <p><strong>Addres:</strong> ${array[i].email}</p>
                <p><strong>Dough thickness:</strong> ${array[i].selsize}</p>
                <p><strong>On Pizza:</strong> ${array[i].select}</p>
                <p><strong>Pizza Size:</strong> ${array[i].size}</p>
                <p><strong>Add:</strong> ${array[i].add}</p>
                <h5 class="total">${array[i].count}</h5>
            </li>
        `
    }
}

$form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    let {
        user_name,
        user_phone,
        user_email,
        user_select,
        pizza_size,
        select_size,
        add_val,
    } = evt.target.elements


    let usSelValue =[]
    user_select.forEach(element => {
        if(element.checked){
            usSelValue.push(element.value);
        }
    });


    
    let add =[]
    add_val.forEach(element => {
        if(element.checked){
            add.push(element.value);
        }
    });
    
    let count = 0;

    $addCheck.forEach(item => {
        if(item.checked) {
            count += 3
        }
    })
    console.log(count);

    let pizzaSize = document.querySelector('input[name="pizza_size"]:checked');
    let onPizza = document.querySelectorAll('input[name="user_select"]:checked');
    let pizzaSizeValue = pizzaSize.value;
    count += sizePrice[pizzaSizeValue].sizePrice;
    count += Number(onPizza.length) * 5;
    console.log(count);

    let newObj = {
        id: newArr.length + 1,
        name: user_name.value.trim(),
        phone: user_phone.value.trim(),
        email: user_email.value.trim(),
        size: pizza_size.value.trim(),
        selsize: select_size.value.trim(),
        select: usSelValue.join(', '),
        add: add.join(' ,'),
        count: count,
    }

    console.log(newObj.count);

    newArr.push(newObj);
    
    renderFnc(newArr, $list)

})


let sizePrice = {
    "25sm": {
        name: "25sm",
        sizePrice: 10,
    },
    "30sm": {
        name: "30sm",
        sizePrice: 12,
    },
    "35sm": {
        name: "35sm",
        sizePrice: 15,
    },
    onPizza: {
        sizePrice: 5,
    }
}