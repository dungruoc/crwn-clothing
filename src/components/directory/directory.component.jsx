import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';


import './directory.styles.scss';

const DirectoryMenu = ({directorySections}) => (
  <div className="directory-menu">
    {directorySections.map(({id, ...otherSectionProps}) =>
      <MenuItem key={id} {...otherSectionProps}/>)
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  directorySections: selectDirectorySections
})

export default connect(mapStateToProps, null) (DirectoryMenu);