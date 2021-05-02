import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const ProjectDetails = ({ project }) => {
    const projectImgDetails = {
        border: "1px solid indigo"
    }
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className="col-md-6 col-sm-12 mb-4">
            <img className='w-100' src={project.img} style={projectImgDetails} alt="" />
            <h1 className="text-center">
                <button className="btn btn-info text-white fw-bolder" onClick={handleOpen}>
                    Details
                </button>
            </h1>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper} style={{width: '800px'}}>
                        <img src={project.img} alt="" style={{width: '100%'}} />
                        <h2 id="transition-modal-title" className="text-center">{project.name}</h2>
                        <p id="transition-modal-description">{project.description}</p>
                        <h4>Language: {project.language}</h4>
                        <p className="text-center">
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer"><button className="btn btn-outline-info me-3 fw-bolder">Live Preview</button></a>
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer"><button className="btn btn-outline-info ms-3 fw-bolder">Github</button></a>
                        </p>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
};

export default ProjectDetails;