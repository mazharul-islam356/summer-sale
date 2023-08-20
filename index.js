let total = 0;
let liItems = document.getElementById('liItems')

function divClickButton (target){
    liItemName = target.childNodes[7].childNodes[1].innerText;
    
    const olName = liItems.childElementCount;

    li = document.createElement('p');
    li.innerHTML = `${olName + 1}. ${liItemName}`
    liItems.appendChild(li)
    
    let totalPrice = target.childNodes[7].childNodes[3].innerText.split(" ")[0];
    total = parseInt(total) + parseInt(totalPrice)   
    document.getElementById('totalPriceResult').innerText = total;
    
    // apply button disable-enable
    let applyButton = document.getElementById('applyButton')
    applyButton.disabled = true;
    if(total >= 200){
    applyButton.disabled = false;
    }else{
    applyButton.disabled = true;
    }
    // make purchase button disable-enable
    let makePurchaseButton = document.getElementById('makePurchaseButton')
    makePurchaseButton.disabled = true;
    if(total >= 0){
    makePurchaseButton.disabled = false;
    }else{
    makePurchaseButton.disabled = true;
    }

    
   
}





