import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Lock, 
  Unlock, 
  Trophy, 
  ClipboardCheck, 
  MapPin, 
  BookOpen, 
  Briefcase, 
  ShieldAlert, 
  FileText, 
  Compass, 
  Monitor,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  Award
} from "lucide-react";

interface Test {
  q: string;
  options: string[];
  answer: number;
  feedback: string;
}

interface TrueFalse {
  statement: string;
  answer: boolean;
  feedback: string;
}

interface CaseStudy {
  title: string;
  scenario: string;
  question: string;
  options: string[];
  answer: number;
  feedback: string;
}

interface Mission {
  id: number;
  icon: string | React.ReactNode;
  color: string;
  title: string;
  badge: string;
  ra: string;
  subtitle: string;
  code: string;
  tests: Test[];
  trueFalse: TrueFalse;
  caseStudy: CaseStudy;
  shortChallenge: string;
}

const missions: Mission[] = [
  {
    id: 1,
    icon: <Briefcase className="w-8 h-8" />,
    color: "#1f2937",
    title: "Misión 1 · Sector profesional",
    badge: "Sector Pro",
    ra: "RA1",
    subtitle: "Puestos de trabajo, competencias, sector privado y función pública.",
    code: "SECTOR",
    tests: [
      {
        q: "¿Qué debe incluir un buen análisis del sector profesional?",
        options: [
          "Solo una lista de empresas conocidas.",
          "Actividades del sector, salidas profesionales, evolución, competencias y entidades relevantes.",
          "Únicamente las asignaturas del ciclo formativo.",
          "Solo información sobre oposiciones."
        ],
        answer: 1,
        feedback: "Exacto. El análisis debe conectar el ciclo con el mercado laboral real."
      },
      {
        q: "¿Qué diferencia básica existe entre acceder al sector privado y a la función pública?",
        options: [
          "En la función pública se accede normalmente mediante procedimientos basados en igualdad, mérito y capacidad.",
          "En el sector privado nunca hay entrevistas.",
          "En la función pública no se piden requisitos.",
          "En el sector privado no existen convenios colectivos."
        ],
        answer: 0,
        feedback: "Correcto. La función pública exige procesos formales como oposición, concurso o concurso-oposición."
      },
      {
        q: "¿Qué son las competencias personales y sociales con valor profesional?",
        options: [
          "Solo conocimientos técnicos del ciclo.",
          "Rasgos y habilidades como responsabilidad, comunicación, autonomía, trabajo en equipo y adaptación.",
          "La nota media del expediente académico.",
          "La experiencia laboral únicamente."
        ],
        answer: 1,
        feedback: "Muy bien. Son clave para la empleabilidad y para identificar la zona de desarrollo próximo."
      }
    ],
    trueFalse: {
      statement: "Un análisis del sector profesional debe relacionar las salidas laborales con las competencias del título.",
      answer: true,
      feedback: "Correcto. No se trata solo de buscar empresas, sino de conectar sector, puestos y perfil profesional."
    },
    caseStudy: {
      title: "Caso práctico · Elegir camino profesional",
      scenario:
        "Una alumna termina el ciclo y duda entre enviar candidaturas a empresas privadas, preparar una oposición o seguir formándose. Quiere decidir con criterio y no solo por intuición.",
      question: "¿Qué debería analizar primero?",
      options: [
        "Las principales salidas profesionales, requisitos, competencias demandadas y diferencias entre sector público y privado.",
        "Solo el sueldo de la primera oferta que encuentre.",
        "Únicamente lo que hagan sus amistades.",
        "Nada, porque todas las opciones profesionales son iguales."
      ],
      answer: 0,
      feedback: "Exacto. El RA1 busca comprender el sector para tomar decisiones profesionales fundamentadas."
    },
    shortChallenge:
      "Define dos salidas profesionales de tu ciclo y una competencia clave para cada una."
  },
  {
    id: 2,
    icon: <ShieldAlert className="w-8 h-8" />,
    color: "#047857",
    title: "Misión 2 · Alerta prevención",
    badge: "Prevención Total",
    ra: "RA2",
    subtitle: "Riesgos laborales, daños, medidas preventivas, emergencias y primeros auxilios.",
    code: "PRL",
    tests: [
      {
        q: "¿Cuál es la diferencia entre prevención y protección?",
        options: [
          "La prevención evita o reduce el riesgo en origen; la protección reduce las consecuencias del daño.",
          "Son exactamente lo mismo.",
          "La prevención solo se aplica después del accidente.",
          "La protección sustituye siempre a la evaluación de riesgos."
        ],
        answer: 0,
        feedback:
          "Correcto. Primero se intenta prevenir; si no es posible eliminar el riesgo, se aplican medidas de protección."
      },
      {
        q: "¿Qué debe hacerse en primer lugar ante una emergencia siguiendo el protocolo PAS?",
        options: [
          "Socorrer sin mirar el entorno.",
          "Proteger la zona y a las personas implicadas.",
          "Llamar a la familia de la víctima.",
          "Mover siempre a la persona accidentada."
        ],
        answer: 1,
        feedback: "Exacto. PAS significa Proteger, Avisar y Socorrer."
      },
      {
        q: "¿Cuál de estos ejemplos es un daño profesional?",
        options: [
          "Una enfermedad profesional causada por la exposición a un agente del trabajo.",
          "Una afición personal realizada fuera del trabajo.",
          "Un curso voluntario sin relación laboral.",
          "Una compra de material escolar."
        ],
        answer: 0,
        feedback:
          "Correcto. Los daños profesionales incluyen accidentes de trabajo y enfermedades profesionales."
      }
    ],
    trueFalse: {
      statement:
        "La protección colectiva debe priorizarse frente a la protección individual siempre que sea posible.",
      answer: true,
      feedback:
        "Correcto. Las medidas colectivas protegen a varias personas y deben priorizarse antes que los EPIs."
    },
    caseStudy: {
      title: "Caso práctico · Riesgo en el puesto",
      scenario:
        "En una empresa del sector se detectan suelos mojados, posturas forzadas y falta de formación sobre emergencias. Además, parte del alumnado no identifica qué daños pueden derivarse de esos riesgos.",
      question: "¿Cuál sería la actuación más completa?",
      options: [
        "Identificar y clasificar riesgos, relacionarlos con daños posibles y proponer medidas preventivas, protección y actuación ante emergencias.",
        "Comprar EPIs sin analizar el puesto.",
        "Esperar a que ocurra un accidente para actuar.",
        "Dejar la prevención únicamente en manos de cada trabajador."
      ],
      answer: 0,
      feedback:
        "Muy bien. El RA2 exige identificar riesgos, daños, medidas y actuaciones básicas ante emergencias."
    },
    shortChallenge:
      "Explica un riesgo laboral habitual de tu sector, el daño que puede provocar y una medida preventiva."
  },
  {
    id: 3,
    icon: <FileText className="w-8 h-8" />,
    color: "#4338ca",
    title: "Misión 3 · Caso laboral",
    badge: "Laboral Expert",
    ra: "RA3",
    subtitle: "Contrato, convenio, nómina, derechos, Seguridad Social y vicisitudes laborales.",
    code: "CONTRATO",
    tests: [
      {
        q: "¿Qué documento regula condiciones laborales como salario, jornada o permisos en un sector?",
        options: [
          "El convenio colectivo aplicable.",
          "La agenda personal.",
          "El currículum vitae.",
          "Una oferta de empleo cualquiera."
        ],
        answer: 0,
        feedback:
          "Muy bien. El convenio colectivo es una fuente clave para conocer las condiciones de trabajo."
      },
      {
        q: "En una nómina, ¿qué es el líquido a percibir?",
        options: [
          "El salario bruto antes de deducciones.",
          "La cantidad final que cobra la persona trabajadora después de aplicar deducciones.",
          "La base de cotización por contingencias comunes.",
          "El total de complementos salariales sin incluir salario base."
        ],
        answer: 1,
        feedback: "Correcto. El líquido a percibir es el salario neto."
      },
      {
        q: "¿Por qué es importante la Seguridad Social?",
        options: [
          "Porque garantiza prestaciones y protección ante situaciones como desempleo, incapacidad o jubilación.",
          "Porque sustituye al contrato de trabajo.",
          "Porque elimina todos los impuestos.",
          "Porque decide siempre el horario de la empresa."
        ],
        answer: 0,
        feedback: "Exacto. Es un pilar esencial de protección social."
      }
    ],
    trueFalse: {
      statement:
        "El salario neto es la cantidad final que recibe la persona trabajadora después de aplicar las deducciones.",
      answer: true,
      feedback:
        "Correcto. El salario bruto es el total antes de deducciones; el neto es lo que se cobra finalmente."
    },
    caseStudy: {
      title: "Caso práctico · Revisar una nómina",
      scenario:
        "Una persona trabajadora recibe su primera nómina. No entiende la diferencia entre salario base, complementos, deducciones, base de cotización y líquido a percibir.",
      question: "¿Qué debería revisar para interpretar correctamente la nómina?",
      options: [
        "Devengos, deducciones, bases de cotización y líquido a percibir, además del convenio aplicable.",
        "Solo el nombre de la empresa.",
        "Solo el logotipo de la gestoría.",
        "Nada, porque las nóminas no pueden comprobarse."
      ],
      answer: 0,
      feedback:
        "Exacto. Interpretar la nómina implica distinguir conceptos salariales, deducciones y bases."
    },
    shortChallenge:
      "Explica la diferencia entre salario bruto y salario neto con tus propias palabras."
  },
  {
    id: 4,
    icon: <Compass className="w-8 h-8" />,
    color: "#be185d",
    title: "Misión 4 · Brújula profesional",
    badge: "Brújula Profesional",
    ra: "RA4",
    subtitle: "Autoconocimiento, DAFO, intereses, metas, itinerario y plan de acción.",
    code: "DAFO",
    tests: [
      {
        q: "¿Para qué sirve un DAFO personal en orientación profesional?",
        options: [
          "Para analizar fortalezas, debilidades, oportunidades y amenazas en relación con la empleabilidad.",
          "Para calcular la nómina mensual.",
          "Para sustituir el currículum vitae.",
          "Para evitar tomar decisiones profesionales."
        ],
        answer: 0,
        feedback:
          "Correcto. El DAFO ayuda a tomar decisiones realistas y estratégicas."
      },
      {
        q: "¿Qué elemento pertenece al autoconocimiento profesional?",
        options: [
          "Intereses, motivaciones, habilidades, destrezas y competencias personales.",
          "Solo el nombre de la empresa donde se quiere trabajar.",
          "La normativa de primeros auxilios exclusivamente.",
          "El número de pagas extra."
        ],
        answer: 0,
        feedback:
          "Muy bien. El autoconocimiento es la base de la hoja de ruta profesional."
      },
      {
        q: "¿Cómo debe ser un objetivo profesional útil?",
        options: [
          "Concreto, realista, conectado con intereses y acompañado de acciones.",
          "Muy general y sin plazo.",
          "Copiado de otra persona.",
          "Basado solo en la suerte."
        ],
        answer: 0,
        feedback: "Exacto. Un buen objetivo orienta el plan de acción."
      }
    ],
    trueFalse: {
      statement:
        "El autoconocimiento profesional ayuda a tomar decisiones formativas y laborales más coherentes.",
      answer: true,
      feedback:
        "Correcto. Conocer intereses, habilidades y áreas de mejora permite diseñar una hoja de ruta realista."
    },
    caseStudy: {
      title: "Caso práctico · Hoja de ruta",
      scenario:
        "Una alumna tiene buena capacidad de comunicación y motivación, pero le cuesta organizarse y no sabe si buscar empleo, seguir estudiando o preparar oposiciones.",
      question: "¿Qué sería lo más adecuado para orientarla?",
      options: [
        "Analizar su perfil, hacer un DAFO, valorar itinerarios, definir un objetivo y diseñar acciones concretas.",
        "Elegir al azar una opción y no revisarla nunca.",
        "Descartar sus intereses personales.",
        "Tomar la decisión únicamente por la opinión de otra persona."
      ],
      answer: 0,
      feedback:
        "Exacto. El RA4 se centra en analizar el potencial profesional y elaborar una hoja de ruta."
    },
    shortChallenge:
      "Escribe una fortaleza y una debilidad profesional que podría tener una persona que empieza en el sector."
  },
  {
    id: 5,
    icon: <Monitor className="w-8 h-8" />,
    color: "#b45309",
    title: "Misión 5 · Mochila digital",
    badge: "Aprendizaje Autónomo",
    ra: "RA5",
    subtitle: "PLE, aprendizaje permanente, identidad digital, empleabilidad y plan de desarrollo individual.",
    code: "PLE",
    tests: [
      {
        q: "¿Qué es un PLE?",
        options: [
          "Un entorno personal de aprendizaje formado por herramientas, fuentes, conexiones y actividades para seguir aprendiendo.",
          "Un tipo de contrato laboral.",
          "Una prestación de Seguridad Social.",
          "Un documento obligatorio de la nómina."
        ],
        answer: 0,
        feedback:
          "Correcto. El PLE ayuda a aprender de forma autónoma y mejorar la empleabilidad."
      },
      {
        q: "¿Por qué importa la identidad digital en la empleabilidad?",
        options: [
          "Porque la imagen profesional online puede influir en procesos de selección y oportunidades laborales.",
          "Porque solo sirve para redes sociales de ocio.",
          "Porque sustituye siempre a la entrevista personal.",
          "Porque no tiene relación con el mundo laboral."
        ],
        answer: 0,
        feedback:
          "Exacto. Cuidar la identidad digital es parte de la estrategia profesional."
      },
      {
        q: "¿Qué debe incluir un plan de desarrollo individual?",
        options: [
          "Objetivos, áreas de mejora, acciones, recursos, plazos y seguimiento.",
          "Solo una lista de deseos.",
          "Únicamente datos personales.",
          "Solo enlaces a vídeos aleatorios."
        ],
        answer: 0,
        feedback:
          "Muy bien. El plan de desarrollo convierte la orientación en acciones concretas."
      }
    ],
    trueFalse: {
      statement:
        "El aprendizaje permanente es importante porque la empleabilidad exige actualizar competencias a lo largo de la vida profesional.",
      answer: true,
      feedback:
        "Correcto. El RA5 conecta aprendizaje autónomo, competencia digital, PLE e identidad profesional."
    },
    caseStudy: {
      title: "Caso práctico · Identidad digital",
      scenario:
        "Un alumno quiere buscar prácticas, pero su correo electrónico no es profesional, no tiene portfolio, no actualiza su CV y no utiliza ninguna herramienta para organizar su aprendizaje.",
      question: "¿Qué actuación sería más completa?",
      options: [
        "Crear un PLE con herramientas, fuentes y contactos; mejorar su identidad digital y diseñar un plan de desarrollo individual.",
        "Usar únicamente redes sociales de ocio.",
        "No revisar nunca su presencia online.",
        "Esperar a que las oportunidades lleguen solas."
      ],
      answer: 0,
      feedback:
        "Muy bien. El RA5 implica usar recursos digitales de forma estratégica para aprender y mejorar la empleabilidad."
    },
    shortChallenge:
      "Propón tres herramientas digitales que incluirías en tu PLE y justifica su utilidad."
  }
];

