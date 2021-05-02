import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 35
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    backgroundColor: '#068b8b',
  },
}))(LinearProgress);

const SkillDetails = ({details}) => {
    return (
        <div className="d-flex justify-content-center my-2">
            <h6 className="d-flex align-items-center about-bg p-2 px-4 text-white text-wrap" style={{ height: '35px'}}>{details.name}</h6>
            <BorderLinearProgress style={{ width: "100%"}} variant="determinate" value={details.value}/>
            <p className="d-flex align-items-center ms-2" style={{ height: '35px' }}>{details.value}%</p>
        </div>
    );
};

export default SkillDetails;