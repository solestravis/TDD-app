import Button from 'views/components/Button';
import { Container } from 'views/components/Container';
import Input from './components/Input';
import { Layout } from 'views/components/Layout';
import PhraseList from './components/PhraseList';
import React, { Component } from 'react';
import { array, func } from 'prop-types';

class Home extends Component {

    static propTypes = {
        deletePhrase: func,
        loadPhrase: func,
        phraseCollection: array,
        searchPhrase: func
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
        const { searchPhrase } = this.props;
        searchPhrase();
    }

    render () {
        const { phraseCollection } = this.props;
        return (
            <Layout>
                <Container>
                    <Button onClick={ this._handleButtonClick }>Get new phrase!</Button>
                    <PhraseList phrases={ phraseCollection } />
                    <Input phrases={ phraseCollection } onChange={ this._handleInputChange } />
                </Container>
            </Layout>
        );
    }

}

export default Home;
