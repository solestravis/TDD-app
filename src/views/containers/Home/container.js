import Home from './main';

import { connect } from 'react-redux';

import { phraseSelector } from 'core/Home/selector';
import { deletePhrase, loadPhrase, searchPhrase } from 'core/Home/action';

function mapStateToProps (state) {
    return {
        phraseCollection: phraseSelector(state)
    };
}

const mapDispatchToProps = { deletePhrase, loadPhrase, searchPhrase };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
