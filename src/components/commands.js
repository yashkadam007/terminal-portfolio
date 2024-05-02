
export const commandMap = new Map([
  ['hello', 'world!'],
  ['about', 'This is some information about me.'],
  ['explore', (
    <div>
      <p>some suggested commands:</p>
      <p>about</p>
      <p>email</p>
      <p>clear</p>
      <p>rm -rf /</p>
      <p>hint: there are more commands. feel free to try other keywords!</p>
    </div>
  )],
  ['rm -rf /', {
    action: 'redirect',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    message: 'GOTCHA!'
  }],
]);
