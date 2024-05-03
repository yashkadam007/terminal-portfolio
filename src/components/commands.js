
export const commandMap = new Map([
  ['hello', 'world!'],
  ['hi', 'こんにちは'],
  ['about', (
    <div>
      <p>Hey there! I'm a code-crushing, problem-solving genin on his journey to become hokage in the realm of software engineering. Whether it's crafting sleek web apps that make users go "wow" or diving into the nitty-gritty of backend magic, I've got the skills to pay the bills. Oh, and mobile app development? Yeah, I've got that covered too!</p>
      <p>I'm on the lookout for some tantalizing challenges in the software world. You know, the kind that makes your brain tingle with excitement and your fingers itch to start typing away lines of code. Got something innovative brewing? I'm your person to turn that idea into a digital reality.</p>
      <p>And when I'm not coding , you'll find me exploring new places, hitting the pavement on a refreshing run, or kicking back with a good movie. Life's all about balance, right?</p>
    </div>
  )],
  ['ls', 'quote.txt'],
  ['cat quote.txt', 'Always code as if the person who ends up maintaining your code is a violent psychopath who knows where you live.'],
  ['explore', (
    <div>
      <p>some suggested commands:</p>
      <p>about</p>
      <p>email</p>
      <p>github</p>
      <p>projects</p>
      <p>resume</p>
      <p>clear</p>
      <p>rm -rf /</p>
      <p>hint: there are more commands. feel free to try other keywords!</p>
    </div>
  )],
  ['email', (
    <div>
      <a href={`mailto:yashkadam199928@gmail.com`}>yashkadam199928@gmail.com</a>
    </div>
  )],
  ['github', {
    action: 'redirect',
    url: 'https://github.com/yashkadam007',
    message: 'yashkadam007'
  }],
  ['projects', (
    <div>
      <p>Exhausted my AWS free tier limit. Will be making my projects live soon. Check out my GitHub instead :(</p>
    </div>
  )],
  ['resume', {
    action: 'redirect',
    url: 'https://drive.google.com/file/d/10ZkMxpyT3T2-zy7rA1CSNroPQLQPUc8z/view?usp=sharing',
    message: 'Going to resume'
  }],
  ['rm -rf /', {
    action: 'redirect',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    message: 'GOTCHA!'
  }],
]);
