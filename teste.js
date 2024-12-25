async function getData() {
    await fetch('https://api.github.com/users/jedin01').then(response => response.json()).then(data => console.log(data));
}

getData();