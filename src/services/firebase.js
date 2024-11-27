

export const uploadFile = (entityId, fieldName, file, onProgress, onComplete) => {
    // This is a mock of how file uploading could work
    // Normally you would upload the file to a server or a cloud storage (e.g., Firebase Storage)
    
    // Simulate progress
    let progress = 0;
    const progressInterval = setInterval(() => {
      progress += 10;
      onProgress(progress); // Call the progress callback
      
      if (progress === 100) {
        clearInterval(progressInterval); // Stop the progress interval when done
        
        // Simulate file upload completion (mock file path after upload)
        const uploadedFile = {
          file_path: `https://storage.googleapis.com/uploads/${entityId}/${fieldName}/${file.name}`,
        };
        
        onComplete(uploadedFile); // Call the completion callback with the file object
      }
    }, 100); // Update progress every 100ms
  };