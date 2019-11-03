// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Record.css';
import routes from '../constants/routes';

type Props = {
    time: Number,
    status: Boolean
};

export default class Record extends Component<Props> {
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
    const {
        time = 0,
        state = false
    } = this.props;
    return (
        <div>
            <div className={styles.backButton} data-tid="backButton">
            <Link to={routes.HOME}>
                <i className="fa fa-arrow-left fa-3x" />
            </Link>
            </div>
            <div className={styles.recordWidget}>
                <h2 className={styles.title}>Record a session</h2>
                <button className={styles.recordButton}>{status ? 'Stop' : 'Start'}</button>
                <p  className={styles.time}>{time} seconds</p>
                <p className={styles.sessionNameLabel}>Name of Session</p>
                <form onSubmit={this.handleSubmit}>
                    <input className={styles.sessionName} type="text" value={this.state.value} onChange={this.handleChange} />
                    <input className={styles.submitButton} type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
  }
}
