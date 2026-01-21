const content = {
  en: `
    <p>
      Anil Tractor Service is a trusted provider of tractor and agricultural services,
      helping farmers and businesses with reliable and affordable solutions.
    </p>

    <p>
      We provide farm ploughing (rotavator), goods transportation,
      animal feed cutting, and cement mixer services using well-maintained tractors.
    </p>

    <p>
      our goal is to support farmers by offering
      timely service, fair pricing, and honest work.
    </p>

    <p>
      Our mission is to make farming and construction work easier
      with dependable tractor services and customer satisfaction.
    </p>
  `,
  hi: `
    <p>
      अनिल ट्रैक्टर सर्विस एक भरोसेमंद ट्रैक्टर सेवा प्रदाता है,
      जो किसानों और स्थानीय लोगों को किफायती और विश्वसनीय सेवाएं प्रदान करता है।
    </p>

    <p>
      हम खेत जोताई (रोटावेटर), माल ढुलाई,
      पशु चारा काटने और सीमेंट मिक्सर जैसी सेवाएं उपलब्ध कराते हैं।
    </p>

    <p>
      अनिल ट्रैक्टर सर्विस समय पर सेवा, 
      उचित दाम और ईमानदारी के लिए जानी जाती है।
    </p>

    <p>
      हमारा उद्देश्य किसानों और ग्राहकों के काम को आसान बनाना
      और संतोषजनक ट्रैक्टर सेवा प्रदान करना है।
    </p>
  `
};

function setLang(lang) {
  document.getElementById("aboutContent").innerHTML = content[lang];
  document.getElementById("aboutTitle").innerText =
    lang === "hi" ? "हमारे बारे में" : "About Us";
}

setLang("en");
