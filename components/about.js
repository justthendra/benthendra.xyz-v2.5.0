import React from 'react'

export default function About() {
  return (
    <div>
        
      <div id='gizli'>
        <div id="hakkımda">
          <h2>thendra:$ <span className='text-white'>about-me</span><span id="cizgi">|</span></h2>
          <p>Hello, I'm Hasan. I am 18 years old. I am a 4th year high school student. I have been working with software for about 6 years. I started with Node.js, developed the Discord Bot, and made my biggest development with the latest FiveM script. Software was and remains my biggest hobby to date. I still continue to improve myself.</p>
        </div>

        <div id="contact">
          <h2>thendra:$ <span className='text-white'>contact-me</span><span id="cizgi">|</span></h2>
          <p>I leave you a few of my social media addresses and e-mail addresses so you can contact me.</p>
          <ul>
            <li>
              <a href="https://instagram.com/haasanerdem" className='text-[#999] hover:text-white hover:underline' target="_blank">instagram</a>
            </li>
            <li>
              <a href="https://discord.com/invite/JWx8qJ7B8W" className='text-[#999] hover:text-white hover:underline' target="_blank">my discord server</a>
            </li>
            <li>
            and finally my email address <span className='hover:text-white'>thendracreative@gmail.com</span>
            </li>
          </ul>
        </div>
        </div>
    </div>
  )
}
