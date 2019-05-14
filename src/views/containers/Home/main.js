import Button from 'views/components/Button';
import { Container } from 'views/components/Container';
import Cross from 'views/components/Cross';
import Input from 'views/components/Input';
import { Layout } from 'views/components/Layout';
import List from 'views/components/List';
import ListItem from 'views/components/ListItem';
import React, { Component } from 'react';
import { array, func } from 'prop-types';

class Home extends Component {

    static propTypes = {
        deletePhrase: func,
        loadPhrase: func,
        phraseCollection: array,
        searchPhrases: func
    }

    constructor (props) {
        super(props);

        this.state = {};
    }

    _handleButtonClick = () => {
        const { loadPhrase } = this.props;
        loadPhrase();
    }

    _handleCrossClick = () => {
        const { deletePhrase } = this.props;
        deletePhrase();
    }

    _handleInputChange = () => {
        const { searchPhrases } = this.props;
        searchPhrases();
    }

    render () {
        const { phraseCollection } = this.props;
        return (
            <Layout>
                <Container>
                    <Button onClick={ this._handleButtonClick }>Get new phrase!</Button>
                    <List>
                        {
                            phraseCollection.map((phrase, index) => (
                                <ListItem id={ index } key={ index } >
                                    { phrase } <Cross onClick={ this._handleCrossClick } />
                                </ListItem>
                            ))
                        }
                    </List>
                    <Input onChange={ this._handleInputChange } />
                </Container>
            </Layout>
        );
    }

}

export default Home;
