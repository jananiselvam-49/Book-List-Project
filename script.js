const mainform1 = document.getElementById("mainform1");
const update = document.getElementById("update");
mainform1.addEventListener("submit", function (e) {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const genre = document.getElementById("genre").value;
    const newrow = document.createElement('tr')
    newrow.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${genre}</td>
    <td><button onClick=deleteRow(this) id="deletebut">Delete</button></td>`;
    update.appendChild(newrow);
    mainform1.reset();
}
);
function deleteRow(button){
    button.parentElement.parentElement.remove();

};