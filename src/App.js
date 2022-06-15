
function App() {
    formSubmit.addEventListener('click', submit)

    const register = []

    function submit() {
        let firstName = document.querySelector('#formFirstName').value
        let lastName = document.querySelector('#formLastName').value
        let weight = document.querySelector('#formWeight').value
        let height = document.querySelector('#formHeight').value
        let results = document.querySelector('#results')

        results.innerHTML += `
                <p> Nome: ${firstName} </p> <br>
                <p> Sobrenome: ${lastName} </p> <br>
                <p> Peso: ${weight} </p> <br>
                <p> Altura: ${height} </p> <br>
            `

        register.push({
            nome: firstName,
            sobrenome: lastName,
            peso: weight,
            altura: height,
        })

        console.log(register)
    }
}

App()