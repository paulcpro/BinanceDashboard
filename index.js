require('dotenv').config();
const Binance = require('node-binance-api');

const binance = new Binance().options({
    APIKEY: process.env.APIKEY,
    APISECRET: process.env.APISECRET,
    recvWindow: 20000, // Optional, defaults to 5000, increase if you're getting timestamp errors
    // 'test': true
  });

  cryptoBalance = ['BTC', 'LTC', 'ETH','NEO','BNB','QTUM','EOS','SNT','BNT','GAS','BCC','USDT','HSR','OAX','DNT','MCO','ICN','ZRX','OMG','WTC','YOYO','LRC','TRX','SNGLS','STRAT','BQX','FUN','KNC','CDT','XVG','IOTA','SNM','LINK','CVC','TNT','REP','MDA','MTL','SALT','NULS','SUB','STX','MTH','ADX','ETC','ENG','ZEC','AST','GNT','DGD','BAT','DASH','POWR','BTG','REQ','XMR','EVX','VIB','ENJ','VEN','ARK','XRP','MOD','STORJ','KMD','RCN','EDO','DATA','DLT','MANA','PPT','RDN','GXS','AMB','ARN','BCPT','CND','GVT','POE','BTS','FUEL','XZC','QSP','LSK','BCD','TNB','ADA','LEND','XLM','CMT','WAVES','WABI','GTO','ICX','OST','ELF','AION','WINGS','BRD','NEBL','NAV','VIBE','LUN','TRIG','APPC','CHAT','RLC','INS','PIVX','IOST','STEEM','NANO','AE','VIA','BLZ','SYS','RPX','NCASH','POA','ONT','ZIL','STORM','XEM','WAN','WPR','QLC','GRS','CLOAK','LOOM','BCN','TUSD','ZEN','SKY','THETA','IOTX','QKC','AGI','NXS','SC','NPXS','KEY','NAS','MFT','DENT','IQ','ARDR','HOT','VET','DOCK','POLY','VTHO','ONG','PHX','HC','GO','PAX','RVN','DCR','USDC','MITH','BCHABC','BCHSV','REN','BTT','USDS','FET','TFUEL','CELR','MATIC','ATOM','PHB','ONE','FTM','BTCB','USDSB','CHZ','COS','ALGO','ERD','DOGE','BGBP','DUSK','ANKR','WIN','TUSDB','COCOS','PERL','TOMO','BUSD','BAND','BEAM','HBAR','XTZ','NGN','DGB','NKN','GBP','EUR','KAVA','RUB','UAH','ARPA','TRY','CTXC','AERGO','BCH','TROY','BRL','VITE','FTT','AUD','OGN','DREP','BULL','BEAR','ETHBULL','ETHBEAR','XRPBULL','XRPBEAR','EOSBULL','EOSBEAR','TCT','WRX','LTO','ZAR','MBL','COTI','BKRW','BNBBULL','BNBBEAR','HIVE','STPT','SOL'];
