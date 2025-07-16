// Example API wrapper — replace URL with your API Gateway endpoint
const BASE_URL = import.meta.env.VITE_API_ENDPOINT;

export async function getApplications() {
  const res = await fetch(`${BASE_URL}/applications`);
  return res.json();
}

export async function getApplication(id) {
  const res = await fetch(`${BASE_URL}/applications/${id}`);
  return res.json();
}

// Add create/update/delete as needed
