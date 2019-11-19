import React from 'react';
import PropTypes from 'prop-types';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';

const expandIcon = <ExpandMoreIcon />;

const Item = ({ label, title, content }) => (
  <ExpansionPanel>
    <ExpansionPanelSummary expandIcon={expandIcon}>
      {label && <Chip label={label} variant="outlined" size="small" />}
      <Typography>{title}</Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <Typography dangerouslySetInnerHTML={{ __html: content }} />
    </ExpansionPanelDetails>
  </ExpansionPanel>
);

Item.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Item;
