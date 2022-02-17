require('dotenv').config();
const Binance = require('node-binance-api');

const binance = new Binance().options({
    APIKEY: process.env.APIKEY,
    APISECRET: process.env.APISECRET,
    recvWindow: 20000, // Optional, defaults to 5000, increase if you're getting timestamp errors
    // 'test': true
  });

  cryptoBalance = ['BTC', 'LTC', 'ETH','NEO','BNB','QTUM','EOS','SNT','BNT','GAS','BCC','USDT','HSR','OAX','DNT','MCO','ICN','ZRX','OMG','WTC','YOYO','LRC','TRX','SNGLS','STRAT','BQX','FUN','KNC','CDT','XVG','IOTA','SNM','LINK','CVC','TNT','REP','MDA','MTL','SALT','NULS','SUB','STX','MTH','ADX','ETC','ENG','ZEC','AST','GNT','DGD','BAT','DASH','POWR','BTG','REQ','XMR','EVX','VIB','ENJ','VEN','ARK','XRP','MOD','STORJ','KMD','RCN','EDO','DATA','DLT','MANA','PPT','RDN','GXS','AMB','ARN','BCPT','CND','GVT','POE','BTS','FUEL','XZC','QSP','LSK','BCD','TNB','ADA','LEND','XLM','CMT','WAVES','WABI','GTO','ICX','OST','ELF','AION','WINGS','BRD','NEBL','NAV','VIBE','LUN','TRIG','APPC','CHAT','RLC','INS','PIVX','IOST','STEEM','NANO','AE','VIA','BLZ','SYS','RPX','NCASH','POA','ONT','ZIL','STORM','XEM','WAN','WPR','QLC','GRS','CLOAK','LOOM','BCN','TUSD','ZEN','SKY','THETA','IOTX','QKC','AGI','NXS','SC','NPXS','KEY','NAS','MFT','DENT','IQ','ARDR','HOT','VET','DOCK','POLY','VTHO','ONG','PHX','HC','GO','PAX','RVN','DCR','USDC','MITH','BCHABC','BCHSV','REN','BTT','USDS','FET','TFUEL','CELR','MATIC','ATOM','PHB','ONE','FTM','BTCB','USDSB','CHZ','COS','ALGO','ERD','DOGE','BGBP','DUSK','ANKR','WIN','TUSDB','COCOS','PERL','TOMO','BUSD','BAND','BEAM','HBAR','XTZ','NGN','DGB','NKN','GBP','EUR','KAVA','RUB','UAH','ARPA','TRY','CTXC','AERGO','BCH','TROY','BRL','VITE','FTT','AUD','OGN','DREP','BULL','BEAR','ETHBULL','ETHBEAR','XRPBULL','XRPBEAR','EOSBULL','EOSBEAR','TCT','WRX','LTO','ZAR','MBL','COTI','BKRW','BNBBULL','BNBBEAR','HIVE','STPT','SOL','IDRT','CTSI','CHR','BTCUP','BTCDOWN','HNT','JST','FIO','BIDR','STMX','MDT','PNT','COMP','IRIS','MKR','SXP','SNX','DAI','ETHUP','ETHDOWN','ADAUP','ADADOWN','LINKUP','LINKDOWN','DOT','RUNE','BNBUP','BNBDOWN','XTZUP','XTZDOWN','AVA','BAL','YFI','SRM','ANT','CRV','SAND','OCEAN','NMR','LUNA','IDEX','RSR','PAXG','WNXM','TRB','EGLD','BZRX','WBTC','KSM','SUSHI','YFII','DIA','BEL','UMA','EOSUP','TRXUP','EOSDOWN','TRXDOWN','XRPUP','XRPDOWN','DOTUP','DOTDOWN','NBS','WING','SWRV','LTCUP','LTCDOWN','CREAM','UNI','OXT','SUN','AVAX','BURGER','BAKE','FLM','SCRT','XVS','CAKE','SPARTA','UNIUP','UNIDOWN','ALPHA','ORN','UTK','NEAR','VIDT','AAVE','FIL','SXPUP','SXPDOWN','INJ','FILDOWN','FILUP','YFIUP','YFIDOWN','CTK','EASY','AUDIO','BCHUP','BCHDOWN','BOT','AXS','AKRO','HARD','KP3R','RENBTC','SLP','STRAX','UNFI','CVP','BCHA','FOR','FRONT','ROSE','MDX','HEGIC','AAVEUP','AAVEDOWN','PROM','BETH','SKL','GLM','SUSD','COVER','GHST','SUSHIUP','SUSHIDOWN','XLMUP','XLMDOWN','DF','JUV','PSG','BVND','GRT','CELO','TWT','REEF','OG','ATM','ASR','1INCH','RIF','BTCST','TRU','DEXE','CKB','FIRO','LIT','PROS','VAI','SFP','FXS','DODO','AUCTION','UFT','ACM','PHA','TVK','BADGER','FIS','QI','OM','POND','ALICE','DEGO','BIFI','LINA','PERP','RAMP','SUPER','CFX','TKO','AUTO','EPS','PUNDIX','TLM','1INCHUP','1INCHDOWN','MIR','BAR','FORTH','EZ','AR','ICP','SHIB','GYEN','POLS','MASK','LPT','AGIX','ATA','NU','GTC','KLAY','TORN','KEEP','ERN','BOND','MLN','C98','FLOW','QUICK','RAY','MINA','QNT','CLV','XEC','ALPACA','FARM','VGX','MBOX','WAXP','TRIBE','GNO','USDP','DYDX','GALA','ILV','YGG','FIDA','AGLD','BETA','RAD','RARE','SSV','LAZIO','MOVR','CHESS','DAR','ACA','BNX','RGT','CITY','ENS','PORTO','JASMY','AMP','PLA','PYR','SANTOS','RNDR','ALCX','MC','ANY','BICO','FLUX','UST','HIGH','OOKI','CVX','PEOPLE','SPELL','JOE','BDOT','GLMR','ACH','IMX','LOKA','BTTC','ANC','API3','XNO','WOO'];

  let myCryptoList = [];

  let myCrypto = {
    cryptoName: 'undefined',
    pairName: 'undefined',
    cryptoPrice: 0,
    accountAvailable: 0,
    cryptoValue: 0
  };

binance.prices(function (err, ticker) {

  if(err) console.error(err);

  binance.balance(function (err, balances) {
      if(err) console.error(err);

      for(let crypto of cryptoBalance) {
        if(balances[crypto].available !== '0.00000000') {
          const newCrypto = Object.create(myCrypto);

          if(crypto !== 'USDT') {
            newCrypto.cryptoPrice = ticker[crypto+'USDT'];
            newCrypto.pairName = crypto + 'USDT';
            newCrypto.cryptoName = crypto;
            newCrypto.accountAvailable = balances[crypto].available;
            let value = parseFloat(newCrypto.accountAvailable*newCrypto.cryptoPrice).toFixed(2);
            newCrypto.cryptoValue = value + '$';
          } else if ( crypto === 'USDT') {
            newCrypto.cryptoPrice = 1;
            newCrypto.pairName = 'USDT';
            newCrypto.cryptoName = crypto;
            newCrypto.accountAvailable = balances[crypto].available;
            let value = parseFloat(newCrypto.accountAvailable*newCrypto.cryptoPrice).toFixed(2);
            newCrypto.cryptoValue = value + '$';
          }
          
          if(newCrypto.cryptoValue != NaN) {
            myCryptoList.push(newCrypto)
          }
        }
      }

      for(let cryp of myCryptoList) {
        console.log(cryp);
      }
  });

});