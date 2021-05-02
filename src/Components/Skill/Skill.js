import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 30
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    backgroundColor: '#068b8b',
  },
}))(LinearProgress);

const Skill = () => {
    return (
        <div className="d-flex justify-content-center">
            <h5 className="d-flex align-items-center about-bg p-2 px-4 text-white" style={{ height: '30px'}}>CSS</h5>
            <BorderLinearProgress style={{ width: "100%"}} variant="determinate" value={90}/>
            <p className="d-flex align-items-center ms-2" style={{ height: '30px' }}>90%</p>
        </div>
    );
};

export default Skill;