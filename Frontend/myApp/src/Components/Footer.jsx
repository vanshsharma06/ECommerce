// import React from 'react'

export default function Footer() {
  return (
    <div className="border-t-[3px] border-gray-200">
      <footer className="bg-gray-100 text-gray-800 py-10">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Us */}
          <div>
            <h3 className="font-semibold text-lg">Contact us</h3>
            <p>Classyshop - Mega Super Store</p>
            <p>507-Union Trade Centre, France</p>
            <p className="mt-2 text-red-500 font-bold">(+91) 9876-543-210</p>
            <p className="mt-2">sales@yourcompany.com</p>
            <div className="mt-4 flex items-center space-x-2 text-red-500">
              <span className="text-xl">💬</span>
              <span>Online Chat</span>
            </div>
            <p>Get Expert Help</p>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg">Products</h3>
            <ul className="mt-2 space-y-2">
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
            <h3 className="font-semibold text-lg">Our company</h3>
            <ul className="mt-2 space-y-2">
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
            <h3 className="font-semibold text-lg">Subscribe to newsletter</h3>
            <p className="mt-2">
              Subscribe to our latest newsletter to get news about special
              discounts.
            </p>
            <input
              type="email"
              placeholder="Your Email Address"
              className="mt-3 w-full p-2 border border-gray-300 rounded-md"
            />
            <button className="mt-3 w-full bg-red-500 text-white p-2 rounded-md hover:bg-red-600">
              SUBSCRIBE
            </button>
            <div className="mt-2 flex items-center">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-sm">
                I agree to the terms and conditions and the privacy policy
              </label>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-10 pt-3 text-center flex justify-center space-x-4 border-t-[2px] border-gray-200">
          <span className="text-2xl">🔵</span> {/* Facebook Icon */}
          <span className="text-2xl">🔴</span> {/* YouTube Icon */}
          <span className="text-2xl">⚪</span> {/* Pinterest Icon */}
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 mt-4 ">
          &copy; 2024 - Ecommerce Template
        </div>
      </footer>
    </div>
  );
}
