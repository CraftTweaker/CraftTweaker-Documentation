# IentityAgeable

一个可老龄化的实体是一个随着时间的推移而成长的实体，就像一个奶牛一样。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包(例如铸造一个 [数组](/AdvancedFunctions/Arrays_and_Loops/)), 这样比抱歉更安全并添加导入。  
`导入craftminstruer.entityIEntityAgeal。`

## 扩展 [IEntityCreathure](/Vanilla/Entities/IEntityCreature/)

IEntityAgeable extension [IEntityCreature](/Vanilla/Entities/IEntityCreature/). 这意味着 [Ientity](/Vanilla/Entities/IEntityCreature/) 的所有功能也可以提供给IentityAgeing。

## 方法

### ZenGetters/Setters

| ZenGetter | ZenSetter | 类型   |
| --------- | --------- | ---- |
| 成长年龄      | 成长年龄      | 整数   |
|           | 缩放Forage  | bool |

### ZenMethods

#### 添加年龄

方法需要一个整数和第二个方法是一个可选的布尔。  
两个方法都没有返回任何东西。  
通常情况下，第二种方法与第一种使用虚假和强制参数的方法相同，但在模组实现方面可能有所不同。

```zenscript
entAgObj.ageUp(int seconds, @Optional bolie 强制);
entAgObj.addGrowth(int seconds);
```