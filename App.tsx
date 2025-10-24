import './App.css';
import { useState, useEffect } from 'react';
import { MapPin, Clock, Phone, Mail, Menu, X, ArrowRight, Star } from 'lucide-react';


const Restaurant3DWebsite = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuHoverIndex, setMenuHoverIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.parallax-element');
      elements.forEach(element => {
        const speed = parseFloat(element.getAttribute('data-speed') || '0.5');
        const yPos = -(window.scrollY * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
 const galleryItems = [
    {
      title: "Main Dining Room",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cde1e12a-a73d-473b-b563-03ff5b5611b2.png"
    },
    {
      title: "Outdoor Terrace",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6a1feb06-2210-40d9-9e00-b9b5f0bd55e6.png"
    },
    {
      title: "Private Dining",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e37a4660-acd4-456c-957d-0128796f2014.png"
    },
    {
      title: "Wine Selection",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9f1c9541-1446-4e80-8591-9cf64ab9a624.png"
    }
  ];
   const menuItems = [
    {
      name: "Truffle Mushroom Pasta",
      description: "Handmade pasta with wild mushrooms and black truffle",
      price: "$24",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b41fe1dd-c818-4cc1-9364-4015985429a8.png"
    },
    {
      name: "Grilled Atlantic Salmon",
      description: "With lemon butter sauce and seasonal vegetables",
      price: "$32",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4452b6ca-0362-46e1-b99f-fc306a1f0d45.png"
    },
    {
      name: "Herb-Crusted Lamb Chops",
      description: "With mint jus and roasted potatoes",
      price: "$38",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0eb89825-74be-4ebc-96df-6873d712b80b.png"
    },
    {
      name: "Chocolate Lava Cake",
      description: "With vanilla bean ice cream",
      price: "$14",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6b320e80-8935-4169-a083-558cd179471b.png"
    }
  ];
  // ... menuItems and galleryItems unchanged

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-inner">
          <h1 className="logo">ÉCLAT</h1>

          <div className="nav-desktop">
            {['Home', 'Menu', 'Gallery', 'Reservations', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item.toLowerCase())}
                className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
              >
                {item}
                <span className="nav-underline"></span>
              </button>
            ))}
          </div>

          <button 
            className="nav-toggle"
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-label={isNavOpen ? 'Close menu' : 'Open menu'}
          >
            {isNavOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isNavOpen && (
          <div className="nav-mobile">
            {['Home', 'Menu', 'Gallery', 'Reservations', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActiveSection(item.toLowerCase());
                  setIsNavOpen(false);
                }}
                className={`nav-mobile-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div 
          className="parallax-element hero-bg"
          data-speed="0.5"
        ></div>

        <div className="hero-content">
          <h1 className="hero-title">ÉCLAT</h1>
          <p className="hero-subtitle">A culinary experience that transcends the ordinary</p>
          <button className="hero-button">
            Reserve a Table <ArrowRight className="hero-button-icon" size={20} />
          </button>
        </div>

        <div className="floating-dot dot1"></div>
        <div className="floating-dot dot2"></div>
        <div className="floating-dot dot3"></div>
      </section>

      {/* Featured Menu Section */}
      <section className="menu-section">
        <div className="container">
          <div className="section-header">
            <h2>Signature Dishes</h2>
            <p>Crafted with passion and perfection</p>
          </div>

          <div className="menu-grid">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`menu-item ${menuHoverIndex === index ? 'hovered' : ''}`}
                onMouseEnter={() => setMenuHoverIndex(index)}
                onMouseLeave={() => setMenuHoverIndex(null)}
              >
                <div className="menu-image-wrapper">
                  <img src={item.image} alt={item.name} className="menu-image" />
                  <div className="menu-image-overlay"></div>
                </div>
                <div className="menu-info">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="menu-footer">
                    <span className="menu-price">{item.price}</span>
                    <button className="menu-order-btn" aria-label={`Order ${item.name}`}>
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Space</h2>
            <p>Experience our beautiful ambiance</p>
          </div>

          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <div key={index} className="gallery-item">
                <img src={item.image} alt={item.title} className="gallery-image" />
                <div className="gallery-overlay"></div>
                <h3 className="gallery-title">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section className="reservation-section">
        <div className="container reservation-container">
          <h2>Make a Reservation</h2>
          <form className="reservation-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="your@email.com" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date">Date</label>
                <input id="date" type="date" required />
              </div>
              <div className="form-group">
                <label htmlFor="time">Time</label>
                <input id="time" type="time" required />
              </div>
              <div className="form-group">
                <label htmlFor="guests">Guests</label>
                <select id="guests" required>
                  <option>1 person</option>
                  <option>2 people</option>
                  <option>3 people</option>
                  <option>4 people</option>
                  <option>5+ people</option>
                </select>
              </div>
            </div>
            <button type="submit" className="reservation-submit">Reserve Now</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-about">
            <h3>ÉCLAT</h3>
            <p>Exceptional dining experience in the heart of the city</p>
            <div className="footer-stars">
              {[1, 2, 3, 4, 5].map(star => (
                <Star key={star} className="star-icon" size={20} />
              ))}
            </div>
          </div>

          <div className="footer-hours">
            <h4>Hours</h4>
            <div className="footer-hours-list">
              <div><Clock size={16} /> Monday - Friday: 5:00 PM - 11:00 PM</div>
              <div><Clock size={16} /> Saturday - Sunday: 12:00 PM - 11:00 PM</div>
            </div>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <div><MapPin size={16} /> 123 Gourmet Street, Culinary District</div>
            <div><Phone size={16} /> (555) 123-4567</div>
            <div><Mail size={16} /> info@eclatrestaurant.com</div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 ÉCLAT Restaurant. All rights reserved.</p>
        </div>
      </footer>
</div>
  )
};
       
export default Restaurant3DWebsite;