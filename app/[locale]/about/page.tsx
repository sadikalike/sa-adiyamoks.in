import Section from '@/components/Section'
import LazyYouTube from '@/components/LazyYouTube'

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params
  const locale = resolvedParams.locale === 'en' ? 'en' : 'kn'
  
  const content = locale === 'kn' ? {
    title: "MOKS ಬಗ್ಗೆ",
    subtitle: "ಜಾಮಿಅ ಸಅದಿಯ್ಯಾ ಅರಬಿಯ್ಯಾದ ಹೃದಯಭಾಗದಲ್ಲಿ ಕನ್ನಡದ ವೈಭವವನ್ನು ಬೆಳೆಸುವ ವೇದಿಕೆ",
    p1: "MOKS – ಮಿಸ್ಬಾಹುಸ್ಸುಆದಾ ಆರ್ಗನೈಸೇಶನ್ ಆಫ್ ಸಅದಿಯ್ಯಾ ಕನ್ನಡ ಸ್ಟೂಡೆಂಟ್ಸ್ (Misbahussuada Organization of Sa'adiya Kannada Students) ಜಾಮಿಅ ಸಅದಿಯ್ಯಾ ಅರಬಿಯ್ಯಾದ ಪ್ರತಿಷ್ಠಿತ ಕ್ಯಾಂಪಸ್‌ನಲ್ಲಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿರುವ ಕನ್ನಡ ವಿದ್ಯಾರ್ಥಿಗಳ ಸಂಘಟನೆಯಾಗಿದೆ. ದಕ್ಷಿಣ ಭಾರತದ ಪ್ರಮುಖ ಇಸ್ಲಾಮಿಕ್ ಶಿಕ್ಷಣ ಸಂಸ್ಥೆಗಳಲ್ಲಿ ಒಂದಾದ ಜಾಮಿಅ ಸಅದಿಯ್ಯಾ ಅರಬಿಯ್ಯಾ ಹಲವು ತಲೆಮಾರುಗಳಿಗೆ ಜ್ಞಾನ ಮತ್ತು ಮಾರ್ಗದರ್ಶನ ನೀಡಿದ ಮಹತ್ವದ ವಿದ್ಯಾಕೇಂದ್ರವಾಗಿದೆ.",
    p2: "ತಾಜುಲ್ ಉಲಮಾ ಮತ್ತು ನೂರುಲ್ ಉಲಮಾ ಅವರ ದೂರದೃಷ್ಟಿ ಹಾಗೂ ಕನ್ನಡ ಭಾಷೆ, ಸಂಸ್ಕೃತಿ ಮತ್ತು ಪರಂಪರೆಯನ್ನು ಉಳಿಸಿ ಬೆಳೆಸುವ ಮಹತ್ತರ ಆಶಯದೊಂದಿಗೆ MOKS ಸ್ಥಾಪನೆಯಾಯಿತು. ಕನ್ನಡ ವಿದ್ಯಾರ್ಥಿಗಳ ಪ್ರತಿಭೆ, ಜ್ಞಾನ ಮತ್ತು ವ್ಯಕ್ತಿತ್ವ ವಿಕಸನಕ್ಕೆ ಪೂರಕವಾದ ವೇದಿಕೆಯಾಗಿ ಸಂಸ್ಥೆಯು ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿದೆ.",
    p3: "ಶೈಕ್ಷಣಿಕ ಪ್ರಗತಿ, ನಾಯಕತ್ವದ ಗುಣಗಳು ಮತ್ತು ವೈಯಕ್ತಿಕ ಬೆಳವಣಿಗೆಗೆ ಆದ್ಯತೆ ನೀಡುವ MOKS, ವಿವಿಧ ಶೈಕ್ಷಣಿಕ ಕಾರ್ಯಾಗಾರಗಳು, ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳು, ಸಾಮಾಜಿಕ ಸೇವಾ ಚಟುವಟಿಕೆಗಳು ಹಾಗೂ ಹಲವು ಅಭಿವೃದ್ಧಿಪರ ಯೋಜನೆಗಳನ್ನು ಆಯೋಜಿಸುತ್ತದೆ. ಕನ್ನಡ ಭಾಷೆ ಮತ್ತು ಸಂಸ್ಕೃತಿಯ ಮೇಲಿನ ಅಭಿಮಾನವನ್ನು ಬೆಳೆಸುವುದರ ಜೊತೆಗೆ ವಿದ್ಯಾರ್ಥಿಗಳು ಸಮಾಜಕ್ಕೆ ಅರ್ಥಪೂರ್ಣ ಕೊಡುಗೆ ನೀಡುವಂತೆ ಪ್ರೋತ್ಸಾಹಿಸುತ್ತದೆ.",
    p4: "ಏಕತೆ ಮತ್ತು ವೈವಿಧ್ಯತೆಯೇ ನಮ್ಮ ಸಂಘಟನೆಯ ಪ್ರಮುಖ ಶಕ್ತಿಯಾಗಿದೆ. ವಿವಿಧ ಹಿನ್ನೆಲೆಯ ವಿದ್ಯಾರ್ಥಿಗಳನ್ನು ಒಂದೇ ವೇದಿಕೆಯಲ್ಲಿ ಒಗ್ಗೂಡಿಸಿ, ಸ್ನೇಹ, ಸಹಕಾರ ಮತ್ತು ಪರಸ್ಪರ ಗೌರವದ ವಾತಾವರಣವನ್ನು ನಿರ್ಮಿಸುವುದು ನಮ್ಮ ಉದ್ದೇಶವಾಗಿದೆ.",
    p5: "MOKS‌ನ ಮಾರ್ಗದರ್ಶಕ ಶಕ್ತಿಯಾಗಿ MSSA ಸಂಸ್ಥೆಯ ಸದಸ್ಯರಲ್ಲಿ ಗುರುತು, ಉದ್ದೇಶ ಮತ್ತು ಒಗ್ಗಟ್ಟಿನ ಭಾವನೆಯನ್ನು ಬೆಳೆಸುತ್ತದೆ. ಸಾಂಸ್ಕೃತಿಕ ಪರಂಪರೆಯ ಸಂರಕ್ಷಣೆ, ಶೈಕ್ಷಣಿಕ ಉತ್ಕೃಷ್ಟತೆ ಮತ್ತು ಏಕತೆಯ ಮೌಲ್ಯಗಳನ್ನು ಮುಂದಿನ ಪೀಳಿಗೆಗೆ ತಲುಪಿಸುವಲ್ಲಿ MOKS ನಿರಂತರವಾಗಿ ಶ್ರಮಿಸುತ್ತಿದೆ.",

    // 1ನೇ ಸೆಕ್ಷನ್ — ಜಾಮಿಅಃ ಸಅದಿಯ್ಯ ಅರಬಿಯ್ಯ
    saadiyaTitle: "ಜಾಮಿಅಃ ಸಅದಿಯ್ಯ ಅರಬಿಯ್ಯ",
    saadiyaSub: "ಪ್ರಶಾಂತಮಾನವಾದ ಹೊಸ ಯುಗದತ್ತ ಸಮುದಾಯವನ್ನು ಮುನ್ನಡೆಸಿದ ಜಾಮಿಅ ಸಅದಿಯ್ಯ ಅರಬಿಯ್ಯ",
    saadiyaDesc: "ಪ್ರಶಾಂತಮಾನವಾದ ಹೊಸ ಯುಗದತ್ತ ಸಮುದಾಯವನ್ನು ಮುನ್ನಡೆಸಿದ ಜಾಮಿಅ ಸಅದಿಯ್ಯ ಅರಬಿಯ್ಯ, ಸುಮಾರು ಆರು ದಶಕಗಳಿಂದ ನಮ್ಮ ಮುಂದೆ ಒಂದು ಸನ್ಮಾರ್ಗ ದೀಪವಾಗಿ ನಿಂತಿದೆ.\n\nತಾಜುಲ್ ಉಲಮಾ ಉಳ್ಳಾಳ್ ತಂಙಳ್, ನೂರುಲ್ ಉಲಮಾ ಎಂ. ಎ. ಉಸ್ತಾದ್, ಕಲ್ಲಟ್ರ ಅಬ್ದುಲ್ ಖಾದಿರ್ ಹಾಜಿ ಮುಂತಾದ ಉಲಮಾ-ಉಮರಾ ಸಮೂಹದ ಇಖ್ಲಾಸಿನ ಪ್ರತಿಫಲವೇ ಈ ಜ್ಞಾನಪ್ರಕಾಶದ ಗೋಪುರ.\n\nಇಂದು ಸಅದಿಯ್ಯ ಐವತ್ತು ಏಕರೆಗೂ ಹೆಚ್ಚು ವಿಸ್ತೀರ್ಣವನ್ನು ಹೊಂದಿದೆ. ಸುಮಾರು ನಲವತ್ತು ಸಂಸ್ಥೆಗಳು, ಇಪ್ಪತ್ತು ಸಾವಿರಕ್ಕೂ ಹೆಚ್ಚು ವಿದ್ಯಾರ್ಥಿಗಳು, ಸಾವಿರಕ್ಕೂ ಹೆಚ್ಚು ಸಿಬ್ಬಂದಿ ಹಾಗೂ ಹತ್ತು ಲಕ್ಷಕ್ಕೂ ಹೆಚ್ಚು ಫಲಾನುಭವಿಗಳು — ಹೀಗೆ ಸಅದಿಯ್ಯದ ಸೇವಾ ಕ್ಷೇತ್ರಗಳು ಬಹಳ ವಿಸ್ತಾರವಾಗಿದೆ.\n\nಮಹಬ್ಬವಿಲ್ಲ, ಸಅದಿಯ್ಯ ಗಾರ್ಡನ್, ಆರ್ಫನ್ ಹೋಮ್‌ಕೇರ್ ಮುಂತಾದ ಕರುಣಾ ಸೇವಾ ಕೇಂದ್ರಗಳು; ಶರೀಅತ್ ಕಾಲೇಜು, ತಖಸ್ಸುಸ್ ಮತ್ತು ದಅವಾ ಕಾಲೇಜು, ತಹ್ಫೀಝುಲ್ ಖುರ್‌ಆನ್ ಕಾಲೇಜು ಮುಂತಾದ ಧಾರ್ಮಿಕ ಶಿಕ್ಷಣ ಸಂಸ್ಥೆಗಳು; ಸಾವಿರಕ್ಕೂ ಹೆಚ್ಚು ಕಂದಮ್ಮಗಳು ಜ್ಞಾನಮಧು ಸವಿಯುತ್ತಿರುವ ಕಿಡ್ಸ್ ಗಾರ್ಡನ್; ವಿವಿಧ ಸ್ಥಳಗಳಲ್ಲೆ ಹರಡಿಕೊಂಡಿರುವ ನೂರ್ವಲಿ ಪ್ರೀ-ಸ್ಕೂಲ್‌ಗಳು; ಮೂರು ಹೈಸ್ಕೂಲ್‌ಗಳು, ಹೈಯರ್ ಸೆಕೆಂಡರಿ ಸ್ಕೂಲ್, ಆರ್ಟ್ಸ್ & ಸೈನ್ಸ್ ಕಾಲೇಜು, ಲಾ ಕಾಲೇಜು ಮುಂತಾದ ಭೌತಿಕ ಶಿಕ್ಷಣ ಕೇಂದ್ರಗಳು; NCP UL, MAANU, ITI ಮೊದಲಾದ ಉದ್ಯೋಗಾಧಾರಿತ ಶಿಕ್ಷಣ ವ್ಯವಸ್ಥೆಗಳು; ವಿಮೆನ್ಸ್ ಅರಬಿಕ್ ಕಾಲೇಜು; ವಿಮೆನ್ಸ್ ಕಾಲೇಜು; ಕ್ವೀನ್ಸ್ ಲ್ಯಾಂಡ್ ಲೇಡೀಸ್ ಹಾಸ್ಟೆಲ್ ಮುಂತಾದ ಮಹಿಳಾ ಸಬಲೀಕರಣದ ಯೋಜನೆಗಳು — ಹೀಗೆ ಜಾಮಿಅ ಸಅದಿಯ್ಯ ಅರಬಿಯ್ಯದ ಸೇವಾ ಕ್ಷೇತ್ರಗಳು ಅತ್ಯಂತ ವಿಶಾಲವಾಗಿವೆ.\n\nಸಅದಿಯ್ಯದ ಈ ಮಹತ್ತರ ಪಯಣದಲ್ಲಿ ಸದಾ ಜೊತೆ ನಿಂತು, ತಮ್ಮ ಸಮಯ, ಸಂಪತ್ತು, ಪ್ರಾರ್ಥನೆ, ಸಹಕಾರ ಮತ್ತು ಬೆಂಬಲದ ಮೂಲಕ ಸಂಸ್ಥೆಯ ಬೆಳವಣಿಗೆಗೆ ಕಾರಣರಾದ ಎಲ್ಲರನ್ನೂ ಸಅದಿಯ್ಯ ಸದಾ ಕೃತಜ್ಞತೆಯಿಂದ ಸ್ಮರಿಸುತ್ತದೆ.",

    // 2ನೇ ಸೆಕ್ಷನ್ — MOKS ವಿದ್ಯಾರ್ಥಿ ಸಂಘಟನೆ
    moksTitle: "MOKS ವಿದ್ಯಾರ್ಥಿ ಸಂಘಟನೆ",
    moksP1: "ಶಿಕ್ಷಣ ರಂಗದಲ್ಲಿ ತನ್ನದೇ ಆದ ಕ್ರಾಂತಿಯನ್ನು ಸೃಷ್ಟಿಸುತ್ತಿರುವ ಜಾಮಿಯಾ ಸಅದಿಯ್ಯ ಶರೀಅತ್ ಕಾಲೇಜಿನ ಕನ್ನಡ ವಿದ್ಯಾರ್ಥಿಗಳ ಒಕ್ಕೂಟವಾದ \"ಮಿಸಭಾಹುಸ್ಸುಅದಾ ಕನ್ನಡ ವಿಧ್ಯಾರ್ಥಿ ಸಂಘಟನೆ\" (MOKS), ಕನ್ನಡ ಭಾಷೆ ಮತ್ತು ಸಾಹಿತ್ಯದ ಜತೆಗೆ ಸುನ್ನತ್ ಜಮಾಅತ್ತಿನ ಆದರ್ಶಗಳನ್ನು ಪಸರಿಸುವಲ್ಲಿ ಪ್ರಮುಖ ಪಾತ್ರ ವಹಿಸುತ್ತಿರುವ ಪ್ರತಿಷ್ಠಿತ ಸಂಸ್ಥೆಯಾಗಿದೆ.",
    moksP2: "ಮಲಯಾಳಂ, ಉರ್ದು ಮತ್ತು ಅರೇಬಿಕ್ ಭಾಷೆಗಳ ಪ್ರಾಬಲ್ಯವಿರುವ ಈ ವಿದ್ಯಾಸಂಸ್ಥೆಯಲ್ಲಿ ಕನ್ನಡ ವಿದ್ಯಾರ್ಥಿಗಳ ಶೈಕ್ಷಣಿಕ ಹಾಗೂ ಸಾಹಿತ್ಯಿಕ ಬೆಳವಣಿಗೆಯ ಕೊರತೆಯನ್ನು ನೀಗಿಸಲು, 1996ರಲ್ಲಿ ಈ ಸಂಘಟನೆಯು ಉದಯಿಸಿತು. ವಿದ್ಯಾರ್ಥಿಗಳಲ್ಲಿ ಅಂತರ್ಲೀನವಾಗಿರುವ ಸೃಜನಶೀಲತೆಗೆ ಜೀವ ತುಂಬಿ, ಇಸ್ಲಾಮಿನ ಸುಂದರ ಆಶಯಗಳನ್ನು ಜನತೆಯ ಮನಸ್ಸಿನಲ್ಲಿ ಪಡಿಮೂಡಿಸುವುದು ಇದರ ಮುಖ್ಯ ಧ್ಯೇಯವಾಗಿದೆ.",
    moksP3: "ವಿದ್ಯಾರ್ಥಿಗಳಲ್ಲಿ ಭಾಷಣ ಕಲೆ ಮತ್ತು ಸಾಹಿತ್ಯಿಕ ಅಭಿರುಚಿಯನ್ನು ಬೆಳೆಸಲು ವಾರಕ್ಕೊಮ್ಮೆ ಭಾಷಣ ಪರಿಶೀಲನೆ, ತಿಂಗಳಿಗೊಮ್ಮೆ ಸಂಯುಕ್ತ ವೇದಿಕೆ ಮತ್ತು ಬೃಹತ್ ವಾಚನಾಲಯವು ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿದೆ. ಅಲ್ಲದೆ, ಮುಗ್ಧ ಜನತೆಯನ್ನು ಹಾದಿ ತಪ್ಪಿಸುವ ನೂತನ ವಾದಿಗಳಿಗೆ ಅದೇ ಶೈಲಿಯಲ್ಲಿ ಪ್ರತ್ಯುತ್ತರ ನೀಡಬಲ್ಲ ಬರಹಗಾರರನ್ನು ರೂಪಿಸುವಲ್ಲಿ ಯಶಸ್ವಿಯಾಗಿದೆ.",
    moksP4: "ಸಮುದಾಯಕ್ಕೆ ದಾರ್ಮಿಕ ಮಾರ್ಗದರ್ಶನ ನೀಡುವ ನಿಟ್ಟಿನಲ್ಲಿ ಈ ವೇದಿಕೆ ಹಲವು ಮಹತ್ವದ ಕೃತಿಗಳನ್ನು ಕೊಡುಗೆಯಾಗಿ ನೀಡಿದೆ. ಸಾಹಿತ್ಯಿಕ ಹಾಗೂ ಶೈಕ್ಷಣಿಕ ಸೇವೆಯೊಂದಿಗೆ ವಿವಿಧ ರಿಲೀಫ್ ಕಾರ್ಯಗಳನ್ನೂ ಯಶಸ್ವಿಯಾಗಿ ನಿರ್ವಹಿಸುತ್ತಾ ಬಂದಿದೆ.",
    moksP5: "ಹೀಗೆ ಹಲವು ಸಂಭ್ರಮಗಳ ಮಜಲುಗಳನ್ನು ದಾಟುತ್ತ ಇದೀಗ MOKS ಎಂಬ ಸಂಘಟನೆ Herencia ಎಂಬ ನಾಮದಿಂದ 30 ನೇ ವಾರ್ಷಿಕೋತ್ಸವದ ಸಂಭ್ರಮಕ್ಕೆ ಬಂದು ತಲುಪಿದೆ. ಇನ್ಶಾ ಅಲ್ಲಾಹ್ ಕರ್ನಾಟಕದ MOKS ಎಂಬ ಸಂಘಟನೆಯ ಅಧೀನದಲ್ಲಿ ನಡೆಯುವ ಈ Herencia ಎಂಬ ಕಾರ್ಯಕ್ರಮಕ್ಕೆ ಹಲವಾರು ಖರ್ಚುಗಳು ಇವೆ. ಪ್ರೀತಿಯ ಸ್ನೇಹಿತರೇ ನಿಮ್ಮೆಲ್ಲಾ ಸಹಾಯ ಸಹಕಾರದಿಂದಲ್ಲದೆ ಈ ಕಾರ್ಯಕ್ರಮ ವಿಜಯಗೊಳ್ಳಲು ಸಾಧ್ಯವಿಲ್ಲ. ನಿಮ್ಮ ಒಂದೊಂದು ಸಹಾಯ ಈ ಕಾರ್ಯಕ್ರಮ ವಿಜಯದ ಗಡಿ ದಾಟಲು ಉಪಕಾರವಾಗಬಹುದು. ಇನ್ಶಾ ಅಲ್ಲಾಹ್ ನಿಮ್ಮೆಲ್ಲರ ಸಹಾಯವನ್ನು ನಿರೀಕ್ಷಿಸುತ್ತಾ.......",

    videoTitle: "ನಮ್ಮ ಪರಂಪರೆ",
  } : {
    title: "About MOKS",
    subtitle: "Nurturing Kannada Brilliance at the Heart of Jamia Sa'adiya Arabia",
    p1: "MOKS – Misbahussuada Organization of Sa'adiya Kannada Students is a vibrant organization functioning within the prestigious campus of Jamia Sa'adiya Arabia. As one of the prominent Islamic educational institutions in South India, Jamia Sa'adiya Arabia has been a centre of knowledge and enlightenment for generations.",
    p2: "Founded through the vision and inspiration of Thajul Ulama and Noorul Ulama, MOKS reflects their commitment to preserving and promoting the Kannada language, culture and traditions. It provides a supportive platform for Kannada students, encouraging their overall development while celebrating their cultural identity.",
    p3: "With a strong focus on academic excellence, leadership and personal growth, MOKS organizes various educational workshops, cultural programmes, community service activities and developmental initiatives. Through these efforts, we encourage students to embrace their heritage, strengthen their knowledge and contribute meaningfully to society.",
    p4: "At MOKS, we believe in the strength of unity and diversity. We bring together students from different backgrounds, creating a welcoming environment built on friendship, cooperation and mutual respect. Our collective efforts help build lasting relationships and strengthen cultural understanding.",
    p5: "As a guiding force behind MOKS, MSSA inspires its members with a strong sense of identity, purpose and belonging. It provides a valuable foundation for promoting cultural heritage, academic excellence and unity among students.",

    // Section 1 — Jamia Sa'adiya Arabia
    saadiyaTitle: "Jamia Sa'adiya Arabia",
    saadiyaSub: "Leading the community towards a peaceful new era",
    saadiyaDesc: "Jamia Sa'adiya Arabia, which has led the community towards a peaceful new era, has stood before us as a guiding lamp for nearly six decades.\n\nThe tower of this light of knowledge is the result of the sincerity of the community of Ulama and Umara such as Thajul Ulama Ullal Thangal, Noorul Ulama M. A. Ustad, and Kallatra Abdul Qadir Haji.\n\nToday, Sa'adiya has an area of more than fifty acres. Around forty institutions, more than twenty thousand students, over a thousand staff, and more than ten lakh beneficiaries — thus the service fields of Sa'adiya are very vast.\n\nMahabbavill, Sa'adiya Garden, Orphan Homecare and other mercy service centers; Sharia College, Takhasus and Da'wa College, Tahfizul Quran College and other religious educational institutions; Kids Garden where more than a thousand children taste the sweetness of knowledge; Nurvali pre-schools spread across various locations; three high schools, higher secondary school, Arts & Science College, Law College and other physical educational centers; NCP UL, MAANU, ITI and other employment-oriented education systems; Women's Arabic College; Women's College; Queens Land Ladies Hostel and other women's empowerment projects — thus the service fields of Jamia Sa'adiya Arabia are extremely vast.\n\nSa'adiya always remembers with gratitude all those who stood with it throughout this great journey and contributed to the growth of the institution through their time, wealth, prayers, cooperation and support.",

    // Section 2 — MOKS Student Organisation
    moksTitle: "MOKS Student Organisation",
    moksP1: "The \"Misbahussuada Kannada Students Organisation\" (MOKS), a federation of Kannada students of Jamia Sa'adiya Sharia College, which is creating its own revolution in the field of education, is a prestigious institution playing a major role in spreading the ideals of Sunnat Jama'at along with Kannada language and literature.",
    moksP2: "To fill the lack of academic and literary development of Kannada students in this educational institution dominated by Malayalam, Urdu and Arabic languages, this organization arose in 1996. Its main objective is to breathe life into the creativity inherent in students and to instill the beautiful ideals of Islam in the minds of the people.",
    moksP3: "To develop oratory skills and literary taste among students, weekly speech reviews, monthly joint forums and a large reading library are functioning. In addition, it has succeeded in shaping writers who can respond in the same style to new debaters who mislead the innocent public.",
    moksP4: "In the direction of providing religious guidance to the community, this forum has contributed many important works. Along with literary and educational service, it has been successfully carrying out various relief activities.",
    moksP5: "Thus crossing many milestones of celebration, the organization MOKS has now reached the celebration of its 30th anniversary under the name Herencia. Insha Allah, this Herencia program conducted under the auspices of MOKS Karnataka has many expenses. Dear friends, without your help and cooperation, this program cannot succeed. Each of your contributions can help this program cross the boundary of victory. Insha Allah, awaiting all your support.......",

    videoTitle: "Our Heritage",
  }

  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="relative bg-[#0a192f] py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/25 rounded-full blur-[60px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/25 rounded-full blur-[60px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            {content.title}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 font-medium max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </div>
      </section>

      {/* 2. Jamia Sa'adiya Arabia Section */}
      <Section bg="gradient" title={content.saadiyaTitle}>
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-[2rem] p-[1.5px] bg-gradient-to-br from-emerald-400 via-teal-300 to-blue-400 shadow-[0_20px_60px_-15px_rgba(16,185,129,0.35)]">
            <div className="relative rounded-[calc(2rem-1.5px)] bg-white p-8 md:p-12 overflow-hidden">
              <div className="absolute -top-16 -right-16 w-56 h-56 bg-emerald-100 rounded-full blur-2xl opacity-50 pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-blue-100 rounded-full blur-2xl opacity-50 pointer-events-none" />

              <div className="relative z-10 text-center mb-8">
                <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] md:text-xs font-bold tracking-widest uppercase border border-emerald-200">
                  {content.saadiyaSub}
                </span>
              </div>

              <div className="relative z-10 text-slate-700 leading-relaxed text-base md:text-lg text-justify space-y-4 whitespace-pre-line">
                {content.saadiyaDesc}
              </div>

              {/* Cinematic video INSIDE the card */}
              <div className="relative z-10 mt-8 md:mt-10">
                <div className="group relative mx-auto max-w-2xl">
                  <div className="absolute -inset-3 bg-gradient-to-r from-amber-400/20 via-emerald-400/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative rounded-xl bg-gradient-to-b from-[#0b0b0b] via-[#141414] to-[#0b0b0b] p-2 md:p-3 shadow-[0_30px_80px_-25px_rgba(0,0,0,0.75)] ring-1 ring-white/10">
                    <div className="flex justify-between px-1 mb-1.5 md:mb-2" aria-hidden>
                      {Array.from({ length: 12 }).map((_, i) => (
                        <span key={i} className="w-2 h-2.5 md:w-2.5 md:h-3 rounded-[2px] bg-slate-700/80" />
                      ))}
                    </div>

                    <div className="relative rounded-md overflow-hidden bg-black">
                      <LazyYouTube id="gWX8qtBB5ZM" title={content.videoTitle} />
                      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.5)] rounded-md" />
                    </div>

                    <div className="flex justify-between px-1 mt-1.5 md:mt-2" aria-hidden>
                      {Array.from({ length: 12 }).map((_, i) => (
                        <span key={i} className="w-2 h-2.5 md:w-2.5 md:h-3 rounded-[2px] bg-slate-700/80" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. MOKS Student Organisation Section */}
      <Section bg="gradient" title={content.moksTitle}>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 space-y-6 text-slate-700 leading-relaxed text-base md:text-lg text-justify">
            <p>{content.moksP1}</p>
            <p>{content.moksP2}</p>
            <p>{content.moksP3}</p>
            <p>{content.moksP4}</p>
            <p>{content.moksP5}</p>
          </div>
        </div>
      </Section>

    </div>
  )
}