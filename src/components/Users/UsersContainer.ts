import {connect} from "react-redux";
import Users from "./Users";
import {AppRootStateType} from "../../redux/redux-store";
import {
    setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC,
    toggleFollowUserAC,
    userReducerActionType,
    UserReducerStateType,
    UserType
} from "../../redux/userReducer";


export type mapStateToPropsType = UserReducerStateType

export type mapDispatchToPropsType = {
    toggleFollowUser: (id: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (count: number) => void
}
export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

function mapStateToProps(state: AppRootStateType): mapStateToPropsType {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount
    }

}


function mapDispatchToProps(dispatch: (action: userReducerActionType) => void) {
    return {
        toggleFollowUser: (id: number) => {
            dispatch(toggleFollowUserAC(id))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (page: number) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalUsersCount: (count: number) => {
            dispatch(setTotalUsersCountAC(count))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)