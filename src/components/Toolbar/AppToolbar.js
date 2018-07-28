import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -18,
        marginRight: 10,
    },
};

const AppToolbar = (props) => {
    AppToolbar.propTypes = {
        classes: PropTypes.object.isRequired,
    };

    const { classes } = props;

    return (
            <div className={classes.root}>
                <AppBar position="sticky" colorPrimary>
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="headline" color="inherit" align="center">
                            Colby Johnson
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
};

export default withStyles(styles)(AppToolbar);