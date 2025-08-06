# Smile Bright Dental Clinic Website

A responsive and professional static website for an Indian dental clinic built with HTML, Tailwind CSS, and vanilla JavaScript.

## Features

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop devices
- **Modern UI**: Clean, professional design with soft colors and smooth animations
- **Interactive Elements**: Testimonial slider, mobile menu, form validation
- **Optimized Performance**: Lightweight and fast-loading
- **No Backend Required**: Pure frontend implementation

## Technologies Used

- HTML5
- Tailwind CSS (via CDN)
- Vanilla JavaScript
- Font Awesome Icons
- AOS (Animate On Scroll) Library
- Google Fonts

## Project Structure

```
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Custom CSS styles
├── js/
│   └── script.js       # JavaScript functionality
├── images/             # SVG images and assets
│   ├── hero-image.svg
│   ├── clinic-1.svg
│   ├── dentist-team.svg
│   ├── testimonial-1.svg
│   ├── testimonial-2.svg
│   ├── testimonial-3.svg
│   └── testimonial-4.svg
└── README.md           # Project documentation
```

## How to Run

Since this is a static website, you can run it locally using any of these methods:

### Method 1: Open Directly in Browser

Simply open the `index.html` file in your web browser.

### Method 2: Use a Local Server

For the best experience, especially for testing JavaScript functionality, use a local development server:

1. If you have Python installed:
   ```
   # For Python 3.x
   python -m http.server
   
   # For Python 2.x
   python -m SimpleHTTPServer
   ```

2. If you have Node.js installed:
   ```
   # Install http-server globally
   npm install -g http-server
   
   # Run server
   http-server
   ```

3. Then open your browser and navigate to `http://localhost:8000` or the port shown in your terminal.

## Website Sections

1. **Header/Navigation**: Sticky navbar with mobile-responsive menu
2. **Hero Section**: Main banner with call-to-action
3. **About Us**: Information about the clinic
4. **Services**: Dental services offered
5. **Why Choose Us**: Clinic highlights and advantages
6. **Testimonials**: Patient reviews with slider functionality
7. **Book Appointment**: Appointment request form
8. **Contact Us**: Contact information and map
9. **Footer**: Additional links and information

## Customization

You can easily customize this website by:

- Modifying the color scheme in the Tailwind configuration in `index.html`
- Replacing the SVG images with real photos
- Adding or removing services
- Updating contact information and clinic details

## License

This project is available for personal and commercial use.

---

Made with ❤️ in India