# 食物物品

这允许您将食物添加到游戏中！

## 创建食物项表示

在您可以添加项目之前， 您需要创建一个食物项的表示，以允许您设置您想要添加的项目的属性。  
这是 [Vanilla工厂](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/) 所处的位置：

```zenscript
mods.contenttweeper.VanillaFactory.createItemFood(String unlocalizedName, int healAmount);
```

## 导入校验包

如果您遇到任何问题，可能需要导入软件包，所以比抱歉更安全并添加导入。  
`导入 mods.contenttweakerItemFood;`

## 项目呈现扩展

ItemFoodRepresentation 类扩展 [ItemRepresentation](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/). 这意味着所有可用于 [项目](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) 的方法和ZenProperties 也可用于食物！

## ZenProperties

要获取/设置属性，您可以使用尊敬的 ZenGetters/Setters或ZenMethods：

```zenscript
//property name: healAmount
//ZenGetter
print(item.healAmount);
//ZenSetter
item.healAmount = 16;
//ZenMethods
item.getHealAmount();
item.setHealAmount(64);
```

| 财产              | 类型                                                                                              | 必填 | 默认值   | 描述/注释               |
| --------------- | ----------------------------------------------------------------------------------------------- | -- | ----- | ------------------- |
| 治疗量             | int                                                                                             | 否  |       | 当吃饭时恢复了多少食物点？       |
| 总是可食用           | 布尔值                                                                                             | 否  | false | 如果用户的食物栏满了，是否仍然吃食物？ |
| 狼肉              | 布尔值                                                                                             | 否  | false | 能否将食物用于驯服羊毛？        |
| 饱和度             | float                                                                                           | 否  | 0.6   | 食物饱和度               |
| onItemFoodEaten | [IItemFoodEaten](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemFoodEaten/) | 否  | 空的    | 食物被吃时               |

## 注册项目

您需要调用此方法来注册游戏中的项目！  
不会发生任何事情！  
在你调用此函数后，你不能取消注册该项或更改它的任何属性！

```zenscript
文 件：
```