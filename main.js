function main() {
    const myMessage = "Hello world!";
    let result = '';

for (let i = 0; i < myMessage.length; i +=1) {
    const char = myMessage[i];

    result += char.concat(' ');
}

console.log(result);
}  

main();



