
// Setagem de visualização dos boards
export function setupBoards() {
    const kanbanButton = document.getElementById("b-kanban");
    const scrumButton = document.getElementById("b-scrum");
    const kanbanBoard = document.getElementById("kanban");
    const scrumBoard = document.getElementById("scrum");

    // Kanban por padrão
    kanbanBoard.classList.add("active");
    kanbanButton.classList.add("active");

    kanbanButton.addEventListener("click", function () {
        kanbanBoard.classList.add("active");
        scrumBoard.classList.remove("active");

        kanbanButton.classList.add("active");
        scrumButton.classList.remove("active");
    });

    scrumButton.addEventListener("click", function () {
        scrumBoard.classList.add("active");
        kanbanBoard.classList.remove("active");

        scrumButton.classList.add("active");
        kanbanButton.classList.remove("active");
    });
}
