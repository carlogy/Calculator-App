import { Calculator } from "./Calculator";

export interface FormConfig {
    formTitle: string
    form: {
      id: string,
      method: string
    },
    label: {forAttribute: string, labelClass: string, textContent: string}[],
    input: {id: string, name: string, type: string, class: string}[],
    button: {class: string, type: string, textContent: string, id?: string}
  }

  export const buildConfig = (
                        title: string,
                        formId: string,
                        formMethod: string,
                        label: {forAttribute: string, labelClass: string, textContent: string}[],
                        input: {id: string, name: string, type: string, class: string}[],
                        buttonClass: string,
                        buttonType: string,
                        buttonTextContent: string,
                        buttonId?: string
                      ): FormConfig => {

    return {
    formTitle: title,
    form: {
      id: formId,
      method: formMethod,
    },
    label: label,
    input: input,
    button: {
      class: buttonClass,
      type: buttonType,
      textContent: buttonTextContent,
      id: buttonId
    }
    }
  };





// export class CustomMenu extends Calculator  {

//     private shadow: ShadowRoot;
//     private menuOpen = false;

//     get menuItems() : NodeListOf<HTMLLIElement> | null {
//         return this.shadow.querySelectorAll('.ListMenu li');
//     }

//     private get menu(): HTMLElement | null {
//         return this.shadow.querySelector('.menu');
//     };

//     private get menuIcon(): HTMLElement | null {
//         return this.shadow.querySelector('.menu-icon')
//     }

//     private get body(): HTMLBodyElement | null {
//         return document.querySelector('body');
//     }

//     private get caclContainer(): HTMLElement | null {
//         return document.querySelector('.calculator');
//     }


//     constructor() {
//         super();
//         this.shadow = this.attachShadow({mode: 'open'})
//         this.render();


//     }

//     setMenuEventListener = () => {
//         if (this.menu) {
//             this.menu.addEventListener('mousedown', (event) => {
//                 this.menuClickHandler(event);
//             });
//         }
//     };


//     public menuClickHandler = (event: MouseEvent) => {
//         const hideMenuItems = (propToSet: boolean) => {
//             if (this.menuItems) {
//                 this.menuItems.forEach(listItem => {
//                     listItem.hidden = propToSet;
//                 });
//             }
//         };

//         const mouseEvent = event as MouseEvent;

//         if (event.target instanceof HTMLLIElement) {
//             const action = event.target.dataset.action;

//             if (!this.menuOpen) {
//                 switch (action) {
//                     case 'menu-toggle':
//                         console.log("Toggle Clicked");
//                         (<HTMLElement>this.menuIcon).hidden = true;
//                         this.setMenuOpen(true);
//                         break;
//                     case 'theme':
//                         console.log('Theme clicked');
//                         break;
//                     default:
//                         break;
//                 }
//             }

//             if (this.menuOpen) {
//                 switch (action) {
//                     case 'theme':
//                         (<HTMLElement>this.menuIcon).hidden = false;
//                         hideMenuItems(true);
//                         this.setMenuOpen(false);
//                         const event = new CustomEvent('theme-clicked');
//                         break;

//                     default:
//                         break;
//                 }
//             }


//         }


//     };


//    setMenuOpen = (open: boolean) => {
//     this.menuOpen = open;
//     this.render();
//    }


//    render = () => {
//     this.shadow.innerHTML = `
//         <style>
//         .menu {
//             flex: 0;
//             margin: 1rem auto;
//             margin-right: 0.75rem;
//             color: #2b7f5c;
//             z-index: 1;
//             cursor: pointer;
//         }
//         .menu-icon {
//             font-weight: bold;
//             transform: rotate(90deg);
//         }
//         .menu-icon:hover {
//             font-size: 18px;
//             color: #ff901b;
//         }

//         .List-menu {
//             list-style: none;
//             z-index: 1;
//             border-radius: 1rem;
//             box-shadow: 1px 1px 20px 0px rgba(213, 211, 211, 0.1);
//             display: ${this.menuOpen ? 'block': 'none'};
//         }
//         .List-item {
//             margin: 0.7rem 1rem;
//             padding: 0.5rem 0.2rem;
//         }

//         .List-item:hover {
//             font-weight: bolder;
//             color: #ff901b;
//         }
//         </style>
//         <div class="menu">
//             <div data-action="menu-toggle" class="menu-icon">◦◦◦</div>
//                 <div class="List-menu">
//                     <li data-action="theme" class="List-item" hidden="true">☾</li>
//                     <li data-action="tip-calc" class="List-item" hidden="true">Tip Calculator</li>
//                     <li data-action="discount-calc" class="List-item" hidden="true">Discount Calculator</li>
//                 </div>
//         </div>
//     `;
//    };

//    displayThemeClickHandler = (event: MouseEvent) => {
//     const bodyClassList = (<HTMLBodyElement>this.body).classList;
//     const calcContainerClassList = (<HTMLElement>this.caclContainer).classList;

//     if (event instanceof MouseEvent) {
//         console.log("Light Theme");
//         calcContainerClassList.add('calculator-dark');
//         bodyClassList.add("Dark-Theme");




//     }
//    }




// }

// customElements.define('custom-menu', CustomMenu);