import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private servicios:Servicio[]=[
    {
    id: 'SVC01',
    name: 'Onboarding Interactivo',
    description: 'Flujo de bienvenida que recolecta información sobre hábitos, estado emocional y metas del usuario.',
    features: [
      'Encuesta gamificada de diagnóstico emocional',
      'Selección de objetivos personales',
      'Segmentación automática del perfil'
    ],
    linkedUserStory: 'US01',
    targetUser: 'Estudiante universitario con sobrecarga académica'
  },
  {
    id: 'SVC02',
    name: 'Panel de Bienestar',
    description: 'Dashboard personalizado que visualiza el estado emocional, hábitos y recomendaciones diarias.',
    features: [
      'Gráfica de estados emocionales por semana',
      'Recomendaciones de contenido y actividades',
      'Alertas de bienestar y seguimiento de objetivos'
    ],
    linkedUserStory: 'US02',
    targetUser: 'Joven profesional con rutina exigente'
  },
  {
    id: 'SVC03',
    name: 'Muro Motivacional',
    description: 'Espacio colaborativo donde los usuarios pueden leer y compartir mensajes motivacionales.',
    features: [
      'Publicaciones anónimas con moderación automática',
      'Filtro por estado emocional',
      'Reacciones tipo upvote'
    ],
    linkedUserStory: 'US03',
    targetUser: 'Estudiante de primeros ciclos con baja motivación'
  },
  {
    id: 'SVC04',
    name: 'Microintervenciones',
    description: 'Sugerencias breves y prácticas para mejorar el estado emocional del usuario durante el día.',
    features: [
      'Ejercicios de respiración guiada',
      'Rutinas de journaling rápido',
      'Recordatorios de pausas activas'
    ],
    linkedUserStory: 'US04',
    targetUser: 'Tesista en fase crítica de investigación'
  },
  {
    id: 'SVC05',
    name: 'Mentor Virtual (IA)',
    description: 'Asistente conversacional que guía al usuario en su progreso emocional y responde consultas.',
    features: [
      'Chat empático con NLP',
      'Sugerencias automatizadas de recursos y actividades',
      'Derivación a ayuda profesional si es necesario'
    ],
    linkedUserStory: 'US02',
    targetUser: 'Joven que experimenta ansiedad académica'
  }
];


  public getServicio():Servicio[]{
    return this.servicios
  }

  public getid(idx:number):Servicio{
    return this.servicios[idx]
  }

  constructor() { }
}


export interface Servicio{
  id:string,
  name:string,
  description:string,
  features:string[],
  linkedUserStory: string;
  targetUser: string;
  idx?:number;

}
