// Universta Prototype Data & Lookups
// Compatible with both local UI prototypes and backend SQLAlchemy/Directus schema models

export const levels = [
  { id: 'foundation', name: 'Foundation', long: 'Foundation year', dur: '1 year', for: 'Students who need an extra year to meet entry requirements for a bachelor’s degree.' },
  { id: 'diploma', name: 'Diploma', long: 'Diploma & certificate', dur: '1–2 years', for: 'Practical, career-focused study — often a pathway into the second year of a degree.' },
  { id: 'bachelors', name: 'Bachelor’s', long: 'Bachelor’s degree', dur: '3–4 years', for: 'Your first university degree, after finishing secondary school.' },
  { id: 'masters', name: 'Master’s', long: 'Master’s degree', dur: '1–2 years', for: 'Specialist or career-change study after a bachelor’s degree.' },
  { id: 'phd', name: 'PhD', long: 'PhD / Doctorate', dur: '3–5 years', for: 'Original research under a supervisor, usually after a master’s degree.' }
];

export const countries = [
  {
    id: 'united-kingdom', code: 'UK', name: 'United Kingdom', region: 'Europe', capital: 'London', currency: 'GBP (£)', lang: 'English', intakes: ['September', 'January'],
    visa: 'Student visa', psw: 'Graduate Route', keyDoc: 'CAS (Confirmation of Acceptance for Studies)',
    docs: ['CAS from your university', 'Valid passport', 'Proof of funds held for the required period', 'English test result (if required by your university)', 'Tuberculosis test (for some countries)', 'ATAS certificate (for some science subjects)'],
    why: ['Many master’s degrees take one year, so total cost and time are lower.', 'Over a hundred universities, from historic to modern and specialist.', 'Graduate Route lets you stay and work after you finish.'],
    tags: ['1-year master’s', 'Post-study work']
  },
  {
    id: 'united-states', code: 'US', name: 'United States', region: 'North America', capital: 'Washington, D.C.', currency: 'USD ($)', lang: 'English', intakes: ['Fall (Aug–Sep)', 'Spring (Jan)'],
    visa: 'F-1 student visa', psw: 'OPT (Optional Practical Training)', keyDoc: 'Form I-20',
    docs: ['Form I-20 from your university', 'SEVIS I-901 fee receipt', 'DS-160 confirmation page', 'Valid passport', 'Proof of funds for the first year', 'Visa interview appointment'],
    why: ['The widest choice of universities and flexible majors.', 'STEM graduates may be eligible for an OPT extension.', 'Large research budgets and campus life.'],
    tags: ['Flexible majors', 'STEM OPT']
  },
  {
    id: 'canada', code: 'CA', name: 'Canada', region: 'North America', capital: 'Ottawa', currency: 'CAD ($)', lang: 'English & French', intakes: ['September', 'January', 'May'],
    visa: 'Study permit', psw: 'PGWP (Post-Graduation Work Permit)', keyDoc: 'Letter of acceptance from a DLI',
    docs: ['Letter of acceptance from a designated learning institution (DLI)', 'Provincial or territorial attestation letter (PAL/TAL), if required', 'Proof of funds (a GIC is one accepted option)', 'Valid passport', 'Biometrics', 'Medical exam (if required)'],
    why: ['Three intakes a year for many programmes.', 'Colleges and universities, both with clear pathways.', 'Post-graduation work permit for eligible graduates.'],
    tags: ['3 intakes', 'Colleges + universities']
  },
  {
    id: 'australia', code: 'AU', name: 'Australia', region: 'Oceania', capital: 'Canberra', currency: 'AUD ($)', lang: 'English', intakes: ['February', 'July'],
    visa: 'Student visa (subclass 500)', psw: 'Temporary Graduate visa (subclass 485)', keyDoc: 'CoE (Confirmation of Enrolment)',
    docs: ['CoE from your provider', 'Genuine Student (GS) statement', 'Overseas Student Health Cover (OSHC)', 'Proof of funds', 'English test result', 'Valid passport'],
    why: ['Two main intakes and many vocational pathways.', 'Part-time work rights during study.', 'Temporary Graduate visa after you finish.'],
    tags: ['Work while studying', 'Feb & Jul intakes']
  },
  {
    id: 'germany', code: 'DE', name: 'Germany', region: 'Europe', capital: 'Berlin', currency: 'EUR (€)', lang: 'German & English', intakes: ['Winter (Oct)', 'Summer (Apr)'],
    visa: 'National visa for study', psw: '18-month job-seeker residence permit', keyDoc: 'Admission letter',
    docs: ['Admission letter from a German university', 'Blocked account (Sperrkonto) or other proof of funds', 'Health insurance', 'Academic certificates', 'Language certificate (German or English)', 'Valid passport'],
    why: ['Most public universities charge low or no tuition fees.', 'Strong engineering and applied science programmes.', 'A growing number of English-taught master’s degrees.'],
    tags: ['Low tuition', 'Engineering']
  },
  {
    id: 'ireland', code: 'IE', name: 'Ireland', region: 'Europe', capital: 'Dublin', currency: 'EUR (€)', lang: 'English', intakes: ['September', 'January'],
    visa: 'Study visa (D)', psw: 'Stamp 1G', keyDoc: 'Letter of acceptance',
    docs: ['Letter of acceptance from your college', 'Proof of fees paid', 'Proof of funds', 'Private medical insurance', 'English test result', 'Valid passport'],
    why: ['English-speaking and inside the EU.', 'Home to European offices of many tech and pharma companies.', 'Stamp 1G lets eligible graduates stay to work.'],
    tags: ['English in the EU', 'Tech hub']
  },
  {
    id: 'france', code: 'FR', name: 'France', region: 'Europe', capital: 'Paris', currency: 'EUR (€)', lang: 'French & English', intakes: ['September', 'January'],
    visa: 'Long-stay student visa (VLS-TS)', psw: 'Post-study residence permit (APS)', keyDoc: 'Campus France approval (in many countries)',
    docs: ['Acceptance letter', 'Campus France procedure (where it applies)', 'Proof of funds', 'Proof of accommodation', 'Valid passport'],
    why: ['World-famous business and design schools.', 'Public universities with moderate fees.', 'Learn French while you study.'],
    tags: ['Business schools', 'Culture']
  },
  {
    id: 'new-zealand', code: 'NZ', name: 'New Zealand', region: 'Oceania', capital: 'Wellington', currency: 'NZD ($)', lang: 'English', intakes: ['February', 'July'],
    visa: 'Fee Paying Student Visa', psw: 'Post-study work visa', keyDoc: 'Offer of place',
    docs: ['Offer of place', 'Proof of tuition fees paid', 'Proof of funds for living costs', 'Medical and character certificates', 'Valid passport'],
    why: ['Small classes and a calm, safe lifestyle.', 'All universities in global rankings.', 'Post-study work visa for eligible graduates.'],
    tags: ['Safe & calm', 'Small classes']
  },
  {
    id: 'netherlands', code: 'NL', name: 'Netherlands', region: 'Europe', capital: 'Amsterdam', currency: 'EUR (€)', lang: 'Dutch & English', intakes: ['September', 'February'],
    visa: 'Residence permit for study', psw: 'Orientation year (zoekjaar)', keyDoc: 'University sponsorship (it applies to the IND for you)',
    docs: ['Admission to a recognised institution', 'Proof of funds', 'Valid passport', 'Entry visa (MVV), if required for your nationality'],
    why: ['Hundreds of English-taught programmes.', 'Practical, group-based teaching style.', 'Orientation year to look for work after graduating.'],
    tags: ['English-taught', 'Practical learning']
  },
  {
    id: 'japan', code: 'JP', name: 'Japan', region: 'Asia', capital: 'Tokyo', currency: 'JPY (¥)', lang: 'Japanese & English', intakes: ['April', 'October'],
    visa: 'Student visa (Ryugaku)', psw: 'Designated Activities (job-hunting)', keyDoc: 'Certificate of Eligibility (COE)',
    docs: ['Certificate of Eligibility (COE)', 'Admission letter', 'Proof of funds', 'Valid passport', 'Visa application form and photo'],
    why: ['Leading universities in science and engineering.', 'Growing number of English-taught degrees.', 'Government (MEXT) scholarships for international students.'],
    tags: ['Science & tech', 'MEXT scholarships']
  }
];

