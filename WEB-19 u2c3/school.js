const school = {
    name: "XYZ School",
    establishYear: 1990,
    departments: {
      math: { teachers: 5, students: 150 },
      science: { teachers: 4, students: 120 },
      history: { teachers: 3, students: 100 },
      english: { teachers: 4, students: 130 },
    },
    courses: ["math", "science", "history", "english"],
    students: [
      {
        name: "Alice",
        className: "Grade 5",
        scores: { math: 95, science: 88, history: 85, english: 92 },
      },
      {
        name: "Bob",
        className: "Grade 4",
        scores: { math: 80, science: 78, history: 92, english: 85 },
      },
      {
        name: "Charlie",
        className: "Grade 5",
        scores: { math: 88, science: 90, history: 78, english: 88 },
      },
      {
        name: "Diana",
        className: "Grade 4",
        scores: { math: 92, science: 85, history: 88, english: 90 },
      },
    ],
  };
  
  // Problem 10: countCalculation
  const countCalculation = ({ departments: { math: { teachers: mathTeachersCount, students: mathStudentsCount }, history: { teachers: historyTeachersCount, students: historyStudentsCount } } }) => {
    return { mathTeachersCount, historyTeachersCount, mathStudentsCount, historyStudentsCount };
  };
  
  // Problem 11: findTopStudent
  const findTopStudent = (school, courseName) => {
    let topStudent = null;
    let maxScore = -1;
    school.students.forEach(student => {
      const score = student.scores[courseName];
      if (score > maxScore) {
        maxScore = score;
        topStudent = student;
      }
    });
    return topStudent;
  };
  
  // Problem 12: addNewDept
  const addNewDept = (school, newDepartment) => {
    const updatedDepartments = { ...school.departments, ...newDepartment };
    return { ...school, departments: updatedDepartments };
  };
  
  // Problem 13: highestStudentCountDepartment
  const highestStudentCountDepartment = (school) => {
    let highestCount = -1;
    let highestDept = '';
    for (const dept in school.departments) {
      if (school.departments.hasOwnProperty(dept)) {
        const studentsCount = school.departments[dept].students;
        if (studentsCount > highestCount) {
          highestCount = studentsCount;
          highestDept = dept;
        }
      }
    }
    return highestDept;
  };
  
  // Problem 14: Greeting Message
  const generateGreeting = (name, language = 'English') => {
    const greetings = {
      'English': Hello, ${name}!,
      'Spanish': iHola, ${name}!,
      'French': Bonjour, ${name}!
    };
    return greetings[language];
  };
  
  // Testing the functions
  console.log(countCalculation(school));
  console.log(findTopStudent(school, 'math'));
  console.log(addNewDept(school, { art: { teachers: 2, students: 50 } }));
  console.log(highestStudentCountDepartment(school));
  console.log(generateGreeting("Alice"));
  console.log(generateGreeting("Bob", "Spanish"));
  console.log(generateGreeting("Charlie", "French"));
