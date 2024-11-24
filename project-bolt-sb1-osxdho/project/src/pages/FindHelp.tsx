import React from 'react';
import { Search, Filter, Star } from 'lucide-react';

export default function FindHelp() {
  const psychologists = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialization: "Anxiety & Depression",
      rating: 4.9,
      reviews: 127,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      sponsored: true
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialization: "Student Counseling",
      rating: 4.8,
      reviews: 93,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialization: "Stress Management",
      rating: 4.7,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Find Your Mental Health Expert</h1>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or specialization"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              />
            </div>
          </div>
          <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="h-5 w-5 mr-2" />
            Filters
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {psychologists.map((psych) => (
          <div key={psych.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            {psych.sponsored && (
              <div className="bg-indigo-600 text-white text-xs font-semibold px-3 py-1">
                Sponsored
              </div>
            )}
            <div className="p-6">
              <div className="flex items-start space-x-4">
                <img
                  src={psych.image}
                  alt={psych.name}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{psych.name}</h3>
                  <p className="text-sm text-gray-500">{psych.specialization}</p>
                  <div className="flex items-center mt-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium text-gray-900">{psych.rating}</span>
                    <span className="ml-1 text-sm text-gray-500">({psych.reviews} reviews)</span>
                  </div>
                </div>
              </div>
              <button className="mt-4 w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                Book Consultation
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}