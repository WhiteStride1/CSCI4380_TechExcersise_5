class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }

  get peek() {
    return this.items[this.top];
  }

  push(value) {
    this.top += 1;
    this.items[this.top] = value;
  }
}

describe('My Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('is created empty', () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });

  it('can push to the top', () => {
    stack.push('Hello');
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe('Hello');

    stack.push('Goodbye');
    expect(stack.top).toBe(1);
    expect(stack.peek).toBe('Goodbye');
  });

  it.todo('can pop off');
});
