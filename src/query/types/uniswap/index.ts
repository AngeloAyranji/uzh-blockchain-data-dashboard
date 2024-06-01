export class PoolTokensWithMostPools {
    token: string;
    count: number;
    percentage: number;
}

export class PoolTotalCount {
    totalCount: number;
    factoryAddress: string;
    factoryVersion: string;
}

export class PoolCreatedByDate {
    factoryVersion: string;
    date: Date;
    count: number;
}

export class LatestSwaps {
    id: string;
    poolAddress: string;
    transactionHash: string;
    sender: string;
    recipient: string;
    amountIn: string;
    amountOut: string;
    reversed: boolean;
    timestamp: Date;
    page: number;
    limit: number;
}

export class TopActivePools {
    poolAddress: string;
    token0: string;
    token1: string;
}