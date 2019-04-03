import React from 'react';

class GoogleAuth extends React.Component {
   state = { siSignedIn: null };

   componentDidMount(){
      window.gapi.load('client:auth2', () => {
         // callback function is only called AFTER client:auth2 library has been successfully loaded into gapi
         window.gapi.client.init({
            clientId: '157633816826-v8uuqeqt0f7cj3g424g85m72fspm6lqk.apps.googleusercontent.com',
            scope: 'email' 
         }).then(() => {
            this.auth = window.gapi.auth2.getAuthInstance(); 
            this.setState({ isSignedIn: this.auth.isSignedIn.get()});  
         });
      });
   }

   renderAuthButton(){
      if (this.state.isSignedIn === null) {
         return <div>I don't know if we are signed in</div>;
      } else if (this.state.isSignedIn){
         return <div>I am signed in!</div>
      } else {
         return <div>I am NOT signed in</div>
      }
   }

   render(){
      return (
         <div>{this.renderAuthButton()}</div>
      );
   }
}

export default GoogleAuth;
