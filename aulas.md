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

docker compose -f infra/compose.yaml up -d
docker compose -f infra/compose.yaml down

## Derrubar container

docker compose down

## postgres

psql --host=localhost --username=postgres --port=5432


# Dia 23

## Executar apenas teste de `migrations`
npm run test:watch -- migrations
npm run test:watch -- migrations.post
