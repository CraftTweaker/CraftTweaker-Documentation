# 加权物品堆（WeightedItemStack）
加权物品堆很像普通的 [物品堆](IItemStack)，但是添加了百分几率。  
通常情况下，在掉落物或者作为副产物输出时，你会用到它。

## 导入相关包

为了避免发生一些不期而遇的问题（比如声明[数组](/AdvancedFunctions/Arrays_and_Loops)），最为安全、也是最为推荐的方式就是导入相关的包。    
`import crafttweaker.item.WeightedItemStack;`

## 调用加权物品堆
通过向 [物品堆](IItemStack) 使用加权操作，或者 weight 方法，你可以直接获取加权物品堆。

```js
val itemStack = <minecraft:dirt>;

//创建一个权重为 20% 的物品堆
val wItemStack = itemStack % 20;
val wItemStack2 = itemStack.weight(0.2);
```

## ZenGetters

| ZenGetter |                  用处                  |       返回类型       |
| :-------: | :------------------------------------: | :------------------: |
|   stack   |            返回关联的物品堆            | [物品堆](IItemStack) |
|  chance   | 以十进制返回物品堆的权重（比如：0.2）  |        float         |
|  percent  | 以百分比返回物品堆的权重（比如：20.0） |        float         |

