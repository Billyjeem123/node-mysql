Install prisma
npm install prisma --save-dev
npm install @prisma/client mysql2
\
Initliaze it
npx prisma init


All models should be inside schems.prisma


To  create table migrations
npx prisma migrate dev --name add_time_stamp_to_posts


next is npx prisma generate


use v6
npm uninstall prisma @prisma/client
npm install prisma@^6.0.0 @prisma/client@^6.0.0 --save-exact

php artisan migrate
php artisan migrate:fresh    # Drop all tables and re-migrate
php artisan migrate:rollback # Undo last migration


npx prisma migrate dev --name create_users_table
npx prisma migrate reset  # Drop all tables and re-migrate
npx prisma db push        # Quick sync without migration files


taskkill /F /IM node.exe When i intend to add new update to my prisma i run tha comand to kel l windown underlaying blcker

Summary Table
FeatureLaravel CommandPrisma CommandInitializecomposer require laravel/frameworknpx prisma initCreate Modelphp artisan make:model UserEdit schema.prismaCreate Migrationphp artisan make:migrationAuto-createdRun Migrationphp artisan migratenpx prisma migrate devGenerate ClientAutomaticnpx prisma generateSeed Databasephp artisan db:seednpx prisma db seedReset Databasephp artisan migrate:freshnpx prisma migrate reset