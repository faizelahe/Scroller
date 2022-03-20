class UI {
    async display(wonder) {
        let image = document.getElementById('img');
        let name = document.getElementById('name');
        let description = document.getElementById('description');
        let location = document.getElementById('location');

        image.src = wonder.imgURL;
        name.innerHTML = `Name: ${wonder.name}`;
        description.innerHTML = `Description: ${wonder.description}`;
        location.innerHTML = `Location: ${wonder.location}`;
    }
}