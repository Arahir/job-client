import React from 'react';

export default React.createClass({
  getList: function() {
    return this.props.list || [];
  },
  render: function() {
    return <div className="jobs">
        {this.getList().map(entry =>
          <button key={entry}
                  onClick={() => this.props.display(entry)}>
            <h1>{entry}</h1>
          </button>
        )}
    </div>;
  }
});