import React from 'react/addons';
import {List} from 'immutable';
import {Jobs} from '../../src/components/Jobs';
import ReactDOM from 'react-dom'
import {expect} from 'chai';

const {renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate}
  = React.addons.TestUtils;

describe('Jobs', () => {

  it('renders 3 buttons', () => {
    const component = renderIntoDocument(
      <Jobs list={['front', 'back', 'r&d']} />
    );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

    expect(buttons.length).to.equal(3);
    expect(buttons[0].textContent).to.equal('front');
    expect(buttons[1].textContent).to.equal('back');
    expect(buttons[2].textContent).to.equal('r&d');
  });
  
  it('invokes callback when a button is clicked', () => {
    let displayed;
    const display = (entry) => displayed = entry;

    const component = renderIntoDocument(
      <Jobs list={['front', 'back', 'r&d']} 
            display={display}/>
      
    );
    
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    Simulate.click(buttons[0]);

    expect(displayed).to.equal('front');
  });
  
  it('renders just the job when needed', () => {
    const component = renderIntoDocument(
        <Jobs job="front" />
    );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    expect(buttons.length).to.equal(0);

    const job = ReactDOM.findDOMNode(component.refs.job);
    expect(job).to.be.ok;
    expect(job.textContent).to.contain('front');
  });
  
  it('renders as a pure component', () => {
    const list = List.of('front', 'back', 'r&d');
    const component = renderIntoDocument(
        <Jobs list={list} />
    );

    let firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0];
    expect(firstButton.textContent).to.equal('front');

    list.set(0, 'design');
    component.setProps({list});
    firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0];
    expect(firstButton.textContent).to.equal('front');
  });

});