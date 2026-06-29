// ================================================================
//  MELIH DEMIRCAN — 3D Walkthrough Portfolio
//  adamrobinson.dev style: Play → auto-walk → CV signs on walls
// ================================================================

// ──────────────────────────────────────────────────────────────
//  CV DATA  (signs hung on the corridor walls)
// ──────────────────────────────────────────────────────────────
const SECTIONS = [
  {
    id: "intro", label: "🚀 Başlangıç", zStart: 0,
    signs: [
      {
        side: "center",
        lines: [
          { text: "MELİH DEMİRCAN", size: 58, bold: true, color: "#ffffff" },
          { text: "Bilgisayar Mühendisi", size: 28, color: "#64ff96" },
          { text: "melihdemircan14@gmail.com  •  +90 539 639 07 76", size: 22, color: "rgba(255,255,255,0.75)" },
          { text: "github.com/melihdemircann  •  linkedin.com/in/melihdemircann", size: 20, color: "#64ff96" },
          { text: "melihdemircann.github.io/my-site", size: 20, color: "rgba(100,255,150,0.7)" },
          { text: "↓  Keşfetmek için ilerleyin  ↓", size: 18, color: "rgba(255,255,255,0.35)" },
        ], zLocal: 0
      }
    ]
  },
  {
    id: "egitim", label: "🎓 Eğitim", zStart: 22,
    signs: [
      {
        side: "left", heading: "LİSANS EĞİTİMİ",
        lines: [
          { text: "Dumlupınar Üniversitesi", size: 32, bold: true, color: "#ffffff" },
          { text: "Bilgisayar Mühendisliği", size: 24, color: "#ff4444" },
          { text: "2022 — 2026  |  GPA: 2.92 / 4.00", size: 22, color: "#ffffff" },
        ], zLocal: 0
      },
      {
        side: "right", heading: "KULÜPLER & AKTİVİTELER",
        lines: [
          { text: "Uraz Model Uydu Takımı", size: 26, bold: true, color: "#ffffff" },
          { text: "TEKNOFEST Takım Üyesi", size: 22, color: "#ff3333" },
          { text: "IEEE Öğrenci Kolu Üyesi", size: 22, color: "#ff3333" },
        ], zLocal: 14
      },
      {
        side: "left", heading: "MİLLİ TEKNOLOJİ AKADEMİSİ",
        lines: [
          { text: "Mikroçip Tasarım Uzmanlık Programı", size: 24, bold: true, color: "#ffffff" },
          { text: "T.C. Sanayi ve Teknoloji Bakanlığı", size: 21, color: "#ff2222" },
        ], zLocal: 28
      },
    ]
  },
  {
    id: "deneyim", label: "💼 Deneyim", zStart: 120,
    signs: [
      {
        side: "left", heading: "MARSIAS  —  02.2023 / GÜNÜMÜZ",
        lines: [
          { text: "Kurucu  (Founder)", size: 30, bold: true, color: "#ffffff" },
          { text: "Girişim Yönetimi & İş Geliştirme", size: 22, color: "#00ffee" },
          { text: "WeShape Turkey — Yarı Finalist", size: 20, color: "rgba(0,255,220,0.75)" },
          { text: "Kütahya Girişim Hızlandırma Programı", size: 18, color: "rgba(0,255,220,0.6)" },
        ], zLocal: 0
      },
      {
        side: "right", heading: "ANTİCVERSE — DEPTH DWELLERS  03.2023",
        lines: [
          { text: "Yapay Zeka Eğitim Koordinatörü", size: 26, bold: true, color: "#ffffff" },
          { text: "AI Education Coordinator", size: 22, color: "#00ffee" },
          { text: "Oyun & AI eğitim içeriği geliştirme", size: 20, color: "rgba(0,255,220,0.65)" },
        ], zLocal: 18
      },
      {
        side: "left", heading: "T.C. SANAYİ VE TEKNOLOJİ BAKANLIĞI",
        lines: [
          { text: "Stajyer  —  06.2026 / 08.2026", size: 26, bold: true, color: "#ffffff" },
          { text: "Ulusal Staj", size: 22, color: "#00ffee" },
        ], zLocal: 36
      },
      {
        side: "right", heading: "SOCIAL GROUP — STAJ",
        lines: [
          { text: "Social Group  |  Stajyer", size: 26, bold: true, color: "#ffffff" },
          { text: "Yazılım Geliştirici", size: 22, color: "#00ffee" },
          { text: "Eylül 2025", size: 20, color: "rgba(0,255,220,0.75)" },
        ], zLocal: 54
      },
      {
        side: "left", heading: "KALTUN GROUP — STAJ",
        lines: [
          { text: "Kaltun Group  |  IT Stajyeri", size: 26, bold: true, color: "#ffffff" },
          { text: "Sistem ve Donanım Destek", size: 22, color: "#00ffee" },
          { text: "Temmuz 2025 — Eylül 2025", size: 20, color: "rgba(0,255,220,0.75)" },
        ], zLocal: 72
      }
    ]
  },
  {
    id: "projeler", label: "🛠️ Projeler", zStart: 235,
    signs: [
      {
        side: "left", heading: "BİTİRME PROJESİ — GENOVİS",
        lines: [
          { text: "GenoVis — DNA to 3D Human", size: 28, bold: true, color: "#ffffff" },
          { text: "AI & Biyoinformatik  |  VCF DNA Analizi", size: 20, color: "#cc44ff" },
          { text: "SNP → Fenotip → 3D Blender Model", size: 18, color: "rgba(200,68,255,0.75)" },
        ], zLocal: 0
      },
      {
        side: "right", heading: "OTONOM SATIŞ DANIŞMANI",
        lines: [
          { text: "AI Autonomous Sales System", size: 24, bold: true, color: "#ffffff" },
          { text: "WhatsApp API · n8n · Gemini · Supabase", size: 20, color: "#cc44ff" },
          { text: "Sıfır insan müdahalesiyle otomasyon", size: 18, color: "rgba(200,68,255,0.75)" },
        ], zLocal: 18
      },
      {
        side: "left", heading: "GAME CONSOLE OS  (RUST)",
        lines: [
          { text: "Sıfırdan İşletim Sistemi", size: 26, bold: true, color: "#ffffff" },
          { text: "Bellek yönetimi & donanım etkileşimi", size: 20, color: "#cc44ff" },
          { text: "Güvenli eşzamanlılık & sistem kararlılığı", size: 18, color: "rgba(200,68,255,0.75)" },
        ], zLocal: 36
      },
      {
        side: "right", heading: "KUANTUM KRİPTOGRAFİ — BB84",
        lines: [
          { text: "Kuantum Anahtar Dağıtımı Simülasyonu", size: 22, bold: true, color: "#ffffff" },
          { text: "Python & Qiskit  ile  BB84 protokolü", size: 20, color: "#cc44ff" },
          { text: "Dinleme tespiti & güvenli anahtar değişimi", size: 17, color: "rgba(200,68,255,0.75)" },
        ], zLocal: 54
      },
      {
        side: "left", heading: "YOLOv5 — NESNE TANIMA",
        lines: [
          { text: "Gerçek Zamanlı Object Detection", size: 22, bold: true, color: "#ffffff" },
          { text: "Python + YOLOv5  model inferansı", size: 20, color: "#cc44ff" },
          { text: "Performans optimizasyonu pipeline", size: 18, color: "rgba(200,68,255,0.75)" },
        ], zLocal: 72
      },
      {
        side: "right", heading: "SPANISH ATLAS",
        lines: [
          { text: "Flutter — iOS & Android App", size: 24, bold: true, color: "#ffffff" },
          { text: "Multidil öğrenme platformu", size: 20, color: "#cc44ff" },
          { text: "Dart  ·  Flutter  ·  Firebase", size: 18, color: "rgba(200,68,255,0.75)" },
        ], zLocal: 90
      },
      {
        side: "left", heading: "BBC NEWS TOPIC MODELING",
        lines: [
          { text: "Doğal Dil İşleme  (NLP)", size: 24, bold: true, color: "#ffffff" },
          { text: "LDA & NMF Konu Modelleme", size: 20, color: "#cc44ff" },
          { text: "Python  ·  NLTK  ·  scikit-learn", size: 18, color: "rgba(200,68,255,0.75)" },
        ], zLocal: 108
      },
      {
        side: "right", heading: "AKILLI KEDİ KUMU — IoT",
        lines: [
          { text: "ESP8266 + MQ135 Sensör", size: 24, bold: true, color: "#ffffff" },
          { text: "Amonyak tespiti & otomatik havalandırma", size: 20, color: "#cc44ff" },
          { text: "Arduino  ·  Wi-Fi  ·  MQTT", size: 18, color: "rgba(200,68,255,0.75)" },
        ], zLocal: 126
      },
      {
        side: "left", heading: "SKILLFLOW",
        lines: [
          { text: "Token Tabanlı İşbirliği Platformu", size: 24, bold: true, color: "#ffffff" },
          { text: "Skill-to-skill takas ekonomisi", size: 20, color: "#cc44ff" },
          { text: "Next.js  ·  Supabase  ·  Blockchain", size: 18, color: "rgba(200,68,255,0.75)" },
        ], zLocal: 144
      },
      {
        side: "right", heading: "SHOPPING LIFE",
        lines: [
          { text: "2D Mobil Oyun  (Unity)", size: 24, bold: true, color: "#ffffff" },
          { text: "Alışveriş simülasyonu oyunu", size: 20, color: "#cc44ff" },
          { text: "Unity  ·  C#  ·  Android", size: 18, color: "rgba(200,68,255,0.75)" },
        ], zLocal: 162
      }
    ]
  },

  {
    id: "sertifikalar", label: "🏆 Sertifikalar", zStart: 490,
    signs: [
      {
        side: "left", heading: "BTK AKADEMİ SERTİFİKALARI",
        lines: [
          { text: "SQL ile Veritabanı Programlama", size: 24, bold: true, color: "#ffffff" },
          { text: "Flutter ile Mobil Uygulama Geliştirme", size: 22, color: "#ffa500" },
          { text: "BTK Akademi — Tamamlandı", size: 20, color: "rgba(255,165,0,0.7)" },
        ], zLocal: 0
      },
      {
        side: "right", heading: "TURKCELL GELECEĞİ YAZANLAR",
        lines: [
          { text: "Turkcell Geleceği Yazanlar Programı", size: 24, bold: true, color: "#ffffff" },
          { text: "Yazılım Geliştirme Eğitimi", size: 22, color: "#ffa500" },
          { text: "Tamamlama Sertifikası", size: 20, color: "rgba(255,165,0,0.7)" },
        ], zLocal: 14
      },
      {
        side: "left", heading: "JAVA & C# SERTİFİKALARI",
        lines: [
          { text: "Java 101  ·  Java 201  ·  Java 202", size: 22, bold: true, color: "#ffffff" },
          { text: "Advanced Java Programming", size: 22, color: "#ffa500" },
          { text: "C# ile Nesne Yönelimli Programlama", size: 20, color: "rgba(255,165,0,0.75)" },
        ], zLocal: 28
      },
      {
        side: "right", heading: "MEB SERTİFİKASI",
        lines: [
          { text: "Bilgisayar İşletmenliği", size: 26, bold: true, color: "#ffffff" },
          { text: "Milli Eğitim Bakanlığı Onaylı", size: 22, color: "#ffa500" },
        ], zLocal: 42
      },
      {
        side: "left", heading: "MİLLİ TEKNOLOJİ AKADEMİSİ",
        lines: [
          { text: "Mikroçip Tasarım Uzmanlık Programı", size: 24, bold: true, color: "#ffffff" },
          { text: "Chip Design Specialization", size: 22, color: "#ffa500" },
          { text: "T.C. Sanayi ve Teknoloji Bakanlığı", size: 20, color: "rgba(255,165,0,0.75)" },
        ], zLocal: 56
      }
    ]
  },
  {
    id: "yetenekler", label: "⚡ Yetenekler", zStart: 650,
    signs: [
      {
        side: "left", heading: "PROGRAMLAMA DİLLERİ",
        lines: [
          { text: "Python  ·  Rust  ·  C++  ·  C", size: 24, bold: true, color: "#ffffff" },
          { text: "Dart  ·  C#  (Başlangıç)", size: 22, color: "#ffee00" },
        ], zLocal: 0
      },
      {
        side: "right", heading: "TEKNOLOJİLER & ARAÇLAR",
        lines: [
          { text: "Linux  ·  Flutter  ·  Unity  ·  Vuforia", size: 20, bold: true, color: "#ffffff" },
          { text: "Android Studio  ·  n8n  ·  Git", size: 20, color: "#ffee00" },
          { text: "Qiskit  ·  YOLOv5  ·  WhatsApp Cloud API", size: 18, color: "rgba(255,230,0,0.8)" },
        ], zLocal: 14
      },
      {
        side: "left", heading: "VERİTABANI",
        lines: [
          { text: "PostgreSQL  ·  Supabase", size: 26, bold: true, color: "#ffffff" },
          { text: "SQL Server  ·  SQL Server Mgmt. Studio", size: 22, color: "#ffee00" },
        ], zLocal: 28
      },
      {
        side: "right", heading: "YABANCI DİLLER",
        lines: [
          { text: "Türkçe — Anadil", size: 26, bold: true, color: "#ffffff" },
          { text: "İngilizce — B1+ / B2", size: 24, color: "#ffee00" },
          { text: "İspanyolca — B1", size: 24, color: "#ffcc00" },
        ], zLocal: 42
      },
      {
        side: "left", heading: "İLETİŞİM & BAĞLANTILAR",
        lines: [
          { text: "github.com/melihdemircann", size: 22, bold: true, color: "#ffffff" },
          { text: "linkedin.com/in/melihdemircann", size: 22, bold: true, color: "#ffffff" },
          { text: "melihdemircann.github.io/my-site", size: 20, color: "#ffee00" },
          { text: "+90 539 639 07 76", size: 22, color: "#ffcc00" },
        ], zLocal: 56
      }
    ]
  }
];

