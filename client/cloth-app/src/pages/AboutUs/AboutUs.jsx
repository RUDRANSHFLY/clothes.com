import React from 'react';
import "../AboutUs/AboutUs.scss"

const AboutUs = () => {
  return (
    <div className='aboutus'>
        <div className="main">
          <div className="h">
            <h1>Style Redefined, Your Way.</h1>
            <h2>
            Unveil Your Signature Style with Cloth.com
            </h2>
          </div>
          <div className="company">
            <div className='r'>
                <img src="https://images.pexels.com/photos/1181292/pexels-photo-1181292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" srcset="" />
            </div>
            <div className='r'>
              <div className='c'>
                <img src="https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              </div>
              <div className='c'>
                  <img src="https://images.pexels.com/photos/257636/pexels-photo-257636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" srcset="" />
              </div>
            </div>
              <div className="r">
                <img src="https://images.pexels.com/photos/1181214/pexels-photo-1181214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              </div>
          </div>
        </div>
        <div className="story">
          <div className='hs'>
            <h1>Story</h1>
            <h2>Stories Woven in Every Stitch</h2>
          </div>
          <div className="bgimg">
            <img src="https://images.pexels.com/photos/3182826/pexels-photo-3182826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>
          <div className="storydesc">
            <p>
            Amelia, an aspiring artist, stumbled upon Cloth.com. As she browsed through the curated collection, each garment seemed like a canvas waiting to be adorned. With a sense of anticipation, she selected a flowing dress, its vibrant colors echoing her creativity. When the package arrived, she felt a rush of excitement as she tried on the dress - it was as if her artistic spirit had found a new medium. With every step, Amelia felt her confidence soar, knowing that Cloth.com had not just delivered a dress, but a masterpiece that told her unique story.
            </p>
          </div>
        </div>
        <h1 id='h1t'>Our Team</h1>
        <div className="team">
            <div className='teammeamber'>
              <img src="https://pyxis.nymag.com/v1/imgs/7c8/9d3/c493bf97f12f53fa7649f21d67a0bfb2b8-Cillian-Murphy.jpg" alt="" />
              <div className="occu">
                <h2>Thomas Shelby</h2>
                <h3>CEO</h3>
              </div>
            </div>
            <div className='teammeamber'>
              <img src="https://wallpapercave.com/wp/wp5460106.jpg" alt="" />
              <div className="occu">
                <h2>Bruce Wayne</h2>
                <h3>Co-Founder</h3>
              </div>
            </div>
            <div className='teammeamber'>
              <img src="https://c4.wallpaperflare.com/wallpaper/258/25/185/leonardo-dicaprio-actor-face-look-wallpaper-preview.jpg" alt="" />
              <div className="occu">
                <h2>Jordan Belfort</h2>
                <h3>CFO</h3>
              </div>
            </div>
            <div className='teammeamber'>
              <img src="https://i.insider.com/5f763f1a0ab50d00184adb01?width=1000&format=jpeg&auto=webp" alt="" />
              <div className="occu">
                <h2>Kimiko</h2>
                <h3>CTO</h3>
              </div>
            </div>
            <div className='teammeamber'>
              <img src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTTgkOVMXVgzkV1zqsIiZgEeCq8x5aNrUrzb0pc5wX63R5-NcEMsiBkUTvFdiD5AZIhU0jIynvamH3fpT4" alt="" />
              <div className="occu">
                <h2>Alexandra Daddario</h2>
                <h3>Director</h3>
              </div>
            </div>
            <div className='teammeamber'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg" alt="" />
              <div className="occu">
                <h2>Elon Musk</h2>
                <h3>Tech Lead</h3>
              </div>
            </div>
            <div className='teammeamber'>
              <img src="https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg" alt="" />
              <div className="occu">
                <h2>Sundar Pichai</h2>
                <h3>Product Manager</h3>
              </div>
            </div>
            <div className='teammeamber'>
              <img src="https://images.businessoffashion.com/profiles/asset/1610587897270446/jack-ma-1610587925818238.jpg?auto=format%2Ccompress&fit=crop&h=360&w=660" alt="" />
              <div className="occu">
                <h2>Jack Ma</h2>
                <h3>Operation-Head</h3>
              </div>
            </div>
            <div className='teammeamber'>
              <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTTQY0mfA_H7y-2HR3TX3-VBPRJKCJHG_DUu_7Sjjc3ackX1Ykr" alt="" />
              <div className="occu">
                <h2>Özge Yagız</h2>
                <h3>Back-end Developer</h3>
              </div>
            </div>
            <div className='teammeamber'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/TechCrunch_Disrupt_San_Francisco_2019_-_Day_3_Carl_Pei_cropped.jpeg/800px-TechCrunch_Disrupt_San_Francisco_2019_-_Day_3_Carl_Pei_cropped.jpeg" alt="" />
              <div className="occu">
                <h2>Carl Pei</h2>
                <h3>Service Executive</h3>
              </div>
            </div>
            <div className='teammeamber'>
              <img src="https://www.nme.com/wp-content/uploads/2017/06/mrrobot_s2_cast_rami-malek2.jpg" alt="" />
              <div className="occu">
                <h2>Rami Malik</h2>
                <h3>Security-Head</h3>
              </div>
            </div>
            <div className='teammeamber'>
              <img src="https://i.insider.com/5a8f3a464e333b6b008b4574?width=816&format=jpeg" alt="" />
              <div className="occu">
                <h2>Mark Zuckerberg</h2>
                <h3>Front-Developer</h3>
              </div>
            </div>

        </div>
    </div>
  )
}

export default AboutUs;
