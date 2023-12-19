'use client'

export default function CacheStorage() {

    const l = console.log

    function createCache() {
        caches.open('chapter').then((cache) => {
            console.log('cache', cache)
        }).catch((error) => {
            console.log(error)
        })
    }

    function checkCache() {
        caches.has('chapter').then((cache) => {
            console.log('Existo', cache)
        }).catch((error) => { console.log('error', error) })
    }

    function deleteCache() {
        caches.delete('chapter').then((cache) => {
            console.log('Fui deletado', cache)
        }).catch((error) => { console.log('Não existe nada para ser deletado', error) })
    }

    function keysCache() {
        caches.keys().then(function (caches) {
            l(caches);
        });
    }

    function matchCache() {
        caches.open('chapter').then((cache) => {
            cache.match('/localsession').then((response) => {
                l(response)
            })
        }).catch((err) => {
            l(err)
        })
    }

    function matchAllCache() {
        caches.open('chapter').then((cache) => {
            cache.matchAll('/localsession').then((response) => {
                l(`Results: ${response}`)
            })
        }).catch((err) => {
            l(err)
        })
    }

    function addCache() {
        caches.open('chapter').then((cache) => {
            // cache.add('/')
            cache.addAll(['/', '/cacheStorage', '/localsession'])
        }).catch((err) => {
            l(err)
        })
    }

    function putCache() {
        fetch('/localsession').then(function (response) {
            return caches.open('chapter').then(function (cache) {
                return cache.put('/localsession', response)
            })
        })
    }

    function deleteFromCache() {
        caches.open('chapter').then((cache) => {
            cache.delete('/localsession')
        }).catch((err) => {
            l(err)
        })
    }

    function gettingAllCache() {
        caches.open('chapter').then((cache) => {
            cache.keys().then(function (keys) {
                l(keys); // Array [Request, Request, Request]
            });
        }).catch((err) => {
            l(err)
        })
    }

    return (

        <div className="m-4">
            <h1 className="text-2xl">CacheStorage</h1>

            <button onClick={createCache}>Criando Cache</button>
            <br />
            <button onClick={checkCache}>Check Cache</button>
            <br />
            <button onClick={deleteCache}>Delete Cache</button>
            <br />
            <button onClick={keysCache}>Keys Cache</button>
            <br />
            <button onClick={addCache}>Add Cache</button>
            <br />
            <button onClick={putCache}>Put Cache</button>
            <br />
            <button onClick={deleteFromCache}>Delete From Cache</button>
            <br />
            <button onClick={gettingAllCache}>Getting All Keys</button>
            <br />
            <button onClick={matchCache}>Match Cache</button>
            <br />
            <button onClick={matchAllCache}>Match All Cache</button>

        </div>
    )
}