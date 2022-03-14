import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {followInProgress, followUser, getUsers, unfollowUser, UserReducerStateType} from "../../redux/userReducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../../common/Preloader/Preloader";


export type mapStateToPropsType = UserReducerStateType & {
    isAuth: boolean
}

export type mapDispatchToPropsType = {
    followUser: (id: number) => void
    unfollowUser: (id: number) => void
    followInProgress: (id: number, isFetching: boolean) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType


class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (page: number) => {
        this.props.getUsers(page, this.props.pageSize)
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

function mapStateToProps(state: AppRootStateType) {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching,
        isFollowingInProgress: state.usersPage.isFollowingInProgress,
        isAuth: state.auth.isAuth,
    }

}


export default connect(mapStateToProps, {
    followUser,
    unfollowUser,
    followInProgress,
    getUsers,
})(UsersContainer)
