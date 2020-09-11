import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency-exchanger.js'


// function
function displayCurrencyResults(currencyResponse) { 
  if(currencyResponse) {
    
  } else {
    $('.showErrors').text(`There was an error: ${currencyResponse.message}`);
  }
  }
  








