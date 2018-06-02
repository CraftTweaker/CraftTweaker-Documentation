# 数据（IData）

数据接口是一个普通的接口，主要用来操纵诸如 NBT 之类的数据。  
你可以将任意基础类型（短整型，双精度，字符串，整型），甚至数组类型转换为数据类型（IData） 。  
但请谨记，即使两种类型属性相同，数据（IData）仍然和它们的对应物是不同的，严格意义上它们被称之为数据类型（DataTypes），比如 DataBool。 


## 导入相关包

为了避免发生一些不期而遇的问题（比如声明[数组](/AdvancedFunctions/Arrays_and_Loops)），最为安全、也是最为推荐的方式就是导入相关的包。  

`import crafttweaker.data.IData;`

## Overview

|     二元操作符     | `+`  | `-`  | `*`  | `/`  | `%`  | `&`  | `|`  | `^`  | `in` | `==` | `<, >, <=, >=` |
| :----------------: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :------------: |
|      DataBool      |  ✘   |  ✘   |  ✘   |  ✘   |  ✘   |  ✔   |  ✔   |  ✔   |  ✔   |  ✔   |       ✘        |
|      DataByte      |  ✔   |  ✔   |  ✔   |  ✔   |  ✔   |  ✔   |  ✔   |  ✔   |  ✔   |  ✔   |       ✔        |
|     DataByte[]     |  ✘   |  ✘   |  ✘   |  ✘   |  ✘   |  ✘   |  ✘   |  ✘   |  ✔   |  ✔   |       ✘        |
|     DataDouble     |  ✔   |  ✔   |  ✔   |  ✔   |  ✔   |  ✘   |  ✘   |  ✘   |  ✔   |  ✔   |       ✔        |
|     DataFloat      |  ✔   |  ✔   |  ✔   |  ✔   |  ✔   |  ✘   |  ✘   |  ✘   |  ✔   |  ✔   |       ✔        |
|      DataInt       |  ✔   |  ✔   |  ✔   |  ✔   |  ✔   |  ✔   |  ✔   |  ✔   |  ✔   |  ✔   |       ✔        |
|     DataInt[]      |  ✔   |  ✘   |  ✘   |  ✘   |  ✘   |  ✘   |  ✘   |  ✘   |  ✔   |  ✔   |       ✘        |
|      DataList      |  ✔   |  ✘   |  ✘   |  ✘   |  ✘   |  ✘   |  ✘   |  ✘   |  ✔   |  ✔   |       ✘        |
|      DataLong      |  ✔   |  ✔   |  ✔   |  ✔   |  ✔   |  ✔   |  ✔   |  ✔   |  ✔   |  ✔   |       ✔        |
| [DataMap](DataMap) |  ✔   |  ✔   |  ✘   |  ✘   |  ✘   |  ✘   |  ✘   |  ✘   |  ✔   |  ✔   |       ✘        |
|     DataShort      |  ✔   |  ✔   |  ✔   |  ✔   |  ✔   |  ✔   |  ✔   |  ✔   |  ✔   |  ✔   |       ✔        |
|     DataString     |  ✔   |  ✘   |  ✘   |  ✘   |  ✘   |  ✘   |  ✘   |  ✘   |  ✔   |  ✔   |       ✔        |


|     一元操作符     | `-` 取反 | `!` 取否 |
| :----------------: | :------: | :------: |
|      DataBool      |    ✘     |    ✔     |
|      DataByte      |    ✔     |    ✔     |
|     DataByte[]     |    ✘     |    ✘     |
|     DataDouble     |    ✔     |    ✘     |
|     DataFloat      |    ✔     |    ✘     |
|      DataInt       |    ✔     |    ✔     |
|     DataInt[]      |    ✘     |    ✘     |
|      DataList      |    ✘     |    ✘     |
|      DataLong      |    ✔     |    ✔     |
| [DataMap](DataMap) |    ✘     |    ✘     |
|     DataShort      |    ✔     |    ✔     |
|     DataString     |    ✘     |    ✘     |


