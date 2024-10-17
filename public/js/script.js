document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('login-btn');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const role = document.getElementById('role');

    function togglePassword() {
        const passwordField = document.getElementById('password');
        const toggleIcon = document.getElementById('toggleIcon');
        
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            toggleIcon.classList.remove('fa-eye');
            toggleIcon.classList.add('fa-eye-slash');
        } else {
            passwordField.type = 'password';
            toggleIcon.classList.remove('fa-eye-slash');
            toggleIcon.classList.add('fa-eye');
        }
    }

    function validateFields() {
        let isValid = true;

        if (!username.value) {
            document.getElementById('username-error').innerText = 'ต้องกรอก Username';
            isValid = false;
        } else {
            document.getElementById('username-error').innerText = '';
        }

        if (!password.value) {
            document.getElementById('password-error').innerText = 'ต้องกรอก Password';
            isValid = false;
        } else {
            document.getElementById('password-error').innerText = '';
        }

        if (!role.value) {
            document.getElementById('role-error').innerText = 'ต้องเลือกตำแหน่ง';
            isValid = false;
        } else {
            document.getElementById('role-error').innerText = '';
        }

        loginBtn.disabled = !isValid;
    }

    loginBtn.addEventListener('click', function() {
        const data = {
            "UserName": username.value,
            "PassWord": password.value
        };

        fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify2', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Application-Key': 'TUd3241960519d00017caa9c7f1297b94e8cef4d78466b03965656b3e9f983d95231a117db4c767cb1872e50dcb4f99cf1'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === true) {
                document.getElementById("displayname_th").textContent = data.displayname_th;
                document.getElementById("result").style.display = "block";
            } else {
                alert("Login failed: " + data.message);
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    });

    username.addEventListener('input', validateFields);
    password.addEventListener('input', validateFields);
    role.addEventListener('change', validateFields);
});
