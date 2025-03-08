class Calculator {
  menu: HTMLElement | null;
  menuIcon: HTMLElement | null;
  menuItems: NodeListOf<HTMLElement> | null;
  calculatorType: HTMLElement | null;
  inputScreen: HTMLElement | null;
  actionGrid: NodeListOf<HTMLButtonElement> | null;
  body: HTMLElement | null;
  menuClicked: boolean;
  darkMode: boolean;




  constructor(
    menu: string,
    menuIcon: string,
    menuItems: string,
    calculatorType: string, inputScreen: string) {
    this.menuClicked = false;
    this.darkMode = false;
    this.menu = document.querySelector(menu);

    this.menu?.addEventListener('mousedown', (event) => this.menuClickHandler(event));

    this.menuIcon = document.querySelector(menuIcon);

    this.menuItems = document.querySelectorAll(menuItems);

    this.calculatorType = document.querySelector(calculatorType);

    this.inputScreen = document.querySelector(inputScreen);

    this.body = document.querySelector('.calculator');

    this.actionGrid = document.querySelectorAll('.action-buttons-grid button');
  }




  add = (num1: number, num2: number): number => {
    return num1 + num2;
  }

  subtract = (num1: number, num2: number): number => {
    return num1 - num2;
  }

  multiply = (num1: number, num2: number): number => {
    return num1 * num2;
  }

  divide = (num1: number, num2: number): number => {
    if (num2 === 0) {
      throw new Error("Can't divide by zero");
    }
    return num1 / num2;
  }

  tipFormCalc = (
    total: number,
    splitByNumber: number,
    tipPercetage: number,
  ): number => {
    let subTotal = this.multiply(
      total,
      this.add(1, this.divide(tipPercetage, 100)),
    );

    return splitByNumber !== 0
      ? this.divide(subTotal, splitByNumber)
      : subTotal;
  }

  discountFormCalc = (
    itemPrice: number,
    discountPercentage: number,
    taxPercentage: number,
  ): number => {
    let discountSubTotal = this.divide(
      itemPrice,
      this.add(1, this.divide(discountPercentage, 100)),
    );

    return this.multiply(
      discountSubTotal,
      this.add(1, this.divide(taxPercentage, 100)),
    );
  }

  calculate = (
    num1: number,
    operationName: string,
    num2: number,
  ): number | undefined => {
    try {
      switch (operationName) {
        case "add":
          return this.add(num1, num2);

        case "subtract":
          return this.subtract(num1, num2);

        case "multiply":
          return this.multiply(num1, num2);

        case "divide":
          return this.divide(num1, num2);

        default:
          throw new Error(`Invalid operation: ${operationName}`);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("An unknown error occured.");
      }
      return undefined;
    }
  }


  menuClickHandler = (event : MouseEvent) => {

    const hideMenuItems = (propToSet: boolean) => {

      if (this.menuItems) {
        this.menuItems.forEach(item => {
          item.hidden = propToSet;
        });
      }

     };

    const mouseEvent = event as MouseEvent;

    if (event.target instanceof HTMLElement) {
      const action = event.target.dataset.action;

      if (!this.menuClicked) {

        switch(action) {
          case 'menu-toggle':
            console.log("Toggle Clicked");
            (<HTMLElement>this.menuIcon).hidden = true;
            hideMenuItems(false);
            this.menuClicked = true;
            break;
          case 'theme':
            console.log('theme-clicked');
            break;
        }

      }

      if (this.menuClicked) {

        switch(action) {
          case 'theme':
            (<HTMLElement>this.menuIcon).hidden = false;
            hideMenuItems(true);
            this.menuClicked = false;
            this.displayThemeClickHandler(event);
          break;
          case 'tip-calc':
            (<HTMLElement>this.menuIcon).hidden = false;
            hideMenuItems(true);
            this.menuClicked = false;
            break;
          case 'discount-calc':
            (<HTMLElement>this.menuIcon).hidden = false;
            hideMenuItems(true);
            this.menuClicked = false;
            break;
        }
      }

    }

  };


  displayThemeClickHandler = (event: MouseEvent) => {

    const bodyClassList = (<HTMLElement>this.body).classList;

    if (event instanceof MouseEvent) {

      if (!this.darkMode) {
        console.log("Light Theme");

        bodyClassList.add("Dark-Theme");

        switch (this.calculatorType?.textContent) {
          case "Tip Calculator":
            console.log('tipForm needs to go dark');
            this.darkMode = true;
            break;
          case "Discount Calculator":
            console.log('discForm needs to go dark');
            this.darkMode = true;
            break;
          case "Calculator":
            if (this.actionGrid) {
              this.actionGrid.forEach(button => button.classList.add('dark-calc-input'));
            }
            (<NodeListOf<HTMLElement>>this.menuItems)[0].textContent = '☀︎';
            this.darkMode = true;
            break;
          default:
            break;
        }
      } else if (this.darkMode) {
        console.log("Dark Theme");
        bodyClassList.remove('Dark-Theme');
        switch (this.calculatorType?.textContent) {
          case "Tip Calculator":
            console.log('tipForm needs to go light');
            this.darkMode = false;
            break;
          case "Discount Calculator":
            console.log('discForm needs to go light');
            this.darkMode = false;
            break;
          case "Calculator":
            if (this.actionGrid) {
              this.actionGrid.forEach(button => button.classList.remove('dark-calc-input'));
            }
            (<NodeListOf<HTMLElement>>this.menuItems)[0].textContent = '☾';
            this.darkMode = false;
            break;
          default:
            break;
        }
      }


    }
  }


}

export { Calculator };
