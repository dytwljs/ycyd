CREATE TABLE user(
  User_Id varchar(6),
  User_Pwd varchar(8) NULL,
  Again_Pwd varchar(8) NULL,
  Bel_Group varchar(3) NULL,
  Div_Type varchar(1) NULL,
  User_Auth varchar(1) NULL,
  Auth_Type varchar(1) NULL,
  User_Status varchar(1) NULL,
  Create_User varchar(6) NULL,
  Create_Date varchar(7) NULL,
  Create_Time varchar(6) NULL,
  Appr_User varchar(6) NULL,
  Appr_Date varchar(7) NULL,
  Appr_Time varchar(6) NULL,
  Pwd_Date varchar(7) NULL,
  Err_Count float NULL,
  Use_eJCIC varchar(1) NULL
)
CREATE TABLE Supplier  /*供应商表*/
(
  Supplier_ID     int     IDENTITY(1,1)     NOT NULL, /* 供应商编号 ,主键 */
  Name            varchar(250)              NOT NULL, /* 供应商名称 */
  Address         varchar(250)              NOT NULL, /* 地址 */
  Phone           varchar(25)               NULL,     /* 电话 */
  Fax             varchar(25)               NULL,     /* 传真 */
  PostalCode      varchar(10)               NULL,     /* 邮编 */
  ConstactPerson  varchar(20)               NULL      /* 联系人 */
 )

CREATE TABLE Customer   /* 客户表*/
(
  Customer_ID     int    IDENTITY(1,1)      NOT NULL, /* 客户编号,主键*/
  Name            varchar(250)              NOT NULL, /* 客户名称 */
  Address         varchar(250)              NOT NULL, /* 地址 */ 
  Phone           varchar(25)               NULL,     /* 电话 */
  Fax             varchar(25)               NULL,     /* 传真 */
  PostalCode      varchar(10)               NULL,     /* 邮编 */
  ConstactPerson  varchar(20)               NULL      /* 联系人 */
 ) 

CREATE TABLE Dept      /* 部门表 */
(
  Dept_ID        int   IDENTITY(1,1)        NOT NULL, /* 部门编号,主键 */
  Name           varchar(30)                NOT NULL, /* 名称 */
  Remark           varchar(250)               NOT NULL/* 描述,备注 */ 
)

CREATE TABLE Dept_Supplier /* 部门--供应商表*/
(
  Dept_ID       int                         NOT NULL,  /* 部门编号,主键 ,  外键( 参照 DEPT 表  )*/
  Supplier_ID   int                         NOT NULL   /* 供应商编号 ,主键,外键( 参照 SUPPLIER 表) */
)

CREATE TABLE Dept_Customer /* 部门--客户表*/
(
  Dept_ID       int                         NOT NULL, /* 部门编号,主键 ,  外键( 参照 DEPT 表  )*/
  Customer_ID   int                         NOT NULL  /* 客户编号,主键,  外键( 参照 SUPPLIER 表) */
)

CREATE TABLE StoreHouse   /* 仓库表 */
(
  StoreHouse_ID   int IDENTITY(1,1)         NOT NULL,  /* 仓库编号,主键 */
  Address         varchar(250)              NOT NULL,  /* 地址 */
  Phone           varchar(25)               NULL,      /* 电话 */
  Employee_ID     INT                       NOT NULL,  /* 仓库保管 ,外键 ( 参照 EMPLOYEE 表 ) */
  CreateDate      datetime                  NULL       /* 仓库成立时间 */
)

CREATE TABLE ProductClass  /* 商品总分类表 */
(
  ProductClass_ID  int IDENTITY(1,1)        NOT NULL,  /* 商品总分类编号, 主键 */ 
  Name             varchar(30)              NOT NULL,  /* 商品分类名称 */
  Employee_ID      INT                      NOT NULL,  /* 建分类人 ,外键 ( 参照 EMPLOYEE 表 )*/
  CreateDate       datetime                 NULL,      /* 建分类时间 */
  Remark             varchar(250)             NULL,    /* 描述,备注 */
)

