import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight, FaMusic } from 'react-icons/fa';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  // Placeholder gallery data - This will be dynamic later
  const galleryItems = [
    { id: 1, category: 'events', title: 'Annual Concert 2024', placeholder: true },
    { id: 2, category: 'classes', title: 'Vocal Training Session', placeholder: true },
    { id: 3, category: 'achievements', title: 'Award Ceremony', placeholder: true },
    { id: 4, category: 'events', title: 'Music Workshop', placeholder: true },
    { id: 5, category: 'studio', title: 'Recording Session', placeholder: true },
    { id: 6, category: 'classes', title: 'Classical Music Class', placeholder: true },
    { id: 7, category: 'achievements', title: 'Student Performance', placeholder: true },
    { id: 8, category: 'events', title: 'Cultural Program', placeholder: true },
    { id: 9, category: 'studio', title: 'Music Production', placeholder: true },
    { id: 10, category: 'classes', title: 'Group Learning', placeholder: true },
    { id: 11, category: 'achievements', title: 'Competition Winners', placeholder: true },
    { id: 12, category: 'events', title: 'Guest Performance', placeholder: true },
  ];

  const filters = [
    { id: 'all', name: 'All' },
    { id: 'events', name: 'Events' },
    { id: 'classes', name: 'Classes' },
    { id: 'achievements', name: 'Achievements' },
    { id: 'studio', name: 'Studio' },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const openLightbox = (index) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    setSelectedImage((prev) =>
      prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setSelectedImage((prev) =>
      prev === filteredItems.length - 1 ? 0 : prev + 1
    );
  };

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="gallery-page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="container">
          <motion.div
            className="gallery-hero-content"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="page-label">Our Moments</span>
            <h1>
              Photo <span>Gallery</span>
            </h1>
            <p>
              Capturing memories of musical journeys, performances, achievements,
              and the vibrant community at T. Shourie School of Music.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="gallery-filter">
        <div className="container">
          <div className="filter-tabs">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`filter-tab ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-main section">
        <div className="container">
          <motion.div className="gallery-grid" layout>
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="gallery-item"
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => openLightbox(index)}
                >
                  <div className="gallery-image">
                    {item.placeholder ? (
                      <div className="image-placeholder">
                        <FaMusic />
                        <span>Add Image</span>
                      </div>
                    ) : (
                      <img src={item.image} alt={item.title} />
                    )}
                  </div>
                  <div className="gallery-overlay">
                    <span className="gallery-category">{item.category}</span>
                    <h3 className="gallery-title">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="gallery-empty">
              <FaMusic />
              <h3>No images found</h3>
              <p>Check back soon for more gallery updates!</p>
            </div>
          )}

          {/* Coming Soon Notice */}
          <div className="gallery-notice">
            <p>
              <strong>Note:</strong> Gallery images will be added soon. This section
              will be dynamically managed by the admin panel.
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button className="lightbox-close" onClick={closeLightbox}>
              <FaTimes />
            </button>
            <button
              className="lightbox-nav prev"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
            >
              <FaChevronLeft />
            </button>
            <button
              className="lightbox-nav next"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
            >
              <FaChevronRight />
            </button>
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="lightbox-image">
                {filteredItems[selectedImage].placeholder ? (
                  <div className="image-placeholder large">
                    <FaMusic />
                    <span>Image Coming Soon</span>
                  </div>
                ) : (
                  <img
                    src={filteredItems[selectedImage].image}
                    alt={filteredItems[selectedImage].title}
                  />
                )}
              </div>
              <div className="lightbox-info">
                <span className="lightbox-category">
                  {filteredItems[selectedImage].category}
                </span>
                <h3>{filteredItems[selectedImage].title}</h3>
              </div>
            </motion.div>
            <div className="lightbox-counter">
              {selectedImage + 1} / {filteredItems.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;