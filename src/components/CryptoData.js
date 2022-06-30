import { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './CryptoData.module.css'

const CryptoData = () => {
  // data: represents our data, setdata sets the data we are pulling from the api
  const [data, setData] = useState([])
  // collect user data, empty string

  // Make a request to all exchanges
  useEffect(() => {
    axios
      .get(
        `https://www.cryptingup.com/api/exchanges/BINANCE/markets?size=1&start=1`
      )
      .then((res) => {
        setData(res.data.markets)
        console.log(res.data.markets)
      })
  }, [])

  return (
    <div className={styles.everything}>
      <div className={styles.Headers}>
        <h1 className={styles.header1}>Data from my API</h1>

        {/* List specific data for the 3 exchanges  */}
        <h1 className={styles.header2}>Single Post data</h1>
      </div>
      <div className={styles.container}>
        {/* Name of the Exchange */}
        {data.map((x) => (
          <h3 key={x.exchange_id} className={styles.name}>
            Exchange Name: {x.exchange_id}
          </h3>
        ))}

        {/* Symbol of the Exchange */}
        {data.map((x) => (
          <h3 key={x.symbol} className={styles.symbol}>
            Exchange Symbol: {x.symbol}
          </h3>
        ))}

        {/* Price of the Exchange */}
        {data.map((x) => (
          <h3 key={x.price} className={styles.price}>
            Exchange Price: {x.price}
          </h3>
        ))}
      </div>
    </div>
  )
}

export default CryptoData
