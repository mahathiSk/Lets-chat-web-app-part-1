function Start() {
    name_1 =document.getElementById("User_name").value;

    localStorage.setItem("name_1",name_1); 

    window.location ="kwitter_room.html";
}