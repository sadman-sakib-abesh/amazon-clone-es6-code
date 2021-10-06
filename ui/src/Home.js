import React from 'react';
import Product from './Product';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';



const Home =()=>{
    
        return (
            <div className='home'>
        <div className='home_container slide-container'>

<Slide className='slide'>
        <img
         id='92374633437'
        src='https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg'
className='home_img'
alt='' />
 <img
         id='92374633437'
        src='https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg'
className='home_img'
alt='' />
 <img
         id='92374633437'
        src='https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg'
className='home_img'
alt='' />

</Slide>

                
</div>
<div className='home_row'>
    <Product
    id='9237468237'
    title='Crayola Colored Pencil Set, School Supplies, Assorted Colors, 36 Count, Long'
    price={119}
    img=' https://m.media-amazon.com/images/I/51dgO2O9okL._AC_SY200_.jpg'
    rating={5}
    />
   <Product
   id='1244133424'
    title='you are the Best Wife: A True Love Story'
    price={29}
    img=' https://m.media-amazon.com/images/I/81tXACyDgBL._AC_UY327_FMwebp_QL65_.jpg'
    rating={4}
    />

</div>
{/*------*/}
<div className='home_row'>
<Product
 id='923746834723237'
    title='Redmi Band (Direct USB Charging, 5ATM Water Resistant, Full Touch Color Display, App Notifications, Music Control)'
    price={29}
    img='https://m.media-amazon.com/images/I/71RrPTCdy-L._AC_UL480_FMwebp_QL65_.jpg'
    rating={4}
    /><Product
    id='9237460008237'
    title='Redmi Earbuds S, Punchier Sound,Up to 12 Hours of Playback time, IPX4 Sweat & Splash Proof& DSP Environmental Noise Cancellation'
    price={29}
    img=' https://m.media-amazon.com/images/I/61k1jK9XwVL._AC_UY327_FMwebp_QL65_.jpg'
    rating={4}
    /><Product
    id='923740181968237'
    title='Mi 10000mAH Li-Polymer Power Bank 2i (Black) with 18W Fast Charging'
    price={29}
    img=' https://m.media-amazon.com/images/I/619AI9CLXTL._AC_UY327_FMwebp_QL65_.jpg'
    rating={4}
    />

</div>
{/*------*/}
<div className='home_row'>
<Product
 id='9237468209228337'
    title='Redmi Earbuds S, Punchier Sound,Up to 12 Hours of Playback time, IPX4 Sweat & Splash Proof& DSP Environmental Noise Cancellation'
    price={29}
    img=' https://m.media-amazon.com/images/I/41W5-duvLkL._AC_SY200_.jpg'
    rating={4}
    />
    
</div>
<div className='home_row'>
<Product
 id='923746834984'
    title='SAMSUNG 65-Inch Class Crystal UHD AU8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN65AU8000FXZA, 2021'
    price={1000}
    img='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg'
    rating={5}
    /><Product
    id='9237460008237'
    title='Amazon Basics Lightweight Super Soft Easy Care Microfiber Sheet Set with 14" Deep Pockets, King, Bright White'
    price={100}
    img='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg'
    rating={3}
    /><Product
    id='923740181968237'
    title='Amazon Basics 2 Slice, Extra-Wide Slot Toaster with 6 Shade Settings, Black'
    price={150}
    img='https://m.media-amazon.com/images/I/81smEEgnhfL._AC_UL320_.jpg'
    rating={5}
    />
<Product
    id='923740181968237'
    title='Mi 10000mAH Li-Polymer Power Bank 2i (Black) with 18W Fast Charging'
    price={29}
    img=' https://m.media-amazon.com/images/I/619AI9CLXTL._AC_UY327_FMwebp_QL65_.jpg'
    rating={4}
    />
</div>
{/*------*/}
<br/>
<div className='footer'>
    <div className='footer_1'>
<div className='footer_div'>
<b>Amazon Music</b>
<div>Stream millions
of songs</div>
<br/>
<b> 
Sell on Amazon</b>

<div>Start a Selling Account</div>
<br/>
<b>Book Depository</b>
<div>Books With Free
Delivery Worldwide</div>
<br/>
<b>IMDb</b>
<div>Movies, TV
& Celebrities</div>

</div>
<div className='footer_div'>
<b>Amazon Advertising</b>
<div>Find, attract, and
engage customers</div>
<br/>
<b>Amazon Business</b>
<div>Everything For
Your Business</div>
<br/>
<b>Box Office Mojo</b>
<div>Find Movie
Box Office Data</div>
<br/>
<b>IMDbPro</b>
<div>Get Info Entertainment
Professionals Need</div>
</div>
<div className='footer_div'>
<b>Amazon Drive</b>
<div>Cloud storage
from Amazon</div>
<br/>
<b>AmazonGlobal</b>
<div>Ship Orders
Internationally</div>
<br/>
<b>ComiXology</b>
<div>Thousands of
Digital Comics</div>
<br/>
<b>Kindle Direct Publishing</b>
<div>Indie Digital & Print Publishing
Made Easy</div>
</div>
<div className='footer_div'>
    <b>6pm</b>
    <div>Score deals
on fashion brands</div>
<br/>
<b>Home Services</b>
<div>Experienced Pros
Happiness Guarantee</div>
<br/>
<b>DPReview</b>
<div>Digital
Photography</div>
<br/>
<b>Prime Video Direct</b>
<div>Video Distribution
Made Easy</div>
</div>


</div>
<center>Conditions of UsePrivacy NoticeInterest-Based Ads© 1996-2021, Amazon.com, Inc. or its affiliates</center>
<br/>

</div>


            </div>
        );
    
}

export default Home;