// ──────────────────────────────────────────────────────────────
//  THREE.JS SETUP
// ──────────────────────────────────────────────────────────────
const W = () => window.innerWidth;
const H = () => window.innerHeight;

const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("c"), antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(W(), H());
renderer.setClearColor(0x000000, 1);
renderer.shadowMap.enabled = true;

const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x000000, 18, 60);

const camera = new THREE.PerspectiveCamera(72, W() / H(), 0.1, 120);
camera.position.set(0, 1.7, 5);   // eye-height 1.7m

window.addEventListener("resize", () => {
  camera.aspect = W() / H();
  camera.updateProjectionMatrix();
  renderer.setSize(W(), H());
});

// ──────────────────────────────────────────────────────────────
//  CORRIDOR GEOMETRY
// ──────────────────────────────────────────────────────────────
const CORRIDOR_W = 5;     // half-width each side
const CORRIDOR_H = 4;     // ceiling height
const CORRIDOR_LEN = 850; // total z length

// Material helpers
function wallMat(color) {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.95, metalness: 0.0 });
}

// Floor
{
  const geo = new THREE.PlaneGeometry(CORRIDOR_W * 2, CORRIDOR_LEN);
  const mat = new THREE.MeshStandardMaterial({
    color: 0x050505, roughness: 1, metalness: 0,
  });
  const m = new THREE.Mesh(geo, mat);
  m.rotation.x = -Math.PI / 2;
  m.position.set(0, 0, -CORRIDOR_LEN / 2 + 5);
  m.receiveShadow = true;
  scene.add(m);
}

// Ceiling
{
  const geo = new THREE.PlaneGeometry(CORRIDOR_W * 2, CORRIDOR_LEN);
  const m = new THREE.Mesh(geo, wallMat(0x020202));
  m.rotation.x = Math.PI / 2;
  m.position.set(0, CORRIDOR_H, -CORRIDOR_LEN / 2 + 5);
  scene.add(m);
}

// Left wall
{
  const geo = new THREE.PlaneGeometry(CORRIDOR_LEN, CORRIDOR_H);
  const mat = new THREE.MeshStandardMaterial({ color: 0x060a06, roughness: 0.98 });
  const m = new THREE.Mesh(geo, mat);
  m.rotation.y = Math.PI / 2;
  m.position.set(-CORRIDOR_W, CORRIDOR_H / 2, -CORRIDOR_LEN / 2 + 5);
  m.receiveShadow = true;
  scene.add(m);
}

// Right wall
{
  const geo = new THREE.PlaneGeometry(CORRIDOR_LEN, CORRIDOR_H);
  const mat = new THREE.MeshStandardMaterial({ color: 0x060a06, roughness: 0.98 });
  const m = new THREE.Mesh(geo, mat);
  m.rotation.y = -Math.PI / 2;
  m.position.set(CORRIDOR_W, CORRIDOR_H / 2, -CORRIDOR_LEN / 2 + 5);
  m.receiveShadow = true;
  scene.add(m);
}

// Back wall (end cap)
{
  const geo = new THREE.PlaneGeometry(CORRIDOR_W * 2, CORRIDOR_H);
  const m = new THREE.Mesh(geo, wallMat(0x040804));
  m.position.set(0, CORRIDOR_H / 2, -(CORRIDOR_LEN - 5));
  scene.add(m);
}

// Floor grid lines
{
  const helper = new THREE.GridHelper(CORRIDOR_W * 2, 20, 0x0a1a0a, 0x0a1a0a);
  helper.position.set(0, 0.01, -CORRIDOR_LEN / 2 + 5);
  helper.scale.z = CORRIDOR_LEN / (CORRIDOR_W * 2);
  scene.add(helper);
}

// Ceiling lights (strip emitters)
for (let z = 0; z < CORRIDOR_LEN; z += 12) {
  const geo = new THREE.PlaneGeometry(0.3, 2.5);
  const mat = new THREE.MeshBasicMaterial({ color: 0x88ffaa, transparent: true, opacity: 0.15 });
  const m = new THREE.Mesh(geo, mat);
  m.rotation.x = Math.PI / 2;
  m.position.set(0, CORRIDOR_H - 0.01, -(z + 2));
  scene.add(m);
}

// ──────────────────────────────────────────────────────────────
//  LIGHTS
// ──────────────────────────────────────────────────────────────
scene.add(new THREE.AmbientLight(0xffffff, 1.0));

// Walk light (follows camera)
const walkLight = new THREE.PointLight(0x88ffcc, 3.0, 25);
walkLight.castShadow = false;
scene.add(walkLight);

// Ceiling strip lights every 12 units
for (let z = 0; z < CORRIDOR_LEN; z += 12) {
  const l = new THREE.PointLight(0x66ff88, 1.2, 18);
  l.position.set(0, CORRIDOR_H - 0.2, -(z + 2));
  scene.add(l);
}

