import IResponse from "../interfaces/IResponse"
import IUserDTO from "../interfaces/IUserDTO"
import IUserGetDto from "../interfaces/IUserGetDTO"
import { instance } from "./instance"

class UsersApi  {
    public login = async (user: IUserDTO): Promise<IResponse<IUserGetDto | undefined>> => {
        try {
            const response = await instance.post(`/users/sessions`, user)
            return response.data
        } catch (err: unknown) {
            const error = err as Error
            const response: IResponse<undefined> = {
                data: undefined,
                message: error.message
            }
            return response
        }
    }

    public register = async (user: IUserDTO): Promise<IResponse<IUserGetDto | undefined>> => {
        try {
            const response = await instance.post(`/users`, user)
            return response.data
        } catch (err: unknown) {
            const error = err as Error
            const response: IResponse<undefined> = {
                data: undefined,
                message: error.message
            }
            return response
        }
    }

    public checkToken = async (): Promise<IResponse<IUserGetDto | undefined>> => {
        try {
            const response = await instance.get(`/users/token`)
            return response.data
        } catch (err: unknown) {
            const error = err as Error
            const response: IResponse<undefined> = {
                data: undefined,
                message: error.message
            }
            return response
        }
    }

}

export const usersApi = new UsersApi()