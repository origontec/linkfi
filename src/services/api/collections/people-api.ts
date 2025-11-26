import { ApiResponse, ApisauceInstance } from "apisauce"
import {Api} from "../api"
import {Person, GetPeopleResult, PersonFormatted} from "../api.types"

export class PeopleApi {

    constructor() {
    }

  async postPeople (people: Person[]): Promise<GetPeopleResult> {
    const peopleFormatted: PersonFormatted = people.reduce((acc, person) => {
      acc[person.name] = {
        age: person.age,
        birthday: person.birthday,
      }
      return acc
    }, {} as PersonFormatted)

    return {kind: "ok", people: peopleFormatted};
  }
}
