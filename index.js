require('dotenv').config();
const Binance = require('node-binance-api');

const binance = new Binance().options({
    APIKEY: process.env.APIKEY,
    APISECRET: process.env.APISECRET,
    recvWindow: 20000, // Optional, defaults to 5000, increase if you're getting timestamp errors
    // 'test': true
  });

  let globalPair = "BTCUSDT";
  let resultBTCinUSDT;

  //Futur update
  infoCrypto = {
    "status": "UNDEFINED"
  }

  //Gets the actual BTC value
  binance.prices(function (err, ticker) {
    resultBTCinUSDT = ticker[globalPair];
    console.log(resultBTCinUSDT);
  });

//Return balance of the account using => balances.USDT.available
binance.balance(function (err, balances) {
    //Retrieve the BTC value
    let amountBTC = balances.BTC.available;

    console.log(amountBTC*resultBTCinUSDT);

    //Look in every crypto
    for(let balance in balances) {

      //Using USDT
      if (typeof balances.USDT !== 'undefined') {
        //If needed parseFloat(quantity).toFixed(0)
        // console.log(balances.USDT.available);
      }
    }

});