import React from 'react';
import { connect } from 'react-redux'; 
import  { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
   state = { siSignedIn: null };

   componentDidMount(){
      window.gapi.load('client:auth2', () => {
         // callback function is only called AFTER client:auth2 library has been successfully loaded into gapi
         window.gapi.client.init({
            clientId: '157633816826-v8uuqeqt0f7cj3g424g85m72fspm6lqk.apps.googleusercontent.com',
            scope: 'email' 
         }).then(() => {
            // creates a reference for an instance of the auth object for the component class
            this.auth = window.gapi.auth2.getAuthInstance(); 
            
            // set the state with the current user's signin status
           this.onAuthChange(); 
            
            // set up an event listener
            // this is called anytime the authentication status changes.
            this.auth.isSignedIn.listen(this.onAuthChange); 
         });
      });
   }
   // updates authentication state on the fly
   onAuthChange = (isSignedIn) => { 
      if (isSignedIn) {
         this.props.signIn();
      } else {
         this.props.signOut();
      }
   };

   // will need to access the auth instance
   onSignInClick = () => {
      this.auth.signIn();
   }

   // will need to access the auth instance
   onSignOutClick = () => {
      this.auth.signOut();
   }

   renderAuthButton(){
      if (this.state.isSignedIn === null) {
         return null;
      } else if (this.state.isSignedInClick){ // if the user IS signed in
         return (
            <button 
               onClick={this.onSignOut} 
               className="ui red google button">
               <i className="google icon" />
               Sign Out
            </button>
         );
      } else {
         return (
            <button 
               onClick={this.onSignInClick} 
               className="ui red google button">
               <i className="google icon" />
               Sign In with Google
            </button>
         )
      }
   }

   render(){
      return (
         <div>{this.renderAuthButton()}</div>
      );
   }
}

// connect() takes in two arguments:
//  1. null (there is no map state to props function)
//  2. object containing signIn and signOut
export default connect( null, { signIn, signOut })(GoogleAuth);
