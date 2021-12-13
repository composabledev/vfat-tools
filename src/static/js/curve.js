
$(function() {
  consoleInit(main)
  });

  async function main() {
    const App = await init_ethers();

    _print(`Initialized ${App.YOUR_ADDRESS}\n`);
    _print("Reading smart contracts...\n");

    const ASSETS_CONTRACT_ABI = [{"name":"PoolAdded","inputs":[{"name":"pool","type":"address","indexed":true},{"name":"rate_method_id","type":"bytes","indexed":false}],"anonymous":false,"type":"event"},{"name":"PoolRemoved","inputs":[{"name":"pool","type":"address","indexed":true}],"anonymous":false,"type":"event"},{"stateMutability":"nonpayable","type":"constructor","inputs":[{"name":"_address_provider","type":"address"},{"name":"_gauge_controller","type":"address"}],"outputs":[]},{"stateMutability":"view","type":"function","name":"find_pool_for_coins","inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"}],"outputs":[{"name":"","type":"address"}]},{"stateMutability":"view","type":"function","name":"find_pool_for_coins","inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"i","type":"uint256"}],"outputs":[{"name":"","type":"address"}]},{"stateMutability":"view","type":"function","name":"get_n_coins","inputs":[{"name":"_pool","type":"address"}],"outputs":[{"name":"","type":"uint256[2]"}],"gas":1521},{"stateMutability":"view","type":"function","name":"get_coins","inputs":[{"name":"_pool","type":"address"}],"outputs":[{"name":"","type":"address[8]"}],"gas":12102},{"stateMutability":"view","type":"function","name":"get_underlying_coins","inputs":[{"name":"_pool","type":"address"}],"outputs":[{"name":"","type":"address[8]"}],"gas":12194},{"stateMutability":"view","type":"function","name":"get_decimals","inputs":[{"name":"_pool","type":"address"}],"outputs":[{"name":"","type":"uint256[8]"}],"gas":7874},{"stateMutability":"view","type":"function","name":"get_underlying_decimals","inputs":[{"name":"_pool","type":"address"}],"outputs":[{"name":"","type":"uint256[8]"}],"gas":7966},{"stateMutability":"view","type":"function","name":"get_rates","inputs":[{"name":"_pool","type":"address"}],"outputs":[{"name":"","type":"uint256[8]"}],"gas":36992},{"stateMutability":"view","type":"function","name":"get_gauges","inputs":[{"name":"_pool","type":"address"}],"outputs":[{"name":"","type":"address[10]"},{"name":"","type":"int128[10]"}],"gas":20157},{"stateMutability":"view","type":"function","name":"get_balances","inputs":[{"name":"_pool","type":"address"}],"outputs":[{"name":"","type":"uint256[8]"}],"gas":16583},{"stateMutability":"view","type":"function","name":"get_underlying_balances","inputs":[{"name":"_pool","type":"address"}],"outputs":[{"name":"","type":"uint256[8]"}],"gas":162842},{"stateMutability":"view","type":"function","name":"get_virtual_price_from_lp_token","inputs":[{"name":"_token","type":"address"}],"outputs":[{"name":"","type":"uint256"}],"gas":1927},{"stateMutability":"view","type":"function","name":"get_A","inputs":[{"name":"_pool","type":"address"}],"outputs":[{"name":"","type":"uint256"}],"gas":1045},{"stateMutability":"view","type":"function","name":"get_parameters","inputs":[{"name":"_pool","type":"address"}],"outputs":[{"name":"A","type":"uint256"},{"name":"future_A","type":"uint256"},{"name":"fee","type":"uint256"},{"name":"admin_fee","type":"uint256"},{"name":"future_fee","type":"uint256"},{"name":"future_admin_fee","type":"uint256"},{"name":"future_owner","type":"address"},{"name":"initial_A","type":"uint256"},{"name":"initial_A_time","type":"uint256"},{"name":"future_A_time","type":"uint256"}],"gas":6305},{"stateMutability":"view","type":"function","name":"get_fees","inputs":[{"name":"_pool","type":"address"}],"outputs":[{"name":"","type":"uint256[2]"}],"gas":1450},{"stateMutability":"view","type":"function","name":"get_admin_balances","inputs":[{"name":"_pool","type":"address"}],"outputs":[{"name":"","type":"uint256[8]"}],"gas":36454},{"stateMutability":"view","type":"function","name":"get_coin_indices","inputs":[{"name":"_pool","type":"address"},{"name":"_from","type":"address"},{"name":"_to","type":"address"}],"outputs":[{"name":"","type":"int128"},{"name":"","type":"int128"},{"name":"","type":"bool"}],"gas":27131},{"stateMutability":"view","type":"function","name":"estimate_gas_used","inputs":[{"name":"_pool","type":"address"},{"name":"_from","type":"address"},{"name":"_to","type":"address"}],"outputs":[{"name":"","type":"uint256"}],"gas":32004},{"stateMutability":"view","type":"function","name":"is_meta","inputs":[{"name":"_pool","type":"address"}],"outputs":[{"name":"","type":"bool"}],"gas":1900},{"stateMutability":"view","type":"function","name":"get_pool_name","inputs":[{"name":"_pool","type":"address"}],"outputs":[{"name":"","type":"string"}],"gas":8323},{"stateMutability":"view","type":"function","name":"get_coin_swap_count","inputs":[{"name":"_coin","type":"address"}],"outputs":[{"name":"","type":"uint256"}],"gas":1951},{"stateMutability":"view","type":"function","name":"get_coin_swap_complement","inputs":[{"name":"_coin","type":"address"},{"name":"_index","type":"uint256"}],"outputs":[{"name":"","type":"address"}],"gas":2090},{"stateMutability":"view","type":"function","name":"get_pool_asset_type","inputs":[{"name":"_pool","type":"address"}],"outputs":[{"name":"","type":"uint256"}],"gas":2011},{"stateMutability":"nonpayable","type":"function","name":"add_pool","inputs":[{"name":"_pool","type":"address"},{"name":"_n_coins","type":"uint256"},{"name":"_lp_token","type":"address"},{"name":"_rate_info","type":"bytes32"},{"name":"_decimals","type":"uint256"},{"name":"_underlying_decimals","type":"uint256"},{"name":"_has_initial_A","type":"bool"},{"name":"_is_v1","type":"bool"},{"name":"_name","type":"string"}],"outputs":[],"gas":61485845},{"stateMutability":"nonpayable","type":"function","name":"add_pool_without_underlying","inputs":[{"name":"_pool","type":"address"},{"name":"_n_coins","type":"uint256"},{"name":"_lp_token","type":"address"},{"name":"_rate_info","type":"bytes32"},{"name":"_decimals","type":"uint256"},{"name":"_use_rates","type":"uint256"},{"name":"_has_initial_A","type":"bool"},{"name":"_is_v1","type":"bool"},{"name":"_name","type":"string"}],"outputs":[],"gas":31306062},{"stateMutability":"nonpayable","type":"function","name":"add_metapool","inputs":[{"name":"_pool","type":"address"},{"name":"_n_coins","type":"uint256"},{"name":"_lp_token","type":"address"},{"name":"_decimals","type":"uint256"},{"name":"_name","type":"string"}],"outputs":[]},{"stateMutability":"nonpayable","type":"function","name":"add_metapool","inputs":[{"name":"_pool","type":"address"},{"name":"_n_coins","type":"uint256"},{"name":"_lp_token","type":"address"},{"name":"_decimals","type":"uint256"},{"name":"_name","type":"string"},{"name":"_base_pool","type":"address"}],"outputs":[]},{"stateMutability":"nonpayable","type":"function","name":"remove_pool","inputs":[{"name":"_pool","type":"address"}],"outputs":[],"gas":779731418758},{"stateMutability":"nonpayable","type":"function","name":"set_pool_gas_estimates","inputs":[{"name":"_addr","type":"address[5]"},{"name":"_amount","type":"uint256[2][5]"}],"outputs":[],"gas":390460},{"stateMutability":"nonpayable","type":"function","name":"set_coin_gas_estimates","inputs":[{"name":"_addr","type":"address[10]"},{"name":"_amount","type":"uint256[10]"}],"outputs":[],"gas":392047},{"stateMutability":"nonpayable","type":"function","name":"set_gas_estimate_contract","inputs":[{"name":"_pool","type":"address"},{"name":"_estimator","type":"address"}],"outputs":[],"gas":72629},{"stateMutability":"nonpayable","type":"function","name":"set_liquidity_gauges","inputs":[{"name":"_pool","type":"address"},{"name":"_liquidity_gauges","type":"address[10]"}],"outputs":[],"gas":400675},{"stateMutability":"nonpayable","type":"function","name":"set_pool_asset_type","inputs":[{"name":"_pool","type":"address"},{"name":"_asset_type","type":"uint256"}],"outputs":[],"gas":72667},{"stateMutability":"nonpayable","type":"function","name":"batch_set_pool_asset_type","inputs":[{"name":"_pools","type":"address[32]"},{"name":"_asset_types","type":"uint256[32]"}],"outputs":[],"gas":1173447},{"stateMutability":"view","type":"function","name":"address_provider","inputs":[],"outputs":[{"name":"","type":"address"}],"gas":2048},{"stateMutability":"view","type":"function","name":"gauge_controller","inputs":[],"outputs":[{"name":"","type":"address"}],"gas":2078},{"stateMutability":"view","type":"function","name":"pool_list","inputs":[{"name":"arg0","type":"uint256"}],"outputs":[{"name":"","type":"address"}],"gas":2217},{"stateMutability":"view","type":"function","name":"pool_count","inputs":[],"outputs":[{"name":"","type":"uint256"}],"gas":2138},{"stateMutability":"view","type":"function","name":"coin_count","inputs":[],"outputs":[{"name":"","type":"uint256"}],"gas":2168},{"stateMutability":"view","type":"function","name":"get_coin","inputs":[{"name":"arg0","type":"uint256"}],"outputs":[{"name":"","type":"address"}],"gas":2307},{"stateMutability":"view","type":"function","name":"get_pool_from_lp_token","inputs":[{"name":"arg0","type":"address"}],"outputs":[{"name":"","type":"address"}],"gas":2443},{"stateMutability":"view","type":"function","name":"get_lp_token","inputs":[{"name":"arg0","type":"address"}],"outputs":[{"name":"","type":"address"}],"gas":2473},{"stateMutability":"view","type":"function","name":"last_updated","inputs":[],"outputs":[{"name":"","type":"uint256"}],"gas":2288}]
    const GAUGE_CONTRACT_ABI = [{"name":"Deposit","inputs":[{"type":"address","name":"provider","indexed":true},{"type":"uint256","name":"value","indexed":false}],"anonymous":false,"type":"event"},{"name":"Withdraw","inputs":[{"type":"address","name":"provider","indexed":true},{"type":"uint256","name":"value","indexed":false}],"anonymous":false,"type":"event"},{"name":"UpdateLiquidityLimit","inputs":[{"type":"address","name":"user","indexed":false},{"type":"uint256","name":"original_balance","indexed":false},{"type":"uint256","name":"original_supply","indexed":false},{"type":"uint256","name":"working_balance","indexed":false},{"type":"uint256","name":"working_supply","indexed":false}],"anonymous":false,"type":"event"},{"outputs":[],"inputs":[{"type":"address","name":"lp_addr"},{"type":"address","name":"_minter"}],"stateMutability":"nonpayable","type":"constructor"},{"name":"user_checkpoint","outputs":[{"type":"bool","name":""}],"inputs":[{"type":"address","name":"addr"}],"stateMutability":"nonpayable","type":"function","gas":2079152},{"name":"claimable_tokens","outputs":[{"type":"uint256","name":""}],"inputs":[{"type":"address","name":"addr"}],"stateMutability":"nonpayable","type":"function","gas":1998318},{"name":"kick","outputs":[],"inputs":[{"type":"address","name":"addr"}],"stateMutability":"nonpayable","type":"function","gas":2084532},{"name":"set_approve_deposit","outputs":[],"inputs":[{"type":"address","name":"addr"},{"type":"bool","name":"can_deposit"}],"stateMutability":"nonpayable","type":"function","gas":35766},{"name":"deposit","outputs":[],"inputs":[{"type":"uint256","name":"_value"}],"stateMutability":"nonpayable","type":"function"},{"name":"deposit","outputs":[],"inputs":[{"type":"uint256","name":"_value"},{"type":"address","name":"addr"}],"stateMutability":"nonpayable","type":"function"},{"name":"withdraw","outputs":[],"inputs":[{"type":"uint256","name":"_value"}],"stateMutability":"nonpayable","type":"function","gas":2208318},{"name":"integrate_checkpoint","outputs":[{"type":"uint256","name":""}],"inputs":[],"stateMutability":"view","type":"function","gas":2297},{"name":"minter","outputs":[{"type":"address","name":""}],"inputs":[],"stateMutability":"view","type":"function","gas":1421},{"name":"crv_token","outputs":[{"type":"address","name":""}],"inputs":[],"stateMutability":"view","type":"function","gas":1451},{"name":"lp_token","outputs":[{"type":"address","name":""}],"inputs":[],"stateMutability":"view","type":"function","gas":1481},{"name":"controller","outputs":[{"type":"address","name":""}],"inputs":[],"stateMutability":"view","type":"function","gas":1511},{"name":"voting_escrow","outputs":[{"type":"address","name":""}],"inputs":[],"stateMutability":"view","type":"function","gas":1541},{"name":"balanceOf","outputs":[{"type":"uint256","name":""}],"inputs":[{"type":"address","name":"arg0"}],"stateMutability":"view","type":"function","gas":1725},{"name":"totalSupply","outputs":[{"type":"uint256","name":""}],"inputs":[],"stateMutability":"view","type":"function","gas":1601},{"name":"future_epoch_time","outputs":[{"type":"uint256","name":""}],"inputs":[],"stateMutability":"view","type":"function","gas":1631},{"name":"approved_to_deposit","outputs":[{"type":"bool","name":""}],"inputs":[{"type":"address","name":"arg0"},{"type":"address","name":"arg1"}],"stateMutability":"view","type":"function","gas":1969},{"name":"working_balances","outputs":[{"type":"uint256","name":""}],"inputs":[{"type":"address","name":"arg0"}],"stateMutability":"view","type":"function","gas":1845},{"name":"working_supply","outputs":[{"type":"uint256","name":""}],"inputs":[],"stateMutability":"view","type":"function","gas":1721},{"name":"period","outputs":[{"type":"int128","name":""}],"inputs":[],"stateMutability":"view","type":"function","gas":1751},{"name":"period_timestamp","outputs":[{"type":"uint256","name":""}],"inputs":[{"type":"uint256","name":"arg0"}],"stateMutability":"view","type":"function","gas":1890},{"name":"integrate_inv_supply","outputs":[{"type":"uint256","name":""}],"inputs":[{"type":"uint256","name":"arg0"}],"stateMutability":"view","type":"function","gas":1920},{"name":"integrate_inv_supply_of","outputs":[{"type":"uint256","name":""}],"inputs":[{"type":"address","name":"arg0"}],"stateMutability":"view","type":"function","gas":1995},{"name":"integrate_checkpoint_of","outputs":[{"type":"uint256","name":""}],"inputs":[{"type":"address","name":"arg0"}],"stateMutability":"view","type":"function","gas":2025},{"name":"integrate_fraction","outputs":[{"type":"uint256","name":""}],"inputs":[{"type":"address","name":"arg0"}],"stateMutability":"view","type":"function","gas":2055},{"name":"inflation_rate","outputs":[{"type":"uint256","name":""}],"inputs":[],"stateMutability":"view","type":"function","gas":1931}]

    const ASSETS_ADDRESS = "0x90E00ACe148ca3b23Ac1bC8C240C2a7Dd9c2d7f5"
    const ASSETS_CONTRACT = new ethcall.Contract(ASSETS_ADDRESS, ASSETS_CONTRACT_ABI);

    const [_poolCount] = await App.ethcallProvider.all([ASSETS_CONTRACT.pool_count()]);
    const poolCount = _poolCount / 1;

    const calls = [...Array(poolCount).keys()].map(i => ASSETS_CONTRACT.pool_list(i));
    const poolAddresses = await App.ethcallProvider.all(calls);

    const calls2 = poolAddresses.map(a => ASSETS_CONTRACT.get_lp_token(a));
    const tokenAddresses = await App.ethcallProvider.all(calls2);

    const calls3 = poolAddresses.map(a => ASSETS_CONTRACT.get_gauges(a))
    const allGauges = await App.ethcallProvider.all(calls3);

    const gaugeContracts = allGauges.map(g => g[0])
      .flat()
      .filter(a => a
      .toLowerCase() !=  "0x0000000000000000000000000000000000000000")
      .map(g => new ethcall.Contract(g, GAUGE_CONTRACT_ABI))
    const gaugeCalls = gaugeContracts.map(c => [c.totalSupply(), c.balanceOf(App.YOUR_ADDRESS)]).flat()
    const gaugeValues = await App.ethcallProvider.all(gaugeCalls);

    const allGaugesAddresses = allGauges.map(g => g[0]).flat().filter(a => a.toLowerCase() !=  "0x0000000000000000000000000000000000000000");

    let poolInfos = [];
    for(let i = 0; i < poolAddresses.length; i++){
      poolInfos.push({
        poolAddress    : poolAddresses[i],
        lpTokenAddress : tokenAddresses[i],
        //gauges         : allGauges[i],
        gauges         : allGaugesAddresses[i],
      })
    }

    const gaugeResults = {};
    for(let i = 0; i < gaugeContracts.length; i++){
      gaugeResults[gaugeContracts[i].address] = {
        totalSupply  : gaugeValues[i*2],
        usersStaked  : gaugeValues[i*2+1]
      }
    }

    const tokens = {};
    let prices = {}

    let underlyingTokens = []
    for(let i = 0; i < tokenAddresses.length; i++){
      const underlyingToken = await getToken(App, tokenAddresses[i], App.YOUR_ADDRESS);
      underlyingTokens.push(underlyingToken);
    }
    const newTokens = underlyingTokens.map(ut => ut.tokens).flat().concat(["0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"]);
    await getNewPricesAndTokens(App, tokens, prices, newTokens, App.YOUR_ADDRESS);
    prices["0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"] = getParameterCaseInsensitive(prices,  "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2");

    let staked_tvl = 0, userTvl = 0
    for(const poolInfo of poolInfos){
      const gaugeResult = (gaugeResults[poolInfo.gauges]===undefined) ? null : gaugeResults[poolInfo.gauges]
      const underlyingToken = getParameterCaseInsensitive(tokens, poolInfo.lpTokenAddress);
      const totalSupply = (gaugeResult!=null) ? gaugeResult.totalSupply / 10 ** underlyingToken.decimals : 0;
      const usersStaked = (gaugeResult!=null) ? gaugeResult.usersStaked / 10 ** underlyingToken.decimals : 0;
      underlyingToken.staked = totalSupply;
      const poolPrice = tryGetPoolPrices(tokens, prices, underlyingToken, "eth")
      staked_tvl += poolPrice.staked_tvl;
      userTvl += usersStaked * poolPrice.price;
      await printCurveContract(underlyingToken, poolPrice, gaugeResult);
    }
    _print_bold(`\nTotal Value Locked: $${formatMoney(staked_tvl)}`);
    if (userTvl > 0) {
      _print_bold(`You are staking a total of $${formatMoney(userTvl)}`);
    }
    /*for(const poolInfo of poolInfos){
      for(const gauge of poolInfo.gauges){
        const gaugeResult = gaugeResults[gauge];
        const underlyingToken = getParameterCaseInsensitive(tokens, poolInfo.lpTokenAddress);
        underlyingToken.staked = gaugeResult.totalSupply / 10 ** underlyingToken.decimals;
        const poolPrice = tryGetPoolPrices(tokens, prices, underlyingToken, "eth")
        await printCurveContract(underlyingToken, poolPrice, gaugeResult);
      }
    }*/
    
    /*const poolPrices = underlyingTokens.map(ut => tryGetPoolPrices(tokens, prices, ut, "eth"));
    let staked_tvl = 0, userTvl = 0
    for(let i = 0; i < underlyingTokens.length; i++){
      if(!poolPrices[i]){
        continue;
      }
      else{
       await printCurveContract(App, underlyingTokens[i], poolPrices[i]); 
      }
      if (!isNaN(poolPrices[i].staked_tvl)) staked_tvl += poolPrices[i].staked_tvl;
      if (!isNaN(underlyingTokens[i].userStaked * poolPrices[i].price)) userTvl += underlyingTokens[i].userStaked * poolPrices[i].price;
    }
    _print_bold(`\nTotal Value Locked: $${formatMoney(staked_tvl)}`);
    if (userTvl > 0) {
      _print_bold(`You are staking a total of $${formatMoney(userTvl)}`);
    }*/

    hideLoading();
  }
  
  async function printCurveContract(underlyingToken, poolPrice, gaugeResult) {
    poolPrice.print_price();
    if(gaugeResult!=null){
      const userStaked = gaugeResult.usersStaked / 10 ** underlyingToken.decimals;
      var userStakedUsd = userStaked * poolPrice.price;
      var userStakedPct = userStakedUsd / poolPrice.tvl * 100;
      _print(`You are staking ${userStaked.toFixed(4)} ${poolPrice.stakeTokenTicker} ($${formatMoney(userStakedUsd)}), ${userStakedPct.toFixed(2)}% of the pool.`);
      if (userStaked > 0) {
        _print(`Your stake comprises of ${userStaked/* * vault.ppfs*/} ${poolPrice.stakeTokenTicker}.`)
      }
      _print("");
    }else{ _print(""); }
  }

