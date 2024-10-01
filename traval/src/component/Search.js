import React from 'react'
import './Search.css'
import gold from '../assests/gold.png'


function Search() {
  return (
   <div name='book' className='search'>
    <div className='container'>
      <div className='left'>
        <h2>LUXURY INCLUDED VACATION FOR TWO PEOPLE</h2>
        <p> <h1 className='tn' style={{color:'red'}} >TAMILNADU</h1>!!!!!!!!!!!!!!!!!! <br/>
          we are goging to explore the tourst placess of tamilndu .tamilnadu is a best tourist plac in india .and most importendly tamilnadu had a more comers from frogners.
          there are more plcese had the historical movemnt like king and wars,and we are going to explore the best placess
          <br />first we are going to know a chennai
          
          <h5 className='tn1' style={{color:'red'}} >CHENNAI</h5>
          chennai is best palce to know more to tamilnadu
          
        </p>
      <div className='search-col-2'>
        <div className='box'>
        <img src={gold} alt="" style={{height:'10%',width:'10%',marginRight:'1rem'}}/>
        </div>
        <div>
          <h3>WORLD'S LEADING</h3>
          <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
        </div>
        <div className='box'>
          <div>
            <h3>NO ONE INCLUDES</h3>
            <p>ALL INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            <button>view packages</button>
            </div>
         </div>
      </div>
      </div>
      <div className='right'>
        <div className='promo'>
          <h4 className='save'>GET AN ADDTIONAL 7% OFF</h4>
           <p className='timer'>12 HOURS LEFT!</p>
           <p className='offers'>VIEW ALL CURRENT OFFERS</p>
        </div>
        <form>
          <div className='input-wrap'>
            <label>Destination</label>
            <select>
              <option value='1'>oiuytrfghj</option>
              <option value='1'>oiuytrfghj</option>
              <option value='1'>oiuytrfghj</option>
              <option value='1'>oiuytrfghj</option>
              <option value='1'>oiuytrfghj</option>
              <option value='1'>oiuytrfghj</option>
              <option value='1'>oiuytrfghj</option>
            </select>
          </div>
          <div className='date'>
            <div className='input-wrap'>
              <label>Check-in</label>
              <input type='date'/>
            </div>
          </div>
          <div className='date'>
            <div className='input-wrap'>
              <label>Check-out</label>
              <input type='date'/>
            </div>
          </div>
          <button>Rates & Availibilities</button>
        </form>
      </div>
    </div>
   </div>
        
  )
}

export default Search