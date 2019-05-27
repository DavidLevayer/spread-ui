import React from 'react';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import {withStyles} from '@material-ui/core';

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
};

const Mineral = (props) => {
    const {mineral, classes} = props;

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <Typography gutterBottom variant="h5" component="h2">
                    {mineral.name}
                </Typography>
            </CardActionArea>
        </Card>
    );
};

export default withStyles(styles)(Mineral);