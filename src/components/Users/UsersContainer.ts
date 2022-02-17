import {connect} from "react-redux";
import Users from "./Users";
import {AppRootStateType} from "../../redux/redux-store";
import {setUsersAC, toggleFollowUserAC, userReducerActionType, UserType} from "../../redux/userReducer";


function mapStateToProps(state: AppRootStateType) {
    return {
        users: state.usersPage.users
    }

}

function mapDispatchToProps(dispatch: (action: userReducerActionType) => void) {
    return {
        toggleFollowUser: (id: number) => {
            dispatch(toggleFollowUserAC(id))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        }
    }

}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)