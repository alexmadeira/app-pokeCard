import { IBase } from './base'

interface IVersionGroupDetail {
  level_learned_at: number
  move_learn_method: IBase
  version_group: IBase
}

export interface IMovie {
  move: IBase
  version_group_details: IVersionGroupDetail[]
}
