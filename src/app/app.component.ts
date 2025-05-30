import { Component, ElementRef, AfterViewInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  title = "DB-wrb"

  menuOpen = false;
  activeSkills: string[] = [];

  @ViewChildren('animSection') animSections!: QueryList<ElementRef>;

  projects = [
    { title: 'Project One', image: 'https://via.placeholder.com/300x200' },
    { title: 'Project Two', image: 'https://via.placeholder.com/300x200' },
    { title: 'Project Three', image: 'https://via.placeholder.com/300x200' },
  ];

  skills = ['Angular', 'TypeScript', 'JavaScript', 'CSS', 'Node.js'];

  experiences = [
    { title: 'Frontend Dev at Rithos',text: " ", skills: ['Angular', 'CSS'] },
    { title: 'Sofware dev at Artlinko/ danoteck', skills: ['Node.js', 'JavaScript'] },
    { title: 'Software dev at LEGO', skills: ['CSS', 'JavaScript'] },
    { title: 'Software dev at LEGO', skills: ['CSS', 'JavaScript'] },
    { title: 'Software dev at LEGO', skills: ['CSS', 'JavaScript'] },
    { title: 'Software dev at LEGO', skills: ['CSS', 'JavaScript'] }
  ];

  education = [
    { place: 'Frontend Dev at Rithos', year: ['Angular', 'CSS'] },
    { title: 'Sofware dev at Artlinko/ danoteck', skills: ['Node.js', 'JavaScript'] },
    { title: 'Software dev at LEGO', skills: ['CSS', 'JavaScript'] }
  ];

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  scrollTo(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      this.menuOpen = false;
    }
  }

  toggleSkill(skill: string) {
    const index = this.activeSkills.indexOf(skill);
    if (index >= 0) {
      this.activeSkills.splice(index, 1);
    } else {
      this.activeSkills.push(skill);
    }
  }

  highlightMatch(experienceSkills: string[]): boolean {
    return this.activeSkills.length === 0 ||
      this.activeSkills.some(skill => experienceSkills.includes(skill));
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    this.animSections.forEach(section => {
      observer.observe(section.nativeElement);
    });
  }
}
