// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var H = 50;
    var h = 0;
    var Q = 25;
    var q = 0;
    var D = 10;
    var d = 0;
    var N = 5;
    var n = 0;
    var P = 1;
    var p = 0;
    coins = {};

    if (currency <= 0){
        return {};
    }

    if (currency > 10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }

    while ((currency/H) >= 1){
        currency -= H;
        h++;
    }
    while ((currency/Q) >= 1){
        currency -= Q;
        q++;
    }
    while ((currency/D) >=1){
        currency -= D;
        d++;
    }
    while ((currency/N) >= 1){
        currency -= N;
        n++;
    }
    while ((currency/P) >= 1){
        currency -=P;
        p++;
    }
    if (h !=0){
        coins.H = h;
    }
    if (q !=0){
        coins.Q = q;
    }
    if (d != 0){
        coins.D = d;
    }
    if (n !=0){
        coins.N = n;
    }
    if (p !=0){
        coins.P = p;
    }
    return coins;
}
