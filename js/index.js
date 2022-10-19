console.log("I'm ready!")

// Iteration 1: Names and Input
//1.1 Create a variable hacker1 with the driver's name.
hacker1 = "Neo"
//1.2 Print "The driver's name is XXXX".
console.log("The driver's name is", hacker1)
//1.3 Create a variable hacker2 with the navigator's name.
hacker2 = "Trinity"
//1.4 Print "The navigator's name is YYYY".
console.log("THe navigator's name is", hacker2)

/*Iteration 2: Conditionals
2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.*/
if(hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if(hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let driverName = []
for (let i = 0; i < hacker1.length; i++) {
    driverName[i] = hacker1[i].toUpperCase()    
}
console.log(driverName.join(" "))
//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let navigatorName = []
for(let i = 0; i < hacker2.length; i++) {
    navigatorName[i] = hacker2[i]
}
let navigatorNameReverse = navigatorName.reverse()
console.log(navigatorNameReverse.join(""))    
/*3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?*/
if(hacker1 == hacker2) {
    console.log("What?! You both have the same name?")
} else if(driverName[0] < navigatorName[hacker2.length - 1]) {
    console.log("The driver's name goes first.")
} else {
    console.log("Yo, the navigator goes first definitely.")
}

/*Bonus 1:
Go to lorem ipsum generator and:
Generate 3 paragraphs. Store the text in a variable type of string.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.*/
let texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac nibh tristique, congue felis eu, mattis justo. Suspendisse quis venenatis leo. Pellentesque at ultricies justo. Vivamus tincidunt diam quis augue aliquam facilisis. Phasellus et nulla libero. In volutpat venenatis ligula varius viverra. Nulla ut tellus magna. Integer et felis porttitor, euismod felis vel, porttitor ante. Pellentesque commodo libero enim, vitae laoreet libero tempus eu. Suspendisse fringilla, nibh a volutpat tristique, justo felis dictum orci, sit amet hendrerit augue orci in odio. Praesent lacinia mollis ligula convallis efficitur. Sed auctor a diam vehicula dictum. Mauris in tincidunt sapien. Praesent quis erat sit amet quam mollis sollicitudin quis porttitor est. In elementum, quam ac imperdiet pellentesque, turpis lectus accumsan nisl, eget rutrum neque dolor at dolor. Phasellus elementum id odio sed faucibus. Sed id mi condimentum purus faucibus consequat. Duis at fermentum justo, eget fringilla nunc. Morbi nec nisi nulla. Sed malesuada ultricies eros, quis faucibus orci lobortis dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent euismod orci ac sem aliquam lacinia. Mauris lacinia, tellus nec malesuada efficitur, felis ligula congue nulla, non rhoncus nisi lorem at lectus. Nunc vulputate auctor sem, in congue dui condimentum sed. Proin eget risus eget nunc fermentum mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam vitae dolor dictum, iaculis turpis mollis, sagittis risus. Maecenas rutrum, dui pharetra sodales vehicula, ipsum velit lobortis enim, ut posuere nibh velit vitae erat. Fusce euismod scelerisque dui eget finibus. Maecenas eleifend ante at purus dapibus rutrum. Duis tristique massa tincidunt vestibulum gravida. Integer rhoncus sapien velit, et tincidunt nibh imperdiet a."
let palavras = (texto.match(/ /g) || []).length;
let et = (texto.match(/et/g) || []).length;
console.log(palavras + 1) // cada palavra é antecedida de um espaço, exceto a primeira, por isso deve-se somar 1.
console.log(et)