function tryGetPoolPrices(tokens, prices, pool, chain = "eth"){
  try {
    const poolPrice = getPoolPrices(tokens, prices, pool, chain = "eth")
    return poolPrice;
  }catch(err){
    console.log(pool.address, err);
    return null;
  }
}

/*async function curveVaultDeposit(App, vaultToken){
  const signer = await App.provider.getSigner();

  const STAKING_TOKEN = new ethers.Contract(vaultToken.token.address, ERC20_ABI, signer)
  const VAULT_CONTRACT = new ethers.Contract(vaultToken.address, CURVE_TOKEN_ABI, signer)

  const balanceToStake = await STAKING_TOKEN.balanceOf(App.YOUR_ADDRESS)
  const allowedTokens = await STAKING_TOKEN.allowance(App.YOUR_ADDRESS, vaultToken.token.address)

  const decimals = await STAKING_TOKEN.decimals();
  let allow = Promise.resolve()

  if (allowedTokens / 10 ** decimals < balanceToStake / 10 ** decimals) {
    showLoading()
    allow = STAKING_TOKEN.approve(vaultToken.token.address, ethers.constants.MaxUint256)
      .then(function(t) {
        return App.provider.waitForTransaction(t.hash)
      })
      .catch(function() {
        hideLoading()
        alert('Try resetting your approval to 0 first')
      })
  }

  if (balanceToStake / 10 ** decimals > 0) {
    showLoading()
    allow
      .then(async function() {
        VAULT_CONTRACT["deposit(uint256)"](balanceToStake, {gasLimit: 500000})
          .then(function(t) {
            App.provider.waitForTransaction(t.hash).then(function() {
              hideLoading()
            })
          })
          .catch(function() {
            hideLoading()
            _print('Something went wrong.\n')
          })
      })
      .catch(function(ex) {
        hideLoading()
        _print('Something went wrong.')
        _print(ex)
      })
  } else {
    alert('You have no tokens to stake!!')
  }
}

async function curveVaultWithdraw(App, vaultToken){
  const signer = App.provider.getSigner()
  const VAULT_CONTRACT = new ethers.Contract(vaultToken.address, CURVE_TOKEN_ABI, signer)

  const currentStakedAmount = await VAULT_CONTRACT.balanceOf(App.YOUR_ADDRESS);

  if (currentStakedAmount / 10 ** vault.decimals > 0) {
    showLoading()
    VAULT_CONTRACT["withdraw()"]({gasLimit: 500000})
      .then(function(t) {
        return App.provider.waitForTransaction(t.hash)
      })
      .catch(function() {
        hideLoading()
      })
  }
}*/

//const GAUGE_ADDRESS = ""
    //const GAUGE_CONTRACT = new ethcall.Contract(GAUGE_ADDRESS, GAUGE_CONTRACT_ABI);
    //const tokenAddresses = ["0xFd2a8fA60Abd58Efe3EeE34dd494cD491dC14900"] //testing purposes

    //this is the minter of Curve.fi cDAI/cUSDC/USDT I dont get the price. check if its TriCrypto
    //https://etherscan.io/address/0x52EA46506B9CC5Ef470C5bf89f17Dc28bB35D85C#readContract