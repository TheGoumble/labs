// Lab 1 - Object

// Create an object that will include a student's info with the following values:
// - Name (with your own name)
// - Age (with any age)
// - inClass (having a boolean value stating if you're in class or not)

// Now do the following with the oject:
// - Display the object to the user (on the screen)
// - Display just the name of the student variable
// - Change "Age" another number.
// - Display the student's Age

let studentInfo = {
  Name: "Javier",
  Age: 20,
  inClass: true,
}

console.log(studentInfo,`\n${studentInfo.Name}`)
studentInfo.Age = 27
console.log(studentInfo.Age)

// Create an object for a "Teacher" with the following properties
// - Name (with anyone's name)
// - Classes (with an empty array)
// - currentlyTeaching (true or false, your choice)

// Now with the above object do the following:
// - Add a new class name (of your choice) to the "Classes" array 
// - Add another class.
// - Display the Teacher's Name
// - Display the Teacher's Classes
// - Display the full Teacher Object

let Teacher = {
    Name: 'Some Dude',
    Classes: [],
    currentlyTeaching: true
}

Teacher.Classes.push('Best class!', 'Worst class!')
//Teacher.Classes.push('Worst class!') ^is faster
console.log(`The classes ${Teacher.Name} have are:\n`, ...Teacher.Classes)

// Lab 3 - Object

// Create an object for a "TeacherAssistant" with the following properties
// - Name 
// - inClass (with true or false)

// Now with the above object do the following:
// - Display the TeacherAssistant object
// - Add a new "property" called "Classes" with an empty array.
// - Add a new class name (just string) to the newly added property
// - Display the TeacherAssistant Object.


let TeacherAssistants = []

let TeacherAssistant = {
    Name: 'Matt',
    inClass: true,
}

TeacherAssistants.push(TeacherAssistant)
console.log(TeacherAssistants[0].Name)

let TeacherAssistant2 ={
    Name: 'Manny',
    inClass: false,
}
TeacherAssistants.push(TeacherAssistant2)
console.log(TeacherAssistants[1].Name) 

// console.log(TeacherAssistant)

// TeacherAssistant.Classes = []
// TeacherAssistant.Classes.push('COOL FUN THING CLASS')

// console.log(`Object\n`,TeacherAssistant)


// problem 1 peseudo code is SUPER IMPORTANT
