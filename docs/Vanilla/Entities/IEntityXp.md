# 经验球

指的就是掉落在世界上的经验球。

## 导入相关包
为了避免发生一些不期而遇的问题（比如声明 [数组](/AdvancedFunctions/Arrays_and_Loops)），最为安全、也是最为推荐的方式就是导入相关的包。  
`import crafttweaker.entity.IEntityXp;`

## 继承自[IEntity](IEntity)
经验球继承自[实体](IEntity)。这意味着所有[实体](IEntity)对象函数均可用在实体经验球对象上。 

## ZenGetters
| ZenGetter | 返回类型 |
| :-------: | :------: |
|    xp     |  float   |

