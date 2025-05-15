export default function Footer() {
    return (
      <footer className="bg-blue-900 text-white mt-10">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <h4 className="text-lg font-bold mb-2">MegaMart</h4>
            <p>Contact Us: 1800-123-456</p>
            <p>Email: support@megamart.com</p>
            <div className="mt-4 flex gap-2">
              <img src="/images/appstore.jfif" alt="App Store" width="120" />
              <img src="/images/playstore.avif" alt="Play Store" width="120" />
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Most Popular Categories</h4>
            <ul className="text-sm space-y-1">
              <li>Mobiles</li>
              <li>Electronics</li>
              <li>Furniture</li>
              <li>Watches</li>
              <li>Appliances</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Customer Services</h4>
            <ul className="text-sm space-y-1">
              <li>Return Policy</li>
              <li>Track Orders</li>
              <li>Help Center</li>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
            </ul>
          </div>
        </div>
        <div className="text-center py-4 text-sm border-t border-blue-800">
          © 2025 All rights reserved. Reliance Retail Ltd.
        </div>
      </footer>
    );
  }
  