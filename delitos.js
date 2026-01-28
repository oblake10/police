// =========================
// CATÁLOGO DELITOS
// =========================
const CRIMES = [
  // 01 Tráfico
  { category: "01 - Delitos de Tráfico", code: 114, name: "Matrícula falsa", severity: "Delito Menor", months: 5, fine: 1500, unit: false },

  // 02 Orden público
  { category: "02 - Orden público y convivencia", code: 209, name: "Circular en vía pública desnudo o semidesnudo", severity: "Infracción", months: 0, fine: 300, unit: false },
  { category: "02 - Orden público y convivencia", code: 211, name: "Negativa a identificarse", severity: "Delito Menor", months: 5, fine: 250, unit: true },
  { category: "02 - Orden público y convivencia", code: 215, name: "Vandalismo", severity: "Delito Menor", months: 5, fine: 500, unit: false },
  { category: "02 - Orden público y convivencia", code: 217, name: "Reyerta entre pandillas en vía pública", severity: "Delito Grave", months: 10, fine: 750, unit: false },

  // 03 Propiedad
  { category: "03 - Propiedad (Robos y hurtos)", code: 301, name: "Robo de vehículo", severity: "Delito Menor", months: 5, fine: 500, unit: false },
  { category: "03 - Propiedad (Robos y hurtos)", code: 304, name: "Robo a casa", severity: "Delito Grave", months: 10, fine: 950, unit: false },
  { category: "03 - Propiedad (Robos y hurtos)", code: 305, name: "Robo de peluquería, tienda de ropa o tatuajes", severity: "Delito Grave", months: 10, fine: 975, unit: false },
  { category: "03 - Propiedad (Robos y hurtos)", code: 313, name: "Robo a Ammu-Nation", severity: "Delito Grave", months: 15, fine: 10000, unit: false },
  { category: "03 - Propiedad (Robos y hurtos)", code: 314, name: "Robo de vehículo de importación", severity: "Delito Menor", months: 10, fine: 2500, unit: false },
  { category: "03 - Propiedad (Robos y hurtos)", code: 317, name: "Robo de vehículo Boosting", severity: "Delito Menor", months: 9, fine: 2800, unit: false },
  { category: "03 - Propiedad (Robos y hurtos)", code: 318, name: "Asalto a furgón Gruppe Sechs", severity: "Delito Grave", months: 40, fine: 22500, unit: false },

  // 04 Armas/Contrabando
  { category: "04 - Armas, explosivos y contrabando", code: 401, name: "Posesión de arma ilegal (blanca)", severity: "Delito Menor", months: 5, fine: 500, unit: false },
  { category: "04 - Armas, explosivos y contrabando", code: 402, name: "Posesión de arma de Clase 1", severity: "Delito Grave", months: 10, fine: 10000, unit: false },
  { category: "04 - Armas, explosivos y contrabando", code: 405, name: "Cargador de arma Clase 1", severity: "Delito Menor", months: 5, fine: 1000, unit: true },
  { category: "04 - Armas, explosivos y contrabando", code: 426, name: "Posesión de chaleco ligero", severity: "Delito Menor", months: 5, fine: 250, unit: true },
  { category: "04 - Armas, explosivos y contrabando", code: 428, name: "Posesión de contrabando en primer grado", severity: "Delito Menor", months: 5, fine: 250, unit: true },
  { category: "04 - Armas, explosivos y contrabando", code: 431, name: "Almacenamiento de armas blancas", severity: "Delito Grave", months: 35, fine: 12000, unit: false },
  { category: "04 - Armas, explosivos y contrabando", code: 432, name: "Almacenamiento de armas de fuego", severity: "Delito Grave", months: 60, fine: 120000, unit: false },
  { category: "04 - Armas, explosivos y contrabando", code: 615, name: "Uso ilegal de un arma de fuego", severity: "Delito Grave", months: 15, fine: 6000, unit: false },

  // 05 Drogas
  { category: "05 - Salud pública (Drogas)", code: 501, name: "Posesión de estupefacientes según cantidades", severity: "Infracción", months: 0, fine: 0, unit: false },
  { category: "05 - Salud pública (Drogas)", code: 502, name: "Posesión de porro de marihuana", severity: "Delito Menor", months: 0, fine: 50, unit: true },
  { category: "05 - Salud pública (Drogas)", code: 503, name: "Droga sintética", severity: "Delito Menor", months: 0, fine: 60, unit: true },
  { category: "05 - Salud pública (Drogas)", code: 504, name: "Droga natural", severity: "Delito Menor", months: 0, fine: 50, unit: true },
  { category: "05 - Salud pública (Drogas)", code: 505, name: "Retirada de estupefacientes destinados al consumo propio", severity: "Infracción", months: 0, fine: 0, unit: false },
  { category: "05 - Salud pública (Drogas)", code: 506, name: "Tráfico de drogas", severity: "Delito Grave", months: 30, fine: 500, unit: false },
  { category: "05 - Salud pública (Drogas)", code: 507, name: "Consumo de sustancias estupefacientes en vía pública o espacios restringidos", severity: "Infracción", months: 0, fine: 60, unit: false },
  { category: "05 - Salud pública (Drogas)", code: 508, name: "Paquete de marihuana", severity: "Delito Grave", months: 10, fine: 500, unit: true },
  { category: "05 - Salud pública (Drogas)", code: 509, name: "Paquete de fentanilo", severity: "Delito Grave", months: 10, fine: 550, unit: true },
  { category: "05 - Salud pública (Drogas)", code: 524, name: "Bolsa de marihuana", severity: "Delito Menor", months: 1, fine: 70, unit: true },

  // 06 Vida e integridad
  { category: "06 - Vida e integridad personal", code: 601, name: "Intento de secuestro", severity: "Delito Grave", months: 15, fine: 2000, unit: false },
  { category: "06 - Vida e integridad personal", code: 602, name: "Secuestro", severity: "Delito Grave", months: 30, fine: 3000, unit: false },

  // 07 Administración pública
  { category: "07 - Administración pública y funcionarios", code: 212, name: "Obstrucción a la justicia", severity: "Delito Menor", months: 8, fine: 800, unit: false },
  { category: "07 - Administración pública y funcionarios", code: 702, name: "Desobediencia a una autoridad", severity: "Delito Menor", months: 6, fine: 500, unit: true },
  { category: "07 - Administración pública y funcionarios", code: 703, name: "Insultar a un funcionario público", severity: "Delito Menor", months: 5, fine: 600, unit: true },
  { category: "07 - Administración pública y funcionarios", code: 707, name: "Huir de la justicia", severity: "Delito Menor", months: 5, fine: 500, unit: false },
  { category: "07 - Administración pública y funcionarios", code: 719, name: "Intento de homicidio a funcionario público", severity: "Delito Grave", months: 30, fine: 20000, unit: false },
  { category: "07 - Administración pública y funcionarios", code: 720, name: "Secuestro a funcionario público", severity: "Delito Grave", months: 25, fine: 16000, unit: false },
  { category: "07 - Administración pública y funcionarios", code: 721, name: "Fotografiar a un funcionario público", severity: "Delito Menor", months: 5, fine: 900, unit: false },
  { category: "07 - Administración pública y funcionarios", code: 722, name: "Intento de secuestro a un funcionario público", severity: "Delito Grave", months: 20, fine: 7000, unit: false },
  { category: "07 - Administración pública y funcionarios", code: 723, name: "Divulgación de fotografías de funcionario público", severity: "Delito Menor", months: 10, fine: 1800, unit: false },
  { category: "07 - Administración pública y funcionarios", code: 724, name: "Insultar o faltar al respeto reiteradas veces a un funcionario público", severity: "Delito Menor", months: 60, fine: 10000, unit: false },
  { category: "07 - Administración pública y funcionarios", code: 725, name: "No portar el Documento de Identificación (ID)", severity: "Infracción", months: 0, fine: 50, unit: false },

  // 10 Económicos
  { category: "10 - Delitos económicos y empresariales", code: 1006, name: "Lavado de dinero", severity: "Delito Grave", months: 15, fine: 0, unit: false },
  { category: "10 - Delitos económicos y empresariales", code: 1008, name: "Posesión de dinero sin declarar (> $1.000) [retirada del dinero]", severity: "Infracción", months: 0, fine: 0, unit: false },
  { category: "10 - Delitos económicos y empresariales", code: 1009, name: "Posesión de dinero sin declarar (entre $5.000 y $9.999)", severity: "Delito Menor", months: 5, fine: 500, unit: false },
  { category: "10 - Delitos económicos y empresariales", code: 1010, name: "Posesión de dinero sin declarar (> $10.000)", severity: "Delito Grave", months: 10, fine: 3500, unit: false },

  // 14 Informáticos
  { category: "14 - Delitos informáticos", code: 1401, name: "Posesión de dispositivos de hackeo", severity: "Infracción", months: 0, fine: 300, unit: false },
  { category: "14 - Delitos informáticos", code: 1402, name: "Utilización de dispositivos de hackeo", severity: "Delito Menor", months: 0, fine: 700, unit: false },
  { category: "14 - Delitos informáticos", code: 1403, name: "Acceso no autorizado a sistemas", severity: "Delito Menor", months: 0, fine: 700, unit: false },
  { category: "14 - Delitos informáticos", code: 1404, name: "Acceso no autorizado a sistemas informáticos", severity: "Delito Menor", months: 0, fine: 700, unit: false },
];


