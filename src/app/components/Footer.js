"use client"
import React, { Component } from 'react'

export class Footer extends Component {
    
  render() {

    const currentYear = new Date().getFullYear();
    return (
       
       
        <footer className="bottom-0 bg-black text-white relative pt-5 shadow-md">
			<div className="container mx-auto px-6 ">
				<div className="justify-center items-center flex pt-[3%] pb-[1%]">
					<h1 className='glow-blue italic'>LUXRacers 🏎 🏁</h1>
				</div>
				<p className="text-center text-xs pt-2 lg:text-lg bg-clip-text text-transparent bg-white pb-[3%] text-gray-400">
					Question? Email us at{' '}
					<span className="font-bold text-white glow-blue">
						<a className="" href="mailto:info@dragondrifters.com">
							info@luxracers.com
						</a>
					</span>
				</p>
				<div className="sm:flex sm:mt-8 md:mt-0">
					<div className="sm:mt-0 sm:w-full sm:px-8 flex flex-row space-x-[2.5rem] justify-center items-center">
		
        

                    <div className="flex flex-col mt-2">
                <a
                  className="text-md"
                  href="facebook.com"
                  target="_blank"
                >
                  <svg fill="#F24726" width="34px" height="34px" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M20.9,2H3.1A1.1,1.1,0,0,0,2,3.1V20.9A1.1,1.1,0,0,0,3.1,22h9.58V14.25h-2.6v-3h2.6V9a3.64,3.64,0,0,1,3.88-4,20.26,20.26,0,0,1,2.33.12v2.7H17.3c-1.26,0-1.5.6-1.5,1.47v1.93h3l-.39,3H15.8V22h5.1A1.1,1.1,0,0,0,22,20.9V3.1A1.1,1.1,0,0,0,20.9,2Z" /></svg>
                </a>
              </div>

                        <div className="flex flex-col ">
                <a
                  className="text-md"
                  href="tiktok.com"
                  target="_blank"
                >
                  <svg fill="#F24726" width="24px" height="24px" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z" /></svg>
                </a>
              </div>
						
					</div>
				</div>
			</div>
			<div className="container mx-auto md:px-6 px-3">
				<div className="mt-16 border-t-2 border-gray-400">
					<div className="flex justify-between py-3 border-t border-gray-300">
						<p className="text-xs mb-2 text-gray-400">&copy; {currentYear} LUXRACERSLLC<br></br>All rights reserved</p>
						<p className="text-xs mb-2 text-gray-400">US-Based<br></br>🇺🇸</p>
					</div>
				</div>
			</div>
		</footer>
    )
  }
}

export default Footer