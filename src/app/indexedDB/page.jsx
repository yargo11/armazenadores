"use client";

export default function IndexedDB() {
  let db;

  const request = indexedDB.open("chapter", 1);

  request.onerror = (event) => {
    console.log("Deu tudo errado!");
  };

  request.onsuccess = (event) => {
    console.log("Deu tudo certo!");
    db = request.result;
  };

  request.onupgradeneeded = function (event) {
    var db = event.target.result;

    //Object store sem key path e sem key generator
    //Nesse exemplo vc deve informar a chave ao incluir um objeto
    var store1 = db.createObjectStore("store1");
    store1.add({ campo: "Valor 1" }, 1); //1 = chave do objeto
    store1.add({ campo: "Valor 2" }, 2); //2 = chave do objeto

    //Object store com key path
    //Nesse exemplo o campo definido como chave deve possuir um valor e deve ser único
    var store2 = db.createObjectStore("store2", { keyPath: "minhaChave" });
    store2.add({ minhaChave: "Chave1", campo: "Valor 1" });
    store2.add({ minhaChave: "Chave2", campo: "Valor 2" });

    //Object store com key generator
    //Nesse exemplo uma chave será criada automaticamente ao incluir um objeto
    var store3 = db.createObjectStore("store3", { autoIncrement: true });
    store3.add({ campo: "Valor 1" });
    store3.add({ campo: "Valor 2" });

    //Object store com key path e key generator
    //Nesse exemplo uma chave será criada automaticamente no campo "minhaChave" ao incluir um
    //novo objeto
    var store4 = db.createObjectStore("store4", {
      keyPath: "minhaChave",
      autoIncrement: true,
    });
    store4.add({ campo: "Valor 1" });
    store4.add({ campo: "Valor 2" });
  };

  return (
    <div className="m-4">
      <h1 className="text-2xl">IndexedDB</h1>
    </div>
  );
}
