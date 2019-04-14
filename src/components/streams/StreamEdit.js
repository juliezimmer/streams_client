import _ from 'lodash'; // used with <StreamForm />
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';


class StreamEdit extends React.Component {
   componentDidMount(){
      this.props.fetchStream(this.props.match.params.id);
   }

   onSubmit =  (formValues) => {
      console.log(formValues);
   }; 

   render (){
      if (!this.props.stream) {
         return <div>Loading...</div>;
      }
      return (
         <div>
            <h3>Edit a Stream</h3>
            <StreamForm // lodash _.pick() is used with initialValues so that only title and description are passed to the StreamForm //
               initialValues={_.pick(this.props.stream, 'title', 'description')}
               onSubmit={this.onSubmit} />
         </div>
      );
   }
   
}
// this helps get the initialValues for the form
const mapStateToProps = (state, ownProps) => {
   return { stream: state.streams[ownProps.match.params.id]};
};

export default connect(
   mapStateToProps, 
   { fetchStream, editStream }
)(StreamEdit);