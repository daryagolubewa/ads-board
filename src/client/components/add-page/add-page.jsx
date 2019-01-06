import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import {
  Grid, Row, Col, FormGroup, FormControl, ControlLabel, Button
} from 'react-bootstrap';
import { addAd } from '../../redux/actions/ads-actions';
import './add-page.css';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  addNewAd: adInfo => dispatch(addAd(adInfo))
});

class AddPage extends Component {
  render() {
    let name; let text; let phone; let city;
    const { addNewAd } = this.props;
    // const history = createBrowserHistory();
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

                      const newAdInfo = {
                        name: name.value,
                        text: text.value,
                        phone: phone.value,
                        city: city.value
                      };
                      addNewAd(newAdInfo);
                      this.props.history.push('/');
                      name.value = '';
                      text.value = '';
                      phone.value = '';
                      city.value = '';
                    }}>
                <FormGroup>
                  <ControlLabel>Заголовок</ControlLabel>
                  <FormControl type='text' inputRef={node => name = node}/>
                </FormGroup>
                <FormGroup controlId='formControlsTextarea'>
                  <ControlLabel>Текст объявления</ControlLabel>
                  <FormControl componentClass='textarea' type='textarea' inputRef={node => text = node} placeholder='' />
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Номер телефона</ControlLabel>
                  <FormControl type='number' inputRef={node => phone = node} placeholder='+7(___)___-__-__'/>
                </FormGroup>
                <FormGroup controlId='formControlsSelect'>
                  <ControlLabel>Выбрать город</ControlLabel>
                  <FormControl componentClass='select' type='text' inputRef={node => city = node} placeholder='select'>
                    <option value='select'>Москва</option>
                    <option value='other'>...</option>
                  </FormControl>
                </FormGroup>
                <Button className='form-buttons add-photo'>Прикрепить фото</Button>
                 <Button bsStyle='primary' className='form-buttons add-ad' type='submit'>Подать</Button>
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