CREATE TABLE ProductList  /* 商品细分类表 */
(
  ProductClass_ID  INT                      NOT NULL, /* 商品总分类编号, 外键 ( 参照PRODUCTCLASS 表 ) */
  ProductList_ID   int IDENTITY(1,1)        NOT NULL, /* 商品细分类编号,主键 */
  Name             varchar(30)              NOT NULL, /* 商品名称 */
  Employee_ID      INT                      NOT NULL, /* 建分类人,外键 ( 参照 EMPLOYEE 表 )*/
  CreateDate       datetime                 NULL,     /* 建分类时间 */
  Remark             varchar(250)             NULL,   /* 描述 ,备注 */
 )

CREATE TABLE ProductSpec  /* 商品规格表 */
(
  ProductSpec_ID   INT IDENTITY(1,1)        NOT NULL, /* 商品规格编号,主键 */
  Name             varchar(30)              NOT NULL, /* 商品规格名称 */
  Employee_ID      INT                      NOT NULL, /* 操作员 ,外键 ( 参照 EMPLOYEE 表 )*/
  CreateDate       datetime                 NULL,     /* 创建时间 */
  Remark             varchar(250)             NULL    /* 描述,备注 */
)
CREATE TABLE ProductUnit /* 商品计量单位表 */
(
  ProductUnit_ID   INT IDENTITY(1,1)        NOT NULL, /* 计量单位编号 ,主键 */
  Name             varchar(30)              NOT NULL, /* 计量单位名称 */
  Employee_ID      INT                      NOT NULL, /* 操作员 ,外键 ( 参照 EMPLOYEE 表 )*/
  CreateDate       datetime                 NULL,     /* 创建时间 */
  Remark             varchar(250)             NULL    /* 描述,备注 */
)
 
CREATE TABLE Product    /* 商品目录表 */
(
  ProductList_ID   int                      NOT NULL,  /* 商品细分类编号, 外键 ( 参照 PRODUCTLIST 表 ) */
  Product_ID       INT IDENTITY(1,1)        NOT NULL,  /* 商品名称编号, 主键 */
  Name             varchar(30)              NOT NULL,  /* 商品名称 */
  ProductSpec_ID   INT                      NOT NULL,  /* 商品规格, 外键 ( 参照 PRODUCTSPEC 表 ) */
  ProductUnit_ID   INT                      NOT NULL,  /* 计量单位, 外键 ( 参照 PRODUCTUNIT 表 ) */
  Price            MONEY                    NULL,      /* 参考价格 */
  Employee_ID      INT                      NOT NULL,  /* 操作员,   外键 ( 参照 EMPLOYEE 表 )*/
  CreateDate       datetime                 NULL,      /* 创建时间 */
  Remark             varchar(250)             NULL     /* 描述,备注 */
)

CREATE TABLE Product_Supplier  /* 商品--供应商表 */
( 
  Product_ID       INT                      NOT NULL,   /* 商品名称编号,主键 , 外键( 参照 PRODUCT 表  )*/
  Supplier_ID      INT                      NOT NULL    /* 供应商编号 , 主键,  外键( 参照 SUPPLIER 表) */
)

CREATE TABLE Employee  /* 员工表 */
( 
  Employee_ID      INT IDENTITY(1,1)        NOT NULL,  /* 员工编号 */
  Dept_ID          INT                      NOT NULL,  /* 所属部门编号 */
  Name             varchar(30)              NOT NULL,  /* 姓名 */
  Duty             varchar(20)              NOT NULL,  /* 职务 */
  Gender           varchar(6)               NOT NULL,  /* 性别 */
  BirthDate        datetime                 NOT NULL,  /* 出生日期 */
  HireDate         datetime                 NULL,      /* 合同签订 日期 */
  MatureDate       datetime                 NULL,      /* 合同到期日 */
  IdentityCard     varchar(20)              NULL,      /* 身份证号 */
  Address          varchar(250)             NULL,      /* 住址 */
  Phone            varchar(25)              NULL,      /* 电话 */
  Email            varchar(30)              NULL       /* E_MAIL */
)
 

