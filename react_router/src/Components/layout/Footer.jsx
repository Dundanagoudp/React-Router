export const Footer=()=>{
      return (
            <>
            <footer class="section-footer">
    <div class="footer-container container">
      <div class="content_1">
      <img src="./logo.png" alt="logo" style={{ width: '100px', height: '100px' }} />
      <p>
        "Welcome to Chetan Patil's developer corner, <br />
        where innovation meets code!"
        </p>
        <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
      </div>
      <div class="content_2">
        <h4>quick links</h4>
        <a href="#">privacy policy</a>
        <a href="#">terms and condition</a>
        <a href="#">about</a>
      </div>
      <div class="content_3">
        <h4>Experience</h4>
        <a href="./contact.html">Contact Us</a>
        <a href="" target="_blank"> BOOK NOW </a>
        <a href="" target="_blank"> DETAILS </a>
        {/* <a href="" target="_blank"> Return and Exchange </a> */}
      </div>
      <div class="content_4">
        <h4>NEWSLETTER</h4>
        <p>
          Be the first to know about new
          <br />
          arrivals, sales & promos!
        </p>
        <div class="f-mail">
          <input type="email" placeholder="Your Email" />
          <i class="bx bx-envelope"></i>
        </div>
        <hr />
      </div>
    </div>
    <div class="f-design">
      <div class="f-design-txt">
        <p>Design and Code by Chetan Patil</p>
      </div>
    </div>
  </footer>`;
            </>
      );
};