const GLOBAL_PREFIX = process.env.NEXT_PUBLIC_BACKEND_URL;

const UNISWAP_ROUTE = `${GLOBAL_PREFIX}/api/uniswap`;

const POOL_ROUTE = `${UNISWAP_ROUTE}/pool`;

const TOTAL_COUNT_ROUTE = `${POOL_ROUTE}/count`;

const TOKENS_WITH_MOST_POOLS_ROUTE = `${POOL_ROUTE}/top-tokens`;

export const ROUTES = {
    TOTAL_COUNT_ROUTE,
    TOKENS_WITH_MOST_POOLS_ROUTE,
};