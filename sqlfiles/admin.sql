--------------------------------------------------------
--  File created - Wednesday-December-27-2023   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table ADMIN
--------------------------------------------------------

  CREATE TABLE "ACADEMIA_PLUS_NEW"."ADMIN" 
   (	"ADMIN_ID" VARCHAR2(6 BYTE), 
	"ADMIN_FIRST_NAME" VARCHAR2(255 BYTE), 
	"ADMIN_LAST_NAME" VARCHAR2(255 BYTE), 
	"ADMIN_GENDER" VARCHAR2(255 BYTE), 
	"ADMIN_AGE" VARCHAR2(255 BYTE), 
	"CONTACT_ADDRESS" VARCHAR2(255 BYTE), 
	"ADMIN_EMAIL" VARCHAR2(255 BYTE), 
	"ADMIN_PASSWORD" VARCHAR2(255 BYTE), 
	"ADMIN_PHONE_NUMBER" VARCHAR2(255 BYTE)
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
REM INSERTING into ACADEMIA_PLUS_NEW.ADMIN
SET DEFINE OFF;
Insert into ACADEMIA_PLUS_NEW.ADMIN (ADMIN_ID,ADMIN_FIRST_NAME,ADMIN_LAST_NAME,ADMIN_GENDER,ADMIN_AGE,CONTACT_ADDRESS,ADMIN_EMAIL,ADMIN_PASSWORD,ADMIN_PHONE_NUMBER) values ('000001','John','Doe','Male','30','123 Main St','admin@gmail.com','12345','123-456-7890');
Insert into ACADEMIA_PLUS_NEW.ADMIN (ADMIN_ID,ADMIN_FIRST_NAME,ADMIN_LAST_NAME,ADMIN_GENDER,ADMIN_AGE,CONTACT_ADDRESS,ADMIN_EMAIL,ADMIN_PASSWORD,ADMIN_PHONE_NUMBER) values ('000002','Jane','Smith','Female','25','456 Oak St','jane.smith@example.com','pass456','987-654-3210');
Insert into ACADEMIA_PLUS_NEW.ADMIN (ADMIN_ID,ADMIN_FIRST_NAME,ADMIN_LAST_NAME,ADMIN_GENDER,ADMIN_AGE,CONTACT_ADDRESS,ADMIN_EMAIL,ADMIN_PASSWORD,ADMIN_PHONE_NUMBER) values ('000003','Bob','Johnson','Male','40','789 Pine St','bob.johnson@example.com','secret789','555-123-4567');
--------------------------------------------------------
--  DDL for Index SYS_C008225
--------------------------------------------------------

  CREATE UNIQUE INDEX "ACADEMIA_PLUS_NEW"."SYS_C008225" ON "ACADEMIA_PLUS_NEW"."ADMIN" ("ADMIN_ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Trigger ADMIN_BEFORE_INSERT
--------------------------------------------------------

  CREATE OR REPLACE EDITIONABLE TRIGGER "ACADEMIA_PLUS_NEW"."ADMIN_BEFORE_INSERT" 
BEFORE INSERT ON admin
FOR EACH ROW
BEGIN
    SELECT '00000' || admin_id_seq.NEXTVAL
    INTO :new.admin_id
    FROM dual;
END;

/
ALTER TRIGGER "ACADEMIA_PLUS_NEW"."ADMIN_BEFORE_INSERT" ENABLE;
--------------------------------------------------------
--  Constraints for Table ADMIN
--------------------------------------------------------

  ALTER TABLE "ACADEMIA_PLUS_NEW"."ADMIN" ADD PRIMARY KEY ("ADMIN_ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS"  ENABLE;
