export interface ServiceItem {
  id: string;
  name: string;
  category: 'eye' | 'skin';
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  isFirstInMathura?: boolean;
  isPopular?: boolean;
  benefits: string[];
}

export interface DoctorInfo {
  name: string;
  title: string;
  qualifications: string;
  institution: string;
  graduationYear: number;
  experienceYears: number;
  specialization: string;
  bio: string;
  image: string;
  placeholderNotice?: string;
}

export interface Testimonial {
  id: string;
  patientName: string;
  serviceReceived: string;
  rating: number;
  comment: string;
  date: string;
  isPlaceholder: boolean;
}

export interface ClinicHoursDay {
  day: string;
  hours: string;
  isClosed?: boolean;
}

export const CLINIC_INFO = {
  name: "Dharm Skin & Eye Centre",
  altName: "Dharm Skin, Hair & Aesthetic Clinic",
  tagline: "Advanced Eye & Skin Care, Trusted in Mathura",
  address: "Shankar Vihar, Krishna Nagar, Mathura, Uttar Pradesh 281004",
  phone: "+91 88816 03338",
  phoneRaw: "+918881603338",
  whatsapp: "https://wa.me/918881603338?text=Hello,%20I%20would%20like%20to%20book%20an%20appointment%20at%20Dharm%20Skin%20%26%20Eye%20Centre.",
  googleMapEmbedUrl: "https://maps.google.com/maps?q=Dharm+skin+and+EYE+centre,+Shankar+Vihar,+Krishna+Nagar,+Mathura,+Uttar+Pradesh+281004&t=&z=16&ie=UTF8&iwloc=&output=embed",
  mapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Dharm+skin+and+EYE+centre+Shankar+Vihar+Krishna+Nagar+Mathura",
  hours: [
    { day: "Monday", hours: "9:00 AM – 6:00 PM" },
    { day: "Tuesday", hours: "9:00 AM – 6:00 PM" },
    { day: "Wednesday", hours: "9:00 AM – 6:00 PM" },
    { day: "Thursday", hours: "Closed", isClosed: true },
    { day: "Friday", hours: "9:00 AM – 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM – 6:00 PM" },
    { day: "Sunday", hours: "8:00 AM – 12:00 PM" }
  ] as ClinicHoursDay[]
};

