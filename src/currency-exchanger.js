export default class CurrencyService {  
  static getId(number, country) {
      console.log(`getId function running. number: ${number},country: ${country}`)
    return fetch(`https://open.exchangerate-api.com/v6/latest?appid=${process.env.API_KEY}&base_code=${number}&=country${country}`)
      .then(function(currencyResponse) {
        if (!currencyResponse.ok) {
          console.log(`Error thrown`);
          throw Error(currencyResponse.statusText);
        }
        console.log(`currencyResponse.Json returned`);
        return currencyResponse.json();
      })
      .catch(function(error) {
        console.log(`Error caught`);
        return error;
      })
  }
}