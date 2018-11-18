import { PureComponent } from 'react'
import React = require('react');
import MCard from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

interface CardProps { }
interface CardState { }

export default class Card extends PureComponent<CardProps, CardState> {
  render() {
    return (
      <div>
        <MCard>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Card Title
        </Typography>
            <Typography variant="h5" component="h2">
              Card Sub
            </Typography>
            <Typography color="textSecondary">
              Card Tag
        </Typography>
            <Typography component="p">
              Card Partner
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </MCard>
      </div>
    )
  }
}
