
import instagram from './assets/instagram.png';
import pinterest from './assets/pinterest.png'
import mail from './assets/mail.png'
import phone from './assets/phone.png';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <hr/>
            <table width={'100%'}>
                <thead >
                    <tr >
                        <th className="title">BROMINE AND BARIUM</th>
                        <th>Contact Us</th>
                        <th>Follow Us</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td><img src={phone} style={{margin:'5px',width: '23px',height: '24px'}}/> <a style={{padding:'5px',textDecoration:'none'}} href="tel:+91-9445981676">+91-9445981676</a><br/>
                        <img src={mail} style={{  margin:'5px',  width: '26px',height: '26px'}}/><a style={{padding:'5px',textDecoration:'none'}} href="mailto:brominenbarium@gmail.com">brominenbarium@gmail.com</a></td>
                        <td>
                        <img src={pinterest} style={{margin:'5px',width: '19px',height: '19px'}}/><a style={{padding:'5px',textDecoration:'none'}} href="https://in.pinterest.com/brominenbarium/" target="_blank">Pinterest</a><br/>
                        <img src={instagram} style={{margin:'5px',width: '25px',height: '23px'}} /><a style={{padding:'4px',textDecoration:'none'}} href="https://www.instagram.com/brominenbarium?igsh=NXUybzJiY3ppODdi&utm_source=qr" target="_blank">Instagram</a><br/>
                         
                        </td>                        
                    </tr>
                </tbody>


            </table>
            <br/>
            <br/>
            <table className="footer"  >
                <tbody>
                <tr>
                    <td>Terms & Conditions</td>
                    <td>Privacy Policy</td>
                    <td>Cookies</td>
                    <td>Refund Policy</td>
                    <td>License</td>
                </tr>
                </tbody>
                
            </table>
        </div>
    )
}

export default Footer