export const subjects = [
  { id: 'computer-science', name: 'Computer Science & IT', icon: 'code', desc: 'Software, AI, data and the systems that run the modern world.', specs: ['artificial-intelligence', 'data-science', 'cyber-security', 'software-engineering'], careers: ['Software engineer', 'Data scientist', 'Machine learning engineer', 'Security analyst', 'Product manager'] },
  { id: 'business', name: 'Business & Management', icon: 'briefcase', desc: 'How organisations work — strategy, money, people and markets.', specs: ['finance', 'marketing', 'business-analytics', 'international-business'], careers: ['Business analyst', 'Consultant', 'Financial analyst', 'Marketing manager', 'Operations manager'] },
  { id: 'engineering', name: 'Engineering', icon: 'cog', desc: 'Design and build the machines, structures and energy systems we rely on.', specs: ['mechanical-engineering', 'civil-engineering', 'electrical-engineering', 'robotics'], careers: ['Design engineer', 'Project engineer', 'Site engineer', 'Energy engineer', 'Robotics engineer'] },
  { id: 'health', name: 'Health & Medicine', icon: 'heart', desc: 'Care for people and communities — nursing, public health and more.', specs: ['nursing', 'public-health', 'pharmacy'], careers: ['Registered nurse', 'Public health officer', 'Pharmacist', 'Health data analyst', 'Clinical researcher'] },
  { id: 'law', name: 'Law', icon: 'scale', desc: 'Understand legal systems and learn to argue, advise and protect.', specs: ['international-law', 'corporate-law'], careers: ['Lawyer', 'Legal adviser', 'Compliance officer', 'Policy analyst'] },
  { id: 'arts-design', name: 'Arts, Design & Architecture', icon: 'pen', desc: 'Create spaces, products and experiences people love to use.', specs: ['architecture', 'ux-design'], careers: ['Architect', 'UX designer', 'Product designer', 'Urban planner'] },
  { id: 'social-sciences', name: 'Social Sciences', icon: 'users', desc: 'Study how people think, behave and govern themselves.', specs: ['psychology', 'economics', 'international-relations'], careers: ['Psychologist', 'Economist', 'Policy researcher', 'Diplomat'] },
  { id: 'natural-sciences', name: 'Natural Sciences', icon: 'flask', desc: 'Biology, chemistry, physics and the environment — science at its core.', specs: ['biotechnology', 'environmental-science'], careers: ['Research scientist', 'Lab manager', 'Environmental consultant', 'Biotech analyst'] },
  { id: 'hospitality', name: 'Hospitality & Tourism', icon: 'plane', desc: 'Run hotels, events and travel experiences around the world.', specs: ['hotel-management', 'tourism-management'], careers: ['Hotel manager', 'Events manager', 'Revenue manager', 'Tourism officer'] },
  { id: 'media', name: 'Media & Communication', icon: 'message', desc: 'Tell stories that matter — across news, film and digital media.', specs: ['journalism', 'digital-media'], careers: ['Journalist', 'Content strategist', 'PR manager', 'Producer'] }
];

