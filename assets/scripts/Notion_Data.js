async function fetchData() {
    const apiUrl = 'https://api.notion.com/v1/databases/8787ad7decbc4f86a19ada63219990c5/query';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'secret_K4XS2kBZCCDq9RZdEVWhokBP8JMYKaJPVoNNRg8bg6L', // Replace YOUR_API_TOKEN_OR_KEY with your actual API token/key
        'Notion-Version': '2022-06-28'
    };
    try {
        const response = await fetch(apiUrl, { method: 'POST', headers });
        const data = await response.json();
        // Now, format the fetched data into Markdown or HTML and inject it into the page
        const formattedData = formatDataAsMarkdown(data);
        document.getElementById('markdownContent').innerHTML += formattedData;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function formatDataAsMarkdown(data) {
    // This function needs to be adjusted based on the actual structure of the data returned by the API.
    // For demonstration, let's just return a simple Markdown string
    return `<h2>${data.results[0].properties.Name.title[0].text.content}</h2>
            <p>${data.results[0].properties.Description.rich_text[0].text.content}</p>`;
}

fetchData();