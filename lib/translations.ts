export type Lang = 'en' | 'mr'

export const t = {
  nav: {
    home:    { en: 'Home',    mr: 'मुख्यपृष्ठ' },
    about:   { en: 'About',   mr: 'माझ्याबद्दल' },
    media:   { en: 'Media',   mr: 'मीडिया' },
    news:    { en: 'News',    mr: 'बातम्या' },
    contact: { en: 'Contact', mr: 'संपर्क' },
  },
  hero: {
    name:       { en: 'Jitendra Wasnik',           mr: 'जितेंद्र वासनिक' },
    title:      { en: 'Public Representative',     mr: 'लोकप्रतिनिधी' },
    location:   { en: 'Nagpur, Maharashtra',        mr: 'नागपूर, महाराष्ट्र' },
    tagline:    { en: 'Serving the people with dedication and integrity.', mr: 'समर्पण आणि प्रामाणिकपणाने जनतेची सेवा.' },
    cta_about:  { en: 'Know More',   mr: 'अधिक जाणा' },
    cta_contact:{ en: 'Contact Me',  mr: 'संपर्क करा' },
  },
  about: {
    heading:  { en: 'About Me',                   mr: 'माझ्याबद्दल' },
    subhead:  { en: 'A life dedicated to public service', mr: 'सार्वजनिक सेवेला समर्पित जीवन' },
    bio:      {
      en: 'Jitendra Wasnik has dedicated his life to the service of the people of Nagpur. With a strong belief in inclusive development, he has worked tirelessly to improve infrastructure, education, and healthcare in his constituency.',
      mr: 'जितेंद्र वासनिक यांनी आपले जीवन नागपूरच्या जनतेच्या सेवेसाठी समर्पित केले आहे. सर्वसमावेशक विकासावर दृढ विश्वास ठेवत, त्यांनी आपल्या मतदारसंघातील पायाभूत सुविधा, शिक्षण आणि आरोग्य सुधारण्यासाठी अथक परिश्रम केले आहेत.',
    },
    mission:  { en: 'Mission',   mr: 'ध्येय' },
    vision:   { en: 'Vision',    mr: 'दृष्टिकोन' },
    mission_text: {
      en: 'To work for the overall development of citizens through transparent governance and community-driven initiatives.',
      mr: 'पारदर्शक प्रशासन आणि समुदाय-चालित उपक्रमांद्वारे नागरिकांच्या सर्वांगीण विकासासाठी कार्य करणे.',
    },
    vision_text: {
      en: 'A Nagpur where every citizen has access to quality education, healthcare, and opportunity.',
      mr: 'एक असे नागपूर जिथे प्रत्येक नागरिकाला दर्जेदार शिक्षण, आरोग्यसेवा आणि संधी उपलब्ध असेल.',
    },
  },
  achievements: {
    heading: { en: 'Achievements',               mr: 'उपलब्धी' },
    subhead: { en: 'Milestones in public service', mr: 'सार्वजनिक सेवेतील महत्त्वाचे टप्पे' },
    items: [
      {
        title: { en: 'Infrastructure Development',  mr: 'पायाभूत सुविधा विकास' },
        desc:  { en: 'Oversaw construction of 15+ roads and 3 community halls in the constituency.', mr: 'मतदारसंघात १५+ रस्ते आणि ३ सामुदायिक सभागृहांचे बांधकाम केले.' },
        icon: '🏗️',
      },
      {
        title: { en: 'Education Initiatives',       mr: 'शिक्षण उपक्रम' },
        desc:  { en: 'Established 2 new schools and provided scholarships to 500+ students annually.', mr: '२ नवीन शाळा स्थापन केल्या आणि दरवर्षी ५००+ विद्यार्थ्यांना शिष्यवृत्ती दिली.' },
        icon: '📚',
      },
      {
        title: { en: 'Healthcare Access',           mr: 'आरोग्य सेवा' },
        desc:  { en: 'Launched free health camps serving 10,000+ citizens every year.', mr: 'दरवर्षी १०,०००+ नागरिकांसाठी मोफत आरोग्य शिबिरे आयोजित केली.' },
        icon: '🏥',
      },
      {
        title: { en: 'Women Empowerment',           mr: 'महिला सशक्तीकरण' },
        desc:  { en: 'Supported 200+ self-help groups and women entrepreneurship programmes.', mr: '२००+ स्वयंसहाय्यता गट आणि महिला उद्योजकता कार्यक्रमांना पाठिंबा दिला.' },
        icon: '💪',
      },
    ],
  },
  news: {
    heading: { en: 'Latest News',        mr: 'ताज्या बातम्या' },
    subhead: { en: 'Stay updated',       mr: 'अद्ययावत राहा' },
    read_more: { en: 'Read More →',      mr: 'अधिक वाचा →' },
    items: [
      {
        date:  '12 Sep 2026',
        title: { en: 'Inaugurated new community park in Ward 14', mr: 'वार्ड १४ मध्ये नवीन सामुदायिक उद्यानाचे उद्घाटन' },
        desc:  { en: 'A new green space has been developed for residents of Ward 14, featuring walking tracks and children\'s play areas.', mr: 'वार्ड १४ च्या रहिवाशांसाठी चालण्याचे मार्ग आणि मुलांच्या खेळाच्या जागांसह नवीन हरित क्षेत्र विकसित केले गेले.' },
      },
      {
        date:  '5 Sep 2026',
        title: { en: 'Free medical camp held at Dharampeth', mr: 'धरमपेठ येथे मोफत वैद्यकीय शिबीर' },
        desc:  { en: 'Over 800 citizens received free health checkups, medicines, and specialist consultations at the camp.', mr: 'शिबिरात ८०० हून अधिक नागरिकांनी मोफत आरोग्य तपासणी, औषधे आणि तज्ज्ञ सल्ला घेतला.' },
      },
      {
        date:  '28 Aug 2026',
        title: { en: 'Scholarship distribution to meritorious students', mr: 'गुणवंत विद्यार्थ्यांना शिष्यवृत्ती वितरण' },
        desc:  { en: '120 deserving students from the constituency received scholarships for higher education this year.', mr: 'यावर्षी मतदारसंघातील १२० गरजू विद्यार्थ्यांना उच्च शिक्षणासाठी शिष्यवृत्ती मिळाली.' },
      },
    ],
  },
  gallery: {
    heading: { en: 'Gallery',        mr: 'गॅलरी' },
    subhead: { en: 'Moments from the ground', mr: 'जमिनीवरील क्षण' },
    items: [
      { label: { en: 'Public Rally',          mr: 'सार्वजनिक सभा' },        emoji: '🎤' },
      { label: { en: 'Infrastructure Visit',  mr: 'पायाभूत सुविधा भेट' },   emoji: '🏗️' },
      { label: { en: 'Medical Camp',          mr: 'वैद्यकीय शिबीर' },       emoji: '🏥' },
      { label: { en: 'School Inauguration',   mr: 'शाळा उद्घाटन' },         emoji: '🏫' },
      { label: { en: 'Community Meeting',     mr: 'सामुदायिक बैठक' },       emoji: '🤝' },
      { label: { en: 'Award Ceremony',        mr: 'पुरस्कार समारंभ' },       emoji: '🏆' },
    ],
  },
  contact: {
    heading:  { en: 'Contact Me',            mr: 'संपर्क करा' },
    subhead:  { en: 'Get in touch',          mr: 'संपर्क साधा' },
    name:     { en: 'Your Name',             mr: 'तुमचे नाव' },
    email:    { en: 'Email Address',         mr: 'ईमेल पत्ता' },
    phone:    { en: 'Phone Number',          mr: 'फोन नंबर' },
    message:  { en: 'Your Message',          mr: 'तुमचा संदेश' },
    send:     { en: 'Send Message',          mr: 'संदेश पाठवा' },
    office:   { en: 'Office Address',        mr: 'कार्यालय पत्ता' },
    office_addr: { en: 'Ward Office, Dharampeth, Nagpur – 440 010, Maharashtra', mr: 'वार्ड कार्यालय, धरमपेठ, नागपूर – ४४० ०१०, महाराष्ट्र' },
    email_addr:  { en: 'info@jitendrawasnik.com', mr: 'info@jitendrawasnik.com' },
  },
  footer: {
    rights:     { en: 'All rights reserved.',     mr: 'सर्व हक्क राखीव.' },
    quick_links:{ en: 'Quick Links',              mr: 'द्रुत दुवे' },
    connect:    { en: 'Connect with Jitendra',    mr: 'जितेंद्रशी जोडा' },
  },
}