export const specs = {
  'artificial-intelligence': { name: 'Artificial Intelligence', subject: 'computer-science', mods: ['Machine learning', 'Deep learning', 'Natural language processing', 'AI ethics'] },
  'data-science': { name: 'Data Science', subject: 'computer-science', mods: ['Statistics for data science', 'Machine learning', 'Data visualisation', 'Big data systems'] },
  'cyber-security': { name: 'Cyber Security', subject: 'computer-science', mods: ['Network security', 'Cryptography', 'Ethical hacking', 'Security governance'] },
  'software-engineering': { name: 'Software Engineering', subject: 'computer-science', mods: ['Software architecture', 'Cloud computing', 'Testing & DevOps', 'Team project'] },
  'finance': { name: 'Finance', subject: 'business', mods: ['Corporate finance', 'Investment analysis', 'Financial markets', 'Risk management'] },
  'marketing': { name: 'Marketing', subject: 'business', mods: ['Consumer behaviour', 'Digital marketing', 'Brand management', 'Marketing analytics'] },
  'business-analytics': { name: 'Business Analytics', subject: 'business', mods: ['Data for decisions', 'Predictive analytics', 'Operations research', 'Python and SQL'] },
  'international-business': { name: 'International Business', subject: 'business', mods: ['Global strategy', 'Cross-cultural management', 'International trade', 'Supply chains'] },
  'mechanical-engineering': { name: 'Mechanical Engineering', subject: 'engineering', mods: ['Thermodynamics', 'Solid mechanics', 'Computer-aided design', 'Manufacturing systems'] },
  'civil-engineering': { name: 'Civil Engineering', subject: 'engineering', mods: ['Structural analysis', 'Geotechnics', 'Transport engineering', 'Construction management'] },
  'electrical-engineering': { name: 'Electrical Engineering', subject: 'engineering', mods: ['Circuits and systems', 'Power engineering', 'Signal processing', 'Embedded systems'] },
  'robotics': { name: 'Robotics', subject: 'engineering', mods: ['Kinematics', 'Control systems', 'Computer vision', 'Autonomous systems'] },
  'nursing': { name: 'Nursing', subject: 'health', mods: ['Foundations of nursing', 'Anatomy and physiology', 'Clinical placements', 'Mental health nursing'] },
  'public-health': { name: 'Public Health', subject: 'health', mods: ['Epidemiology', 'Biostatistics', 'Health policy', 'Global health'] },
  'pharmacy': { name: 'Pharmacy', subject: 'health', mods: ['Pharmacology', 'Pharmaceutical chemistry', 'Clinical pharmacy', 'Pharmacy law'] },
  'international-law': { name: 'International Law', subject: 'law', mods: ['Public international law', 'Human rights law', 'International trade law', 'Dispute resolution'] },
  'corporate-law': { name: 'Corporate Law', subject: 'law', mods: ['Company law', 'Mergers and acquisitions', 'Financial regulation', 'Contract law'] },
  'architecture': { name: 'Architecture', subject: 'arts-design', mods: ['Design studio', 'Building technology', 'History and theory', 'Sustainable design'] },
  'ux-design': { name: 'UX Design', subject: 'arts-design', mods: ['User research', 'Interaction design', 'Prototyping', 'Usability testing'] },
  'psychology': { name: 'Psychology', subject: 'social-sciences', mods: ['Cognitive psychology', 'Research methods', 'Developmental psychology', 'Clinical psychology'] },
  'economics': { name: 'Economics', subject: 'social-sciences', mods: ['Microeconomics', 'Macroeconomics', 'Econometrics', 'Development economics'] },
  'international-relations': { name: 'International Relations', subject: 'social-sciences', mods: ['Global politics', 'Security studies', 'Diplomacy', 'International organisations'] },
  'biotechnology': { name: 'Biotechnology', subject: 'natural-sciences', mods: ['Molecular biology', 'Genetic engineering', 'Bioprocessing', 'Bioinformatics'] },
  'environmental-science': { name: 'Environmental Science', subject: 'natural-sciences', mods: ['Climate science', 'Ecology', 'Environmental policy', 'GIS and remote sensing'] },
  'hotel-management': { name: 'Hotel Management', subject: 'hospitality', mods: ['Hotel operations', 'Revenue management', 'Food and beverage', 'Guest experience'] },
  'tourism-management': { name: 'Tourism Management', subject: 'hospitality', mods: ['Destination marketing', 'Sustainable tourism', 'Events management', 'Travel economics'] },
  'journalism': { name: 'Journalism', subject: 'media', mods: ['News reporting', 'Media law and ethics', 'Data journalism', 'Multimedia storytelling'] },
  'digital-media': { name: 'Digital Media', subject: 'media', mods: ['Content strategy', 'Video production', 'Social media analytics', 'Audience research'] }
};

