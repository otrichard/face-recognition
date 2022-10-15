import React, { useState } from 'react';

export const HomePage = () => {
  const [name, setName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  console.log(selectedFile);
  return (
    <div>
      <form>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <img src={selectedFile} />
        <input
          type="file"
          onChange={(e) => setSelectedFile(URL.createObjectURL(e.target.files[0]))}
        />
      </form>
    </div>
  );
};
