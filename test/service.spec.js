import { expect } from 'chai'
import service from '../src/service'

describe('service', () => {
  it('has a start function', () => {
    expect(service()).to.have.property('start').which.is.a('function')
  })
})
