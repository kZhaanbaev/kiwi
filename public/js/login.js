const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    //Make sure to add proper classes to handlebars file in order to make a proper query
    const username = document.querySelector('#usernameLogin').value.trim();
    const password = document.querySelector('#passwordLogin').value.trim();

  
    if (username && password) {
        document.location.replace('/');

        const greeting = document.getElementById('welcome');
        console.log(username.textContent)
        let welcome = document.createElement('h2');
        welcome.textContent = username.value;
        greeting.appendChild(welcome);
      } else {
        alert(response.statusText);
      }
};

  
const signupFormHandler = async (event) => {
    event.preventDefault();
  
        //Make sure to add proper classes to handlebars file in order to make a proper query

    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/homepage');
      } else {
        alert(response.statusText);
      }
    }
};
  
document
    //Make sure to add proper classes to handlebars file in order to make a proper query
    .querySelector('.loginForm')
    .addEventListener('submit', loginFormHandler);
  
document
    //Make sure to add proper classes to handlebars file in order to make a proper query
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);