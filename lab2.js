//Lab 1
y = 4
x = 6

//scope mean the values up top do not relate to the function
function Bigger(x, y) {
  if (x > y) {
    return `${x} is bigger than ${y}`
  } else if (x < y) {
    return `${y} is bigger than ${x}`
  } else {
    return `${x} & ${y} are the same number`
  }
}
console.log(Bigger(10, 5))
console.log(Bigger(5, 5))
console.log(Bigger(10, 20))
/*Answer
function helloWorld(language){
  if(language == 'en'){
    return 'Howdee'
  }else if (language == 'es'){
    return 'Hola muchacho
  }else if (language == 'cz'){
    return 'ni hao!'
  }
}

console.log(helloWorld('cz'))

OR
function helloWorld(language){
let greeting = ''


switch(language){
  
  case 'en':
    return 'Howdee'
    break
  case 'es':
    return 'Hola muchacho'
    break
  case 'cz':
    return 'ni hao!'
    break
  default:
    return 'I don\'t know you tel me'
    break

}
return greeting
}*/

//lab 2
function helloWorld(x) {
  if (x === "es") {
    return "Hola Mundo"
  } else if (x === "ge") {
    return "Hallo Welt"
  } else if (x === "en") {
    return "Hello World"
  } else {
    return "well that's not a language"
  }
}

console.log(helloWorld("es"))
console.log(helloWorld("ge"))
console.log(helloWorld("en"))
console.log(helloWorld("MO"))

//Lab 3
function assignGrade(score) {
  switch (true) {
    case score >= 90:
      console.log("A")
      break

    case score <= 89 && score >= 80:
      console.log("B")
      break

    case score <= 79 && score >= 70:
      console.log("C")
      break

    case score <= 69 && score >= 60:
      console.log("D")
      break

    default:
      console.log("F")
  }
}

assignGrade(90)
assignGrade(84)
assignGrade(73)
assignGrade(65)
assignGrade(20)

/*Answer
function assignGrade(gradeNumber){
  //100-90 A
  //89-80 B
  //79-70 C
  //69-60 D
  let gradeLetter = 'F'
  if (gradeNumber >= 90){
    gradeLetter = 'A'
  }else if (gradeNumber > 80){
    gradeLetter = 'B'
  }else if (gradeNumber > 70){
    gradeLetter = 'C'
  }else if (gradeNumber > 60){
    gradeLetter = 'D'
  }
  return gradeLetter
}

console.log(assignGrade(83))
*/

//Lab 4  
