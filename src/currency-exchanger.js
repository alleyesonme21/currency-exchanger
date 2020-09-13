export default class CurrencyService {  
  static async getId() {
    try {
      const response = await fetch(`https://open.exchangerate-api.com/v6/latest?appid=${process.env.API_KEY}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}
