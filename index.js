let count = 1;



function productItem(event) {

    const productName = event.childNodes[3].childNodes[1].innerText;
    const productPrice = parseInt(event.childNodes[3].childNodes[5].innerText.split(" ")[0]);
    let totalPrice = parseFloat(document.querySelector('.total').innerText.split(" ")[0]);
    let intotal = productPrice + totalPrice;

    document.querySelector('.total').innerText = intotal + " TK";
    document.querySelector('.total-price-with-discount').innerText = intotal + " TK";

    const parentElement = document.querySelector('.list');

    count + 1

    const createElementP = document.createElement("p");

    createElementP.classList.add('text-2xl')
    createElementP.classList.add('font-medium')

    createElementP.innerText = count++ + ". " + productName;
    parentElement.appendChild(createElementP);
   
    if (intotal > 0) {

        document.querySelector('.make-pay').removeAttribute('disabled')


    }

    if (intotal >= 200) {
        document.querySelector('.coupon-apply').removeAttribute('disabled')
    }
}

// this pice of code for coupon-input
document.getElementById('coupon-input').addEventListener('keyup', function (event) {

    const text = event.target.value;

    document.querySelector('.coupon-apply').addEventListener('click', function () {

        if (text === 'SELL200') {

            const toTalPrice = parseFloat(document.querySelector('.total-price').innerText.split(" ")[2]);

            const disRatio = 0.2;

            const disCountPrice = (toTalPrice * disRatio) - toTalPrice;

            const ammountDiscount = toTalPrice - Math.abs(disCountPrice);

            document.querySelector('.discount-taka').innerHTML = `${ammountDiscount.toFixed(2)} TK`;


            document.querySelector('.total-price-with-discount').innerHTML = `${Math.abs(disCountPrice).toFixed(2)} TK`;


        } else {
            return
        }
    })
})

document.querySelector('.modal-container').childNodes[7].addEventListener('click', function (event) {

    window.location.href = '/'
    
})





