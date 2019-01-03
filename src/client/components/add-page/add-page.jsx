import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

class AddPage extends Component {

  render() {

    return (
      <div className='row'>

      </div>
    );
  }
}

const AddNewAdPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPage);
export default AddNewAdPage;
