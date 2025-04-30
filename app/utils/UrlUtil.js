export function buildUrlWithParams(baseUrl, url, params) {
  // Combine base URL and path
  const combinedUrl = url.startsWith('/')
    ? baseUrl.replace(/\/+$/, '') + url
    : baseUrl + '/' + url;

  // Split into path and existing query parameters
  const [path, existingQuery] = combinedUrl.split('?');

  // Parse existing query parameters into key-value pairs
  const queryParams = parseQuery(existingQuery);

  // Add new parameters
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      queryParams.push({ key, value });
    });
  }

  // Build query string
  const queryString = buildQueryString(queryParams);

  // Return combined URL with query parameters
  return queryString ? `${path}?${queryString}` : path;
}
  
// Helper function to parse query string
function parseQuery(query) {
  const params = [];
  if (!query) return params;
  
  query.split('&').forEach(pair => {
    const [key, value] = pair.split('=');
    if (key) {
      params.push({
        key: decodeURIComponent(key),
        value: value ? decodeURIComponent(value) : ''
      });
    }
  });
  return params;
}

// Helper function to build query string
function buildQueryString(params) {
  return params
    .map(({ key, value }) => 
      `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join('&');
}
