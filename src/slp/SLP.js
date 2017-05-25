import React, { Component } from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import AppBar from 'material-ui/AppBar';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import MenuButtons from '../helpers/MenuButtons';
import MediaIcons from '../helpers/MediaIcons';
import FlatButton from 'material-ui/FlatButton';
import SvgIcon from 'material-ui/SvgIcon';
import {red900, red800, red700, red600, red500, red400, red300, red200} from 'material-ui/styles/colors';

const styles = {
  root: {
    backgroundColor: red400,
  }
}

const FacebookIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M464 0h-416c-26.4 0-48 21.6-48 48v416c0 26.4 21.6 48 48 48h208v-224h-64v-64h64v-32c0-52.9 43.1-96 96-96h64v64h-64c-17.6 0-32 14.4-32 32v32h96l-16 64h-80v224h144c26.4 0 48-21.6 48-48v-416c0-26.4-21.6-48-48-48z" />
  </SvgIcon>
);


class SLP extends Component {
  render () {
    return (
      <AppBar
        title='SLP'
        iconElementRight={<FacebookIcon />}
      />
    );
  }
}

export default SLP;