// ──────────────────────────────────────────────────────────────
//  CANVAS TEXTURE → SIGN
// ──────────────────────────────────────────────────────────────
function makeSignTexture(heading, lines, themeColor) {
  const CW = 1200, PADDING = 60;
  const lineHeights = lines.map(l => l.size * 1.8);
  const totalTextH = lineHeights.reduce((a, b) => a + b, 0);
  const headingH = heading ? 80 : 0;
  const CH = PADDING * 2 + headingH + totalTextH + 20;

  const cv = document.createElement("canvas");
  cv.width = CW;
  cv.height = Math.max(CH, 160);
  const ctx = cv.getContext("2d");

  // Futuristic tech background
  ctx.fillStyle = "rgba(10, 15, 12, 0.94)";
  ctx.fillRect(0, 0, CW, cv.height);

  // Subtle tech grid pattern
  ctx.strokeStyle = "rgba(255, 255, 255, 0.02)";
  ctx.lineWidth = 1;
  for (let x = 0; x < CW; x += 40) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, cv.height); ctx.stroke();
  }
  for (let y = 0; y < cv.height; y += 40) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(CW, y); ctx.stroke();
  }

  // Glow border with themeColor
  const mainColor = themeColor || "#64ff96";
  ctx.shadowColor = mainColor;
  ctx.shadowBlur = 12;
  ctx.strokeStyle = mainColor;
  ctx.lineWidth = 2.5;
  ctx.strokeRect(10, 10, CW - 20, cv.height - 20);
  ctx.shadowBlur = 0;

  // Corner HUD Brackets
  ctx.strokeStyle = mainColor;
  ctx.lineWidth = 5;
  const bracketLen = 30;
  const padding = 10;
  ctx.beginPath();
  ctx.moveTo(padding + bracketLen, padding); ctx.lineTo(padding, padding); ctx.lineTo(padding, padding + bracketLen);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(CW - padding - bracketLen, padding); ctx.lineTo(CW - padding, padding); ctx.lineTo(CW - padding, padding + bracketLen);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(padding + bracketLen, cv.height - padding); ctx.lineTo(padding, cv.height - padding); ctx.lineTo(padding, cv.height - padding - bracketLen);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(CW - padding - bracketLen, cv.height - padding); ctx.lineTo(CW - padding, cv.height - padding); ctx.lineTo(CW - padding, cv.height - padding - bracketLen);
  ctx.stroke();

  // Text & Heading
  let y = PADDING;
  if (heading) {
    ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
    ctx.fillRect(PADDING, y, CW - PADDING * 2, 50);
    ctx.strokeStyle = mainColor;
    ctx.lineWidth = 1;
    ctx.strokeRect(PADDING, y, CW - PADDING * 2, 50);

    // Tech details
    ctx.fillStyle = mainColor;
    ctx.font = "bold 12px 'Space Mono', monospace";
    ctx.fillText("STATUS: ACTIVE // LOG", PADDING + 12, y - 6);

    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 24px 'Inter', sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(heading, PADDING + 20, y + 34);
    y += 85;
  }

  // Draw lines
  lines.forEach((line) => {
    ctx.font = `${line.bold ? "bold " : ""}${line.size}px 'Inter', sans-serif`;
    ctx.fillStyle = line.color || "#ffffff";
    ctx.textAlign = "center";

    // Check if it's a clickable link
    const textStr = line.text;
    const isLink = textStr.includes("@") || textStr.includes(".com") || textStr.includes(".io");
    if (isLink) {
      ctx.fillStyle = mainColor;
      ctx.shadowColor = mainColor;
      ctx.shadowBlur = 4;
    }

    ctx.fillText(textStr, CW / 2, y + line.size);
    ctx.shadowBlur = 0;
    y += line.size * 1.8;
  });

  const tex = new THREE.CanvasTexture(cv);
  return { tex, aspect: CW / cv.height };
}

function placeSign(section, sign) {
  const absZ = -(section.zStart + sign.zLocal);

  // Color theme matching
  let themeColor = "#64ff96";
  if (section.id === "egitim") themeColor = "#ff4444";
  else if (section.id === "deneyim") themeColor = "#00ffee";
  else if (section.id === "projeler") themeColor = "#cc44ff";
  else if (section.id === "sertifikalar") themeColor = "#ffa500";
  else if (section.id === "yetenekler") themeColor = "#ffee00";

  const { tex, aspect } = makeSignTexture(sign.heading || "", sign.lines, themeColor);

  const signH = 2.0;
  const signW = signH * aspect;
  const geo = new THREE.PlaneGeometry(signW, signH);
  const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.userData = { section, sign };

  const eyeY = CORRIDOR_H * 0.55;

  if (sign.side === "left") {
    mesh.position.set(-CORRIDOR_W + 0.08, eyeY, absZ);
    mesh.rotation.y = Math.PI / 2;
  } else if (sign.side === "right") {
    mesh.position.set(CORRIDOR_W - 0.08, eyeY, absZ);
    mesh.rotation.y = -Math.PI / 2;
  } else {
    mesh.position.set(0, eyeY, absZ);
  }

  scene.add(mesh);

  // Sign frame using themeColor
  const frameGeo = new THREE.EdgesGeometry(geo);
  const frameMat = new THREE.LineBasicMaterial({ color: new THREE.Color(themeColor), transparent: true, opacity: 0.5 });
  const frame = new THREE.LineSegments(frameGeo, frameMat);
  mesh.add(frame);

  // Hanging wire using themeColor
  if (sign.side !== "center") {
    const pts = [];
    const topY = eyeY + signH / 2;
    pts.push(new THREE.Vector3(0, 0, 0));
    pts.push(new THREE.Vector3(0, CORRIDOR_H - topY, 0));
    const wireGeo = new THREE.BufferGeometry().setFromPoints(pts);
    const wireMat = new THREE.LineBasicMaterial({ color: new THREE.Color(themeColor), transparent: true, opacity: 0.5 });
    const wire = new THREE.Line(wireGeo, wireMat);
    wire.position.set(0, signH / 2, 0);
    mesh.add(wire);
  }
}

// Build all signs
SECTIONS.forEach(sec => {
  sec.signs.forEach(sign => placeSign(sec, sign));
});

// ──────────────────────────────────────────────────────────────
//  SIGN PROPS — Her tabelanın önüne konuya özel 3D nesne
// ──────────────────────────────────────────────────────────────
const animatedProps = []; // { mesh, type, baseY, phase }

function addProp(mesh, type, baseY, phase) {
  scene.add(mesh);
  animatedProps.push({ mesh, type, baseY: baseY ?? mesh.position.y, phase: phase ?? 0 });
}

function makeDNAHelix(color, z, side) {
  const g = new THREE.Group();
  const mat1 = new THREE.MeshBasicMaterial({ color });
  const mat2 = new THREE.MeshBasicMaterial({ color: 0xffffff });
  for (let i = 0; i < 20; i++) {
    const t = (i / 20) * Math.PI * 4;
    const s1 = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 6), mat1);
    s1.position.set(Math.cos(t) * 0.3, i * 0.1 - 1.0, Math.sin(t) * 0.3);
    g.add(s1);
    const s2 = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 6), mat2);
    s2.position.set(-Math.cos(t) * 0.3, i * 0.1 - 1.0, -Math.sin(t) * 0.3);
    g.add(s2);
    if (i % 3 === 0) {
      const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.6, 4), new THREE.MeshBasicMaterial({ color: 0x00ffee }));
      rod.position.set(0, i * 0.1 - 1.0, 0);
      rod.rotation.z = Math.PI / 2;
      rod.rotation.y = t;
      g.add(rod);
    }
  }
  const l = new THREE.PointLight(color, 2.0, 6);
  l.position.set(0, 0, 0);
  g.add(l);
  const x = side === "left" ? -2.5 : 2.5;
  g.position.set(x, 1.8, -z);
  return g;
}

function makeGear(color, z, side) {
  const g = new THREE.Group();
  const coreMat = new THREE.MeshBasicMaterial({ color });
  const toothMat = new THREE.MeshBasicMaterial({ color: 0xffaa00 });
  const core = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.12, 16), coreMat);
  g.add(core);
  for (let i = 0; i < 10; i++) {
    const angle = (i / 10) * Math.PI * 2;
    const tooth = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.12, 0.12), toothMat);
    tooth.position.set(Math.cos(angle) * 0.38, 0, Math.sin(angle) * 0.38);
    tooth.rotation.y = angle;
    g.add(tooth);
  }
  const hole = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.14, 12), new THREE.MeshBasicMaterial({ color: 0x000000 }));
  g.add(hole);
  const l = new THREE.PointLight(0xffa500, 2.0, 6);
  l.position.set(0, 0.2, 0);
  g.add(l);
  const x = side === "left" ? -2.8 : 2.8;
  g.position.set(x, 1.4, -z);
  g.rotation.x = Math.PI / 2;
  return g;
}

function makeRobotArm(z, side) {
  const g = new THREE.Group();
  const mat = new THREE.MeshBasicMaterial({ color: 0x00ffee });
  const jointMat = new THREE.MeshBasicMaterial({ color: 0xffee00 });
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.2, 0.1, 8), mat);
  g.add(base);
  const seg1 = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.5, 0.08), mat);
  seg1.position.y = 0.3;
  g.add(seg1);
  const joint = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), jointMat);
  joint.position.y = 0.55;
  g.add(joint);
  const seg2 = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.4, 0.06), mat);
  seg2.position.y = 0.75;
  seg2.rotation.z = 0.5;
  g.add(seg2);
  const claw1 = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.15, 0.04), jointMat);
  claw1.position.set(0.1, 0.95, 0);
  g.add(claw1);
  const claw2 = claw1.clone(); claw2.position.x = -0.1; g.add(claw2);
  const l = new THREE.PointLight(0x00ffee, 2.0, 6);
  l.position.set(0, 0.5, 0);
  g.add(l);
  const x = side === "left" ? -2.8 : 2.8;
  g.position.set(x, 0.5, -z);
  return g;
}

function makeQuantumSphere(z, side) {
  const g = new THREE.Group();
  const core = new THREE.Mesh(new THREE.SphereGeometry(0.22, 16, 12), new THREE.MeshBasicMaterial({ color: 0xcc44ff, wireframe: true }));
  g.add(core);
  const inner = new THREE.Mesh(new THREE.SphereGeometry(0.14, 12, 8), new THREE.MeshBasicMaterial({ color: 0xff44ee }));
  g.add(inner);
  for (let i = 0; i < 3; i++) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.018, 6, 40), new THREE.MeshBasicMaterial({ color: 0xcc44ff }));
    ring.rotation.x = (i / 3) * Math.PI;
    ring.rotation.y = (i / 3) * Math.PI * 0.7;
    g.add(ring);
  }
  const l = new THREE.PointLight(0xff44ee, 2.0, 7);
  l.position.set(0, 0, 0);
  g.add(l);
  const x = side === "left" ? -2.8 : 2.8;
  g.position.set(x, 1.6, -z);
  return g;
}

