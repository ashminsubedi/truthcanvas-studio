import { ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SectionBadge } from "@/components/SageSection";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type Article = {
  title: string;
  titleEn: string;
  excerpt: string;
  date: string; // Display date (Nepali)
  isoDate: string; // For sorting
  url: string;
  image: string;
};

// Articles synced from https://www.onlinekhabar.com/writer/sudarshan_khatiwada/
// Newest first. Add new articles to the top of this array as they're published.
const articles: Article[] = [
  {
    title: "एमालेको ड्रयागन रोपेर उपियाँ फलाउने नियति",
    titleEn: "UML's destiny of planting dragons and reaping opium",
    excerpt:
      "चुनावमा त्यति ठूलो धक्का खाएर पार्टीको साख भुइँमा बज्रिँदा पनि एमाले नेतृत्वले समाजको कुरा सुन्न रुचि देखाएको छैन।",
    date: "२०८२ चैत १८",
    isoDate: "2026-04-01",
    url: "https://www.onlinekhabar.com/2026/04/1903059/umls-destiny-of-planting-dragons-and-reaping-opium",
    image:
      "https://www.onlinekhabar.com/wp-content/uploads/2026/04/suhang-nembang-badal-500x244.jpg",
  },
  {
    title: "कांग्रेसलाई इतिहासको हतियार होइन, भविष्यको आधार बनाउने संकल्प",
    titleEn: "A resolve to make Congress a foundation for the future, not a weapon of history",
    excerpt:
      "यस्तो लाग्छ - हाम्रा शीर्ष भनिएका नेताहरू पनि शक्तिमा बसिरहने (कु)लतले ग्रसित छन्। राजनीतिमा शक्तिको आकर्षण यति बलियो हुने रहेछ कि…",
    date: "२०८२ पुष २८",
    isoDate: "2026-01-12",
    url: "https://www.onlinekhabar.com/2026/01/1847489/the-rebellion-of-the-sky-and-the-world-against-the-tyranny-of-power",
    image:
      "https://www.onlinekhabar.com/wp-content/uploads/2026/01/Gagan-kumar-thapa-bishwa-prakash-sharma-500x244.jpg",
  },
  {
    title: "मतदाताविरुद्ध महागठबन्धन !",
    titleEn: "Grand alliance against voters",
    excerpt:
      "लोकतन्त्रमा मतदातासँग पर्याप्त विकल्पको सुविधा हुनु अनिवार्य हुन्छ। विकल्पलाई सीमित गर्दै मतदातालाई बाध्यतात्मक सम्झौतामा बाँध्ने चुनावले लोकतन्त्रलाई जीवन दिन सक्दैन।",
    date: "२०८२ पुष २२",
    isoDate: "2026-01-06",
    url: "https://www.onlinekhabar.com/2026/01/1843141/grand-alliance-against-voters",
    image:
      "https://www.onlinekhabar.com/wp-content/uploads/2026/01/oli-prachanda-deuba-balen-kulman-rabi-2-500x244.png",
  },
  {
    title: "नेपाल बंगलादेश बन्नसक्ने प्रधानमन्त्रीको चेतावनीले के संकेत गर्छ?",
    titleEn: "What does the PM's warning that Nepal could become Bangladesh indicate?",
    excerpt:
      "नेपाल बंगलादेश बन्नसक्ने प्रधानमन्त्रीको चेतावनी निराशाजन्य स्वाभाविक प्रतिक्रिया कि फरक मत राख्नेप्रति चेतावनी ?",
    date: "२०८२ पुष ११",
    isoDate: "2025-12-26",
    url: "https://www.onlinekhabar.com/2025/12/1836321/what-does-the-prime-ministers-warning-that-nepal-could-become-bangladesh-indicate",
    image:
      "https://www.onlinekhabar.com/wp-content/uploads/2025/12/sushila-karki-500x244.jpg",
  },
  {
    title: "वैकल्पिक शक्तिहरूको नयाँ हेडक्वाटर",
    titleEn: "New headquarters of alternative powers",
    excerpt:
      "पुरानो राजनीतिक केन्द्र हल्लाउँदै नयाँ ध्रुव बन्ने बालेनको महत्वाकांक्षा अब काठमाडौं महानगरबाट सिंहदरबारतर्फ अघि बढ्नेतर्फ उन्मुख छ।",
    date: "२०८२ पुष १०",
    isoDate: "2025-12-25",
    url: "https://www.onlinekhabar.com/2025/12/1835723/new-headquarters-of-alternative-powers",
    image:
      "https://www.onlinekhabar.com/wp-content/uploads/2025/12/Balen-shah-500x248.jpg",
  },
  {
    title: "भोलेन्टियर फोर्स बनाएर कोसँग लड्ने ओलीजी?",
    titleEn: "Who will Oliji fight against by forming a volunteer force?",
    excerpt:
      "जेनजी विद्रोहपछि सत्ताच्युत ओलीले कुनै बेला माओवादीको प्रतिकार गर्दै शक्ति–सञ्चय गरेका थिए। यसपालि जेनजी नाति–नातिनाका रगतको टाटो सुक्न नपाउँदै...",
    date: "२०८२ मंसिर ५",
    isoDate: "2025-11-21",
    url: "https://www.onlinekhabar.com/2025/11/1809054/who-will-oliji-fight-against-by-forming-a-volunteer-force",
    image:
      "https://www.onlinekhabar.com/wp-content/uploads/2025/11/kp-oli-rakshya-bam-500x244.png",
  },
  {
    title: "जेनजी खोज्दैछन् रूपान्तरण, बन्दैछ वृद्धहरूको गठबन्धन",
    titleEn: "GenZ seeks transformation, an alliance of elders forms",
    excerpt:
      "जेनजी विद्रोहले पुराना दलका नेता बदल्न र आन्तरिक लोकतन्त्र पुनर्स्थापित गर्न अन्तिम चेतावनी दिएको थियो।",
    date: "२०८२ कात्तिक १९",
    isoDate: "2025-11-05",
    url: "https://www.onlinekhabar.com/2025/11/1797349/genji-seeks-transformation-forming-an-alliance-of-the-elderly",
    image:
      "https://www.onlinekhabar.com/wp-content/uploads/2025/11/Communist-leader--500x314.jpg",
  },
  {
    title: "न्युयोर्कतिर हेर, राजनीति बदलिंदैछ",
    titleEn: "Look at New York — politics is changing",
    excerpt:
      "३४ वर्षे ठिटोले जितेको यो चुनाव केवल न्युयोर्कको राजनीतिमा होइन, विश्व राजनीतिमा पनि एउटा स्पष्ट सन्देश हो।",
    date: "२०८२ कात्तिक १९",
    isoDate: "2025-11-05",
    url: "https://www.onlinekhabar.com/2025/11/1797203/look-at-new-york-politics-is-changing",
    image:
      "https://www.onlinekhabar.com/wp-content/uploads/2025/11/Joharan-mamdani-newyork-mayor-story-cover-500x244.png",
  },
  {
    title: "मन्त्री चयनमा झल्किएको अपरिपक्वता",
    titleEn: "Immaturity reflected in the selection of ministers",
    excerpt:
      "सरकारसँग जुन निर्भीकता, स्पष्टता र तीव्रता अपेक्षित थियो, व्यवहारमा अस्पष्टता, ढिलासुस्ती र डरपोक व्यवहार देखाएको छ।",
    date: "२०८२ कात्तिक ९",
    isoDate: "2025-10-26",
    url: "https://www.onlinekhabar.com/2025/10/1789851/immaturity-reflected-in-the-selection-of-ministers",
    image:
      "https://www.onlinekhabar.com/wp-content/uploads/2025/10/Sushila-Karki-Confusion-500x244.jpg",
  },
  {
    title: "कसले लिने विपिन हत्याको नैतिक जिम्मेवारी ?",
    titleEn: "Who will take moral responsibility for Vipin's murder?",
    excerpt:
      "अयोग्य तर अहंकारी शासकहरूले देश यस्तो बनाइसकेका छन् कि युवाहरू विपिनको शोकसभा मनाएर इजरायल जान लाइनमा बस्नुपरेको छ।",
    date: "२०८२ कात्तिक ५",
    isoDate: "2025-10-22",
    url: "https://www.onlinekhabar.com/2025/10/1787870/who-will-take-moral-responsibility-for-vipins-murder",
    image:
      "https://www.onlinekhabar.com/wp-content/uploads/2025/10/Bipin-Joshi-Murdered-Sketch-Cover-500x305.jpg",
  },
  {
    title: "किरणले बालेको राजनीतिक नैतिकताको टर्चलाइट",
    titleEn: "The torch of political ethics lit by Kiran",
    excerpt:
      "नेपालका कम्युनिस्ट घटकका नेताहरूमा पदलोलुप प्रवृत्ति झांगिइरहेको छ। मोहन वैद्य किरणले नेतृत्व छोडेर सानो शक्ति र स्वरले ठूलो सन्देश प्रवाह गरिरहेका छन्।",
    date: "२०८२ कात्तिक २",
    isoDate: "2025-10-19",
    url: "https://www.onlinekhabar.com/2025/10/1786449/the-torch-of-political-ethics-lit-by-the-rays",
    image:
      "https://www.onlinekhabar.com/wp-content/uploads/2025/10/Mohan-Baidhya-2-500x232.png",
  },
  {
    title: "मुम्बईमा मजदुरीदेखि मस्तिष्क क्यान्सरको अनुसन्धानसम्म",
    titleEn: "From labor in Mumbai to brain cancer research",
    excerpt:
      "स्याङ्जाका राजेन्द्र क्याम्पस पढ्न काठमाडौं आउन सकेनन्, भौंतारिँदै मुम्बई पुगे। समयक्रममा बेलायतबाट मस्तिष्क क्यान्सरसम्बन्धी अनुसन्धानमा विद्यावारिधि गर्ने अवसर पाए।",
    date: "२०८२ असोज २४",
    isoDate: "2025-10-10",
    url: "https://www.onlinekhabar.com/2025/10/1778764/from-labor-in-mumbai-to-brain-cancer-research",
    image:
      "https://www.onlinekhabar.com/wp-content/uploads/2025/10/Rajendra-pandeni-Paurakhi-prabashi-Cover-6-500x244.png",
  },
];

