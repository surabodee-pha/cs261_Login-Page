function submitLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById("role").value;

    fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Application-key': 'TUd3241960519d00017caa9c7f1297b94e8cef4d78466b03965656b3e9f983d95231a117db4c767cb1872e50dcb4f99cf1'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('message').innerText = data.message;
    })
    .catch(error => console.error('Error:', error));
}




function call_REST_API_Hello() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const url = (
        'http://localhost:8080/hello?' +
        new URLSearchParams({ myName: username, lastName: password}).toString()
      );
    
    fetch(url)
    .then(data => {
        document.getElementById('message').innerText = data.message;
    })
    .catch(error => console.error('Error:', error));
}
