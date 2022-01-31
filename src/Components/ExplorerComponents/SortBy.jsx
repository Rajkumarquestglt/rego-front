import React from 'react';

export default function SortBy() {
  return (
    <div className="form-floating">
      <select
        className="form-select"
        id="sortSelect"
        aria-label="Floating label select example">
        <option selected>Newest</option>
        <option value="1">Trending</option>
        <option value="2">Most Viewed</option>
        <option value="3">Less Viewed</option>
        <option value="3">Ending Soon</option>
        <option value="3">Recently Sold </option>
        <option value="3">Recently Created </option>
        <option value="3">Recently Viewed </option>
        <option value="3">Price</option>

        <option value="3">Ending Soon</option>
      </select>
      <label htmlFor="sortSelect">Sort By</label>
    </div>
  );
}
