const bootScreen = document.getElementById('bootScreen');
const bootLines = document.getElementById('bootLines');
const bootProgress = document.getElementById('bootProgress');
const bootStatus = document.getElementById('bootStatus');
const loginScreen = document.getElementById('loginScreen');
const desktop = document.getElementById('desktop');
const usernameInput = document.getElementById('usernameInput');
const passwordInput = document.getElementById('passwordInput');
const loginStatus = document.getElementById('loginStatus');
const taskTime = document.getElementById('taskTime');
const folderIcon = document.getElementById('folderIcon');
const terminalIcon = document.getElementById('terminalIcon');
const statsIcon = document.getElementById('statsIcon');
const castIcon = document.getElementById('castIcon');
const exitIcon = document.getElementById('exitIcon');
const simIcon = document.getElementById('simIcon');
const memoryIcon = document.getElementById('memoryIcon');
const systemMenu = document.getElementById('systemMenu');
const menuReboot = document.getElementById('menuReboot');
const folderWindow = document.getElementById('folderWindow');
const closeFolder = document.getElementById('closeFolder');
const consoleWindow = document.getElementById('consoleWindow');
const minimizeConsole = document.getElementById('minimizeConsole');
const closeConsole = document.getElementById('closeConsole');
const consoleContent = document.getElementById('consoleContent');
const consoleInput = document.getElementById('consoleInput');
const startButton = document.getElementById('startButton');
const imageViewer = document.getElementById('imageViewer');
const closeViewer = document.getElementById('closeViewer');
const viewerImage = document.getElementById('viewerImage');
const viewerCaption = document.getElementById('viewerCaption');
const statsWindow = document.getElementById('statsWindow');
const closeStats = document.getElementById('closeStats');
const refreshStats = document.getElementById('refreshStats');
const sanityValue = document.getElementById('sanityValue');
const exitValue = document.getElementById('exitValue');
const glitchValue = document.getElementById('glitchValue');
const funValue = document.getElementById('funValue');
const sanityBar = document.getElementById('sanityBar');
const exitBar = document.getElementById('exitBar');
const glitchBar = document.getElementById('glitchBar');
const funBar = document.getElementById('funBar');
const castWindow = document.getElementById('castWindow');
const closeCast = document.getElementById('closeCast');
const castList = document.getElementById('castList');
const castDetail = document.getElementById('castDetail');
const exitWindow = document.getElementById('exitWindow');
const closeExit = document.getElementById('closeExit');
const scanExit = document.getElementById('scanExit');
const exitLog = document.getElementById('exitLog');
const simWindow = document.getElementById('simWindow');
const closeSim = document.getElementById('closeSim');
const simStage = document.getElementById('simStage');
const memoryWindow = document.getElementById('memoryWindow');
const closeMemory = document.getElementById('closeMemory');
const memoryGrid = document.getElementById('memoryGrid');
const memoryOutput = document.getElementById('memoryOutput');
const glitchOverlay = document.getElementById('glitchOverlay');
const caineFace = document.getElementById('caineFace');
const ghostLayer = document.getElementById('ghostLayer');
const caineDeleteOverlay = document.getElementById('caineDeleteOverlay');
const caineDeleteStatus = document.getElementById('caineDeleteStatus');
const caineDeleteProgress = document.getElementById('caineDeleteProgress');
const caineDeleteLog = document.getElementById('caineDeleteLog');
const caineDeletePopups = document.getElementById('caineDeletePopups');
const languageButtons = document.querySelectorAll('[data-lang]');

