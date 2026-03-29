import { describe, it, expect } from 'vitest';
import { inputParser } from '../src/parser';

describe('Input Parser - Order of Operations', () => {
  it('evaluates 2 + 3 x 4 = 14 (not 20)', () => {
    expect(inputParser('2 + 3 x 4')).toBe(14);
  });

  it('evaluates 10 - 2 x 3 + 1 = 5 (not 25)', () => {
    expect(inputParser('10 - 2 x 3 + 1')).toBe(5);
  });

  it('evaluates 100 ÷ 10 + 5 = 15 (not 5.5)', () => {
    expect(inputParser('100 ÷ 10 + 5')).toBe(15);
  });

  it('evaluates 2 x 3 + 4 x 5 = 26', () => {
    expect(inputParser('2 x 3 + 4 x 5')).toBe(26);
  });

  it('evaluates 10 + 20 - 5 = 25', () => {
    expect(inputParser('10 + 20 - 5')).toBe(25);
  });
});

describe('Input Parser - Parentheses', () => {
  it('evaluates (2 + 3) x 4 = 20', () => {
    expect(inputParser('(2 + 3) x 4')).toBe(20);
  });

  it('evaluates 10 x 6 + (8 - 9) = 59', () => {
    expect(inputParser('10 x 6 + (8 - 9)')).toBe(59);
  });

  it('evaluates (10 + 5) ÷ 3 = 5', () => {
    expect(inputParser('(10 + 5) ÷ 3')).toBe(5);
  });

  it('evaluates (20 - 5) x 2 = 30', () => {
    expect(inputParser('(20 - 5) x 2')).toBe(30);
  });

  it('evaluates 5 + (10 x 2) = 25', () => {
    expect(inputParser('5 + (10 x 2)')).toBe(25);
  });
});

describe('Input Parser - Complex Expressions', () => {
  it('evaluates 2 + 3 x 4 - 1 = 13', () => {
    expect(inputParser('2 + 3 x 4 - 1')).toBe(13);
  });

  it('evaluates 100 ÷ (5 + 5) = 10', () => {
    expect(inputParser('100 ÷ (5 + 5)')).toBe(10);
  });

  it('evaluates (5 + 5) x (3 + 2) = 50', () => {
    expect(inputParser('(5 + 5) x (3 + 2)')).toBe(50);
  });
});

describe('Input Parser - Single Operations', () => {
  it('evaluates 5 + 3 = 8', () => {
    expect(inputParser('5 + 3')).toBe(8);
  });

  it('evaluates 10 - 4 = 6', () => {
    expect(inputParser('10 - 4')).toBe(6);
  });

  it('evaluates 3 x 7 = 21', () => {
    expect(inputParser('3 x 7')).toBe(21);
  });

  it('evaluates 20 ÷ 4 = 5', () => {
    expect(inputParser('20 ÷ 4')).toBe(5);
  });
});
