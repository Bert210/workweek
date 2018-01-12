import React from 'react';

import { connect } from 'react-redux';

import { toggleWeekView } from './actions';

import TitleBar from '../../components/TitleBar';

class TitleBarContainer extends React.Component {
  // console.log()
  render() {
    return (
      <TitleBar {...this.props} />
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return ({
    toggleWeekView: () => dispatch(toggleWeekView()),
  })
}

export default connect(null, mapDispatchToProps)(TitleBarContainer);