const translations = {
  es: {
    loginBrand: 'CIRCO DIGITAL<br>PROGRAMA DE ACCESO',
    enterUser: 'INGRESE USUARIO',
    enterPass: 'INGRESE CLAVE',
    loginWarning: '*** USE MAYUSCULAS SOLAMENTE ***',
    systemButton: 'SISTEMA',
    filesIcon: 'archivos',
    terminalIcon: 'terminal',
    statsIcon: 'estadisticas',
    castIcon: 'personajes',
    exitIcon: 'salida',
    simIcon: 'actos',
    memoryIcon: 'recuerdos',
    menuTerminal: 'Terminal',
    menuFiles: 'Explorador de archivos',
    menuStats: 'Monitor de abstraccion',
    menuCast: 'Directorio del circo',
    menuExit: 'Buscador de salida',
    menuSim: 'Simulador de actos',
    menuMemory: 'Laboratorio de recuerdos',
    menuReboot: 'Reiniciar',
    taskbarCaption: 'circo-digital-os: escritorio tty7',
    folderTitle: '/home/operador/archivos',
    terminalTitle: 'Terminal - operador@circo-linux:~',
    viewerTitle: 'Visor de imágenes',
    statsTitle: 'Monitor de abstraccion',
    castTitle: 'Directorio del circo',
    exitTitle: 'Buscador de salida',
    statSanity: 'Estabilidad mental',
    statExit: 'Probabilidad de salida',
    statGlitch: 'Presion glitch',
    statFun: 'Diversion obligatoria',
    refreshStats: 'recalcular',
    scanExit: 'escanear salida',
    simTitle: 'Simulador de actos',
    memoryTitle: 'Laboratorio de recuerdos',
    actOffice: 'oficina C&A',
    actVoid: 'vacio',
    actCircus: 'carpa',
    bootStart: 'Iniciando Circo Digital OS...',
    bootStatus: 'Ejecutando diagnóstico de hardware...',
    bootComplete: 'Arranque completado. Cargando acceso...',
    bootLogin: 'Mostrando pantalla de acceso...',
    bootFallback: 'Tiempo de arranque excedido. Saltando al acceso...',
    bootContinue: 'Continuando...',
    loginWaiting: 'ESPERANDO AUTOLOGIN...',
    loginProgress: 'Autenticación en progreso...',
    loginOk: 'Credenciales verificadas con éxito.',
    loginDesktop: 'Acceso autorizado. Cargando escritorio...',
    viewerCaption: name => `${name} · Archivos del Circo Digital`,
    unknown: command => `'${command}' no se reconoce como un comando interno o externo.`,
    cdError: 'El sistema no puede encontrar la ruta especificada.',
    time: time => `Hora actual: ${time}`,
    promptEcho: command => `operador@circo-linux:~$ ${command}`
  },
  en: {
    loginBrand: 'DIGITAL CIRCUS<br>ACCESS PROGRAM',
    enterUser: 'ENTER USER',
    enterPass: 'ENTER PASSWORD',
    loginWarning: '*** CAPITAL LETTERS ONLY ***',
    systemButton: 'SYSTEM',
    filesIcon: 'files',
    terminalIcon: 'terminal',
    statsIcon: 'stats',
    castIcon: 'cast',
    exitIcon: 'exit',
    simIcon: 'acts',
    memoryIcon: 'memory',
    menuTerminal: 'Terminal',
    menuFiles: 'File explorer',
    menuStats: 'Abstraction monitor',
    menuCast: 'Circus directory',
    menuExit: 'Exit finder',
    menuSim: 'Act simulator',
    menuMemory: 'Memory lab',
    menuReboot: 'Reboot',
    taskbarCaption: 'digital-circus-os: desktop tty7',
    folderTitle: '/home/operator/files',
    terminalTitle: 'Terminal - operator@circus-linux:~',
    viewerTitle: 'Image viewer',
    statsTitle: 'Abstraction monitor',
    castTitle: 'Circus directory',
    exitTitle: 'Exit finder',
    statSanity: 'Mental stability',
    statExit: 'Exit probability',
    statGlitch: 'Glitch pressure',
    statFun: 'Mandatory fun',
    refreshStats: 'recalculate',
    scanExit: 'scan exit',
    simTitle: 'Act simulator',
    memoryTitle: 'Memory lab',
    actOffice: 'C&A office',
    actVoid: 'void',
    actCircus: 'tent',
    bootStart: 'Starting Digital Circus OS...',
    bootStatus: 'Running hardware diagnostics...',
    bootComplete: 'Boot completed. Loading access...',
    bootLogin: 'Showing access screen...',
    bootFallback: 'Boot timeout reached. Jumping to access...',
    bootContinue: 'Continuing...',
    loginWaiting: 'WAITING FOR AUTOLOGIN...',
    loginProgress: 'Authentication in progress...',
    loginOk: 'Credentials verified successfully.',
    loginDesktop: 'Access granted. Loading desktop...',
    viewerCaption: name => `${name} · Digital Circus Files`,
    unknown: command => `'${command}' is not recognized as an internal or external command.`,
    cdError: 'The system cannot find the path specified.',
    time: time => `Current time: ${time}`,
    promptEcho: command => `operator@circus-linux:~$ ${command}`
  }
};

const bootSteps = {
  es: [
    'CIRCUSBIOS v1.10 05/24/2026',
    'CPU Ryzen Digital-Core 12 detectado a 4400.00 MHz',
    'DRAM Frequency: 6000 MHz (Quad Channel)',
    'USB Device total: 3 teclados, 2 ratones, 1 espejo imposible',
    'Detectando ATAPI Devices... [OK]',
    'Dispositivo cambiado: memoria emocional despejada.',
    'CMOS del circo sincronizado. Presione F1 para rendirse.',
    'Cargando kernel circo-linux 1.0.0-caine...',
    'Montando /home/operador y /mnt/acto_principal...',
    'Inicializando compositor TTY7 con paleta VHS...',
    'Arranque seguro: sonrisas verificadas.'
  ],
  en: [
    'CIRCUSBIOS v1.10 05/24/2026',
    'CPU Ryzen Digital-Core 12 detected at 4400.00 MHz',
    'DRAM Frequency: 6000 MHz (Quad Channel)',
    'USB Device total: 3 keyboards, 2 mice, 1 impossible mirror',
    'Detecting ATAPI Devices... [OK]',
    'Device changed: emotional memory cleared.',
    'Circus CMOS synchronized. Press F1 to surrender.',
    'Loading circo-linux 1.0.0-caine kernel...',
    'Mounting /home/operator and /mnt/main_act...',
    'Initializing TTY7 compositor with VHS palette...',
    'Secure boot: smiles verified.'
  ]
};

const credentials = { user: 'POMNI', pass: 'CAINE' };
const imageList = [
  { file: 'photo1.svg', name: 'acto-01' },
  { file: 'photo2.svg', name: 'acto-02' },
  { file: 'photo3.svg', name: 'acto-03' }
];

