const maxProfit = (days) => {
    let remainingDays = days;
    let max = 0;
    let totalProfit = 0;
    const profits = {t: 1500, p: 1000, c: 3000};
    let p = 0, t = 0, c = 0;
    const daysToTake = {t: 5, p: 4, c: 10};

    while(remainingDays > 4) {
        var obj = {
            tProfit: (remainingDays - daysToTake.t) * profits.t,
            pProfit: (remainingDays - daysToTake.p) * profits.p,
            cProfit: (remainingDays - daysToTake.c) * profits.c
        }
        
        const max = Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
        if(max === 'tProfit') {
            remainingDays -= daysToTake.t;
            t++;
            totalProfit += profits.t * remainingDays;
        } else if(max === 'pProfit') {
            remainingDays -= daysToTake.p;
            p++;
            totalProfit += profits.p * remainingDays;
        } else if(max === 'cProfit') {
            remainingDays -= daysToTake.c;
            c++;
            totalProfit += profits.c * remainingDays;
        }
        
    }    
    return {p,t,c, totalProfit }
}