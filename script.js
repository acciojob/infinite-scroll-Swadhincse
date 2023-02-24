const infiList = document.getElementById('infi-list');
const numExtraItems = 10;

// Create initial list items
for (let i = 1; i <= 10; i++) {
  const li = document.createElement('li');
  li.textContent = `List Item ${i}`;
  infiList.appendChild(li);
}

// Add more list items when user reaches end of list
infiList.addEventListener('scroll', () => {
  const scrollTop = infiList.scrollTop;
  const scrollHeight = infiList.scrollHeight;
  const clientHeight = infiList.clientHeight;
  const scrollableHeight = scrollHeight - clientHeight;

  if (scrollTop === scrollableHeight) {
    for (let i = 1; i <= numExtraItems; i++) {
      const li = document.createElement('li');
      li.textContent = `List Item ${infiList.childElementCount + i}`;
      infiList.appendChild(li);
    }
  }
});
