import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

const useStyles = makeStyles(() => ({
    root: {
        height: 44,
        marginTop: 23,
        marginLeft: 6,
        display: "flex",
        alignItems: "center"
      },
    unread: {
        fontSize: 14,
        letterSpacing: -0.17,
        paddingLeft: 6,
        paddingRight: 6,
        color: "white",
        background: "#3A8DFF",
        borderRadius: "50%"
    }
}));

const UnreadMessage = (props) => {
    const classes = useStyles();

    const { conversation } = props;

    return (
        <Box className={classes.root}>
            <Typography className={classes.unread}>
                {conversation.unreadMessages}
            </Typography>
        </Box>
    );
};

export default connect()(UnreadMessage);