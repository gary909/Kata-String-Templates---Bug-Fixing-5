function buildString(template) {
    let myStr = [template];
    // myStr.push(template);
    // template.join(',')
    //     ; return 'I like ' + myStr + '!';
    return myStr;
}

console.log(buildString('Cheese', 'Milk', 'Chocolate')); // 'I like Cheese, Milk, Chocolate!'
console.log(buildString('Cheese', 'Milk')); // 'I like Cheese, Milk!'
console.log(buildString('Chocolate')); // 'I like Chocolate!'