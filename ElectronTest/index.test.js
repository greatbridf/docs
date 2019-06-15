import { Selector, RequestMock } from "testcafe";

fixture `Electron Test`
  .page('./index.html')

test('Check if the page loaded properly', async t => {})

test('Check the title text', async t => {
  await t
  .expect(Selector('#title').innerText).eql('Title')
})

test('Check button', async t => {
  await t
  .setNativeDialogHandler((type)=>{
    console.log(type)
  })
  .click('#button')
  .click('#button')
  .expect(Selector('#title').innerText).eql('2')
})

test('Check ajax response', async t => {
  await t
  .expect(Selector('#description').innerText).eql('jbk fruit', 'emmm', {
    timeout: 10000,
  })
})

test('Check custom response', async t => {
  var mock = RequestMock()
  .onRequestTo('https://interface.greatbridf.top/cash_flow/?method=get')
  .respond(JSON.stringify([
    {
      description: 'testing...',
    },
  ]), 200, {
    'access-control-allow-origin': '*'
  })
  await t
  .addRequestHooks(mock)
  .expect(Selector('#description').innerText).eql('testing...')
})