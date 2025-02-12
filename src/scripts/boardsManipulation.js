// Setagem de visualização dos boards
export function setupBoards() {
    const kanbanButton = document.getElementById("b-kanban");
    const scrumButton = document.getElementById("b-scrum");
    const kanbanBoard = document.getElementById("kanban");
    const scrumBoard = document.getElementById("scrum");
    const titleElement = document.getElementById("h3-title");

    // Kanban por padrão
    setActiveBoard(kanbanBoard, kanbanButton, "Kanban");

    kanbanButton.addEventListener("click", () => setActiveBoard(kanbanBoard, kanbanButton, "Kanban"));
    scrumButton.addEventListener("click", () => setActiveBoard(scrumBoard, scrumButton, "Scrum"));

    // Função para ativar o board selecionado
    function setActiveBoard(activeBoard, activeButton, boardName) {
        const inactiveBoard = activeBoard === kanbanBoard ? scrumBoard : kanbanBoard;
        const inactiveButton = activeButton === kanbanButton ? scrumButton : kanbanButton;

        activeBoard.classList.add("active");
        activeButton.classList.add("active");

        inactiveBoard.classList.remove("active");
        inactiveButton.classList.remove("active");

        // Atualiza o título
        updateBoardTitle(boardName);
    }

    // Função para atualizar o título sem afetar o contador de tarefas
    function updateBoardTitle(boardName) {
        const counterSpan = titleElement.querySelector('.task-counter');
        const currentTitle = titleElement.textContent.split(' (')[0];

        titleElement.textContent = `${boardName}`;

        // Se já houver um contador, preserva ele
        if (counterSpan) {
            titleElement.appendChild(counterSpan);
        }
    }
}


  

  