export const courses = [
  { id: 'data-science', name: 'Data Science', subject: 'computer-science', levels: ['bachelors', 'masters', 'phd'], desc: 'Turn raw data into decisions using statistics, programming and machine learning.' },
  { id: 'computer-science', name: 'Computer Science', subject: 'computer-science', levels: ['bachelors', 'masters', 'phd'], desc: 'The theory and practice of computing — algorithms, systems and software.' },
  { id: 'artificial-intelligence', name: 'Artificial Intelligence', subject: 'computer-science', levels: ['masters', 'phd'], desc: 'Build systems that learn, reason and understand language and images.' },
  { id: 'business-analytics', name: 'Business Analytics', subject: 'business', levels: ['masters'], desc: 'Use data to solve real business problems in finance, marketing and operations.' },
  { id: 'mba', name: 'MBA', subject: 'business', levels: ['masters'], desc: 'A general management degree for professionals with work experience.' },
  { id: 'finance', name: 'Finance', subject: 'business', levels: ['bachelors', 'masters'], desc: 'Markets, investment and corporate finance — with strong quantitative skills.' },
  { id: 'mechanical-engineering', name: 'Mechanical Engineering', subject: 'engineering', levels: ['bachelors', 'masters', 'phd'], desc: 'Design machines, energy systems and products from concept to manufacture.' },
  { id: 'nursing', name: 'Nursing', subject: 'health', levels: ['bachelors', 'masters'], desc: 'Clinical training and placements to become a registered nurse.' },
  { id: 'public-health', name: 'Public Health', subject: 'health', levels: ['masters', 'phd'], desc: 'Protect and improve the health of whole populations.' },
  { id: 'psychology', name: 'Psychology', subject: 'social-sciences', levels: ['bachelors', 'masters', 'phd'], desc: 'The science of the mind and behaviour, from research to practice.' },
  { id: 'architecture', name: 'Architecture', subject: 'arts-design', levels: ['bachelors', 'masters'], desc: 'Design buildings and places through studio projects and technical study.' },
  { id: 'law', name: 'Law (LLM)', subject: 'law', levels: ['masters'], desc: 'Specialise in an area of law after a first law degree.' }
];

