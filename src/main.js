import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency-exchanger.js'


// function
function displayCurrencyResults(currencyResponse) { 
  if(currencyResponse) {

      $('#currencyShow').append(`The currency is ${currencyResponse.base_code.rates}`); 
      
  } else {
    $('.showErrors').text(`This currency is not existed error: ${currencyResponse.message}`);
  }
  }
  

  // Dom
$(document).ready(function() {

  $('#currencyInfo').click(function(event) {
      event.preventDefault();
      const number = $('#number').val();
      const country = $('#country').val();
      
      // clearFields();
      $('#currencyShow').html("");
      CurrencyService.getId(number, country)
        .then(function(currencyResponse) {
          displayCurrencyResults(currencyResponse);
        });
        console.log("hello")
    })
  });        







