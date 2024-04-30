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
    ['help', 'Available commands: help, about, clear'],
    ['about', 'This is some information about me.'],
  ]);

  useEffect(() => {
    setOutput(['> Welcome to my website!']);
  }, []);

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const command = input.trim().toLowerCase();
    const result = handleCommand(command);
    setOutput((prevOutput) => [...prevOutput, `> ${input}`, result]);
    setInput('');
  };

  const handleCommand = (command) => {
    const commandHandler = commandMap.get(command);
    if (command === 'clear') {
      clearOutput();
      return '';
    } else if (commandHandler !== undefined) {
      return commandHandler;
    } else {
      return `Command not recognized: ${command}`;

    }
  };

  return (
    <div>
      <div>
        {output.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={handleInput}
        onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
        className={styles.input}
      />
    </div>
  );
};

export default Terminal;
