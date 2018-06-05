# 药水（IPotion）

药水对象指的真是游戏中的药水。

## 导入相关包

为了避免发生一些不期而遇的问题（比如声明[数组](/AdvancedFunctions/Arrays_and_Loops)），最为安全、也是最为推荐的方式就是导入相关的包。  
`import crafttweaker.potions.IPotion;`

## 获取药水对象
你可以通过 [药水尖括号引用处理器](/Vanilla/Brackets/Bracket_Potion) 来获取药水对象。

```Java
<potion:minecraft:strength>;
```

## Zengetters

你可以通过药水来获取相关信息。  
比如 `<potion:minecraft:strength>.name`

|   Zengetter   |                        用处                         |                   返回类型                    |
| :-----------: | :-------------------------------------------------: | :-------------------------------------------: |
|     name      |                  返回药水内部名称                   |                    string                     |
|   badEffect   |                 药水效果是否为负面                  |                     bool                      |
|  liquidColor  |                返回药水颜色（美式）                 |                      int                      |
| liquidColour  |                返回药水颜色（英式）                 |                      int                      |
| curativeItems | Returns a list of all curative Items for the potion | List<[IItemStack](/Vanilla/Items/IItemStack)> |
| hasStatusIcon |                 药水效果是否有图标                  |                     bool                      |
| isBeneficial  |      Returns whether the potion is beneficial       |                     bool                      |
|   isInstant   |                药水效果是否是即时的                 |                     bool                      |

## ZenMethods
### 自定义药水效果
[药水效果](IPotionEffect) 是拥有时长和等级的药水，你可以通过如下两种方法来获取药水：
两者皆返回 [药水效果](IPotionEffect) 对象。
```js
//duration：时长
//amplifier：等级
//ambientEffect：是否为环境效果（如果是，则不显示图标）
//particlessShown：是否显示粒子
pot.makePotionEffect(int duration, int amplifier);
pot.makePotionEffect(int duration, int amplifier, boolean ambientEffect, boolean particlesShown);
```