ALTER TABLE `Adverts` 
    MODIFY COLUMN `AmountFrom` DECIMAL(13, 7) NOT NULL,
    MODIFY COLUMN `AmountTo` DECIMAL(13, 7) NULL,
    MODIFY COLUMN `FixedPrice` DECIMAL(13, 7) NULL,
    MODIFY COLUMN `PercentageAdjustment` DECIMAL(13, 7) NULL;
