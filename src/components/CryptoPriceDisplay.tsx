import { useMemo } from 'react';
import { useCryptoStore } from '../store';


function CryptoPriceDisplay() {
    const result = useCryptoStore((state) => state.result);
    const hasResult = useMemo(() => !Object.values(result).includes(''), [result])

  
  return (
    <div className='result-wrapper'>
        {hasResult && (
            <>
              
                <h2>Cotizacion</h2>
                <div className='result'>
                    <img src={`https://www.cryptocompare.com${result.IMAGEURL}`} 
                    alt="Imagen Cryptomoneda" />
                    <div>
                        <p>El precio es de: <span>{result.PRICE}</span></p>
                        <p>Precio mas alto del dia: <span>{result.HIGHDAY}</span></p>
                        <p>Precio mas bajo del dia: <span>{result.LOWDAY}</span></p>
                        <p>Variacion ultimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span></p>
                        <p>Ultima actualizacion: <span>{result.LASTUPDATE}</span></p>
                    </div>
                </div>
                </>

        )}        
        
    </div>
  )
}


export default CryptoPriceDisplay;