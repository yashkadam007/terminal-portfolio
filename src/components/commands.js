export const commandMap = new Map([
  ['hello', 'world!'],
  ['hi', 'こんにちは'],
  ['about', (
    <div key="about">
      <p key="about-p1">
        Hey there! I&apos;m a code-crushing, problem-solving genin on his journey to become hokage in the realm of software engineering. Whether it&apos;s crafting sleek web apps that make users go &quot;wow&quot; or diving into the nitty-gritty of backend magic, I&apos;ve got the skills. Oh, and mobile app development? Yeah, I&apos;ve got that covered too!
      </p>
      <p key="about-p2">
        I&apos;m on the lookout for some tantalizing challenges in the software world. You know, the kind that makes your brain tingle with excitement and your fingers itch to start typing away lines of code. Got something innovative brewing? I&apos;m your person to turn that idea into a digital reality.
      </p>
      <p key="about-p3">
        And when I&apos;m not coding, you&apos;ll find me exploring new places, hitting the pavement on a refreshing run, or kicking back with a good movie. Life&apos;s all about balance, right?
      </p>
    </div>
  )],
  ['ls', 'quote.txt'],
  ['cat quote.txt', 'Always code as if the person who ends up maintaining your code is a violent psychopath who knows where you live.'],
  ['explore', (
    <div key="explore">
      <p key="explore-p1">some suggested commands:</p>
      <p key="explore-p2">about</p>
      <p key="explore-p3">email</p>
      <p key="explore-p4">github</p>
      <p key="explore-p5">projects</p>
      <p key="explore-p6">resume</p>
      <p key="explore-p7">clear</p>
      <p key="explore-p8">rm -rf /</p>
      <p key="explore-p9">hint: there are more commands. feel free to try other keywords!</p>
    </div>
  )],
  ['email', (
    <div key="email">
      <a href="mailto:yashkadam199928@gmail.com">yashkadam199928@gmail.com</a>
    </div>
  )],
  ['github', {
    action: 'redirect',
    url: 'https://github.com/yashkadam007',
    message: 'yashkadam007'
  }],
  ['projects', (
    <div key="projects">
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
