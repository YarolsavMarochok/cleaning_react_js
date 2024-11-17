import "./style/footer.css";

export default function Footer(){
    return (
        <div className="footer">
            <div className="column">
                <h3>Contact us: </h3>
                <ul>
                    <li>Name Surname</li>
                    <li>Telefon: +421 999 999 99</li>
                    <li>Email: email@gmail.com</li>
                    <li>Stare Grunty 53, Bratislava</li>
                </ul>
            </div>
            <div className="column">
                <h3>Our services: </h3>
                <ul>
                    <li>Cleaning of Officess</li>
                    <li>Cleaning of living rooms</li>
                    <li>Carpet cleaning</li>
                    <li>Windows cleaning</li>
                    <li>Floor cleaning</li>
                </ul>
            </div>
            <div className="column"> 
                <h3>Dalšie odkazy: </h3>
                <ul>
                    <li>Vseobecne obchodne podmienki</li>
                    <li>Ochrana osobnych undajov</li>
                    <li>Sprava suboroc coockies</li>
                </ul>
            </div>
        </div>
    )
}