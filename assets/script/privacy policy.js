    const content = {
      en: `
        <h2>Introduction</h2>
        <p>
          This Privacy Policy explains how Anil Tractor Services operates this website.
          We respect your privacy and are committed to protecting it.
        </p>

        <h2>Information We Collect</h2>
        <ul>
          <li>We do not automatically collect any personal, browser, or device information.</li>
          <li>We only receive information if you voluntarily contact us via email.</li>
        </ul>

        <h2>How We Use Information</h2>
        <ul>
          <li>To respond to your inquiries</li>
          <li>To provide customer support</li>
        </ul>

        <h2>Cookies</h2>
        <p>
          Our website itself does not use cookies.
          However, third-party services such as Google AdSense may use cookies
          to display relevant advertisements.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          We may use third-party services like Google AdSense.
          These services may collect information in accordance with their own privacy policies.
        </p>

        <h2>Your Consent</h2>
        <p>
          By using our website, you agree to this Privacy Policy.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions regarding this Privacy Policy,
          please contact us at <strong><a href="mailto:amanraj05100@gmail.com"> amanraj05100@gmail.com</a></strong>.
        </p>
      `,
      
      hi: `
        <h2>परिचय</h2>
        <p>
          यह गोपनीयता नीति बताती है कि अनिल ट्रैक्टर सेवाएं इस वेबसाइट का संचालन कैसे करती हैं।
          हम आपकी गोपनीयता का सम्मान करते हैं और इसे सुरक्षित रखने के लिए प्रतिबद्ध हैं।
        </p>

        <h2>हम कौन-सी जानकारी एकत्र करते हैं</h2>
        <ul>
          <li>हम स्वतः किसी भी प्रकार की व्यक्तिगत, ब्राउज़र या डिवाइस जानकारी एकत्र नहीं करते हैं।</li>
          <li>जानकारी केवल तभी प्राप्त होती है जब आप स्वयं ईमेल द्वारा हमसे संपर्क करते हैं।</li>
        </ul>

        <h2>जानकारी का उपयोग</h2>
        <ul>
          <li>आपके प्रश्नों का उत्तर देने के लिए</li>
          <li>ग्राहक सहायता प्रदान करने के लिए</li>
        </ul>

        <h2>कुकीज़</h2>
        <p>
          हमारी वेबसाइट स्वयं कुकीज़ का उपयोग नहीं करती है।
          हालांकि, Google AdSense जैसी थर्ड-पार्टी सेवाएं
          विज्ञापन दिखाने के लिए कुकीज़ का उपयोग कर सकती हैं।
        </p>

        <h2>थर्ड-पार्टी सेवाएं</h2>
        <p>
          हम Google AdSense जैसी थर्ड-पार्टी सेवाओं का उपयोग कर सकते हैं,
          जिनकी अपनी गोपनीयता नीतियां होती हैं।
        </p>

        <h2>आपकी सहमति</h2>
        <p>
          हमारी वेबसाइट का उपयोग करके आप इस गोपनीयता नीति से सहमत होते हैं।
        </p>

        <h2>संपर्क करें</h2>
        <p>
          यदि इस गोपनीयता नीति को लेकर आपका कोई प्रश्न है,
          तो आप हमसे <strong><a href="mailto:amanraj05100@gmail.com"> amanraj05100@gmail.com</a></strong> पर संपर्क कर सकते हैं।
        </p>
      `
    };
    
    function setLang(lang) {
      document.getElementById("ppContent").innerHTML = content[lang];
    }
    
    // Default language
    setLang("en");