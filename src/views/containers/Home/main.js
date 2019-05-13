import Button from 'views/components/Button';
import { Container } from 'views/components/Container';
import Cross from 'views/components/Cross';
import Input from 'views/components/Input';
import { Layout } from 'views/components/Layout';
import List from 'views/components/List';
import ListItem from 'views/components/ListItem';
import { func } from 'prop-types';

import React, { Component } from 'react';

class Home extends Component {

    static propTypes = {
        deleteInsult: func,
        loadInsult: func,
        searchInsults: func
    }

    constructor (props) {
        super(props);

        this.state = {};
    }

    _handleButtonClick = () => {
        const { loadInsult } = this.props;
        loadInsult();
    }

    _handleCrossClick = () => {
        const { deleteInsult } = this.props;
        deleteInsult();
    }

    _handleInputChange = () => {
        const { searchInsults } = this.props;
        searchInsults();
    }

    render () {
        return (
            <Layout>
                <Container>
                    <Button onClick={ this._handleButtonClick }>Get new insult!</Button>
                    <List>
                        <ListItem id="2">
                            Algo <Cross onClick={ this._handleCrossClick } />
                        </ListItem>
                    </List>
                    <Input onChange={ this._handleInputChange } />
                </Container>
            </Layout>
        );
    }

}

export default Home;
