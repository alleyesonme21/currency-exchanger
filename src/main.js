import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency-exchanger.js'


function displayCurrencyResults(currencyResponse) { 
  if(currencyResponse.rates) {
    $('#currencyShow').append(`The currency is ${currencyResponse.rates}`); 
  } else {
    $('.showErrors').text(`This currency is not existed error: ${currencyResponse.message}`);
  }
  }

  // UI
$(document).ready(function() {
  $('#currencyInfo').click(function(event) {
      event.preventDefault();
      const number = $('#number').val();
      const country = $('#country').val();
      
      $('#currencyShow').html("");
      CurrencyService.getId(number, country)
        .then(function(currencyResponse) {
          displayCurrencyResults(currencyResponse);
        });
    })
  });        







