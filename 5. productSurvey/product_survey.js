function submitFeedback() {
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    const experience = document.getElementById('userExperince').value;

    const submitButton=document.getElementById('submitBtn');

    submitButton.onclick =  () => {
         document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;
    document.getElementById('userExperinceOutput').innerHTML = experience;
        alert('Thank you for your valuable feedback')
        document.getElementById('userInfo').style.display = 'block';
    }

   
}

document.getElementById('submitBtn').addEventListener('click', submitFeedback);

document.addEventListener('keydown', function(e){
    if (e.key === 'Enter'){
        submitFeedback()
    }
})