import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const ImageUrl = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  return (
    <>
      <input
        accept="image/*"
        type="file"
        id="select-image"
        style={{ display: 'none' }}
        onChange={e => setSelectedImage(e.target.files[0])}
      />
      <label htmlFor="select-image">
        {!imageUrl ? <Button variant="contained" color="primary" component="span">
          Upload Image
        </Button>:<></>}
      </label>
      {imageUrl && selectedImage && (
        <Box mt={2} textAlign="center">
          <div>Image Preview:</div>
          <img src={imageUrl} alt={selectedImage.name} height="400px" />
          <br></br>
          <div>
            <a href={imageUrl}>{imageUrl}</a>
            <button onClick={imageUrl}>Copy</button>
            </div>
        </Box>
      )}
    </>
  );
};

export default ImageUrl;