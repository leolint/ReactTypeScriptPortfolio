export default async function fetchData() {
  const apiKey = "d755c23834f44dd2b2c548f181b5e9db";

  const url = `https://openexchangerates.org/api/latest.json?app_id=${apiKey}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const dataObj = await data.rates;
    const dataArr = Object.entries(dataObj).map(([currence, rate]) => ({
      currence,
      rate,
    }));
    return dataArr;
  } catch {
    console.log("error");
    return [];
  }
}
