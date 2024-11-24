import React from 'react';
import { Heart, Gift, Users } from 'lucide-react';

export default function Donate() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <Heart className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Support Mental Health Access</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your donation helps students access mental health support when they need it most.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <Gift className="h-8 w-8 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Donate Coins</h3>
          <p className="text-gray-600 mb-4">Purchase coins for students in need</p>
          <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
            Donate Now
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <Users className="h-8 w-8 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Sponsor Sessions</h3>
          <p className="text-gray-600 mb-4">Fund multiple therapy sessions</p>
          <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
            Sponsor Now
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <Heart className="h-8 w-8 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Monthly Support</h3>
          <p className="text-gray-600 mb-4">Become a recurring donor</p>
          <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
            Subscribe
          </button>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-8">Your Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-2">500+</div>
            <div className="text-gray-600">Students Helped</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-2">2,000+</div>
            <div className="text-gray-600">Sessions Funded</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-2">90%</div>
            <div className="text-gray-600">Positive Outcomes</div>
          </div>
        </div>
      </div>
    </div>
  );
}