class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    getName() {
      return this.name;
    }
  }
  class Student extends Person {
    rollNumber: string;
    courses: Course[] = [];
    constructor(name: string, age: number, rollNumber: string) {
      super(name, age);
      this.rollNumber = rollNumber;
    }
    registerForCourse(course: Course) {
      // this.courses.push(course)
    }
  }
  class Instructor extends Person {
    private salary: number;
    courses: Course[] = [];
    constructor(name: string, age: number, salary: number) {
      super(name, age);
      this.salary = salary;
    }
    assignCourses(course: Course) {
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
    id: string;
    name: string;
    students: Student[] = [];
    instructor: Instructor[]=[];
    constructor(id: string, name: string) {
      this.id = id;
      this.name = name;
    }
    addStudent(student: Student) {
      this.students.push(student);
      student.registerForCourse(this)
          
      ;
    }
    setInstructor(instructor: Instructor) {
      this.instructor[]= instructor
      instructor.assignCourses(this)
      
      
    }
  }
  const instruct =new Instructor("Sir Zia", 60,100000)
  const course =new Course("PIAIC-5210","Saad Shamsi")

  

  
  
  const course1 = new Course("course-1", "Metaverse");
  course1.addStudent(student1);
  course1.addStudent(student2);
  course1.setInstructor(instructor1)
  const course2 = new Course("course-2", "BCC");
  console.log(course1.students);
  console.log(student1.courses);
  
  class Department {
      name:string
      courses:Course []=[]
      constructor(name:string){
          this.name=name
      }
      addCourse(course:Course){
          this.courses.push()
      }
  }
  const department1 = new Department("Computer Science")
  
  department1.addCourse(course1) 
  console.log(department1);
  
  