export const universities = [
  { id: 'university-of-toronto', name: 'University of Toronto', code: 'UT', country: 'canada', city: 'Toronto', type: 'Public', founded: 1827, courses: ['data-science', 'computer-science', 'mba', 'public-health'] },
  { id: 'university-of-british-columbia', name: 'University of British Columbia', code: 'UBC', country: 'canada', city: 'Vancouver', type: 'Public', founded: 1908, courses: ['computer-science', 'business-analytics', 'nursing', 'psychology'] },
  { id: 'university-of-melbourne', name: 'The University of Melbourne', code: 'UoM', country: 'australia', city: 'Melbourne', type: 'Public', founded: 1853, courses: ['data-science', 'architecture', 'public-health', 'law'] },
  { id: 'monash-university', name: 'Monash University', code: 'MU', country: 'australia', city: 'Melbourne', type: 'Public', founded: 1958, courses: ['artificial-intelligence', 'nursing', 'finance', 'mechanical-engineering'] },
  { id: 'university-of-manchester', name: 'The University of Manchester', code: 'UoM', country: 'united-kingdom', city: 'Manchester', type: 'Public', founded: 1824, courses: ['data-science', 'mechanical-engineering', 'finance', 'psychology'] },
  { id: 'kings-college-london', name: 'King’s College London', code: 'KCL', country: 'united-kingdom', city: 'London', type: 'Public', founded: 1829, courses: ['artificial-intelligence', 'law', 'public-health', 'nursing'] },
  { id: 'technical-university-of-munich', name: 'Technical University of Munich', code: 'TUM', country: 'germany', city: 'Munich', type: 'Public', founded: 1868, courses: ['mechanical-engineering', 'data-science', 'computer-science', 'mba'] },
  { id: 'arizona-state-university', name: 'Arizona State University', code: 'ASU', country: 'united-states', city: 'Tempe', type: 'Public', founded: 1885, courses: ['computer-science', 'business-analytics', 'mechanical-engineering', 'psychology'] },
  { id: 'northeastern-university', name: 'Northeastern University', code: 'NU', country: 'united-states', city: 'Boston', type: 'Private', founded: 1898, courses: ['data-science', 'artificial-intelligence', 'mba', 'nursing'] },
  { id: 'trinity-college-dublin', name: 'Trinity College Dublin', code: 'TCD', country: 'ireland', city: 'Dublin', type: 'Public', founded: 1592, courses: ['computer-science', 'finance', 'law', 'psychology'] },
  { id: 'university-of-auckland', name: 'University of Auckland', code: 'UoA', country: 'new-zealand', city: 'Auckland', type: 'Public', founded: 1883, courses: ['architecture', 'business-analytics', 'nursing', 'data-science'] },
  { id: 'tu-delft', name: 'Delft University of Technology', code: 'TUD', country: 'netherlands', city: 'Delft', type: 'Public', founded: 1842, courses: ['mechanical-engineering', 'architecture', 'computer-science', 'artificial-intelligence'] }
];