const finalReflection = [
  "¿Qué RA dominamos mejor como equipo?",
  "¿Qué RA necesitamos repasar más?",
  "¿Qué aprendizaje de IPE I consideramos más útil para nuestra vida académica, laboral y profesional?"
];

const secretNumbers: Record<number, string> = {
  1: "3",
  2: "1",
  3: "5",
  4: "2",
  5: "4"
};

const finalSecretCode = "IPE-31524";

export default function App() {
  const [started, setStarted] = useState(false);
  const [activeMission, setActiveMission] = useState(0);
  const [selected, setSelected] = useState<Record<string, number>>({});
  const [tfSelected, setTfSelected] = useState<Record<number, boolean>>({});
  const [caseSelected, setCaseSelected] = useState<Record<number, number>>({});
  const [shortAnswers, setShortAnswers] = useState<Record<number, string>>({});
  const [completed, setCompleted] = useState<Record<number, boolean>>({});
  const [showPassport, setShowPassport] = useState(false);
  const [finalCodeInput, setFinalCodeInput] = useState("");
  const [finalCodeError, setFinalCodeError] = useState(false);
  const [gamePassed, setGamePassed] = useState(false);

  const totalAutoItems = missions.reduce((acc, m) => acc + m.tests.length + 2, 0);

  const score = useMemo(() => {
    return missions.reduce((acc, m) => {
      const testScore = m.tests.reduce((qacc, q, qi) => {
        const key = `${m.id}-test-${qi}`;
        return qacc + (selected[key] === q.answer ? 1 : 0);
      }, 0);

      const tfScore = tfSelected[m.id] === m.trueFalse.answer ? 1 : 0;
      const caseScore = caseSelected[m.id] === m.caseStudy.answer ? 1 : 0;

      return acc + testScore + tfScore + caseScore;
    }, 0);
  }, [selected, tfSelected, caseSelected]);

  const missionScore = (mission: Mission) => {
    const testScore = mission.tests.reduce((acc, _, qi) => {
      const key = `${mission.id}-test-${qi}`;
      return acc + (selected[key] === mission.tests[qi].answer ? 1 : 0);
    }, 0);

    const tfScore = tfSelected[mission.id] === mission.trueFalse.answer ? 1 : 0;
    const caseScore = caseSelected[mission.id] === mission.caseStudy.answer ? 1 : 0;

    return testScore + tfScore + caseScore;
  };

  const isMissionComplete = (mission: Mission) => {
    const testsDone = mission.tests.every(
      (_, qi) => selected[`${mission.id}-test-${qi}`] !== undefined
    );
    const tfDone = tfSelected[mission.id] !== undefined;
    const caseDone = caseSelected[mission.id] !== undefined;
    const shortDone = (shortAnswers[mission.id] || "").trim().length >= 8;

    return testsDone && tfDone && caseDone && shortDone;
  };

  const allCompleted = missions.every((m) => completed[m.id]);

  const reset = () => {
    setStarted(false);
    setActiveMission(0);
    setSelected({});
    setTfSelected({});
    setCaseSelected({});
    setShortAnswers({});
    setCompleted({});
    setShowPassport(false);
    setFinalCodeInput("");
    setFinalCodeError(false);
    setGamePassed(false);
  };

  const current = missions[activeMission];

  if (!started) {
    return (
      <div className="min-h-screen bg-[#020617] bg-[radial-gradient(circle_at_50%_30%,#1e1b4b_0%,transparent_70%)] text-white flex items-center justify-center p-6 sm:p-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl w-full"
        >
          <div className="bg-white/5 border border-white/20 rounded-[28px] overflow-hidden backdrop-blur-xl shadow-2xl">
            <div className="p-8 sm:p-12">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white font-bold text-xs uppercase tracking-wider mb-6">
                Repaso final · Módulo IPE I
              </span>

              <h1 className="text-5xl sm:text-7xl font-black mb-4 leading-tight">
                Escape Room IPE I
              </h1>

              <h2 className="text-2xl sm:text-3xl text-indigo-200 mb-8 font-light">
                La misión integral del módulo
              </h2>

              <p className="text-lg sm:text-xl leading-relaxed text-slate-300 max-w-2xl mb-12">
                Superad cinco misiones vinculadas a los Resultados de Aprendizaje
                del módulo: sector profesional, prevención de riesgos laborales,
                relación laboral, autoconocimiento profesional y aprendizaje
                autónomo.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
                {missions.map((m) => (
                  <motion.div
                    key={m.id}
                    whileHover={{ y: -5 }}
                    className="bg-white/10 border border-white/10 rounded-2xl p-4 text-center"
                  >
                    <div className="text-3xl mb-2 flex justify-center text-indigo-300">{m.icon}</div>
                    <div className="font-black text-sm uppercase tracking-tighter">{m.ra}</div>
                    <div className="text-[10px] text-slate-400 mt-1 uppercase tracking-widest">{m.badge}</div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-6 mb-12 text-slate-400 text-sm font-bold uppercase tracking-widest">
                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-indigo-500"></div> Test</div>
                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> V/F</div>
                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-rose-500"></div> Casos</div>
                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-amber-500"></div> Retos</div>
              </div>

              <button
                className="w-full sm:w-auto bg-white text-indigo-950 font-black text-lg px-10 py-5 rounded-2xl hover:bg-slate-100 transition-all active:scale-95 shadow-xl shadow-indigo-500/10 cursor-pointer"
                onClick={() => setStarted(true)}
              >
                Comenzar la misión
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-4 sm:p-24 selection:bg-indigo-100">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight flex items-center gap-3">
              <Award className="w-10 h-10 text-indigo-600" />
              Escape Room IPE I
            </h1>
            <div className="flex items-center gap-4 mt-3">
              <span className="text-slate-500 text-sm font-medium">
                Puntuación: <strong className="text-slate-900 font-black">{score}/{totalAutoItems}</strong>
              </span>
              <div className="w-px h-4 bg-slate-300"></div>
              <span className="text-slate-500 text-sm font-medium">
                Misiones: <strong className="text-slate-900 font-black">{Object.keys(completed).length}/5</strong>
              </span>
            </div>
          </div>

          <div className="flex gap-3">
            <button 
              className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 font-bold px-5 py-3 rounded-xl hover:border-slate-300 transition-all active:scale-95 cursor-pointer shadow-sm"
              onClick={reset}
            >
              <RefreshCw className="w-4 h-4" /> Reiniciar
            </button>
            <button
              className="group flex items-center gap-2 bg-slate-900 text-white font-bold px-6 py-3 rounded-xl hover:bg-slate-800 transition-all active:scale-95 cursor-pointer shadow-lg shadow-slate-900/10"
              onClick={() => setShowPassport(!showPassport)}
            >
              <MapPin className={`w-4 h-4 transition-transform ${showPassport ? 'rotate-180' : ''}`} />
              Pasaporte
            </button>
          </div>
        </header>

        <AnimatePresence>
          {showPassport && (
            <motion.section 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-[28px] border border-slate-200 p-8 mb-8 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-indigo-600" />
                <h2 className="text-2xl font-black">Pasaporte digital IPE I</h2>
              </div>
              <p className="text-slate-500 mb-8 max-w-2xl">
                Al completar las misiones, aparecerán sus códigos. La clave final se forma con todas las palabras clave y números secretos de cada RA.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
                {missions.map((m) => (
                  <div
                    key={m.id}
                    className={`border-2 transition-all p-5 rounded-2xl ${completed[m.id] ? 'bg-indigo-50 border-indigo-200 shadow-inner' : 'bg-slate-50 border-slate-100 opacity-60'}`}
                  >
                    <div className="text-xs font-black uppercase text-slate-400 mb-1">{m.ra}</div>
                    <div className="font-bold text-slate-900 text-sm mb-3 truncate">{m.badge}</div>
                    <div className="font-black text-2xl tracking-tight text-indigo-950 font-mono">
                      {completed[m.id]
                        ? `${m.code} · ${secretNumbers[m.id]}`
                        : "••••"}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8">
          <aside className="space-y-3">
            {missions.map((m, idx) => (
              <button
                key={m.id}
                className={`w-full group text-left border-2 transition-all duration-300 rounded-[24px] p-5 cursor-pointer flex items-center gap-4 ${
                  activeMission === idx 
                    ? 'border-indigo-600 bg-white ring-8 ring-indigo-500/5' 
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
                onClick={() => setActiveMission(idx)}
              >
                <div
                  className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ background: m.color, color: 'white' }}
                >
                  {m.icon}
                </div>

                <div className="flex-1 overflow-hidden">
                  <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{m.ra}</div>
                  <div className="font-black text-slate-900 truncate my-0.5">{m.badge}</div>
                  <div className="text-xs font-bold text-slate-500">
                    {missionScore(m)}/{m.tests.length + 2} aciertos
                  </div>
                </div>

                <div className="shrink-0 transition-all duration-500">
                  {completed[m.id] ? <Unlock className="w-6 h-6 text-emerald-500" /> : <Lock className="w-6 h-6 text-slate-200" />}
                </div>
              </button>
            ))}
          </aside>

          <motion.section 
            key={current.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-[32px] border border-slate-200 shadow-2xl overflow-hidden"
          >
            <div
              className="p-10 text-white relative overflow-hidden"
              style={{ background: current.color }}
            >
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white font-bold text-[10px] uppercase tracking-widest mb-4">
                  {current.ra}
                </span>
                <h2 className="text-4xl font-black flex items-center gap-4 mb-3">
                  {current.title}
                </h2>
                <p className="text-white/80 text-lg max-w-xl font-medium leading-relaxed">
                  {current.subtitle}
                </p>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 opacity-5 translate-x-1/4 -translate-y-1/4 scale-150 rotate-12">
                {current.icon}
              </div>
            </div>

            <div className="p-8 space-y-12">
              {/* Prueba 1: Test */}
              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center font-black">1</div>
                  <h3 className="text-xl font-black">Test rápido de conocimientos</h3>
                </div>

                <div className="space-y-8">
                  {current.tests.map((question, qi) => {
                    const key = `${current.id}-test-${qi}`;
                    const chosen = selected[key];
                    const answered = chosen !== undefined;
                    const correct = chosen === question.answer;

                    return (
                      <div key={key} className="bg-slate-50 rounded-3xl p-6 border border-slate-100">
                        <div className="flex gap-4 mb-6">
                          <span className="text-slate-400 font-black font-mono">Q{qi + 1}.</span>
                          <p className="font-bold text-slate-800 text-lg leading-snug">{question.q}</p>
                        </div>

                        <div className="grid grid-cols-1 gap-3">
                          {question.options.map((op, oi) => {
                            const isChosen = chosen === oi;
                            const isRight = question.answer === oi;
                            
                            let classes = "w-full text-left p-5 rounded-2xl border-2 transition-all font-semibold font-medium flex items-center gap-4 group ";
                            
                            if (answered) {
                              if (isRight) {
                                classes += "bg-emerald-50 border-emerald-500 text-emerald-900 shadow-lg shadow-emerald-500/5";
                              } else if (isChosen) {
                                classes += "bg-rose-50 border-rose-500 text-rose-900";
                              } else {
                                classes += "bg-white border-transparent opacity-50 grayscale";
                              }
                            } else {
                              classes += "bg-white border-transparent hover:border-indigo-100 hover:shadow-lg hover:shadow-indigo-500/5 active:scale-[0.99] cursor-pointer";
                            }

                            return (
                              <button
                                key={oi}
                                disabled={answered}
                                className={classes}
                                onClick={() => setSelected((prev) => ({ ...prev, [key]: oi }))}
                              >
                                <span className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border-2 font-black transition-colors ${
                                  answered && isRight ? 'bg-emerald-500 border-emerald-500 text-white' : 
                                  answered && isChosen ? 'bg-rose-500 border-rose-500 text-white' :
                                  'bg-slate-100 border-slate-200 text-slate-400 group-hover:bg-indigo-50 group-hover:border-indigo-200 group-hover:text-indigo-600'
                                }`}>
                                  {String.fromCharCode(65 + oi)}
                                </span>
                                {op}
                              </button>
                            );
                          })}
                        </div>

                        <AnimatePresence>
                          {answered && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className={`mt-6 p-5 rounded-2xl flex gap-4 ${correct ? 'bg-emerald-100/50 text-emerald-900' : 'bg-rose-100/50 text-rose-900'}`}
                            >
                              {correct ? <CheckCircle2 className="w-6 h-6 shrink-0" /> : <AlertCircle className="w-6 h-6 shrink-0" />}
                              <div className="text-sm">
                                <div className="font-black uppercase tracking-widest text-[10px] mb-1 opacity-60">
                                  {correct ? "Excelente" : "Importante destacar"}
                                </div>
                                <p className="font-bold">{question.feedback}</p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </section>

              <hr className="border-slate-100" />

              {/* Prueba 2: V/F */}
              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-black">2</div>
                  <h3 className="text-xl font-black">Afirmación Técnica (V/F)</h3>
                </div>

                <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden group">
                  <div className="relative z-10 max-w-lg">
                    <p className="text-xl font-bold italic leading-relaxed mb-8">
                       "{current.trueFalse.statement}"
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      {[true, false].map((val) => {
                        const chosen = tfSelected[current.id];
                        const answered = chosen !== undefined;
                        const isChosen = chosen === val;
                        const isRight = current.trueFalse.answer === val;

                        let colorClass = "bg-white/10 hover:bg-white/20 border-white/20 hover:border-white/40";
                        if (answered) {
                          if (isRight) colorClass = "bg-emerald-500 border-emerald-500 shadow-xl shadow-emerald-500/20";
                          else if (isChosen) colorClass = "bg-rose-500 border-rose-500";
                          else colorClass = "bg-white/5 border-white/5 opacity-50";
                        }

                        return (
                          <button
                            key={String(val)}
                            disabled={answered}
                            className={`p-5 rounded-2xl border-2 transition-all font-black text-lg cursor-pointer ${colorClass}`}
                            onClick={() => setTfSelected(p => ({ ...p, [current.id]: val }))}
                          >
                            {val ? "VERDADERO" : "FALSO"}
                          </button>
                        );
                      })}
                    </div>

                    <AnimatePresence>
                      {tfSelected[current.id] !== undefined && (
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className={`mt-8 p-5 rounded-2xl flex items-start gap-4 ${
                            tfSelected[current.id] === current.trueFalse.answer ? 'bg-emerald-500/20' : 'bg-rose-500/20'
                          }`}
                        >
                          <Award className="w-5 h-5 shrink-0 mt-1" />
                          <p className="text-sm font-bold text-slate-200">{current.trueFalse.feedback}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <CheckCircle2 className="absolute bottom-0 right-0 w-48 h-48 -mr-12 -mb-12 opacity-5 scale-150 rotate-12" />
                </div>
              </section>

              <hr className="border-slate-100" />

              {/* Prueba 3: Caso */}
              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-black">3</div>
                  <h3 className="text-xl font-black">Simulación práctica de escenario</h3>
                </div>

                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-inner">
                  <div className="flex items-center gap-2 mb-4 text-orange-600">
                    <ClipboardCheck className="w-5 h-5" />
                    <span className="text-xs font-black uppercase tracking-widest">{current.caseStudy.title}</span>
                  </div>
                  <p className="text-slate-700 text-lg leading-relaxed mb-8 bg-white p-6 rounded-2xl border border-slate-200">
                    {current.caseStudy.scenario}
                  </p>

                  <h4 className="text-indigo-950 font-black text-xl mb-6">
                    {current.caseStudy.question}
                  </h4>

                  <div className="grid grid-cols-1 gap-3">
                    {current.caseStudy.options.map((op, oi) => {
                      const chosen = caseSelected[current.id];
                      const answered = chosen !== undefined;
                      const isChosen = chosen === oi;
                      const isRight = current.caseStudy.answer === oi;

                      let classes = "w-full text-left p-5 rounded-2xl border-2 transition-all font-bold flex items-center gap-4 ";
                      if (answered) {
                        if (isRight) classes += "bg-emerald-50 border-emerald-500 text-emerald-900";
                        else if (isChosen) classes += "bg-rose-50 border-rose-500 text-rose-900";
                        else classes += "bg-white border-transparent opacity-50";
                      } else {
                        classes += "bg-white border-transparent hover:border-orange-200 hover:shadow-lg active:scale-[0.99] cursor-pointer";
                      }

                      return (
                        <button
                          key={oi}
                          disabled={answered}
                          className={classes}
                          onClick={() => setCaseSelected(p => ({ ...p, [current.id]: oi }))}
                        >
                          <div className="w-3 h-3 rounded-full border-2 border-current shrink-0" />
                          {op}
                        </button>
                      );
                    })}
                  </div>

                  <AnimatePresence>
                    {caseSelected[current.id] !== undefined && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`mt-8 p-6 rounded-2xl font-bold ${
                          caseSelected[current.id] === current.caseStudy.answer ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'
                        }`}
                      >
                         {current.caseStudy.feedback}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </section>

              <hr className="border-slate-100" />

              {/* Prueba 4: Reto Corto */}
              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-black">4</div>
                  <h3 className="text-xl font-black">Reto de desarrollo del equipo</h3>
                </div>

                <div className="bg-white border-4 border-dashed border-slate-200 rounded-[32px] p-8">
                   <div className="bg-indigo-600 text-white p-6 rounded-2xl mb-8 font-black text-lg shadow-xl shadow-indigo-600/20">
                     {current.shortChallenge}
                   </div>

                   <textarea
                     className="w-full h-40 p-6 rounded-2xl bg-slate-50 border-2 border-slate-200 focus:border-indigo-500 focus:bg-white focus:outline-none transition-all font-medium text-lg leading-relaxed placeholder:text-slate-300"
                     placeholder="vuestra respuesta aquí..."
                     value={shortAnswers[current.id] || ""}
                     onChange={(e) => setShortAnswers(p => ({ ...p, [current.id]: e.target.value }))}
                   />

                   <div className="flex items-center justify-between mt-4 text-slate-400">
                     <span className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                       <AlertCircle className="w-4 h-4" /> Justificación requerida
                     </span>
                     <span className="text-xs font-medium">Mín. 8 caracteres</span>
                   </div>
                </div>
              </section>

              {/* Action Area */}
              <div className="bg-slate-50 -mx-8 -mb-8 p-8 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-slate-100">
                <div className="flex-1">
                  <AnimatePresence>
                    {completed[current.id] ? (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-emerald-500 text-white px-6 py-4 rounded-2xl flex items-center gap-4 border border-emerald-400 shadow-lg shadow-emerald-500/20"
                      >
                         <Unlock className="w-8 h-8 shrink-0" />
                         <div>
                           <div className="font-black text-sm uppercase tracking-tighter">Misión finalizada</div>
                           <div className="text-xl font-black">Clave: <span className="font-mono">{current.code} · {secretNumbers[current.id]}</span></div>
                         </div>
                      </motion.div>
                    ) : (
                      <p className="text-slate-500 font-bold text-sm flex items-center gap-2">
                        <Lock className="w-4 h-4" /> Completad las 4 pruebas para desbloquear la palabra clave.
                      </p>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  disabled={!isMissionComplete(current) || completed[current.id]}
                  className={`w-full md:w-auto px-10 py-5 rounded-2xl font-black text-lg transition-all active:scale-95 shadow-xl shadow-indigo-600/10 cursor-pointer ${
                    completed[current.id] 
                      ? 'bg-slate-200 text-slate-400 cursor-default'
                      : isMissionComplete(current)
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                        : 'bg-slate-100 text-slate-300 opacity-50 cursor-not-allowed'
                  }`}
                  onClick={() => setCompleted(p => ({ ...p, [current.id]: true }))}
                >
                  {completed[current.id] ? "Misión Desbloqueada" : "Registrar Desbloqueo"}
                </button>
              </div>
            </div>
          </motion.section>
        </div>

        {/* Candado final */}
        {allCompleted && !gamePassed && (
          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 bg-slate-900 rounded-[40px] p-12 text-center text-white relative overflow-hidden flex flex-col items-center border border-white/20"
          >
            <div className="relative z-10 w-full max-w-2xl">
              <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8 ring-8 ring-white/5">
                <Lock className="w-12 h-12 text-amber-400" />
              </div>
              <h2 className="text-5xl font-black mb-6 tracking-tight italic">Candado final del módulo</h2>
              <p className="text-xl text-slate-300 mb-12 font-medium">
                Habéis completado las cinco misiones. Introducid la clave secreta (IPE-XXXXX) para liberar las medallas finales.
              </p>

              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <input
                    className={`bg-white/10 border-2 transition-all p-6 rounded-2xl text-center text-2xl font-black tracking-[0.2em] outline-none max-w-md w-full focus:bg-white focus:text-slate-900 ${
                      finalCodeError ? 'border-rose-500 animate-shake' : 'border-white/20 focus:border-indigo-400'
                    }`}
                    placeholder="IPE-•••••"
                    value={finalCodeInput}
                    onChange={(e) => {
                      setFinalCodeInput(e.target.value.toUpperCase());
                      setFinalCodeError(false);
                    }}
                  />
                  <button
                    className="bg-amber-400 text-slate-950 font-black text-xl px-12 py-6 rounded-2xl hover:bg-amber-300 active:scale-95 transition-all shadow-2xl shadow-amber-400/20 cursor-pointer uppercase italic"
                    onClick={() => {
                      if (finalCodeInput.trim().toUpperCase() === finalSecretCode) {
                        setGamePassed(true);
                      } else {
                        setFinalCodeError(true);
                      }
                    }}
                  >
                    Liberar
                  </button>
                </div>
                {finalCodeError && (
                  <p className="text-rose-400 font-bold flex items-center justify-center gap-2">
                    <AlertCircle className="w-5 h-5" /> Código erróneo. Revisad el Pasaporte Digital.
                  </p>
                )}
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[120px]" />
          </motion.section>
        )}

        {gamePassed && (
          <motion.section 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-12 bg-white rounded-[48px] p-12 text-center relative border-4 border-amber-400 shadow-[0_40px_80px_rgba(0,0,0,0.1)] overflow-hidden"
          >
            <div className="relative z-10">
              <Trophy className="w-32 h-32 text-amber-500 mx-auto mb-8 drop-shadow-xl" />
              <h2 className="text-6xl font-black mb-4 tracking-tight">¡Escape Room Superado!</h2>
              <p className="text-2xl text-slate-500 font-medium max-w-3xl mx-auto mb-12">
                Habéis demostrado dominar los 5 resultados de aprendizaje de IPE I. Las medallas de mérito han sido desbloqueadas.
              </p>

              <div className="inline-block px-10 py-6 bg-slate-950 text-white rounded-3xl mb-20 font-mono text-3xl font-black tracking-widest shadow-2xl">
                {finalSecretCode}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-20">
                {missions.map((m) => (
                  <motion.div
                    key={m.id}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white border-2 border-amber-100 rounded-[32px] p-6 shadow-xl shadow-amber-500/5 flex flex-col items-center"
                  >
                    <div className="w-20 h-20 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 mb-4 scale-125 rotate-6">
                      {m.icon}
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{m.ra}</div>
                    <div className="font-black text-slate-900 mb-2">{m.badge}</div>
                    <div className="mt-auto px-4 py-1.5 bg-amber-500 text-white rounded-full text-[10px] font-black uppercase">Obtenida</div>
                  </motion.div>
                ))}
              </div>

              <div className="max-w-4xl mx-auto text-left bg-slate-50 border-2 border-slate-100 rounded-[40px] p-10">
                <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                  <BookOpen className="w-8 h-8 text-indigo-600" />
                  Diario de Reflexión Final
                </h3>
                <div className="space-y-6">
                  {finalReflection.map((item, idx) => (
                    <div key={idx} className="flex gap-6 items-start group">
                      <div className="w-10 h-10 rounded-2xl bg-white border-2 border-slate-200 flex items-center justify-center shrink-0 font-black text-indigo-600 group-hover:border-indigo-400 transition-colors">
                        {idx + 1}
                      </div>
                      <p className="text-xl font-bold text-slate-700 pt-1 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorations */}
            <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200" />
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <Trophy className="w-96 h-96 rotate-12" />
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
}

