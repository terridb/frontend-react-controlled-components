import './App.css';

function App() {
    return (
        <div>
            <form>
                <fieldset>
                    <legend>Gegevens</legend>
                    <label htmlFor="name-field">Naam:
                        <input type="text" name="name" id="name-field"/>
                    </label>
                    <label htmlFor="age-field">Leeftijd:
                        <input type="number" name="age" id="age-field" value="0"/>
                    </label>
                </fieldset>
                <fieldset>
                    <legend>Jouw review:</legend>
                    <label htmlFor="remark-field">Opmerkingen:
                        <textarea name="remarks" id="remark-field" rows="4" cols="40"
                                  placeholder="Wat vond je van het recept?"/>
                    </label>
                    <label htmlFor="newsletter-field">
                        <input type="checkbox" name="newsletter" id="newsletter-field"/>
                        Ik schrijf me in voor de nieuwsbrief
                    </label>
                    <button type="submit">Versturen</button>
                </fieldset>

            </form>
        </div>
    );
}

export default App;