export const scholarships = [
  {
    id: 'chevening', name: 'Chevening Scholarships', provider: 'UK Government (FCDO)', country: 'united-kingdom', type: 'Government', funding: 'Fully funded', levels: ['masters'],
    covers: ['University tuition fees', 'Monthly living allowance', 'Return economy travel to the UK', 'Visa application cost'],
    elig: ['Citizen of a Chevening-eligible country or territory', 'Undergraduate degree that gets you into a UK master’s', 'At least two years of work experience', 'Agree to return to your home country for at least two years after the award'],
    desc: 'The UK government’s global scholarship for future leaders — a one-year master’s at any UK university.'
  },
  {
    id: 'fulbright', name: 'Fulbright Foreign Student Program', provider: 'U.S. Department of State', country: 'united-states', type: 'Government', funding: 'Fully funded', levels: ['masters', 'phd'],
    covers: ['Tuition', 'Living stipend', 'Airfare', 'Health insurance'],
    elig: ['Apply through the Fulbright Commission or U.S. Embassy in your country', 'Strong academic record', 'Clear study or research plan', 'Rules vary by country — check your local commission'],
    desc: 'Graduate study and research in the U.S., run by binational commissions and U.S. embassies in over 150 countries.'
  },
  {
    id: 'daad', name: 'DAAD Scholarships', provider: 'German Academic Exchange Service', country: 'germany', type: 'Government', funding: 'Full or partial', levels: ['masters', 'phd'],
    covers: ['Monthly stipend', 'Health insurance', 'Travel allowance', 'Rent subsidy (some programmes)'],
    elig: ['Bachelor’s degree (for master’s) or master’s (for PhD)', 'Programme-specific work experience rules', 'Language skills for your chosen programme'],
    desc: 'Germany’s largest scholarship provider, with programmes for master’s, PhD and research stays.'
  },
  {
    id: 'erasmus-mundus', name: 'Erasmus Mundus Joint Masters', provider: 'European Commission', country: 'multiple', type: 'Government', funding: 'Fully funded', levels: ['masters'],
    covers: ['Participation (tuition) costs', 'Monthly living allowance', 'Travel and installation costs'],
    elig: ['Bachelor’s degree or equivalent', 'Apply directly to the joint master’s consortium', 'Open to students from any country'],
    desc: 'Study one master’s in two or more European countries, with a joint or multiple degree.'
  },
  {
    id: 'australia-awards', name: 'Australia Awards Scholarships', provider: 'Australian Government (DFAT)', country: 'australia', type: 'Government', funding: 'Fully funded', levels: ['masters', 'phd'],
    covers: ['Full tuition fees', 'Return air travel', 'Establishment allowance', 'Contribution to living expenses', 'Overseas Student Health Cover'],
    elig: ['Citizen of a participating country', 'Not a citizen or permanent resident of Australia', 'Meet the host university’s admission requirements'],
    desc: 'Long-term development awards for students from participating countries in Asia, the Pacific and Africa.'
  },
  {
    id: 'commonwealth', name: 'Commonwealth Master’s Scholarships', provider: 'Commonwealth Scholarship Commission', country: 'united-kingdom', type: 'Government', funding: 'Fully funded', levels: ['masters', 'phd'],
    covers: ['Tuition fees', 'Stipend', 'Return airfare', 'Thesis grant (where applicable)'],
    elig: ['Citizen of an eligible Commonwealth country', 'First degree at upper second-class (2:1) or equivalent', 'Cannot afford to study in the UK without this scholarship'],
    desc: 'For talented students from low and middle income Commonwealth countries.'
  },
  {
    id: 'government-of-ireland', name: 'Government of Ireland International Education Scholarship', provider: 'Higher Education Authority', country: 'ireland', type: 'Government', funding: 'Partial', levels: ['masters', 'phd'],
    covers: ['Full tuition fee waiver', 'One-year stipend'],
    elig: ['Non-EU/EEA student', 'Offer from an eligible Irish higher education institution', 'Strong academic record'],
    desc: 'One-year scholarships for high-calibre international students at Irish universities.'
  },
  {
    id: 'lester-b-pearson', name: 'Lester B. Pearson International Scholarship', provider: 'University of Toronto', country: 'canada', type: 'University', funding: 'Fully funded', levels: ['bachelors'], uni: 'university-of-toronto',
    covers: ['Tuition', 'Books', 'Incidental fees', 'Full residence support for four years'],
    elig: ['International student finishing secondary school', 'Nominated by your school', 'Exceptional academic achievement and creativity', 'Leadership in your school or community'],
    desc: 'University of Toronto’s most prestigious award for international undergraduates.'
  },
  {
    id: 'international-leader-of-tomorrow', name: 'International Leader of Tomorrow Award', provider: 'University of British Columbia', country: 'canada', type: 'University', funding: 'Need-based', levels: ['bachelors'], uni: 'university-of-british-columbia',
    covers: ['Tuition and living costs, based on financial need'],
    elig: ['International student entering a first undergraduate degree', 'Superior academic achievement', 'Leadership and community involvement', 'Demonstrated financial need'],
    desc: 'Need-based award for outstanding international students entering UBC.'
  },
  {
    id: 'melbourne-graduate-research', name: 'Graduate Research Scholarships', provider: 'The University of Melbourne', country: 'australia', type: 'University', funding: 'Fully funded', levels: ['phd'], uni: 'university-of-melbourne',
    covers: ['Full fee offset', 'Living allowance', 'Relocation grant', 'Health cover'],
    elig: ['Admission to a graduate research degree', 'Strong research record', 'Competitive ranking within your faculty'],
    desc: 'Funding for domestic and international research students at Melbourne.'
  },
  {
    id: 'deutschlandstipendium', name: 'Deutschlandstipendium', provider: 'German universities & private sponsors', country: 'germany', type: 'University', funding: 'Partial', levels: ['bachelors', 'masters'], uni: 'technical-university-of-munich',
    covers: ['Monthly stipend, regardless of nationality or income'],
    elig: ['Enrolled at a participating German university', 'Excellent academic performance', 'Social commitment counts too'],
    desc: 'A merit stipend co-funded by the federal government and private sponsors.'
  }
];

