import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import {
  Grid, Row, Col, FormGroup, FormControl, ControlLabel, Button
} from 'react-bootstrap';
import { editAd, addAd } from '../../redux/actions/ads-actions';
import { selectGetAd } from '../../redux/selectors/ad-selector';
import './edit-page.css';

const mapStateToProps = (state, match) => ({
  ...state.ad.find(ad => {
    return match.match.params.id === ad.id.toString();
  })
});

// const mapStateToProps = (state, match) => ({
//   ...state.expenses.find(expense => {
//       return match.match.params.id === expense.id.toString()
//     }
//   )
// })

const mapDispatchToProps = dispatch => ({
  editAd: editedInfo => dispatch(editAd(editedInfo))
});

class EditPage extends Component {
  render() {
    let name; let text; let phone; let city;
    const { editAd } = this.props;

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

                  const editedInfo = {
                    name: name.value,
                    text: text.value,
                    phone: phone.value,
                    city: city.value,
                    id: this.props.match.params.id
                  };
                  editAd(editedInfo);
                  this.props.history.push('/');
                  name.value = '';
                  text.value = '';
                  phone.value = '';
                  city.value = '';
                }}>
                <FormGroup>
                  <ControlLabel>Заголовок</ControlLabel>
                  <FormControl type='text' inputRef={node => name = node} defaultValue={this.props.name}/>
                </FormGroup>
                <FormGroup controlId='formControlsTextarea'>
                  <ControlLabel>Текст объявления</ControlLabel>
                  <FormControl componentClass='textarea' type='textarea' inputRef={node => text = node} placeholder='' defaultValue={this.props.text}/>
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Номер телефона</ControlLabel>
                  <FormControl type='number' inputRef={node => phone = node} placeholder='+7(___)___-__-__' defaultValue={this.props.phone}/>
                </FormGroup>
                <FormGroup controlId='formControlsSelect'>
                  <ControlLabel>Выбрать город</ControlLabel>
                  <FormControl componentClass='select' type='text' inputRef={node => city = node} placeholder='select'>
                    <option value='select'>Москва</option>
                    <option value='other'>...</option>
                  </FormControl>
                </FormGroup>
                <Button className='form-buttons add-photo'>Прикрепить фото</Button>
                <Button bsStyle='primary' className='form-buttons add-ad' type='submit'>Сохранить</Button>
              </form>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const EditAdPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPage);
export default EditAdPage;
