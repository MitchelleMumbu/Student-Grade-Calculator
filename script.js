const gradeForm = document.getElementById("gradeForm");
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
        for(const mark of marks) {
            if(mark<0 || mark >100 || isNaN(mark)){
                throw new Error("Marks must be between 0 and 100");
            }
        }

        const total = calculateTotal(marks);
        const average = total / marks.length;
        const grade = getGrade(average)

        result.innerHTML = `
        <h2>Student  Results</h2>
        <p><strong>Name: <strong> ${studentName}</p>
        <p><strong>Programming: <strong> ${programming}</p>
        <p><strong>Mathematics: <strong> ${mathematics}</p> 
        <p><strong>Networking: <strong> ${networking}</p>
        <p><strong>Database: <strong> ${database}</p>
        <p><strong>Total Marks: <strong> ${total}</p>
        <p><strong>Average Marks: <strong> ${average}</p>
        <p><strong>Grade: <strong> ${grade}</p>
        `;
         console.log(`Results for ${studentName}`);
         console.log( `Total: ${total}, Average: ${average}, Grade: ${grade}`);
    }
    catch(error){
        result.innerHTML=`<p style="color:red;">Error: ${error.message}</p>`;
        console.error(error);
    }  

});