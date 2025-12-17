import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { FlipCard } from '../../Components/flip-card/flip-card';
import { CardTecnologias } from '../../Components/card-tecnologias/card-tecnologias';
import { FlipCardProject } from '../../Components/flip-card_project/flip-card_project';
import { AnimatedText } from '../../Components/animated-text/animated-text';
import { Footer } from '../../Components/footer/footer';

@Component({
  selector: 'app-about-me',
  imports: [FlipCard, FlipCardProject, CardTecnologias, AnimatedText, Footer],
  templateUrl: './about-me.html',
  styleUrl: './about-me.sass'
})
export class AboutMe {
  currentStep = 0;

  @ViewChild('scrollTarget') scrollTarget!: ElementRef;

  nextStep(): void {
    this.currentStep++;
  }

  scrollToNextSection(): void {
    setTimeout(() => {
      this.scrollTarget.nativeElement.scrollIntoView({ behavior: 'smooth'});
    }, 300)
  }

  listTecnologias = signal([
    {
      icon: "bx bxl-python",
      text: "Python"
    },
    {
      icon: "si si-csharp",
      text: "C#"
    },
    {
      icon: "bx bxl-java",
      text: "Java"
    },
    {
      icon: "bx bxl-django",
      text: "Django"
    },
    {
      icon: "si si-springboot",
      text: "SpringBoot"
    },
    {
      icon: "si si-mysql",
      text: "MySql"
    },
    {
      icon: "bx bxl-react",
      text: "React"
    },
    {
      icon: "bx bxl-angular",
      text: "Angular"
    },
    {
      icon: "bx bxl-sass",
      text: "Sass"
    },
    {
      icon: "bx bxl-javascript",
      text: "JavaScript"
    },
    {
      icon: "bx bxl-typescript",
      text: "TypeScript"
    },
    {
      icon: "si si-github",
      text: "Github"
    },
  ]);

  listCard = signal([
    {
      name_title_front: "Família",
      name_title_back: "Minha base",
      type: "game",
    },
    {
      name_title_front: "Filme favorito",
      name_title_back: "Meu companheiro",
      type: "movie",
    },
    {
      name_title_front: "Amigos",
      name_title_back: 'Minha alegria',
      type: "serie",
    },
    {
      name_title_front: "Animalzinho",
      name_title_back: 'Minha alegria',
      type: "serie",
    },
    {
      name_title_front: "Jogaria todos os dias",
      name_title_back: "Hollow knight",
      type: "game",
    },
    {
      name_title_front: "Simplesmente amo o filme",
      name_title_back: "Lilo e Stitch",
      type: "movie",
    },
    {
      name_title_front:"Amo essa série",
      name_title_back:'Anne with an E',
      type: "serie",
    },
    {
      name_title_front: "Essa eu escutaria o dia todo",
      name_title_back: 'Anne with an E',
      type: "serie",
    },
    {
      name_title_front:"O melhor lugar para estar",
      name_title_back:'Praia',
      type: "serie",
    },
    {
      name_title_front: "A razão da minha paz e estresse",
      name_title_back: 'Programar',
      type: "serie",
    },
    {
      name_title_front:"A cor mais linda do mundo",
      name_title_back:'Roxo',
      type: "serie",
    },
    {
      name_title_front: "Minha princesa favorita",
      name_title_back: 'Merida',
      type: "serie",
    },
  ]);

  listProjects = signal([
    {
      img: "img/logos/eLOGiar.png",
      name_project: "eLOGiar",
      description: "Um sistema de reconhecimento de boas atitudes",
      link: "projeto/eLOGiar"
    },
    {
      img: "img/logos/smartTrack.png",
      name_project: "SmartTrack",
      description: "Um sistema para uma cidade inteligente, onde gerencia todos os sensores da instituição Senai",
      link: "projeto/SmartTrack"
    },
    {
      img: "img/logos/starzing.png",
      name_project: "Starzing",
      description: "Um site educativo sobre como o clima espacial, desenvolvido para o hackathon da NASA",
      link: "projeto/Starzing"
    },
    {
      img: "img/logos/driveInOut.png",
      name_project: "Drive-In-Out",
      description: "Um sistema de gerenciamento de entrada e saída das pessoas que vão testar seus carros na pista de teste - CTVI.",
      link: "projeto/DriveInOut"
    },
  ]);
}
