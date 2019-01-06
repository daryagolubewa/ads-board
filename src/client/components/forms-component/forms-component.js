import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import {
  Grid, Row, Col, FormGroup, FormControl, ControlLabel, Button
} from 'react-bootstrap';
import { editAd, addAd } from '../../redux/actions/ads-actions';
import './forms-component.css';

const mapStateToProps = (state, match) => ({
  ...state.ad.find(ad => match.match.params.id === ad.id.toString())
});

const mapDispatchToProps = dispatch => ({
  addNewAd: adInfo => dispatch(addAd(adInfo)),
  editAd: editedInfo => dispatch(editAd(editedInfo))
});


class FormsComponent extends Component {
  render() {
    let name; let text; let phone; let city;
    const { addNewAd, editAd, newAd } = this.props;
    console.log(newAd);
    return (
      <div className='row'>
        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!name.value.trim() || !text.value.trim() || !phone.value.trim()
                    || !city.value.trim()) {
                    return;
                  }
                  if (newAd) {
                    const newAdInfo = {
                      name: name.value,
                      text: text.value,
                      phone: phone.value,
                      city: city.value
                    };
                    addNewAd(newAdInfo);
                  } else {
                    const editedInfo = {
                      name: name.value,
                      text: text.value,
                      phone: phone.value,
                      city: city.value,
                      id: this.props.match.params.id
                    };
                    editAd(editedInfo);
                  }
                  this.props.history.push('/');
                  name.value = '';
                  text.value = '';
                  phone.value = '';
                  city.value = '';
                }}>
                <FormGroup>
                  <ControlLabel>Заголовок</ControlLabel>
                  <FormControl type='text' inputRef={node => name = node} defaultValue={newAd ? '' : this.props.name} required/>
                </FormGroup>
                <FormGroup controlId='formControlsTextarea'>
                  <ControlLabel>Текст объявления</ControlLabel>
                  <FormControl componentClass='textarea' type='textarea' inputRef={node => text = node}
                               defaultValue={newAd ? '' : this.props.text} placeholder='' />
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Номер телефона</ControlLabel>
                  <FormControl type='number' inputRef={node => phone = node} defaultValue={newAd ? '' : this.props.phone}
                               placeholder='+7(___)___-__-__' required/>
                </FormGroup>
                <FormGroup controlId='formControlsSelect'>
                  <ControlLabel>Выбрать город</ControlLabel>
                  <FormControl componentClass='select' type='text' inputRef={node => city = node} placeholder='select'>
                    <option value='select'>Москва</option>
                    <option value='other'>...</option>
                  </FormControl>
                </FormGroup>
                <Button className='form-buttons add-photo'>Прикрепить фото</Button>
                <Button bsStyle='primary' className='form-buttons add-ad' type='submit'>{ newAd ? 'Подать' : 'Сохранить' }</Button>
              </form>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const AddEditComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormsComponent);
export default AddEditComponent;
