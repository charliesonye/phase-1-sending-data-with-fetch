// Add your code here
function submitData(name, email) {

   const postingObj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify({
        name: `${name}`,
        email: `${email}`
    })

    }
     return fetch('http://localhost:3000/users', postingObj)
        .then(resp => resp.json())
        .then(obj => {
            const newId = obj.id
            document.querySelector('body').append(newId)
        })
    .catch(function(error){
        const errorMessage = error.message
        document.querySelector('body').append(errorMessage)
    })
    
}

submitData()