function makeEyeScanner(z, side) {
  const g = new THREE.Group();
  const iris = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.04, 8, 40), new THREE.MeshBasicMaterial({ color: 0xcc44ff }));
  g.add(iris);
  const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 8), new THREE.MeshBasicMaterial({ color: 0x440088 }));
  g.add(pupil);
  const glow = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 6), new THREE.MeshBasicMaterial({ color: 0xff44ee }));
  g.add(glow);
  const scanLine = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.02, 0.02), new THREE.MeshBasicMaterial({ color: 0xcc44ff }));
  scanLine.position.set(0, -0.28, 0);
  g.add(scanLine);
  const l = new THREE.PointLight(0xcc44ff, 2.0, 7);
  l.position.set(0, 0, 0);
  g.add(l);
  const x = side === "left" ? -2.8 : 2.8;
  g.position.set(x, 1.6, -z);
  return g;
}

function makeGlobe(z, side) {
  const g = new THREE.Group();
  const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.3, 16, 12), new THREE.MeshBasicMaterial({ color: 0x00ffee, wireframe: true }));
  g.add(sphere);
  const axis = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.75, 4), new THREE.MeshBasicMaterial({ color: 0xffffff }));
  axis.rotation.z = 0.4;
  g.add(axis);
  const l = new THREE.PointLight(0x00ffee, 2.0, 7);
  l.position.set(0, 0, 0);
  g.add(l);
  const x = side === "left" ? -2.8 : 2.8;
  g.position.set(x, 1.5, -z);
  return g;
}

function makeNewsStack(z, side) {
  const g = new THREE.Group();
  const pageMat1 = new THREE.MeshBasicMaterial({ color: 0xff00ff });
  const pageMat2 = new THREE.MeshBasicMaterial({ color: 0xffeeff });
  [0, 0.08, 0.16].forEach((dy, i) => {
    const page = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.65, 0.02), i === 0 ? pageMat1 : pageMat2);
    page.position.set(i * 0.04 - 0.04, dy, 0);
    page.rotation.z = (i - 1) * 0.08;
    g.add(page);
  });
  const l = new THREE.PointLight(0xff00ff, 2.0, 6);
  l.position.set(0, 0.2, 0);
  g.add(l);
  const x = side === "left" ? -2.8 : 2.8;
  g.position.set(x, 0.9, -z);
  return g;
}

function makeWifiAntenna(z, side) {
  const g = new THREE.Group();
  const base = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.04, 0.2), new THREE.MeshBasicMaterial({ color: 0x333333 }));
  g.add(base);
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.6, 6), new THREE.MeshBasicMaterial({ color: 0x888888 }));
  pole.position.y = 0.32;
  g.add(pole);
  [0.18, 0.32, 0.46].forEach((r, i) => {
    const arc = new THREE.Mesh(new THREE.TorusGeometry(r, 0.015, 4, 20, Math.PI), new THREE.MeshBasicMaterial({ color: 0x00ffee }));
    arc.position.y = 0.6 + i * 0.14;
    arc.rotation.y = Math.PI / 2;
    g.add(arc);
  });
  const l = new THREE.PointLight(0x00ffee, 2.0, 6);
  l.position.set(0, 0.5, 0);
  g.add(l);
  const x = side === "left" ? -2.8 : 2.8;
  g.position.set(x, 0.5, -z);
  return g;
}

function makeNetworkNodes(z, side) {
  const g = new THREE.Group();
  const positions = [
    [0, 0.5, 0], [-0.3, 0, 0.2], [0.3, 0, -0.2],
    [0, -0.4, 0.1], [-0.25, 0.3, -0.2], [0.25, 0.3, 0.2]
  ];
  const nodeMat = new THREE.MeshBasicMaterial({ color: 0xffee00 });
  const nodes = positions.map(([x, y, zz]) => {
    const n = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), nodeMat);
    n.position.set(x, y, zz);
    g.add(n);
    return new THREE.Vector3(x, y, zz);
  });
  const edgeMat = new THREE.LineBasicMaterial({ color: 0xffee00, transparent: true, opacity: 0.5 });
  [[0, 1], [0, 2], [1, 3], [2, 3], [0, 4], [0, 5]].forEach(([a, b]) => {
    const pts = [nodes[a], nodes[b]];
    g.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), edgeMat));
  });
  const l = new THREE.PointLight(0xffee00, 2.0, 7);
  l.position.set(0, 0, 0);
  g.add(l);
  const x = side === "left" ? -2.8 : 2.8;
  g.position.set(x, 1.4, -z);
  return g;
}

function makeGamepad(z, side) {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.28, 0.12), new THREE.MeshBasicMaterial({ color: 0xff0055 }));
  g.add(body);
  const lGrip = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.18, 0.1), new THREE.MeshBasicMaterial({ color: 0x222222 }));
  lGrip.position.set(-0.2, -0.18, 0); g.add(lGrip);
  const rGrip = lGrip.clone(); rGrip.position.x = 0.2; g.add(rGrip);
  [-0.1, 0.1].forEach(bx => {
    const btn = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 6), new THREE.MeshBasicMaterial({ color: 0x00ffee }));
    btn.position.set(0.16 + bx, 0.04, 0.07);
    g.add(btn);
  });
  const stick = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.06, 8), new THREE.MeshBasicMaterial({ color: 0xffee00 }));
  stick.position.set(-0.12, 0.02, 0.07); g.add(stick);
  const l = new THREE.PointLight(0xff0055, 2.0, 6);
  l.position.set(0, 0.2, 0);
  g.add(l);
  const x = side === "left" ? -2.8 : 2.8;
  g.position.set(x, 1.4, -z);
  return g;
}

function makeScrollBook(z, side) {
  const g = new THREE.Group();
  const cover = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.5, 0.06), new THREE.MeshBasicMaterial({ color: 0xff3333 }));
  g.add(cover);
  const page = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.46, 0.04), new THREE.MeshBasicMaterial({ color: 0xffffee }));
  page.position.z = 0.05; g.add(page);
  const spine = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.5, 0.06), new THREE.MeshBasicMaterial({ color: 0xcc1111 }));
  spine.position.x = -0.23; g.add(spine);
  const l = new THREE.PointLight(0xff3333, 2.0, 7);
  l.position.set(0, 0, 0.1);
  g.add(l);
  const x = side === "left" ? -2.8 : 2.8;
  g.position.set(x, 1.4, -z);
  return g;
}

function makeChipBoard(z, side) {
  const g = new THREE.Group();
  const board = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.36, 0.04), new THREE.MeshBasicMaterial({ color: 0x00aa44 }));
  g.add(board);
  const chip = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.14, 0.05), new THREE.MeshBasicMaterial({ color: 0x222222 }));
  g.add(chip);
  const chipEdge = new THREE.LineSegments(new THREE.EdgesGeometry(chip.geometry), new THREE.LineBasicMaterial({ color: 0xffee00 }));
  g.add(chipEdge);
  [[-0.2, 0.06], [0.2, 0.06], [-0.2, -0.06], [0.2, -0.06]].forEach(([x, y]) => {
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.06, 6), new THREE.MeshBasicMaterial({ color: 0xffffff }));
    cap.position.set(x, y, 0.04); cap.rotation.x = Math.PI / 2; g.add(cap);
  });
  const l = new THREE.PointLight(0x00ff66, 2.0, 7);
  l.position.set(0, 0, 0.15);
  g.add(l);
  const x = side === "left" ? -2.8 : 2.8;
  g.position.set(x, 1.6, -z);
  return g;
}

function makeRocketBadge(z, side) {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.5, 8), new THREE.MeshBasicMaterial({ color: 0x00ffee }));
  body.rotation.x = Math.PI; body.position.y = 0.2; g.add(body);
  const fin1 = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.18, 0.04), new THREE.MeshBasicMaterial({ color: 0xff0055 }));
  fin1.position.set(0.12, -0.08, 0); g.add(fin1);
  const fin2 = fin1.clone(); fin2.position.x = -0.12; g.add(fin2);
  const flame = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.2, 6), new THREE.MeshBasicMaterial({ color: 0xffaa00 }));
  flame.position.y = -0.3; g.add(flame);
  const l = new THREE.PointLight(0xff6600, 2.0, 7);
  l.position.set(0, -0.2, 0);
  g.add(l);
  const x = side === "left" ? -2.8 : 2.8;
  g.position.set(x, 1.0, -z);
  return g;
}

function makeDiplomaCert(z, side) {
  const g = new THREE.Group();
  const frame = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.4, 0.04), new THREE.MeshBasicMaterial({ color: 0xffa500 }));
  g.add(frame);
  const paper = new THREE.Mesh(new THREE.BoxGeometry(0.47, 0.33, 0.02), new THREE.MeshBasicMaterial({ color: 0xfff8dc }));
  paper.position.z = 0.03; g.add(paper);
  const seal = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.03, 12), new THREE.MeshBasicMaterial({ color: 0xff2222 }));
  seal.position.set(0.14, -0.08, 0.05); seal.rotation.x = Math.PI / 2; g.add(seal);
  const ribbon = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.12, 0.02), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
  ribbon.position.set(0.14, -0.02, 0.06); g.add(ribbon);
  const l = new THREE.PointLight(0xffa500, 2.0, 6);
  l.position.set(0, 0, 0.1);
  g.add(l);
  g.position.set(0, 1.4, -z);
  return g;
}

function makeTerminalBox(z, side) {
  const g = new THREE.Group();
  const screen = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.38, 0.04), new THREE.MeshBasicMaterial({ color: 0x002200 }));
  g.add(screen);
  const bezel = new THREE.LineSegments(new THREE.EdgesGeometry(screen.geometry), new THREE.LineBasicMaterial({ color: 0xffee00 }));
  g.add(bezel);
  [0.1, 0, -0.1].forEach((dy, i) => {
    const line = new THREE.Mesh(new THREE.BoxGeometry(0.3 - i * 0.05, 0.015, 0.01), new THREE.MeshBasicMaterial({ color: 0xffee00 }));
    line.position.set(-0.05, dy, 0.025); g.add(line);
  });
  const cursor = new THREE.Mesh(new THREE.BoxGeometry(0.025, 0.025, 0.01), new THREE.MeshBasicMaterial({ color: 0xffee00 }));
  cursor.position.set(0.1, -0.1, 0.025); g.add(cursor);
  const l = new THREE.PointLight(0xffee00, 2.0, 6);
  l.position.set(0, 0, 0.1);
  g.add(l);
  const x = side === "left" ? -2.8 : 2.8;
  g.position.set(x, 1.5, -z);
  return g;
}

