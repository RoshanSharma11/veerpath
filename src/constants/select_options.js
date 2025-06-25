export const EDUCATION_OPTIONS = [
  { value: '10th_pass', label: '10th Pass' },
  { value: '12th_pass', label: '12th Pass' },
  { value: 'diploma', label: 'Diploma' },
  { value: 'undergraduate', label: 'Undergraduate' },
  { value: 'postgraduate', label: 'Postgraduate' },
  { value: 'phd', label: 'Doctorate / PhD' },
  { value: 'certification_course', label: 'Certification Course' },
  { value: 'vocational_training', label: 'Vocational Training' },
  { value: 'iti', label: 'ITI (Industrial Training Institute)' },
  { value: 'professional_degree', label: 'Professional Degree (e.g. MBBS, LLB)' },
  { value: 'associate_degree', label: 'Associate Degree' },
  { value: 'none', label: 'No Formal Education' }
];

export const SEX_OPTIONS = [{value: "male", label: "Male"}, {value: "female", label: "Female"}, {value: "others", label: "Others"}]

export const SKILLS_OPTIONS = [
  // IT & Software Development
  { value: 'javascript', label: 'JavaScript' },
  { value: 'python', label: 'Python' },
  { value: 'java', label: 'Java' },
  { value: 'c++', label: 'C++' },
  { value: 'react', label: 'React' },
  { value: 'nodejs', label: 'Node.js' },
  { value: 'angular', label: 'Angular' },
  { value: 'html_css', label: 'HTML & CSS' },
  { value: 'sql', label: 'SQL' },
  { value: 'mongodb', label: 'MongoDB' },
  { value: 'devops', label: 'DevOps' },
  { value: 'aws', label: 'AWS' },
  { value: 'docker', label: 'Docker' },
  { value: 'kubernetes', label: 'Kubernetes' },

  // Data & Analytics
  { value: 'excel', label: 'Microsoft Excel' },
  { value: 'power_bi', label: 'Power BI' },
  { value: 'tableau', label: 'Tableau' },
  { value: 'data_analysis', label: 'Data Analysis' },
  { value: 'machine_learning', label: 'Machine Learning' },
  { value: 'deep_learning', label: 'Deep Learning' },
  { value: 'r_programming', label: 'R Programming' },
  { value: 'statistics', label: 'Statistics' },

  // Design & Multimedia
  { value: 'graphic_design', label: 'Graphic Design' },
  { value: 'ui_ux', label: 'UI/UX Design' },
  { value: 'photoshop', label: 'Adobe Photoshop' },
  { value: 'illustrator', label: 'Adobe Illustrator' },
  { value: 'figma', label: 'Figma' },
  { value: 'video_editing', label: 'Video Editing' },
  { value: 'animation', label: 'Animation' },

  // Marketing & Sales
  { value: 'digital_marketing', label: 'Digital Marketing' },
  { value: 'seo', label: 'SEO' },
  { value: 'social_media_marketing', label: 'Social Media Marketing' },
  { value: 'content_writing', label: 'Content Writing' },
  { value: 'email_marketing', label: 'Email Marketing' },
  { value: 'sales', label: 'Sales' },
  { value: 'lead_generation', label: 'Lead Generation' },
  { value: 'market_research', label: 'Market Research' },

  // Finance & Accounting
  { value: 'accounting', label: 'Accounting' },
  { value: 'tally', label: 'Tally' },
  { value: 'quickbooks', label: 'QuickBooks' },
  { value: 'financial_modeling', label: 'Financial Modeling' },
  { value: 'taxation', label: 'Taxation' },
  { value: 'bookkeeping', label: 'Bookkeeping' },

  // Administration & Operations
  { value: 'ms_office', label: 'MS Office' },
  { value: 'data_entry', label: 'Data Entry' },
  { value: 'customer_service', label: 'Customer Service' },
  { value: 'supply_chain', label: 'Supply Chain Management' },
  { value: 'logistics', label: 'Logistics' },
  { value: 'project_management', label: 'Project Management' },

  // Education & Training
  { value: 'teaching', label: 'Teaching' },
  { value: 'curriculum_development', label: 'Curriculum Development' },
  { value: 'elearning', label: 'E-learning' },
  { value: 'instructional_design', label: 'Instructional Design' },

  // Healthcare
  { value: 'nursing', label: 'Nursing' },
  { value: 'first_aid', label: 'First Aid' },
  { value: 'patient_care', label: 'Patient Care' },
  { value: 'medical_coding', label: 'Medical Coding' },
  { value: 'phlebotomy', label: 'Phlebotomy' },

  // Blue-Collar & Vocational
  { value: 'electrician', label: 'Electrician' },
  { value: 'plumbing', label: 'Plumbing' },
  { value: 'carpentry', label: 'Carpentry' },
  { value: 'welding', label: 'Welding' },
  { value: 'driving', label: 'Driving' },
  { value: 'mechanic', label: 'Mechanic' },
  { value: 'machine_operation', label: 'Machine Operation' },

  // Soft Skills
  { value: 'communication', label: 'Communication Skills' },
  { value: 'teamwork', label: 'Teamwork' },
  { value: 'leadership', label: 'Leadership' },
  { value: 'problem_solving', label: 'Problem Solving' },
  { value: 'time_management', label: 'Time Management' },
  { value: 'critical_thinking', label: 'Critical Thinking' },

  // Languages
  { value: 'english', label: 'English' },
  { value: 'hindi', label: 'Hindi' },
  { value: 'tamil', label: 'Tamil' },
  { value: 'telugu', label: 'Telugu' },
  { value: 'bengali', label: 'Bengali' },
  { value: 'kannada', label: 'Kannada' },
  { value: 'marathi', label: 'Marathi' },
];


