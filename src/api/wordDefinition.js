export async function getDefinition(word) {
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );
  let data = await response.json();
  if (response.status !== 200) {
    return null;
  }
  return data[0]?.meanings[0]?.definitions[0]?.definition?.toLowerCase();
}
