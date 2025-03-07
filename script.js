function showLogin() {
    let name = document.getElementById('name').value.trim();
    let age = document.getElementById('age').value;
    let gender = document.querySelector('input[name="gender"]:checked');

    if (!name || age === '' || !gender) {
        alert('Please fill all fields.');
        return;
    }

    let userType = prompt('Enter User Type (Admin/Student/Guest):');
    if (!userType) return;
    userType =
        userType.trim().charAt(0).toUpperCase() +
        userType.slice(1).toLowerCase();

    let password = prompt('Enter Password:');
    if (!password) return;

    let users = {
        Admin: 'Admin123',
        Student: 'Student123',
        Guest: 'Guest123',
    };

    if (users[userType] && users[userType] === password) {
        alert(
            `Welcome ${userType}!\nHere are your details:\nName: ${name}\nAge: ${age}\nGender: ${gender.value}`
        );
    } else {
        alert('User not found! Incorrect login details.');
    }
}