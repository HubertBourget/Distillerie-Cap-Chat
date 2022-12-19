import React, { useState} from 'react';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';



function Newsletter() {

  const [newsletterEmail, setnewsletterEmail] = useState('');
  const handleChangeEmail = event => {
    setnewsletterEmail(event.target.value);
};
    const createNewsletterProfile = () => {
      document.getElementById('newsletterEmailInput').value = '';
      document.getElementById('newsletterButton').disabled = true;
      document.getElementById('newsletterButton').style.backgroundColor = "#954B22";
      document.getElementById('newsletterButton').textContent = "Merci & À Bientôt!";
      
            fetch("/api/post-emailNewsletter", {
                method: "POST",
                headers: {
                    'Content-Type':'application/json',
                    'Accept':'application/json'
                    },
                body: JSON.stringify({
                    "userEmail": newsletterEmail
                })
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }

  return (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Inscrivez-vous à notre infolettre</h1>
      <p className="p__opensans">Ne manquez jamais nos annonces importantes!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" id="newsletterEmailInput" placeholder="Entrez votre adresse email" onChange={handleChangeEmail}/>
      <button type="button" id="newsletterButton"className="custom__button" onClick={createNewsletterProfile}>Inscrivez-moi</button>
    </div>
  </div>
);
}

export default Newsletter;