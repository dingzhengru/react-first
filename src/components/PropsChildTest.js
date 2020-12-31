import React from 'react';
import PropTypes from 'prop-types';

class PropsChildTest extends React.Component {
  static get propTypes() {
    return {
      children: PropTypes.any,
      header: PropTypes.any,
      footer: PropTypes.any,
    };
  }
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header>{this.props.header}</header>
        <main>{this.props.children}</main>
        <footer>{this.props.footer}</footer>
      </div>
    );
  }
}

export default PropsChildTest;
