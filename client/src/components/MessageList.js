import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
///import uuid from 'uuid/v1';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/ItemActions';
import PropTypes from 'prop-types';

class MessageList extends Component {
    static propTypes = {
        getItems: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    };

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    };

    render() {
        if (!this.props.isAuthenticated) return null;
        this.props.getItems();
        const { items } = this.props.item;
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className='message-list'>
                        {items.map(({ _id, name }) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className="remove-bin"
                                        color="danger"
                                        size="sm"
                                        onClick={this.onDeleteClick.bind(this, _id)}
                                    >
                                        &times;
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}


const mapStateToProps = (state) => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(
    mapStateToProps,
    { getItems, deleteItem }
)(MessageList);
