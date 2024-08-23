// fetch das minhas infos do git hub
fetch ('https://api.github.com/users/vitoriaellen03')
    .then(response => response.json())
    .then(data => {
        console.log(data)

        let myProfile = document.getElementById('username')
        console.log(myProfile)
        myProfile.innerHTML = data.name

        let myImage = document.getElementById('avatar')
        console.log(myImage)
        myImage.src = data.avatar_url
    })