import {expect, test} from '@oclif/test'

describe('lon-matrix', () => {
  test
  .stdout()
  .command(['lon-matrix'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['lon-matrix', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
