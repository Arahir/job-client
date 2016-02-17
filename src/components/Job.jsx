import React from 'react';
import {connect} from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin'; 


export const Job = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div className="job">
      Display: {this.props.job}!
    </div>;
  }
});

function mapStateToProps(state) {
  return {
    job: state.get(job),
  };
}

connect(mapStateToProps)(Job);

export const JobContainer = connect(mapStateToProps)(Job);