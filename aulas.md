# Dia 3

```
# versão usada
node -v

# listar versões do node
nvm ls

# instalar versão do node
nvm install lts/hydrogen

# alias
nvm alias default lts/hydrogen

# versão recomendada: criar .nvmrc
```

# Dia 17

## Ler arquivo compose dentro de uma pasta

```
docker compose -f infra/compose.yaml up -d
docker compose -f infra/compose.yaml down
```

## Derrubar container

```
docker compose down
```

## Postgres

```
psql --host=localhost --username=postgres --port=5432
```

# Dia 23

## Executar apenas teste de `migrations`

```
npm run test:watch -- migrations
npm run test:watch -- migrations.post
```

# Dia 25

## CURL

```
curl https://andrearruda-clone-tabnews.vercel.app/api/v1/migrations
curl -X POST https://andrearruda-clone-tabnews.vercel.app/api/v1/migrations
```

# Dia 26

## CURL formatado

```
curl https://clone-tabnews-git-fix-migrations-46f4ce-andre23arrudas-projects.vercel.app/api/v1/migrations | python3 -m json.tool

curl -X DELETE https://clone-tabnews-git-fix-migrations-46f4ce-andre23arrudas-projects.vercel.app/api/v1/migrations | python3 -m json.tool

curl -s https://clone-tabnews-git-fix-migrations-46f4ce-andre23arrudas-projects.vercel.app/api/v1/status | python3 -m json.tool
```

# Dia 27

## Excluir branch

```
git branch -d tamanho-do-cabelo
git branch -D tamanho-do-cabelo
```

## Log de referências do git

```
git reflog
```

```
# Aponta para main
git checkout main

# exclui branch
git branch -d fix-migrations-endpoints

# histórico de refrências
git reflog

# cria a branch a partir de um commit específico
git checkout -b fix-migrations-endpoints c13a0f0
```

## Merge

```
# Aponta para main
git checkout main

# merge
git merge fix-migrations-endpoints

# push main (deploy)
git push
```

## CURL formatado

```
watch -n 1 'curl -s https://andrearruda-clone-tabnews.vercel.app/api/v1/status | jq'
```

# Dia 28

Papos sobre CI/CD

# Dia 29

- Adicionado nome do postgres container: `postgres-dev`
- Adicionado script para verificar status de postgres e evitar `race condition` em `npm run dev`
- Paralelismo no script para rodar os testes (postgres, servidor web e jest)

# Dia 30

Melhorando testes com concurrently e async-retry (subindo servidor web e depois executando os testes)

# Dia 31

Enfim CI (github actions)

- Workflow de testes
- Workflow de linting
