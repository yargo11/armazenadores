"use client";

export default function IndexedDB() {
  let db;

  const request = window.indexedDB.open("chapter", 1);

  request.onerror = (event) => {
    console.log("Deu tudo errado!");
  };

  request.onsuccess = (event) => {
    console.log("Deu tudo certo!");
    db = request.result;
  };

  request.onupgradeneeded = (event) => {
    // Save the IDBDatabase interface
    const db = event.target.result;

    // Create an objectStore for this database
    const objectStore = db.createObjectStore("name", { keyPath: "myKey" });
  };

  return (
    <div className="m-4">
      <h1 className="text-2xl">IndexedDB</h1>
    </div>
  );
}
