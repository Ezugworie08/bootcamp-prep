let classRoom = [
    {
        "Marnie" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : true},
                {"Thursday" : true},
                {"Friday" : true}
            ]
    },
    {
        "Lena" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : true},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    },
    {
        "Shoshanna" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : false},
                {"Thursday" : true},
                {"Friday" : false}
            ]
    },
    {
        "Jessa" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : false},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    }
];

// YOUR CODE BELOW

function attendanceCheck(weekDay) {
    let studentsInAttendance = [];
    const len = classRoom.length;

    for (let i = 0; i < len; i++) {
        student = classRoom[i];
        for (let person in student) {
            let weekLen = student[person].length;
           for (let j = 0; j < weekLen; j++) {
               let inClass = student[person][j][weekDay]
               if (inClass) {
                   studentsInAttendance.push(person)
               }
           }

        }

    }
    return studentsInAttendance;
}