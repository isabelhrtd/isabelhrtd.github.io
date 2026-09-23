/* =========================================================
   BASE DE DATOS II — UPLA
   script.js — datos de unidades/semanas + lógica de modales
   Compartido por index.html y unidad1..4.html
   ========================================================= */

const UNITS = {
  1:{
    title:"UNIDAD I",
    heading:"Arquitecturas de Bases de Datos",
    headingFull:"ARQUITECTURAS DE BASES DE DATOS Y CONFIGURACIÓN DEL ENTORNO CORPORATIVO",
    range:"Semanas 01 — 04",
    capacidad:"Identificar arquitecturas de bases de datos e implementarlas en los actuales sistemas gestores para decidir cómo almacenar, organizar e integrar datos.",
    desempeno:"Implementa un entorno funcional de base de datos y una arquitectura corporativa mediante la selección de arquitectura física/lógica y configuración del DBMS, optimizando el almacenamiento estructurado para soluciones analíticas.",
    investigacion:"Comparación de ventajas, limitaciones y costos de transferencia de datos entre arquitecturas centralizadas, distribuidas y en la nube.",
    glyph:"✦",
    weeks:[
      {
        n:"SEMANA 01",
        title:"Formulación del Proyecto y Selección de la Arquitectura",
        content:[
          "Definición del alcance de un proyecto analítico basado en un caso empresarial real.",
          "Selección y justificación de una arquitectura centralizada, distribuida o en la nube."
        ]
      },
      {
        n:"SEMANA 02",
        title:"Despliegue y Configuración de Motores de Datos (DBMS)",
        content:[
          "Instalación y configuración del sistema gestor de bases de datos empresarial seleccionado.",
          "Verificación de conectividad y de los recursos iniciales del servidor."
        ]
      },
      {
        n:"SEMANA 03",
        title:"Modelamiento Físico y Mecanismos de Integración",
        content:[
          "Estructuración e implementación de esquemas y tablas maestras.",
          "Configuración de restricciones para lograr un almacenamiento e integración eficientes de grandes volúmenes de datos."
        ]
      },
      {
        n:"SEMANA 04",
        title:"Sustentación y Validación de la Infraestructura de Datos",
        content:[
          "Primer avance del proyecto.",
          "Presentación del informe técnico y demostración funcional.",
          "Validación de la arquitectura y de la carga inicial de datos considerando criterios de rendimiento e integración."
        ]
      }
    ]
  },
  2:{
    title:"UNIDAD II",
    heading:"Administración de Instancias y Almacenamiento",
    headingFull:"ADMINISTRACIÓN DE INSTANCIAS, ESTRUCTURAS DE ALMACENAMIENTO Y GESTIÓN DE DATOS MASIVOS",
    range:"Semanas 05 — 08",
    capacidad:"Gestionar instancias de servidores, estructuras de almacenamiento y esquemas de bases de datos para grandes volúmenes de datos.",
    desempeno:"Administra eficientemente instancias del servidor y configura almacenamiento lógico y físico complejo, distribuyendo archivos e índices para grandes volúmenes de información analítica.",
    investigacion:"Pruebas de laboratorio con inyección concurrente de datos y cargas elevadas, evaluando el impacto de .mdf, .ndf y .ldf sobre la velocidad de consultas analíticas.",
    glyph:"⛁",
    weeks:[
      {
        n:"SEMANA 05",
        title:"Configuración de la Instancia y Gestión de Memoria del Servidor",
        content:[
          "Diagnóstico y configuración de parámetros de la instancia.",
          "Procesamiento, memoria buffer, intercalaciones/collations y soporte para transacciones concurrentes."
        ]
      },
      {
        n:"SEMANA 06",
        title:"Arquitectura Física de Almacenamiento y Distribución de Archivos",
        content:[
          "Distribución física de la base de datos.",
          "Asignación estratégica de archivos .mdf, .ndf y .ldf en discos dedicados para mejorar el rendimiento de lectura y escritura."
        ]
      },
      {
        n:"SEMANA 07",
        title:"Organización de Esquemas Lógicos y Estrategias de Indexación",
        content:[
          "Organización de las entidades del proyecto en esquemas lógicos.",
          "Implementación de índices clustered y nonclustered para grandes volúmenes de datos y reportes analíticos."
        ]
      },
      {
        n:"SEMANA 08",
        title:"Sustentación y Pruebas de Carga de la Infraestructura de Almacenamiento",
        content:[
          "Segundo avance del proyecto.",
          "Informe de laboratorio y demostración.",
          "Pruebas de carga con consultas masivas.",
          "Validación del rendimiento."
        ]
      }
    ]
  },
  3:{
    title:"UNIDAD III",
    heading:"Seguridad Corporativa y Alta Disponibilidad",
    headingFull:"SEGURIDAD CORPORATIVA, CONECTIVIDAD DE RED Y ALTA DISPONIBILIDAD DE DATOS",
    range:"Semanas 09 — 12",
    capacidad:"Gestionar seguridad, red, copias de seguridad y recuperación ante fallos para preservar confidencialidad, integridad y disponibilidad.",
    desempeno:"Implementa mecanismos de seguridad de la información, conectividad de red, copias de seguridad y recuperación para garantizar alta disponibilidad.",
    investigacion:"Plan experimental de contingencia. Simulación de fallos. Medición de RTO y RPO después de ejecutar Jobs y auditorías de transacciones.",
    glyph:"✚",
    weeks:[
      {
        n:"SEMANA 09",
        title:"Configuración de Conectividad de Red y Seguridad del Entorno",
        content:[
          "Configuración de TCP/IP.",
          "Puertos dedicados.",
          "Conectividad remota.",
          "Políticas de autenticación segura."
        ]
      },
      {
        n:"SEMANA 10",
        title:"Gestión de Privilegios, Roles y Auditoría de Datos",
        content:[
          "Implementación de una matriz de acceso basada en roles (RBAC).",
          "Permisos sobre esquemas.",
          "Auditoría mediante triggers o registros de acciones críticas."
        ]
      },
      {
        n:"SEMANA 11",
        title:"Estrategias de Backups Avanzados y Automatización (Jobs)",
        content:[
          "Planificación de copias de seguridad automatizadas: Full backup, Differential backup, Transaction log backup.",
          "Políticas de retención."
        ]
      },
      {
        n:"SEMANA 12",
        title:"Recuperación ante Fallos y Planes de Contingencia",
        content:[
          "Tercer avance del proyecto.",
          "Simulación controlada de pérdida de datos o desastre.",
          "Restauración hasta el último punto operativo.",
          "Cumplimiento de RTO y RPO."
        ]
      }
    ]
  },
  4:{
    title:"UNIDAD IV",
    heading:"Monitoreo y Optimización",
    headingFull:"MONITOREO DE SERVIDORES, OPTIMIZACIÓN DEL DESEMPEÑO Y RECUPERACIÓN BASADA EN FLASHBACK",
    range:"Semanas 13 — 16",
    capacidad:"Realizar monitoreo, optimización y recuperación para mantener información actualizada y restaurar estados históricos.",
    desempeno:"Monitorea servidores, optimiza consultas y utiliza mecanismos avanzados de recuperación para mantener soluciones de datos eficientes, estables y resilientes.",
    investigacion:"Monitoreo activo de CPU, memoria e I/O. Refactorización de consultas analíticas pesadas. Restauración temporal inmediata después de errores simulados.",
    glyph:"◈",
    weeks:[
      {
        n:"SEMANA 13",
        title:"Auditoría, Monitoreo de Eventos y Diagnóstico de Alertas",
        content:[
          "Monitoreo activo.",
          "Contadores de rendimiento.",
          "Captura de eventos.",
          "Identificación de cuellos de botella en tiempo real."
        ]
      },
      {
        n:"SEMANA 14",
        title:"Afinamiento y Optimización del Desempeño de Consultas (Tuning)",
        content:[
          "Optimización de consultas analíticas de gran escala.",
          "Uso de planes de ejecución.",
          "Refactorización de SQL.",
          "Afinamiento de índices."
        ]
      },
      {
        n:"SEMANA 15",
        title:"Implementación de Tecnologías de Recuperación Flashback",
        content:[
          "Configuración y ejecución de consultas temporales y recuperación.",
          "Restauración a nivel de tabla o base de datos.",
          "Reversión a un punto anterior después de errores lógicos."
        ]
      },
      {
        n:"SEMANA 16",
        title:"Sustentación Final e Integración del Proyecto",
        content:[
          "Consolidación final del proyecto.",
          "Informe técnico final.",
          "Demostración técnica.",
          "Validación de: disponibilidad, seguridad, monitoreo, rendimiento, resiliencia."
        ]
      }
    ]
  }
};

