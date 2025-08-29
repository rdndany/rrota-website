// https://data.solanatracker.io/price/3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a
// API KEY ba79ca80-f081-46f0-aafe-5983b5b798a1

// Cache interface
interface CacheEntry {
  data: TokenDataResponse;
  timestamp: number;
}

// Persistent cache using localStorage
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds
const CACHE_KEY_PREFIX = "rrota_token_cache_";

// Helper functions for localStorage cache
const getCacheKey = (tokenAddress: string): string => {
  return `${CACHE_KEY_PREFIX}${tokenAddress}`;
};

const getCachedData = (tokenAddress: string): CacheEntry | null => {
  if (typeof window === "undefined") return null; // SSR safety

  try {
    const cacheKey = getCacheKey(tokenAddress);
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      return JSON.parse(cached);
    }
  } catch (error) {
    console.warn("Failed to read from cache:", error);
  }
  return null;
};

const setCachedData = (
  tokenAddress: string,
  data: TokenDataResponse,
  timestamp: number
): void => {
  if (typeof window === "undefined") return; // SSR safety

  try {
    const cacheKey = getCacheKey(tokenAddress);
    const cacheEntry: CacheEntry = { data, timestamp };
    localStorage.setItem(cacheKey, JSON.stringify(cacheEntry));
  } catch (error) {
    console.warn("Failed to write to cache:", error);
  }
};

interface Pool {
  poolId: string;
  liquidity: {
    quote: number;
    usd: number;
  };
  price: {
    quote: number;
    usd: number;
  };
  marketCap: {
    quote: number;
    usd: number;
  };
  tokenSupply: number;
  lastUpdated: number;
}

interface Events {
  "24h": {
    priceChangePercentage: number;
  };
}

interface TokenData {
  token: {
    name: string;
    symbol: string;
    mint: string;
    decimals: number;
  };
  pools: Pool[];
  events: Events;
  holders: number;
}

interface TokenDataResponse {
  price: number;
  liquidity: number;
  marketCap: number;
  tokenSupply: number;
  holders: number;
  lastUpdated: number;
  priceChange24h: number;
}

export async function getTokenData(
  tokenAddress: string
): Promise<TokenDataResponse> {
  // Check cache first
  const cachedEntry = getCachedData(tokenAddress);
  const now = Date.now();

  if (cachedEntry && now - cachedEntry.timestamp < CACHE_DURATION) {
    console.log(`Using cached data for token: ${tokenAddress}`);
    return cachedEntry.data;
  }

  const apiKey = "ba79ca80-f081-46f0-aafe-5983b5b798a1";
  const apiUrl = `https://data.solanatracker.io/tokens/${tokenAddress}`;

  try {
    console.log(`Fetching fresh data for token: ${tokenAddress}`);
    const response = await fetch(apiUrl, {
      headers: {
        "x-api-key": apiKey,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(
        `API request failed: ${response.status} ${response.statusText}`
      );
    }

    const data: TokenData = await response.json();

    // Find the specific pool by poolId
    const targetPoolId = "8fXPx6bqCne9Tg7apLBGJ3XJFjwkMU6se5NaFAenBkoF";
    const targetPool = data.pools.find((pool) => pool.poolId === targetPoolId);

    // Fallback to first pool if target pool not found
    const primaryPool = targetPool || data.pools[0];

    if (!primaryPool) {
      throw new Error("No pool data found for this token");
    }

    const tokenData: TokenDataResponse = {
      price: primaryPool.price.usd,
      liquidity: primaryPool.liquidity.usd,
      marketCap: primaryPool.marketCap.usd,
      tokenSupply: primaryPool.tokenSupply,
      holders: data.holders,
      lastUpdated: primaryPool.lastUpdated,
      priceChange24h: data.events["24h"].priceChangePercentage,
    };

    // Cache the data
    setCachedData(tokenAddress, tokenData, now);

    console.log(`Cached data for token: ${tokenAddress}`);
    return tokenData;
  } catch (error) {
    console.error("Error fetching token data:", error);

    // If we have cached data (even if expired), return it as fallback
    if (cachedEntry) {
      console.log(
        `Using expired cached data as fallback for token: ${tokenAddress}`
      );
      return cachedEntry.data;
    }

    throw new Error("Failed to fetch token data");
  }
}