|     索引与成员     | `[i]` | `[i]=v` | `.member` | `.member=v` |  `.length`  | `.immutable` | `.update(v)` |
| :----------------: | :---: | :-----: | :-------: | :---------: | :---------: | :----------: | :----------: |
|      DataBool      |   ✘   |    ✘    |     ✘     |      ✘      | returns `0` |      ✔       |      ✔       |
|      DataByte      |   ✘   |    ✘    |     ✘     |      ✘      | returns `0` |      ✔       |      ✔       |
|     DataByte[]     |   ✔   |    ✔    |     ✘     |      ✘      |      ✔      |      ✔       |      ✔       |
|     DataDouble     |   ✘   |    ✘    |     ✘     |      ✘      | returns `0` |      ✔       |      ✔       |
|     DataFloat      |   ✘   |    ✘    |     ✘     |      ✘      | returns `0` |      ✔       |      ✔       |
|      DataInt       |   ✘   |    ✘    |     ✘     |      ✘      | returns `0` |      ✔       |      ✔       |
|     DataInt[]      |   ✔   |    ✔    |     ✘     |      ✘      |      ✔      |      ✔       |      ✔       |
|      DataList      |   ✔   |    ✔    |     ✘     |      ✘      |      ✔      |      ✔       |      ✔       |
|      DataLong      |   ✘   |    ✘    |     ✘     |      ✘      | returns `0` |      ✔       |      ✔       |
| [DataMap](DataMap) |   ✘   |    ✘    |     ✔     |      ✔      |      ✔      |      ✔       |      ✔       |
|     DataShort      |   ✘   |    ✘    |     ✘     |      ✘      | returns `0` |      ✔       |      ✔       |
|     DataString     |   ✔   |    ✘    |     ✘     |      ✘      |      ✔      |      ✔       |      ✔       |


你可以将 IData 转换成特殊的类型：`data.asType()` → `data.asInt();`  
你也可以使用数据接口来转换类型：`("1" as IData).asInt();`

| 类型转换 ↓ 转换成 → | bool | byte | byte[] | double | float | int  | int[]  |  list  | long | [Map](/AdvancedFunctions/Associative_Arrays) | short | string |
| :-----------------: | :--: | :--: | :----: | :----: | :---: | :--: | :----: | :----: | :--: | :------------------------------------------: | :---: | :----: |
|      DataBool       | `≡`  |  ✔   | `null` |   ✔    |   ✔   |  ✔   | `null` | `null` |  ✔   |                    `null`                    |   ✔   |   ✔    |
|      DataByte       |  ✘   | `≡`  | `null` |   ✔    |   ✔   |  ✔   | `null` | `null` |  ✔   |                    `null`                    |   ✔   |   ✔    |
|     DataByte[]      |  ✘   |  ✘   |  `≡`   |   ✘    |   ✘   |  ✘   |   ✔    |   ✔    |  ✘   |                    `null`                    |   ✘   |   ✔    |
|     DataDouble      |  ✘   |  ✔   | `null` |  `≡`   |   ✔   |  ✔   | `null` | `null` |  ✔   |                    `null`                    |   ✔   |   ✔    |
|      DataFloat      |  ✘   |  ✔   | `null` |   ✔    |  `≡`  |  ✔   | `null` | `null` |  ✔   |                    `null`                    |   ✔   |   ✔    |
|       DataInt       |  ✘   |  ✔   | `null` |   ✔    |   ✔   | `≡`  | `null` | `null` |  ✔   |                    `null`                    |   ✔   |   ✔    |
|      DataInt[]      |  ✘   |  ✘   |   ✔    |   ✘    |   ✘   |  ✘   |  `≡`   |   ✔    |  ✘   |                    `null`                    |   ✘   |   ✔    |
|      DataList       |  ✘   |  ✘   |   ✔    |   ✘    |   ✘   |  ✘   |   ✔    |  `≡`   |  ✘   |                    `null`                    |   ✘   |   ✔    |
|      DataLong       |  ✘   |  ✔   | `null` |   ✔    |   ✔   |  ✔   | `null` | `null` | `≡`  |                    `null`                    |   ✔   |   ✔    |
| [DataMap](DataMap)  |  ✘   |  ✘   | `null` |   ✘    |   ✘   |  ✘   | `null` | `null` |  ✘   |                     `≡`                      |   ✘   |   ✔    |
|      DataShort      |  ✘   |  ✔   | `null` |   ✔    |   ✔   |  ✔   | `null` | `null` |  ✔   |                    `null`                    |  `≡`  |   ✔    |
|     DataString      |  ✘   |  ✔   | `null` |   ✔    |   ✔   |  ✔   | `null` | `null` |  ✔   |                    `null`                    |   ✔   |  `≡`   |