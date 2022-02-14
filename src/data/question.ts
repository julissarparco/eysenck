export type Question = {
  id: number;
  label: string;
  text: string;
  optional: boolean;
  isPrincipal?: boolean;
};

export const questions: Question[] = [
  {
    id: 0,
    label: "Instrucciones",
    text: `<p>Aquí tienes algunas preguntas sobre el modo como usted se comporta, siente y actúa.</p>
    <p>Después de cada pregunta, conteste con un “SI” o con una “NO” según sea su caso.</p>
    <p>Trate de decir “SI” o “NO” representa su modo usual de actuar o sentir, Trabaje rápidamente y no emplee mucho tiempo en cada pregunta; queremos su primera reacción, en un proceso de pensamiento prolongado.</p>
    <p>El cuestionario total no debe de tomar más que unos pocos minutos. Asegúrese de no omitir alguna pregunta.</p>
    <p>Ahora comience. Trabaje rápidamente y recuerde de contestar todas las preguntas. </p>    
    <p>No hay contestaciones “correctas” ni “incorrectas” y esto no es un test de inteligencia o habilidad, sino simplemente una medida de la forma como usted se comporta.</p>`,
    optional: false,
    isPrincipal: true,
  },
  {
    id: 1,
    label: "Pregunta 1",
    text: "¿Le gusta abundancia de excitación y bullicio a su alrededor?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 2,
    label: "Pregunta 2",
    text: "¿Tiene a menudo un sentimiento de intranquilidad, como si quisiera algo, pero sin saber que?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 3,
    label: "Pregunta 3",
    text: "¿Tiene casi siempre una contestación lista ala mano cuando se le habla?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 4,
    label: "Pregunta 4",
    text: "¿Se siente algunas veces feliz, algunas veces triste, sin una razón real?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 5,
    label: "Pregunta 5",
    text: "¿Permanece usualmente retraído (a) en fiestas y reuniones?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 6,
    label: "Pregunta 6",
    text: "cuando era niño(a) ¿hacia siempre inmediatamente lo que le decían, sin refunfuñar?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 7,
    label: "Pregunta 7",
    text: "¿Se enfada o molesta a menudo?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 8,
    label: "Pregunta 8",
    text: "cuando lo(a) meten a una pelea ¿prefiere sacar los trapitos al aire de una vez por todas, en vez de quedar callado(a) esperando que las cosas se calmen solas?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 9,
    label: "Pregunta 9",
    text: "¿Es usted triste, melancólico (a)?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 10,
    label: "Pregunta 10",
    text: "¿Le gusta mezclarse con la gente?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 11,
    label: "Pregunta 11",
    text: "¿Ha perdido a menudo el sueño por sus preocupaciones?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 12,
    label: "Pregunta 12",
    text: "¿Se pone a veces malhumorado (a)?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 13,
    label: "Pregunta 13",
    text: "¿Se catalogaría a si mismo(a) como despreocupado (a) o confiado a su buena suerte?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 14,
    label: "Pregunta 14",
    text: "¿Se decide a menudo demasiado tarde?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 15,
    label: "Pregunta 15",
    text: "¿Le gusta trabajar solo (a)?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 16,
    label: "Pregunta 16",
    text: "¿Se ha sentido a menudo apático (a) y cansado(a) sin razón?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 17,
    label: "Pregunta 17",
    text: "¿Es por lo contrario animado(a) y jovial?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 18,
    label: "Pregunta 18",
    text: "¿Se ríe a menudo de chistes groseros?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 19,
    label: "Pregunta 19",
    text: "¿Se siente a menudo hastiado(a), harto, fastidiado?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 20,
    label: "Pregunta 20",
    text: "¿Se siente incomodo(a) con vestidos que no son del diario?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 21,
    label: "Pregunta 21",
    text: "¿Se distrae (vaga su mente) a menudo cuando trata de prestar atención a algo?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 22,
    label: "Pregunta 22",
    text: " ¿Puede expresar en palabras fácilmente lo que piensa?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 23,
    label: "Pregunta 23",
    text: "¿Se abstrae (se pierde en sus pensamientos) a menudo?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 24,
    label: "Pregunta 24",
    text: "¿Esta completamente libre de prejuicios de cualquier tipo?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 25,
    label: "Pregunta 25",
    text: "¿Le gusta las bromas?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 26,
    label: "Pregunta 26",
    text: "¿Piensa a menudo en su pasado?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 27,
    label: "Pregunta 27",
    text: "¿Le gusta mucho la buena comida?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 28,
    label: "Pregunta 28",
    text: "Cuándo se fastidia ¿necesita algún(a) amigo(a) para hablar sobre ello?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 29,
    label: "Pregunta 29",
    text: "¿Le molesta vender cosas o pedir dinero a la gente para alguna buena causa?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 30,
    label: "Pregunta 30",
    text: "¿Alardea (se jacta) un poco a veces?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 31,
    label: "Pregunta 31",
    text: "¿Es usted muy susceptible (sensible) por algunas cosas?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 32,
    label: "Pregunta 32",
    text: "¿Le gusta mas quedarse en casa, que ir a una fiesta aburrida?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 33,
    label: "Pregunta 33",
    text: "¿Se pone a menudo tan inquieto(a) que no puede permanecer sentado(a) durante mucho rato en una silla?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 34,
    label: "Pregunta 34",
    text: "¿Le gusta planear las cosas, con mucha anticipación?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 35,
    label: "Pregunta 35",
    text: "¿Tiene a menudo mareos (vértigos)?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 36,
    label: "Pregunta 36",
    text: "¿Contesta siempre una carta personal, tan pronto como puede, después de haberla leído?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 37,
    label: "Pregunta 37",
    text: "¿Hace usted usualmente las cosas mejor resolviéndolas solo(a) que hablando a otra persona sobre ello?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 38,
    label: "Pregunta 38",
    text: "¿Le falta frecuentemente aire, sin haber hecho un trabajo pesado?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 39,
    label: "Pregunta 39",
    text: "¿Es usted generalmente una persona tolerante, que no se molesta si las cosas no están perfectas?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 40,
    label: "Pregunta 40",
    text: "¿Sufre de los nervios?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 41,
    label: "Pregunta 41",
    text: "¿Le gustaría mas planear cosas, que hacer cosas?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 42,
    label: "Pregunta 42",
    text: "¿Deja algunas veces para mañana, cuando debería hacerlo hoy día?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 43,
    label: "Pregunta 43",
    text: "¿Se pone nervioso(a) en lugares tales como ascensores, trenes o túneles?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 44,
    label: "Pregunta 44",
    text: "Cuando hace nuevos amigos(as) ¿es usted usualmente quien inicia la relación o invita a que se produzca?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 45,
    label: "Pregunta 45",
    text: "¿Sufre fuertes dolores de cabeza?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 46,
    label: "Pregunta 46",
    text: "¿Siente generalmente que las cosas se arreglaran por si solas y que terminaran bien de algún modo?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 47,
    label: "Pregunta 47",
    text: "¿Le cuesta trabajo coger el sueño al acostarse en las noches?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 48,
    label: "Pregunta 48",
    text: "¿Ha dicho alguna vez mentiras en su vida?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 49,
    label: "Pregunta 49",
    text: "¿Dice algunas veces lo primero que se le viene a la cabeza?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 50,
    label: "Pregunta 50",
    text: "¿Se preocupa durante un tiempo demasiado largo, después de una experiencia embarazosa?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 51,
    label: "Pregunta 51",
    text: " ¿Se mantiene usualmente hérnico(a) o encerrado (a) en si mismo(a), excepto con amigos muy íntimos?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 52,
    label: "Pregunta 52",
    text: "¿Se crea a menudo problemas, por hacer cosas sin pensar?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 53,
    label: "Pregunta 53",
    text: "¿Le gusta contar chistes y referir historias graciosas a sus amigos?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 54,
    label: "Pregunta 54",
    text: "¿Se le hace más fácil ganar que perder un juego?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 55,
    label: "Pregunta 55",
    text: "¿Se siente a menudo demasiado consciente de si mismo(a) o poco natural cuando esta con sus superiores?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 56,
    label: "Pregunta 56",
    text: "Cuando todas las posibilidades están contra usted, ¿piensa aun usualmente que vale la pena intentar?",
    optional: false,
    isPrincipal: false,
  },
  {
    id: 57,
    label: "Pregunta 57",
    text: "¿Siente “sensaciones” en el abdomen, antes de un hecho importante?",
    optional: false,
    isPrincipal: false,
  },
];
