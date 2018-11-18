import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

interface BoardProps { }
interface BoardState {
    hasError: boolean
}

export default class Board extends Component<BoardProps, BoardState> {
    constructor(props: BoardProps, state: BoardState) {
        super(props, state)
    }
    render() {
        return (
            <div>
                <Grid item xs={12}>
                    <Grid container justify="center">
                        {[0, 1, 2].map(value => (
                            <Grid key={value} item>
                                <Paper />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </div>
        )
    }
}
