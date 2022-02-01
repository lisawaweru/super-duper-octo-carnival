function main() {
    //              0123456789ABCDE
    const myFirstName = 'Lisa';
    const myLastName ='Waweru';
    const mySplit = [myFirstName, myLastName];
    const myMidlleName = 'Mumbi';
    console.log(myFirstName + " "+ myLastName)
    console.log(mySplit)
    console.log(myMidlleName)
    console.log(myFirstName.toLowerCase())
    console.log(myLastName.toUpperCase())
    console.log(mySplit.reverse().join(' '));
    console.log(myFirstName.substring(0,1));
    console.log(myLastName.substring(0,3));
    console.log(myFirstName[0] + myLastName[0]);

}

main ();