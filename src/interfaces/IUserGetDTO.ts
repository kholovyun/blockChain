import IUSer from "./IUser";

export default interface IUserGetDto {
    _id: IUSer['_id']
    username: IUSer['username']
    token: IUSer['token']
    role: IUSer['role']
}
