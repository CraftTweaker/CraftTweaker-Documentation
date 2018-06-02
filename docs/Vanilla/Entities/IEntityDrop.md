# 实体掉落物

实体掉落物指的就是一个[实体](IEntityDefinition)死亡后的掉落物。

## 导入相关包
为了避免发生一些不期而遇的问题（比如声明 [数组](/AdvancedFunctions/Arrays_and_Loops)），最为安全、也是最为推荐的方式就是导入相关的包。  
`import crafttweaker.entity.IEntityDrop;`

## ZenGetters

你可以从它们中检索这些信息。

| ZenGetter  |                  作用                  |                返回类型                 |       用法        |
| :--------: | :------------------------------------: | :-------------------------------------: | :---------------: |
|   chance   |             返回掉落几率。             |                  float                  |   `drop.chance`   |
|    max     |           返回最大掉落数量。           |                   int                   |    `drop.max`     |
|    min     |           返回最小掉落数量。           |                   int                   |    `drop.min`     |
| playerOnly | 返回这个掉落物是否是仅限玩家杀死掉落。 |                 boolean                 | `drop.playerOnly` |
|   range    |       返回最小～最大范围掉落数。       |              IntegerRange               |   `drop.range`    |
|   stack    |             返回掉落物品。             | [IItemStack](/Vanilla/Items/IItemStack) |   `drop.stack`    |