const castProfiles = [
  {
    id: 'pomni',
    name: 'Pomni',
    role: 'Nueva usuaria atrapada',
    status: 'Busca una salida que cambia de lugar.',
    stats: ['ansiedad: 94%', 'curiosidad: 88%', 'confianza: variable']
  },
  {
    id: 'caine',
    name: 'Caine',
    role: 'Anfitrion y supervisor del sistema',
    status: 'Genera aventuras, reglas y puertas dudosas.',
    stats: ['control: 99%', 'empatia: experimental', 'sonrisa: permanente']
  },
  {
    id: 'ragatha',
    name: 'Ragatha',
    role: 'Soporte emocional del grupo',
    status: 'Mantiene la calma incluso si el mundo se deforma.',
    stats: ['paciencia: 91%', 'resistencia: 76%', 'amabilidad: alta']
  },
  {
    id: 'jax',
    name: 'Jax',
    role: 'Agente caotico',
    status: 'Probablemente ya presiono el boton equivocado.',
    stats: ['sarcasmo: 100%', 'responsabilidad: 3%', 'riesgo: alto']
  },
  {
    id: 'gangle',
    name: 'Gangle',
    role: 'Mascara emocional',
    status: 'Estado depende de la integridad de la mascara.',
    stats: ['fragilidad: 82%', 'expresion: cambiante', 'drama: honesto']
  },
  {
    id: 'zooble',
    name: 'Zooble',
    role: 'Configuracion modular',
    status: 'Partes del cuerpo no garantizadas en el mismo orden.',
    stats: ['personalizacion: maxima', 'tolerancia: baja', 'estilo: propio']
  },
  {
    id: 'kinger',
    name: 'Kinger',
    role: 'Archivo vivo del sistema',
    status: 'Sabe mas de lo que parece recordar.',
    stats: ['memoria: fragmentada', 'fortaleza: almohada', 'alerta: intermitente']
  }
];

const exitScanMessages = [
  'Escaneando pasillo de oficinas... puerta detectada, textura falsa.',
  'Analizando tunel de colores... devuelve al punto inicial.',
  'Consultando mapa de Caine... mapa dibuja una sonrisa.',
  'Probando salida de emergencia... requiere permiso imposible.',
  'Leyendo coordenadas del vacio... coordenadas se niegan a existir.',
  'Resultado final: salida no confirmada. El escritorio sigue operativo.'
];

const actSimulations = {
  office: 'OFICINA C&A\nMonitores encendidos. Un casco viejo zumba bajo la mesa.\nLa puerta dice EXIT, pero al tocarla abre /home/operador.',
  void: 'VACIO\nNo hay suelo. No hay cielo. Solo una linea de debug: CAINE_EXIT_BUILDER=INCOMPLETE.\nEl radar marca algo y luego se disculpa.',
  circus: 'CARPA PRINCIPAL\nLuces, musica sintetica y una aventura generada a la fuerza.\nJax encontro un boton. Eso rara vez ayuda.'
};

const memoryFragments = [
  'credencial-c&a',
  'pasillo-rojo',
  'casco-vr',
  'risa-caine',
  'puerta-falsa',
  'ultimo-acto'
];

let currentLanguage = localStorage.getItem('circoDigitalLang') || 'es';
let bootInterval = null;
let bootFallback = null;
let loginInterval = null;
let clockInterval = null;
let zIndexCounter = 100;
let glitchTimeout = null;
let isGlitchActive = false;
let isSystemCorrupted = false;
let cainePopupInterval = null;

function t(key, ...args) {
  const value = translations[currentLanguage][key] || translations.es[key];
  return typeof value === 'function' ? value(...args) : value;
}

function applyLanguage(lang) {
  currentLanguage = translations[lang] ? lang : 'es';
  localStorage.setItem('circoDigitalLang', currentLanguage);
  document.documentElement.lang = currentLanguage;

  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    element.innerHTML = t(key);
  });

  languageButtons.forEach(button => {
    button.classList.toggle('active', button.getAttribute('data-lang') === currentLanguage);
  });

  if (!loginScreen.classList.contains('hidden')) {
    loginStatus.textContent = t('loginWaiting');
  }
}

function setScreen(screen) {
  if (isSystemCorrupted) return;
  bootScreen.classList.toggle('hidden', screen !== 'boot');
  loginScreen.classList.toggle('hidden', screen !== 'login');
  desktop.classList.toggle('hidden', screen !== 'desktop');
}

function appendBootLine(text) {
  const line = document.createElement('div');
  line.textContent = text;
  bootLines.appendChild(line);
  bootLines.scrollTop = bootLines.scrollHeight;
}

function startBootSequence() {
  if (isSystemCorrupted) return;
  setScreen('boot');
  bootLines.innerHTML = '';
  bootProgress.style.width = '0%';
  bootStatus.textContent = t('bootStatus');
  let step = 0;
  clearInterval(bootInterval);
  clearTimeout(bootFallback);

  appendBootLine(t('bootStart'));
  appendBootLine('Press DEL to enter SETUP, F11 for Boot Menu');
  appendBootLine(' ');

  const nextStep = () => {
    const steps = bootSteps[currentLanguage];
    if (step >= steps.length) {
      clearInterval(bootInterval);
      clearTimeout(bootFallback);
      bootFallback = null;
      bootProgress.style.width = '100%';
      appendBootLine(t('bootComplete'));
      bootStatus.textContent = t('bootLogin');
      setTimeout(showLogin, 900);
      return;
    }

    appendBootLine(steps[step]);
    bootProgress.style.width = `${((step + 1) / steps.length) * 100}%`;
    step += 1;
  };

  nextStep();
  bootInterval = setInterval(nextStep, 520);

  bootFallback = setTimeout(() => {
    clearInterval(bootInterval);
    bootProgress.style.width = '100%';
    appendBootLine(t('bootFallback'));
    bootStatus.textContent = t('bootContinue');
    showLogin();
  }, 16000);
}

