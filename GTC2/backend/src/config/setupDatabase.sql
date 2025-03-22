-- Create role if not exists
DO
$do$
BEGIN
   IF NOT EXISTS (
      SELECT FROM pg_catalog.pg_roles
      WHERE  rolname = 'kpix_user') THEN
      CREATE ROLE kpix_user LOGIN PASSWORD 'kpix_password';
   END IF;
END
$do$;

-- Create database if not exists
SELECT 'CREATE DATABASE kpix_db'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'kpix_db')\gexec

-- Grant privileges
GRANT ALL PRIVILEGES ON DATABASE kpix_db TO kpix_user; 