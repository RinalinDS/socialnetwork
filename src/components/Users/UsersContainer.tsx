import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    followInProgress,
    followUser,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollowUser,
    UserReducerStateType,
    UserType
} from "../../redux/userReducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../../common/Preloader";
import {usersAPI} from "../../api/usersAPI";


export type mapStateToPropsType = UserReducerStateType

export type mapDispatchToPropsType = {
    followUser: (id: number) => void
    unfollowUser: (id: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (count: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    followInProgress: (id: number, isFetching: boolean) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType


class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (page: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(page)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })

    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> :
                    <Users
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        followUser={this.props.followUser}
                        unfollowUser={this.props.unfollowUser}
                        isFollowingInProgress={this.props.isFollowingInProgress}
                        followInProgress={this.props.followInProgress}
                    />
                }
            </>
        )

    }

}

function mapStateToProps(state: AppRootStateType): mapStateToPropsType {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching,
        isFollowingInProgress: state.usersPage.isFollowingInProgress
    }

}


export default connect(mapStateToProps, {
    followUser,
    unfollowUser,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    followInProgress,
})(UsersContainer)
