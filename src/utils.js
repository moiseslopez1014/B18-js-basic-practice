export function showResult(num, content) {
  document.getElementById("app").innerHTML += `
      <div class="exercise">
        <h3 class="heading">Exercise ${num}</h3>
        <pre>${JSON.stringify(content, undefined, 2)}</pre>
      </div>
    `;
}

export function sortStrings(a, b) {
  const string1 = a.toLowerCase();
  const string2 = b.toLowerCase();

  if (string1 < string2) return -1;
  if (string1 > string2) return 1;
  return 0;
}