  // Language selection function
  // Set language content  
  function setLanguage(lang) {
    const content = {
      'en': {
        'headerTitle': 'Anil Tractor Services',
        'navHome': 'Home',
        'navServices': 'Services',
        'navGallery': 'Gallery',
        'navContact': 'Contact',
        'servicesTitle': 'Our Services',
        'servicesDesc': 'We provide comprehensive tractor services including:',
        'service1Title': 'Farm Ploughing (Rotavator)',
        'service1Desc': 'Farm ploughing.',
        'service2Title': 'Transportation of Goods',
        'service2Desc': 'Reliable transportation services for agricultural and construction materials.',
        'service3Title': 'Animal Food Cutter',
        'service3Desc': 'Animal feed cutter for cutting and preparing animal feed.',
        'service4Title': 'Cement Mixer',
        'service4Desc': 'Concrete mixer for construction projects.',
        'galleryTitle': 'Our Work Gallery',
        'contactTitle': 'Contact Anil Tractor Services',
        'mapText': 'Google map:',
        'locationBtn': 'Our Location',
        'emailText': 'Email:',
        'addressText': 'Address: Silhauri, Siyani Road,<br>Sheikhpura, Bihar, Pin code:- 811315',
        'creatorText': 'Created with ❤️ by AMAN RAJ'
      },
      'hi': {
        'headerTitle': 'अनिल ट्रैक्टर सेवाएं',
        'navHome': 'होम',
        'navServices': 'सेवाएं',
        'navGallery': 'गैलरी',
        'navContact': 'संपर्क',
        'servicesTitle': 'हमारी सेवाएं',
        'servicesDesc': 'हम व्यापक ट्रैक्टर सेवाएं प्रदान करते हैं जिनमें शामिल हैं:',
        'service1Title': 'खेत जोताई (रोटावेटर)',
        'service1Desc': 'खेत जोताई सेवाएं।',
        'service2Title': 'माल की ढुलाई',
        'service2Desc': 'कृषि और निर्माण सामग्री के लिए विश्वसनीय परिवहन सेवाएं।',
        'service3Title': 'पशु आहार कटर',
        'service3Desc': 'पशु आहार काटने के लिए मशीन।',
        'service4Title': 'सीमेंट मिक्सर',
        'service4Desc': 'निर्माण परियोजनाओं के लिए कंक्रीट मिक्सर।',
        'galleryTitle': 'हमारे काम की गैलरी',
        'contactTitle': 'अनिल ट्रैक्टर सेवाएं से संपर्क करें',
        'mapText': 'गूगल मानचित्र:',
        'locationBtn': 'हमारा स्थान',
        'emailText': 'ईमेल:',
        'addressText': 'पता: सिल्हौड़ी, सियानी रोड,<br>शेखपुरा, बिहार, पिन कोड:- 811315',
        'creatorText': 'Made with ❤️ by AMAN RAJ'
      }
    };
    
    // Update all text elements  
    document.querySelector('header h1').textContent = content[lang].headerTitle;
    
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks[0].textContent = content[lang].navHome;
    navLinks[1].textContent = content[lang].navServices;
    navLinks[2].textContent = content[lang].navGallery;
    navLinks[3].textContent = content[lang].navContact;
    
    document.getElementById('servicesTitle').textContent = content[lang].servicesTitle;
    document.getElementById('servicesDesc').textContent = content[lang].servicesDesc;
    
    document.getElementById('service1Title').textContent = content[lang].service1Title;
    document.getElementById('service1Desc').textContent = content[lang].service1Desc;
    document.getElementById('service2Title').textContent = content[lang].service2Title;
    document.getElementById('service2Desc').textContent = content[lang].service2Desc;
    document.getElementById('service3Title').textContent = content[lang].service3Title;
    document.getElementById('service3Desc').textContent = content[lang].service3Desc;
    document.getElementById('service4Title').textContent = content[lang].service4Title;
    document.getElementById('service4Desc').textContent = content[lang].service4Desc;
    
    document.getElementById('galleryTitle').textContent = content[lang].galleryTitle;
    document.getElementById('contactTitle').textContent = content[lang].contactTitle;
    document.getElementById('mapText').textContent = content[lang].mapText;
    document.getElementById('locationBtn').textContent = content[lang].locationBtn;
    document.getElementById('emailText').textContent = content[lang].emailText;
    document.getElementById('addressText').innerHTML = content[lang].addressText;
    document.getElementById('creatorText').textContent = content[lang].creatorText;
  }
  
  // Slideshow functionality  
  let slideIndex = 0;
  showSlides();
  
  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 1750);
  }
  
  
  
  
  
  // ----------------------
  // Consent language text
  // ----------------------
  const consentText = {
    en: {
      title: "Privacy Policy Consent",
      desc: "By continuing, you agree to our Privacy Policy. This helps us serve ads and improve user experience.",
      agree: "I agree",
      accept: "Accept"
    },
    hi: {
      title: "गोपनीयता नीति सहमति",
      desc: "आगे बढ़ने के लिए आप हमारी गोपनीयता नीति से सहमत होते हैं। यह हमें विज्ञापन दिखाने और सेवा सुधारने में मदद करता है।",
      agree: "मैं सहमत हूँ",
      accept: "स्वीकार करें"
    }
  };
  
  // Set consent modal text based on language
  function setConsentLanguage(lang) {
    document.querySelector("#consentModal h3").textContent = consentText[lang].title;
    document.querySelector("#consentModal p").innerHTML =
      consentText[lang].desc + ' <a href="pp.html" target="_blank">Privacy Policy</a>';
    
    // Checkbox label
    document.getElementById("consentCheck").nextSibling.textContent = " " + consentText[lang].agree;
    
    // Accept button
    document.getElementById("acceptConsentBtn").textContent = consentText[lang].accept;
  }
  
  // ----------------------
  // Language selection
  // ----------------------
  function selectLanguage(lang) {
    setLanguage(lang);
    
    // Set consent modal language
    setConsentLanguage(lang);
    
    document.getElementById('languageModal').style.display = 'none';
    
    // Check if privacy already accepted
    if (localStorage.getItem("privacyAccepted") === "true") {
      document.getElementById('mainContent').style.display = 'block';
      initConsentMode();
    } else {
      document.getElementById('consentModal').style.display = 'block';
    }
  }
  
  // ----------------------
  // Consent checkbox logic
  // ----------------------
  const consentCheck = document.getElementById("consentCheck");
  const acceptBtn = document.getElementById("acceptConsentBtn");
  
  consentCheck.addEventListener("change", () => {
    if (consentCheck.checked) {
      acceptBtn.classList.add("active");
      acceptBtn.style.cursor = "pointer";
    } else {
      acceptBtn.classList.remove("active");
      acceptBtn.style.cursor = "not-allowed";
    }
  });
  
  acceptBtn.addEventListener("click", () => {
    if (!consentCheck.checked) return;
    
    localStorage.setItem("privacyAccepted", "true");
    
    document.getElementById("consentModal").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
    
    initConsentMode();
  });
  
  // ----------------------
  // Google AdSense Consent Mode (basic)
  // ----------------------
  function initConsentMode() {
    window.dataLayer = window.dataLayer || [];
    
    function gtag() { dataLayer.push(arguments); }
    gtag('consent', 'update', {
      ad_storage: 'granted',
      analytics_storage: 'granted'
    });
  }