/*-///////////////////////////////////////////////////////////////////////////////////////-*/ 

CREATE TABLE BuyOrder    /* 进货合同 */
(
  BuyOrder_ID     INT IDENTITY(1,1)        NOT NULL, /* 进货合同编号 , 主键 */
  WriteDate       datetime                 NOT NULL, /* 合同签订日期  */
  InsureDate      datetime                 NOT NULL, /* 合同生效日期  */
  EndDate         datetime                 NOT NULL, /* 合同到期日期  */
  Dept_ID         INT                      NOT NULL, /* 签订部门, 外键 ( 参照 DEPT 表 ) */
  Supplier_ID     INT                      NOT NULL, /* 供应商,   外键 ( 参照 SUPPLIER 表 ) */
  Employee_ID     INT                      NOT NULL  /* 合同主要负责人, 外键 ( 参照 EMPLOYEE 表) */
)
CREATE TABLE BuyOrder_Detail  /* 进货合同明细表 */
(
  BuyOrder_ID     INT                      NOT NULL,  /* 进货合同编号,主键, 外键 ( 参照 BUYORDER 表 ) */
  Product_ID      INT                      NOT NULL,  /* 所进商品编号,主键, 外键 (参照 PRODUCT 表 ) */ 
  Quantity        INT                      NOT NULL,  /* 商品数量 */
  Price           money                    NOT NULL   /* 商品进价 */
)


CREATE TABLE EnterStock    /* 入库单表 */
(
  EnterStock_ID    INT IDENTITY(1,1)       NOT NULL, /* 入库单编号 , 主键 */
  EnterDate        datetime                NOT NULL, /* 入库时间 */
  Dept_ID          INT                     NOT NULL, /* 入库部门 ,外键 ( 参照 DEPT 表 )*/
  StoreHouse_ID    INT                     NOT NULL, /* 所入仓库 ,外键 ( 参照 STOREHOUSE 表)*/
  Employee_ID      INT                     NOT NULL  /* 入库人 ,  外键 ( 参照 EMPLOYEE 表)*/
  /*需添加 仓库保管员如何来验证入库单 ?? */
)

CREATE TABLE EnterStock_Detail /* 入库单明细 */
( 
  EnterStock_ID    INT                     NOT NULL, /* 入库单编号 , 主键, 外键 (参照 ENTERSTOCK 表 )*/
  Product_ID       INT                     NOT NULL, /* 此种商品编号,主键, 外键 (参照 PRODUCT 表 ) */ 
  Quantity         int                     NOT NULL, /* 此种商品数量 */
  Price            money                   NULL,     /* 此种商品参考价格  */
  HaveInvoice      bit                     not null, /* 此种商品有没有开发票 ( 缺省为 0 , 有没有开票 )*/
  InvoiceNum       varchar(30)             NULL      /* 发票号 */
)


CREATE TABLE BackStock  /* 退库单表 */
(
  BackStock_ID     INT IDENTITY(1,1)       NOT NULL, /* 退库单编号 , 主键 */
  BackDate         datetime                NOT NULL, /* 退库时间 */
  Dept_ID          INT                     NOT NULL, /* 退库部门 ,  外键 ( 参照 DEPT 表 )*/
  StoreHouse_ID    INT                     NOT NULL, /* 所退入仓库 ,外键 ( 参照 STOREHOUSE 表)*/
  Employee_ID      INT                     NOT NULL, /* 退库人 ,    外键 ( 参照 EMPLOYEE 表)*/
  Remark             varchar(250)            NULL    /* 退库原因 */

)
CREATE TABLE BackStock_Detail /* 退库单明细表 */
( 
  BackStock_ID     INT                     NOT NULL, /* 退库单编号 , 主键, 外键 (参照 BACKSTOCK 表 )*/ 
  Product_ID       INT                     NOT NULL, /* 所退商品编号,主键, 外键 (参照 PRODUCT 表 ) */ 
  Quantity         int                     NOT NULL, /* 退入数量 */
  Price            money                   NULL      /* 参考价格 */
  
)

