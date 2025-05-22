import { useEffect, useRef, useState } from "react"

export default function Card({ title, question, answer, difficulty }) {
    const [flipped, setFlipped] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const handleClick = (event) => {
            if (cardRef.current && !cardRef.current.contains(event.target)) {
                setFlipped(false);
            }
        }

        window.addEventListener("click", handleClick);

        return () => {
            window.removeEventListener("click", handleClick)
        };
    }, []);

    return (
        <>
            <div 
                ref={cardRef}
                className={`question-container ${flipped ? "answer-container" : ""}`} onClick={() => setFlipped(prev => !prev)}
            >
                {flipped ? (
                    <>
                        <div className="answer-title">
                            <p className="answer-title-text">Answer:</p>
                            <p className={`difficulty-pill ${difficulty.toLowerCase()}`}>{difficulty}</p>
                        </div>
                        <h3 className="answer-question">{question}</h3>
                        <p className="answer-text">{answer}</p>
                    </>
                ) : (
                    <>
                        <p className="question-title">{title}</p>
                        <h3 className="question-text">{question}</h3>
                        <p className={`difficulty-pill ${difficulty.toLowerCase()}`}>{difficulty}</p>
                    </>
                )}
            </div>
        </>
    )
}