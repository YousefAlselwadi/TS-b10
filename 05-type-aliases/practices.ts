function calculateProduct(num1: number, num2: number): number {
    return num1 * num2;
}

function getStringLength(input: string): number {
    return input.length;
}

function inputs(input: string | boolean): string {
    if(typeof input === 'string') return `You provided a string: ${input}`;
    else if (typeof input === 'boolean') return `You provided a boolean: ${input}`;
    return 'Invalid input'
}
