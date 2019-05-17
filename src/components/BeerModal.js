import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Image } from "semantic-ui-react";
import { modalClose } from "../actions";

export class BeerModal extends Component {
  handleClose = () => {
    this.props.modalClose(false);
  };

  render() {
    const { beer } = this.props;

    if (!beer) {
      return null;
    }

    return (
      <Modal
        open={this.props.modal}
        onClose={this.handleClose}
        closeIcon
        size="small"
      >
        <Modal.Content image>
          <Image wrapped size="medium" src={beer.image_url} />
          <Modal.Description>
            <Modal.Header>
              <h3>{beer.name}</h3>
            </Modal.Header>
            <p>{beer.description}</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  beers: state.beers.data,
  beer: state.beers.selected,
  modal: state.modal
});

export default connect(
  mapStateToProps,
  { modalClose }
)(BeerModal);
