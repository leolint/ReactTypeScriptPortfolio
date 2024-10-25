interface CurrencyRate {
  currence : string
  rate : number
}

export default async function fetchData(): Promise<CurrencyRate[]> {
  const apiKey = process.env.REACT_APP_API_KEY;

  const url = `https://openexchangerates.org/api/latest.json?app_id=${apiKey}`;
  try {
    const specificCurrecesNames = ['UAH' , 'EUR' , 'USD' , 'GBP' , 'CHF' , 'SEK' , 'JPY' , 'CAD' , 'CNY' , 'AUD' , 'DKK']
    const response = await fetch(url);
    const data = await response.json();
    const dataObj = await data.rates;    
    const dataArr = Object.entries(dataObj).map(([currence, rate]) => ({
      currence,
      rate: rate as number ,
    }));
    const newArr: CurrencyRate[] = []
    dataArr.forEach(item => {
      if(specificCurrecesNames.includes(item.currence)) {
        newArr.push(item)
      }
    })
    console.log(newArr);
    
    return newArr;
  } catch {
    console.log("error");
    return [];
  }
}


