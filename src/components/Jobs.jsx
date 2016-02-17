import React from 'react';
import JobsList   from './JobsList'; 
import PureRenderMixin from 'react-addons-pure-render-mixin'; 
import {connect} from 'react-redux';


export const Jobs =  React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div>
      <JobsList {...this.props} />
    </div>;
  }
});

function mapStateToProps(state) {
  return {
    list: state.getIn(['jobs', 'list']),
  };
}

connect(mapStateToProps)(Jobs);

export const JobsContainer = connect(mapStateToProps)(Jobs);