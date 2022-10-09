import reqeuest from './reqeuest'

export function getAPPdata() {
  return reqeuest({
    url: "todos",
    params: {
      _limit: 5
    }
  })
}
