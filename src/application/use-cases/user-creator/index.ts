import { User } from '../../../domain/entities/user-entity'
import { UserAlreadyExistsException } from '../../../domain/exceptions/user-already-exist-exception'
import { UserRepository } from '../../../domain/repositories/user-repository'
import { ExistUserByUserName } from '../../../domain/services/user/exists-user-by-user-name'

export class UserCreatorUseCase {
  private readonly _userRepository: UserRepository
  private readonly _existsUserByUserName: ExistUserByUserName

  constructor (userRepository: UserRepository) {
    this._userRepository = userRepository
    this._existsUserByUserName = new ExistUserByUserName(userRepository)
  }

  async run (body: User): Promise<User> {
    const existUser: boolean = await this._existsUserByUserName.run(body.username)

    if (existUser) throw new UserAlreadyExistsException()

    const userCreated: User = await this._userRepository.save(body)

    return userCreated
  }
}
