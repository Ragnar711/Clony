BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[media] (
    [id] NVARCHAR(1000) NOT NULL,
    [Name] VARCHAR(255) NOT NULL,
    [Review] INT NOT NULL,
    [Year] INT NOT NULL,
    [Director] VARCHAR(255),
    [Actor1] VARCHAR(255),
    [Actor2] VARCHAR(255),
    [Actor3] VARCHAR(255),
    [Actor4] VARCHAR(255),
    [MediaType] VARCHAR(255),
    [Genre1] VARCHAR(255),
    [Genre2] VARCHAR(255),
    CONSTRAINT [media_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [media_Name_key] UNIQUE NONCLUSTERED ([Name])
);

-- CreateTable
CREATE TABLE [dbo].[users] (
    [id] NVARCHAR(1000) NOT NULL,
    [username] VARCHAR(255) NOT NULL,
    [email] VARCHAR(255) NOT NULL,
    [password] VARCHAR(255) NOT NULL,
    CONSTRAINT [users_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [users_username_key] UNIQUE NONCLUSTERED ([username]),
    CONSTRAINT [users_email_key] UNIQUE NONCLUSTERED ([email])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
