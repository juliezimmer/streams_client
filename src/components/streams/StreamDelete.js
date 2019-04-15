import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';


class StreamDelete extends React.Component {
   componentDidMount(){
      this.props.fetchStream(this.props.match.params.id);
   }
   
   renderActions(){
      // const id = this.props.match.params.id;
      // OR destructure:
      const { id } = this.props.match.params;
      return ( // <React.Fragment> takes the place of the mandatory first div for the buttons below. 
         <React.Fragment> 
            <button 
               onClick={() => this.props.deleteStream(id)}
               className="ui button negative">Delete</button>
            <Link to="/" className="ui button">Cancel</Link>
         </React.Fragment>
      ); 
   }
   
   renderContent(){ 
      if(!this.props.stream){
         return 'Are you sure you want to delete this stream?'
      } // when the stream has been fetched
      return `Are you sure you want to delete this stream with title: ${this.props.stream.title}?`
   }

   render(){
      return (
         <Modal 
            title="Delete Stream"
            content={this.renderContent()}
            actions={this.renderActions()}
            onDismiss={() => history.push('/')}
         />
      );
   }
}

const mapStateToProps = (state, ownProps) => {
   return { stream: state.streams[ownProps.match.params.id]} // state.streams is an object with all of the different streams. We want state.streams with the specific key of 4, so bracket notation is used to get that one out of the object.
};

// mapStateToProps is always passed to connect as its first argument.
export default connect(
   mapStateToProps, 
   { fetchStream, deleteStream }
) (StreamDelete);