export const EYE_CARE_SERVICES: ServiceItem[] = [
  {
    id: "perimetry",
    name: "Automated Perimetry Test",
    category: "eye",
    shortDesc: "Advanced computer visual field mapping to detect early glaucoma and nerve health.",
    fullDesc: "Our clinic houses the very first automated perimetry visual field analyzer machine in Mathura. This cutting-edge computerized equipment measures peripheral vision precision to detect glaucoma early before any noticeable vision loss occurs.",
    iconName: "Target",
    isFirstInMathura: true,
    isPopular: true,
    benefits: [
      "First in Mathura: Ultra-accurate visual field mapping",
      "Early glaucoma detection before symptoms appear",
      "Painless computerized vision grid assessment",
      "Essential evaluation for neurological & optic nerve care"
    ]
  },
  {
    id: "cataract-imported",
    name: "Cataract Surgery (Imported Lens)",
    category: "eye",
    shortDesc: "Micro-incision cataract treatment with premium imported (videshi) intraocular lenses.",
    fullDesc: "Restores crystal-clear vision with micro-incision cataract surgery paired with world-class imported (videshi) IOL options. Customized lens selection ensures optimal focal clarity for reading, driving, and daily life.",
    iconName: "Eye",
    isPopular: true,
    benefits: [
      "Premium imported (videshi) lens options",
      "Stitchless micro-incision technology",
      "Fast post-op recovery and sharp distance/near vision",
      "Outpatient procedure with maximum patient comfort"
    ]
  },
  {
    id: "yag-laser",
    name: "YAG Laser (Post-Cataract PCO)",
    category: "eye",
    shortDesc: "Painless laser clearing of posterior capsular opacification after cataract surgery.",
    fullDesc: "If vision becomes hazy months or years after cataract surgery due to posterior capsular opacification (PCO), our YAG laser clears the clouded membrane in minutes without incisions or pain.",
    iconName: "Zap",
    benefits: [
      "Instant restoration of clear vision",
      "In-office painless laser treatment (no hospitalization)",
      "Zero incision procedure",
      "Quick 5 to 10 minute completion"
    ]
  },
  {
    id: "comprehensive-exam",
    name: "Comprehensive Eye Examination",
    category: "eye",
    shortDesc: "Full computerized refractive error, pressure, and slit-lamp diagnostic evaluation.",
    fullDesc: "Thorough eye health assessment using state-of-the-art diagnostic instruments. Checks visual acuity, corneal curvature, intraocular pressure, retinal wellness, and refractive error for precise spectacle prescription.",
    iconName: "Scan",
    benefits: [
      "Latest computerized refractive diagnostic tech",
      "Glaucoma screening & eye pressure measurement",
      "Comprehensive retina & optic nerve check",
      "Precise spectacle & contact lens prescriptions"
    ]
  },
  {
    id: "retina-care",
    name: "Retina Care & Screening",
    category: "eye",
    shortDesc: "Diagnostic screening and management for diabetic retinopathy and macular health.",
    fullDesc: "Specialized retina evaluation designed particularly for patients with diabetes or high blood pressure to safeguard the light-sensitive retinal layer against damage.",
    iconName: "Activity",
    benefits: [
      "Diabetic retinopathy early screening",
      "Macular wellness evaluation",
      "Hypertensive ocular damage check",
      "Preventative vision preservation guidance"
    ]
  },
  {
    id: "glaucoma-treatment",
    name: "Glaucoma Diagnosis & Treatment",
    category: "eye",
    shortDesc: "Ocular hypertension management using perimetry diagnostic tracking and medications.",
    fullDesc: "Comprehensive glaucoma care combining intraocular pressure monitoring, optic disc assessment, and perimetry field testing to stop silent vision loss.",
    iconName: "ShieldAlert",
    benefits: [
      "Perimetry field tracking for early intervention",
      "Targeted eye drop medication management",
      "Ocular pressure stabilization",
      "Long-term visual field preservation"
    ]
  },
  {
    id: "squint-correction",
    name: "Squint Correction",
    category: "eye",
    shortDesc: "Clinical alignment and therapeutic management for ocular muscle imbalance.",
    fullDesc: "Specialized evaluation and treatment for strabismus (squint) in adults and children to realign eye direction, improve depth perception, and enhance binocular vision.",
    iconName: "Sliders",
    benefits: [
      "Detailed extraocular muscle alignment test",
      "Cosmetic and functional alignment solutions",
      "Customized vision therapy & surgical correction",
      "Improves depth perception and eye coordination"
    ]
  },
  {
    id: "lasik-laser",
    name: "LASIK Laser Evaluation",
    category: "eye",
    shortDesc: "Advanced consultation and suitability screening for glass-free laser vision correction.",
    fullDesc: "Precise corneal topography and suitability assessment for patients seeking freedom from glasses and contact lenses through refractive LASIK laser treatment.",
    iconName: "Sparkles",
    benefits: [
      "Corneal mapping & thickness verification",
      "Detailed candidacy evaluation for glass-free vision",
      "Personalized refractive surgery counseling",
      "High-precision laser technology consultation"
    ]
  },
  {
    id: "pterygium-surgery",
    name: "Pterygium Surgery",
    category: "eye",
    shortDesc: "Surgical removal of conjunctival growth over the cornea with graft placement.",
    fullDesc: "Gentle removal of abnormal conjunctival tissue growth (surfer's eye) with autograft placement to minimize recurrence and restore smooth corneal surface.",
    iconName: "Crosshair",
    benefits: [
      "Minimal recurrence autograft surgical technique",
      "Relieves eye redness, irritation, and foreign body feel",
      "Protects visual axis from obstruction",
      "Comfortable local anesthesia procedure"
    ]
  }
];

export const SKIN_CARE_SERVICES: ServiceItem[] = [
  {
    id: "general-dermatology",
    name: "General Dermatology & Skin Care",
    category: "skin",
    shortDesc: "Expert treatment for eczema, psoriasis, allergies, fungal infections, and skin disorders.",
    fullDesc: "Comprehensive diagnosis and clinical management of acute and chronic skin, nail, and scalp conditions tailored by senior dermatologist Dr. Chandan Singh Kushwah.",
    iconName: "Stethoscope",
    benefits: [
      "13+ years clinical experience in Dermatology & VD",
      "Effective treatment for chronic eczema & psoriasis",
      "Allergic reaction & infection management",
      "Customized dermatological prescriptions"
    ]
  },
  {
    id: "hair-aesthetic",
    name: "Hair & Aesthetic Treatments",
    category: "skin",
    shortDesc: "Clinical solutions for hair fall, dandruff, acne scars, pigmentation, and glow therapies.",
    fullDesc: "Targeted aesthetic therapies designed to combat hair thinning, hyperpigmentation, stubborn acne scars, and skin aging under professional dermatological supervision.",
    iconName: "Sparkles",
    benefits: [
      "Hair loss & alopecia clinical treatments",
      "Acne & post-acne scar restoration",
      "Pigmentation & melasma lightening therapy",
      "Medical-grade skin rejuvenation"
    ]
  }
];

