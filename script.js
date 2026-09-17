const gradeForm = document.getElementById("GradeForm");
const result = document.getElementById("result");

const getGrade = (average) => {
    if (average => 70) {
        return "A";
    }
    else if (average => 60){
        return "B";
    }
    else if (average => 50){
        return "C";
    }
    else if (average => 40){
        return "D";
    }else {
        return "F";
    }
};

const calculateTotal = (marks) => {
    let total =0;
    for (const mark of marks) {
        total  += mark;
    }
    return total;
};

gradeForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    try{
        const studentName = document.getElementById("studentname").value;
        const programming = document.getElementById("programming").value;
        const mathematics = document.getElementById("mathematics").value;
        const networking = document.getElementById("networking").value;
        const database = document.getElementById("database").value;

        const marks = [programming, mathematics, networking, database];
        const total = calculateTotal(marks);
        const average = total / marks.length;
        const grade = getGrade(average);  
    }
    catch(error){
        console.error(error);
    }  

});