
import { Component, ViewEncapsulation, AfterViewInit, Renderer2 ,OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ViewportScroller } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'
  ,'../../assets/css/main.css'
  ,'../../assets/css/responsive.css'
  ,'../../assets/css/bootstrap.css'
  ],
  encapsulation:ViewEncapsulation.None
})
export class MainPageComponent implements AfterViewInit , OnInit {
  
  protected aFormGroup: FormGroup = this.formBuilder.group({
    recaptcha: ['', [Validators.required , this.recaptchaValidator()]],
    Telephone: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    nom: ['', [Validators.required]],
    message: ['', [Validators.required]],
    cabinet: ['']
  });  
  capchaKey = environment.capchaKey;
  constructor(private renderer: Renderer2, 
    private titleService: Title,
    private viewportScroller: ViewportScroller,
    private formBuilder: FormBuilder) { }


  ngOnInit(): void {

    this.titleService.setTitle('Curiam | Acceuil');

  }
  
  async ngAfterViewInit(): Promise<void> {
    
    await this.loadScript('assets/js/jquery.js');
    await this.loadScript('assets/js/popper.min.js');
    await this.loadScript('assets/js/bootstrap.min.js');
    await this.loadScript('assets/js/jquery.mCustomScrollbar.concat.min.js');
    await this.loadScript('assets/js/jquery.fancybox.js');
    await this.loadScript('assets/js/appear.js');
    await this.loadScript('assets/js/wow.js');
    await this.loadScript('assets/js/parallax.min.js');
    await this.loadScript('assets/js/tilt.jquery.min.js');
    await this.loadScript('assets/js/swiper.min.js');
    await this.loadScript('assets/js/validate.js');
    await this.loadScript('assets/js/jquery-ui.js');
    await this.loadScript('assets/js/script.js');    
    await this.loadScript('assets/js/swiper-bundle.min.js');

  }

 

  private loadScript(scriptUrl: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.isScriptLoaded(scriptUrl)) {
        const scriptElement = this.renderer.createElement('script');
        scriptElement.src = scriptUrl;
        scriptElement.onload = () => {
          resolve();
        };
    
        this.renderer.appendChild(document.body, scriptElement);
      } else {
        resolve();
      }
    });
  }

  private isScriptLoaded(scriptUrl: string): boolean {
    const scripts = document.getElementsByTagName('script');
    for (let i = 0; i < scripts.length; i++) {
      if (scripts[i].src === scriptUrl) {
        return true;
      }
    }
    return false;
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  onSubmit() {
    if (this.aFormGroup.valid) {
      console.log('Form is valid, including the reCAPTCHA. Submitting...');
      Swal.fire('Message Envoyée', 'Nous avons reçu votre message et nous allons vous répondre aussitôt que possible ', 'info')

    } else {
      console.log('Form is invalid. Please fill out all required fields, including the reCAPTCHA.');
    }
  }


    recaptchaValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const recaptchaValue = control.value;
      const isValid = recaptchaValue && recaptchaValue.length > 0; // Check if the reCAPTCHA value exists and is not empty
      return isValid ? null : { recaptchaInvalid: true };
    };
  }
}


