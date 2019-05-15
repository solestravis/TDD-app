import Home from './main';

import { connect } from 'react-redux';

import { deletePhrase, loadPhrase, searchPhrase } from 'core/Home/action';
import { phraseSelector, searchSelector } from 'core/Home/selector';

function mapStateToProps (state) {
    return {
        phraseCollection: phraseSelector(state),
        searchCollection: searchSelector(state)
    };
}

const mapDispatchToProps = { deletePhrase, loadPhrase, searchPhrase };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
