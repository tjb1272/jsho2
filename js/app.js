//function running through 1 to 100 finding all which are divisible by 3 && 5 
function bingBong() {
    let b3 = 'Bing';
    let b5 = 'Bong';
    
    //for loop running up through 100
    for (i = 0; i < 101; i++) {

        //checking to see if both 3 and 5 are divisible by i, if so adding it to the page as BingBong otherwise moving on.
        if ((i % 3 === 0) && (i % 5 === 0)) {
            var node = document.createElement('li');
            var textnode = document.createTextNode(`${b3}${b5}, ${i} Is divisible by Three and Five!`);
            node.appendChild(textnode);
            document.getElementById("bingVsBong").appendChild(node);
            console.log(`${b3}${b5}, ${i} Is divisible by Three and Five!`);
        
        //checking to see if 3 is divisible by i, if so adding it to the page as Bing otherwise moving on.
        } else if (i % 3 === 0) {
            var node = document.createElement('li');
            var textnode = document.createTextNode(`${b3}, ${i} Is divisible by Three!`);
            node.appendChild(textnode);
            document.getElementById("bingVsBong").appendChild(node);
            console.log(`${b3}, ${i} Is divisible by Three!`);
        
        //checking to see if 5 is divisible by i, if so adding it to the page as Bong otherwise moving on.
        } else if (i % 5 === 0) {
            var node = document.createElement('li');
            var textnode = document.createTextNode(`${b5}, ${i} Is divisible by Five!`);
            node.appendChild(textnode);
            document.getElementById("bingVsBong").appendChild(node);
            console.log(`${b5}, ${i} Is divisible by Five!`);
        
        //If it reaches here none of the conditions were met. Adds the index it was on and notes it was not divisible.
        } else {
            var node = document.createElement('li');
            var textnode = document.createTextNode(`${i} Is not divisible by Three or Five!`);
            node.appendChild(textnode);
            document.getElementById("bingVsBong").appendChild(node);
            console.log(`${i} Is not divisible by Three or Five!`);
        }
    }
}