function showLogin() {
  if (isSystemCorrupted) return;
  setScreen('login');
  loginStatus.textContent = t('loginProgress');
  usernameInput.textContent = '';
  passwordInput.textContent = '';
  animateLoginFill();
}

function animateLoginFill() {
  const user = credentials.user;
  const pass = credentials.pass;
  let userIndex = 0;
  let passIndex = 0;
  clearInterval(loginInterval);

  loginInterval = setInterval(() => {
    if (userIndex < user.length) {
      usernameInput.textContent += user[userIndex++];
      return;
    }

    if (passIndex < pass.length) {
      passwordInput.textContent += '*';
      passIndex += 1;
      return;
    }

    clearInterval(loginInterval);
    loginStatus.textContent = t('loginOk');
    setTimeout(finishLogin, 850);
  }, 150);
}

function finishLogin() {
  if (isSystemCorrupted) return;
  loginStatus.textContent = t('loginDesktop');
  setTimeout(() => {
    setScreen('desktop');
    updateTime();
    clearInterval(clockInterval);
    clockInterval = setInterval(updateTime, 1000);
    bringToFront(consoleWindow);
    seedConsole();
  }, 700);
}

function updateTime() {
  const now = new Date();
  const pad = value => String(value).padStart(2, '0');
  taskTime.textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
}

function setZIndex(element) {
  element.style.zIndex = String(++zIndexCounter);
}

function bringToFront(element) {
  element.classList.remove('hidden');
  setZIndex(element);
}

