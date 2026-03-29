import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide, tipFormCalc, discountFormCalc, calculate } from '../src/calculator';

describe('Calculator Operations', () => {
  describe('add', () => {
    it('adds two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('adds negative numbers', () => {
      expect(add(-2, 3)).toBe(1);
    });

    it('adds decimals', () => {
      expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    });
  });

  describe('subtract', () => {
    it('subtracts two numbers', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    it('subtracts resulting in negative', () => {
      expect(subtract(3, 5)).toBe(-2);
    });
  });

  describe('multiply', () => {
    it('multiplies two numbers', () => {
      expect(multiply(4, 3)).toBe(12);
    });

    it('multiplies by zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });
  });

  describe('divide', () => {
    it('divides two numbers', () => {
      expect(divide(10, 2)).toBe(5);
    });

    it('divides resulting in decimal', () => {
      expect(divide(7, 2)).toBe(3.5);
    });
  });

  describe('tipFormCalc', () => {
    it('calculates tip without split', () => {
      expect(tipFormCalc(100, 0, 20)).toBe(120);
    });

    it('calculates tip with split', () => {
      expect(tipFormCalc(100, 2, 20)).toBe(60);
    });

    it('calculates tip with 15%', () => {
      expect(tipFormCalc(50, 0, 15)).toBeCloseTo(57.5, 5);
    });

    it('handles split by 1', () => {
      expect(tipFormCalc(100, 1, 20)).toBe(120);
    });
  });

  describe('discountFormCalc', () => {
    it('calculates discount with tax', () => {
      expect(discountFormCalc(100, 20, 8)).toBeCloseTo(90, 5);
    });

    it('calculates discount without tax', () => {
      expect(discountFormCalc(100, 10, 0)).toBeCloseTo(90.909, 3);
    });

    it('calculates 0% discount and 8% tax', () => {
      expect(discountFormCalc(100, 0, 8)).toBeCloseTo(108, 5);
    });
  });

  describe('calculate', () => {
    it('performs operation using function reference', () => {
      expect(calculate(10, add, 5)).toBe(15);
      expect(calculate(10, subtract, 5)).toBe(5);
      expect(calculate(10, multiply, 5)).toBe(50);
      expect(calculate(10, divide, 5)).toBe(2);
    });
  });
});
