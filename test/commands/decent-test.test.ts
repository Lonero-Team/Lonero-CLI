import {expect, test} from '@oclif/test'

describe('decent-test', () => {
  test
  .stdout()
  .command(['decent-test'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['decent-test', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
