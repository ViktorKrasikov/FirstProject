-- $Id: 140405-changeTypeForSysConfigValue.sql 16610 2014-04-07 06:24:25Z artamonov $
-- Description: Increase max configuration parameter value length to unlimited

alter table SYS_CONFIG alter column VALUE longvarchar^