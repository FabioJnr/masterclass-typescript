## Application Details

|                                                                                                |
| ---------------------------------------------------------------------------------------------- |
| **1 - Instalar o Typescript**<br>npm i -D typescript                                           |
| **2 - Instalar o Express**<br>npm i express                                                    |
| **3 - Criar o diretório src**<br>criar a pasta src/server.ts                                   |
| **4 - Instalar a tipagem do express**<br>npm i --save-dev @types/express                       |
| **5 - Configurar o typescript**<br>tsc --init                                                  |
| **6 - Criar a pasta de produção no arquivo tsconfig**<br>"outDir": "./dist",                   |
| **7 - Executar a transpilação**<br>no terminal digitar tsc                                     |
| **8 - Instalar o ts-node**<br>npm i ts-node-dev -D                                             |
| **9 - Criar o Script**<br>"dev:server": "ts-node-dev --respawn --transpile-only src/server.ts" |
| ---------------------------------------------------------------------------------------------- |
