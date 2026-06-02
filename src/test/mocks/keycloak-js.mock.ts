class KeycloakMock {
  init = jest.fn().mockResolvedValue(true)
  login = jest.fn().mockResolvedValue(undefined)
  logout = jest.fn().mockResolvedValue(undefined)
  updateToken = jest.fn().mockResolvedValue(true)
  loadUserProfile = jest.fn().mockResolvedValue({})
  clearToken = jest.fn()

  authenticated = true
  token = 'mock-token'
  tokenParsed = {}
  profile = {}
  realmAccess = { roles: [] }
  resourceAccess = {}
}

export default function Keycloak() {
  return new KeycloakMock()
}
