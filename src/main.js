import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency-exchanger.js'

  function currencyEX(response, number, country) {
    if (response.rates) {
      let rate = response.rates[country];
      let conversionResult = Math.round(number * rate);
      $('#currencyShow').text(`The currency of  the ${country} is ${conversionResult}`);

    } else {
      console.log(`There was an error: ${response}`)
      $('#showErrors').text(`There was an error: ${response}`);
    }
  }
  
  async function currencyCall(number, country) {
    const response = await CurrencyService.getCurrency(number, country);
    currencyEX(response, number, country);
  }
  
  $(document).ready(function() {
    $('#currencyInfo').click(function(event) {
      event.preventDefault();
      let number = $('#number').val();
      let country = $('#country').val();
      currencyCall(number, country);
    });
  });