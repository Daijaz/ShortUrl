# Byte Size - URL Shortener

![Byte Size Logo](https://img.icons8.com/ios-filled/50/000000/link.png)

## Description 📄
**Byte Size** is a URL shortening application developed to facilitate the creation of short links from long URLs. It uses the Rebrandly API to create shortened links quickly and easily. This tool is ideal for sharing links on social media, managing long URLs, and keeping track of click statistics.

## Features 🌟
- ✔️ **Shorten long URLs**: Converts long URLs into short, shareable links.
- ✔️ **Interactive alerts**: Uses SweetAlert for notifications and status alerts.
- ✔️ **Modern design**: Clean and minimalist interface with Bootstrap and SweetAlert.
- ✔️ **Error handling**: Clear error messages when the API limits are reached.
- ✔️ **Social media icons**: Includes footer icons for LinkedIn, GitHub, and email contact.

## Technologies Used 🛠️
- **Frontend**: HTML5, CSS3, Bootstrap 4, SweetAlert2, FontAwesome
- **JavaScript**: Vanilla JS for client-side logic.
- **API**: [Rebrandly API](https://developers.rebrandly.com/)
- **Libraries**: jQuery

## Project Requirements 📋
- A modern browser that supports ES6.
- Rebrandly API Key to generate shortened links.

## Project Setup ⚙️
### 1. Clone the Repository
Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/tuusuario/byte-size-url-shortener.git
```
### 2. Configure the API Key
Obtain an API key from Rebrandly and add it to your main.js file as shown below:

```javascript
const apiKey = 'YOUR_API_KEY_HERE';
```

### 3. Open the Project in the Browser
Open the index.html file in your preferred browser to start using the application.

## Project Structure 📂
```
byte-size-url-shortener/
├── index.html          # Main application file.
├── style.css           # Custom styles for the application.
├── main.js             # Client logic for API communication.
├── helperFunctions.js  # Helper functions for alerts and response handling.
└── README.md           # Project documentation.

```
## Application Usage 🚀

1. **Enter URL**: Enter a long URL into the text input field.
2. **Click "Shorten"**: Click the button to shorten the URL.
3. **View the shortened link**: If the operation is successful, an alert will appear with the new shortened URL.
4. **Copy and share**: You can copy the URL from the alert and share it on any social media platform.

## Examples of Usage 💡
Below is an example of what the URL shortening process looks like:

- **Original URL**: `https://www.linkedin.com/in/alejandra-forero-example-profile/`
- **Shortened URL**: [https://rebrand.ly/abcd1234](https://rebrand.ly/abcd1234)

## Possible Errors and Solutions 🛠️

### Error: "Number of links-classic exceeded"
This occurs when the maximum number of links allowed by the Rebrandly plan has been reached. To resolve this:

- Upgrade to a higher plan in Rebrandly.
- Use a new account with a higher link limit.
- Implement another URL shortening API (such as Bit.ly or TinyURL).

## Future Improvements 🚀
1. Implement user authentication to manage accounts and subscriptions.
2. Add support for multiple URL shortening APIs.
3. Include click statistics and graphs to visualize link performance.

## Contributions 🤝
Contributions are welcome! If you have any ideas to improve the application, feel free to open an `issue` or submit a `pull request` with your suggestions.

1. Fork the project.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Make the necessary changes and commit (`git commit -m "Add new feature"`).
4. Push your changes (`git push origin feature/new-feature`).
5. Open a detailed `pull request` and describe your changes.

## Author 👨‍💻
**Miguel Osorio** - Full Stack Developer  
- [LinkedIn](https://www.linkedin.com/in/miguel-%C3%A1ngel-osorio-londo%C3%B1o-940218206/)  
- [GitHub](https://github.com/Daijaz)  
- [Email](mailto:miguelosorio1904@gmail.com)

## License 📄
This project is free to use.
