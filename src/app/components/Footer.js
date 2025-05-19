import Link from 'next/link';
import { FaAppStore } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-3 gap-10">
        
        {/* Company Info */}
        <div className="text-center sm:text-left">
          <h4 className="text-lg font-bold mb-2">MegaMart</h4>
          <p>Contact Us: 1800-123-456</p>
          <p>Email: support@megamart.com</p>
          <div className="mt-4 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 justify-center sm:justify-start">
            <Link href="#" className="flex items-center gap-2 hover:text-blue-400 transition">
              <FaAppStore size={20} />
              <span>App Store</span>
            </Link>
            <Link href="#" className="flex items-center gap-2 hover:text-blue-400 transition">
              <IoLogoGooglePlaystore size={20} />
              <span>Google Play</span>
            </Link>
          </div>
        </div>

        {/* Popular Categories */}
        <div className="text-center sm:text-left">
          <h4 className="font-semibold mb-2">Most Popular Categories</h4>
          <ul className="text-sm space-y-1">
            <li><Link href="#" className="hover:text-white">Mobiles</Link></li>
            <li><Link href="#" className="hover:text-white">Electronics</Link></li>
            <li><Link href="#" className="hover:text-white">Furniture</Link></li>
            <li><Link href="#" className="hover:text-white">Watches</Link></li>
            <li><Link href="#" className="hover:text-white">Appliances</Link></li>
          </ul>
        </div>

        {/* Customer Services */}
        <div className="text-center sm:text-left">
          <h4 className="font-semibold mb-2">Customer Services</h4>
          <ul className="text-sm space-y-1">
            <li><Link href="#" className="hover:text-white">Return Policy</Link></li>
            <li><Link href="#" className="hover:text-white">Track Orders</Link></li>
            <li><Link href="#" className="hover:text-white">Help Center</Link></li>
            <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-white">Terms of Use</Link></li>
          </ul>
        </div>
      </div>

      <div className="text-center py-4 text-sm border-t border-blue-800">
        © 2025 All rights reserved. Reliance Retail Ltd.
      </div>
    </footer>
  );
}
