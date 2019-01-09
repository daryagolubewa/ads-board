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
    cityValue: this.props.city ? this.props.city : ''
  };

  getHeaderValidation = () => {
    const headerFieldLength = this.state.headerValue.length;
    if (headerFieldLength > 140) return 'error';
    if (headerFieldLength >= 1 && headerFieldLength <= 140) return 'success';
    if (headerFieldLength === 0) return 'neutral';
  };

  getTextValidation = () => {
    const textFieldLength = this.state.textValue.length;
    if (textFieldLength > 300) return 'error';
    if (textFieldLength >= 1 && textFieldLength <= 300) return 'success';
    if (textFieldLength === 0) return 'neutral';
  };

  getPhoneValidation = () => {
    const phoneNumber = this.state.phoneValue;
    const phoneFieldLength = this.state.phoneValue.length;
    if (phoneFieldLength === 0) return 'neutral';
    const re = /^\+7[\(]\d{3}[\)]\d{3}[-]\d{2}[-]\d{2}$/;
    const validNumber = re.test(phoneNumber);

    if (validNumber) {
      return 'success';
    }
    return 'error';
  };

  getCityValidation = () => {
    const cityFieldLength = this.state.cityValue.length;
    if (cityFieldLength > 0) return 'success';
  };

  allFieldsValid = () => {
    const textValResult = this.getTextValidation();
    const nameValResult = this.getHeaderValidation();
    const phoneValResult = this.getPhoneValidation();
    console.log('results', textValResult, nameValResult, phoneValResult);
    if (textValResult === 'success' && nameValResult === 'success' && phoneValResult === 'success') {
      return true;
    }
    return false;
  };

  render() {
    let name; let text; let phone; let city;
    const { addNewAd, editAd, newAd } = this.props;
    console.log(this.state);
    console.log('lala,', this.allFieldsValid());
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
                <Col xs={6} md={5} className={`validation-shower-ext ext-${this.getHeaderValidation()}`}>
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
                                 defaultValue={newAd ? '' : this.state.textValue} placeholder=''/>
                  </FormGroup>
                </Col>
                <Col xs={6} md={5} className={`validation-shower-ext ext-${this.getTextValidation()}`}>
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
                    <FormControl type='text' inputRef={node => phone = node}
                                 defaultValue={ newAd ? '' : this.state.phoneValue}
                                 placeholder='+7(___)___-__-__' required
                                 onChange={e => this.setState({ phoneValue: e.target.value })}/>
                  </FormGroup>
                </Col>
                <Col xs={6} md={5} className={`validation-shower-ext ext-${this.getPhoneValidation()}`}>
                  <div className='validation-shower int-neutral'>
                    <span className="glyphicon glyphicon-question-sign" aria-hidden="true"></span>Обязательное поле
                  </div>
                  <div className='validation-shower int-success'>
                    <span className="glyphicon glyphicon-ok-sign" aria-hidden="true"></span>Заполнено
                  </div>
                  <div className='validation-shower int-error'>
                    <span className="glyphicon glyphicon-remove-sign" aria-hidden="true"></span>Неверный формат<br/>
                    Номер должен соответствовать формату +7(ХХХ)ХХХ-ХХ-ХХ
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={6} md={5} >
                  <FormGroup controlId='formControlsSelect'>
                    <ControlLabel>Выбрать город</ControlLabel>
                    <FormControl componentClass='select' type='text' inputRef={node => city = node}
                                 placeholder=' '
                                 defaultValue={ newAd ? '' : this.state.cityValue}
                                 onChange={e => this.setState({ cityValue: e.target.value })}>
                      <option value='select'> </option>
                      <option value='Москва'>Москва</option>
                      <option value='Хабаровск'>Хабаровск</option>
                      <option value='Чебоксары'>Чебоксары</option>
                    </FormControl>
                  </FormGroup>
                </Col>
                <Col xs={6} md={5} className={`validation-shower-ext ext-${this.getCityValidation()}`}>
                  <div className='validation-shower int-success'>
                    <span className="glyphicon glyphicon-ok-sign" aria-hidden="true"></span>Заполнено
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={6} md={5}>
                <Button bsStyle='primary' className='form-buttons add-ad'
                        type='submit'
                        disabled={ !this.allFieldsValid() }>
                        {newAd ? 'Подать' : 'Сохранить'}
                        </Button>
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
