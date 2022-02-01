
import React from 'react';

export default function SortBy() {
  return (
    <div className="form-floating">
      <select
        className="form-select"
        id="sortSelect"
        aria-label="Floating label select example"
      >
        <option selected>Price: Low to High</option>
        <option value="1">Price: High to Low</option>
        <option value="2">Last Price: High to Low</option>
        <option value="3">Last Price: Low to High</option>
        <option value="4">Offer: High to Low</option>
        <option value="5">Offer: Low To High</option>
      </select>
      <label htmlFor="sortSelect">Sort By Price</label>
    </div>
  );
}
