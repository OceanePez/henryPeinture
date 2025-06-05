'use client';

import React from 'react';

const Copyright = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="text-center text-sm text-gray-500 py-4">
      © {year} Florence Sonia Henry. Tous droits réservés.
    </footer>
  );
};

export default Copyright;
