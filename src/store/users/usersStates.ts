import IUserGetDto from "../../interfaces/IUserGetDTO"


export default interface IUsersState {
    user: IUserGetDto | undefined
    isAuth: boolean
    message: string
}
