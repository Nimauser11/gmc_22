#!/bin/bash

# Create role
psql -U postgres -c "CREATE ROLE kpix_user WITH LOGIN PASSWORD 'kpix_password';"

# Create database
psql -U postgres -c "CREATE DATABASE kpix_db;"

# Grant privileges
psql -U postgres -c "GRANT ALL PRIVILEGES ON DATABASE kpix_db TO kpix_user;"

# Run migrations
psql -U kpix_user -d kpix_db -f src/config/migrations.sql 