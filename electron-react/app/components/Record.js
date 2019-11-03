// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Record.css';
import routes from '../constants/routes';


export default class Record extends Component {

  constructor(props) {
    super(props);
    this.state = {value: '', recording: false, time: 1};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRecord = this.handleRecord.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  handleRecord(e) {
    if(this.state.recording) {
      this.stopRecording()
      this.setState({ recording: false});
      clearInterval(this.interval);
    }
    else {
      this.startRecording()
      this.setState({recording: true});
      this.interval = setInterval(this.tick, 1000);
    }
  }

  tick() {
    console.log('tick');
    this.setState({time: 20});
  }

  stopRecording() {
    return undefined
  }

  startRecording() {
    return undefined
  }

  sendData(recording) {
    console.log(recording);
  }

  render() {
    return (
        <div>
            <div className={styles.backButton} data-tid="backButton">
            <Link to={routes.HOME}>
                <i className="fa fa-arrow-left fa-3x" />
            </Link>
            </div>
            <h2 className={styles.title}>Record a session</h2>
            <div className={styles.recordWidget}>
                <button className={styles.recordButton} onClick={this.handleRecord}>{status ? 'Stop' : 'Start'}</button>
                <p  className={styles.time}>{this.state.time} seconds</p>
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
