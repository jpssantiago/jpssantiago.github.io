const form = document.querySelector('#form');

form.onsubmit = event => {
    event.preventDefault();
    
    const balance = document.querySelector('#balanceInput').value;
    const margin = document.querySelector('#marginInput').value;
    const maxLoss = document.querySelector('#maxLossInput').value;
    const stopLoss = document.querySelector('#stopLossInput').value;

    const marginInDollars = (margin / 100 * balance);
    const maxLossInDollars = balance * (maxLoss / 100);
    const leverage = Math.round(maxLossInDollars * 100 / marginInDollars / stopLoss);
    
    document.querySelector('#alert').innerHTML = `
    Margem: U$ ${marginInDollars}
    <br>Perda máxima: U$ ${maxLossInDollars}
    <br>Alavancagem: ${leverage}x
    `;

    preventAlertWhenReloading();
}

const preventAlertWhenReloading = () => {
    if ( window.history.replaceState ) {
        window.history.replaceState( null, null, window.location.href );
    }
}