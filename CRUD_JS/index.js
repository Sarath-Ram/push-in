<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="C:\Users\vimala\Desktop\CRUD_JS\index.css">
        <title>Input Page</title>
    </head>
    <body>
        <h2>CRUD APPLICATION</h2>
        <form id="inputForm">
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name" required><br><br>
        
            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email" required><br><br>
        
            <label for="message">Message:</label><br>
            <textarea id="message" name="message" required></textarea><br><br>
        
            <button type="reset" onclick="resetForm()">Reset</button>
            <button type="button" onclick="submitForm()">Submit</button>
        </form>

        <script>
            function submitForm() {
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const message = document.getElementById('message').value;

                localStorage.setItem('name', name);
                localStorage.setItem('email', email);
                localStorage.setItem('message', message);

                window.location.href = 'output.html';

            }
        </script>
</body>
</html>
