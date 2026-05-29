// =========================
// CATÁLOGO DELITOS
// =========================
 const CRIMES = [

  // =========================
  // 01 - DELITOS DE TRÁFICO
  // =========================
  { category: "01 - Delitos de Tráfico", code: 108, name: "Saltar u omitir un control de tráfico", severity: "Delito Menor", months: 8, fine: 1575, unit: false },
  { category: "01 - Delitos de Tráfico", code: 110, name: "Conducción temeraria / maniobras agresivas", severity: "Delito Menor", months: 6, fine: 500, unit: false },
  { category: "01 - Delitos de Tráfico", code: 111, name: "Conducir bajo efectos de drogas o alcohol", severity: "Delito Menor", months: 7, fine: 1800, unit: false },
  { category: "01 - Delitos de Tráfico", code: 114, name: "Matrícula falsa", severity: "Delito Menor", months: 5, fine: 1500, unit: false },
  { category: "01 - Delitos de Tráfico", code: 115, name: "Carreras ilegales", severity: "Delito Menor", months: 10, fine: 2500, unit: false },
  { category: "01 - Delitos de Tráfico", code: 117, name: "Saltarse un cordón policial", severity: "Delito Menor", months: 10, fine: 3000, unit: false },
  { category: "01 - Delitos de Tráfico", code: 118, name: "Mal uso de un vehículo de alquiler", severity: "Delito Menor", months: 15, fine: 2500, unit: false },
  { category: "01 - Delitos de Tráfico", code: 127, name: "Exceso de velocidad en segundo grado", severity: "Delito Menor", months: 0, fine: 150, unit: false },
  { category: "01 - Delitos de Tráfico", code: 129, name: "Conducir sin licencia", severity: "Delito Menor", months: 0, fine: 1000, unit: false },
  { category: "01 - Delitos de Tráfico", code: 130, name: "Circular sin matrícula", severity: "Delito Menor", months: 10, fine: 1000, unit: false },
  { category: "01 - Delitos de Tráfico", code: 101, name: "Exceso de ruido en vía pública", severity: "Infracción", months: 0, fine: 75, unit: false },
  { category: "01 - Delitos de Tráfico", code: 102, name: "Giro indebido", severity: "Infracción", months: 0, fine: 100, unit: false },
  { category: "01 - Delitos de Tráfico", code: 103, name: "Conducir en dirección contraria", severity: "Infracción", months: 0, fine: 125, unit: false },
  { category: "01 - Delitos de Tráfico", code: 104, name: "Estacionar obstruyendo circulación", severity: "Infracción", months: 0, fine: 125, unit: false },
  { category: "01 - Delitos de Tráfico", code: 105, name: "Saltarse un semáforo", severity: "Infracción", months: 0, fine: 88, unit: false },
  { category: "01 - Delitos de Tráfico", code: 106, name: "No ceder paso a vehículos de emergencia", severity: "Infracción", months: 0, fine: 88, unit: false },
  { category: "01 - Delitos de Tráfico", code: 107, name: "Ignorar señales de agentes", severity: "Infracción", months: 0, fine: 158, unit: false },
  { category: "01 - Delitos de Tráfico", code: 112, name: "Circular con luces apagadas en condiciones adversas", severity: "Infracción", months: 0, fine: 90, unit: false },
  { category: "01 - Delitos de Tráfico", code: 113, name: "Circular sin casco en motocicleta", severity: "Infracción", months: 0, fine: 58, unit: false },
  { category: "01 - Delitos de Tráfico", code: 116, name: "Circular con vehículo en mal estado", severity: "Infracción", months: 0, fine: 100, unit: false },
  { category: "01 - Delitos de Tráfico", code: 119, name: "Circular por zonas peatonales", severity: "Infracción", months: 0, fine: 25, unit: false },
  { category: "01 - Delitos de Tráfico", code: 120, name: "Bloquear boca de incendios", severity: "Infracción", months: 0, fine: 75, unit: false },
  { category: "01 - Delitos de Tráfico", code: 121, name: "Estacionamiento indebido", severity: "Infracción", months: 0, fine: 100, unit: false },
  { category: "01 - Delitos de Tráfico", code: 122, name: "Estacionar en sentido contrario", severity: "Infracción", months: 0, fine: 75, unit: false },
  { category: "01 - Delitos de Tráfico", code: 123, name: "Conducción negligente", severity: "Infracción", months: 0, fine: 175, unit: false },
  { category: "01 - Delitos de Tráfico", code: 124, name: "Estacionar sobre la acera", severity: "Infracción", months: 0, fine: 25, unit: false },
  { category: "01 - Delitos de Tráfico", code: 125, name: "Estacionar cerca de un cruce", severity: "Infracción", months: 0, fine: 38, unit: false },
  { category: "01 - Delitos de Tráfico", code: 126, name: "Exceso de velocidad en tercer grado", severity: "Infracción", months: 0, fine: 100, unit: false },
  { category: "01 - Delitos de Tráfico", code: 128, name: "Exceso de velocidad en primer grado", severity: "Delito Grave", months: 15, fine: 1000, unit: false },
  { category: "01 - Delitos de Tráfico", code: 109, name: "Cruzarse la calle indebidamente", severity: "Infracción", months: 0, fine: 25, unit: false },
  { category: "01 - Delitos de Tráfico", code: 131, name: "Adelantamiento indebido", severity: "Infracción", months: 0, fine: 200, unit: false },

  // =========================
  // 02 - ORDEN PÚBLICO
  // =========================
  { category: "02 - Orden público y convivencia", code: 201, name: "Disturbios en vía pública", severity: "Delito Menor", months: 5, fine: 550, unit: false },
  { category: "02 - Orden público y convivencia", code: 202, name: "Alteración del orden público", severity: "Delito Menor", months: 5, fine: 500, unit: false },
  { category: "02 - Orden público y convivencia", code: 205, name: "Dañar mobiliario urbano", severity: "Delito Menor", months: 5, fine: 500, unit: false },
  { category: "02 - Orden público y convivencia", code: 206, name: "Acoso psicológico", severity: "Delito Menor", months: 5, fine: 600, unit: false },
  { category: "02 - Orden público y convivencia", code: 208, name: "Circular con rostro oculto", severity: "Delito Menor", months: 0, fine: 75, unit: false },
  { category: "02 - Orden público y convivencia", code: 210, name: "Violar orden de alejamiento", severity: "Delito Menor", months: 10, fine: 1000, unit: false },
  { category: "02 - Orden público y convivencia", code: 211, name: "Negativa a identificarse", severity: "Delito Menor", months: 5, fine: 250, unit: true },
  { category: "02 - Orden público y convivencia", code: 212, name: "Obstrucción a la justicia", severity: "Delito Menor", months: 15, fine: 2500, unit: false },
  { category: "02 - Orden público y convivencia", code: 213, name: "Agresión", severity: "Delito Menor", months: 6, fine: 875, unit: false },
  { category: "02 - Orden público y convivencia", code: 214, name: "Falso testimonio", severity: "Delito Menor", months: 20, fine: 5000, unit: false },
  { category: "02 - Orden público y convivencia", code: 215, name: "Vandalismo", severity: "Delito Menor", months: 5, fine: 500, unit: false },
  { category: "02 - Orden público y convivencia", code: 203, name: "Delito de odio", severity: "Delito Menor", months: 5, fine: 700, unit: false },
  { category: "02 - Orden público y convivencia", code: 204, name: "Faltas de respeto a otro civil", severity: "Infracción", months: 0, fine: 150, unit: false },
  { category: "02 - Orden público y convivencia", code: 216, name: "Tirar basura en vía pública", severity: "Infracción", months: 0, fine: 40, unit: false },
  { category: "02 - Orden público y convivencia", code: 218, name: "Hurgar en la basura", severity: "Infracción", months: 0, fine: 50, unit: false },
  { category: "02 - Orden público y convivencia", code: 209, name: "Circular desnudo o semidesnudo", severity: "Infracción", months: 0, fine: 300, unit: false },
  { category: "02 - Orden público y convivencia", code: 207, name: "Usurpación de identidad", severity: "Delito Grave", months: 25, fine: 2000, unit: false },
  { category: "02 - Orden público y convivencia", code: 217, name: "Reyerta entre pandillas", severity: "Delito Grave", months: 15, fine: 2000, unit: false },

  // =========================
  // 03 - PROPIEDAD
  // =========================
  { category: "03 - Propiedad (Robos y hurtos)", code: 301, name: "Robo de vehículo", severity: "Delito Menor", months: 5, fine: 500, unit: false },
  { category: "03 - Propiedad (Robos y hurtos)", code: 303, name: "Asalto a un civil", severity: "Delito Menor", months: 5, fine: 795, unit: false },
  { category: "03 - Propiedad (Robos y hurtos)", code: 310, name: "Allanamiento de morada", severity: "Delito Menor", months: 15, fine: 2500, unit: false },
  { category: "03 - Propiedad (Robos y hurtos)", code: 314, name: "Robo de vehículo de importación", severity: "Delito Menor", months: 10, fine: 2500, unit: false },
  { category: "03 - Propiedad (Robos y hurtos)", code: 315, name: "Hurto", severity: "Delito Menor", months: 5, fine: 500, unit: false },
  { category: "03 - Propiedad (Robos y hurtos)", code: 317, name: "Robo de vehículo Boosting", severity: "Delito Menor", months: 9, fine: 2800, unit: false },
  { category: "03 - Propiedad (Robos y hurtos)", code: 302, name: "Sustracción de bienes", severity: "Delito Menor", months: 5, fine: 400, unit: false },
  { category: "03 - Propiedad (Robos y hurtos)", code: 322, name: "Robo a ATM", severity: "Delito Menor", months: 10, fine: 1000, unit: false },
  { category: "03 - Propiedad (Robos y hurtos)", code: 319, name: "Robo a tienda DigitalDen", severity: "Delito Menor", months: 10, fine: 1000, unit: false },
  { category: "03 - Propiedad (Robos y hurtos)", code: 323, name: "Manipulación de un vehículo", severity: "Delito Menor", months: 5, fine: 500, unit: false },
  { category: "03 - Propiedad (Robos y hurtos)", code: 324, name: "Robo de artículos de coleccionismo", severity: "Delito Menor", months: 20, fine: 20000, unit: false },
  { category: "03 - Propiedad (Robos y hurtos)", code: 327, name: "Robo de vehículo de alto valor", severity: "Delito Menor", months: 10, fine: 4000, unit: false },

  // GRAVES
  { category: "03 - Propiedad (Robos y hurtos)", code: 304, name: "Robo a casa", severity: "Delito Grave", months: 10, fine: 2000, unit: false },
  { category: "03 - Propiedad (Robos y hurtos)", code: 305, name: "Robo a peluquería/ropa/tatuajes", severity: "Delito Grave", months: 10, fine: 975, unit: false },
  { category: "03 - Propiedad (Robos y hurtos)", code: 306, name: "Robo menor", severity: "Delito Grave", months: 10, fine: 1000, unit: false },
  { category: "03 - Propiedad (Robos y hurtos)", code: 307, name: "Robo a sucursal", severity: "Delito Grave", months: 35, fine: 30000, unit: false },
  { category: "03 - Propiedad (Robos y hurtos)", code: 308, name: "Robo a banco de Paleto", severity: "Delito Grave", months: 40, fine: 40000, unit: false },
  { category: "03 - Propiedad (Robos y hurtos)", code: 309, name: "Robos a entidades federales", severity: "Delito Grave", months: 120, fine: 250000, unit: false },
  { category: "03 - Propiedad (Robos y hurtos)", code: 311, name: "Asalto a furgón policial", severity: "Delito Grave", months: 30, fine: 25000, unit: false },
  { category: "03 - Propiedad (Robos y hurtos)", code: 312, name: "Robo a joyería", severity: "Delito Grave", months: 30, fine: 20000, unit: false },
  { category: "03 - Propiedad (Robos y hurtos)", code: 313, name: "Robo a Ammu-Nation", severity: "Delito Grave", months: 20, fine: 15000, unit: false },
  { category: "03 - Propiedad (Robos y hurtos)", code: 320, name: "Robo a Union Depository", severity: "Delito Grave", months: 80, fine: 70000, unit: false },
  { category: "03 - Propiedad (Robos y hurtos)", code: 321, name: "Robo a Bobcat", severity: "Delito Grave", months: 95, fine: 85000, unit: false },
  { category: "03 - Propiedad (Robos y hurtos)", code: 318, name: "Asalto a furgón Gruppe Sechs", severity: "Delito Grave", months: 40, fine: 22500, unit: false },
  { category: "03 - Propiedad (Robos y hurtos)", code: 325, name: "Robo a tienda de armas", severity: "Delito Grave", months: 80, fine: 50000, unit: false },
  { category: "03 - Propiedad (Robos y hurtos)", code: 326, name: "Robo de arma registrada", severity: "Delito Grave", months: 15, fine: 2500, unit: false },

  // =========================
  // 04 - ARMAS, EXPLOSIVOS Y CONTRABANDO
  // =========================
  { category: "04 - Armas, explosivos y contrabando", code: 401, name: "Posesión de arma ilegal (blanca)", severity: "Delito Menor", months: 5, fine: 500, unit: true },
  { category: "04 - Armas, explosivos y contrabando", code: 406, name: "Cargador de arma de Clase 2", severity: "Delito Menor", months: 5, fine: 1000, unit: true },
  { category: "04 - Armas, explosivos y contrabando", code: 407, name: "Cargador de arma de Clase 3", severity: "Delito Menor", months: 5, fine: 2000, unit: true },
  { category: "04 - Armas, explosivos y contrabando", code: 409, name: "Objetos", severity: "Delito Menor", months: 0, fine: 0, unit: false },
  { category: "04 - Armas, explosivos y contrabando", code: 414, name: "Mal uso de pistola eléctrica", severity: "Delito Menor", months: 10, fine: 1500, unit: false },
  { category: "04 - Armas, explosivos y contrabando", code: 416, name: "Posesión de chaleco resistente", severity: "Delito Menor", months: 5, fine: 1000, unit: true },
  { category: "04 - Armas, explosivos y contrabando", code: 417, name: "Posesión de chaleco reforzado", severity: "Delito Menor", months: 5, fine: 1200, unit: true },
  { category: "04 - Armas, explosivos y contrabando", code: 418, name: "Posesión de pistola de gancho", severity: "Delito Menor", months: 5, fine: 8000, unit: true },
  { category: "04 - Armas, explosivos y contrabando", code: 419, name: "Mal uso de dron", severity: "Delito Menor", months: 5, fine: 5000, unit: false },
  { category: "04 - Armas, explosivos y contrabando", code: 421, name: "Posesión de armamento explosivo", severity: "Delito Menor", months: 10, fine: 5000, unit: true },
  { category: "04 - Armas, explosivos y contrabando", code: 426, name: "Posesión de chaleco ligero", severity: "Delito Menor", months: 5, fine: 250, unit: true },
  { category: "04 - Armas, explosivos y contrabando", code: 428, name: "Posesión de contrabando en primer grado", severity: "Delito Menor", months: 5, fine: 250, unit: true },
  { category: "04 - Armas, explosivos y contrabando", code: 422, name: "Posesión negligente criminal de un arma de fuego", severity: "Delito Menor", months: 15, fine: 3000, unit: true },
  { category: "04 - Armas, explosivos y contrabando", code: 420, name: "Posesión de inhibidor de radar", severity: "Delito Menor", months: 0, fine: 350, unit: true },
  { category: "04 - Armas, explosivos y contrabando", code: 433, name: "Exhibición de arma ilegal", severity: "Delito Menor", months: 5, fine: 300, unit: false },
  { category: "04 - Armas, explosivos y contrabando", code: 405, name: "Cargador de arma de Clase 1", severity: "Delito Menor", months: 1, fine: 150, unit: true },
  { category: "04 - Armas, explosivos y contrabando", code: 434, name: "Posesión de termita", severity: "Delito Menor", months: 5, fine: 1500, unit: true },

  // Infracción
  { category: "04 - Armas, explosivos y contrabando", code: 410, name: "Exhibición de armas legales en vía pública", severity: "Infracción", months: 0, fine: 125, unit: false },

  // Graves
  { category: "04 - Armas, explosivos y contrabando", code: 402, name: "Posesión de arma de Clase 1", severity: "Delito Grave", months: 30, fine: 20000, unit: true },
  { category: "04 - Armas, explosivos y contrabando", code: 403, name: "Posesión de arma de Clase 2", severity: "Delito Grave", months: 40, fine: 30000, unit: true },
  { category: "04 - Armas, explosivos y contrabando", code: 404, name: "Posesión de arma de Clase 3", severity: "Delito Grave", months: 50, fine: 40000, unit: true },
  { category: "04 - Armas, explosivos y contrabando", code: 408, name: "Posesión de arma de Clase 4", severity: "Delito Grave", months: 60, fine: 50000, unit: true },
  { category: "04 - Armas, explosivos y contrabando", code: 411, name: "Posesión de molotov", severity: "Delito Grave", months: 10, fine: 3500, unit: true },
  { category: "04 - Armas, explosivos y contrabando", code: 412, name: "Posesión de accesorios de armamento", severity: "Delito Grave", months: 5, fine: 1500, unit: true },
  { category: "04 - Armas, explosivos y contrabando", code: 413, name: "Posesión de pistola eléctrica", severity: "Delito Grave", months: 20, fine: 4000, unit: true },
  { category: "04 - Armas, explosivos y contrabando", code: 415, name: "Posesión de munición Clase 4", severity: "Delito Grave", months: 5, fine: 4000, unit: true },
  { category: "04 - Armas, explosivos y contrabando", code: 427, name: "Posesión de elementos para fabricar armas", severity: "Delito Grave", months: 20, fine: 15000, unit: true },
  { category: "04 - Armas, explosivos y contrabando", code: 429, name: "Fuego o explosión con arma Clase 4", severity: "Delito Grave", months: 15, fine: 2000, unit: false },
  { category: "04 - Armas, explosivos y contrabando", code: 430, name: "Uso de arma Clase 4 contra funcionario", severity: "Delito Grave", months: 50, fine: 50000, unit: false },
  { category: "04 - Armas, explosivos y contrabando", code: 431, name: "Almacenamiento de armas blancas", severity: "Delito Grave", months: 35, fine: 40000, unit: false },
  { category: "04 - Armas, explosivos y contrabando", code: 432, name: "Almacenamiento de armas de fuego", severity: "Delito Grave", months: 60, fine: 120000, unit: false },
  { category: "04 - Armas, explosivos y contrabando", code: 425, name: "Tráfico de armas", severity: "Delito Grave", months: 0, fine: 0, unit: false },

  // =========================
  // 05 - SALUD PÚBLICA (DROGAS)
  // =========================
  { category: "05 - Salud pública (Drogas)", code: 502, name: "Posesión de porro de marihuana", severity: "Delito Menor", months: 0, fine: 50, unit: true },
  { category: "05 - Salud pública (Drogas)", code: 503, name: "Droga sintética", severity: "Delito Menor", months: 0, fine: 60, unit: true },
  { category: "05 - Salud pública (Drogas)", code: 504, name: "Droga natural", severity: "Delito Menor", months: 0, fine: 50, unit: true },
  { category: "05 - Salud pública (Drogas)", code: 510, name: "Bolsa de fentanilo", severity: "Delito Menor", months: 0, fine: 80, unit: true },
  { category: "05 - Salud pública (Drogas)", code: 514, name: "Bolsa de heroína", severity: "Delito Menor", months: 0, fine: 100, unit: true },
  { category: "05 - Salud pública (Drogas)", code: 515, name: "Bolsa de ketamina", severity: "Delito Menor", months: 0, fine: 100, unit: true },
  { category: "05 - Salud pública (Drogas)", code: 516, name: "Accesorios para fabricación/consumo de drogas", severity: "Delito Menor", months: 5, fine: 75, unit: true },
  { category: "05 - Salud pública (Drogas)", code: 517, name: "Bolsa de meta", severity: "Delito Menor", months: 0, fine: 85, unit: true },
  { category: "05 - Salud pública (Drogas)", code: 518, name: "Botella Moonshine", severity: "Delito Menor", months: 0, fine: 135, unit: true },
  { category: "05 - Salud pública (Drogas)", code: 521, name: "Bolsa de cocaína", severity: "Delito Menor", months: 0, fine: 100, unit: true },
  { category: "05 - Salud pública (Drogas)", code: 522, name: "Semillas de marihuana", severity: "Delito Menor", months: 0, fine: 100, unit: true },
  { category: "05 - Salud pública (Drogas)", code: 523, name: "Cultivo de marihuana", severity: "Delito Menor", months: 15, fine: 3000, unit: true },
  { category: "05 - Salud pública (Drogas)", code: 524, name: "Bolsa de marihuana", severity: "Delito Menor", months: 1, fine: 70, unit: true },

  // Infracciones
  { category: "05 - Salud pública (Drogas)", code: 501, name: "Posesión de estupefacientes según cantidades", severity: "Infracción", months: 0, fine: 0, unit: true },
  { category: "05 - Salud pública (Drogas)", code: 505, name: "Retirada de estupefacientes destinados al consumo propio", severity: "Infracción", months: 0, fine: 0, unit: false },
  { category: "05 - Salud pública (Drogas)", code: 507, name: "Consumo de sustancias en vía pública", severity: "Infracción", months: 0, fine: 60, unit: false },

  // Graves
  { category: "05 - Salud pública (Drogas)", code: 506, name: "Tráfico de drogas", severity: "Delito Grave", months: 30, fine: 2500, unit: false },
  { category: "05 - Salud pública (Drogas)", code: 508, name: "Paquete de marihuana", severity: "Delito Grave", months: 10, fine: 500, unit: true },
  { category: "05 - Salud pública (Drogas)", code: 509, name: "Paquete de fentanilo", severity: "Delito Grave", months: 10, fine: 550, unit: true },
  { category: "05 - Salud pública (Drogas)", code: 511, name: "Mesa de fabricación de drogas", severity: "Delito Grave", months: 35, fine: 20000, unit: false },
  { category: "05 - Salud pública (Drogas)", code: 512, name: "Transporte de mercancías sospechosas", severity: "Delito Grave", months: 45, fine: 40000, unit: false },
  { category: "05 - Salud pública (Drogas)", code: 513, name: "Paquete de heroína", severity: "Delito Grave", months: 10, fine: 700, unit: true },
  { category: "05 - Salud pública (Drogas)", code: 519, name: "Posesión de destilador Moonshine", severity: "Delito Grave", months: 25, fine: 7000, unit: true },
  { category: "05 - Salud pública (Drogas)", code: 520, name: "Paquete de ketamina", severity: "Delito Grave", months: 10, fine: 700, unit: true },

  // =========================
  // 06 - VIDA E INTEGRIDAD PERSONAL
  // =========================
  { category: "06 - Vida e integridad personal", code: 525, name: "Embarcación sospechosa", severity: "Delito Grave", months: 15, fine: 2500, unit: false },
  { category: "06 - Vida e integridad personal", code: 601, name: "Intento de secuestro", severity: "Delito Grave", months: 15, fine: 2000, unit: false },
  { category: "06 - Vida e integridad personal", code: 602, name: "Secuestro", severity: "Delito Grave", months: 30, fine: 3000, unit: false },
  { category: "06 - Vida e integridad personal", code: 603, name: "Intento de homicidio en tercer grado", severity: "Delito Grave", months: 20, fine: 5000, unit: false },
  { category: "06 - Vida e integridad personal", code: 604, name: "Intento de homicidio en segundo grado", severity: "Delito Grave", months: 30, fine: 10000, unit: false },
  { category: "06 - Vida e integridad personal", code: 605, name: "Intento de homicidio en primer grado", severity: "Delito Grave", months: 35, fine: 15000, unit: false },
  { category: "06 - Vida e integridad personal", code: 606, name: "Homicidio en tercer grado", severity: "Delito Grave", months: 0, fine: 0, unit: false },
  { category: "06 - Vida e integridad personal", code: 607, name: "Homicidio en segundo grado", severity: "Delito Grave", months: 0, fine: 0, unit: false },
  { category: "06 - Vida e integridad personal", code: 608, name: "Homicidio en primer grado", severity: "Delito Grave", months: 0, fine: 0, unit: false },
  { category: "06 - Vida e integridad personal", code: 609, name: "Amenaza o extorsión a un ciudadano", severity: "Delito Grave", months: 20, fine: 1500, unit: false },
  { category: "06 - Vida e integridad personal", code: 610, name: "Amenaza/extorsión con armas", severity: "Delito Grave", months: 25, fine: 3000, unit: false },
  { category: "06 - Vida e integridad personal", code: 611, name: "Omisión del deber de socorro", severity: "Delito Grave", months: 10, fine: 1000, unit: false },
  { category: "06 - Vida e integridad personal", code: 612, name: "Tiroteo entre pandillas", severity: "Delito Grave", months: 15, fine: 10000, unit: false },

  // =========================
  // 07 - ADMINISTRACIÓN PÚBLICA Y FUNCIONARIOS
  // =========================
  { category: "07 - Administración pública y funcionarios", code: 701, name: "Amenazas, insultos y desobediencia", severity: "Delito Menor", months: 20, fine: 5000, unit: false },
  { category: "07 - Administración pública y funcionarios", code: 702, name: "Desobediencia a una autoridad", severity: "Delito Menor", months: 6, fine: 500, unit: true },
  { category: "07 - Administración pública y funcionarios", code: 703, name: "Insultar a un funcionario público", severity: "Delito Menor", months: 5, fine: 2000, unit: true },
  { category: "07 - Administración pública y funcionarios", code: 705, name: "Evasión del arresto", severity: "Delito Menor", months: 8, fine: 500, unit: true },
  { category: "07 - Administración pública y funcionarios", code: 706, name: "Resistirse al arresto", severity: "Delito Menor", months: 5, fine: 300, unit: false },
  { category: "07 - Administración pública y funcionarios", code: 708, name: "Mentir o dar falso testimonio a la policía", severity: "Delito Menor", months: 10, fine: 350, unit: false },
  { category: "07 - Administración pública y funcionarios", code: 707, name: "Huir de la justicia", severity: "Delito Menor", months: 5, fine: 500, unit: false },
  { category: "07 - Administración pública y funcionarios", code: 721, name: "Fotografiar a un funcionario público", severity: "Delito Menor", months: 5, fine: 900, unit: false },
  { category: "07 - Administración pública y funcionarios", code: 723, name: "Divulgación de fotografías de funcionario público", severity: "Delito Menor", months: 10, fine: 1800, unit: false },
  { category: "07 - Administración pública y funcionarios", code: 724, name: "Insultar o faltar al respeto reiteradas veces a un funcionario público", severity: "Delito Menor", months: 60, fine: 20000, unit: false },
  { category: "07 - Administración pública y funcionarios", code: 728, name: "Impago de Servicios Sanitarios (Incumplimiento Único)", severity: "Delito Menor", months: 15, fine: 5000, unit: false },
  { category: "07 - Administración pública y funcionarios", code: 734, name: "Falta de comparecencia", severity: "Delito Menor", months: 25, fine: 7000, unit: false },
  { category: "07 - Administración pública y funcionarios", code: 735, name: "Desacato al tribunal", severity: "Delito Menor", months: 0, fine: 0, unit: false },
  { category: "07 - Administración pública y funcionarios", code: 736, name: "Falsedad documental", severity: "Delito Menor", months: 25, fine: 7000, unit: false },
  { category: "07 - Administración pública y funcionarios", code: 725, name: "No portar el Documento de Identificación (ID)", severity: "Infracción", months: 0, fine: 50, unit: false },

  // Graves
  { category: "07 - Administración pública y funcionarios", code: 704, name: "Amenazar de muerte a un funcionario", severity: "Delito Grave", months: 40, fine: 5000, unit: true },
  { category: "07 - Administración pública y funcionarios", code: 709, name: "Usurpación de identidad a funcionario", severity: "Delito Grave", months: 60, fine: 40000, unit: false },
  { category: "07 - Administración pública y funcionarios", code: 710, name: "Robo de elementos estatales con información clasificada", severity: "Delito Grave", months: 80, fine: 70000, unit: false },
  { category: "07 - Administración pública y funcionarios", code: 711, name: "Robo de armamento estatal", severity: "Delito Grave", months: 80, fine: 35000, unit: false },
  { category: "07 - Administración pública y funcionarios", code: 712, name: "Robo a uno o varios agentes", severity: "Delito Grave", months: 100, fine: 70000, unit: false },
  { category: "07 - Administración pública y funcionarios", code: 714, name: "Tráfico de influencias", severity: "Delito Grave", months: 60, fine: 30000, unit: false },
  { category: "07 - Administración pública y funcionarios", code: 715, name: "Cohecho", severity: "Delito Grave", months: 40, fine: 25000, unit: false },
  { category: "07 - Administración pública y funcionarios", code: 716, name: "Prevaricación", severity: "Delito Grave", months: 35, fine: 30000, unit: false },
  { category: "07 - Administración pública y funcionarios", code: 717, name: "Revelación de secretos", severity: "Delito Grave", months: 60, fine: 40000, unit: false },
  { category: "07 - Administración pública y funcionarios", code: 718, name: "Entrar en zonas de acceso a funcionarios en dependencias policiales", severity: "Delito Grave", months: 15, fine: 5000, unit: false },
  { category: "07 - Administración pública y funcionarios", code: 719, name: "Intento de homicidio a funcionario público", severity: "Delito Grave", months: 100, fine: 40000, unit: false },
  { category: "07 - Administración pública y funcionarios", code: 720, name: "Secuestro a funcionario público", severity: "Delito Grave", months: 80, fine: 40000, unit: false },
  { category: "07 - Administración pública y funcionarios", code: 722, name: "Intento de secuestro a funcionario público", severity: "Delito Grave", months: 30, fine: 7000, unit: false },
  { category: "07 - Administración pública y funcionarios", code: 727, name: "Intento de soborno", severity: "Delito Grave", months: 15, fine: 2500, unit: false },
  { category: "07 - Administración pública y funcionarios", code: 729, name: "Impago reincidente de Servicios Sanitarios", severity: "Delito Grave", months: 20, fine: 10000, unit: false },
  { category: "07 - Administración pública y funcionarios", code: 730, name: "Robo de vehículo de índole policial", severity: "Delito Grave", months: 40, fine: 40000, unit: false },
  { category: "07 - Administración pública y funcionarios", code: 726, name: "Abordar vehículo de índole policial", severity: "Delito Grave", months: 15, fine: 1500, unit: false },
  { category: "07 - Administración pública y funcionarios", code: 731, name: "Fuga de prisión", severity: "Delito Grave", months: 200, fine: 100000, unit: false },
  { category: "07 - Administración pública y funcionarios", code: 732, name: "Asalto a prisión", severity: "Delito Grave", months: 400, fine: 200000, unit: false },
  { category: "07 - Administración pública y funcionarios", code: 733, name: "Perjurio", severity: "Delito Grave", months: 0, fine: 0, unit: false },
  { category: "07 - Administración pública y funcionarios", code: 737, name: "Agredir a un funcionario público", severity: "Delito Grave", months: 50, fine: 7000, unit: false },

  // =========================
  // 08 - DELITOS DE LA ADMINISTRACIÓN PÚBLICA (POLICÍA)
  // =========================
  { category: "08 - Delitos de la Administración pública", code: 805, name: "Omisión del deber de socorro", severity: "Delito Menor", months: 5, fine: 300, unit: false },
  { category: "08 - Delitos de la Administración pública", code: 807, name: "Acoso a civiles, faltas de respeto infundadas", severity: "Delito Menor", months: 0, fine: 0, unit: false },

  // Infracciones
  { category: "08 - Delitos de la Administración pública", code: 801, name: "Cacheo sin causa justificada", severity: "Infracción", months: 0, fine: 0, unit: false },
  { category: "08 - Delitos de la Administración pública", code: 802, name: "Ingesta de drogas o alcohol de servicio", severity: "Infracción", months: 0, fine: 0, unit: false },
  { category: "08 - Delitos de la Administración pública", code: 810, name: "Abandono del servicio sin motivo justificado", severity: "Infracción", months: 0, fine: 0, unit: false },

  // Graves
  { category: "08 - Delitos de la Administración pública", code: 803, name: "Cohecho, prevaricación, tráfico de influencias", severity: "Delito Grave", months: 20, fine: 4000, unit: false },
  { category: "08 - Delitos de la Administración pública", code: 804, name: "Actos ilegales y comercio de estupefacientes", severity: "Delito Grave", months: 0, fine: 0, unit: false },
  { category: "08 - Delitos de la Administración pública", code: 806, name: "Malversación de fondos estatales", severity: "Delito Grave", months: 60, fine: 50000, unit: false },
  { category: "08 - Delitos de la Administración pública", code: 808, name: "Agredir a un civil", severity: "Delito Grave", months: 0, fine: 0, unit: false },
  { category: "08 - Delitos de la Administración pública", code: 809, name: "Filtración de secretos estatales o federales", severity: "Delito Grave", months: 0, fine: 0, unit: false },
  { category: "08 - Delitos de la Administración pública", code: 812, name: "Destrucción de pruebas", severity: "Delito Grave", months: 60, fine: 40000, unit: false },

  // =========================
  // 09 - MEDIO AMBIENTE Y ANIMALES
  // =========================
  { category: "09 - Medio ambiente y animales", code: 901, name: "Maltrato animal", severity: "Delito Menor", months: 5, fine: 500, unit: false },
  { category: "09 - Medio ambiente y animales", code: 903, name: "Abandono animal", severity: "Delito Menor", months: 5, fine: 500, unit: false },
  { category: "09 - Medio ambiente y animales", code: 906, name: "Daño o captura de especies protegidas", severity: "Delito Menor", months: 0, fine: 200, unit: false },
  { category: "09 - Medio ambiente y animales", code: 907, name: "Vertido de residuos tóxicos", severity: "Delito Menor", months: 15, fine: 1000, unit: false },
  { category: "09 - Medio ambiente y animales", code: 908, name: "Caza de animales protegidos", severity: "Delito Menor", months: 5, fine: 400, unit: false },
  { category: "09 - Medio ambiente y animales", code: 913, name: "Caza/pesca en lugar no habilitado (reiterado)", severity: "Delito Menor", months: 10, fine: 2500, unit: false },
  { category: "09 - Medio ambiente y animales", code: 909, name: "Pesca de animales marinos protegidos", severity: "Delito Menor", months: 10, fine: 40, unit: true },

  // Infracciones
  { category: "09 - Medio ambiente y animales", code: 904, name: "Daños causados por mascotas", severity: "Infracción", months: 0, fine: 50, unit: false },
  { category: "09 - Medio ambiente y animales", code: 905, name: "Pesca/caza sin licencia", severity: "Infracción", months: 0, fine: 150, unit: false },
  { category: "09 - Medio ambiente y animales", code: 912, name: "Caza/pesca en lugar no habilitado", severity: "Infracción", months: 0, fine: 1000, unit: false },

  // Grave
  { category: "09 - Medio ambiente y animales", code: 902, name: "Maltrato animal con muerte", severity: "Delito Grave", months: 10, fine: 1750, unit: false },

  // =========================
  // 10 - DELITOS ECONÓMICOS
  // =========================
  { category: "10 - Delitos económicos", code: 1001, name: "Negar o borrar grabaciones de vídeo a la policía", severity: "Delito Menor", months: 0, fine: 5500, unit: false },
  { category: "10 - Delitos económicos", code: 1004, name: "Estafa", severity: "Delito Menor", months: 0, fine: 1000, unit: false },
  { category: "10 - Delitos económicos", code: 1007, name: "Abandono sin pagar", severity: "Delito Menor", months: 5, fine: 1500, unit: false },
  { category: "10 - Delitos económicos", code: 1009, name: "Posesión de dinero sin declarar (5.000–9.999)", severity: "Delito Menor", months: 5, fine: 2500, unit: true },
  { category: "10 - Delitos económicos", code: 1012, name: "Ejercicio de seguridad sin licencia", severity: "Delito Menor", months: 10, fine: 2000, unit: false },
  { category: "10 - Delitos económicos", code: 1013, name: "Transporte ilegal de mercancía", severity: "Delito Menor", months: 10, fine: 2000, unit: false },

  // Infracciones
  { category: "10 - Delitos económicos", code: 1002, name: "Denegación de servicio sin causa", severity: "Infracción", months: 0, fine: 1500, unit: false },
  { category: "10 - Delitos económicos", code: 1003, name: "Venta sin permiso", severity: "Infracción", months: 0, fine: 1500, unit: false },
  { category: "10 - Delitos económicos", code: 1008, name: "Posesión de dinero sin declarar (>1.000)", severity: "Infracción", months: 0, fine: 0, unit: true },
  { category: "10 - Delitos económicos", code: 1011, name: "Posesión de fajo de billetes", severity: "Infracción", months: 0, fine: 0, unit: true },

  // Graves
  { category: "10 - Delitos económicos", code: 1005, name: "Fraude o engaño", severity: "Delito Grave", months: 0, fine: 0, unit: false },
  { category: "10 - Delitos económicos", code: 1006, name: "Lavado de dinero", severity: "Delito Grave", months: 15, fine: 0, unit: false },
  { category: "10 - Delitos económicos", code: 1010, name: "Posesión de dinero sin declarar (>10.000)", severity: "Delito Grave", months: 10, fine: 3500, unit: true },
  { category: "10 - Delitos económicos", code: 1014, name: "Posesión de dinero sin declarar (>50.000)", severity: "Delito Grave", months: 20, fine: 20000, unit: true },
  { category: "10 - Delitos económicos", code: 1015, name: "Posesión de dinero sin declarar (>100.000)", severity: "Delito Grave", months: 40, fine: 40000, unit: true },

  // =========================
  // 11 - SEGURIDAD AÉREA
  // =========================
  { category: "11 - Seguridad aérea", code: 1101, name: "Vuelo sin licencia", severity: "Delito Menor", months: 15, fine: 15000, unit: false },
  { category: "11 - Seguridad aérea", code: 1102, name: "Porte de licencia falsa", severity: "Delito Menor", months: 10, fine: 5000, unit: false },
  { category: "11 - Seguridad aérea", code: 1104, name: "Operaciones en aeródromos no autorizados", severity: "Delito Menor", months: 15, fine: 10000, unit: false },
  { category: "11 - Seguridad aérea", code: 1105, name: "Violación del espacio aéreo civil", severity: "Delito Menor", months: 10, fine: 5000, unit: false },
  { category: "11 - Seguridad aérea", code: 1106, name: "Entrada no autorizada a aeródromo civil", severity: "Delito Menor", months: 10, fine: 5000, unit: false },
  { category: "11 - Seguridad aérea", code: 1108, name: "Paracaidismo no autorizado sobre núcleo urbano", severity: "Delito Menor", months: 5, fine: 1000, unit: false },
  { category: "11 - Seguridad aérea", code: 1111, name: "Transporte de pasajeros ilegales", severity: "Delito Menor", months: 5, fine: 1000, unit: false },
  { category: "11 - Seguridad aérea", code: 1115, name: "Accidente aéreo por fallo humano con daños materiales", severity: "Delito Menor", months: 25, fine: 10000, unit: false },
  { category: "11 - Seguridad aérea", code: 1120, name: "Entrada no autorizada a instalaciones militares de la fuerza aérea", severity: "Delito Menor", months: 15, fine: 6000, unit: false },
  { category: "11 - Seguridad aérea", code: 1125, name: "Operar sin los elementos del control aéreo", severity: "Delito Menor", months: 20, fine: 5000, unit: false },

  // Infracciones
  { category: "11 - Seguridad aérea", code: 1103, name: "Vuelo con licencia expirada", severity: "Infracción", months: 0, fine: 800, unit: false },
  { category: "11 - Seguridad aérea", code: 1113, name: "Operación de aeronave en malas condiciones técnicas", severity: "Infracción", months: 0, fine: 500, unit: false },

  // Graves
  { category: "11 - Seguridad aérea", code: 1107, name: "Entrada no autorizada a un Aeródromo Internacional", severity: "Delito Grave", months: 30, fine: 20000, unit: false },
  { category: "11 - Seguridad aérea", code: 1109, name: "Transporte de mercancía ilegal en operación aérea", severity: "Delito Grave", months: 35, fine: 30000, unit: false },
  { category: "11 - Seguridad aérea", code: 1110, name: "Transporte de mercancía peligrosa no declarada", severity: "Delito Grave", months: 30, fine: 25000, unit: false },
  { category: "11 - Seguridad aérea", code: 1112, name: "Intento de derribo a una aeronave", severity: "Delito Grave", months: 50, fine: 50000, unit: false },
  { category: "11 - Seguridad aérea", code: 1114, name: "Operar aeronave bajo efectos de drogas/alcohol", severity: "Delito Grave", months: 25, fine: 15000, unit: false },
  { category: "11 - Seguridad aérea", code: 1116, name: "Accidente aéreo con daños graves a personas", severity: "Delito Grave", months: 15, fine: 15000, unit: false },
  { category: "11 - Seguridad aérea", code: 1117, name: "Accidente aéreo provocado intencionadamente", severity: "Delito Grave", months: 40, fine: 25000, unit: false },
  { category: "11 - Seguridad aérea", code: 1118, name: "Secuestro de una aeronave", severity: "Delito Grave", months: 50, fine: 30000, unit: false },
  { category: "11 - Seguridad aérea", code: 1119, name: "Robo de una aeronave", severity: "Delito Grave", months: 40, fine: 40000, unit: false },
  { category: "11 - Seguridad aérea", code: 1121, name: "Violación del espacio aéreo de un Aeródromo Internacional", severity: "Delito Grave", months: 10, fine: 5000, unit: false },
  { category: "11 - Seguridad aérea", code: 1122, name: "Violación del espacio aéreo en instalaciones penitenciarias/gubernamentales", severity: "Delito Grave", months: 60, fine: 45000, unit: false },
  { category: "11 - Seguridad aérea", code: 1123, name: "Violación del espacio aéreo en instalaciones militares", severity: "Delito Grave", months: 70, fine: 55000, unit: false },
  { category: "11 - Seguridad aérea", code: 1124, name: "Derribo de una aeronave", severity: "Delito Grave", months: 70, fine: 95000, unit: false },

  // =========================
  // 12 - DELITOS FEDERALES
  // =========================
  { category: "12 - Delitos federales", code: 1201, name: "Homicidio o intento de homicidio a un agente federal", severity: "Delito Grave", months: 0, fine: 0, unit: false },
  { category: "12 - Delitos federales", code: 1202, name: "Homicidio o intento de homicidio a varios agentes federales", severity: "Delito Grave", months: 0, fine: 0, unit: false },
  { category: "12 - Delitos federales", code: 1203, name: "Secuestro a agentes federales", severity: "Delito Grave", months: 0, fine: 0, unit: false },
  { category: "12 - Delitos federales", code: 1204, name: "Introducirse sin permiso en localización federal", severity: "Delito Grave", months: 0, fine: 0, unit: false },
  { category: "12 - Delitos federales", code: 1205, name: "Asociación ilícita y conspiración criminal", severity: "Delito Grave", months: 0, fine: 0, unit: false },

  // =========================
  // 13 - DELITOS CONTRA LA REGULACIÓN SANITARIA
  // =========================
  { category: "13 - Regulación sanitaria", code: 1301, name: "Práctica médica sin licencia", severity: "Delito Menor", months: 15, fine: 5000, unit: false },
  { category: "13 - Regulación sanitaria", code: 1302, name: "Falsificación de documentación médica", severity: "Delito Menor", months: 15, fine: 5000, unit: false },
  { category: "13 - Regulación sanitaria", code: 1303, name: "Cohecho / Prevaricación / Tráfico de influencias", severity: "Delito Menor", months: 15, fine: 5000, unit: false },
  { category: "13 - Regulación sanitaria", code: 1307, name: "Fraude en seguros de salud", severity: "Delito Menor", months: 30, fine: 20000, unit: false },
  { category: "13 - Regulación sanitaria", code: 1309, name: "Ingesta de drogas o alcohol de servicio", severity: "Delito Menor", months: 10, fine: 5000, unit: false },
  { category: "13 - Regulación sanitaria", code: 1310, name: "Uso indebido de recursos sanitarios", severity: "Delito Menor", months: 10, fine: 5000, unit: false },
  { category: "13 - Regulación sanitaria", code: 1311, name: "Imprudencia en servicio extrahospitalario", severity: "Delito Menor", months: 10, fine: 5000, unit: false },
  { category: "13 - Regulación sanitaria", code: 1314, name: "Uso indebido de material no sanitario especializado", severity: "Delito Menor", months: 10, fine: 5000, unit: false },

  // Graves
  { category: "13 - Regulación sanitaria", code: 1305, name: "Filtración de secretos estatales o federales", severity: "Delito Grave", months: 30, fine: 30000, unit: false },
  { category: "13 - Regulación sanitaria", code: 1306, name: "Ingreso ilícito a información policial", severity: "Delito Grave", months: 30, fine: 30000, unit: false },
  { category: "13 - Regulación sanitaria", code: 1304, name: "Tráfico de insumos médicos o medicamentos controlados", severity: "Delito Grave", months: 30, fine: 30000, unit: false },
  { category: "13 - Regulación sanitaria", code: 1308, name: "Omisión de socorro", severity: "Delito Grave", months: 15, fine: 5000, unit: false },
  { category: "13 - Regulación sanitaria", code: 1312, name: "Negligencia sanitaria grave", severity: "Delito Grave", months: 15, fine: 5000, unit: false },
  { category: "13 - Regulación sanitaria", code: 1313, name: "Actividades ilegales bajo cobertura sanitaria", severity: "Delito Grave", months: 30, fine: 20000, unit: false },

  // =========================
  // 14 - DELITOS CIBERNÉTICOS
  // =========================
  { category: "14 - Delitos cibernéticos", code: 1402, name: "Utilización de dispositivos de hackeo", severity: "Delito Menor", months: 0, fine: 700, unit: false },
  { category: "14 - Delitos cibernéticos", code: 1403, name: "Acceso no autorizado a sistemas", severity: "Delito Menor", months: 0, fine: 700, unit: false },
  { category: "14 - Delitos cibernéticos", code: 1404, name: "Acceso no autorizado a sistemas informáticos", severity: "Delito Menor", months: 0, fine: 700, unit: false },
  { category: "14 - Delitos cibernéticos", code: 1405, name: "Publicación o filtración de datos personales", severity: "Delito Menor", months: 0, fine: 850, unit: false },

  // Infracción
  { category: "14 - Delitos cibernéticos", code: 1401, name: "Posesión de dispositivos de hackeo", severity: "Infracción", months: 0, fine: 300, unit: true },

  // Graves
  { category: "14 - Delitos cibernéticos", code: 1406, name: "Distribución de malware", severity: "Delito Grave", months: 15, fine: 3500, unit: false },
  { category: "14 - Delitos cibernéticos", code: 1407, name: "Difamación cibernética", severity: "Delito Grave", months: 10, fine: 3000, unit: false },
  { category: "14 - Delitos cibernéticos", code: 1408, name: "Protección de copyright (violación)", severity: "Delito Grave", months: 0, fine: 3000, unit: false },
  { category: "14 - Delitos cibernéticos", code: 1409, name: "Amenazas o acoso cibernético", severity: "Delito Grave", months: 10, fine: 3500, unit: false },
  { category: "14 - Delitos cibernéticos", code: 1410, name: "Fraude de tarjetas de crédito", severity: "Delito Grave", months: 10, fine: 3500, unit: false },
  { category: "14 - Delitos cibernéticos", code: 1411, name: "Fraudes de seguro", severity: "Delito Grave", months: 10, fine: 3500, unit: false },
  { category: "14 - Delitos cibernéticos", code: 1412, name: "Fraude informático", severity: "Delito Grave", months: 15, fine: 4000, unit: false },
  { category: "14 - Delitos cibernéticos", code: 1413, name: "Suplantación de identidad digital (Phishing)", severity: "Delito Grave", months: 15, fine: 3500, unit: false },
  { category: "14 - Delitos cibernéticos", code: 1414, name: "Extorsión cibernética (Ransomware)", severity: "Delito Grave", months: 15, fine: 4000, unit: false },
  { category: "14 - Delitos cibernéticos", code: 1415, name: "Ciberterrorismo", severity: "Delito Grave", months: 30, fine: 20000, unit: false },


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

  // Chalecos
  { category: "Chalecos", id: "chaleco_ligero", name: "Chaleco ligero", type: "normal" },
    { category: "Chalecos", id: "chaleco_resistente", name: "Chaleco resistente", type: "normal" },
      { category: "Chalecos", id: "chaleco_reforzado", name: "Chaleco reforzado", type: "normal" },
  { category: "Chalecos", id: "placa_kevlar", name: "Placa de Kevlar", type: "normal" },

  // Coches: inhibidor + matrícula falsa
  { category: "Coches", id: "inhibidor_radar", name: "Inhibidor de radar", type: "normal" },
  { category: "Coches", id: "matricula_falsa_obj", name: "Matrícula falsa", type: "normal" },
  { category: "Coches", id: "ganzua", name: "Ganzúa", type: "normal" },

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

  // Informatico
    { category: "Informatica", id: "usb_troyano", name: "USB Troyano", type: "normal" },

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
      row.className = `row ${sevClass(c.severity)}`;

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
| Articulos a imputar: ${articulosLinea}
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
