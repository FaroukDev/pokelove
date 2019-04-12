import React, { Component } from 'react';
import './Connexion.css';


class Connexion extends Component {
    render() {
      return (
        <>
           <div className="login-page">
	<div className="login">
		<div className="form-container">
			<h1>Logo</h1>
			<div className="form-wrapper">
				<form onsubmit="event.preventDefault();">
					<div>Login To Your Account</div>
					<input required type="emil" id="email" name="email" />
					<label htlmfor="email">email</label>

					<input required id="password" name="password" type="password" />
					<label htlmfor="password">password</label>

					<button>login</button>
				</form>
			</div>

		</div>
	</div>
	<div class="photo">
		<img src="https://image.noelshack.com/fichiers/2019/15/4/1554991425-image-pokelove.png" alt="connexion client" />
	</div>
</div>     
          
        </>
      );
    }
  }
  


export default Connexion;