import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [entries, setEntries] = useState(chatMessages);

  const updateLiked = (id) => {
    const newEntries = [];
    for (const entry of entries) {
      const newEntry = { ...entry };
      if (newEntry.id === id) {
        newEntry.liked = !newEntry.liked;
      }
      newEntries.push(newEntry);
    }
    setEntries(newEntries);
  };

  const countLikes = () => {
    let totalHearts = 0;
    for (const entry of entries) {
      if (entry.liked === true) {
        totalHearts += 1;
      }
    }
    return totalHearts;
  };

  return (
    <div id="App">
      <header>
        <h1>
          Chat between {chatMessages[0].sender} and {chatMessages[1].sender}
        </h1>
        <section>
          <h2 className="widget" id="heartWidget">
            {countLikes()} ❤️s
          </h2>
        </section>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog entries={entries} updateLikedCallback={updateLiked} />
      </main>
    </div>
  );
};

export default App;
