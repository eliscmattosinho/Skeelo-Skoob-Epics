import React, { useState, useEffect } from "react";
import { setupBoards } from "../scripts/boardsManipulation";

import "../styles/App.css";
import "./Boards.css";
import svgBoard from "../assets/image-icons/svg-board.svg";

function Boards() {
    useEffect(() => {
        setupBoards();
    }, []);

    return (
        <div className="content-block">
            <div id="general-content" className="content">
                <div className="first-section-board">
                    <div className="text-content-intro">
                        <div className="titles-content">
                            <h2 className="h2-board-page">Board de desenvolvimento</h2>
                            <h3 className="h3-board-page">Escolha sua opção de visualização.</h3>
                        </div>
                        <div className="btns-block">
                            <button id="b-kanban" className="btn btn-kanban">
                                <p className="btn-title">Kanban</p>
                            </button>
                            <button id="b-scrum" className="btn btn-scrum">
                                <p className="btn-title">Scrum</p>
                            </button>
                        </div>
                    </div>
                    <div className="img-block">
                        <img src={svgBoard} alt=""></img>
                    </div>
                </div>

                <div className="second-section-board">
                    <h3 id="h3-title">ExampleVar</h3>
                    <div className="tables-block">

                        {/* Kanban */}
                        <div id="kanban" className="board kanban-board">
                            <div className="col-board kanban-column" id="todo">
                                <div className="title-col-board">
                                    <h4 className="col-title-board todo">A Fazer</h4>
                                </div>
                                <div className="col-items kanban-items" ondrop="drop(event)" ondragover="allowDrop(event)">
                                    {/* Exemplo de tarefas para css */}
                                    <div className="item kanban-item" draggable="true" ondragstart="drag(event)" id="task1">
                                        <h3 className="item-title">Tarefa 1</h3>
                                    </div>
                                    <div className="item kanban-item" draggable="true" ondragstart="drag(event)" id="task2">
                                        <h3 className="item-title">Tarefa 2</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-board kanban-column" id="in-progress">
                                <div className="title-col-board">
                                    <h4 className="col-title-board progress">Em Progresso</h4>
                                </div>
                                <div className="col-items kanban-items" ondrop="drop(event)" ondragover="allowDrop(event)">
                                    {/* Tarefas em andamento */}
                                </div>
                            </div>
                            <div className="col-board kanban-column" id="done">
                                <div className="title-col-board">
                                    <h4 className="col-title-board done">Concluído</h4>
                                </div>
                                <div className="col-items kanban-items" ondrop="drop(event)" ondragover="allowDrop(event)">
                                    {/* Tarefas concluídas */}
                                </div>
                            </div>
                        </div>

                        {/* Scrum */}
                        <div id="scrum" className="board scrum-board">
                            {/* Backlog */}
                            <div className="col-board scrum-column" id="backlog">
                                <div className="title-col-board">
                                    <h4 className="col-title-board backlog">Backlog</h4>
                                </div>
                                <div className="col-items scrum-items" ondrop="drop(event)" ondragover="allowDrop(event)">
                                    <div className="item scrum-item" draggable="true" ondragstart="drag(event)" id="task-">
                                        <h3 className="item-title">História 1</h3>
                                    </div>
                                    <div className="item scrum-item" draggable="true" ondragstart="drag(event)" id="task-">
                                        <h3 className="item-title">História 2</h3>
                                    </div>
                                </div>
                            </div>
                            {/* Sprint Backlog*/}
                            <div className="col-board scrum-column" id="sprint-backlog">
                                <div className="title-col-board">
                                    <h4 className="col-title-board todo">Sprint Backlog</h4>
                                </div>
                                <div className="col-items scrum-items" ondrop="drop(event)" ondragover="allowDrop(event)">
                                    {/* Tarefas selecionadas para o Sprint */}
                                </div>
                            </div>
                            {/* Em Progresso */}
                            <div className="col-board scrum-column" id="in-progress">
                                <div className="title-col-board">
                                    <h4 className="col-title-board progress">Em Progresso</h4>
                                </div>
                                <div className="col-items scrum-items" ondrop="drop(event)" ondragover="allowDrop(event)">
                                    {/* Tarefas em andamento */}
                                </div>
                            </div>
                            {/* Revisão */}
                            <div className="col-board scrum-column" id="review">
                                <div className="title-col-board review">
                                    <h4 className="col-title-board review">Revisão</h4>
                                </div>
                                <div className="col-items scrum-items" ondrop="drop(event)" ondragover="allowDrop(event)">
                                    {/* Tarefas em revisão */}
                                </div>
                            </div>
                            {/* Concluído */}
                            <div className="col-board scrum-column" id="done">
                                <div className="title-col-board">
                                    <h4 className="col-title-board done">Concluído</h4>
                                </div>
                                <div className="col-items scrum-items" ondrop="drop(event)" ondragover="allowDrop(event)">
                                    {/* Tarefas finalizadas */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Boards;