export const DOCTOR_CHANDAN: DoctorInfo = {
  name: "Dr. Chandan Singh Kushwah",
  title: "Dermatologist & Skin Specialist",
  qualifications: "MBBS, MD (Skin & VD)",
  institution: "S.N. Medical College (2013)",
  graduationYear: 2013,
  experienceYears: 13,
  specialization: "All skin and allergy diseases treated",
  bio: "Dr. Chandan Singh Kushwah earned his MD in Skin & VD from S.N. Medical College in 2013. With over 13 years of dedicated clinical experience, Dr. Kushwah specializes in treating all types of skin diseases, allergies, fungal conditions, nail disorders, and hair therapies.",
  image: "/images/ChandanSinghKushwah.jpg"
};

export const DOCTOR_ARPITA: DoctorInfo = {
  name: "Dr. Arpita Gupta",
  title: "Eye Specialist & Phaco Surgeon",
  qualifications: "MBBS, MS (Ophthalmology)",
  institution: "Ophthalmology Specialist",
  graduationYear: 2015,
  experienceYears: 10,
  specialization: "Cataract (Phaco Surgery with Imported Lenses), Perimetry & Comprehensive Eye Care",
  bio: "Dr. Arpita Gupta is a renowned Eye Specialist & Phaco Surgeon expert in micro-incision cataract surgery, imported intraocular lens implants, automated perimetry field testing, YAG laser treatments, glaucoma management, and pediatric squint correction.",
  image: "/images/arpita-gupta.jpg"
};

export const DOCTORS_LIST: DoctorInfo[] = [DOCTOR_ARPITA, DOCTOR_CHANDAN];


export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    patientName: "Rajesh Sharma",
    serviceReceived: "Perimetry & Glaucoma Screening",
    rating: 5,
    comment: "I was looking for a perimetry test in Mathura and found out Dharm Skin & Eye Centre has the first new machine here. The visual field test was quick, smooth, and the doctor explained everything clearly.",
    date: "June 2026",
    isPlaceholder: true
  },
  {
    id: "t2",
    patientName: "Sunita Verma",
    serviceReceived: "Cataract Surgery (Imported Lens)",
    rating: 5,
    comment: "My mother got her cataract operation done here with imported lenses. The doctor and nursing care were extremely reassuring, and her vision is now crystal clear!",
    date: "May 2026",
    isPlaceholder: true
  },
  {
    id: "t3",
    patientName: "Amit Agarwal",
    serviceReceived: "General Dermatology & Hair Therapy",
    rating: 5,
    comment: "Dr. Chandan Kushwah listened to my skin allergy problem with great patience. Within a week of treatment, my skin improved completely. Highly recommended in Krishna Nagar!",
    date: "July 2026",
    isPlaceholder: true
  }
];

export const WHY_CHOOSE_US = [
  {
    id: "w1",
    title: "First Perimetry Machine in Mathura",
    description: "Equipped with Mathura's first advanced computerized perimetry machine for early glaucoma and vision field diagnostics.",
    icon: "Award"
  },
  {
    id: "w2",
    title: "Imported (Videshi) Lens Options",
    description: "Premium imported intraocular lenses for micro-incision cataract surgery to ensure optimal long-term visual clarity.",
    icon: "Sparkles"
  },
  {
    id: "w3",
    title: "13+ Years Expert Experience",
    description: "Led by Dr. Chandan Singh Kushwah (MD Skin & VD, S.N. Medical College 2013) with over 13 years of trusted clinical care.",
    icon: "ShieldCheck"
  },
  {
    id: "w4",
    title: "Dual Eye & Skin Specialty",
    description: "Integrated facility providing comprehensive ophthalmology diagnostics and dermatology treatments under one roof.",
    icon: "Cpu"
  }
];