function spawnSignProps() {
  // SECTIONS lookup by id
  const sec = {};
  SECTIONS.forEach(s => { sec[s.id] = s; });

  // ── EĞİTİM ──
  const egZ = sec.egitim.zStart;
  // Lisans → dönen diplomalı kitap
  const bookL = makeScrollBook(egZ + 0, "left");
  addProp(bookL, "floatSpin", 1.4, 0);
  // Kulüpler → dönen uydu
  const satG = new THREE.Group();
  const satBody = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.1, 0.12), new THREE.MeshStandardMaterial({ color: 0xaaaaaa, metalness: 0.9 }));
  satG.add(satBody);
  const panel1 = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.08, 0.02), new THREE.MeshBasicMaterial({ color: 0x2244ff }));
  panel1.position.x = 0.3; satG.add(panel1);
  const panel2 = panel1.clone(); panel2.position.x = -0.3; satG.add(panel2);
  const ant = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.22, 4), new THREE.MeshStandardMaterial({ color: 0xcccccc }));
  ant.position.y = 0.16; satG.add(ant);
  satG.position.set(2.8, 1.5, -(egZ + 14));
  addProp(satG, "spin", 1.5, 0.4);
  // Milli Teknoloji → çip
  const chipL = makeChipBoard(egZ + 28, "left");
  addProp(chipL, "floatSpin", 1.6, 1.2);

  // ── DENEYİM ──
  const denZ = sec.deneyim.zStart;
  // Marsias → roket
  const rocket = makeRocketBadge(denZ + 0, "left");
  addProp(rocket, "float", 1.0, 0);
  // Anticverse → beyin/AI
  const brainG = new THREE.Group();
  const brainMain = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 8), new THREE.MeshStandardMaterial({ color: 0x00ffee, wireframe: false, roughness: 0.3, emissive: 0x003333 }));
  brainG.add(brainMain);
  for (let i = 0; i < 8; i++) {
    const ax = (Math.random() - 0.5); const ay = (Math.random() - 0.5); const az = (Math.random() - 0.5);
    const len = Math.sqrt(ax * ax + ay * ay + az * az);
    const node = new THREE.Mesh(new THREE.SphereGeometry(0.04, 6, 4), new THREE.MeshBasicMaterial({ color: 0xaaff00 }));
    node.position.set(ax / len * 0.3, ay / len * 0.3, az / len * 0.3);
    brainG.add(node);
    const pts = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(ax / len * 0.3, ay / len * 0.3, az / len * 0.3)];
    brainG.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: 0x00ffee, transparent: true, opacity: 0.5 })));
  }
  brainG.position.set(2.8, 1.5, -(denZ + 18));
  addProp(brainG, "spin", 1.5, 0.3);
  // Bakanlık → çip
  const chipDen = makeChipBoard(denZ + 36, "left");
  addProp(chipDen, "floatSpin", 1.6, 1.0);
  // Social Group → robot kolu
  const armR = makeRobotArm(denZ + 54, "right");
  addProp(armR, "float", 0.5, 0.6);
  // Kaltun Group → terminal box
  const termKaltun = makeTerminalBox(denZ + 72, "left");
  addProp(termKaltun, "float", 1.5, 0.4);

  // ── PROJELER ──
  const prjZ = sec.projeler.zStart;
  // GenoVis → DNA helisi
  const dna = makeDNAHelix(0xcc44ff, prjZ + 0, "left");
  addProp(dna, "spinY", 1.8, 0);
  // Otonom Satış → robot kolu
  const arm = makeRobotArm(prjZ + 18, "right");
  addProp(arm, "armSwing", 0.5, 0.2);
  // Game OS → dönen dişli
  const gear = makeGear(0xcc44ff, prjZ + 36, "left");
  addProp(gear, "spin", 1.4, 0.1);
  // BB84 → kuantum küresi
  const qsphere = makeQuantumSphere(prjZ + 54, "right");
  addProp(qsphere, "spinMulti", 1.6, 0.0);
  // YOLOv5 → göz tarayıcı
  const eye = makeEyeScanner(prjZ + 72, "left");
  addProp(eye, "scanFloat", 1.6, 0.5);
  // Spanish Atlas → küre
  const globe = makeGlobe(prjZ + 90, "right");
  addProp(globe, "spin", 1.5, 0.8);
  // BBC News → gazete yığını
  const news = makeNewsStack(prjZ + 108, "left");
  addProp(news, "float", 0.9, 0.3);
  // IoT → Wi-Fi anten
  const wifi = makeWifiAntenna(prjZ + 126, "right");
  addProp(wifi, "float", 0.5, 0.7);
  // SkillFlow → ağ düğümleri
  const net = makeNetworkNodes(prjZ + 144, "left");
  addProp(net, "spinY", 1.4, 0.4);
  // Shopping Life → gamepad
  const gpad = makeGamepad(prjZ + 162, "right");
  addProp(gpad, "float", 1.4, 0.1);

  // ── SERTİFİKALAR ──
  const srtZ = sec.sertifikalar.zStart;
  [0, 14, 28, 42, 56].forEach((dz, i) => {
    const cert = makeDiplomaCert(srtZ + dz, "center");
    addProp(cert, "float", 1.4, i * 0.4);
    const starG = new THREE.Group();
    for (let j = 0; j < 5; j++) {
      const angle = (j / 5) * Math.PI * 2;
      const star = new THREE.Mesh(new THREE.OctahedronGeometry(0.08, 0), new THREE.MeshBasicMaterial({ color: 0xffa500 }));
      star.position.set(Math.cos(angle) * 0.5, Math.sin(angle) * 0.5, 0);
      starG.add(star);
    }
    starG.position.set(0, 2.6, -(srtZ + dz));
    addProp(starG, "spinY", 2.6, i * 0.2);
    const certLight = new THREE.PointLight(0xff8800, 1.5, 8);
    certLight.position.set(0, 2.0, -(srtZ + dz));
    scene.add(certLight);
  });

  // ── YETENEKLER ──
  const ytnZ = sec.yetenekler.zStart;
  // Programlama dilleri → terminal
  const term1 = makeTerminalBox(ytnZ + 0, "left");
  addProp(term1, "float", 1.5, 0);
  // Teknolojiler → dönen dişli seti
  const gearSet = new THREE.Group();
  const g1 = makeGear(0xffee00, 0, "center"); g1.position.set(0, 0, 0); gearSet.add(g1);
  const g2 = makeGear(0xffcc00, 0, "center"); g2.position.set(0.55, 0, 0); g2.rotation.y = Math.PI / 10; gearSet.add(g2);
  gearSet.position.set(2.8, 1.4, -(ytnZ + 14));
  addProp(gearSet, "gearPair", 1.4, 0);
  // VT → silindir/DB
  const dbG = new THREE.Group();
  [0, 0.18, 0.36].forEach(dy => {
    const cyl = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.12, 16), new THREE.MeshStandardMaterial({ color: 0xffee00, metalness: 0.6, roughness: 0.3 }));
    cyl.position.y = dy;
    dbG.add(cyl);
    const edge = new THREE.LineSegments(new THREE.EdgesGeometry(cyl.geometry), new THREE.LineBasicMaterial({ color: 0xffcc00 }));
    cyl.add(edge);
  });
  dbG.position.set(-2.8, 0.8, -(ytnZ + 28));
  addProp(dbG, "float", 0.8, 0.5);
  // Diller → dönen küre
  const langGlobe = makeGlobe(ytnZ + 42, "right");
  addProp(langGlobe, "spin", 1.5, 0.2);
  // İletişim → terminal
  const term2 = makeTerminalBox(ytnZ + 56, "left");
  addProp(term2, "float", 1.5, 1.1);
}

spawnSignProps();


// Section markers (floor glow strips)
SECTIONS.forEach(sec => {
  const geo = new THREE.PlaneGeometry(CORRIDOR_W * 2, 0.08);
  const mat = new THREE.MeshBasicMaterial({ color: 0x22ff66, transparent: true, opacity: 0.12 });
  const m = new THREE.Mesh(geo, mat);
  m.rotation.x = -Math.PI / 2;
  m.position.set(0, 0.02, -sec.zStart);
  scene.add(m);
});

// ──────────────────────────────────────────────────────────────
//  DOORS between sections (realistic hinge pivot)
// ──────────────────────────────────────────────────────────────
const doors = [];
const DOOR_W = 4.5; // Narrower door to prevent blocking the corridor wall signs
const DOOR_H = CORRIDOR_H;
const PANEL_W = (DOOR_W - 0.56) / 2;  // each panel width
const PANEL_H = DOOR_H - 0.05;
const PANEL_D = 0.08;

