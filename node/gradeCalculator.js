//Import the readline module to read input from the console
const readline = require("readline");
//Create an interface for terminal input and output
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
//Function to calculate the grade based on average marks
const getGrade = (average)=>{
    if(average >= 70){
        return "A";
    }
    else if (average >= 60){
        return "B";     
    } 
    else if (average >= 50){
        return "C";     
    } 
    else if (average >= 40){
        return "D";     
    } 
    else {
        return "F";     
    } 
};
//Function to calculate the total marks from an array of marks
const calculateTotal = (marks) => {
    let total = 0;  
    for (const mark of marks) {
        total += mark;  
    }   
    return total;
};
//Ask for the student's name and marks for each subject, then calculate and display the results
r1.question("Enter student name: ",(studentName)=>{
    try{
        r1.question("Enter Proramming mark: ",(programmingInput)=> {
            r1.question("Enter Mathematics mark: ",(mathematicsInput)=>{
                r1.question("Enter Networking mark: ",(networkingInput)=>{
                    r1.question("Enter Database mark: ",(databaseInput)=>{

                        const programming = Number(programmingInput);
                        const mathematics = Number(mathematicsInput);
                        const networking = Number(networkingInput);
                        const database = Number(databaseInput);

                        const marks=[programming,mathematics,networking,database];

                        for(const mark of marks){
                            if(isNaN(mark) || mark < 0 || mark > 100 ){
                                throw new Error("Marks must be numbers between 0 and 100.");
                            }
                        }
                            const total = calculateTotal(marks);
                            const average = total / marks.length;
                            const grade = getGrade(average);

                            console.log(`Results for ${studentName}`);
                            console.log('\n****************************************\n');
                            console.log(`Name: ${studentName}`);
                            console.log(`Programming: ${programming}`);
                            console.log(`Mathematics: ${mathematics}`);
                            console.log(`Networking: ${networking}`);
                            console.log(`Database: ${database}`);
                            console.log(`Total Marks: ${total}`);
                            console.log(`Average Marks: ${average}`);
                            console.log(`Grade: ${grade}`);
                            console.log('\n****************************************\n');
                            r1.close(); 
                    });
                });
            });
        });
    }
    catch(error){
        console.error("Error:", error.message);
        r1.close();
    }
});