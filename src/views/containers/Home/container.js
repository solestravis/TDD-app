import Home from './main';

import { connect } from 'react-redux';

import { exampleActionCreator } from 'core/Home/action';
import { exampleSelector } from 'core/Home/selector';

function mapStateToProps (state) {
    return {
        title: exampleSelector(state)
    };
}

const mapDispatchToProps = { exampleActionCreator };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
