import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollowUser,
    toggleIsFetching,
    UserReducerStateType,
    UserType
} from "../../redux/userReducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../../common/Preloader";


export type mapStateToPropsType = UserReducerStateType

export type mapDispatchToPropsType = {
    toggleFollowUser: (id: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (count: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType


class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }

    onPageChanged = (page: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(res => {
                console.log(res)
                this.props.toggleIsFetching(false)
                this.props.setUsers(res.data.items)
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
                        toggleFollowUser={this.props.toggleFollowUser}
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
        isFetching: state.usersPage.isFetching
    }

}


export default connect(mapStateToProps, {
    toggleFollowUser,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
})(UsersContainer)
