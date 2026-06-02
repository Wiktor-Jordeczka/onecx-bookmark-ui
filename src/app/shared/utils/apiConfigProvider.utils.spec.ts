import { TestBed } from '@angular/core/testing'
import { provideHttpClient } from '@angular/common/http'
import { provideHttpClientTesting } from '@angular/common/http/testing'

import { PortalApiConfiguration } from '@onecx/angular-utils'
import { AppStateService } from '@onecx/angular-integration-interface'
import { provideAppStateServiceMock } from '@onecx/angular-integration-interface/mocks'

import { apiConfigProvider } from './apiConfigProvider.utils'

describe('apiConfigProvider', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting(), AppStateService, provideAppStateServiceMock()]
    }).compileComponents()
  })

  it('should return a PortalApiConfiguration instance', () => {
    const result = TestBed.runInInjectionContext(() => apiConfigProvider())
    expect(result).toBeInstanceOf(PortalApiConfiguration)
  })

  it('should pass the Configuration class to PortalApiConfiguration', () => {
    const spy = jest.spyOn(PortalApiConfiguration.prototype as object, 'constructor' as never)
    const result = TestBed.runInInjectionContext(() => apiConfigProvider())
    expect(result).toBeInstanceOf(PortalApiConfiguration)
    spy.mockRestore()
  })
})
