import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/ItemActions';
import PropTypes from 'prop-types';

class ItemModal extends Component {
  state = {
    modal: false,
    body: '',
    email: ''
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      body: this.state.body,
      email: this.state.email
    };

    //Add item via addItem actions
    this.props.addItem(newItem);

    //Close modal
    this.toggle();
  };

  render() {
    return (
      <div>
        {this.props.isAuthenticated ? (
          <Button
            color="dark"
            style={{ marginBottom: '2rem' }}
            onClick={this.toggle}
          >
            Send a new message
          </Button>) : (<h4 className="mb-3 ml-4">Please log in to see your messages</h4>
          )}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Send a new message</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
              <Label for="item">Recipient Email</Label>
                <Input
                  type="text"
                  name="email"
                  id="item"
                  placeholder="Type the e-mail address here"
                  onChange={this.onChange}
                />
                <Label for="item">Message Text</Label>
                <Input
                  type="text"
                  name="body"
                  id="item"
                  placeholder="Type your message here"
                  onChange={this.onChange}
                />
                <Button
                  color="dark"
                  style={{ marginTop: '2rem' }}
                  block
                >Send</Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { addItem }
)(ItemModal);