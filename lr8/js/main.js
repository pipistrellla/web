const NameRegex = /^[a-zA-Zфа-яА-Я]*$/
const PhoneRegex = /^8-9[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/

const nameChacker = (regex) =>  {
    let firstname = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').values;

    if (regex.test(firstname) && regex.test(lastName) && lastName !== '' && firstname !== '' ) {
        document.getElementById('order').style.backgroundColor = 'rgba(0, 255 ,0 , 0.4)';
        document.getElementById('nameChecker').textContent = ''
        return true;
    } else {
        document.getElementById('order').style.backgroundColor = 'rgba(255, 0 ,0 , 0.2)';
        document.getElementById('nameChecker').textContent = 'Некоректное имя или фамилия'
        document.getElementById('nameChecker').style.color = 'red'
        return false;
    }
}


const phoneChecker = (regex) =>  {
    let phone = document.getElementById('phone').value;


    if (regex.test(phone)) {
        document.getElementById('order').style.backgroundColor = 'rgba(255, 0 ,0 , 0.4)';
        document.getElementById('phoneChecker').textContent = ''
        return true;
    } else {
        document.getElementById('order').style.backgroundColor = 'rgba(255, 0 ,0 , 0.2)';
        document.getElementById('phoneChecker').textContent = 'Неккоректный телефон'
        document.getElementById('phoneChecker').style.color = 'red'
        return false;
    }
}

const completeOrder = (event) => {
    event.preventDefault();
    console.log(phoneChecker(PhoneRegex))
    if (nameChacker(NameRegex) && phoneChecker(PhoneRegex) ){
        document.getElementById('orderResult').style.display = 'flex'
        document.getElementById('order').style.display = 'none'
    }
}

const orderButton = document.getElementById("OrderButton");
orderButton.addEventListener("click", completeOrder);