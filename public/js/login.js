const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    //Make sure to add proper classes to handlebars file in order to make a proper query
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the homepage page
        document.location.replace('/homepage');
      } else {
        alert(response.statusText);
      }
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
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
  document
    //Make sure to add proper classes to handlebars file in order to make a proper query
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);