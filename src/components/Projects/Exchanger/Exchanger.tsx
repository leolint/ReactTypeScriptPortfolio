import { ChangeEvent, useEffect , useState } from "react";
import styles from "./exchanger.module.css";
import fetchData from "./data";
import { useTranslation } from "react-i18next";


interface CurrencyData {
  currence: string;
  rate: any;
}

const Exchanger: React.FC = () => {
  const {t , i18n} = useTranslation()
  const [data, setData] = useState<CurrencyData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [sum, setSum] = useState<number>(0);
  const [result, setResult] = useState<number>();
  const [firstSelect, setFirstSelect] = useState<string>("");
  const [secondSelect, setSecondSelect] = useState<string>("");

  function reverseCurrences () {
    setFirstSelect(secondSelect)
    setSecondSelect(firstSelect)
  }


  function handleInputSum(event: ChangeEvent<HTMLInputElement>) {
    setSum(event.target.valueAsNumber);
  }

  function handleFirstSelect(event: ChangeEvent<HTMLSelectElement>) {
    setFirstSelect(event.target.value);
  }
  function handleScondSelect(event: ChangeEvent<HTMLSelectElement>) {
    setSecondSelect(event.target.value);
  }
  async function awaitData() {
    const response = await fetchData();
    const editedArray: CurrencyData[] = [];

    await response.forEach((item) => {
      switch (item.currence) {
        case "EUR":
        case "USD":
        case "UAH":
        case "GBP":
        case "CHF":
        case "SEK":
        case "JPY":
        case "CAD":
        case "CNY":
        case "AUD":
        case "DKK":
          editedArray.push(item);
          break;
        default:
          break;
      }
    });

    setData(editedArray);
    setLoading(false);
  }

  function getResult() {
    const firstItem = data.find(item => item.currence === firstSelect);
    const secondItem = data.find(item => item.currence === secondSelect);

    if (firstItem && secondItem) {
      const resultOfSum = sum / firstItem.rate * secondItem.rate;
      const cutResult = Math.round(resultOfSum)
      setResult(cutResult);
    } else if (firstItem && secondItem && firstItem.currence === secondItem.currence) {
      setResult(sum)
    }
  }


  useEffect(() => {
    getResult();
  }, [sum, firstSelect, secondSelect]);

  useEffect(() => {
    awaitData();
  }, []);





  return (
    <div className={styles.wrapper}>
      <div className={styles.currences_wrapper}>
        <input
          value={sum}
          onChange={handleInputSum}
          placeholder="Сума"
          className={styles.input}
          type="number"
        />
        <select
          value={firstSelect}
          onChange={handleFirstSelect}
          className={styles.select}
          name=""
          id=""
        >
          <option selected value="Виберіть валюту">{t("currency")}</option>
          {data.map((item, index) => {
            return (
              <option key={index} value={item.currence}>
                {item.currence}
              </option>
            );
          })}
        </select>
        <button className={styles.refresh} onClick={reverseCurrences}>🔁</button>
        <select
          value={secondSelect}
          onChange={handleScondSelect}
          className={styles.select}
          name=""
          id=""
        >
           <option selected value="Виберіть валюту">{t("currency")}</option>
          {data.map((item, index) => {
            return (
              <option key={index} value={item.currence}>
                {item.currence}
              </option>
            );
          })}
        </select>
        <p className={styles.result}>{result} {secondSelect}</p>
      </div>
      <div className={styles.currences_wrapper}>
        {loading
          ? "Loading"
          : data.map((item, index) => {
            return (
              <div key={index} className={styles.currence}>
                <p className={styles.currence_title}>{item.currence}</p>
                <p className={styles.currence_rate}>{item.rate}</p>
              </div>
            );
          })}
      </div>

    </div>
  );
};

export default Exchanger;