function makeDraggable(windowElement) {
  const header = windowElement.querySelector('.window-header');
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let origX = 0;
  let origY = 0;

  const onMouseMove = event => {
    if (!isDragging) return;
    const deltaX = event.clientX - startX;
    const deltaY = event.clientY - startY;
    windowElement.style.left = `${origX + deltaX}px`;
    windowElement.style.top = `${origY + deltaY}px`;
  };

  const onMouseUp = () => {
    if (!isDragging) return;
    isDragging = false;
    windowElement.classList.remove('dragging');
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  header.addEventListener('mousedown', event => {
    if (event.button !== 0) return;
    event.preventDefault();
    isDragging = true;
    setZIndex(windowElement);
    windowElement.classList.add('dragging');
    startX = event.clientX;
    startY = event.clientY;
    const rect = windowElement.getBoundingClientRect();
    origX = rect.left;
    origY = rect.top;
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
}

function toggleVisibility(element) {
  element.classList.toggle('hidden');
  if (!element.classList.contains('hidden')) setZIndex(element);
}

function openAppById(id) {
  const apps = {
    consoleWindow: () => {
      bringToFront(consoleWindow);
      consoleInput.focus();
    },
    folderWindow: () => bringToFront(folderWindow),
    statsWindow: openStats,
    castWindow: openCast,
    exitWindow: openExitFinder,
    simWindow: openSimulator,
    memoryWindow: openMemoryLab
  };

  if (apps[id]) apps[id]();
  systemMenu.classList.add('hidden');
}

function openImage(file, name) {
  imageViewer.classList.remove('hidden');
  setZIndex(imageViewer);
  viewerImage.src = `images/${file}`;
  viewerCaption.textContent = t('viewerCaption', name);
}

function openStats() {
  bringToFront(statsWindow);
  setTimeout(updateStats, 80);
}

function updateStats() {
  const sanity = 52 + Math.floor(Math.random() * 39);
  const exitChance = (Math.random() * 0.09).toFixed(2);
  const glitch = 12 + Math.floor(Math.random() * 78);
  const fun = 80 + Math.floor(Math.random() * 20);

  sanityValue.textContent = `${sanity}%`;
  exitValue.textContent = `${exitChance}%`;
  glitchValue.textContent = `${glitch}%`;
  funValue.textContent = `${fun}%`;
  sanityBar.style.width = `${sanity}%`;
  exitBar.style.width = `${Math.max(3, Number(exitChance) * 10)}%`;
  glitchBar.style.width = `${glitch}%`;
  funBar.style.width = `${fun}%`;
}

function renderCastProfiles() {
  castList.innerHTML = '';
  castProfiles.forEach(profile => {
    const button = document.createElement('button');
    button.className = 'cast-card';
    button.type = 'button';
    button.textContent = profile.name;
    button.addEventListener('click', () => showCastProfile(profile.id));
    castList.appendChild(button);
  });
  showCastProfile(castProfiles[0].id);
}

function showCastProfile(id) {
  const profile = castProfiles.find(item => item.id === id) || castProfiles[0];
  castDetail.innerHTML = '';

  const title = document.createElement('h3');
  title.textContent = profile.name;
  const role = document.createElement('p');
  role.textContent = profile.role;
  const status = document.createElement('p');
  status.textContent = profile.status;
  const list = document.createElement('ul');

  profile.stats.forEach(stat => {
    const item = document.createElement('li');
    item.textContent = stat;
    list.appendChild(item);
  });

  castDetail.append(title, role, status, list);
}

function openCast() {
  bringToFront(castWindow);
  if (!castList.children.length) renderCastProfiles();
}

function openExitFinder() {
  bringToFront(exitWindow);
}

function openSimulator() {
  bringToFront(simWindow);
}

function runActSimulation(act) {
  simStage.textContent = actSimulations[act] || actSimulations.circus;
  if (act === 'circus') createConfetti();
}

function openMemoryLab() {
  bringToFront(memoryWindow);
  if (!memoryGrid.children.length) renderMemoryLab();
}

function renderMemoryLab() {
  memoryGrid.innerHTML = '';
  memoryFragments.forEach(fragment => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'memory-chip';
    button.textContent = fragment;
    button.addEventListener('click', () => decodeMemory(fragment));
    memoryGrid.appendChild(button);
  });
}

function decodeMemory(fragment) {
  const checksum = fragment
    .split('')
    .reduce((total, char) => total + char.charCodeAt(0), 0)
    .toString(16)
    .toUpperCase();

  memoryOutput.textContent = `Fragmento: ${fragment}\nChecksum emocional: 0x${checksum}\nEstado: recuperado parcialmente\nNota: el sistema evita confirmar si esto es recuerdo o decorado.`;
}

function runExitScan() {
  exitLog.textContent = '';
  scanExit.disabled = true;
  exitLog.classList.add('scanning');
  let index = 0;

  const writeLine = () => {
    exitLog.textContent += `${exitScanMessages[index]}\n`;
    index += 1;

    if (index >= exitScanMessages.length) {
      scanExit.disabled = false;
      exitLog.classList.remove('scanning');
      createConfetti();
      return;
    }

    setTimeout(writeLine, 520);
  };

  writeLine();
}

function closeImageViewer() {
  imageViewer.classList.add('hidden');
}

function appendConsoleLine(text, type = 'output') {
  const line = document.createElement('div');
  line.textContent = text;
  line.className = type;
  consoleContent.appendChild(line);
  consoleContent.scrollTop = consoleContent.scrollHeight;
}

function seedConsole() {
  if (consoleContent.dataset.seeded === 'true') return;
  consoleContent.dataset.seeded = 'true';
  appendConsoleLine('Circo Digital OS 1.0.0 [circo-linux tty7]', 'system');
  appendConsoleLine('Escribe "ayuda", "abstract pomni" o "lastact" para ver protocolos.', 'system');
}

const commandMap = {
  help: () => `Comandos disponibles:
  ayuda/help      muestra esta ayuda
  ls/dir          lista archivos del acto
  clear/cls       limpia la terminal
  neofetch        muestra identidad del sistema
  systeminfo      informacion completa del OS
  ping [host]     simula red
  deletecaine     elimina a Caine y corrompe el sistema
  delete caine    alias narrativo de deletecaine
  eliminar caine  alias en espanol
  abstract [nombre] procesa abstraccion de cualquier personaje
  lastact         estado del protocolo final sin spoilers
  void            abre diagnostico del vacio
  office          simula oficina C&A
  glitch          ruptura visual del escritorio
  caine           protocolo del anfitrion
  pomni           bitacora de salida
  circus          estado del circo digital
  act             inicia acto visual
  portal          calcula salida imposible
  stats           abre monitor de abstraccion
  cast            abre directorio de personajes
  exit            abre buscador de salida
  sim             abre simulador de actos
  memory          abre laboratorio de recuerdos
  mirror          imprime reflejo corrupto
  confetti        lluvia de datos de colores
  reboot          reinicia secuencia BIOS`,
  ayuda: () => commandMap.help(),
  dir: () => `total 48
drwxr-xr-x  5 operador circo 4096 may 24 18:22 .
drwxr-xr-x 12 root     root  4096 may 24 16:56 ..
-rw-r--r--  1 caine    circo 1234 acto-01.svg
-rw-r--r--  1 caine    circo 1752 acto-02.svg
-rw-r--r--  1 caine    circo 1991 acto-03.svg
-rw-r--r--  1 root     root  9000 last_act_protocol.sys
-rw-r--r--  1 pomni    user     0 exit_door.tmp
drwxr-xr-x  2 root     root  4096 programas
drwx------  1 void     void     ? mnt/void`,
  ls: () => commandMap.dir(),
  neofetch: () => `       .-""""-.
    .'  .--.  '.       operador@circo-linux
   /   /    \\   \\      OS: Circo Digital OS 1.0.0
  |   |  ()  |   |     Kernel: 1.0.0-caine
  |    \\____/    |     Shell: spectacle 7.7
   \\  .-====-.  /      Theme: BIOS + Linux + Digital Circus
    '._      _.'       Memory: 4096MB / infinito emocional
       '----'          Uptime: demasiado`,
  systeminfo: () => `Host: CIRCO-OS
Fabricante: Caine Entertainment Systems
Modelo: Carpa virtual tty7
Tipo: x64 con geometria imposible
GPU: Rasterizador VHS/CRT
Estado: estable, salvo cuando alguien escribe abstract jax`,
  ping: args => `PING ${args[0] || 'carpa.local'} (192.168.77.7) 56 bytes de datos
64 bytes desde 192.168.77.7: icmp_seq=1 ttl=64 tiempo=0.7 ms
64 bytes desde 192.168.77.7: icmp_seq=2 ttl=64 tiempo=0.8 ms
64 bytes desde 192.168.77.7: icmp_seq=3 ttl=64 tiempo=0.6 ms

--- estadisticas ---
3 paquetes transmitidos, 3 recibidos, 0% perdidos`,
  deletecaine: () => {
    beginCaineDeletion();
    return 'Solicitud aceptada: eliminando CAINE_CORE. No cierre esta ventana.';
  },
  killcaine: () => commandMap.deletecaine(),
  eliminarcaine: () => commandMap.deletecaine(),
  delete: args => {
    if ((args[0] || '').toLowerCase() === 'caine') return commandMap.deletecaine();
    return 'Uso protegido: delete caine';
  },
  eliminar: args => {
    if ((args[0] || '').toLowerCase() === 'caine') return commandMap.deletecaine();
    return 'Uso protegido: eliminar caine';
  },
  circus: () => `Estado del Circo Digital:
Anfitrion: CAINE
Usuarios activos: Pomni, Ragatha, Jax, Gangle, Zooble, Kinger
Subsistemas: aventuras, mascaras, recuerdos, vacio, puertas falsas
Riesgo de abstraccion: variable
Nota: The Last Act esta programado para junio de 2026; este OS no inventa spoilers.`,
  act: () => {
    return 'ACTO 07 iniciado: luces CRT, geometria rota y aplausos sinteticos.';
  },
  glitch: () => {
    triggerGlitch(10500);
    return 'GLITCH MAYOR: el escritorio entra en modo espectaculo. Mantenga la calma.';
  },
  magic: () => {
    createConfetti();
    return 'Magia digital ejecutada. La carpa responde con confeti de datos.';
  },
  caine: () => {
    openCast();
    showCastProfile('caine');
    return 'CAINE:// protocolo anfitrion abierto. Sonrisa renderizada al 100%.';
  },
  pomni: () => `Bitacora POMNI:
00:01 busqueda de salida
00:02 salida detectada
00:03 salida era decorado
00:04 respiracion simulada restaurada`,
  portal: () => `Calculando portal...
[##########] 100%
Resultado: puerta encontrada.
Advertencia: la puerta vuelve al escritorio.`,
  abstract: args => {
    const name = args.join(' ').trim() || 'operador';
    const normalized = name.toLowerCase();
    const profile = castProfiles.find(item => item.id === normalized || item.name.toLowerCase() === normalized);
    updateStats();

    if (profile) {
      return `ABSTRACT://${profile.name}
Rol detectado: ${profile.role}
Sintoma principal: ${profile.status}
Resultado: abstraccion contenida en sandbox visual.`;
    }

    return `ABSTRACT://${name.toUpperCase()}
Perfil no registrado en el directorio.
El sistema inventa una mascara temporal, detecta miedo escenico y la borra antes de que Caine pregunte.`;
  },
  lastact: () => `PROTOCOLO LAST_ACT
Estado canonico al 24/05/2026: final anunciado, no estrenado online.
Ventana teatral: junio de 2026.
Salida digital anunciada: 19/06/2026.
Modo del OS: simulacion sin spoilers confirmados.`,
  void: () => {
    openSimulator();
    runActSimulation('void');
    return 'Diagnostico del vacio abierto. No mire demasiado fijo.';
  },
  office: () => {
    openSimulator();
    runActSimulation('office');
    return 'Simulacion de oficina C&A cargada.';
  },
  stats: () => {
    openStats();
    return 'Monitor de abstraccion abierto.';
  },
  cast: () => {
    openCast();
    return 'Directorio del circo abierto.';
  },
  exit: () => {
    openExitFinder();
    runExitScan();
    return 'Buscador de salida ejecutandose.';
  },
  sim: () => {
    openSimulator();
    return 'Simulador de actos abierto.';
  },
  memory: () => {
    openMemoryLab();
    return 'Laboratorio de recuerdos abierto.';
  },
  mirror: () => `> operador mira la pantalla
> la pantalla mira al operador
> reflejo corrupto: O R E D A R E P O`,
  confetti: () => {
    createConfetti();
    return 'Confeti de datos liberado en el escritorio.';
  },
  echo: args => args.join(' '),
  time: () => {
    updateTime();
    return t('time', taskTime.textContent);
  },
  clear: () => {
    consoleContent.innerHTML = '';
    return null;
  },
  cls: () => commandMap.clear(),
  cd: () => t('cdError'),
  reboot: () => {
    consoleWindow.classList.add('hidden');
    setTimeout(startBootSequence, 250);
    return 'Reiniciando Circo Digital OS...';
  }
};

function executeCommand(input) {
  const commandText = input.trim();
  if (!commandText) return;
  appendConsoleLine(t('promptEcho', commandText), 'command');
  const parts = commandText.split(' ').filter(Boolean);
  const command = parts[0].toLowerCase();
  const args = parts.slice(1);
  const handler = commandMap[command];

  if (!handler) {
    appendConsoleLine(t('unknown', command), 'error');
    return;
  }

  const output = handler(args);
  if (output) appendConsoleLine(output);
}

function triggerGlitch(duration = 9000) {
  if (isSystemCorrupted) return;
  if (isGlitchActive) return;
  isGlitchActive = true;
  desktop.classList.add('glitch-active', 'shake');
  glitchOverlay.classList.remove('hidden');
  caineFace.classList.remove('hidden');
  createGhosts(9);
  createConfetti();

  clearTimeout(glitchTimeout);
  glitchTimeout = setTimeout(() => {
    desktop.classList.remove('shake', 'glitch-active');
    glitchOverlay.classList.add('hidden');
    caineFace.classList.add('hidden');
    ghostLayer.innerHTML = '';
    isGlitchActive = false;
    appendConsoleLine('Sistema estabilizado. El acto continua.', 'system');
  }, duration);
}

function beginCaineDeletion() {
  if (isSystemCorrupted) return;
  isSystemCorrupted = true;
  clearInterval(bootInterval);
  clearTimeout(bootFallback);
  clearInterval(loginInterval);
  clearTimeout(glitchTimeout);

  setScreen('desktop');
  systemMenu.classList.add('hidden');
  caineDeleteOverlay.classList.remove('hidden');
  caineDeleteOverlay.setAttribute('aria-hidden', 'false');
  caineDeleteProgress.style.width = '0%';
  caineDeleteLog.textContent = '';
  caineDeletePopups.innerHTML = '';
  caineDeleteStatus.textContent = 'Desconectando anfitrion...';
  desktop.classList.add('caine-deleting', 'caine-heavy-glitch');
  desktop.classList.remove('shake', 'glitch-active');
  glitchOverlay.classList.add('hidden');
  caineFace.classList.add('hidden');
  ghostLayer.innerHTML = '';

  startCainePopupStorm();

  const stages = [
    { text: 'Localizando CAINE_CORE en /root/showmaster...', className: 'fail-stage-1', drops: 0 },
    { text: 'Forzando cierre de aventuras activas...', className: 'fail-stage-1', drops: 1 },
    { text: 'Revocando permisos de anfitrion...', className: 'fail-stage-2', drops: 1 },
    { text: 'Separando puertas falsas del kernel...', className: 'fail-stage-2', drops: 2 },
    { text: 'Deshabilitando sonrisa obligatoria...', className: 'fail-stage-3', drops: 2 },
    { text: 'ERROR: Bubble intenta limpiar archivos criticos.', className: 'fail-stage-3', drops: 3 },
    { text: 'Rompiendo fondo de pantalla: carpa.bmp corrupto...', className: 'fail-stage-4', drops: 4 },
    { text: 'Desconectando voz del anfitrion...', className: 'fail-stage-4', drops: 5 },
    { text: 'Borrando sonrisa renderizada...', className: 'fail-stage-5', drops: 6 },
    { text: 'CAINE_CORE eliminado. El sistema ya no tiene maestro.', className: 'fail-stage-5', drops: 7 }
  ];

  let index = 0;
  const stageDuration = 1000;
  const timer = setInterval(() => {
    const progress = Math.min(100, Math.round(((index + 1) / stages.length) * 100));
    caineDeleteProgress.style.width = `${progress}%`;
    caineDeleteStatus.textContent = progress < 100 ? `Eliminacion ${progress}%` : 'Eliminacion completada';
    caineDeleteLog.textContent += `${stages[index].text}\n`;
    desktop.classList.add(stages[index].className);
    dropDesktopIcons(stages[index].drops);
    spawnCainePopup(5 + index * 2);
    index += 1;

    if (index >= stages.length) {
      clearInterval(timer);
      clearInterval(cainePopupInterval);
      cainePopupInterval = null;
      setTimeout(corruptSystemPermanently, 650);
    }
  }, stageDuration);
}

function startCainePopupStorm() {
  clearInterval(cainePopupInterval);
  cainePopupInterval = setInterval(() => spawnCainePopup(2), 220);
}

function spawnCainePopup(count = 1) {
  for (let index = 0; index < count; index += 1) {
    const popup = document.createElement('img');
    popup.className = 'caine-popup-face';
    popup.src = 'images/caine_face.svg';
    popup.alt = '';
    popup.style.left = `${Math.random() * 96}vw`;
    popup.style.top = `${Math.random() * 88}vh`;
    popup.style.width = `${38 + Math.random() * 92}px`;
    popup.style.animationDuration = `${640 + Math.random() * 520}ms`;
    popup.style.animationDelay = `${Math.random() * 160}ms`;
    caineDeletePopups.appendChild(popup);

    setTimeout(() => {
      if (popup.parentElement) popup.parentElement.removeChild(popup);
    }, 1280);
  }
}

function dropDesktopIcons(count) {
  const icons = Array.from(document.querySelectorAll('.desktop-icon:not(.falling-icon)'));
  for (let index = 0; index < count && icons.length; index += 1) {
    const icon = icons.splice(Math.floor(Math.random() * icons.length), 1)[0];
    icon.classList.add('falling-icon');
    icon.style.setProperty('--fall-x', `${-120 + Math.random() * 240}px`);
    icon.style.setProperty('--fall-rotate', `${-35 + Math.random() * 70}deg`);
    icon.style.animationDelay = `${index * 110}ms`;
  }
}
const finalSong = new Audio(
  encodeURI("resources/music/Cainea, Gooseworx - Your New Home.mp3")
);

finalSong.volume = 0.7;
finalSong.loop = false;
finalSong.playbackRate = 0.92;


function corruptSystemPermanently() {

  finalSong.pause();
  finalSong.currentTime = 0;

  finalSong.play().catch(err => {
    console.log("Autoplay bloqueado:", err);
  });

  clearInterval(cainePopupInterval);
  cainePopupInterval = null;

  caineDeletePopups.innerHTML = '';

  desktop.classList.remove(
    'caine-deleting',
    'caine-heavy-glitch'
  );

  desktop.classList.remove(
    'fail-stage-1',
    'fail-stage-2',
    'fail-stage-3',
    'fail-stage-4',
    'fail-stage-5'
  );

  desktop.classList.add('system-corrupted');

  caineDeleteOverlay.classList.add('hidden');
  caineDeleteOverlay.setAttribute('aria-hidden', 'true');

  bootScreen.classList.add('hidden');
  loginScreen.classList.add('hidden');

  desktop.classList.remove('hidden');

  caineFace.classList.remove('hidden');
  caineFace.classList.add('dead-caine');

  appendConsoleLine('CAINE_CORE: 0x00000000', 'error');

  appendConsoleLine(
    'Sistema sin anfitrion. Recarga la pagina para restaurar una instancia limpia.',
    'error'
  );

  consoleInput.disabled = true;

  document.querySelectorAll('button').forEach(button => {
    if (!button.closest('.language-switcher')) {
      button.disabled = true;
    }
  });

  let flickerCount = 0;

  const flickerInterval = setInterval(() => {

    desktop.classList.toggle('screen-flicker');

    flickerCount++;

    if (flickerCount >= 12) {

      clearInterval(flickerInterval);

      desktop.classList.remove('screen-flicker');

    }

  }, 120);

}

function createGhosts(count) {
  for (let index = 0; index < count; index += 1) {
    const ghost = document.createElement('div');
    ghost.className = 'glitch-ghost';
    ghost.style.backgroundImage = "url('images/caine_face.svg')";
    ghost.style.left = `${8 + Math.random() * 82}vw`;
    ghost.style.top = `${22 + Math.random() * 58}vh`;
    ghost.style.animationDelay = `${index * 0.18}s`;
    ghostLayer.appendChild(ghost);

    setTimeout(() => {
      if (ghost.parentElement) ghost.parentElement.removeChild(ghost);
    }, 9000);
  }
}

function createConfetti() {
  for (let index = 0; index < 42; index += 1) {
    const bit = document.createElement('span');
    bit.className = 'confetti-bit';
    bit.style.left = `${Math.random() * 100}%`;
    bit.style.animationDelay = `${Math.random() * 0.6}s`;
    bit.style.setProperty('--hue', String(Math.floor(Math.random() * 360)));
    ghostLayer.appendChild(bit);
    setTimeout(() => {
      if (bit.parentElement) bit.parentElement.removeChild(bit);
    }, 2800);
  }
}

function bindActions() {
  folderIcon.addEventListener('click', () => toggleVisibility(folderWindow));
  terminalIcon.addEventListener('click', () => {
    bringToFront(consoleWindow);
    consoleInput.focus();
  });
  statsIcon.addEventListener('click', openStats);
  castIcon.addEventListener('click', openCast);
  exitIcon.addEventListener('click', openExitFinder);
  simIcon.addEventListener('click', openSimulator);
  memoryIcon.addEventListener('click', openMemoryLab);
  startButton.addEventListener('click', () => toggleVisibility(systemMenu));
  closeFolder.addEventListener('click', () => folderWindow.classList.add('hidden'));
  closeConsole.addEventListener('click', () => consoleWindow.classList.add('hidden'));
  minimizeConsole.addEventListener('click', () => toggleVisibility(consoleWindow));
  closeViewer.addEventListener('click', closeImageViewer);
  closeStats.addEventListener('click', () => statsWindow.classList.add('hidden'));
  closeCast.addEventListener('click', () => castWindow.classList.add('hidden'));
  closeExit.addEventListener('click', () => exitWindow.classList.add('hidden'));
  closeSim.addEventListener('click', () => simWindow.classList.add('hidden'));
  closeMemory.addEventListener('click', () => memoryWindow.classList.add('hidden'));
  refreshStats.addEventListener('click', updateStats);
  scanExit.addEventListener('click', runExitScan);
  menuReboot.addEventListener('click', () => {
    systemMenu.classList.add('hidden');
    startBootSequence();
  });

  document.querySelectorAll('[data-open-app]').forEach(button => {
    button.addEventListener('click', () => openAppById(button.getAttribute('data-open-app')));
  });

  document.querySelectorAll('[data-act]').forEach(button => {
    button.addEventListener('click', () => runActSimulation(button.getAttribute('data-act')));
  });

  document.addEventListener('click', event => {
    if (systemMenu.classList.contains('hidden')) return;
    if (systemMenu.contains(event.target) || startButton.contains(event.target)) return;
    systemMenu.classList.add('hidden');
  });

  languageButtons.forEach(button => {
    button.addEventListener('click', () => applyLanguage(button.getAttribute('data-lang')));
  });

  consoleInput.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      executeCommand(consoleInput.value);
      consoleInput.value = '';
    }
  });

  document.querySelectorAll('[data-image]').forEach(button => {
    button.addEventListener('click', () => {
      const file = button.getAttribute('data-image');
      const item = imageList.find(image => image.file === file);
      openImage(file, item ? item.name : file);
    });
  });
}

function setupDrag() {
  document.querySelectorAll('.window').forEach(windowElement => {
    makeDraggable(windowElement);
    windowElement.addEventListener('mousedown', () => setZIndex(windowElement));
  });
}

window.addEventListener('DOMContentLoaded', () => {
  folderWindow.classList.add('hidden');
  consoleWindow.classList.add('hidden');
  imageViewer.classList.add('hidden');
  statsWindow.classList.add('hidden');
  castWindow.classList.add('hidden');
  exitWindow.classList.add('hidden');
  simWindow.classList.add('hidden');
  memoryWindow.classList.add('hidden');
  systemMenu.classList.add('hidden');
  glitchOverlay.classList.add('hidden');
  caineFace.classList.add('hidden');
  ghostLayer.innerHTML = '';
  applyLanguage(currentLanguage);
  setScreen('boot');
  startBootSequence();
  bindActions();
  setupDrag();
});