function makeDoor(zPos) {
  const group = new THREE.Group();
  group.position.set(0, 0, -zPos);

  // Frame material — dark metal
  const frameMat = new THREE.MeshStandardMaterial({ color: 0x112211, roughness: 0.5, metalness: 0.8, emissive: 0x001a08 });
  const panelMat = new THREE.MeshStandardMaterial({ color: 0x0a1a10, roughness: 0.6, metalness: 0.7, emissive: 0x051008 });
  const glowMat = new THREE.MeshBasicMaterial({ color: 0x44ff88, transparent: true, opacity: 0.9 });

  // Side wall partitions to close the gap between the narrower door frame and the 10m-wide corridor walls
  const wallWidth = (CORRIDOR_W * 2 - DOOR_W) / 2; // (10 - 4.5) / 2 = 2.75
  const wallGeo = new THREE.BoxGeometry(wallWidth, DOOR_H, 0.15);

  const lWallPartition = new THREE.Mesh(wallGeo, frameMat);
  lWallPartition.position.set(-CORRIDOR_W + wallWidth / 2, DOOR_H / 2, 0);
  group.add(lWallPartition);

  const rWallPartition = new THREE.Mesh(wallGeo, frameMat);
  rWallPartition.position.set(CORRIDOR_W - wallWidth / 2, DOOR_H / 2, 0);
  group.add(rWallPartition);

  // Pillars
  const pillarGeo = new THREE.BoxGeometry(0.28, DOOR_H + 0.3, 0.28);
  const lPillar = new THREE.Mesh(pillarGeo, frameMat);
  lPillar.position.set(-DOOR_W / 2 + 0.14, DOOR_H / 2, 0);
  group.add(lPillar);
  const rPillar = new THREE.Mesh(pillarGeo, frameMat);
  rPillar.position.set(DOOR_W / 2 - 0.14, DOOR_H / 2, 0);
  group.add(rPillar);

  // Top beam
  const topBeam = new THREE.Mesh(new THREE.BoxGeometry(DOOR_W, 0.28, 0.28), frameMat);
  topBeam.position.set(0, DOOR_H + 0.14, 0);
  group.add(topBeam);

  // Glow strips on pillars
  const stripGeo = new THREE.BoxGeometry(0.05, DOOR_H * 0.85, 0.05);
  [-DOOR_W / 2 + 0.05, DOOR_W / 2 - 0.05].forEach(x => {
    const strip = new THREE.Mesh(stripGeo, glowMat);
    strip.position.set(x, DOOR_H * 0.45, 0.14);
    group.add(strip);
  });

  // Horizontal scanner line on top beam
  const scanGeo = new THREE.BoxGeometry(DOOR_W - 0.6, 0.04, 0.05);
  const scan = new THREE.Mesh(scanGeo, glowMat);
  scan.position.set(0, DOOR_H - 0.04, 0.14);
  group.add(scan);

  // ── LEFT PANEL (slides left) ──
  const leftPanel = new THREE.Mesh(new THREE.BoxGeometry(PANEL_W, PANEL_H, PANEL_D), panelMat);
  leftPanel.position.set(-PANEL_W / 2, PANEL_H / 2, 0);
  // Panel detail lines
  const detailMat = new THREE.MeshBasicMaterial({ color: 0x22ff66, transparent: true, opacity: 0.3 });
  [0.25, 0.5, 0.75].forEach(frac => {
    const dg = new THREE.Mesh(new THREE.BoxGeometry(0.025, PANEL_H * 0.8, 0.025), detailMat);
    dg.position.set(-PANEL_W * (0.5 - frac), 0, PANEL_D / 2 + 0.01);
    leftPanel.add(dg);
  });
  group.add(leftPanel);

  // ── RIGHT PANEL (slides right) ──
  const rightPanel = new THREE.Mesh(new THREE.BoxGeometry(PANEL_W, PANEL_H, PANEL_D), panelMat);
  rightPanel.position.set(PANEL_W / 2, PANEL_H / 2, 0);
  [0.25, 0.5, 0.75].forEach(frac => {
    const dg = new THREE.Mesh(new THREE.BoxGeometry(0.025, PANEL_H * 0.8, 0.025), detailMat);
    dg.position.set(PANEL_W * (0.5 - frac), 0, PANEL_D / 2 + 0.01);
    rightPanel.add(dg);
  });
  group.add(rightPanel);

  // Door light
  const doorLight = new THREE.PointLight(0x44ff88, 2.0, 10);
  doorLight.position.set(0, DOOR_H * 0.6, 1);
  group.add(doorLight);

  scene.add(group);
  doors.push({ group, leftPanel, rightPanel, zPos, openAmount: 0 });
}

for (let i = 1; i < SECTIONS.length; i++) {
  makeDoor(SECTIONS[i].zStart - 4);
}
// Add final door at the end of Yetenekler
makeDoor(SECTIONS[SECTIONS.length - 1].zStart + 72);

function updateDoors(camZ) {
  const absZ = -camZ;
  doors.forEach(door => {
    const dist = Math.abs(absZ - door.zPos);
    const targetOpen = dist < 7 ? 1 : 0;
    door.openAmount += (targetOpen - door.openAmount) * 0.08;

    // Slide left/right panels horizontally out of the way
    const closedLeftX = -PANEL_W / 2;
    const openLeftX = -PANEL_W / 2 - PANEL_W;
    door.leftPanel.position.x = closedLeftX + (openLeftX - closedLeftX) * door.openAmount;

    const closedRightX = PANEL_W / 2;
    const openRightX = PANEL_W / 2 + PANEL_W;
    door.rightPanel.position.x = closedRightX + (openRightX - closedRightX) * door.openAmount;
  });
}

// ──────────────────────────────────────────────────────────────
//  ABSTRACT FUTURISTIC HOLOGRAPHIC CRYSTAL CORE
// ──────────────────────────────────────────────────────────────
const charGroup = new THREE.Group();

// ── Materials ──
const coreMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 1.0, roughness: 0.1, flatShading: true });
const shellMat = new THREE.MeshBasicMaterial({ color: 0x00ffee, wireframe: true, transparent: true, opacity: 0.65 });
const accentMat = new THREE.MeshStandardMaterial({ color: 0x00ff88, emissive: 0x00cc66, emissiveIntensity: 2.2, roughness: 0.25, metalness: 0.7 });
const satelliteMat = new THREE.MeshBasicMaterial({ color: 0x00ffee });

// ── Core Assembly ──
const helmet = new THREE.Group(); // Keep 'helmet' variable name to avoid editing animation references

// Inner Diamond Core
const diamondCore = new THREE.Mesh(new THREE.OctahedronGeometry(0.12, 0), coreMat);
helmet.add(diamondCore); // index 0

// Outer Wireframe Icosahedron Shell
const shell = new THREE.Mesh(new THREE.IcosahedronGeometry(0.18, 1), shellMat);
helmet.add(shell); // index 1

// Glowing Holographic Orbit Rings
const orbitGroup = new THREE.Group();
const ring1 = new THREE.Mesh(new THREE.TorusGeometry(0.26, 0.009, 8, 48), accentMat);
ring1.rotation.x = Math.PI / 3;
orbitGroup.add(ring1);
const ring2 = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.007, 8, 48), new THREE.MeshBasicMaterial({ color: 0xff00bb }));
ring2.rotation.x = -Math.PI / 4;
ring2.rotation.y = Math.PI / 6;
orbitGroup.add(ring2);
helmet.add(orbitGroup); // index 2

// Satellite Nodes orbiting the core
const satellites = [];
for (let i = 0; i < 4; i++) {
  const node = new THREE.Mesh(new THREE.SphereGeometry(0.018, 6, 6), satelliteMat);
  const angle = (i / 4) * Math.PI * 2;
  node.position.set(Math.cos(angle) * 0.32, 0, Math.sin(angle) * 0.32);
  helmet.add(node); // index 3 to 6
  satellites.push(node);
}

// Holographic Scanning Beam
const beamGeo = new THREE.ConeGeometry(0.24, 1.2, 16, 1, true);
const beamMat = new THREE.MeshBasicMaterial({ color: 0x00ffee, transparent: true, opacity: 0.12, side: THREE.DoubleSide });
const scanBeam = new THREE.Mesh(beamGeo, beamMat);
scanBeam.position.set(0, -0.6, 0);
helmet.add(scanBeam); // index 7

charGroup.add(helmet);

// ── CHARACTER GLOW LIGHT ──
const charLight = new THREE.PointLight(0x00e5ff, 1.8, 6);
charLight.position.set(0, 0.2, 0);
charGroup.add(charLight);

scene.add(charGroup);

// ──────────────────────────────────────────────────────────────
//  NAV DOTS
// ──────────────────────────────────────────────────────────────
const dotsEl = document.getElementById("nav-dots");
SECTIONS.forEach((sec, i) => {
  const d = document.createElement("div");
  d.className = "ndot" + (i === 0 ? " active" : "");
  d.setAttribute("data-label", sec.label);
  d.setAttribute("data-idx", i);
  d.addEventListener("click", () => jumpTo(sec.zStart));
  dotsEl.appendChild(d);
});

let currentAmbientIdx = -1;

// ── Section Ambiance Themes ──
const THEMES = [
  { // 0 Başlangıç — Neon Green
    name: "start",
    fog: new THREE.Color(0x000000),
    ambient: new THREE.Color(0x001a08),
    walkLamp: 0x88ffcc,
    charLamp: 0x00e5ff,
    fogNear: 80, fogFar: 200,
    hudColor: "rgba(100,255,150,0.9)"
  },
  { // 1 Eğitim — Deep blood red
    name: "egitim",
    fog: new THREE.Color(0x0d0000),
    ambient: new THREE.Color(0x1a0000),
    walkLamp: 0xff1111,
    charLamp: 0xff4444,
    fogNear: 80, fogFar: 200,
    hudColor: "rgba(255,60,60,0.9)"
  },
  { // 2 Deneyim — Electric cyan/teal
    name: "deneyim",
    fog: new THREE.Color(0x000d10),
    ambient: new THREE.Color(0x00100a),
    walkLamp: 0x00ffee,
    charLamp: 0xaaff00,
    fogNear: 80, fogFar: 200,
    hudColor: "rgba(0,255,200,0.9)"
  },
  { // 3 Projeler — Electric purple, rave
    name: "projeler",
    fog: new THREE.Color(0x080012),
    ambient: new THREE.Color(0x0d0022),
    walkLamp: 0xcc44ff,
    charLamp: 0xff44ee,
    fogNear: 80, fogFar: 200,
    hudColor: "rgba(200,80,255,0.9)"
  },
  { // 4 Sertifikalar — Warm orange/amber
    name: "sertifikalar",
    fog: new THREE.Color(0x0d0400),
    ambient: new THREE.Color(0x1a0800),
    walkLamp: 0xff8800,
    charLamp: 0xffaa00,
    fogNear: 80, fogFar: 200,
    hudColor: "rgba(255,150,0,0.9)"
  },
  { // 5 Yetenekler — Golden yellow
    name: "yetenekler",
    fog: new THREE.Color(0x0d0800),
    ambient: new THREE.Color(0x1a1000),
    walkLamp: 0xffee00,
    charLamp: 0xffcc00,
    fogNear: 80, fogFar: 200,
    hudColor: "rgba(255,230,0,0.9)"
  }
];

// Lerp & Speed helpers
let speedFactor = 0.0;
const trailParticles = [];

