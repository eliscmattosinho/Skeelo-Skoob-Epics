import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setupBoards } from "../scripts/boardsManipulation";
import { loadTasks } from "../scripts/tasksLoader";

import "../styles/App.css";
import "./Boards.css";
import svgBoard from "../assets/image-icons/svg-board.svg";
import { FaArrowCircleLeft } from "react-icons/fa";

function Boards() {
    const navigate = useNavigate();

    useEffect(() => {
        setupBoards();
        loadTasks();
    }, []);

    const allowDrop = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const data = event.dataTransfer.getData("text");
        const taskElement = document.getElementById(data);
        event.target.appendChild(taskElement);
    };

    return (
        <div className="content-block">
            <div id="general-content" className="content">
                <div className="back-button">
                    <button onClick={() => navigate("/")} className="back-btn">
                        <FaArrowCircleLeft />
                    </button>
                </div>

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
                        <img src={svgBoard} alt="" />
                    </div>
                </div>

                <div className="second-section-board">
                    <h3 id="h3-title">ExampleVar</h3>
                    <div className="tables-block">
                        <div id="kanban" className="board kanban-board">
                            <div className="col-board kanban-column" id="a fazer">
                                <div className="title-col-board">
                                    <h4 className="col-title-board todo">A Fazer</h4>
                                </div>
                                <div
                                    className="col-items kanban-items"
                                    onDrop={handleDrop}
                                    onDragOver={allowDrop}
                                >
                                </div>
                            </div>
                            <div className="col-board kanban-column" id="em progresso">
                                <div className="title-col-board">
                                    <h4 className="col-title-board progress">Em Progresso</h4>
                                </div>
                                <div
                                    className="col-items kanban-items"
                                    onDrop={handleDrop}
                                    onDragOver={allowDrop}
                                >
                                </div>
                            </div>
                            <div className="col-board kanban-column" id="concluído">
                                <div className="title-col-board">
                                    <h4 className="col-title-board done">Concluído</h4>
                                </div>
                                <div
                                    className="col-items kanban-items"
                                    onDrop={handleDrop}
                                    onDragOver={allowDrop}
                                >
                                </div>
                            </div>
                        </div>
                        <div id="scrum" className="board scrum-board">
                            <div className="col-board scrum-column" id="backlog">
                                <div className="title-col-board">
                                    <h4 className="col-title-board backlog">Backlog</h4>
                                </div>
                                <div
                                    className="col-items scrum-items"
                                    onDrop={handleDrop}
                                    onDragOver={allowDrop}
                                >
                                </div>
                            </div>
                            <div className="col-board scrum-column" id="sprint backlog">
                                <div className="title-col-board">
                                    <h4 className="col-title-board todo">Sprint Backlog</h4>
                                </div>
                                <div
                                    className="col-items scrum-items"
                                    onDrop={handleDrop}
                                    onDragOver={allowDrop}
                                >
                                </div>
                            </div>
                            <div className="col-board scrum-column" id="em progresso">
                                <div className="title-col-board">
                                    <h4 className="col-title-board progress">Em Progresso</h4>
                                </div>
                                <div
                                    className="col-items scrum-items"
                                    onDrop={handleDrop}
                                    onDragOver={allowDrop}
                                >
                                </div>
                            </div>
                            <div className="col-board scrum-column" id="revisão">
                                <div className="title-col-board review">
                                    <h4 className="col-title-board review">Revisão</h4>
                                </div>
                                <div
                                    className="col-items scrum-items"
                                    onDrop={handleDrop}
                                    onDragOver={allowDrop}
                                >
                                </div>
                            </div>
                            <div className="col-board scrum-column" id="concluído">
                                <div className="title-col-board">
                                    <h4 className="col-title-board done">Concluído</h4>
                                </div>
                                <div
                                    className="col-items scrum-items"
                                    onDrop={handleDrop}
                                    onDragOver={allowDrop}
                                >
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
