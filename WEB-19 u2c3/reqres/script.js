document.getElementById('fetchUsersButton').addEventListener('click', fetchUsers);

function fetchUsers() {
    fetch('https://reqres.in/api/users')
        .then(response => response.json())
        .then(data => {
            displayUsers(data.data);
        })
        .catch(error => {
            console.error('Error fetching users:', error);
        });
}

function displayUsers(users) {
    const usersContainer = document.getElementById('usersContainer');
    usersContainer.innerHTML = '';

    users.forEach(user => {
        const userElement = document.createElement('div');
        userElement.classList.add('user');

        const avatar = document.createElement('img');
        avatar.src = user.avatar;
        avatar.alt = 'User Avatar';

        const name = document.createElement('p');
        name.textContent = Name: ${user.first_name} ${user.last_name};

        const email = document.createElement('p');
        email.textContent = Email: ${user.email};

        userElement.appendChild(avatar);
        userElement.appendChild(name);
        userElement.appendChild(email);

        usersContainer.appendChild(userElement);
    });
}