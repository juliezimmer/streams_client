import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';
 
class StreamList extends React.Component {
   componentDidMount () {
      this.props.fetchStreams(); // this fetches all of the streams in the application when the app starts up.
   }
   
   // helper function for comparing the current userId to the userId on the streams.  When it's called, its passed the stream that is currently being iterated over. 
   renderAdmin(stream) {
      if (stream.userId === this.props.currentUserId) {
         return (
            <div className="right floated content">
               <Link 
                  to={`/streams/edit/${stream.id}`} 
                  className="ui button primary" >
                  Edit
               </Link>
               
               <Link to={`/streams/delete/${stream.id}`} className="ui button negative">
                  Delete
               </Link>
            </div>
         )
      }
   }
  
   // This takes the list of streams and renders them to the screen.
   renderList() {
      return this.props.streams.map(stream => {
         return (
            <div className="item" key={stream.id}>
               {this.renderAdmin(stream)}
               <i className="large middle aligned icon camera"></i>
               <div className="content">
                  <Link 
                     to={`/streams/${stream.id}`}
                     className="header" >
                     {stream.title}
                  </Link>
               <div className="description">{stream.description}</div>
               </div>
            </div>
         );
      });
   }

   // this renders a Create button
   renderCreate(){
      if (this.props.isSignedIn) {
         return (
            <div style={{ textAlign: 'right' }}>
               <Link to="/streams/new" className="ui button primary">
                  Create Stream
               </Link>
            </div>
         );
      }
   }

   render(){
      return (
         <div>
            <h2>Streams</h2>
            <div className="ui celled list">{this.renderList()}</div>
            {this.renderCreate()}
         </div>
      );
   }
}
// this makes the list of streams available inside the component as props.
const mapStateToProps = state => {
   return { 
      streams: Object.values(state.streams),
      currentUserId: state.auth.userId,
      isSignedIn: state.auth.isSignedIn
   };
}

export default connect(
   mapStateToProps, 
   { fetchStreams }
) (StreamList);