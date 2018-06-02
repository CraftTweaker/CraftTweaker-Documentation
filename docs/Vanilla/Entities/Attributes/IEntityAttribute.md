# 实体属性

## 导入相关包
为了避免发生一些不期而遇的问题（比如声明[数组](/AdvancedFunctions/Arrays_and_Loops)），最为安全、也是最为推荐的方式就是导入相关的包。
`import crafttweaker.entity.Attribute;`

## ZenGetters

|  ZenGetter   |   GetterMethod    | 返回类型 |
| :----------: | :---------------: | :------: |
|     name     |     getName()     |  字符串  |
| defaultValue | getDefaultValue() | 双精度型 |
| shouldWatch  | getShouldWatch()  |  布尔值  |
|    parent    |    getParent()    | 实体属性 |

## 更多 ZenMethods

- double clampValue(double Value) → 有点作用...
