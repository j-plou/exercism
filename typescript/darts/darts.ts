export function score(x: unknown, y: unknown): unknown {
    const distance: number = Math.sqrt(Math.pow(Number(x), 2) + Math.pow(Number(y), 2))

    if (distance <= 1) {
        return 10
    }
    if (distance <= 5) {
        return 5
    }
    if (distance <= 10) {
        return 1
    }
    return 0
}