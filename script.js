/*
Design a form for students to enter their information and get the evaluation results. Complete
the following functionalities using JavaScript.
 The student should first select his student status. Depending on the information
provided, different set of course titles should be presented.
 A student then should enter or select a letter grade (A, B, C, D, or F) for each course.
Use appropriate form controls to accept user inputs.
 After hitting the “Evaluate” button, the result (average grade) with a message should be
displayed right underneath the form.
 Use the rules of this course to convert letter grades to numeric point grades (e.g. A is
4.0, etc.).
 If the average grade requirement is met, display a congratulation message with
instructions to apply (linking to the application form page which will be in milestone
#3); if not, thank his/her interest (make up your own text) but do not show the
application form link
*/

//on click of student status -> display appropriate classes
//on click of evaluate button -> read inputs, convert letter grades, 
//  calculate average, display appropriate message for application 

function undergrad() {
    document.getElementById('undergradHide').style.display="block";
    document.getElementById('gradHide').style.display="none";
}
function grad() {
    document.getElementById('undergradHide').style.display="none";
    document.getElementById('gradHide').style.display="block";
}
function evaluateUnder(){
    var grade1 = parseFloat(document.getElementById('underClass1').value);
    var grade2 = parseFloat(document.getElementById('underClass2').value);
    var grade3 = parseFloat(document.getElementById('underClass3').value);
    var grade4 = parseFloat(document.getElementById('underClass4').value);
    var final = (grade1 + grade2 + grade3 + grade4)/4
    var result = document.getElementById('result');

    if(!final){
        alert('Please select a grade for each class');
    }

    else if (final < 3.2) {
    result.innerHTML = "Your GPA is " + final + ". Thank you for your interest in the undergraduate application. Sorry, you are inelibible to apply because your GPA does not meet the requirements.";
    }
    else {
    result.innerHTML = "Your GPA is " + final + ". You are eligible to apply for a student position. Please follow this link to the application.";
    document.getElementById("link").style.display="block";
}
}

function evaluateGrad(){
    var grade1 = parseFloat(document.getElementById('gradClass1').value);
    var grade2 = parseFloat(document.getElementById('gradClass2').value);
    var grade3 = parseFloat(document.getElementById('gradClass3').value);
    var grade4 = parseFloat(document.getElementById('gradClass4').value);
    var final = (grade1 + grade2 + grade3 + grade4)/4
    var result = document.getElementById('result');


    if(!final){
        alert('Please select a grade for each class');
    }
    else if (final < 3.2) {
    result.innerHTML = "Your GPA is " + final + ". Thank you for your interest in the graduate application. Sorry, you are inelibible to apply because your GPA does not meet the requirements.";
    }
    else {
    result.innerHTML = "Your GPA is " + final + ". You are eligible to apply for a student position. Please use the following link to complete the application.";
    document.getElementById("link").style.display="block";
}
}