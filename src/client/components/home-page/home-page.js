import React, { Component } from 'react';
import {
  Grid, Row, Col, Button, ButtonToolbar
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PAGES } from '../../routes/pages';
import './home-page.css';


export default class App extends Component {
  render() {
    // const { children } = this.props;
    return (
      <div>
        <Grid>
          <h3>Объявления</h3>
          <Row>
            <Col xs={6} md={4}>
                  <div>this.props.name}</div>
                  <div>this.props.text}</div>
                  <div>this.props.image}</div>
            </Col>
            <Col xs={6} md={4}>
              <div>this.props.phone}</div>
              <div>this.props.city}</div>
              <div>
              <Link to={PAGES.edit.call} className='edit-link' style={{ textDecoration: 'none' }}>
                <Button className='ads-list edit-button'>Редактировать</Button></Link>
              <Button className='ads-list delete-button'>Удалить</Button>
              </div>
            </Col>
            <Col xs={6} md={4}>
              <Link to={PAGES.add.path}><Button bsStyle='primary'>Подать объявление</Button></Link>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