//  'IDR',T
//  'CTS',I
//  'CHR',
//  'BTC',UP
//  'BTC',DOWN
//  'HNT',
//  'JST',
//  'FIO',
//  'BID',R
//  'STM',X
//  'MDT',
//  'PNT',
//  'COM',P
//  'IRI',S
//  'MKR',
//  'SXP',
//  'SNX',
//  'DAI',
//  'ETH',UP
//  'ETH',DOWN
//  'ADA',UP
//  'ADA',DOWN
//  'LIN',KUP
//  'LIN',KDOWN
//  'DOT',
//  'RUN',E
//  'BNB',UP
//  'BNB',DOWN
//  'XTZ',UP
//  'XTZ',DOWN
//  'AVA',
//  'BAL',
//  'YFI',
//  'SRM',
//  'ANT',
//  'CRV',
//  'SAN',D
//  'OCE',AN
//  'NMR',
//  'LUN',A
//  'IDE',X
//  'RSR',
//  'PAX',G
//  'WNX',M
//  'TRB',
//  'EGL',D
//  'BZR',X
//  'WBT',C
//  'KSM',
//  'SUS',HI
//  'YFI',I
//  'DIA',
//  'BEL',
//  'UMA',
//  'EOS',UP
//  'TRX',UP
//  'EOS',DOWN
//  'TRX',DOWN
//  'XRP',UP
//  'XRP',DOWN
//  'DOT',UP
//  'DOT',DOWN
//  'NBS',
//  'WIN',G
//  'SWR',V
//  'LTC',UP
//  'LTC',DOWN
//  'CRE',AM
//  'UNI',
//  'OXT',
//  'SUN',
//  'AVA',X
//  'BUR',GER
//  'BAK',E
//  'FLM',
//  'SCR',T
//  'XVS',
//  'CAK',E
//  'SPA',RTA
//  'UNI',UP
//  'UNI',DOWN
//  'ALP',HA
//  'ORN',
//  'UTK',
//  'NEA',R
//  'VID',T
//  'AAV',E
//  'FIL',
//  'SXP',UP
//  'SXP',DOWN
//  'INJ',
//  'FIL',DOWN
//  'FIL',UP
//  'YFI',UP
//  'YFI',DOWN
//  'CTK',
//  'EAS',Y
//  'AUD',IO
//  'BCH',UP
//  'BCH',DOWN
//  'BOT',
//  'AXS',
//  'AKR',O
//  'HAR',D
//  'KP3',R
//  'REN',BTC
//  'SLP',
//  'STR',AX
//  'UNF',I
//  'CVP',
//  'BCH',A
//  'FOR',
//  'FRO',NT
//  'ROS',E
//  'MDX',
//  'HEG',IC
//  'AAV',EUP
//  'AAV',EDOWN
//  'PRO',M
//  'BET',H
//  'SKL',
//  'GLM',
//  'SUS',D
//  'COV',ER
//  'GHS',T
//  'SUS',HIUP
//  'SUS',HIDOWN
//  'XLM',UP
//  'XLM',DOWN
//  'DF',
//  'JUV',
//  'PSG',
//  'BVN',D
//  'GRT',
//  'CEL',O
//  'TWT',
//  'REE',F
//  'OG',
//  'ATM',
//  'ASR',
//  '1IN',CH
//  'RIF',
//  'BTC',ST
//  'TRU',
//  'DEX',E
//  'CKB',
//  'FIR',O
//  'LIT',
//  'PRO',S
//  'VAI',
//  'SFP',
//  'FXS',
//  'DOD',O
//  'AUC',TION
//  'UFT',
//  'ACM',
//  'PHA',
//  'TVK',
//  'BAD',GER
//  'FIS',
//  'QI',
//  'OM',
//  'PON',D
//  'ALI',CE
//  'DEG',O
//  'BIF',I
//  'LIN',A
//  'PER',P
//  'RAM',P
//  'SUP',ER
//  'CFX',
//  'TKO',
//  'AUT',O
//  'EPS',
//  'PUN',DIX
//  'TLM',
//  '1IN',CHUP
//  '1IN',CHDOWN
//  'MIR',
//  'BAR',
//  'FOR',TH
//  'EZ',
//  'AR',
//  'ICP',
//  'SHI',B
//  'GYE',N
//  'POL',S
//  'MAS',K
//  'LPT',
//  'AGI',X
//  'ATA',
//  'NU',
//  'GTC',
//  'KLA',Y
//  'TOR',N
//  'KEE',P
//  'ERN',
//  'BON',D
//  'MLN',
//  'C98',
//  'FLO',W
//  'QUI',CK
//  'RAY',
//  'MIN',A
//  'QNT',
//  'CLV',
//  'XEC',
//  'ALP',ACA
//  'FAR',M
//  'VGX',
//  'MBO',X
//  'WAX',P
//  'TRI',BE
//  'GNO',
//  'USD',P
//  'DYD',X
//  'GAL',A
//  'ILV',
//  'YGG',
//  'FID',A
//  'AGL',D
//  'BET',A
//  'RAD',
//  'RAR',E
//  'SSV',
//  'LAZ',IO
//  'MOV',R
//  'CHE',SS
//  'DAR',
//  'ACA',
//  'BNX',
//  'RGT',
//  'CIT',Y
//  'ENS',
//  'POR',TO
//  'JAS',MY
//  'AMP',
//  'PLA',
//  'PYR',
//  'SAN',TOS
//  'RND',R
//  'ALC',X
//  'MC',
//  'ANY',
//  'BIC',O
//  'FLU',X
//  'UST',
//  'HIG',H
//  'OOK',I
//  'CVX',
//  'PEO',PLE
//  'SPE',LL
//  'JOE',
//  'BDO',T
//  'GLM',R
//  'ACH',
//  'IMX',
//  'LOK',A
//  'BTT',C
//  'ANC',
//  'API',3
//  'XNO',
//  'WOO']

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
          
          myCryptoList.push(newCrypto)
        }
      }

      for(let cryp of myCryptoList) {
        console.log(cryp);
      }
  });

});