"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}
class Student extends Person {
    constructor(name, age, rollNumber) {
        super(name, age);
        this.courses = [];
        this.rollNumber = rollNumber;
    }
    registerForCourse(course) {
        // this.courses.push(course)
    }
}
class Instructor extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.courses = [];
        this.salary = salary;
    }
    assignCourses(course) {
        this.courses.push(course);
    }
}
const student1 = new Student("saad", 18, "PIAIC-542");
// student1.registerForCourse("Blockchain")
// student1.registerForCourse("Metaverse")
const student2 = new Student("SAAM", 17, "PIAIC-541");
const instructor1 = new Instructor("zia-khan", 60, 1000000);
// instructor1.assignCourses("metaverse");
// instructor1.assignCourses("BCC");
const instructor2 = new Instructor("Imran", 47, 1000000);
class Course {
    constructor(id, name) {
        this.students = [];
        this.instructor = [];
        this.id = id;
        this.name = name;
    }
    addStudent(student) {
        this.students.push(student);
        student.registerForCourse(this);
    }
    setInstructor(instructor) {
        this.instructor[] = instructor;
        instructor.assignCourses(this);
    }
}
const instruct = new Instructor("Sir Zia", 60, 100000);
const course = new Course("PIAIC-5210", "Saad Shamsi");
const course1 = new Course("course-1", "Metaverse");
course1.addStudent(student1);
course1.addStudent(student2);
course1.setInstructor(instructor1);
const course2 = new Course("course-2", "BCC");
console.log(course1.students);
console.log(student1.courses);
class Department {
    constructor(name) {
        this.courses = [];
        this.name = name;
    }
    addCourse(course) {
        this.courses.push();
    }
}
const department1 = new Department("Computer Science");
department1.addCourse(course1);
console.log(department1);
