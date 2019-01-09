import React, { Component } from 'react';
import {
  Grid, Row, Col, Button
} from 'react-bootstrap';
import connect from 'react-redux/es/connect/connect';
import { Link } from 'react-router-dom';
import { PAGES } from '../../routes/pages';
import { selectGetAd } from '../../redux/selectors/ad-selector';
import { removeAd } from '../../redux/actions/ads-actions';
import './home-page.css';

const mapStateToProps = state => ({
  setAd: selectGetAd(state)
});

const mapDispatchToProps = dispatch => ({
  remAd: id => dispatch(removeAd(id))
});

class App extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={6} md={8}>
              <h3>Объявления</h3>
            </Col>
            <Col xs={6} md={2} className='ads-list add-button'>
              <Link to={PAGES.add.path}><Button bsStyle='primary'>Подать объявление</Button></Link>
            </Col>
          </Row>
          <Row>
             {this.props.setAd.map(ad => (
              <div key={ad.id}>
              <Col xs={6} md={6}>
                  <div className='ads-list item-name'>{ad.name}</div>
                  <div className='ads-list item-text'>{ad.text}</div>
                  <div>ad.image}</div>
            </Col>
            <Col xs={6} md={6} className='ads-list item'>
              <div>{ad.phone}</div>
              <div>{ad.city}</div>
              <div>
              <Link to={PAGES.edit.call(ad.id)} className='edit-link' style={{ textDecoration: 'none' }}>
                <Button className='ads-list edit-button'>Редактировать</Button></Link>
                <Button className='ads-list delete-button' onClick={() => this.props.remAd(ad.id)}>Удалить</Button>
              </div>
            </Col>
              </div>
             ))}
              </Row>
        </Grid>
      </div>
    );
  }
}

const AdsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
export default AdsList;
