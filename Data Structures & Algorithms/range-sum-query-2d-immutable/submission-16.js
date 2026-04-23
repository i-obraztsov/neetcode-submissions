class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        this.matrix = matrix;

        for (let i = 0; i < matrix.length; i ++) {
            let prefix = 0;
            for (let j = 0; j < matrix[i].length; j++) {
                prefix += matrix[i][j];
                const above = matrix[i - 1]?.[j] ?? 0;
                this.matrix[i][j] = prefix + above;
            }
        }
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        const topLeft = this.matrix[row1 - 1]?.[col1 - 1] ?? 0;
        const topRight = this.matrix[row1 - 1]?.[col2] ?? 0;
        const bottomLeft = this.matrix[row2][col1 - 1] ?? 0;
        const bottomRight = this.matrix[row2][col2];

        return bottomRight - bottomLeft - topRight + topLeft;

    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
