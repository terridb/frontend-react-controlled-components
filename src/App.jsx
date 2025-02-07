import './App.css';
import {useState} from "react";

function App() {
    const [nameValue, setNameValue] = useState('');
    const [ageValue, setAgeValue] = useState(0);
    const [remarkValue, setRemarkValue] = useState('');
    const [newsletterValue, setNewsletterValue] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(nameValue, ageValue, remarkValue, newsletterValue);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Gegevens</legend>
                    <label htmlFor="name-field">Naam:
                        <input type="text" name="name" value={nameValue} id="name-field"
                        onChange={(e) => setNameValue(e.target.value)}/>
                    </label>
                    <label htmlFor="age-field">Leeftijd:
                        <input type="number" name="age" id="age-field" value={ageValue}
                        onChange={(e) => setAgeValue(parseInt(e.target.value))}/>
                    </label>
                </fieldset>
                <fieldset>
                    <legend>Jouw review:</legend>
                    <label htmlFor="remark-field">Opmerkingen:
                        <textarea name="remarks" id="remark-field" rows="4" cols="40"
                                  placeholder="Wat vond je van het recept?" value={remarkValue}
                                  onChange={(e) => setRemarkValue(e.target.value)}
                        />
                    </label>
                    <label htmlFor="newsletter-field">
                        <input type="checkbox" name="newsletter" id="newsletter-field" checked={newsletterValue}
                        onChange={(e) => setNewsletterValue(e.target.checked)}
                        />
                        Ik schrijf me in voor de nieuwsbrief
                    </label>
                    <button type="submit">Versturen</button>
                </fieldset>

            </form>
        </div>
    );
}

export default App;