CREATE TABLE LeaveStock  /* 出库单表 */
(
  LeaveStock_ID    INT IDENTITY(1,1)       NOT NULL,  /* 出库单编号 , 主键, 外键 (参照 LEAVESTOCK 表 )*/
  LeaveDate        datetime                NOT NULL,  /* 出库时间 */ 
  Dept_ID          INT                     NOT NULL,  /* 出库部门 ,  外键 ( 参照 DEPT 表 )*/
  StoreHouse_ID    INT                     NOT NULL,  /* 所出仓库 ,外键 ( 参照 STOREHOUSE 表)*/
  ToStoreHouse_ID  INT                     NOT NULL,  /* 所入仓库 ,外键 ( 参照 STOREHOUSE 表)*/
  Employee_ID      INT                     NOT NULL   /* 出库人 ,    外键 ( 参照 EMPLOYEE 表)*/
  /* 仓库保管员如何来验证出库单 ?? */
)

CREATE TABLE LeaveStock_Detail  /* 出库单明细表 */
( 
  LeaveStock_ID    INT                     NOT NULL,  /* 出库单编号 , 主键, 外键 (参照 BACKSTOCK 表 )*/ 
  Product_ID       INT                     NOT NULL,  /* 所出商品编号,主键, 外键 (参照 PRODUCT 表 ) */ 
  Quantity         int                     NOT NULL,  /* 出库数量 */
  Price            money                   NULL       /* 出库价格 */ 
)

CREATE TABLE BackSale  /* 退货单表 */
(
  BackSale_ID      INT IDENTITY(1,1)       NOT NULL,  /* 退货单编号 , 主键 */
  BackDate         datetime                NOT NULL,  /* 退货日期  */ 
  Dept_ID          INT                     NOT NULL,  /* 退货部门 ,  外键 ( 参照 DEPT 表 )*/
  StoreHouse_ID    INT                     NOT NULL,  /* 退入仓库 ,  外键 ( 参照 STOREHOUSE 表)*/
  Employee_ID      INT                     NOT NULL,  /* 退货人 ,    外键 ( 参照 EMPLOYEE 表)*/
  Remark             varchar(250)            NULL     /* 退货原因 */

)
CREATE TABLE BackSale_Detail  /* 退货单明细表 */
( 
  BackSale_ID      INT                     NOT NULL,  /* 退货单编号 , 主键, 外键 (参照 BACKSTOCK 表 )*/ 
  Product_ID       INT                     NOT NULL,  /* 所退商品编号,主键, 外键 (参照 PRODUCT 表 ) */ 
  Quantity         int                     NOT NULL,  /* 退货数量 */
  Price            money                   NULL       /* 价格 */ 
  
)


CREATE TABLE SaleOrder    /* 销售合同 */
(
  SaleOrder_ID     INT IDENTITY(1,1)       NOT NULL,  /* 合同编号 , 主键 */
  WriteDate        datetime                NOT NULL,  /* 合同签订日期  */
  InsureDate       datetime                NOT NULL,  /* 合同生效日期  */
  EndDate          datetime                NOT NULL,  /* 合同到期日期  */
  Dept_ID          INT                     NOT NULL,  /* 签订部门, 外键 ( 参照 DEPT 表 ) */
  Customer_ID      INT                     NOT NULL,  /* 客户编号, 外键 ( 参照 CUSTOMER 表 ) */
  Employee_ID      INT                     NOT NULL   /* 合同主要负责人, 外键 ( 参照 EMPLOYEE 表) */
)
CREATE TABLE SaleOrder_Detail  /* 销售合同明细表 */
(
  SaleOrder_ID     INT                     NOT NULL,  /* 销售合同编号,主键, 外键 ( 参照 BUYORDER 表 ) */
  Product_ID       INT                     NOT NULL,  /* 销售商品编号,主键, 外键 (参照 PRODUCT 表 ) */ 
  Quantity         int                     not null,  /* 商品数量 */
  Price            money                   null       /* 商品进价 */
)


