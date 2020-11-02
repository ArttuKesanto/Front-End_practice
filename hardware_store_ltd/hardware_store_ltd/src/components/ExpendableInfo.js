import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
//import Location from './components/locationmap/Location';

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    backgroundColor: '',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(.02, 0, 0, .04)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 100,
    '&$expanded': {
      minHeight: 60,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    justifyContent: 'center',
  },
}))(MuiExpansionPanelDetails);


export default function InfoPanelsCompany() {

    const personnel = [ 
        { id: 1,
        name: 'Arttu Aleksi Kesanto',
        position: 'Head of Organization',
        desc: 'Handling many different opportunities and tasks within the company. Contact me at +358 445110225.',
        pic: 'https://media-exp1.licdn.com/dms/image/C5603AQG3vnQmlC082Q/profile-displayphoto-shrink_200_200/0?e=1586995200&v=beta&t=_zEimhjDB9asl0plL2OHyz8RHP9nluXxlO0BJOZ3s8c',
        phone: '+358 445110225'
        },
        { id: 3,
        name: 'Mikko Lappalainen',
        position: 'Head of Programming',
        desc: 'Making sure that our everyday processes are working, and that our lovely website is up and running!',
        pic: '',
        phone: '+358 40 8772641'
        }, 
        { id: 2,
        name: 'Nikolas Kunnas',
        position: 'Storage / Supplies',
        desc: 'The man behind the scenes - handling the shipment of products and goodies!',
        pic: '',
        phone: '+358 408114957'
        },
        ];

  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography style={{margin: "auto"}}>About the personnel</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{}}>
          <Grid container spacing={2} direction="column"
          justify="space-between"
          alignItems="center">
    { 
      personnel.map ( person => {
        return(
          <Grid item key={person.id}>
            <Card style={ {width: 800, height: 400, backgroundColor:'#edeae1'} } >
              <CardHeader
                title={person.name}
                subheader={ person.position } />
                <CardContent align="center">
                  {
                    person.pic ?
                    <CardMedia image={ person.pic } title={ person.name } 
                    style={{height: 150, width: 150}} />
                    :
                    <Typography style={{height: 150, width: 150}}>
                      <AccountBoxIcon style={{height: 80, width: 100}}/>
                    </Typography>
                  }
                  <Typography color='textSecondary'> { person.desc }</Typography>
                </CardContent >
                <CardActions style={{justifyContent: 'center'}}>
                  <ContactPhoneIcon /> {person.phone}
                </CardActions>
            
            </Card>

            </Grid>
        )
      })
    }
    </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography style={{margin: "auto"}}>Our values and the company</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{display: 'flex', flexDirection:'column', color:'black'}}>
          <Typography style={{padding: '30px'}}>
            Performance: Electronical products are the foundation for all we do and executional excellence is a core value of our Group.
            </Typography>
            <Typography style={{padding: '30px'}}>
            Passion: Passion is at the heart of our company. We are continuously moving forward, innovating, and improving.
            </Typography>
            <Typography style={{padding: '30px'}}>
            Integrity: We are honest, open, ethical, and fair. People trust us to adhere to our word.
            </Typography>
            <Typography style={{padding: '30px'}}>
            Diversity: We know it takes people with different ideas, strengths, interests, and cultural backgrounds to make our company succeed. We encourage healthy debate and differences of opinion.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography style={{margin: "auto"}}>Pricing (extra)</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{display: 'flex', flexDirection:'column', color:'black'}}>
          <Typography variant='h5' style={{padding: '30px'}}>
            Fixing your old stuff:
          </Typography>
          <Paper>
          <Typography>
            Feel free to contact us so that we can arrange a fix for your items! We have great prices all around!
          </Typography>
          <Typography>
            Our ratings are at an outstanding 5/5 when it comes to fixing broken hardware!
          </Typography>
          </Paper>
          <Typography variant='h5' style={{padding: '30px'}}>
            Making custom changes to our products:  
          </Typography>
          <Typography>
          <Paper>
          <Typography>
            You are free to suggest any kinds of modifications to the products that we sell!
          </Typography>
          <Typography style={{fontStyle: 'italic'}}>
            Prices start at an all-time low of 50 euros (€).
          </Typography>
          </Paper>
              
          </Typography>
          <Typography variant='h5' style={{padding: '30px'}}>
            Bring us your old stuff for great benefits:
          </Typography>
          <Typography>
          <Paper>
          <Typography>
            For every piece of hardware you bring us, we will give you some kind of a monetary compensation.
          </Typography>
          <Typography style={{fontStyle: 'italic'}}>
            For example: your old graphics card will net you up to 200 euros (€)!
          </Typography>
          </Paper>
          </Typography>
          <Typography>

          </Typography>
          <Typography>
              
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <p> <img src={"https://maps.asunnot.oikotie.fi/v1/16/37336/18906.png"} /> </p>
      <p><Typography variant="caption" style={{fontStyle:"italic"}}>Here we are located at Marsinkuja 1, Vantaa</Typography>
      </p>
    </div>
  );
}