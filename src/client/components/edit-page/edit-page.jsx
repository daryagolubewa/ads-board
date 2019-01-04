import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import { Link } from 'react-router-dom';
import { PAGES } from '../../routes/pages';
import './edit-page.css';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

class EditPage extends Component {
  render() {
    return (
      <div className="row">

      </div>
    );
  }
}

const EditAdPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPage);
export default EditAdPage;