// Spawn 15 trail particles
for (let i = 0; i < 15; i++) {
  const pMesh = new THREE.Mesh(new THREE.SphereGeometry(0.012, 4, 4), new THREE.MeshBasicMaterial({ color: 0x00ffee, transparent: true, opacity: 0 }));
  scene.add(pMesh);
  trailParticles.push({ mesh: pMesh, life: Math.random(), offset: new THREE.Vector3() });
}


// Lerp helpers
const fogColorCurrent = new THREE.Color();
const ambColorCurrent = new THREE.Color();
let walkLampColorCurrent = new THREE.Color(0x88ffcc);
let charLampColorCurrent = new THREE.Color(0x00e5ff);

function applyTheme(idx, instant) {
  const theme = THEMES[Math.min(idx, THEMES.length - 1)];
  if (instant) {
    scene.fog.color.copy(theme.fog);
    renderer.setClearColor(theme.fog, 1);
    scene.fog.near = theme.fogNear;
    scene.fog.far = theme.fogFar;
    walkLampColorCurrent.set(theme.walkLamp);
    charLampColorCurrent.set(theme.charLamp);
  } else {
    scene.fog.color.lerp(theme.fog, 0.018);
    renderer.setClearColor(scene.fog.color, 1);
    scene.fog.near += (theme.fogNear - scene.fog.near) * 0.025;
    scene.fog.far += (theme.fogFar - scene.fog.far) * 0.025;
    walkLampColorCurrent.lerp(new THREE.Color(theme.walkLamp), 0.025);
    charLampColorCurrent.lerp(new THREE.Color(theme.charLamp), 0.025);
  }
  walkLight.color.copy(walkLampColorCurrent);
  charLight.color.copy(charLampColorCurrent);
  // Update HUD bar color
  document.getElementById("hud-bar").style.background =
    `linear-gradient(90deg, ${theme.hudColor}, transparent)`;
  document.getElementById("hud-section").style.color = theme.hudColor;
}

function updateDots(camZ) {
  const absZ = -camZ;
  let closest = 0, dist = Infinity;
  SECTIONS.forEach((sec, i) => {
    const d = Math.abs(sec.zStart - absZ);
    if (d < dist) { dist = d; closest = i; }
  });
  document.querySelectorAll(".ndot").forEach((d, i) => {
    d.classList.toggle("active", i === closest);
  });
  document.getElementById("hud-section").textContent = SECTIONS[closest]?.label || "";
  const pct = (absZ / (SECTIONS[SECTIONS.length - 1].zStart)) * 100;
  document.getElementById("hud-bar").style.width = Math.min(100, Math.max(0, pct)) + "%";

  // Apply ambiance for this section
  applyTheme(closest, false);
}

// ──────────────────────────────────────────────────────────────
//  WALK STATE
// ──────────────────────────────────────────────────────────────
let walking = false;
let camZTarget = camera.position.z;
let camZActual = camera.position.z;
const WALK_SPEED = 0.85;   // units/second
const MAX_Z = 5;
const MIN_Z = -(SECTIONS[SECTIONS.length - 1].zStart + 80);

let mouseX = 0, mouseY = 0;
let camYaw = 0, camPitch = 0;
let camYawTarget = 0, camPitchTarget = 0;
// Raycasting for clickable signs
const clickRaycaster = new THREE.Raycaster();
const clickMouse = new THREE.Vector2();

window.addEventListener("mousemove", e => {
  mouseX = (e.clientX / W() - 0.5) * 2;
  mouseY = (e.clientY / H() - 0.5) * 2;

  // Hover detection for clickable link areas
  let hoverLink = false;
  const intro = document.getElementById("intro");
  if (intro && intro.classList.contains("hidden")) {
    clickMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    clickMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    clickRaycaster.setFromCamera(clickMouse, camera);

    const clickableMeshes = [];
    scene.traverse(child => {
      if (child.isMesh && child.userData && child.userData.sign) {
        clickableMeshes.push(child);
      }
    });

    const intersects = clickRaycaster.intersectObjects(clickableMeshes);
    if (intersects.length > 0) {
      const hit = intersects[0];
      const mesh = hit.object;
      const sign = mesh.userData.sign;
      const section = mesh.userData.section;
      const localPoint = mesh.worldToLocal(hit.point.clone());
      const y = localPoint.y;

      if (section.id === "intro") {
        if (y >= -0.6 && y <= 0.3) hoverLink = true;
      } else if (section.id === "yetenekler" && sign.heading === "İLETİŞİM & BAĞLANTILAR") {
        if (y >= -0.8 && y <= 0.8) hoverLink = true;
      }
    }
  }
  document.body.style.cursor = hoverLink ? "pointer" : "default";
});

function jumpTo(sectionZStart) {
  camZTarget = -sectionZStart;
  camZTarget = Math.max(MIN_Z, Math.min(MAX_Z, camZTarget));
}

// Scroll to manually move
window.addEventListener("wheel", e => {
  e.preventDefault();
  camZTarget -= e.deltaY * 0.04;
  camZTarget = Math.max(MIN_Z, Math.min(MAX_Z, camZTarget));
}, { passive: false });

let touchY0 = null;
window.addEventListener("touchstart", e => { touchY0 = e.touches[0].clientY; }, { passive: true });
window.addEventListener("touchmove", e => {
  if (touchY0 === null) return;
  const dy = touchY0 - e.touches[0].clientY;
  touchY0 = e.touches[0].clientY;
  camZTarget -= dy * 0.05;
  camZTarget = Math.max(MIN_Z, Math.min(MAX_Z, camZTarget));
}, { passive: true });
window.addEventListener("touchend", () => { touchY0 = null; });

// ──────────────────────────────────────────────────────────────
//  PLAY BUTTON
// ──────────────────────────────────────────────────────────────
document.getElementById("play-btn").addEventListener("click", () => {
  document.getElementById("intro").classList.add("hidden");
  document.getElementById("hud").classList.remove("hidden");
  document.getElementById("nav-dots").classList.remove("hidden");
  document.getElementById("walk-toggle").classList.remove("hidden");
  applyTheme(0, true); // Apply start theme instantly
  walking = true;
});

// Sensitivity fixed at 35 (scale: 50 = 1.0×, so 35/50 = 0.70×)
const mouseSensitivity = 0.70;

// Pause / Resume toggle
const toggleBtn = document.getElementById("walk-toggle");
const iconPause = document.getElementById("icon-pause");
const iconPlay = document.getElementById("icon-play");
const toggleLabel = document.getElementById("toggle-label");

function setWalking(state) {
  walking = state;
  if (walking) {
    iconPause.style.display = "";
    iconPlay.style.display = "none";
    if (toggleLabel) toggleLabel.textContent = "Durdur";
  } else {
    iconPause.style.display = "none";
    iconPlay.style.display = "";
    if (toggleLabel) toggleLabel.textContent = "Devam Et";
  }
}

toggleBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // Avoid triggering full-screen click listener
  setWalking(!walking);
});

// Press Spacebar to pause/resume
window.addEventListener("keydown", e => {
  if (e.code === "Space") {
    const intro = document.getElementById("intro");
    if (intro && intro.classList.contains("hidden")) {
      e.preventDefault();
      setWalking(!walking);
    }
  }
});

// Click anywhere on the screen (except interactive HUD/dots/buttons) to pause/resume
function handleSignRaycast(event) {
  const intro = document.getElementById("intro");
  if (!intro || !intro.classList.contains("hidden")) return false;

  clickMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  clickMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  clickRaycaster.setFromCamera(clickMouse, camera);

  const clickableMeshes = [];
  scene.traverse(child => {
    if (child.isMesh && child.userData && child.userData.sign) {
      clickableMeshes.push(child);
    }
  });

  const intersects = clickRaycaster.intersectObjects(clickableMeshes);
  if (intersects.length > 0) {
    const hit = intersects[0];
    const mesh = hit.object;
    const sign = mesh.userData.sign;
    const section = mesh.userData.section;
    const localPoint = mesh.worldToLocal(hit.point.clone());
    const x = localPoint.x;
    const y = localPoint.y;

    if (section.id === "intro") {
      if (y >= 0.0 && y <= 0.3) {
        if (x < 0) {
          window.open("mailto:melihdemircan14@gmail.com", "_blank");
          return true;
        } else {
          window.open("tel:+905396390776", "_blank");
          return true;
        }
      } else if (y >= -0.3 && y < 0.0) {
        if (x < 0) {
          window.open("https://github.com/melihdemircann", "_blank");
          return true;
        } else {
          window.open("https://linkedin.com/in/melihdemircann", "_blank");
          return true;
        }
      } else if (y >= -0.6 && y < -0.3) {
        window.open("https://melihdemircann.github.io/my-site", "_blank");
        return true;
      }
    } else if (section.id === "yetenekler" && sign.heading === "İLETİŞİM & BAĞLANTILAR") {
      if (y >= 0.4 && y <= 0.8) {
        window.open("https://github.com/melihdemircann", "_blank");
        return true;
      } else if (y >= 0.0 && y < 0.4) {
        window.open("https://linkedin.com/in/melihdemircann", "_blank");
        return true;
      } else if (y >= -0.4 && y < 0.0) {
        window.open("https://melihdemircann.github.io/my-site", "_blank");
        return true;
      } else if (y >= -0.8 && y < -0.4) {
        window.open("tel:+905396390776", "_blank");
        return true;
      }
    }
  }
  return false;
}

window.addEventListener("click", e => {
  const intro = document.getElementById("intro");
  if (intro && intro.classList.contains("hidden")) {
    if (e.target.tagName !== "BUTTON" && !e.target.closest("button") && !e.target.closest("#nav-dots") && !e.target.closest("#hud")) {
      const wasLinkClicked = handleSignRaycast(e);
      if (!wasLinkClicked) {
        setWalking(!walking);
      }
    }
  }
});

