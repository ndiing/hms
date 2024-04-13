-- 1. Temukan constraint FOREIGN KEY yang terkait dengan setiap tabel dan hapusnya.
DECLARE @constraint_sql NVARCHAR(MAX) = ''

SELECT @constraint_sql += 'ALTER TABLE ' + QUOTENAME(TABLE_SCHEMA) + '.' + QUOTENAME(TABLE_NAME) + ' DROP CONSTRAINT ' + QUOTENAME(CONSTRAINT_NAME) + ';' 
FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS
WHERE CONSTRAINT_TYPE = 'FOREIGN KEY'
AND TABLE_NAME IN ('pasien', 'praktisi', 'organisasi', 'layanan_kesehatan', 'lokasi', 'janji_temu', 'pertemuan');

EXEC sp_executesql @constraint_sql;

-- 2. Hapus tabel-tabel yang sudah tidak memiliki constraint FOREIGN KEY.
DECLARE @drop_table_sql NVARCHAR(MAX) = ''

SELECT @drop_table_sql += 'DROP TABLE ' + QUOTENAME(TABLE_SCHEMA) + '.' + QUOTENAME(TABLE_NAME) + ';' 
FROM INFORMATION_SCHEMA.TABLES 
WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_CATALOG = 'hms';

EXEC sp_executesql @drop_table_sql;
