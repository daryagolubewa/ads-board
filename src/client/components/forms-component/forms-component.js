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
  state = {
    headerValue: this.props.name ? this.props.name : '',
    textValue: this.props.text ? this.props.text : '',
    phoneValue: this.props.phone ? this.props.phone : '',
    cityValue: this.props.city ? this.this.props.city : ''
  };

  getHeaderValidation = () => {
    const headerFieldlength = this.state.headerValue.length;
    if (headerFieldlength > 140) return 'error';
    if (headerFieldlength >= 1 && headerFieldlength <= 140) return 'success';
    if (headerFieldlength === 0) return 'neutral';
  };

  getTextValidation = () => {
    const textFieldlength = this.state.textValue.length;
    if (textFieldlength > 300) return 'error';
    if (textFieldlength >= 1 && textFieldlength <= 300) return 'success';
    if (textFieldlength === 0) return 'neutral';
  };

  getPhoneValidation = () => {

  };

  getCityValidation = () => {
    const cityFieldlength = this.state.cityValue.length;
    if (cityFieldlength > 0) return 'success';
  };

  render() {
    let name; let text; let phone; let city;
    const { addNewAd, editAd, newAd } = this.props;
    return (
      <div className='row'>
        <Grid>
          <Row>
            <Row>
              <Col xs={6} md={5}>
              <h3 className='form-header'>{newAd ? 'Подать объявление' : 'Редактировать объявление'}</h3>
              </Col>
            </Row>
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
              <Row>
                <Col xs={6} md={5}>
                  <FormGroup>
                    <ControlLabel>Заголовок</ControlLabel>
                    <FormControl type='text'
                                 inputRef={node => name = node}
                                 defaultValue={newAd ? '' : this.state.headerValue}
                                 onChange={e => this.setState({ headerValue: e.target.value })}
                                 required/>
                  </FormGroup>
                </Col>
                <Col xs={6} md={5} className={'validation-shower-ext ext-' + this.getHeaderValidation()}>
                  <div className='validation-shower int-neutral'>
                    <span className="glyphicon glyphicon-question-sign" aria-hidden="true"></span>Обязательное поле<br/>
                    Не более 140 символов
                  </div>
                  <div className='validation-shower int-success' >
                    <span className="glyphicon glyphicon-ok-sign" aria-hidden="true"></span>Заполнено
                  </div>
                  <div className='validation-shower int-error'>
                    <span className="glyphicon glyphicon-remove-sign" aria-hidden="true"></span>Превышен лимит знаков<br/>
                    Не более 140
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={6} md={5}>
                  <FormGroup controlId='formControlsTextarea'>
                    <ControlLabel>Текст объявления</ControlLabel>
                    <FormControl componentClass='textarea' type='textarea'
                                 inputRef={node => text = node}
                                 onChange={e => this.setState({ textValue: e.target.value })}
                                 defaultValue={this.state.textValue} placeholder=''/>
                  </FormGroup>
                </Col>
                <Col xs={6} md={5} className={'validation-shower-ext ext-' + this.getTextValidation()}>
                  <div className='validation-shower int-neutral'>
                    <span className="glyphicon glyphicon-question-sign" aria-hidden="true"></span>Обязательное поле<br/>
                    Не более 300 символов
                  </div>
                  <div className='validation-shower int-success'>
                    <span className="glyphicon glyphicon-ok-sign" aria-hidden="true"></span>Заполнено
                  </div>
                  <div className='validation-shower int-error'>
                    <span className="glyphicon glyphicon-remove-sign" aria-hidden="true"></span>Превышен лимит знаков<br/>
                    Не более 300
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={6} md={5} >
                  <FormGroup>
                    <ControlLabel>Номер телефона</ControlLabel>
                    <FormControl type='number' inputRef={node => phone = node} defaultValue={this.state.phoneValue}
                                 placeholder='+7(___)___-__-__' required/>
                  </FormGroup>
                </Col>
                <Col xs={6} md={5} className={'validation-shower-ext ext-' + this.getPhoneValidation()}>
                  <div className='validation-shower int-neutral'>
                    <span className="glyphicon glyphicon-question-sign" aria-hidden="true"></span>Обязательное поле
                  </div>
                  <div className='validation-shower int-success'>
                    <span className="glyphicon glyphicon-ok-sign" aria-hidden="true"></span>Заполнено
                  </div>
                  <div className='validation-shower int-error'>
                    <span className="glyphicon glyphicon-remove-sign" aria-hidden="true"></span>Заполните поле
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={6} md={5} >
                  <FormGroup controlId='formControlsSelect'>
                    <ControlLabel>Выбрать город</ControlLabel>
                    <FormControl componentClass='select' type='text' inputRef={node => city = node}
                                 placeholder=' '
                                 onChange={e => this.setState({ cityValue: e.target.value })}>
                      <option value='select'> </option>
                      <option value='select'>Москва</option>
                      <option value='other'>Хабаровск</option>
                      <option value='other'>Чебоксары</option>
                    </FormControl>
                  </FormGroup>
                </Col>
                <Col xs={6} md={5} className={'validation-shower-ext ext-' + this.getCityValidation()}>
                  <div className='validation-shower int-success'>
                    <span className="glyphicon glyphicon-ok-sign" aria-hidden="true"></span>Заполнено
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={6} md={5}>
                <Button className='form-buttons add-photo'>Прикрепить фото</Button>
                <Button bsStyle='primary' className='form-buttons add-ad'
                        type='submit'>{newAd ? 'Подать' : 'Сохранить'}</Button>
                </Col>
              </Row>
            </form>
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
