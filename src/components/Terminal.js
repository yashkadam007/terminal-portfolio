"use client";
import React, { useEffect, useState } from 'react';
import styles from './Terminal.module.css';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);

  const clearOutput = () => {
    setOutput([]);
  };
  const commandMap = new Map([
    ['hello', 'world!'],
    ['about', 'This is some information about me.'],
  ]);

  useEffect(() => {
    setOutput(['> Welcome to Yash Kadam\'s interactive website! Type \'explore\' to investigate.']);
  }, []);

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const command = input.trim();
    const result = handleCommand(command);
    setOutput((prevOutput) => [...prevOutput, `guest@yash.kadam:~$ ${input}`, result]);
    setInput('');
  };

  const handleCommand = (command) => {
    const commandHandler = commandMap.get(command);
    if (command === 'clear') {
      clearOutput();
      return '';
    } else if (command === 'explore') {
      return (
        <div>
          <p>some suggested commands:</p>
          <p>about</p>
          <p>email</p>
          <p>clear</p>
          <p>rm -rf /</p>
          <p>hint: there are more commands. feel free to try other keywords!</p>
        </div>
      );
    } else if (command === 'rm -rf /') {
      window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
      return 'GOTCHA!';
    } else if (commandHandler !== undefined) {
      return commandHandler;
    } else {
      return `Command ${command} not recognized!`;

    }
  };

  return (
    <div>
      <div>
        {output.map((line, index) => (
          <div key={index}>
            <div className={styles.p}>{line}</div>
          </div>
        ))}
      </div>
      <div>
        <span className={styles.p}>guest@yash.kadam:~$ </span>
        <input
          type="text"
          value={input}
          onChange={handleInput}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
          className={styles.input}
          autoFocus
        />
      </div>
    </div>
  );
};

export default Terminal;
