// pages/HomePage.js
import { useEffect } from 'react';

const TypeWriter = () => {
  useEffect(() => {
    class TypeWriter {
      constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
      }

      type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        this.txtElement.innerHTML = `<span class="txt" style="color: #fff;">${this.txt}</span>`;

        let typeSpeed = 100;

        if (this.isDeleting) {
          typeSpeed /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
          typeSpeed = this.wait;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.wordIndex++;
          typeSpeed = 300;
        }

        setTimeout(() => this.type(), typeSpeed);
      }
    }

    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    // Initialize TypeWriter on mount
    const typewriter = new TypeWriter(txtElement, words, wait);

    // Clean up on component unmount
    return () => {
      // Any cleanup code (if needed)
    };
  }, []);

  return (
    <div className="containertype">
      <h3>
        <span className="txt-type" data-wait="2000" data-words='["Exploring Places", "Seeking Adventures", "Connecting People", "Spreading Happy Vibes"]'></span>
      </h3>
    </div>
  );
};

export default TypeWriter;
