USE [ExpenseDB]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 26/10/2023 3:09:25 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ExpenseDetails]    Script Date: 26/10/2023 3:09:25 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ExpenseDetails](
	[ExpenseId] [int] IDENTITY(1,1) NOT NULL,
	[ExpenseName] [nvarchar](100) NOT NULL,
	[ExpenseCategory] [nvarchar](25) NOT NULL,
	[ExpenseDate] [date] NOT NULL,
	[ExpenseAmount] [decimal](18, 2) NOT NULL,
 CONSTRAINT [PK_ExpenseDetails] PRIMARY KEY CLUSTERED 
(
	[ExpenseId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20231021054855_init db', N'7.0.12')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20231025164717_DateTimeFormat', N'7.0.12')
GO
SET IDENTITY_INSERT [dbo].[ExpenseDetails] ON 

INSERT [dbo].[ExpenseDetails] ([ExpenseId], [ExpenseName], [ExpenseCategory], [ExpenseDate], [ExpenseAmount]) VALUES (1, N'ZUS Coffee', N'Food', CAST(N'2023-10-16' AS Date), CAST(46.00 AS Decimal(18, 2)))
INSERT [dbo].[ExpenseDetails] ([ExpenseId], [ExpenseName], [ExpenseCategory], [ExpenseDate], [ExpenseAmount]) VALUES (2, N'Starbucks', N'Food', CAST(N'2023-10-01' AS Date), CAST(36.90 AS Decimal(18, 2)))
INSERT [dbo].[ExpenseDetails] ([ExpenseId], [ExpenseName], [ExpenseCategory], [ExpenseDate], [ExpenseAmount]) VALUES (3, N'Astro', N'Utilities', CAST(N'2023-10-12' AS Date), CAST(100.00 AS Decimal(18, 2)))
INSERT [dbo].[ExpenseDetails] ([ExpenseId], [ExpenseName], [ExpenseCategory], [ExpenseDate], [ExpenseAmount]) VALUES (4, N'TIME', N'Utilities', CAST(N'2023-10-09' AS Date), CAST(104.40 AS Decimal(18, 2)))
INSERT [dbo].[ExpenseDetails] ([ExpenseId], [ExpenseName], [ExpenseCategory], [ExpenseDate], [ExpenseAmount]) VALUES (5, N'KFC', N'Food', CAST(N'2023-10-07' AS Date), CAST(25.90 AS Decimal(18, 2)))
INSERT [dbo].[ExpenseDetails] ([ExpenseId], [ExpenseName], [ExpenseCategory], [ExpenseDate], [ExpenseAmount]) VALUES (6, N'MyMed', N'Utilities', CAST(N'2023-10-02' AS Date), CAST(180.00 AS Decimal(18, 2)))
INSERT [dbo].[ExpenseDetails] ([ExpenseId], [ExpenseName], [ExpenseCategory], [ExpenseDate], [ExpenseAmount]) VALUES (7, N'Karaoke', N'Entertainment', CAST(N'2023-10-03' AS Date), CAST(33.50 AS Decimal(18, 2)))
INSERT [dbo].[ExpenseDetails] ([ExpenseId], [ExpenseName], [ExpenseCategory], [ExpenseDate], [ExpenseAmount]) VALUES (8, N'Toolbox', N'Others', CAST(N'2023-10-04' AS Date), CAST(136.00 AS Decimal(18, 2)))
INSERT [dbo].[ExpenseDetails] ([ExpenseId], [ExpenseName], [ExpenseCategory], [ExpenseDate], [ExpenseAmount]) VALUES (9, N'Deen Maju', N'Food', CAST(N'2023-10-07' AS Date), CAST(28.70 AS Decimal(18, 2)))
INSERT [dbo].[ExpenseDetails] ([ExpenseId], [ExpenseName], [ExpenseCategory], [ExpenseDate], [ExpenseAmount]) VALUES (10, N'TNB', N'Utilities', CAST(N'2023-10-05' AS Date), CAST(136.20 AS Decimal(18, 2)))
INSERT [dbo].[ExpenseDetails] ([ExpenseId], [ExpenseName], [ExpenseCategory], [ExpenseDate], [ExpenseAmount]) VALUES (11, N'Dandy', N'Food', CAST(N'2023-10-02' AS Date), CAST(87.00 AS Decimal(18, 2)))
INSERT [dbo].[ExpenseDetails] ([ExpenseId], [ExpenseName], [ExpenseCategory], [ExpenseDate], [ExpenseAmount]) VALUES (12, N'Uniqlo', N'Others', CAST(N'2023-10-06' AS Date), CAST(149.90 AS Decimal(18, 2)))
INSERT [dbo].[ExpenseDetails] ([ExpenseId], [ExpenseName], [ExpenseCategory], [ExpenseDate], [ExpenseAmount]) VALUES (13, N'Petrol', N'Others', CAST(N'2023-10-07' AS Date), CAST(60.00 AS Decimal(18, 2)))
INSERT [dbo].[ExpenseDetails] ([ExpenseId], [ExpenseName], [ExpenseCategory], [ExpenseDate], [ExpenseAmount]) VALUES (14, N'Hotlink', N'Utilities', CAST(N'2023-10-11' AS Date), CAST(48.00 AS Decimal(18, 2)))
INSERT [dbo].[ExpenseDetails] ([ExpenseId], [ExpenseName], [ExpenseCategory], [ExpenseDate], [ExpenseAmount]) VALUES (15, N'Coffee Bean', N'Food', CAST(N'2023-10-04' AS Date), CAST(35.70 AS Decimal(18, 2)))
SET IDENTITY_INSERT [dbo].[ExpenseDetails] OFF
GO
