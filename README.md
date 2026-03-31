<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Modern Timer App - README</title>
</head>
<body>

  <h1>Modern Timer App</h1>

  <p>
    This is my <strong>first project on GitHub</strong>, built with React.  
    It’s a countdown timer that supports <strong>days, hours, minutes, and seconds</strong>, with features like:
  </p>

  <ul>
    <li>Editable inputs for custom time setup</li>
    <li>Start, pause, and clear controls</li>
    <li>Keyboard navigation (Arrow keys + Enter)</li>
    <li>Theme switching (light/dark mode)</li>
  </ul>

  <h2>Why I Built This</h2>
  <p>
    I wanted to challenge myself beyond a simple timer.  
    This project helped me learn:
  </p>
  <ul>
    <li>React hooks (<code>useState</code>, <code>useEffect</code>, <code>useRef</code>, <code>useMemo</code>)</li>
    <li>Managing focus and keyboard events for better UX</li>
    <li>Handling countdown logic across multiple time units</li>
    <li>Applying theme changes with CSS variables</li>
  </ul>

  <h2>What I Learned</h2>
  <ul>
    <li>My first version uses arrays of strings for time values. It works, but makes arithmetic harder.</li>
    <li>A cleaner approach would be storing total seconds or using an object <code>{days, hours, minutes, seconds}</code>.</li>
    <li>I also learned the importance of separating logic into smaller components for readability and scalability.</li>
  </ul>

  <h2>Future Improvements</h2>
  <ul>
    <li>Refactor countdown logic to use total seconds</li>
    <li>Split into smaller components (<em>TimeInput</em>, <em>CountdownDisplay</em>, <em>ThemeToggle</em>, <em>ActionButtons</em>)</li>
    <li>Add notifications or sound alarms when the timer finishes</li>
    <li>Improve pause/resume handling with clearer state management</li>
  </ul>

  <h2>Reflection</h2>
  <p>
    This project marks the start of my GitHub journey.  
    I’m keeping this version as a milestone to show where I began, and I plan to build a 
    <strong>refactored version</strong> that demonstrates cleaner state design and component separation.
  </p>

  <h2>Updated Version</h2>
  <p>
    You can find the improved version here:  
    <a href="https://github.com/bishal2code/modern-timer-refactored" target="_blank">
      Modern Timer Refactored
    </a>
  </p>

</body>
</html>
