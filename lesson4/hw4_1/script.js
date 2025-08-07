function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (const course of currencyValues) {
        if (course.currency === exchangeCurrency) {
            let price = sumUAH / course.value;
            document.write(`<p>Currency: ${exchangeCurrency}, Value: ${price}</p>`);
            return price;
        }
    }
    document.write(`<p>Currency ${exchangeCurrency} not found.</p>`);
    return null;
}
let currencies = [
    { currency: 'USD', value: 25 },
    { currency: 'EUR', value: 42 }
];
exchange(10000, currencies, 'USD');
