// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h2>Fiducia</h2>
        <Link to={routes.RECORD}>Record a session</Link>
        <form onSubmit={this.handleSubmit}>
          <label>
            Search
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}
