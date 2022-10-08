import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { IoTrashOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const EditFlashcard = () => {
    let navigate = useNavigate();
    const [flashCardsTitle, setFlashCardsTitle] = useState("");
    const [cards, setCards] = useState([]);

    const handleAddFlashcard = () => {
        setCards([...cards, { japaneseWord: "", vietnameseWord: "" }]);
    };

    const onChangeVNInputContent = (e, index) => {
        console.log(e.target.value, index);
        const temp = [...cards];
        temp[index].vietnameseWord = e.target.value;
        setCards(temp);
    };

    const onChangeJPInputContent = (e, index) => {
        console.log(e.target.value, index);
        const temp = [...cards];
        temp[index].japaneseWord = e.target.value;
        setCards(temp);
    };

    const handleDeleteFlashcard = (idx) => {
        const temp = [...cards];
        setCards(temp.filter((card, index) => index !== idx));
    };

    const handleSubmit = () => {
        console.log(flashCardsTitle);
        console.log(cards);
        navigate("/my_library");
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
            }}
        >
            <div
                className="d-flex"
                style={{
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <h2>Edit Flashcard</h2>
                <div>
                    <Button
                        variant="primary"
                        disabled={false}
                        onClick={handleAddFlashcard}
                    >
                        Add Flashcard
                    </Button>
                    <Button
                        variant="primary"
                        disabled={false}
                        style={{ marginRight: "16px", marginLeft: "16px" }}
                        onClick={handleSubmit}
                    >
                        Save
                    </Button>
                    <Button
                        variant="secondary"
                        disabled={false}
                        onClick={() => navigate("/flashcard")}
                    >
                        Cancel
                    </Button>
                </div>
            </div>
            <Form.Group
                controlId="formBasicQuestionTitle"
                className="d-flex"
                style={{
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Form.Label>Title </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Flashcards title"
                    value={flashCardsTitle}
                    onChange={(e) => setFlashCardsTitle(e.target.value)}
                />
            </Form.Group>

            {/* questions */}
            {cards.map((card, index) => (
                <Form
                    key={index}
                    style={{
                        display: "flex",
                        gap: "12px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderRadius: "8px",
                        border: "1px solid #ccc",
                        padding: "16px",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "12px",
                            flex: 1,
                        }}
                    >
                        <Form.Group
                            className="d-flex"
                            style={{
                                justifyContent: "space-between",
                                alignItems: "center",
                                gap: "8px",
                            }}
                        >
                            <Form.Label>Vietnamese: </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Vietnamesese"
                                value={card.vietnameseWord}
                                onChange={(e) =>
                                    onChangeVNInputContent(e, index)
                                }
                            />
                        </Form.Group>
                        <Form.Group
                            className="d-flex"
                            style={{
                                justifyContent: "space-between",
                                alignItems: "center",
                                gap: "8px",
                            }}
                        >
                            <Form.Label>Japanese: </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Japanese"
                                value={card.japaneseWord}
                                onChange={(e) =>
                                    onChangeJPInputContent(e, index)
                                }
                            />
                        </Form.Group>
                    </div>
                    <IoTrashOutline
                        size={24}
                        onClick={() => handleDeleteFlashcard(index)}
                    />
                </Form>
            ))}
        </div>
    );
};

export default EditFlashcard;
