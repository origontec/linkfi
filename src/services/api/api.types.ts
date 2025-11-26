import {GeneralApiProblem} from "./api-problem"
import {Character} from "../../models/character/character"

export interface User {
  id: number
  name: string
}

export interface Person {
  no: number
  name: string
  age: number
  birthday: string
}

export type GetUsersResult = { kind: "ok"; users: User[] } | GeneralApiProblem
export type GetUserResult = { kind: "ok"; user: User } | GeneralApiProblem

export type GetCharactersResult = { kind: "ok"; characters: Character[] } | GeneralApiProblem
export type GetCharacterResult = { kind: "ok"; character: Character } | GeneralApiProblem

export type PersonFormatted = Record<string, Omit<Person, "no" | "name">>
export type GetPeopleResult = { kind: "ok"; people: PersonFormatted } | GeneralApiProblem