// =========================
// CATÁLOGO OBJETOS (compacto, con cantidad)
// categorías reducidas como pediste
// =========================
const OBJECTS = [
  // Droga
  { category: "Droga", id: "porro", name: "Porro", type: "normal" },
  { category: "Droga", id: "bolsa_maria", name: "Bolsa de maria", type: "normal" },
  { category: "Droga", id: "paquete_hierba", name: "Paquete de hierba", type: "normal" },

  // Armas blancas
  { category: "Armas blancas", id: "varilla_acero", name: "Varilla de acero", type: "normal" },
  { category: "Armas blancas", id: "machete", name: "Machete", type: "normal" },
  { category: "Armas blancas", id: "knife", name: "Knife", type: "normal" },
  { category: "Armas blancas", id: "bate", name: "Bate", type: "normal" },
  { category: "Armas blancas", id: "switchblade", name: "Switchblade", type: "normal" },
  { category: "Armas blancas", id: "machete_viejo", name: "Machete viejo", type: "normal" },
  { category: "Armas blancas", id: "tuberia", name: "Tubería", type: "normal" },

  // Armas clase 1 (incluye munición)
  { category: "Armas clase 1", id: "sns_pistol", name: "SNS Pistol", type: "normal" },
  { category: "Armas clase 1", id: "subnose_38", name: ".38 Subnose", type: "normal" },
  { category: "Armas clase 1", id: "balas_38_lc", name: "Balas .38 LC", type: "normal", note: "Cada 6 = 1 cargador" },
  { category: "Armas clase 1", id: "balas_45_acp", name: "Balas .45 ACP", type: "normal", note: "Cada 6 = 1 cargador" },
  { category: "Armas clase 1", id: "cargador_pistola", name: "Cargador de pistola", type: "normal" },

  // Chalecos
  { category: "Chalecos", id: "chaleco_ligero", name: "Chaleco ligero", type: "normal" },
  { category: "Chalecos", id: "placa_kevlar", name: "Placa de Kevlar", type: "normal" },

  // Coches: inhibidor + matrícula falsa
  { category: "Coches", id: "inhibidor_radar", name: "Inhibidor de radar", type: "normal" },
  { category: "Coches", id: "matricula_falsa_obj", name: "Matrícula falsa", type: "normal" },

  // Objetos robos menores (una fila por “subgrupo” dentro de esta categoría)
  { category: "Objetos robos menores", subgroup: "Peluquería", id: "peine", name: "Peine", type: "normal" },
  { category: "Objetos robos menores", subgroup: "Peluquería", id: "tijeras_peluqueria", name: "Tijeras de peluquería", type: "normal" },
  { category: "Objetos robos menores", subgroup: "Peluquería", id: "secador_pelo", name: "Secador de pelo", type: "normal" },
  { category: "Objetos robos menores", subgroup: "Peluquería", id: "espuma_afeitar", name: "Espuma de afeitar", type: "normal" },
  { category: "Objetos robos menores", subgroup: "Peluquería", id: "maquinilla_afeitar", name: "Maquinilla de afeitar", type: "normal" },

  { category: "Objetos robos menores", subgroup: "ATM", id: "taladro", name: "Taladro", type: "normal" },
  { category: "Objetos robos menores", subgroup: "ATM", id: "cuerdas", name: "Cuerdas", type: "normal" },

  { category: "Objetos robos menores", subgroup: "Digital Den", id: "laptop", name: "Laptop", type: "normal" },
  { category: "Objetos robos menores", subgroup: "Digital Den", id: "disco_duro", name: "Disco duro", type: "normal" },
  { category: "Objetos robos menores", subgroup: "Digital Den", id: "calculadora", name: "Calculadora", type: "normal" },
  { category: "Objetos robos menores", subgroup: "Digital Den", id: "teclado", name: "Teclado", type: "normal" },

  { category: "Objetos robos menores", subgroup: "Tienda de ropa", id: "ropa", name: "Ropa", type: "normal" },

  { category: "Objetos robos menores", subgroup: "Tienda de tatuajes", id: "pegamento", name: "Pegamento", type: "normal" },
  { category: "Objetos robos menores", subgroup: "Tienda de tatuajes", id: "tatu_maquinilla", name: "Maquinilla", type: "normal" },
  { category: "Objetos robos menores", subgroup: "Tienda de tatuajes", id: "tatu_tijeras", name: "Tijeras", type: "normal" },
  { category: "Objetos robos menores", subgroup: "Tienda de tatuajes", id: "tatu_calculadora", name: "Calculadora", type: "normal" },
  { category: "Objetos robos menores", subgroup: "Tienda de tatuajes", id: "tatu_teclado", name: "Teclado", type: "normal" },

  // Objetos robo mayores: (Armería que NO se repite + Joyería)
  { category: "Objetos robos mayores", subgroup: "Armería", id: "ammu_storage_key", name: "Ammu Storage Key", type: "normal" },
  { category: "Objetos robos mayores", subgroup: "Armería", id: "polvora", name: "Pólvora", type: "normal" },
  { category: "Objetos robos mayores", subgroup: "Armería", id: "cilindro_revolver", name: "Cilindro de revólver", type: "normal" },
  { category: "Objetos robos mayores", subgroup: "Armería", id: "cuerpo_revolver", name: "Cuerpo de revólver", type: "normal" },

  { category: "Objetos robos mayores", subgroup: "Joyería", id: "joyas", name: "Joyas", type: "normal" },
  { category: "Objetos robos mayores", subgroup: "Joyería", id: "rubi_rojo", name: "Rubí rojo", type: "normal" },
  { category: "Objetos robos mayores", subgroup: "Joyería", id: "banana_dorada", name: "Banana Dorada", type: "normal" },
  { category: "Objetos robos mayores", subgroup: "Joyería", id: "collar_rubi", name: "Collar de Rubí", type: "normal" },
  { category: "Objetos robos mayores", subgroup: "Joyería", id: "esmeralda", name: "Esmeralda", type: "normal" },
  { category: "Objetos robos mayores", subgroup: "Joyería", id: "cortador_vidrio", name: "Cortador de Vidrio", type: "normal" },
  { category: "Objetos robos mayores", subgroup: "Joyería", id: "cortador_cables", name: "Cortador de Cables", type: "normal" },
  { category: "Objetos robos mayores", subgroup: "Joyería", id: "estatua_pantera", name: "Estatua de Pantera", type: "normal" },

  // Dinero
  { category: "Dinero", id: "dinero", name: "Dinero", type: "money" },
  { category: "Dinero", id: "billetes_marcados", name: "Billetes marcados", type: "normal" },
];

