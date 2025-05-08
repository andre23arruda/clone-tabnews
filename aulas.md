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

docker compose -f infra/compose.yaml up

## Derrubar container

docker compose down

## postgres

psql --host=localhost --username=postgres --port=5432
