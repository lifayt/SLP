import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import {red900, red800, red700, red600, red500, red400, red300, red200} from 'material-ui/styles/colors'

const styles = {
  root: {
    margin: '0px 5px',
    color: 'rgba(0, 0, 0, 0.4)',
  }
}

const Items = ["ABOUT","LESSONS","COURSES","POLICIES","EVENTS","CONTACT","BLOG"].map((section) => 
  <FlatButton 
    label={section}
    hoverColor={red600}
    rippleColor={red400}
    style={styles.root}
  />
);

const MenuButtons = () => {
  return (
    <div>
      {Items}
    </div>
  );
}

export default MenuButtons
