import "./style/footer.css";

export default function Footer(){
    return (
        <div className="footer">
            <div className="column">
                <h3>Contact us: </h3>
                <ul>
                    <li>Telefon: +421 999 999 99</li>
                    <li>Email: email@gmail.com</li>
                    <li><i class="fab fa-facebook-square" style={{ color: '#4267B2', fontSize: '24px' }}></i> Facebook: <a href='#'>facebook.com/SparkleCleaners</a></li>
                    <li><i class="fab fa-instagram-square" style={{ color: 'red', fontSize: '24px' }}></i> Instagram: <a href='#'>instagram.com/SparkleCleaners</a></li>
                    <li><i class="fab fa-twitter-square" style={{ color: '#1DA1F2', fontSize: '24px' }}></i> Twitter: <a href='#'>twitter.com/SparkleCleaners</a></li>
                </ul>
            </div>
            <div className="column">
            <h3>Business Hours:</h3>
            <ul>
                <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
                <li>Saturday: 9:00 AM - 3:00 PM</li> 
                <li>Sunday: Closed</li>
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