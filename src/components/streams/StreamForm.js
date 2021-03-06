import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component{
   renderError({error, touched}){
      if (touched && error){ // the user has clicked in the input field AND there is an error message
         return (
            <div className="ui error message">
               <div className="header">{error}</div>
            </div>
         );   
      }
   }
   renderInput = ({ input, label, meta }) => {
      const className = `field ${meta.error && meta.touched ? 'error' : '' }`;
      return (
         <div className={className} >
            <label>{label}</label>
            <input {...input}  autoComplete="off" />
            {this.renderError(meta)}
         </div>
      );
   }
   onSubmit = (formValues) => {
      this.props.onSubmit(formValues); // onSubmit is called with whatever values are coming from the form.
   }
   render(){
      return (
         <form onSubmit={this.props.handleSubmit(this.onSubmit)}        className="ui form error" >
            <Field name="title" component={this.renderInput} label="Enter Title" />
            <Field name="description" component={this.renderInput} label="Enter Description" />
            <button className="ui button primary">Submit</button>
         </form>
      );
   }
}
// validation function
const validate = (formValues) => {
   const errors = {};

   if (!formValues.title){ 
      // the user did not enter a title
      // return an errors object 
      errors.title = "You must enter a title";
   } 
   if (!formValues.description){
      // no description was entered
      errors.description = "You must enter a description";
   }
   return errors;
}

export default reduxForm({
   form: 'streamForm',
   validate: validate 
})(StreamForm);


