// Write an interface named Student that accepts the following elements: firstName(string), lastName(string), age(number), and location(string)
// Create two students, and create an array named studentsList containing the two variables
// Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
// Each row should contain the first name of the student and the location

// Define the Student interface
interface Student {
        firstName: string;
	lastName: string;
	age: number;
	location: string;
}

// Create two student objects
const firstStudent: Student = {
        firstName: "Blessing",
	lastName: "Nejo",
	age: 97,
	location: "Abuja"
}

const secondStudent: Student = {
        firstName: "Lekki",
	lastName: "Ibadan",
	age: 79,
	location: "Lagos"
}

// Create an array of students
const studentList = [firstStudent, secondStudent];

const table = document.getElementById('studentTable') as HTMLTableElement;

// Create a new row for each student and append it to the table
studentsList.forEach((student) => {
        const row = table.insertRow();
	const firstNameCell = row.insertCell(0);
	const locationCell = row.insertCell(1);

	firstNameCell.innerHTML = student.firstName;
	locationCell.innerHTML = student.location;
})
