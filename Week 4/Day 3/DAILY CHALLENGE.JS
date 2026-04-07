//Create a form with two fields (name,last name) and a submit button. When the user clicks the submit button.
//When you click the Send button, retrieve the data from the inputs, and append it on the DOM as a JSON string.
//The output should be like this: {"name":"John","lastName":"Doe"}

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form to JSON</title>
</head>
<body>
    <form id="userForm">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <br>
        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" required>
        <br>
        <button type="submit">Send</button>
    </form>

    <div id="output"></div>

    <script>
        document.getElementById('userForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting normally

            const name = document.getElementById('name').value;
            const lastName = document.getElementById('lastName').value;

            const userData = {
                name: name,
                lastName: lastName
            };

            const jsonString = JSON.stringify(userData);
            document.getElementById('output').textContent = jsonString; // Display the JSON string in the output div
        });
    </script>
</body>
</html> 



