import { changeNewMessageActionCreator, newMessageActionCreator } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { AuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (store) => {
    return {
        dialogState: store.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeNewMessageText: (text) => {
            dispatch(changeNewMessageActionCreator(text))
        },
        addNewMessage: (text) => {
            dispatch(newMessageActionCreator(text))
        },
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    AuthRedirect,
    )(Dialogs)