const Articles = () => {
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal();

  const [featured, ...rest] = articles;

  return (
    <div className="min-h-screen pt-16">
      <Navbar />

      {/* Header */}
      <section ref={headerRef} className="pt-16 pb-10 px-[6%] md:px-[8%]">
        <SectionBadge>Latest Articles</SectionBadge>
        <h1 className="font-display text-4xl md:text-6xl uppercase leading-[0.9] tracking-tight mb-6 max-w-4xl">
          Words from<br />the Newsroom
        </h1>
        <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Daily commentary, opinion and reportage published in{" "}
          <a
            href="https://www.onlinekhabar.com/writer/sudarshan_khatiwada/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-foreground transition-colors"
          >
            Onlinekhabar
          </a>
          . Updated regularly.
        </p>
      </section>

      {/* Featured article */}
      <section className="px-[6%] md:px-[8%] pb-12">
        <a
          href={featured.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block border-2 border-foreground bg-card hover:bg-muted/40 transition-colors"
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden border-b-2 md:border-b-0 md:border-r-2 border-foreground">
              <img
                src={featured.image}
                alt={featured.titleEn}
                loading="eager"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 bg-foreground text-background font-display text-[0.65rem] uppercase tracking-[1.5px] px-3 py-1.5">
                Featured
              </span>
            </div>
            <div className="p-6 md:p-10 flex flex-col justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-display text-xs uppercase tracking-wider text-sage">
                    {featured.date}
                  </span>
                  <span className="h-px w-8 bg-foreground/30" />
                  <span className="font-body text-[0.7rem] font-semibold uppercase tracking-[1.5px] text-muted-foreground">
                    Onlinekhabar
                  </span>
                </div>
                <h2 className="font-display text-2xl md:text-4xl uppercase leading-tight mb-3">
                  {featured.title}
                </h2>
                <p className="font-body text-sm text-muted-foreground italic mb-5">
                  {featured.titleEn}
                </p>
                <p className="font-body text-base md:text-lg leading-relaxed text-foreground/80">
                  {featured.excerpt}
                </p>
              </div>
              <span className="inline-flex items-center gap-2 font-display text-xs uppercase tracking-wider border-b-2 border-foreground pb-0.5 self-start group-hover:opacity-70 transition-opacity">
                Read on Onlinekhabar
                <ExternalLink size={14} />
              </span>
            </div>
          </div>
        </a>
      </section>

      {/* Article grid */}
      <section ref={gridRef} className="px-[6%] md:px-[8%] pb-24">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-xl md:text-2xl uppercase">More Writing</h2>
          <span className="font-body text-xs uppercase tracking-wider text-muted-foreground">
            {rest.length} articles
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((article) => (
            <a
              key={article.url}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col border-2 border-foreground bg-card hover:bg-muted/40 transition-colors"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b-2 border-foreground">
                <img
                  src={article.image}
                  alt={article.titleEn}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col gap-3 flex-1">
                <div className="flex items-center gap-3">
                  <span className="font-display text-[0.7rem] uppercase tracking-wider text-sage">
                    {article.date}
                  </span>
                </div>
                <h3 className="font-display text-base md:text-lg uppercase leading-snug line-clamp-3">
                  {article.title}
                </h3>
                <p className="font-body text-xs text-muted-foreground italic line-clamp-2">
                  {article.titleEn}
                </p>
                <p className="font-body text-sm text-foreground/75 leading-relaxed line-clamp-3 flex-1">
                  {article.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 font-display text-[0.7rem] uppercase tracking-wider mt-2 group-hover:opacity-70 transition-opacity">
                  Read article
                  <ExternalLink size={12} />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* CTA to source */}
        <div className="mt-16 border-t-2 border-foreground pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-body text-sm text-muted-foreground max-w-md">
            For the complete archive of articles, visit the author profile on Onlinekhabar.
          </p>
          <a
            href="https://www.onlinekhabar.com/writer/sudarshan_khatiwada/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-foreground text-background font-display text-xs uppercase tracking-wider px-6 py-3 hover:opacity-80 transition-opacity"
          >
            View Full Archive
            <ExternalLink size={14} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Articles;
