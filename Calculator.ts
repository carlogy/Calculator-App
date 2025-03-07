class Calculator {
  menu: HTMLElement | null;
  menuIcon: HTMLElement | null;
  menuItems: NodeListOf<Element> | null;
  calculatorType: Element | null;
  inputScreen: HTMLElement | null;
  menuClicked: boolean;
  darkMode: boolean;

  constructor(menu: string, menuIcon: string, menuItems: string, calculatorType: string, inputScreen: string) {
    this.menuClicked = false;
    this.darkMode = false;
    this.menu = document.querySelector(menu);

    this.menu?.addEventListener('mousedown', (event) => this.menuClickHandler(event));

    this.menuIcon = document.querySelector(menuIcon);

    this.menuItems = document.querySelectorAll(menuItems);

    this.calculatorType = document.querySelector(calculatorType);

    this.inputScreen = document.querySelector(inputScreen);

  }


   menuClickHandler(event : MouseEvent) {

    if (!this.menuClicked) {
      console.log(this.menuClicked);

      this.menuIcon?.setAttribute("hidden", "true");
      console.log(event.currentTarget);

      this.menuItems?.forEach((item) => {
        console.log(item);
        item.toggleAttribute("hidden", false);
    });
    }

    if (this.menuClicked){
      this.menuClicked = false;

      this.menuIcon?.toggleAttribute("hidden", false);

      this.menuItems?.forEach((item)=> {
        item.toggleAttribute("hidden", true);
      });
    }

  }

  add(num1: number, num2: number): number {
    return num1 + num2;
  }

  subtract(num1: number, num2: number): number {
    return num1 - num2;
  }

  multiply(num1: number, num2: number): number {
    return num1 * num2;
  }

  divide(num1: number, num2: number): number {
    if (num2 === 0) {
      throw new Error("Can't divide by zero");
    }
    return num1 / num2;
  }

  tipFormCalc(
    total: number,
    splitByNumber: number,
    tipPercetage: number,
  ): number {
    let subTotal = this.multiply(
      total,
      this.add(1, this.divide(tipPercetage, 100)),
    );

    return splitByNumber !== 0
      ? this.divide(subTotal, splitByNumber)
      : subTotal;
  }

  discountFormCalc(
    itemPrice: number,
    discountPercentage: number,
    taxPercentage: number,
  ): number {
    let discountSubTotal = this.divide(
      itemPrice,
      this.add(1, this.divide(discountPercentage, 100)),
    );

    return this.multiply(
      discountSubTotal,
      this.add(1, this.divide(taxPercentage, 100)),
    );
  }

  calculate(
    num1: number,
    operationName: string,
    num2: number,
  ): number | undefined {
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
}

export { Calculator };
