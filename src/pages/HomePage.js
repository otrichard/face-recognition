import React, { useState } from 'react';
import * as faceapi from 'face-api.js';

export const HomePage = () => {
  const [name, setName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  console.log(selectedFile);

  React.useEffect(() => {
    const loadModels = async () => {
      Promise.all([
        faceapi.nets.faceExpressionNet.loadFromUri('/models'),
        faceapi.nets.ssdMobilenetv1.loadFromUri('/models'),
        faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
      ]);
    };
    loadModels();
  }, []);

  React.useEffect(() => {
    const detectFace = async () => {
      if (selectedFile) {
        const detections = await faceapi
          .detectSingleFace(document.getElementById('valami'))
          .withFaceLandmarks()
          .withFaceExpressions();
        console.log(detections);
      }
    };
    detectFace();
  }, [selectedFile]);

  return (
    <div>
      <form>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <img id="valami" src={selectedFile} />
        <input
          type="file"
          onChange={(e) => setSelectedFile(URL.createObjectURL(e.target.files[0]))}
        />
      </form>
    </div>
  );
};
