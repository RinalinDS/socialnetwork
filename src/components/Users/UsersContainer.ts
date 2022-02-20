import {connect} from "react-redux";
import Users from "./Users";
import {AppRootStateType} from "../../redux/redux-store";
import {setUsersAC, toggleFollowUserAC, userReducerActionType, UserType} from "../../redux/userReducer";



export type mapStateToPropsType = {
    users: Array<UserType>
}
export type mapDispatchToPropsType = {
    toggleFollowUser: (id: number) => void
    setUsers: (users: UserType[]) => void
}
export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

function mapStateToProps(state: AppRootStateType):mapStateToPropsType {
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