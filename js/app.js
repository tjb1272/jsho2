
function bingBong() {
    let b3 = 'Bing';
    let b5 = 'Bong';
    for (i = 0; i < 101; i++) {

        if ((i % 3 === 0) && (i % 5 === 0)) {
            var node = document.createElement('li');
            var textnode = document.createTextNode(`${b3}${b5}, ${i} Is divisible by Three and Five!`);
            node.appendChild(textnode);
            document.getElementById("bingVsBong").appendChild(node);
            console.log(`${b3}${b5}, ${i} Is divisible by Three and Five!`);
        
        } else if (i % 3 === 0) {
            var node = document.createElement('li');
            var textnode = document.createTextNode(`${b3}, ${i} Is divisible by Three!`);
            node.appendChild(textnode);
            document.getElementById("bingVsBong").appendChild(node);
            console.log(`${b3}, ${i} Is divisible by Three!`);
        
        } else if (i % 5 === 0) {
            var node = document.createElement('li');
            var textnode = document.createTextNode(`${b5}, ${i} Is divisible by Five!`);
            node.appendChild(textnode);
            document.getElementById("bingVsBong").appendChild(node);
            console.log(`${b5}, ${i} Is divisible by Five!`);
        
        } else {
            var node = document.createElement('li');
            var textnode = document.createTextNode(`${i} Is not divisible by Three or Five!`);
            node.appendChild(textnode);
            document.getElementById("bingVsBong").appendChild(node);
            console.log(`${i} Is not divisible by Three or Five!`);
        }
    }
}
