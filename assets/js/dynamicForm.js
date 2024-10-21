
    let questionCount = 1;

    function addMoreQuestions() {
        // Increment questionCount for each new question
        questionCount++;

        
        // Create a new form row
        var newFormRow = document.createElement('div');
        newFormRow.className = 'form-row align-items-start';

        // Create the first form group (select element for question number)
        var formGroup1 = document.createElement('div');
        formGroup1.className = 'form-group col-md-2 pr-md-1 align-items-end';

        var selectElement = document.createElement('select');
        selectElement.className = 'custom-select borderpx-4 align-items-end';
        selectElement.style.height = '100%';

        var optionElement = document.createElement('option');
        optionElement.text = 'ข้อที่';
        optionElement.selected = true;

        var optionValueElement = document.createElement('option');
        optionValueElement.value = questionCount.toString();
        optionValueElement.text = 'ข้อที่ ' + questionCount;

        selectElement.appendChild(optionElement);
        selectElement.appendChild(optionValueElement);

        formGroup1.appendChild(selectElement);

        // Create the second form group (text input element for question)
        var formGroup2 = document.createElement('div');
        formGroup2.className = 'form-group col-md-10 pl-md-1 align-items-end';
        formGroup2.style.height = '100%';

        var customFileDiv = document.createElement('div');
        customFileDiv.className = 'custom-file';

        var inputElement = document.createElement('input');
        inputElement.type = 'text';
        inputElement.className = 'form-control';
        inputElement.placeholder = 'กรอกโจทย์';
        inputElement.required = true;
        inputElement.setAttribute('data-validation-required-message', 'Please enter your question');

        var helpBlockElement = document.createElement('p');
        helpBlockElement.className = 'help-block text-danger';

        customFileDiv.appendChild(inputElement);
        customFileDiv.appendChild(helpBlockElement);
        formGroup2.appendChild(customFileDiv);

        // Create the third form group (text input element for answer A)
        var formGroup3 = document.createElement('div');
        formGroup3.className = 'control-group';

        var answerAElement = document.createElement('input');
        answerAElement.type = 'text';
        answerAElement.className = 'form-control';
        answerAElement.id = 'answerA';
        answerAElement.placeholder = 'A. กรอกตัวเลือกคำตอบที่ 1';
        answerAElement.required = true;
        answerAElement.setAttribute('data-validation-required-message', 'Please enter your answer A');

        var helpBlockAnswerAElement = document.createElement('p');
        helpBlockAnswerAElement.className = 'help-block text-danger';

        formGroup3.appendChild(answerAElement);
        formGroup3.appendChild(helpBlockAnswerAElement);

        // Create the fourth form group (text input element for answer B)
        var formGroup4 = document.createElement('div');
        formGroup4.className = 'control-group';

        var answerBElement = document.createElement('input');
        answerBElement.type = 'text';
        answerBElement.className = 'form-control';
        answerBElement.id = 'answerB';
        answerBElement.placeholder = 'B. กรอกตัวเลือกคำตอบที่ 2';
        answerBElement.required = true;
        answerBElement.setAttribute('data-validation-required-message', 'Please enter your answer B');

        var helpBlockAnswerBElement = document.createElement('p');
        helpBlockAnswerBElement.className = 'help-block text-danger';

        formGroup4.appendChild(answerBElement);
        formGroup4.appendChild(helpBlockAnswerBElement);

        // Create the fifth form group (select element for correct answer)
        var formGroup5 = document.createElement('div');
        formGroup5.className = 'form-group col-md-6 pr-md-1 align-items-end';

        var selectCorrectAnswer = document.createElement('select');
        selectCorrectAnswer.className = 'custom-select borderpx-4 align-items-end';
        selectCorrectAnswer.style.height = '100%';

        var optionCorrectAnswer = document.createElement('option');
        optionCorrectAnswer.text = 'เฉลย';
        optionCorrectAnswer.selected = true;

        var optionCorrectAnswerA = document.createElement('option');
        optionCorrectAnswerA.value = 'A';
        optionCorrectAnswerA.text = 'A';

        var optionCorrectAnswerB = document.createElement('option');
        optionCorrectAnswerB.value = 'B';
        optionCorrectAnswerB.text = 'B';

        selectCorrectAnswer.appendChild(optionCorrectAnswer);
        selectCorrectAnswer.appendChild(optionCorrectAnswerA);
        selectCorrectAnswer.appendChild(optionCorrectAnswerB);

        formGroup5.appendChild(selectCorrectAnswer);

        // Create the sixth form group (file input)
        var formGroup6 = document.createElement('div');
        formGroup6.className = 'form-group col-md-6 pl-md-1 align-items-end';

        var customFileDiv2 = document.createElement('div');
        customFileDiv2.className = 'custom-file';

        var inputElementFile = document.createElement('input');
        inputElementFile.type = 'file';
        inputElementFile.className = 'custom-file-input';
        inputElementFile.id = 'fileInput' + questionCount; // Use a unique ID for each file input
        inputElementFile.setAttribute('aria-describedby', 'fileInputAddon' + questionCount); // Use a unique ID for aria-describedby

        var labelFileElement = document.createElement('label');
        labelFileElement.className = 'custom-file-label';
        labelFileElement.setAttribute('for', 'fileInput' + questionCount);
        labelFileElement.innerText = 'เลือกไฟล์...';

        customFileDiv2.appendChild(inputElementFile);
        customFileDiv2.appendChild(labelFileElement);
        formGroup6.appendChild(customFileDiv2);

        var formGroup7 = document.createElement('div');
        formGroup7.className = 'd-flex justify-content-center';

        var btnSave = document.createElement('a');
        btnSave.href = ''; // Add your save button link
        btnSave.className = 'btn btn-primary px-5 my-2 mr-2';
        btnSave.innerText = 'บันทึก';

        var btnEdit = document.createElement('a');
        btnEdit.href = ''; // Add your edit button link
        btnEdit.className = 'btn btn-secondary px-5 my-2 mr-2';
        btnEdit.innerText = 'แก้ไข';

        var btnDelete = document.createElement('a');
        btnDelete.href = ''; // Add your delete button link
        btnDelete.className = 'btn btn-danger px-5 my-2';
        btnDelete.innerText = 'ลบ';

        formGroup7.appendChild(btnSave);
        formGroup7.appendChild(btnEdit);
        formGroup7.appendChild(btnDelete);


        // Append form groups to the form row
        newFormRow.appendChild(formGroup1);
        newFormRow.appendChild(formGroup2);
        newFormRow.appendChild(formGroup3);
        newFormRow.appendChild(formGroup4);
        newFormRow.appendChild(formGroup5);
        newFormRow.appendChild(formGroup6);
        newFormRow.appendChild(formGroup7);
        // ... (Add code for additional form groups like buttons)


    // Clone the newFormRow
    var clonedFormRow = newFormRow.cloneNode(true);

    // Append the cloned form row to the existing form
    var existingForm = document.getElementById('contactForm');
    existingForm.appendChild(clonedFormRow);

    // Move the "เพิ่มจำนวนข้อแบบฝึกหัด" link to the end of the form
    var addQuestionLink = document.getElementById('addQuestionLink');
    existingForm.appendChild(addQuestionLink);
}
  
