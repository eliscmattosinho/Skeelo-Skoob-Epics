export async function loadTasks() {
    try {
        console.log("Iniciando o carregamento das tarefas...");

        const response = await fetch(`${process.env.PUBLIC_URL || ''}/assets/tarefas.txt`);
        console.log("Resposta do fetch:", response);

        if (!response.ok) {
            console.error("Falha ao carregar o arquivo de tarefas.");
            return;
        }

        const text = await response.text();
        console.log("Tarefas carregadas do arquivo:", text);

        // Processando as tarefas
        const tasks = parseTasks(text);
        console.log("Tarefas processadas:", tasks);

        createTaskItems(tasks);
    } catch (error) {
        console.error('Erro ao carregar o arquivo de tarefas:', error);
    }
}

// Função para parsear o conteúdo do arquivo
function parseTasks(text) {
    console.log("Iniciando o parse das tarefas...");
    const tasks = [];

    const taskRegex = /Tarefa (\d+): (.*?)\n- Status: (.*?)\nDescrição: (.*?)(?=\nTarefa \d+:|$)/gs;
    let match;

    while ((match = taskRegex.exec(text)) !== null) {
        console.log("Match encontrado:", match);

        const title = match[2].trim();
        const status = match[3].trim();
        // const description = match[4].trim();

        tasks.push({ title, status});
    }

    console.log("Tarefas parseadas:", tasks);
    return tasks;
}

// Função para criar os itens nas colunas dinamicamente
function createTaskItems(tasks) {
    console.log("Iniciando a criação de itens nas colunas...");

    const statusToColumnId = {
        'A Fazer': 'a fazer',
        'Em Progresso': 'em progresso',
        'Concluído': 'concluído',
        'Backlog': 'backlog',
        'Sprint Backlog': 'sprint backlog',
        'Revisão': 'revisão'
    };

    tasks.forEach((task) => {
        console.log(`Criando item para a tarefa: ${task.title}, status: ${task.status}`);

        const taskElement = document.createElement('div');
        taskElement.classList.add('item', 'scrum-item');
        taskElement.setAttribute('draggable', 'true');
        taskElement.setAttribute('ondragstart', 'drag(event)');

        const taskTitle = document.createElement('h3');
        taskTitle.classList.add('item-title');
        taskTitle.textContent = task.title;
        taskElement.appendChild(taskTitle);

        const taskDescription = document.createElement('p');
        taskDescription.classList.add('item-description');
        taskDescription.textContent = task.description;
        taskElement.appendChild(taskDescription);

        const columnId = statusToColumnId[task.status];

        if (columnId) {
            const column = document.getElementById(columnId);
            if (column) {
                column.querySelector('.col-items').appendChild(taskElement);
            } else {
                console.error(`Coluna não encontrada para o status: ${task.status}`);
            }
        }
    });

    console.log("Itens criados nas colunas.");
}
