const renderResponse = (res) => {
  if (res.errors) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: "Sorry, couldn't format your URL. Try again.",
    });
  } else {  
    const fullUrl = `https://${res.shortUrl}`; // Asegurarse de usar https://
    Swal.fire({
      icon: 'success',
      title: 'Shortened URL',
      html: `Your shortened URL is: <a href="${fullUrl}" target="_blank">${fullUrl}</a>`
    });
  }
};
