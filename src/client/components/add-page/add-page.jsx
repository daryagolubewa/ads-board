import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import {
  Grid, Row, Col, FormGroup, FormControl, ControlLabel, Button
} from 'react-bootstrap';
import './add-page.css';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

class AddPage extends Component {
  render() {
    return (
      <div className='row'>
        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <form>
                <FormGroup>
                  <ControlLabel>Заголовок</ControlLabel>
                  <FormControl/>
                </FormGroup>
                <FormGroup controlId='formControlsTextarea'>
                  <ControlLabel>Текст объявления</ControlLabel>
                  <FormControl componentClass='textarea' placeholder='' />
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Номер телефона</ControlLabel>
                  <FormControl placeholder='+7(___)___-__-__'/>
                </FormGroup>
                <FormGroup controlId='formControlsSelect'>
                  <ControlLabel>Выбрать город</ControlLabel>
                  <FormControl componentClass='select' placeholder='select'>
                    <option value='select'>Москва</option>
                    <option value='other'>...</option>
                  </FormControl>
                </FormGroup>
                <Button className='form-buttons add-photo'>Прикрепить фото</Button>
                <Button bsStyle='primary' className='form-buttons add-ad'>Подать</Button>
              </form>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const AddNewAdPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPage);
export default AddNewAdPage;
