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
        searchCollection: array,
        searchPhrase: func
    }

    constructor (props) {
        super(props);
        this.state = {
            inputValue: ''
        };
    }

    _handleButtonClick = () => {
        const { loadPhrase } = this.props;
        loadPhrase();
    }

    _handleCrossClick = event => {
        const { deletePhrase } = this.props;
        const phraseID = event.target.id;
        deletePhrase(phraseID);
    }

    _handleInputChange = ({ target: { value } }) => {
        const { searchPhrase } = this.props;
        this.setState({ ...this.state, inputValue: value });
        searchPhrase(value);
    }

    render () {
        const { phraseCollection, searchCollection } = this.props;
        const { inputValue } = this.state;
        return (
            <Layout>
                <Container>
                    <Button onClick={ this._handleButtonClick }>Get new phrase!</Button>
                    <PhraseList input={ inputValue } phrases={ phraseCollection } results={ searchCollection } onCrossClick={ this._handleCrossClick } />
                    <Input phrases={ phraseCollection } onChange={ this._handleInputChange } />
                </Container>
            </Layout>
        );
    }

}

export default Home;
