# isomorphic-react

Experimenting with isomorphic React

## Serving

Start the client:
```
npm run client-start
```

Start the server:
```
npm run server-start
```

### Regular
Serving the app via WebPack, rendering the page on the client.

Open [http://localhost:8056/](http://localhost:8056/)

### Isomorphic
Serving the app via node, prerendering the page before it hits the client.

Open [http://localhost:8055/](http://localhost:8055/)

## TODO
- ~~Fix EJS template issues with WebPack~~
- ~~Add serve and watch for both client and server~~
- ~~Hook up stylelint~~
- Import stylesheets into React components
- Fix React routing
- Rework architecture to support modular server and client code
