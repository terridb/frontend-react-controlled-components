import './App.css';
import {useState} from "react";


function App() {
    const [state, setState] = useState({
        name: "",
        age: 0,
        remarks: "",
        newsletter: false
    })

    function handleSubmit(e) {
        e.preventDefault();
        console.log(state);
    }

    function handleChange(e) {
        const value =
            e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        });
    }

    return (
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Gegevens</legend>
                    <label htmlFor="name-field">Naam:
                        <input
                            type="text"
                            name="name"
                            value={state.name}
                            id="name-field"
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="age-field">
                        Leeftijd:
                        <input
                            type="number"
                            name="age"
                            id="age-field"
                            value={state.age}
                            onChange={handleChange}
                        />
                    </label>
                </fieldset>
                <fieldset>
                    <legend>Jouw review:</legend>
                    <label htmlFor="remark-field">
                        Opmerkingen:
                        <textarea
                            name="remarks"
                            id="remark-field"
                            rows="4"
                            cols="40"
                            placeholder="Wat vond je van het recept?"
                            value={state.remarks}
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="newsletter-field">
                        <input
                            type="checkbox"
                            name="newsletter"
                            id="newsletter-field"
                            checked={state.newsletter}
                            onChange={handleChange}
                        />
                        Ik schrijf me in voor de nieuwsbrief
                    </label>
                    <button type="submit">
                        Versturen
                    </button>
                </fieldset>
            </form>
    );
}

export default App;
