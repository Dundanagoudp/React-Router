
export const About=()=>{
      return (
            <main className="about-page">
            <section className="hero-section">
              <div className="hero-content">
                <h1 className="hero-heading">About Us</h1>
                <p className="hero-description">
                  Welcome to MovieWorld, your number one source for all things movies. We're dedicated to giving you the very best of movie reviews, trailers, and exclusive content, with a focus on providing insightful reviews, detailed ratings, and the latest news in the film industry.
                </p>
              </div>
              <div className="hero-image-container">
                <img
                  className="./kiccha.jpg"                      
                  src="./kiccha.jpg"
                  alt="Movie reel"
                />
              </div>
            </section>
      
            {/* <section className="about-info">
              <h2 className="about-heading">Our Mission</h2>
              <p className="about-paragraph">
                At MovieWorld, we aim to provide film enthusiasts with the best movie experience by curating well-researched reviews and keeping you updated with the latest releases and trends in the film industry. Whether you're a movie buff or just looking for weekend entertainment, we have something for everyone.
              </p>
            </section> */}
          </main>
      
      );
};