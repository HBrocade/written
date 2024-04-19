# Written Test: Full-Stack Developer

```Question 1:```

```typescript
// Please elaborate the algorithm to flatten a nested array, e.g.:
const nestedArray = [1, [2, 3, [5]], 4];

// Please also provide a type for `nestedArray`.
type NestedArray = ? // please provide your definition here
```

<!-- ```Answer``` -->
**Answer**
[My answer](./src/routes/flatten.ts)

```Question 2:```

**Write a TypeScript program to parse the log file ''[api-access.log](./src/logs/api-access.log)'', display the number of error requests for each hour of the day. Please refer to the attached file.**

```Answer```
[My answer](./src/routes/log.ts)

```Question 3:```

**Develop a REST API utilizing any Node.js framework of your choice, with the following capabilities:**
**oInclude a POST endpoint at /data that accepts a JSON formatted list containing exactly 10 random numbers. If the submitted list contains more or fewer than 10 numbers, or if the submission is not a list of numbers, an error response should be issued.**
**oInclude a GET endpoint at /data that returns a JSON formatted list of the unique numbers from the previously submitted list, sorted in ascending order. The list can contain up to 10 numbers.**

**BONUS: Add a PATCH endpoint at /data that enables the addition of a single number into the existing list, inserting the number in its correct position according to order.**
**Sample input and output:**

```Example 1:```

```json
Input: [3, 2, 5, 6, 4, 3, 2, 3, 2, 5]
Output: [2, 3, 4, 5, 6]
```

```Example 2:```

```json
Input: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

```NOTE: The runtime of your sorting algorithm should be O(n)```

```Answer```
[My answer](./src/routes/data.ts)

```The format of the passed arguments```

```json
{
    "Input": [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
}
or
{
    "Input": [10]
}
```

```Question 4:```

**Identify if there is any type design issue of State in the code below. If yes, please provide a better type design solution, and enhance the code below accordingly.**

```javascript
interface State {
  pageText: string;
  isLoading: boolean;
  error?: string;
}

function renderPage(state: State) {
  if (state.error) {
    return `Error! Unable to load current page: ${state.error}`;
  } else if (state.isLoading) {
    return `Loading the page`;
  }
  return `<p>${state.pageText}</p>`;
}

async function loadPage(state: State, url: string) {
  state.isLoading = true
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Unable to load ${url}: ${response.statusText}`);
    }
    const text = await response.text()
    state.isLoading = false;
    state.pageText = text;
  } catch (e) {
    state.error = '' + e;
  }
  return state;
}

(async () => {
  const state = {
    pageText: '',
    isLoading: false,
  }
  await loadPage(state, "https://google.com")
})();
```

```Answer```

```Give up```

## Notes

**The framework I'm using is express.**
