import React from 'react'
import './Search.css'
import gold from '../assests/gold.png'


function Search() {
  return (
   <div name='book' className='search'>
    <div className='container'>
      <div className='left'>
        <h2>Best tourist destinations & places in Tamil Nadu</h2>
        <p> <h4 className='tn' style={{color:'red'}}> TAMILNADU!!!!!!!! </h4> <br/>
         
        Tamil Nadu, in south India, is situated between the Nilgiri Hills and the Bay of Bengal.
  The state offers some amazing beach cities and hill stations for people to come and visit.
  The state is also an important pilgrimage spot for Hindus and Christians. 
  The historical value of Tamil Nadu also makes it an important destination in India.
  You will find a variety of monuments here dating back to as late as the 11th century. 
  Tamil Nadu is a must-visit state in India with numerous tourist spots.
         
          <br/><br/>
          
          <h5 className='tn1' style={{color:'red'}} >1.CHENNAI</h5><br/>
          Chennai is the capital city of Tamil Nadu.
           Chennai is among the top places to visit in Tamil Nadu, since it contains some of the most popular tourist attractions in the state.
            The beaches of Chennai are a special attraction. 
            The Marina beach especially is a place of festivities with hundreds of shops selling locally handmade items.
             The street food stalls here also have some delectable local snacks which can be enjoyed with friends and family.
              Chennai is also rich with architectural beauties like the Arulmigu Sri Parthasarathyswamy Temple Tiruvallikeni, Information and Public Relations Office Valluvarkottam, Sri Ashtalakshmi Temple, Thousand Lights Shia Mosque, etc.
               The other notable famous places here include Government Museum Chennai, Santhome Cathedral Basilica, Fort St George Museum, Elliot’s Beach, Vivekananda House.
          
            <br/> <br/>  <h5 className='tn1' style={{color:'red'}} >2.KANCHIPURAM</h5><br/>
               Kanchipuram is yet another Hindu pilgrimage site which is among the famous places in Tamilnadu. The town is also the seat of the textile and silk weaving industry. The famous Indian sarees of Kanchipuram are woven here by the local artisans. The city is also known for its old temples and archaeological sites, which deserve a special place in the itinerary. The famous places to visit are Sri Kanchi Kamakshi Amman Temple, Ekambaranathar Temple, Shri Chitragupta Swamy Temple, Sri Kachabeswarar Temple, etc. A visit to the local looms and trying out the local cuisines at eateries is also a must when visiting Kanchipuram.Kanchipuram is only a short drive away from Chennai and accessible via Tambaram – Mudichur – Walajabad Road.
              <br/><br/> <h5 className='tn1' style={{color:'red'}} >3.KODAIKANAL</h5><br/>
               Kodaikanal is one of the hill stations in the Indian state of Tamil Nadu. Located around 2,000 metres above sea level, this hill station with its scenic beauty and marvellous waterfalls is an ideal place to visit in Tamilnadu. Kodaikanal lies between the Parappar and Gundar Valleys and offers an escape from the harsh summer heat of the Indian subcontinent. The place has a large number of resorts which cater to tourists visiting the place for some peace and quiet.
              <br/><br/> <h5 className='tn1' style={{color:'red'}} >4.KANYAKUMAR</h5><br/>
               Kanyakumari is the southernmost point in India. The town opens into the ocean and marks the end of the Indian mainland. This famous tourist place in Tamilnadu, also receives a significant number of tourists every year. The town has close ties with the Indian mythology of Mahabharata, and is a popular pilgrimage for devotees of Shaktism.
             <br/><br/>  <h5 className='tn1' style={{color:'red'}} >5.MADURAI</h5><br/>
               Madurai is located on the Vaigai River and has a rich historical past. This temple city has an impressive number of temples known for their colourful hues and prominent sculpting. The temples and the intricate patterns on its towers are exemplary of the artistic genius of old artisans. The Meenakshi Temple is a favourite among the Hindus of India and receives hundreds of devotees. You need to also visit Thirumalai Nayak Palace, Gandhi Memorial Museum, Athisayam, Sri Koodal Azhagar Temple, Arulmigu Kallalagar Temple, Vandiyur Mariamman Teppakulam, and Samanar Jain Hills when touring Madurai.Madurai can be reached from Chennai via Chennai – Theni Hwy/Chennai – Villupuram – Trichy – Kanyakumari Rd.
              <br/><br/> <h5 className='tn1' style={{color:'red'}} >6.MAHAPALIPURAM</h5><br/>
               Mahabalipuram is a popular tourist place due to its rich historical and architectural heritage. This town has been the seat of archaeological interests in the state. Several shore temples from the 7th and 8th centuries have been found by the seaside and excavated by the authorities. These heritage sites have been converted into tourist spots for people to come and marvel at the beautiful temples from the Pallava Dynasty.
       
       
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
              <option value='1'>1.CHENNAI</option>
              <option value='1'>2.KANCHIPURAM</option>
              <option value='1'>3.KODAIKANAL</option>
              <option value='1'>4.KANYAKUMAR</option>
              <option value='1'>5.MADURAI</option>
              <option value='1'>6.MAHAPALIPURAM</option>
              
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