// @flow
import React, { Component } from 'react';
import Record from '../components/Record';

type Props = {
    time: Number,
    status: Boolean
};

export default class RecordPage extends Component<Props> {
  props: Props;

  render() {
    return <Record />;
  }
}
