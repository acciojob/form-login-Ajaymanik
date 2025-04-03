function getFormvalue() {
    let form = document.querySelector('form'); // Select the form

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        let fname = document.querySelector('[name="fname"]').value.trim(); // Get first name and trim spaces
        let lname = document.querySelector('[name="lname"]').value.trim(); // Get last name and trim spaces

        if (fname === "" || lname === "") {
            alert("Please enter both First Name and Last Name.");
        } else {
            alert(`${fname} ${lname}`);
        }
    });
}