// =========================
// Helpers
// =========================
const uniqueByCode = new Map();
for (const c of CRIMES) uniqueByCode.set(c.code, c);
const CRIMES_UNIQUE = [...uniqueByCode.values()].sort((a, b) => a.code - b.code);

const $ = (sel) => document.querySelector(sel);

const crimeListEl = $("#crimeList");
const objectListEl = $("#objectList");

const totalMonthsEl = $("#totalMonths");
const totalFineEl = $("#totalFine");

const breakdownBodyEl = $("#breakdownBody");
const breakdownObjectsBodyEl = $("#breakdownObjectsBody");

const btnReset = $("#btnReset");
const btnCopy = $("#btnCopy");
const btnOpenAll = $("#btnOpenAll");
const btnCloseAll = $("#btnCloseAll");
const qInput = $("#q");

const tabDelitos = $("#tabDelitos");
const tabObjetos = $("#tabObjetos");

const agentNameEl = $("#agentName");
const involvedNameEl = $("#involvedName");
const chkHisopoEl = $("#chkHisopo");
const chkGsrEl = $("#chkGsr");

function money(n) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n || 0);
}
function escapeHtml(s) {
  return String(s ?? "").replace(/[&<>"']/g, (m) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[m]));
}
function sevClass(sev) {
  const s = (sev || "").toLowerCase();
  if (s.includes("grave")) return "sev-grave";
  if (s.includes("infr")) return "sev-inf";
  return "sev-minor";
}
function groupByCategory(list) {
  const m = new Map();
  for (const x of list) {
    const key = x.category || "Sin categoría";
    if (!m.has(key)) m.set(key, []);
    m.get(key).push(x);
  }
  return m;
}

// =========================
// Estado
// =========================
const CrimeState = new Map(); // code -> { qty:number, checked:boolean }
function getCrimeState(code) {
  if (!CrimeState.has(code)) CrimeState.set(code, { qty: 0, checked: false });
  return CrimeState.get(code);
}

const ObjectState = new Map(); // id -> qty:number
function getObjQty(id) {
  if (!ObjectState.has(id)) ObjectState.set(id, 0);
  return ObjectState.get(id);
}
function setObjQty(id, qty) {
  ObjectState.set(id, qty);
}

// =========================
// Tabs
// =========================
let activeTab = "delitos";
function setTab(tab) {
  activeTab = tab;

  if (tab === "delitos") {
    tabDelitos.classList.add("active");
    tabObjetos.classList.remove("active");
    tabDelitos.setAttribute("aria-selected", "true");
    tabObjetos.setAttribute("aria-selected", "false");
    crimeListEl.classList.remove("hidden");
    objectListEl.classList.add("hidden");
  } else {
    tabObjetos.classList.add("active");
    tabDelitos.classList.remove("active");
    tabObjetos.setAttribute("aria-selected", "true");
    tabDelitos.setAttribute("aria-selected", "false");
    objectListEl.classList.remove("hidden");
    crimeListEl.classList.add("hidden");
  }

  render(qInput.value);
}

tabDelitos.addEventListener("click", () => setTab("delitos"));
tabObjetos.addEventListener("click", () => setTab("objetos"));

// =========================
// Render Delitos (2 columnas)
// =========================
function renderCrimes(filterText = "") {
  const ft = filterText.trim().toLowerCase();
  const filtered = CRIMES_UNIQUE.filter(c => {
    if (!ft) return true;
    return String(c.code).includes(ft)
      || (c.name || "").toLowerCase().includes(ft)
      || (c.category || "").toLowerCase().includes(ft);
  });

  const byCat = groupByCategory(filtered);
  crimeListEl.innerHTML = "";

  for (const [cat, items] of byCat.entries()) {
    items.sort((a, b) => a.code - b.code);

    const det = document.createElement("details");
    det.className = "cat";

    const sum = document.createElement("summary");
    sum.innerHTML = `
      <div class="catTitle"><span>📁 ${escapeHtml(cat)}</span></div>
      <span class="countPill">${items.length} items</span>
    `;

    const body = document.createElement("div");
    body.className = "catBody";

    const grid = document.createElement("div");
    grid.className = "crimeGrid";

    for (const c of items) {
      const st = getCrimeState(c.code);

      const row = document.createElement("div");
      row.className = "row";

      const left = document.createElement("div");
      left.className = "crime";
      left.innerHTML = `
        <div class="tag">${c.code}</div>
        <div class="meta">
          <div class="name">
            ${escapeHtml(c.name)}
            ${c.unit ? " <span class='muted' style='font-weight:900'>(por unidad / acumulable)</span>" : ""}
          </div>
          <div class="detailsLine">
            <span class="chip ${sevClass(c.severity)}">${escapeHtml(c.severity)}</span>
            <span class="chip">${c.months} mes${c.months === 1 ? "" : "es"}</span>
            <span class="chip">${money(c.fine)}</span>
          </div>
        </div>
      `;

      const right = document.createElement("div");
      right.className = "controls";

      if (c.unit) {
        right.innerHTML = `
          <input type="number" min="0" step="1"
            value="${st.qty}"
            inputmode="numeric"
            data-kind="crime-qty"
            data-code="${c.code}"
          />
        `;
      } else {
        right.innerHTML = `
          <label class="check">
            <span>Aplicar</span>
            <input type="checkbox"
              ${st.checked ? "checked" : ""}
              data-kind="crime-check"
              data-code="${c.code}"
            />
          </label>
        `;
      }

      row.appendChild(left);
      row.appendChild(right);
      grid.appendChild(row);
    }

    body.appendChild(grid);
    det.appendChild(sum);
    det.appendChild(body);
    crimeListEl.appendChild(det);
  }
}

// =========================
// Render Objetos (5 columnas)
// =========================
function renderObjects(filterText = "") {
  const ft = filterText.trim().toLowerCase();
  const filtered = OBJECTS.filter(o => {
    if (!ft) return true;
    return (o.name || "").toLowerCase().includes(ft)
      || (o.category || "").toLowerCase().includes(ft)
      || (o.subgroup || "").toLowerCase().includes(ft);
  });

  const byCat = groupByCategory(filtered);
  objectListEl.innerHTML = "";

  for (const [cat, items] of byCat.entries()) {
    // subgrupos dentro de categoría (para “robos menores/mayores”)
    const bySub = new Map();
    for (const it of items) {
      const key = it.subgroup || "";
      if (!bySub.has(key)) bySub.set(key, []);
      bySub.get(key).push(it);
    }

    const det = document.createElement("details");
    det.className = "cat";

    const sum = document.createElement("summary");
    sum.innerHTML = `
      <div class="catTitle"><span>📁 ${escapeHtml(cat)}</span></div>
      <span class="countPill">${items.length} items</span>
    `;

    const body = document.createElement("div");
    body.className = "catBody";

    for (const [sub, arr] of bySub.entries()) {
      arr.sort((a, b) => a.name.localeCompare(b.name, "es"));

      if (sub) {
        const h = document.createElement("div");
        h.style.margin = "10px 6px 6px";
        h.style.color = "var(--muted)";
        h.style.fontWeight = "900";
        h.style.letterSpacing = ".2px";
        h.textContent = sub.toUpperCase();
        body.appendChild(h);
      }

      const grid = document.createElement("div");
      grid.className = "objGrid";

      for (const o of arr) {
        const qty = getObjQty(o.id);

        const card = document.createElement("div");
        card.className = "objItem";

        const note = o.note ? `<div class="objNote">${escapeHtml(o.note)}</div>` : "";

        card.innerHTML = `
          <div class="objName">${escapeHtml(o.name)}</div>
          ${note}
          <input class="objQty" type="number" min="0" step="1"
            value="${qty}"
            inputmode="numeric"
            data-kind="obj-qty"
            data-oid="${escapeHtml(o.id)}"
            placeholder="${o.type === "money" ? "USD" : "0"}"
          />
        `;

        grid.appendChild(card);
      }

      body.appendChild(grid);
    }

    det.appendChild(sum);
    det.appendChild(body);
    objectListEl.appendChild(det);
  }
}

// =========================
// Render general
// =========================
function render(filterText = "") {
  if (activeTab === "delitos") renderCrimes(filterText);
  else renderObjects(filterText);

  recalc();
  recalcObjectsBreakdown();
}

// =========================
// Eventos: input
// =========================
document.addEventListener("input", (e) => {
  const t = e.target;

  // Delitos qty
  if (t?.getAttribute("data-kind") === "crime-qty") {
    const code = Number(t.getAttribute("data-code"));
    const st = getCrimeState(code);
    const v = parseInt(t.value || "0", 10);
    st.qty = (isNaN(v) || v < 0) ? 0 : v;
    t.value = st.qty;
    recalc();
    return;
  }

  // Objetos qty
  if (t?.getAttribute("data-kind") === "obj-qty") {
    const id = t.getAttribute("data-oid");
    const v = parseInt(t.value || "0", 10);
    const qty = (isNaN(v) || v < 0) ? 0 : v;
    setObjQty(id, qty);
    t.value = qty;

    recalcObjectsBreakdown();
    return;
  }
});

// Eventos: change (checkbox)
document.addEventListener("change", (e) => {
  const t = e.target;
  if (t?.getAttribute("data-kind") === "crime-check") {
    const code = Number(t.getAttribute("data-code"));
    const st = getCrimeState(code);
    st.checked = !!t.checked;
    recalc();
  }
});

// “Seguro” extra por si algún click no dispara change (a veces pasa con overlays/labels)
document.addEventListener("click", (e) => {
  const t = e.target;
  if (t?.getAttribute("data-kind") === "crime-check") {
    const code = Number(t.getAttribute("data-code"));
    const st = getCrimeState(code);
    st.checked = !!t.checked;
    recalc();
  }
});

// =========================
// Cálculo delitos + desglose con X
// =========================
function recalc() {
  let months = 0;
  let fine = 0;
  const lines = [];

  for (const c of CRIMES_UNIQUE) {
    const st = getCrimeState(c.code);
    const qty = c.unit ? st.qty : (st.checked ? 1 : 0);
    if (!qty) continue;

    const m = (c.months || 0) * qty;
    const f = (c.fine || 0) * qty;

    months += m;
    fine += f;

    const leftTxt = c.unit
      ? `${c.code} - ${c.name} x${qty}`
      : `${c.code} - ${c.name}`;

    lines.push({ code: c.code, left: leftTxt, right: `${m}m • ${money(f)}` });
  }

  totalMonthsEl.textContent = `${months} meses`;
  totalFineEl.textContent = money(fine);

  if (!lines.length) {
    breakdownBodyEl.classList.add("muted");
    breakdownBodyEl.textContent = "Selecciona delitos para ver el detalle.";
    return;
  }

  breakdownBodyEl.classList.remove("muted");
  breakdownBodyEl.innerHTML =
    lines.map(l => `
      <div class="line">
        <div class="lineLeft">
          <span>${escapeHtml(l.left)}</span>
        </div>
        <div style="display:flex; gap:10px; align-items:center;">
          <span>${escapeHtml(l.right)}</span>
          <button class="removeBtn" title="Quitar" data-remove-code="${l.code}">×</button>
        </div>
      </div>
    `).join("") +
    `<div class="line" style="font-weight:900">
      <span>TOTAL</span>
      <span>${months}m • ${money(fine)}</span>
    </div>`;
}

// =========================
// Desglose objetos + X + cálculo cargadores (cada 6 balas)
// =========================
function buildObjectsInline() {
  const parts = [];

  for (const o of OBJECTS) {
    const qty = getObjQty(o.id);
    if (!qty) continue;

    if (o.type === "money") {
      parts.push(`${money(qty)} Dinero`);
      continue;
    }

    parts.push(`x${qty} ${o.name}`);
  }

  return parts.length ? parts.join(" + ") : "-";
}



function recalcObjectsBreakdown() {
  const lines = [];

  for (const o of OBJECTS) {
    const qty = getObjQty(o.id);
    if (!qty) continue;

    const left = o.type === "money"
      ? `${o.name}: ${money(qty)}`
      : `${o.name} x${qty}`;

    lines.push({ id: o.id, left });
  }

  if (!lines.length) {
    breakdownObjectsBodyEl.classList.add("muted");
    breakdownObjectsBodyEl.textContent = "Añade objetos para ver el detalle.";
    return;
  }

  breakdownObjectsBodyEl.classList.remove("muted");
  breakdownObjectsBodyEl.innerHTML =
    lines.map(l => `
      <div class="line">
        <div class="lineLeft">
          <span>${escapeHtml(l.left)}</span>
        </div>
        <div style="display:flex; gap:10px; align-items:center;">
          <button class="removeBtn" title="Quitar" data-remove-oid="${escapeHtml(l.id)}">×</button>
        </div>
      </div>
    `).join("");
}

// =========================
// Quitar con X (Delitos y Objetos)
// =========================
document.addEventListener("click", (e) => {
  const btnCrime = e.target.closest("[data-remove-code]");
  if (btnCrime) {
    const code = Number(btnCrime.getAttribute("data-remove-code"));
    const crime = CRIMES_UNIQUE.find(c => c.code === code);
    if (!crime) return;

    const st = getCrimeState(code);
    if (crime.unit) st.qty = 0;
    else st.checked = false;

    render(qInput.value);
    return;
  }

  const btnObj = e.target.closest("[data-remove-oid]");
  if (btnObj) {
    const id = btnObj.getAttribute("data-remove-oid");
    if (!id) return;
    setObjQty(id, 0);
    render(qInput.value);
  }
});

// =========================
// Copiar plantilla (formato exacto)
// =========================
btnCopy.addEventListener("click", async () => {
  let months = 0, fine = 0;

  // Articulos a imputar en un solo renglón con +
  const parts = [];

  for (const c of CRIMES_UNIQUE) {
    const st = getCrimeState(c.code);
    const qty = c.unit ? st.qty : (st.checked ? 1 : 0);
    if (!qty) continue;

    const m = (c.months || 0) * qty;
    const f = (c.fine || 0) * qty;
    months += m;
    fine += f;

    // Formato pedido:
    // Art. 114 - Matrícula falsa
    // 54x Art. 503 - Droga sintética
    const piece = c.unit
      ? `${qty}x Art. ${c.code} - ${c.name}`
      : `Art. ${c.code} - ${c.name}`;

    parts.push(piece);
  }

  const articulosLinea = parts.length ? parts.join(" + ") : "-";

  const agente = (agentNameEl?.value || "").trim() || "PO III Shannon Callahan";
  const involucrado = (involvedNameEl?.value || "").trim() || "-";

  const notas = [];
  if (chkHisopoEl?.checked) notas.push("Hisopo hecho");
  if (chkGsrEl?.checked) notas.push("GSR positivo");

  const objetosTxt = buildObjectsInline();

  const template =
`| Agente: ${agente}
| Objetos retirados: ${objetosTxt}
| Involucrado: ${involucrado}
| Articulos a imputar:

${articulosLinea}
| Total: ${money(fine)} y ${months} meses
| Notas: ${notas.length ? notas.join(" y ") : "-"}`;

  try {
    await navigator.clipboard.writeText(template);
    const old = btnCopy.textContent;
    btnCopy.textContent = "Copiado ✅";
    setTimeout(() => (btnCopy.textContent = old), 1200);
  } catch {
    prompt("Copia el texto:", template);
  }
});

// =========================
// Botones UI
// =========================
btnReset.addEventListener("click", () => {
  CrimeState.clear();
  ObjectState.clear();
  qInput.value = "";
  agentNameEl.value = "";
  involvedNameEl.value = "";
  chkHisopoEl.checked = false;
  chkGsrEl.checked = false;
  render("");
});

btnOpenAll.addEventListener("click", () => {
  const root = activeTab === "delitos" ? crimeListEl : objectListEl;
  root.querySelectorAll("details.cat").forEach(d => d.open = true);
});
btnCloseAll.addEventListener("click", () => {
  const root = activeTab === "delitos" ? crimeListEl : objectListEl;
  root.querySelectorAll("details.cat").forEach(d => d.open = false);
});
qInput.addEventListener("input", () => render(qInput.value));

// INIT
setTab("delitos");
render("");