export const exams = [
  { id: 'ielts', name: 'IELTS', full: 'International English Language Testing System', type: 'English proficiency', range: '0–9 band', parts: ['Listening', 'Reading', 'Writing', 'Speaking'], accepted: 'UK, Australia, Canada, New Zealand, Ireland and most English-taught programmes', mode: 'Paper or computer, at a test centre; IELTS Online in some countries' },
  { id: 'toefl', name: 'TOEFL iBT', full: 'Test of English as a Foreign Language', type: 'English proficiency', range: '[SCORE SCALE]', parts: ['Reading', 'Listening', 'Writing', 'Speaking'], accepted: 'United States, Canada and universities worldwide', mode: 'Test centre or at home' },
  { id: 'pte', name: 'PTE Academic', full: 'Pearson Test of English Academic', type: 'English proficiency', range: '10–90', parts: ['Speaking & Writing', 'Reading', 'Listening'], accepted: 'Australia, New Zealand, UK, Canada and many universities worldwide', mode: 'Computer-based, at a test centre' },
  { id: 'duolingo', name: 'Duolingo English Test', full: 'Duolingo English Test', type: 'English proficiency', range: '10–160', parts: ['Literacy', 'Comprehension', 'Conversation', 'Production'], accepted: 'Thousands of universities — check each programme', mode: 'Online, at home' },
  { id: 'gre', name: 'GRE General Test', full: 'Graduate Record Examinations', type: 'Graduate admission', range: '260–340', parts: ['Verbal Reasoning', 'Quantitative Reasoning', 'Analytical Writing'], accepted: 'Graduate programmes, mostly in the United States', mode: 'Test centre or at home' },
  { id: 'gmat', name: 'GMAT Focus Edition', full: 'Graduate Management Admission Test', type: 'Graduate admission', range: '205–805', parts: ['Quantitative Reasoning', 'Verbal Reasoning', 'Data Insights'], accepted: 'MBA and business master’s programmes worldwide', mode: 'Test centre or online' },
  { id: 'sat', name: 'SAT', full: 'SAT', type: 'Undergraduate admission', range: '400–1600', parts: ['Reading and Writing', 'Math'], accepted: 'Undergraduate admission, mostly in the United States', mode: 'Digital, at a test centre' }
];

export const coaching = [
  { id: 'institute-lagos', city: 'Lagos', country: 'Nigeria', exams: ['ielts', 'toefl', 'duolingo'], mode: 'In-person & online', tag: 'English tests' },
  { id: 'institute-hanoi', city: 'Hanoi', country: 'Vietnam', exams: ['ielts', 'sat'], mode: 'In-person', tag: 'English & SAT' },
  { id: 'institute-delhi', city: 'New Delhi', country: 'India', exams: ['gre', 'gmat', 'ielts'], mode: 'In-person & online', tag: 'GRE & GMAT' },
  { id: 'institute-lima', city: 'Lima', country: 'Peru', exams: ['toefl', 'duolingo'], mode: 'Online', tag: 'English tests' },
  { id: 'institute-dhaka', city: 'Dhaka', country: 'Bangladesh', exams: ['ielts', 'pte'], mode: 'In-person', tag: 'IELTS & PTE' },
  { id: 'institute-online', city: 'Online', country: 'Worldwide', exams: ['gre', 'gmat', 'sat', 'toefl'], mode: 'Online', tag: 'Admission tests' }
];

