import {expect, test} from '@oclif/test'

describe('lon-multi', () => {
  test
  .stdout()
  .command(['lon-multi'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['lon-multi', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
