export function CalculateSum = (numbers: number[]): number => {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

export default CalculateSum;