// ──────────────────────────────────────────────────────────────
//  RENDER LOOP
// ──────────────────────────────────────────────────────────────
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), 0.05);
  const t = clock.getElapsedTime();

  // Animate custom 3D props
  animatedProps.forEach(p => {
    const pt = t + p.phase;

    // Check specific custom meshes for unique animations
    const hasCone = p.mesh.children.some(c => c.geometry && c.geometry.type === "ConeGeometry");
    const isGamepad = p.mesh.children.some(c => c.geometry && c.geometry.type === "BoxGeometry" && c.position.x !== 0 && Math.abs(c.position.x) > 0.15);
    const cursor = p.mesh.children.find(c => c.geometry && c.geometry.type === "BoxGeometry" && c.position.y < -0.05);
    const arcs = p.mesh.children.filter(c => c.geometry && c.geometry.type === "TorusGeometry");
    const nodes = p.mesh.children.filter(c => c.geometry && c.geometry.type === "SphereGeometry" && c.scale);

    if (hasCone && p.type === "float") {
      // 🚀 Rocket vibration and float
      p.mesh.position.y = p.baseY + Math.sin(pt * 3.5) * 0.12;
      p.mesh.position.x = -2.8 + (Math.random() - 0.5) * 0.02;
      p.mesh.rotation.z = Math.sin(pt * 9) * 0.06;
    } else if (isGamepad) {
      // 🎮 Gamepad tilt and float
      p.mesh.position.y = p.baseY + Math.sin(pt * 2.5) * 0.12;
      p.mesh.rotation.z = Math.sin(pt * 2) * 0.28;
      p.mesh.rotation.y = Math.cos(pt * 1.5) * 0.2;
    } else if (cursor) {
      // 🖥️ Terminal cursor blink and float
      p.mesh.position.y = p.baseY + Math.sin(pt * 1.5) * 0.08;
      cursor.visible = Math.floor(pt * 4) % 2 === 0;
    } else if (arcs.length > 0) {
      // 📶 Wifi antenna wave pulse
      p.mesh.position.y = p.baseY + Math.sin(pt * 1.5) * 0.05;
      arcs.forEach((arc, idx) => {
        const pulseTime = (pt * 2.2 - idx * 0.45) % 1.5;
        const scale = pulseTime > 0 ? 0.3 + pulseTime * 0.7 : 0.001;
        arc.scale.set(scale, scale, scale);
        if (arc.material) {
          arc.material.opacity = pulseTime > 0 ? 1.0 - pulseTime / 1.5 : 0;
          arc.material.transparent = true;
        }
      });
    } else if (nodes.length > 0 && p.type !== "spinMulti") {
      // 🕸️ Network nodes pulsating sizes
      p.mesh.position.y = p.baseY + Math.sin(pt * 1.5) * 0.08;
      nodes.forEach((n, idx) => {
        const sc = 1.0 + Math.sin(pt * 4.5 + idx * 0.7) * 0.3;
        n.scale.set(sc, sc, sc);
      });
    } else if (p.type === "floatSpin") {
      // 🧬 DNA helix/books/chips - float, spin and pulse scale
      p.mesh.position.y = p.baseY + Math.sin(pt * 2) * 0.15;
      p.mesh.rotation.y = pt * 1.8;
      const sc = 1.0 + Math.sin(pt * 3.5) * 0.06;
      p.mesh.scale.set(sc, sc, sc);
    } else if (p.type === "spin" || p.type === "spinY") {
      p.mesh.rotation.y = pt * 1.5;
      p.mesh.position.y = p.baseY + Math.sin(pt * 2) * 0.08;
    } else if (p.type === "float") {
      p.mesh.position.y = p.baseY + Math.sin(pt * 2) * 0.15;
    } else if (p.type === "spinMulti") {
      p.mesh.rotation.y = pt * 1.8;
      p.mesh.rotation.x = pt * 0.9;
    } else if (p.type === "scanFloat") {
      // 👁️ Eye Scanner float and scanline sweep
      p.mesh.position.y = p.baseY + Math.sin(pt * 2) * 0.08;
      const scanLine = p.mesh.children.find(c => c.geometry && c.geometry.type === "BoxGeometry");
      if (scanLine) {
        scanLine.position.y = Math.sin(pt * 4.5) * 0.28;
      }
    } else if (p.type === "armSwing") {
      // 🦾 Robot arm swinging
      p.mesh.position.y = p.baseY + Math.sin(pt * 2) * 0.04;
      const seg2 = p.mesh.children.find(c => c.rotation && c.rotation.z !== 0);
      if (seg2) {
        seg2.rotation.z = 0.5 + Math.sin(pt * 3) * 0.3;
      }
    } else if (p.type === "gearPair") {
      // ⚙️ Gear pair rotating oppositely
      if (p.mesh.children[0]) p.mesh.children[0].rotation.y = pt * 2.2;
      if (p.mesh.children[1]) p.mesh.children[1].rotation.y = -pt * 2.2;
    }
  });

  if (walking) {
    camZTarget -= WALK_SPEED * dt;
    camZTarget = Math.max(MIN_Z, camZTarget);
    if (camZTarget <= MIN_Z) {
      // Warp back to start position (loop infinitely)
      camZTarget = 5;
      camZActual = 5;
      camera.position.z = 5;
      charGroup.position.z = 5 - 3.2; // Keep character relative
      doors.forEach(door => {
        door.openAmount = 0;
      });
      applyTheme(0, true); // Reset ambiance instantly to Start
    }
  }

  // Smooth camera Z
  camZActual += (camZTarget - camZActual) * (walking ? 0.12 : 0.08);
  camera.position.z = camZActual;

  // Bob when walking
  if (walking) {
    camera.position.y = 1.7 + Math.sin(t * 5) * 0.022;
  } else {
    camera.position.y += (1.7 - camera.position.y) * 0.1;
  }

  // 360° Mouse look — virtual joystick with sensitivity control
  const deadzone = 0.12;
  if (Math.abs(mouseX) > deadzone) {
    const speedX = (mouseX - Math.sign(mouseX) * deadzone) * 1.2 * mouseSensitivity * dt;
    camYawTarget -= speedX;
  }
  if (Math.abs(mouseY) > deadzone) {
    const speedY = (mouseY - Math.sign(mouseY) * deadzone) * 0.85 * mouseSensitivity * dt;
    camPitchTarget -= speedY;
  }
  camPitchTarget = Math.max(-Math.PI * 0.42, Math.min(Math.PI * 0.42, camPitchTarget));

  camYaw += (camYawTarget - camYaw) * 0.1;
  camPitch += (camPitchTarget - camPitch) * 0.1;

  camera.rotation.order = 'YXZ';
  camera.rotation.y = camYaw;
  camera.rotation.x = camPitch;

  // Walk light follows camera
  walkLight.position.set(camera.position.x, camera.position.y + 0.5, camera.position.z - 1);

  // ── Abstract Futuristic Crystal Core animation ──
  const charZ = camZActual - 3.2;
  const headBob = 1.35 + Math.sin(t * 2.0) * 0.05;
  charGroup.position.set(Math.sin(camYaw) * 0.35, headBob, charZ);
  charGroup.rotation.y = camYaw + Math.PI; // always faces away from camera

  // Dynamic Speed Factor based on walk status
  const targetSpeedFactor = (walking && Math.abs(camZTarget - camZActual) > 0.05) ? 1.0 : 0.0;
  speedFactor += (targetSpeedFactor - speedFactor) * 0.08;

  // Rotate inner diamond core and apply speed stretch
  const coreMesh = helmet.children[0];
  if (coreMesh) {
    coreMesh.rotation.y = t * (2.0 + speedFactor * 3.0);
    const sc = 1.0 + Math.sin(t * 3.5) * 0.15;
    coreMesh.scale.set(
      sc * (1.0 - speedFactor * 0.2),
      sc * (1.0 - speedFactor * 0.2),
      sc * (1.0 + speedFactor * 0.45)
    );
  }

  // Rotate outer wireframe shell
  const shellMesh = helmet.children[1];
  if (shellMesh) {
    shellMesh.rotation.x = -t * (0.5 + speedFactor * 1.0);
    shellMesh.rotation.z = t * (0.8 + speedFactor * 1.5);
  }

  // Rotate orbital bands (spins faster with speed)
  if (orbitGroup) {
    orbitGroup.rotation.y = t * (1.5 + speedFactor * 3.5);
    orbitGroup.rotation.x = Math.sin(t) * 0.25;
  }

  // Orbit satellites
  helmet.children.forEach((c, idx) => {
    if (idx >= 3 && idx <= 6) {
      const angle = t * (2.0 + speedFactor * 4.0) + (idx * Math.PI / 2);
      c.position.set(Math.cos(angle) * 0.32, Math.sin(t * 3.0 + idx) * 0.08, Math.sin(angle) * 0.32);
    }
  });

  // Holographic scan beam scale pulsing
  const scanBeamMesh = helmet.children[7];
  if (scanBeamMesh) {
    const beamPulse = 1.0 + Math.sin(t * 4.0) * 0.12;
    scanBeamMesh.scale.set(beamPulse, 1.0, beamPulse);
    scanBeamMesh.material.opacity = 0.08 + Math.sin(t * 3.0) * 0.04;
  }

  // Animate trailing particles
  trailParticles.forEach(p => {
    p.life -= dt * 1.2;
    if (p.life <= 0) {
      p.life = 1.0;
      p.mesh.position.copy(charGroup.position);
      p.mesh.position.y += 0.2; // match core height
      p.offset.set((Math.random() - 0.5) * 0.15, (Math.random() - 0.5) * 0.15, (Math.random() - 0.5) * 0.15);
    }
    // Drift particles backwards relative to character movement
    p.mesh.position.z += WALK_SPEED * dt * 0.65;
    p.mesh.position.x += p.offset.x * dt;
    p.mesh.position.y += p.offset.y * dt;
    p.mesh.material.opacity = p.life * 0.75;
    const s = p.life;
    p.mesh.scale.set(s, s, s);
  });

  // Core light glow pulse
  charLight.intensity = 1.8 + Math.sin(t * 2.5) * 0.5;



  // ── Update doors ──
  updateDoors(camZActual);

  // ── HUD / dots ──
  updateDots(camZActual);

  renderer.render(scene, camera);
}

animate();