export const consultants = [
  { id: 'consultant-nairobi', city: 'Nairobi', country: 'Kenya', dest: ['united-kingdom', 'canada', 'australia'], services: ['Course shortlisting', 'Applications', 'Visa guidance'], mode: 'In-person & online' },
  { id: 'consultant-kathmandu', city: 'Kathmandu', country: 'Nepal', dest: ['australia', 'new-zealand', 'united-kingdom'], services: ['Applications', 'Visa guidance', 'Pre-departure'], mode: 'In-person' },
  { id: 'consultant-manila', city: 'Manila', country: 'Philippines', dest: ['canada', 'australia', 'ireland'], services: ['Course shortlisting', 'Scholarships', 'Visa guidance'], mode: 'Online' },
  { id: 'consultant-mumbai', city: 'Mumbai', country: 'India', dest: ['united-states', 'germany', 'united-kingdom'], services: ['SOP review', 'Applications', 'Education loans'], mode: 'In-person & online' },
  { id: 'consultant-hcmc', city: 'Ho Chi Minh City', country: 'Vietnam', dest: ['australia', 'japan', 'united-states'], services: ['Course shortlisting', 'Applications', 'Accommodation'], mode: 'In-person' },
  { id: 'consultant-bogota', city: 'Bogotá', country: 'Colombia', dest: ['canada', 'ireland', 'france'], services: ['Scholarships', 'Applications', 'Visa guidance'], mode: 'Online' }
];

export const guides = [
  { tag: 'Costs', title: 'What a year in Berlin really costs' },
  { tag: 'Applications', title: 'Your SOP is your story, not a CV' },
  { tag: 'Visas', title: 'Student visa refusals: the five common reasons' },
  { tag: 'Scholarships', title: 'Fully funded scholarships you can apply for this month' }
];

// Lookups
export const getCountry = (id) => countries.find((c) => c.id === id);
export const getSubject = (id) => subjects.find((s) => s.id === id);
export const getLevel = (id) => levels.find((l) => l.id === id);
export const getCourse = (id) => courses.find((c) => c.id === id);
export const getUniversity = (id) => universities.find((u) => u.id === id);
export const getScholarship = (id) => scholarships.find((s) => s.id === id);
export const getExam = (id) => exams.find((e) => e.id === id);

export const getProgrammeTitle = (courseId, levelId, countryId) => {
  const c = getCourse(courseId);
  if (courseId === 'mba') return 'MBA';
  if (courseId === 'law') return 'LLM';
  if (courseId === 'public-health' && levelId === 'masters') return 'Master of Public Health (MPH)';
  if (courseId === 'architecture' && levelId === 'masters') return 'Master of Architecture';
  if (levelId === 'phd') return `PhD ${c ? c.name : ''}`;
  if (levelId === 'bachelors') return (courseId === 'psychology' ? 'BA ' : 'BSc ') + (c ? c.name : '');
  return (countryId === 'united-states' ? 'MS ' : 'MSc ') + (c ? c.name : '');
};

export const programmes = [];
universities.forEach((u) => {
  u.courses.forEach((cid) => {
    const c = getCourse(cid);
    if (!c) return;
    let lvl = c.levels.includes('masters') ? 'masters' : c.levels[0];
    if (cid === 'nursing') lvl = 'bachelors';
    const cObj = getCountry(u.country);
    programmes.push({
      id: `${cid}-${lvl}`,
      uni: u.id,
      course: cid,
      level: lvl,
      country: u.country,
      title: getProgrammeTitle(cid, lvl, u.country),
      dur: lvl === 'bachelors' ? (u.country === 'united-kingdom' ? '3 years' : '4 years') : (u.country === 'united-kingdom' ? '1 year' : '2 years'),
      intake: cObj ? cObj.intakes[0] : 'September'
    });
  });
});

export const programmesFor = (filter) => {
  return programmes.filter((p) => {
    return Object.keys(filter).every((k) => p[k] === filter[k]);
  });
};