CREATE TABLE Buy     /* 进货表 ( 验货表 ) */
(
   Buy_ID          INT IDENTITY(1,1)         NOT NULL, /* 进货编号 , 主键 */
   ComeDate        datetime                  NOT NULL, /* 进货日期 */
   Dept_ID         INT                       NOT NULL, /* 进货部门, 外键 ( 参照 DEPT 表 ) */ 
   Employee_ID     INT                       NOT NULL  /* 验货人,   外键 ( 参照 EMPLOYEE 表)*/
)

CREATE TABLE Buy_Detail  /* 进货表明细 ( 验货表 ) */  
(
  Buy_ID           INT                      NOT NULL, /* 进货编号,主键, 外键 ( 参照 BUY 表 ) */
  Product_ID       INT                      NOT NULL, /* 商品编号,主键, 外键 ( 参照 PRODUCT 表 ) */ 
  BuyOrder_ID      INT                      NULL,     /* 采购合同,  外键 ( 参照 BUYORDER 表 ) */
  Quantity         int                      not null, /* 数量 */
  Price            money                    null      /* 价格 */
 
  /* BUYORDER_ID 为 NULL 时, 为现金进货 */  
)

CREATE TABLE Sale   /* 销售 表 */
(
  Sale_ID          INT IDENTITY(1,1)        NOT NULL,  /* 销售 编号  */
  SaleDate         datetime                 not null,  /* 销售 日期 */
  Dept_ID          INT                      NOT NULL,  /* 销售部门, 外键 ( 参照 DEPT 表 ) */ 
  Employee_ID      INT                      NOT NULL   /* 售货人,   外键 ( 参照 EMPLOYEE 表)*/
)

CREATE TABLE Sale_Detail  /* 销售明细 ( 验货表 ) */  
(
  Sale_ID          INT                      NOT NULL,  /* 销售编号,主键, 外键 ( 参照 SALE 表 ) */
  Product_ID       INT                      NOT NULL,  /* 商品编号,主键, 外键 ( 参照 PRODUCT 表 ) */  
  SaleOrder_ID     INT                      NULL,      /* 销售合同, 外键 ( 参照 SALEORDER 表 ) */
  Quantity         int                      not null,  /* 数量 */
  Price            money                    not null,  /* 价格 */
  Discount         int                      null       /* 折扣 */
  
  /* SALEORDER_ID 为 NULL 时, 为现金销售 */
)


CREATE TABLE StockPile  /* 库存表 */
( 
  StockPile_ID     INT IDENTITY(1,1)        NOT NULL, /* 库存编号 , 主键 */
  Dept_ID          INT                      NOT NULL, /* 商品所属部门, 外键 ( 参照 DEPT 表 ) */  
  StoreHouse_ID    INT                      NOT NULL, /* 所在仓库,     外键 ( 参照 SOTREHOUSE 表 ) */   
  Product_ID       INT                      NOT NULL, /* 商品编号,     外键 ( 参照 PRODUCT 表 ) */   
  FirstEnterDate   datetime                 not null, /* 此种商品第一次入库时间 */
  LastLeaveDate    datetime                 null,     /* 此种商品最后一次出库时间 */
  Quantity         int                      not null, /* 所存数量 */
  Price            money                    not null  /* 加权价 */
  /* LASTLEAVEDATE 为NULL 时,此种商品从来没有 卖过 */ 
)
