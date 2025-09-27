import React, { useState } from 'react';

const NameForm = () => {
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(name);
    setName('');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Enter Your Name</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>

      {submittedName && (
        <p className="mt-6 text-center text-lg text-green-600 font-semibold">
          Hello, {submittedName}!
        </p>
      )}
    </div>
  );
};

export default NameForm;
