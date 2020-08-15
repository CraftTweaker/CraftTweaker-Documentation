# IPotion

IPotion 对象是游戏中的药水。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包(例如铸造一个 [数组](/AdvancedFunctions/Arrays_and_Loops/)), 这样比抱歉更安全并添加导入。  
`导入craftweeper.potions.IPo;`

## 正在获取IPotion 对象

你可以通过使用 [药水组合处理器](/Vanilla/Brackets/Bracket_Potion/) 来获得这个对象

```zenscript
<potion:minecraft:strength>;
```

## Zengetters

目前，您只能用药水获取一些关于药水的信息。  
`<potion:minecraft:strength>.name`

| Zengetter | 功能           | 返回值类型                                        |
| --------- | ------------ | -------------------------------------------- |
| 名称        | 返回药水的内部名称    | 字符串                                          |
| badEffect | 如果药水效果不好，返回  | 布尔值                                          |
| 液体颜色      | 返回药水的颜色      | 整数                                           |
| 液体颜色      | 返回药水的颜色      | 整数                                           |
| 治疗项目      | 返回药水所有治疗项目列表 | 列表<[IItemStack](/Vanilla/Items/IItemStack/)> |
| 哈斯状态图标    | 返回药水是否有状态图标  | 布尔值                                          |
| 受益的       | 返回药水是否是有益的   | 布尔值                                          |
| 即时的       | 返回是否即时药水     | 布尔值                                          |

## ZenMethods

### 使药水效果

[IPotionEffect](/Vanilla/Potions/IPotionEffect/) 是一种具有持续时间和放大器的药水。 您可以使用这两种方法从IPo中获取一个：  
作为人们可能猜测，两种方法都返回了 [IPotionEffect](/Vanilla/Potions/IPotionEffect/) 对象。

```zenscript
tot.makePotionEffect(int during inter amplifier);
pot.makePotionEffect(int during inter amplifier, boolan ambientEffect, boolian particlesShown);
```