export const fetcherWithFetch = async (url: string) => {
    const response = await fetch(url);
  
    if (!response.ok) {
      throw new Error(`HTTP error: Status ${response.status}`);
    }
  
    return response.json();
  };
  
  export const fetchData = async (
    url: string,
    signal = null
  ) => {
    const response = await fetch(url, { signal });
  
    if (!response.ok) {
      throw new Error(`HTTP error: Status ${response.status}`);
    }
  
    return response.json();
  };

  export const postData = async (url: string, data: {}) => {
    const response = await fetch(
      url,
      {
        method: 'POST',
        body: JSON.stringify(data),
      }
    );
    return response.json();
  };

  