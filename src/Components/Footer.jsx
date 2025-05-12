// import React from 'react'

export default function Footer() {
  return (
    <div className="border-t-[3px] border-gray-200">
      <footer className="bg-gray-100 text-gray-800 py-10">
        <div className="container mx-auto grid grid-cols-4 md:grid-cols-4">
          {/* Contact Us */}
          <div>
            <h3 className="font-semibold text-[11px] lg:text-[16px] ">Contact us</h3>
            <p className="text-[9px] mt-2 lg:text-[13px]">Classyshop - Mega Super Store</p>
            <p className="text-[9px] lg:text-[13px]">507-Union Trade Centre, France</p>
            <p className="mt-2 text-red-500 font-bold text-[9px] lg:text-[14px]">
              (+91) 9876-543-210
            </p>
            <p className="mt-2 text-[8px] lg:text-[13px]">sales@yourcompany.com</p>
            <div className="mt-4 flex items-center space-x-1 text-red-500">
              <span className="text-[12px] lg:text-[21px]">💬</span>
              <span className="text-[12px] lg:text-[14px]">Online Chat</span>
            </div>
            <p className="text-[9px] lg:text-[13px] mt-1">Get Expert Help</p>
          </div>

          {/* Products */}
          <div className="mx-4">
            <h3 className="font-semibold text-[11px] lg:text-[16px]">Products</h3>
            <ul className="mt-2 space-y-2 text-[9px] lg:text-[13px]">
              <li>
                <a href="#" className="hover:text-gray-500">
                  Prices drop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-500">
                  New products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-500">
                  Best sales
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-500">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-500">
                  Sitemap
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-500">
                  Stores
                </a>
              </li>
            </ul>
          </div>

          {/* Our Company */}
          <div>
            <h3 className="font-semibold text-[11px] lg:text-[16px]">Our company</h3>
            <ul className="mt-2 space-y-2 text-[9px] lg:text-[13px]">
              <li>
                <a href="#" className="hover:text-gray-500">
                  Delivery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-500">
                  Legal Notice
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-500">
                  Terms and conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-500">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-500">
                  Secure payment
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-500">
                  Login
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-[11px] lg:text-[16px]">
              Subscribe to newsletter
            </h3>
            <p className="mt-2 text-[9px] lg:text-[13px]">
              Subscribe to our latest newsletter to get news about special
              discounts.
            </p>
            <input
              type="email"
              placeholder="Your Email Address"
              className="mt-3 w-full p-1 text-[9px] lg:text-[13px] lg:py-[10px] lg:px-[10px] border border-gray-300 rounded-md"
            />
            <button className="mt-3 w-[80px] bg-red-500 text-white p-2 text-[9px] lg:text-[13px] lg:w-[100px] rounded-[3px] hover:bg-red-600">
              SUBSCRIBE
            </button>
            <div className="mt-2 flex items-center">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-[9px] lg:text-[13px]">
                I agree to the terms and conditions and the privacy policy
              </label>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-4 pt-3 text-center flex justify-center space-x-4 border-t-[2px] border-gray-200">
          <span className="text-1xl">🔵</span> {/* Facebook Icon */}
          <span className="text-1xl">🔴</span> {/* YouTube Icon */}
          <span className="text-1xl">⚪</span> {/* Pinterest Icon */}
        </div>

        {/* Copyright */}
        <div className="text-center text-[9px] lg:text-[13px] text-gray-500 mt-4 mb-[-30px] ">
          &copy; 2024 - Ecommerce Template
        </div>
      </footer>
    </div>
  );
}
