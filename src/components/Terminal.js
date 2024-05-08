"use client";
import React, { useEffect, useRef, useState } from 'react';
import styles from './Terminal.module.css';
import { commandMap } from './commands';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);

  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const clearOutput = () => {
    setOutput([]);
  };

  useEffect(() => {
    setOutput(['> Welcome to Yash Kadam\'s interactive website! Type \'explore\' to investigate.']);
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      if (historyIndex < history.length - 1) {
        setHistoryIndex(historyIndex + 1);
        setInput(history[history.length - 1 - historyIndex - 1]);
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIndex >= 0) {
        setHistoryIndex(historyIndex - 1);
        setInput(historyIndex === 0 ? '' : history[history.length - 1 - historyIndex]);
      }
    } else if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const command = input.trim();
    const result = handleCommand(command);
    if (command != 'clear') {
      setOutput((prevOutput) => [...prevOutput, `guest@yash.kadam:~$ ${input}`, result]);
    }
    setHistory((prevHistory) => [...prevHistory, command]);
    setHistoryIndex(-1);
    setInput('');
  };

  const handleCommand = (command) => {
    const commandHandler = commandMap.get(command);
    if (command === 'clear') {
      clearOutput();
      return '';
    } else if (commandHandler && commandHandler.action === 'redirect') {
      window.location.href = commandHandler.url;
      return commandHandler.message;
    } else if (commandHandler != undefined) {
      return commandHandler;
    } else if (command === '') {
      return '';
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
          ref={inputRef}
          type="text"
          value={input}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          // onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
          className={styles.input}
          autoFocus
        />
      </div>
    </div>
  );
};

export default Terminal;
