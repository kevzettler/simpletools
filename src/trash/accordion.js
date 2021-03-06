import React, { Component } from 'react';
import { Collapse, CardBody, Card, CardHeader } from 'reactstrap';


class Accordion extends Component {

  constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = { collapse: 0, cards: [1, 2, 3, 4, 5] };
    }

     toggle(e) {
      let event = e.target.dataset.event;
      this.setState({ collapse: this.state.collapse === Number(event) ? 0 : Number(event) });
    }

render() {
  const {cards, collapse} = this.state;
  return (
    <div className="container">
        <h3 className="page-header">Reactstrap Accordion using card component</h3>
        {cards.map(index => {
          return (
            <Card style={{ marginBottom: '1rem' }} key="1">
              <CardHeader onClick={this.toggle} data-event={index}>Header</CardHeader>
              <Collapse isOpen={collapse === index}>
              <CardBody>Example</CardBody>
              </Collapse>
            </Card>
          )
        })}  

           

      </div>
  );
}
}

export default Accordion;