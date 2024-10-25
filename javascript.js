document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const number = document.getElementById("email").value;
    const password = document.getElementById("text").value;

    console.log("Name:", name);
    console.log("Email:", number);
    console.log("Text:", password);

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("text").value = "";

    
});