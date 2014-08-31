-- $Id: 140405-changeTypeForSysConfigValue.sql 16606 2014-04-07 06:10:21Z artamonov $
-- Description: Increase max configuration parameter value length to unlimited

alter table SYS_CONFIG modify (VALUE clob) ^