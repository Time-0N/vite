type grade = 1 | 2 | 3 | 4 | 5 | 6 | "A" | "B" | "C" | "D" | "F" | undefined;

type student = {
    firstName: string,
    name: string,
    age: number,
    grade: [grade, grade, grade, grade, grade],
}

function printStudent(studentList : student[]): void {

    studentList.forEach((s) => {
        let modifyGrade = s.grade.map((g) => g === undefined ? "*":g);
        console.log("");
        console.log(s.firstName, s.name, "(" + s.age + ")")
        console.log("==============================")
        console.log("Grades: " + modifyGrade.toString());
        console.log("");
    })
}


const testStudent1: student = {
    firstName: "Walter",
    name: "White",
    age: 52,
    grade: [1, "D", 3, undefined, 5],
}

const testStudent2: student = {
    firstName: "Jesse",
    name: "Pinkman",
    age: 24,
    grade: [1, "F", 3, undefined, 5],
}

const testStudent3: student = {
    firstName: "Skyler",
    name: "White",
    age: 41,
    grade: [1, "A", 3, undefined, 5],
}

const studentList: student[] = [testStudent1, testStudent2, testStudent3];

printStudent(studentList);