import { useEffect, useState } from "react";
import axios from "axios";
import divider from "./assets/pattern-divider-desktop.svg";
import diceImg from "./assets/icon-dice.svg";
import "./App.css";

const BASE_URL = "https://api.adviceslip.com/advice";

function App() {
    const [currentAdvice, setCurrentAdvice] = useState({});

    useEffect(() => {
        getAdvice();
    }, []);

    async function getAdvice() {
        const response = await axios.get(BASE_URL);

        setCurrentAdvice(response.data.slip);
    }

    return (
        <div className="App">
            <h1 className="advice__number">ADVICE #{currentAdvice.id}</h1>
            <div>
                <p className="advice__text">{`“${currentAdvice.advice}”`}</p>
                <div className="bottom__images">
                    <img src={divider} alt="divider" />
                    <span
                        onClick={getAdvice}
                        className="new__advice--btn"
                    >
                        <img src={diceImg} alt="dice icon" />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default App;
