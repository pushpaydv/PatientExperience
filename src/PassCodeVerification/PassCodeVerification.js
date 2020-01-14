import React from 'react';
import { Paper, withStyles, Grid, TextField, Button } from '@material-ui/core';
import { Lock } from '@material-ui/icons'

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: theme.spacing.unit
    }
});

class LoginTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isEnrolled: false,
          passcode: '',
          items: []
        };
      }
      
    verifyUser = () =>{
            alert("you have entered :" + this.state.passcode)
    }
    handleChange =({target})=>{
        this.setState({
            passcode: target.value
          });
    }

    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.padding}>
                <div className={classes.margin}>
                <Grid container spacing={8} alignItems="flex-end">                        
                        <Grid item md={true} sm={true} xs={true}>
                            <h1>Passcode Verification</h1>
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">                        
                        <Grid item md={true} sm={true} xs={true}>
                            <h7>Please enter passcode sent your email id</h7>
                        </Grid>
                    </Grid>  
                    <Grid container spacing={8} alignItems="flex-end">                        
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="passcode" label="PassCode" variant="outlined" helperText={this.state.error} onChange={this.handleChange}/>
                        </Grid>
                    </Grid>                                    
                    <Grid container justify="left" style={{ marginTop: '10px' }}>
                        <Button variant="outlined" color="primary" onClick={this.verifyUser}>Verify</Button>
                        <Lock></Lock>
                        <h10 style={{marginLeft:'10px'}}>Retrieve passcode</h10>
                    </Grid>                                      
                </div>
            </Paper>
        );
    }
}

export default withStyles(styles)(LoginTab);