export const DISABILITY_OPTIONS = [
  { value: 'visual_impairment', label: 'Visual Impairment' },
  { value: 'hearing_impairment', label: 'Hearing Impairment' },
  { value: 'physical_disability', label: 'Physical Disability' },
  { value: 'intellectual_disability', label: 'Intellectual Disability' },
  { value: 'mental_health_condition', label: 'Mental Health Condition' },
  { value: 'multiple_disabilities', label: 'Multiple Disabilities' },
  { value: 'autism_spectrum_disorder', label: 'Autism Spectrum Disorder' },
  { value: 'cerebral_palsy', label: 'Cerebral Palsy' },
  { value: 'down_syndrome', label: 'Down Syndrome' },
  { value: 'dyslexia', label: 'Dyslexia' },
  { value: 'dysgraphia', label: 'Dysgraphia' },
  { value: 'dyscalculia', label: 'Dyscalculia' },
  { value: 'none', label: 'None' }
];

export const MARITAL_STATUS_OPTIONS = [
  { value: 'single', label: 'Single' },
  { value: 'married', label: 'Married' },
  { value: 'divorced', label: 'Divorced' },
  { value: 'widowed', label: 'Widowed' },
  { value: 'separated', label: 'Separated' },
  { value: 'engaged', label: 'Engaged' },
  { value: 'in_a_relationship', label: 'In a Relationship' },
  { value: 'prefer_not_to_say', label: 'Prefer Not to Say' },
  { value: 'other', label: 'Other' }
];

export const INTEREST_OPTIONS = [
  // Technology & Innovation
  { value: 'coding', label: 'Coding' },
  { value: 'ai_ml', label: 'Artificial Intelligence & Machine Learning' },
  { value: 'web_development', label: 'Web Development' },
  { value: 'app_development', label: 'App Development' },
  { value: 'robotics', label: 'Robotics' },
  { value: 'cybersecurity', label: 'Cybersecurity' },
  { value: 'blockchain', label: 'Blockchain' },
  { value: 'gaming', label: 'Gaming' },

  // Business & Finance
  { value: 'entrepreneurship', label: 'Entrepreneurship' },
  { value: 'startups', label: 'Startups' },
  { value: 'investing', label: 'Investing' },
  { value: 'stock_market', label: 'Stock Market' },
  { value: 'personal_finance', label: 'Personal Finance' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'sales', label: 'Sales' },

  // Creative & Artistic
  { value: 'writing', label: 'Writing' },
  { value: 'blogging', label: 'Blogging' },
  { value: 'drawing', label: 'Drawing' },
  { value: 'painting', label: 'Painting' },
  { value: 'photography', label: 'Photography' },
  { value: 'videography', label: 'Videography' },
  { value: 'music', label: 'Music' },
  { value: 'dance', label: 'Dance' },
  { value: 'theatre', label: 'Theatre' },
  { value: 'fashion', label: 'Fashion Design' },

  // Science & Learning
  { value: 'astronomy', label: 'Astronomy' },
  { value: 'psychology', label: 'Psychology' },
  { value: 'biology', label: 'Biology' },
  { value: 'physics', label: 'Physics' },
  { value: 'chemistry', label: 'Chemistry' },
  { value: 'history', label: 'History' },
  { value: 'philosophy', label: 'Philosophy' },
  { value: 'languages', label: 'Learning Languages' },

  // Health & Wellness
  { value: 'fitness', label: 'Fitness' },
  { value: 'yoga', label: 'Yoga' },
  { value: 'meditation', label: 'Meditation' },
  { value: 'nutrition', label: 'Nutrition' },
  { value: 'mental_health', label: 'Mental Health' },

  // Travel & Adventure
  { value: 'traveling', label: 'Traveling' },
  { value: 'trekking', label: 'Trekking' },
  { value: 'backpacking', label: 'Backpacking' },
  { value: 'road_trips', label: 'Road Trips' },
  { value: 'wildlife', label: 'Wildlife & Nature' },

  // Sports & Games
  { value: 'cricket', label: 'Cricket' },
  { value: 'football', label: 'Football' },
  { value: 'badminton', label: 'Badminton' },
  { value: 'chess', label: 'Chess' },
  { value: 'esports', label: 'Esports' },

  // Volunteering & Social Work
  { value: 'volunteering', label: 'Volunteering' },
  { value: 'social_work', label: 'Social Work' },
  { value: 'animal_welfare', label: 'Animal Welfare' },
  { value: 'climate_change', label: 'Climate Change' },
  { value: 'environment', label: 'Environment & Sustainability' },

  // Others
  { value: 'cooking', label: 'Cooking' },
  { value: 'gardening', label: 'Gardening' },
  { value: 'reading', label: 'Reading' },
  { value: 'public_speaking', label: 'Public Speaking' },
  { value: 'board_games', label: 'Board Games' },
  { value: 'collecting', label: 'Collecting (stamps, coins, etc.)' },
];
