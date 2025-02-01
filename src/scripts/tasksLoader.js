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

        updateColumnTaskCount();
        updateTotalTaskCount();
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

function createTaskItems(tasks) {
    console.log("Iniciando a criação de itens nas colunas...");

    const mappings = {
        kanban: {
            'A Fazer': 'to-do',
            'Em Progresso': 'k-in-progress',
            'Concluído': 'k-done',
            'Backlog': 'to-do',
            'Sprint Backlog': 'to-do',
            'Revisão': 'k-in-progress'
        },
        scrum: {
            'A Fazer': 'backlog',
            'Backlog': 'backlog',
            'Sprint Backlog': 'sprint-backlog',
            'Em Progresso': 's-in-progress',
            'Revisão': 'review',
            'Concluído': 's-done'
        }
    };

    // Limpar colunas antes de adicionar novos elementos
    document.querySelectorAll('.col-items').forEach(column => column.innerHTML = '');

    // Função para criar um card único
    function createTaskElement(task) {
        const taskElement = document.createElement('div');
        taskElement.classList.add('item', 'task-item');
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

        return taskElement;
    }

    tasks.forEach((task) => {
        console.log(`Criando item para a tarefa: ${task.title}, status: ${task.status}`);

        // Função para adicionar tarefa na coluna de Kaban ou Scrum
        function addTaskToColumn(mapping, platform) {
            const columnId = mapping[task.status];
            if (columnId) {
                const column = document.getElementById(columnId);
                if (column) {
                    column.querySelector('.col-items').appendChild(createTaskElement(task));
                } else {
                    console.error(`Coluna ${platform} não encontrada para o status: ${task.status}`);
                }
            }
        };

        addTaskToColumn(mappings.kanban, 'Kanban');
        addTaskToColumn(mappings.scrum, 'Scrum');
    });

    console.log("Itens criados nas colunas.");
}

function updateColumnTaskCount() {
    document.querySelectorAll('.col-board').forEach(column => {
        const titleElement = column.querySelector('.col-title-board');
        const itemsContainer = column.querySelector('.col-items');

        if (titleElement && itemsContainer) {
            const taskCount = itemsContainer.children.length;

            // Verifica se já existe um contador e atualiza
            let counterSpan = titleElement.querySelector('.task-counter');
            if (!counterSpan) {
                counterSpan = document.createElement('span');
                counterSpan.classList.add('task-counter');
                titleElement.appendChild(counterSpan);
            }
            
            counterSpan.textContent = ` (${taskCount})`;
        }
    });
}

function updateTotalTaskCount() {
    let totalTaskCount = 0;

    // Encontra o board ativo
    const activeBoard = document.querySelector('.board.active');
    
    if (activeBoard) {
        activeBoard.querySelectorAll('.col-items').forEach(column => {
            totalTaskCount += column.children.length;
        });

        const h3Title = document.getElementById('h3-title');
        if (h3Title) {
            // Vê se já existe um span com o contador e atualiza ou cria um novo
            let counterSpan = h3Title.querySelector('.task-counter');
            if (!counterSpan) {
                // Criar um novo span caso não exista
                counterSpan = document.createElement('span');
                counterSpan.classList.add('task-counter');
                h3Title.appendChild(counterSpan);
            }

            counterSpan.textContent = ` (${totalTaskCount})`;
        }
    } else {
        console.error('Board ativo não encontrado.');
    }
}

