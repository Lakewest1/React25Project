import { useState } from "react";
import data from "../../assets/data";
import "./Accord.css";

const Accord = () => {
    // Make i create useste for single select//
    const [singleSelect, setSingleSelect] = useState(null);  // not using it until i call it in function
    // make i create usestate for multiple select//
    const [multipleSelect, setMultipleSelect] = useState(false); // not active when page loads //
    const [multiple, setMultiple] = useState([]);   // To store previously selected

    // Function for the single select//
    function handleSingleSelect(getCurrentId) {
        console.log(getCurrentId);
        setSingleSelect(getCurrentId === singleSelect ? null : getCurrentId);
    }

    function handleMultipleSelect(getCurrentId) {
        const cpyMultiple = [...multiple];
        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

        if (findIndexOfCurrentId === -1) {
            cpyMultiple.push(getCurrentId); // Add the ID if it doesn't exist
        } else {
            cpyMultiple.splice(findIndexOfCurrentId, 1); // Remove the ID if it exists
        }

        setMultiple(cpyMultiple);
    }

    console.log(multiple);

    return (
        <div className="Accordion">
            <button className="double-select" onClick={() => setMultipleSelect(!multipleSelect)}>
                Allow multiple selection
            </button>
            <div className="Accord">
                {
                    data && data.length > 0 ?
                        (
                            data.map((dataItem) => (
                                <div className="main" key={dataItem.id} onClick={ 
                                    multipleSelect
                                        ? () => handleMultipleSelect(dataItem.id)
                                        : () => handleSingleSelect(dataItem.id)
                                }>
                                    <h2>{dataItem.question}</h2>
                                    {
                                        // Display + or - depending on selection state//
                                        singleSelect === dataItem.id ? (
                                            <span>-</span>
                                        ) : (
                                            <span>+</span>
                                        )
                                    }
                                    {
                                        // Display the answer based on multiple or single select
                                        multipleSelect ? (
                                            multiple.includes(dataItem.id) && (
                                                <div className="answer-two">
                                                    <p>{dataItem.answer}</p>
                                                </div>
                                            )
                                        ) : (
                                            singleSelect === dataItem.id && (
                                                <div className="answer">
                                                    <p>{dataItem.answer}</p>
                                                </div>
                                            )
                                        )
                                    }
                                </div>
                            ))
                        ) :
                        (<div> No data was found </div>)
                }
            </div>
        </div>
    );
}

export default Accord;
