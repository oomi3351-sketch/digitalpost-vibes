export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
};

export const categories = [
  "All",
  "Celebrity News",
  "Life Hacks",
  "Shocking Stories",
  "Tech",
  "Entertainment",
  "Health & Wellness",
  "Travel",
] as const;

export const blogPosts: BlogPost[] = [
  {
    id: "ai-replacing-uk-jobs-2026",
    title: "Is AI Really Replacing Jobs Across the UK in 2026? Here's the Truth",
    excerpt: "From London's financial sector to Manchester's tech hubs — the reality of AI in the British workforce might surprise you.",
    content: `<p>Artificial intelligence has been the talk of every boardroom, pub, and news broadcast across the United Kingdom. But is AI truly replacing jobs, or is it creating new opportunities we haven't imagined yet?</p>

<h2>The Current State of AI in the UK</h2>
<p>According to the latest ONS data, the UK has seen a 12% increase in AI-related job postings since 2024. While some traditional roles in data entry, basic customer service, and routine accounting have declined, entirely new categories of employment have emerged.</p>

<p>London's financial district has been at the forefront of this transformation. Major banks like Barclays and HSBC have integrated AI into their fraud detection systems, but rather than eliminating jobs, they've created new roles for AI supervisors and ethics compliance officers.</p>

<h2>Industries Most Affected</h2>
<p>The NHS has been experimenting with AI diagnostic tools that can identify potential health issues from scans faster than human radiologists. However, medical professionals emphasise that AI serves as an assistant, not a replacement.</p>

<p>In Manchester's growing tech corridor, startups are leveraging AI to create products that didn't exist five years ago. The city has seen a 40% increase in tech employment since embracing AI tools.</p>

<h2>What This Means for British Workers</h2>
<p>The key takeaway? Adaptability is everything. Workers who learn to work alongside AI tools are finding themselves more valuable than ever. The government's new Digital Skills Initiative is offering free AI literacy courses across the country, and enrolment has exceeded expectations by 300%.</p>

<p>Rather than fearing AI, the UK workforce is learning to harness it — and those who adapt early are reaping the rewards.</p>`,
    category: "Tech",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    author: {
      name: "James Crawford",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    date: "Feb 15, 2026",
    readTime: "6 min read",
  },
  {
    id: "royal-family-shocking-revelation",
    title: "Royal Family: 5 Shocking Revelations That Have the UK Talking",
    excerpt: "From surprise announcements to behind-the-scenes drama — the latest royal news has captivated the nation.",
    content: `<p>The British Royal Family has once again found itself at the centre of public fascination, with a series of revelations that have dominated headlines across every major UK publication.</p>

<h2>The Announcement Nobody Expected</h2>
<p>In a move that stunned royal watchers, a senior member of the family announced a groundbreaking initiative to modernise the monarchy's approach to public engagement. The plan includes a complete overhaul of how the Royal Household communicates with the public.</p>

<h2>Behind Palace Walls</h2>
<p>Sources close to the family have revealed that significant changes are underway in how royal duties are distributed. Younger members of the family are taking on increasingly prominent roles, signalling a new era for the institution.</p>

<p>The shift has been welcomed by many who believe the monarchy needs to evolve with the times, while traditionalists express concern about the pace of change.</p>

<h2>Public Reaction</h2>
<p>A recent YouGov poll shows that 67% of Britons view the changes positively, with particularly strong support among younger demographics. The Royal Family's social media presence has grown by 200% in the past year alone.</p>`,
    category: "Celebrity News",
    image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=800&q=80",
    author: {
      name: "Sophie Williams",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    },
    date: "Feb 12, 2026",
    readTime: "5 min read",
  },
  {
    id: "morning-routine-british-workers",
    title: "7 Morning Routine Hacks British Workers Swear By in 2026",
    excerpt: "Forget the 5 AM club. These practical morning habits are transforming how Brits start their day.",
    content: `<p>The British morning routine is evolving. Gone are the days of just a quick cuppa and a dash for the train. Workers across the UK are adopting new habits that are boosting their productivity and wellbeing.</p>

<h2>1. The 20-Minute Rule</h2>
<p>Instead of scrolling through social media, top performers across London, Birmingham, and Edinburgh are dedicating their first 20 minutes to a single focused task. Whether it's journaling, light exercise, or planning the day ahead, this simple habit is showing remarkable results.</p>

<h2>2. Cold Water Face Splash</h2>
<p>Forget expensive skincare routines. A simple cold water splash has become the go-to morning wake-up call for thousands of British professionals.</p>

<h2>3. The Commute Podcast</h2>
<p>With average UK commute times of 59 minutes, savvy workers are turning dead time into growth time by listening to educational podcasts and audiobooks.</p>

<h2>4. Prep the Night Before</h2>
<p>From laying out clothes to prepping overnight oats, the most successful Brits are winning their mornings the night before.</p>

<h2>5. No Phone for 30 Minutes</h2>
<p>A growing movement of digital detox mornings is sweeping through UK workplaces, with companies like Monzo and Deliveroo encouraging employees to start screen-free.</p>`,
    category: "Life Hacks",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    author: {
      name: "Oliver Bennett",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    },
    date: "Feb 10, 2026",
    readTime: "4 min read",
  },
  {
    id: "hidden-treasure-cotswolds",
    title: "Couple Finds £1.5 Million Medieval Treasure in Their Cotswolds Garden",
    excerpt: "A routine landscaping project turned into a life-changing discovery when a couple unearthed a mysterious chest.",
    content: `<p>What started as a simple garden renovation in the picturesque Cotswolds has turned into one of the most significant archaeological discoveries in recent British history.</p>

<h2>The Discovery</h2>
<p>Tom and Sarah Mitchell were expanding their garden when their digger struck something metallic. What they found beneath the soil was a medieval chest containing gold coins, jewellery, and artefacts dating back to the 14th century.</p>

<h2>Expert Assessment</h2>
<p>The British Museum has valued the collection at approximately £1.5 million, making it one of the largest private garden finds in UK history. Experts believe the treasure may have been buried during the period of the Black Death.</p>

<h2>What Happens Next</h2>
<p>Under the Treasure Act 1996, the couple must report the find to the local coroner. If declared treasure, they could receive a reward equal to the market value, split with the landowner.</p>`,
    category: "Shocking Stories",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
    author: {
      name: "Emma Thompson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    },
    date: "Feb 8, 2026",
    readTime: "5 min read",
  },
  {
    id: "best-streaming-shows-uk",
    title: "The 10 Best Shows to Stream in the UK This February",
    excerpt: "From BBC iPlayer exclusives to Netflix originals — your ultimate streaming guide for February 2026.",
    content: `<p>February might be the shortest month, but it's packed with incredible content across every major streaming platform available in the UK.</p>

<h2>1. The Crown: Legacy (Netflix)</h2>
<p>The beloved series returns with a special limited run exploring modern moments that shaped the monarchy.</p>

<h2>2. Peaky Blinders: The Movie (BBC iPlayer)</h2>
<p>By order of the Peaky Blinders — the long-awaited film adaptation has finally landed and it's everything fans hoped for.</p>

<h2>3. Doctor Who: Parallel (Disney+)</h2>
<p>The Time Lord is back with a mind-bending series that explores alternate timelines of British history.</p>

<h2>4. The Great British Mystery (Channel 4)</h2>
<p>A new true crime documentary series investigating unsolved cases across the British countryside.</p>`,
    category: "Entertainment",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&q=80",
    author: {
      name: "Charlotte Davis",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80",
    },
    date: "Feb 5, 2026",
    readTime: "7 min read",
  },
  {
    id: "nhs-diet-myths-debunked",
    title: "NHS Doctor Debunks 5 Diet Myths That Most Brits Still Believe",
    excerpt: "Science vs. social media — let's settle the biggest nutrition debates once and for all.",
    content: `<p>With TikTok nutritionists and Instagram wellness gurus spreading dubious health advice, an NHS doctor has stepped forward to set the record straight on the most persistent diet myths in the UK.</p>

<h2>Myth 1: Carbs Make You Fat</h2>
<p>Dr. Aisha Khan from Guy's Hospital says: "Carbohydrates are your body's primary fuel source. The issue isn't carbs themselves — it's the type and quantity. Whole grains, sweet potatoes, and oats are essential for a balanced diet."</p>

<h2>Myth 2: Detox Teas Work</h2>
<p>"Your liver and kidneys are the best detox system money can't buy," explains Dr. Khan. "These expensive teas are mostly just laxatives with fancy marketing."</p>

<h2>Myth 3: Eating After 8pm Causes Weight Gain</h2>
<p>Research from the University of Cambridge shows that meal timing matters far less than total caloric intake and food quality.</p>`,
    category: "Health & Wellness",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
    author: {
      name: "Dr. Aisha Khan",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&q=80",
    },
    date: "Feb 2, 2026",
    readTime: "6 min read",
  },
  {
    id: "hidden-uk-coastal-walks",
    title: "8 Hidden Coastal Walks in the UK That Feel Like Another World",
    excerpt: "Skip the crowded beaches. These secret coastal paths offer breathtaking views without the tourist crowds.",
    content: `<p>The UK coastline stretches for over 19,000 miles, yet most visitors flock to the same handful of beaches. We've uncovered eight hidden gems that offer unparalleled beauty and solitude.</p>

<h2>1. Barafundle Bay, Pembrokeshire</h2>
<p>Often called Wales' best-kept secret, this golden beach requires a half-mile walk through woodland and over cliffs, keeping it blissfully uncrowded.</p>

<h2>2. Kynance Cove, Cornwall</h2>
<p>With its turquoise waters and dramatic serpentine rock formations, this could easily be mistaken for a Mediterranean hideaway.</p>

<h2>3. Sandwood Bay, Scottish Highlands</h2>
<p>A four-mile walk through wild moorland leads to one of Britain's most remote and spectacular beaches, complete with a sea stack and pristine white sand.</p>

<h2>4. Dancing Ledge, Dorset</h2>
<p>Carved into the Jurassic Coast, this natural swimming pool offers one of the most unique bathing experiences in England.</p>`,
    category: "Travel",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    author: {
      name: "David Hartley",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    },
    date: "Jan 30, 2026",
    readTime: "8 min read",
  },
  {
    id: "teen-app-developer-uk",
    title: "This 18-Year-Old From Birmingham Built a £2 Million App From His Bedroom",
    excerpt: "From a frustrating school experience to a viral app — the incredible story of a teen British entrepreneur.",
    content: `<p>When Jamal Osei couldn't find a decent study app that worked the way he wanted, he decided to build his own. What started as a weekend project in his Birmingham bedroom has turned into a £2 million business.</p>

<h2>The Origin Story</h2>
<p>Frustrated with existing revision tools ahead of his GCSEs, Jamal taught himself to code using free YouTube tutorials and built StudyMate — an AI-powered revision companion that adapts to each student's learning style.</p>

<h2>Going Viral on TikTok</h2>
<p>A video demonstrating the app's features went viral on TikTok, garnering 15 million views in just three days. Within a week, StudyMate had been downloaded over 500,000 times.</p>

<h2>Investment and Growth</h2>
<p>The app caught the attention of investors on Dragons' Den, where Jamal secured a £500,000 investment. Today, StudyMate has over 2 million users across the UK and is expanding into European markets.</p>`,
    category: "Shocking Stories",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    author: {
      name: "Priya Patel",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
    },
    date: "Jan 27, 2026",
    readTime: "5 min read",
  },
  {
    id: "social-media-detox-uk",
    title: "I Did a 30-Day Social Media Detox in London — Here's What Changed",
    excerpt: "No Instagram, no Twitter, no TikTok for a full month in one of the world's most connected cities.",
    content: `<p>Living in London means being constantly connected. The Tube, the office, the pub — screens everywhere. I decided to disconnect from social media for 30 days. The results were unexpected.</p>

<h2>Week 1: The Withdrawal</h2>
<p>The first week was genuinely difficult. My thumb kept reaching for apps that weren't there. I estimated I checked my phone 200+ times on day one alone, each time met with a blank screen.</p>

<h2>Week 2: The Boredom</h2>
<p>Something unexpected happened — boredom became productive. I read three books, explored neighbourhoods I'd never visited, and had actual conversations with strangers on the Tube (yes, really).</p>

<h2>Week 3: The Clarity</h2>
<p>My anxiety levels dropped noticeably. Sleep improved. I stopped comparing myself to others and started focusing on what genuinely made me happy.</p>

<h2>Week 4: The Decision</h2>
<p>By the final week, I wasn't sure I wanted to go back. I've since adopted a "mindful scrolling" approach, limiting social media to 30 minutes daily. My mental health has never been better.</p>`,
    category: "Life Hacks",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    author: {
      name: "Oliver Bennett",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    },
    date: "Jan 24, 2026",
    readTime: "6 min read",
  },
  {
    id: "premier-league-scandals",
    title: "6 Premier League Stars Whose Off-Pitch Drama Shocked Fans in 2025",
    excerpt: "From secret feuds to surprise transfers — the biggest football controversies of the past year.",
    content: `<p>The Premier League is never short of drama, and 2025 delivered some of the most jaw-dropping off-pitch stories in recent memory.</p>

<h2>The Transfer That Broke the Internet</h2>
<p>When one of the league's most beloved players announced a shock transfer to a rival club, the backlash was immediate and fierce. Social media erupted, fan forums crashed, and shirt sales for the new club broke all records.</p>

<h2>The Locker Room Leak</h2>
<p>A viral audio clip from inside a Premier League dressing room revealed heated exchanges between teammates that exposed deep rifts within one of England's top clubs.</p>

<h2>Redemption Stories</h2>
<p>Not all drama was negative. Several players who faced public scandals earlier in their careers staged remarkable comebacks, earning back the respect of fans and pundits alike through charity work and outstanding performances.</p>`,
    category: "Celebrity News",
    image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=800&q=80",
    author: {
      name: "Sophie Williams",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    },
    date: "Jan 20, 2026",
    readTime: "5 min read",
  },
  {
    id: "gut-health-food-combos",
    title: "10 Common British Food Combos That Are Secretly Ruining Your Gut",
    excerpt: "You eat these classic combos every day. Time to rethink your plate.",
    content: `<p>The British diet has some beloved food combinations that have been passed down through generations. But some of these pairings might be doing more harm than good to your digestive system.</p>

<h2>1. Tea with Milk After a Full English</h2>
<p>While a builder's tea is practically a national institution, drinking it immediately after a heavy meal can interfere with iron absorption from foods like black pudding and beans.</p>

<h2>2. Cheese and Pickle Sandwich</h2>
<p>The acidity in Branston pickle combined with dairy can create digestive discomfort for those with sensitive stomachs.</p>

<h2>3. Fish and Chips with Mushy Peas</h2>
<p>The combination of deep-fried batter and starchy peas can create a significant digestive load. Consider adding a side salad to help balance things out.</p>`,
    category: "Health & Wellness",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=80",
    author: {
      name: "Dr. Aisha Khan",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&q=80",
    },
    date: "Jan 17, 2026",
    readTime: "7 min read",
  },
  {
    id: "iphone-hidden-features-uk",
    title: "15 iPhone Hidden Features Every Brit Should Know About in 2026",
    excerpt: "Your iPhone can do way more than you think. These hidden tricks will change how you use your phone.",
    content: `<p>With over 50 million iPhone users in the UK, you'd think we'd know everything about our most-used device. Think again. These hidden features will transform your daily phone experience.</p>

<h2>1. Back Tap</h2>
<p>Double or triple tap the back of your iPhone to trigger custom actions — from taking screenshots to opening your favourite app.</p>

<h2>2. Live Text in Photos</h2>
<p>Point your camera at any text — menus, signs, receipts — and your iPhone can read, copy, and translate it instantly. Perfect for navigating foreign restaurants on holiday.</p>

<h2>3. Focus Modes for UK Life</h2>
<p>Set up custom Focus modes for your commute, work, and evening routine. Your phone can automatically switch based on time and location.</p>`,
    category: "Tech",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&q=80",
    author: {
      name: "James Crawford",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    date: "Jan 14, 2026",
    readTime: "8 min read",
  },
];
