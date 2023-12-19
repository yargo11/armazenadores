
export default function Home() {
  return (
    <div className="m-4">
      <h1 className="text-2xl">Armazenadores de dados no navegador</h1>
      <ul className="ml-4">
        <li>
          Armazenamento de dados no Browser com Cookies
        </li>
        <li>
          <a href='/localsession' className="hover:text-blue-700">
            LocalStorage e SessionStorage
          </a>
        </li>
        <li>
          <a href='/indexedDB' className="hover:text-blue-700">
            IndexedDB
          </a>
        </li>
        <li>
          <a href='/cacheStorage' className="hover:text-blue-700">
            CacheStorage API
          </a>
        </li>
        <li>O que podemos armazenar com cacheStorage API?</li>
        <li>Armazenamento de dados no Browser do usuário com PWA</li>
        <li>Quanto eu posso armazenar?</li>
      </ul>
    </div>
  )
}