/* ---------------------------------------------------------
   Reloj de la taskbar
   --------------------------------------------------------- */
function updateClock(){
  const el=document.getElementById("clock");
  if(!el) return;
  const now=new Date();
  el.textContent=now.toLocaleTimeString("es-PE",{hour:"2-digit",minute:"2-digit"});
}
updateClock();
setInterval(updateClock,1000);

/* ---------------------------------------------------------
   Render de las 4 tarjetas de semana en unidadN.html
   Llamado desde cada página de unidad con su número.
   --------------------------------------------------------- */
function renderWeekCards(unitId){
  const host=document.getElementById("weeksList");
  if(!host) return;
  const unit=UNITS[unitId];
  host.innerHTML=unit.weeks.map((w,i)=>`
    <button class="week-card" type="button" onclick="openWeek(${unitId},${i})">
      <span class="week-tag">${w.n}</span>
      <h3>${w.title}</h3>
      <span class="week-open">ABRIR VENTANA »</span>
    </button>
  `).join("");
}

/* ---------------------------------------------------------
   Modal de semana (ventana retro)
   --------------------------------------------------------- */
function openWeek(unitId,weekIndex){
  const unit=UNITS[unitId];
  const week=unit.weeks[weekIndex];

  document.getElementById("modalBarTitle").textContent="✦ "+week.n+" — "+unit.title;

  document.getElementById("modalContentBody").innerHTML=`
    <div class="week-eyebrow">${unit.title} · ${week.n}</div>
    <h2>${week.title}</h2>

    <div class="modal-section">
      <h4>CONTENIDO</h4>
      <ul>${week.content.map(c=>`<li>${c}</li>`).join("")}</ul>
    </div>

    <div class="modal-section">
      <h4>ACTIVIDAD / TRABAJO</h4>
      <p style="color:var(--grey-dim)">Aún sin información publicada para esta semana.</p>
    </div>

    <div class="modal-section">
      <h4>EVIDENCIAS</h4>
      <div class="evidence-slot">Espacio reservado — imágenes, infografías o capturas de esta semana.</div>
      <div class="evidence-slot">Espacio reservado — documentos o PDFs de esta semana.</div>
    </div>

    <div class="modal-section">
      <h4>GOOGLE DRIVE</h4>
      <div class="modal-actions">
        <a class="retro-btn is-placeholder" href="#">ABRIR EN DRIVE »</a>
        <a class="retro-btn is-placeholder" href="#">VER EVIDENCIA »</a>
        <a class="retro-btn is-placeholder" href="#">VER INFOGRAFÍA »</a>
      </div>
      <div class="placeholder-note">Los enlaces se activarán cuando se agreguen los recursos reales de Drive.</div>
    </div>

    <button class="close-modal" type="button" onclick="closeWeek()">CERRAR VENTANA ×</button>
  `;

  const overlay=document.getElementById("weekModal");
  overlay.classList.add("open");
  document.body.style.overflow="hidden";
}

function closeWeek(){
  const overlay=document.getElementById("weekModal");
  if(!overlay) return;
  overlay.classList.remove("open");
  document.body.style.overflow="";
}

document.addEventListener("DOMContentLoaded",()=>{
  const overlay=document.getElementById("weekModal");
  if(overlay){
    overlay.addEventListener("click",e=>{
      if(e.target.id==="weekModal") closeWeek();
    });
  }
});

document.addEventListener("keydown",e=>{
  if(e.key==="Escape") closeWeek();
});
