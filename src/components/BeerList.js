import React, { Component } from "react";
import { Waypoint } from "react-waypoint";
import { Card, Image, Grid, Header, Divider } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetechBeers, fetechBeer, modalOpen } from "../actions";

export class BeerList extends Component {
  state = {
    page: 1
  };

  componentDidMount() {
    this.props.fetechBeers(this.state.page);
  }

  renderWaypoint() {
    if (!this.props.beers) {
      return null;
    }

    return <Waypoint onEnter={() => this.onWaypointEnter()} />;
  }

  onWaypointEnter() {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.props.fetechBeers(this.state.page);
      }
    );
  }

  renderBeers() {
    return this.props.beers.map(beer => {
      return (
        <Grid.Column mobile={16} tablet={8} computer={5} key={beer.id}>
          <Card fluid onClick={() => this.onShowBeerClick(beer.id)}>
            <Image src={beer.image_url} wrapped ui={false} size="medium" />
            <Card.Content>
              <Card.Header>{beer.name}</Card.Header>
              <Card.Meta>
                <span className="date">{beer.abv}</span>
              </Card.Meta>
              <Card.Description>{beer.tagline}</Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      );
    });
  }

  onShowBeerClick = id => {
    this.props.modalOpen(true);

    const beer = this.props.beers.filter(beer => {
      return beer.id === id;
    });

    this.props.fetechBeer(beer[0]);
  };

  render() {
    return (
      <div>
        <Header as="h1">Do you like beer?</Header>
        <Divider />
        <Grid>{this.renderBeers()};</Grid>
        {this.renderWaypoint()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  beers: state.beers.data
});

export default connect(
  mapStateToProps,
  { fetechBeers, fetechBeer, modalOpen }
)(BeerList);
