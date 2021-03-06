import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Container from 'components/layout/Container';
import { BackIcLink } from 'components/layout/Links';
import { setAdvertPreview, ADVERT_BUY } from 'components/routes/PostingsPreview/actions';

import PostingForm from './PostingForm';
import PostingTitle from './PostingTitle';

class PostingsBuy extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(form) {
        const extraData = { type: ADVERT_BUY, author: this.props.userInfo.username };
        this.props.setAdvertPreview(form, extraData);
        this.props.push('/postings/buy/preview');
    }

    render() {
        const { countries, states, userInfo } = this.props;

        return (
            <Container flex='1 0 auto' flexDirection='column' py={4}>
                <BackIcLink path='/dashboard' text='Dashboard' />
                <PostingTitle />
                <PostingForm countries={countries} states={states} onSubmit={this.onSubmit} defaultCountry={userInfo ? userInfo.countryCode : undefined} />
            </Container>
        )
    }
}

const mapStateToProps = ({ app }) => ({
    countries: app.countries,
    states: app.states,
    userInfo: app.userInfo,
});

export default connect(mapStateToProps, { setAdvertPreview, push })(PostingsBuy);
