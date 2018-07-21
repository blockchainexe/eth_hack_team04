//import { Connect } from 'uport-connect'

//export let uport = new Connect('TruffleBox')
//export const web3 = uport.getWeb3()

import { Connect, SimpleSigner } from 'uport-connect'

const mnidAddress = '2ooV9LR6Jd6ehFVP9DZ88jc4yB1xvFQ42pj';
const signingKey = 'ab4f0392913898717592ce4a2dad7dce5b14101743a4ec416bbdb01f3869dd7e';
const appName = 'Test20180720';


export const uport = new Connect(appName, {
  clientId: mnidAddress,
  network: 'rinkeby',
  signer: SimpleSigner(signingKey)
})