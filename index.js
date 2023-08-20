let total = 0;
let liItems = document.getElementById('liItems')

function divClickButton (target){
    liItemName = target.childNodes[7].childNodes[1].innerText;
    li = document.createElement('li');
    li.innerText = liItemName;
    liItems.append(li)
    
    let totalPrice = target.childNodes[7].childNodes[3].innerText.split(" ")[0];
    total = parseInt(total) + parseInt(totalPrice)   
    document.getElementById('totalPriceResult').innerText = total;
    
    
}

