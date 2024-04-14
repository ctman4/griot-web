document.getElementById('createUserForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const formData = new FormData(event.target);

    try {
        const response = await fetch('/create-user', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Failed to create user');
        }

        const result = await response.text();
        console.log(result); // Log response from server

        // Optionally, display a success message to the user
        alert('User created successfully!');
    } catch (error) {
        console.error('Error creating user:', error);
        // Optionally, display an error message to the user
        alert('Failed to create user. Please try again.');
    }
});
