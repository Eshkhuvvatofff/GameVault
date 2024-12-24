import React from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchResults: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">"{query}" uchun qidiruv natijalari</h1>
      {/* Qidiruv natijalari ro'yxati */}
    </div>
  );
};

export default SearchResults;