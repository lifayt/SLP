import React, { Component } from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import MenuButtons from '../helpers/MenuButtons';
import FlatButton from 'material-ui/FlatButton';
import {red900, red800, red700, red600, red500, red400, red300, red200} from 'material-ui/styles/colors'

const styles = {
  root: {
    backgroundColor: red400,
  }
}


class SLP extends Component {

  render () {
    return (
      <div>
        <Toolbar
          style={styles.root}
        >
          <ToolbarGroup>
            <ToolbarTitle
              text="SLP"
            />
            <ToolbarSeparator />
            <MenuButtons />
          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  }
}

export default SLP;