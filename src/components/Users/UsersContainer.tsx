import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {followInProgress, followUser, requestUsers, unfollowUser, UserReducerStateType} from "../../redux/userReducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../../common/Preloader/Preloader";
import {
    getCurrentPage,
    getIsAuth,
    getIsFetching,
    getIsFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/selectors/user-selector";


export type mapStateToPropsType = UserReducerStateType & {
    isAuth: boolean
}

export type mapDispatchToPropsType = {
    followUser: (id: number) => void
    unfollowUser: (id: number) => void
    followInProgress: (id: number, isFetching: boolean) => void
    requestUsers: (currentPage: number, pageSize: number) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType


class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (page: number) => {
        this.props.requestUsers(page, this.props.pageSize)
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
        users: getUsers(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        totalUsersCount: getTotalUsersCount(state),
        isFetching: getIsFetching(state),
        isFollowingInProgress: getIsFollowingInProgress(state),
        isAuth: getIsAuth(state)
    }

}


export default connect(mapStateToProps, {
    followUser,
    unfollowUser,
    followInProgress,
    requestUsers,
})(UsersContainer)
