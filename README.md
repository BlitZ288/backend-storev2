# Awesome Project Build with TypeORM

1. Создать миграцию npm run typeorm migration:generate src/migration (путь где сформируется миграция) -- -d src/data-source.ts (путь до настройи )
npm run typeorm migration:generate src/migration -- -d src/data-source.ts 
2. Запуск миграции  npm run typeorm migration:run -- -d src/data-source.ts     