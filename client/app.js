fetch("http://localhost:3000/meals")
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
});

