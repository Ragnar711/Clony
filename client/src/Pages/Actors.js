import React from "react";
import Axios from "redaxios";
import { useState, useEffect } from "react";
import Header from "../Components/Header";
import "./actors.css";

const Actors = () => {
    const [actors, setActors] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:8080/getActors")
            .then((response) => {
                setActors(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <div className="actorsLayout">
            <Header />
            <h1>Actors & Actresses</h1>
            <table>
                <thead>
                    <tr>
                        <th>Actors</th>
                        <th>Number of media</th>
                    </tr>
                </thead>
                <tbody>
                    {actors.map((item) => {
                        return (
                            <tr>
                                <td>{item.actor}</td>
                                <td>{item.movies_count}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Actors;

/*import React, { useState } from "react";
import { Table, Button, Dropdown } from "react-bootstrap";
import "./actors.css";

const Actors = () => {
    const [columns, setColumns] = useState([
        "column1",
        "column2",
        "column3",
        "column4",
        "column5",
    ]);
    const handlePDFDownload = () => {};
    const handleExcelDownload = () => {};
    const handleColumnSelect = (column) => {
        setColumns((prevColumns) => {
            const newColumns = [...prevColumns];
            const index = newColumns.indexOf(column);
            if (index > -1) {
                newColumns.splice(index, 1);
            } else {
                newColumns.push(column);
            }
            return newColumns;
        });
    };
    return (
        <>
            <div className="download-buttons">
                <Button onClick={handlePDFDownload} className="download-button">
                    Download PDF
                </Button>
                <Button
                    onClick={handleExcelDownload}
                    className="download-button"
                >
                    Download Excel
                </Button>
                <Dropdown>
                    <Dropdown.Toggle
                        variant="secondary"
                        className="column-toggle"
                    >
                        Columns
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {[
                            "column1",
                            "column2",
                            "column3",
                            "column4",
                            "column5",
                        ].map((col) => (
                            <Dropdown.Item
                                key={col}
                                className="columnDrop"
                                onClick={() => handleColumnSelect(col)}
                            >
                                {columns.includes(col) ? "Hide " : " Show "}{" "}
                                {col}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <Table className="table">
                <thead>
                    <tr>
                        {columns.map((col) => (
                            <th key={col}>{col}</th>
                        ))}
                    </tr>
                </thead>
                <tbody></tbody>
            </Table>
        </>
    );
};

export default Actors;*/
