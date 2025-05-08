const registrationForm = document.getElementById('registrationForm')

let personRegistrations = []

function loadRegistrationsFromLocalStorage() {
    const storedRegistrations   = localStorage.getItem('userRegistrations')
    if(storedRegistrations  ) {
        personRegistrations = JSON.parse(storedRegistrations)
    }
}

function saveRegistrationsToLocalStorage() {
    // const stringJSON = JSON.stringify(personRegistrations)
    // localStorage.setItem('userRegistrations', stringJSON)

    localStorage.setItem('userRegistrations', JSON.stringify(personRegistrations));
}

document.addEventListener('DOMContentLoaded', () => { // Garante que o DOM está pronto
    loadRegistrationsFromLocalStorage();
    displayRegistrations(); // Exibe os dados carregados ou uma tabela vazia

    // Talvez chame showSection('register') ou 'display' aqui como estado inicial
    showSection('register')
});

registrationForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;
    
    const newPerson = regPerson(fullName, email, phone, address, city, state, zip)
    personRegistrations.push(newPerson)

    saveRegistrationsToLocalStorage()

    displayRegistrations()
    registrationForm.reset();
});


const regPerson = (fullName, email, phone, address, city, state, zip) => {
    return {
        fullName,
        email,
        phone,
        address,
        city,
        state,
        zip
    }
}

function displayRegistrations() {
    const tableBody = document.querySelector('#peopleTable tbody');

    tableBody.innerHTML = '';
    personRegistrations.forEach(person => {
        console.log(person)

        const row = document.createElement('tr');

        Object.values(person).forEach(value => {
            const cell = document.createElement('td')
            cell.textContent = value;
            row.appendChild(cell)
        }
        );

        tableBody.appendChild(row);
    });
}

function showSection(sectionId) {
    document.getElementById('register-form').style.display = sectionId === 'register' ? 'block' : 'none';
    document.getElementById('display-section').style.display = sectionId === 'display' ? 'block' : 'none';
}