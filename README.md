link tutorial: https://www.youtube.com/playlist?list=PLAZUzPw7MqPSWbqXibVBfon4Y5HgQT9EU

Instalacion inicial
```
npm i express aws-sdk dotenv uuid

npm i -D typescript ts-node nodemon eslint eslint-config-standard-with-typescript @types/node @types/express @types/aws-sdk @types/uuid 

npx tsc --init
```

tsconfig.json
```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "rootDir": "./src",
    "baseUrl": "./src",
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

```
tsc
```


crear archivo .eslintrc.json
intalar extension eslint
```json
{
  "extends": "standard-with-typescript",
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "rules": {},
  "ignorePatterns": [
    "dist",
    "node_modules",
    "src/**/*.js"
  ]
}
```


nuestro dominio no puede conocer nada de la capa de infraestructura, la comunicacion se va hacer a traves de interfaces

application/usecases: tener toda la logica de nuestra aplicacion, el obtener un usuario, actualizar un usuario, obtener por id, etc


En el caso de uso tenemos el constructor, en este vamos a inyectar todas las dependencias que necesitamos para poder crear un usuario, estas dependencias son interfaces que estan en el dominio

Capas en orden desde la mas externala a la mas interna
- Framework
- Infrastructure
- Application
- Domain

La capa de dominio no se puede comunicar con la capa de aplicaion
La capa de application no se puede comunicar con la capa de infraesctructura

La comunicacion siempre va ser desde afuera hacia adentro
La infraestructura siempre va a conocer de aplicacion o de dominio
La capa de aplicacion siempre va a conocer del dominio
