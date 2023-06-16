import IUser from "./IUser"

export default interface IUserTokenDTO {
    _id: IUser['_id']
    username: IUser["username"]
    token: string
}