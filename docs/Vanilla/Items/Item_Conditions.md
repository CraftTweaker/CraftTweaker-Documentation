# 物品条件（Item Conditions）

一些普通的物品也许满足不了需求：  

有时候我们需要指定特殊的合成，只有在完全满足对应条件下才会工作。  

有时候我们想要产出特殊的物品，比如拥有 NBT，耐久或者其他什么条件的物品。

## 导入相关包

为了避免发生一些不期而遇的问题（比如声明[数组](/AdvancedFunctions/Arrays_and_Loops)），最为安全、也是最为推荐的方式就是导入相关的包。 
`import crafttweaker.item.IItemCondition;`

## 条件输入

这些条件会对你合成指定物品有影响。  
你可以混合多种条件，诸如混合耐久和NBT数据，举个例子：
```js
<minecraft:iron_pickaxe>.onlyDamaged().withTag({display: {Lore: "我们是消耗了耐久的铁镐"}});
```
### 耐久（Damage）

#### 任意耐久（anyDamage）
输入物品的耐久值不影响合成
```
item.anyDamage()
```

#### 需要消耗耐久（onlyDamaged）
输入物品需要消耗了耐久的
```
item.onlyDamaged();
```

#### 最小耐久限定（Damaged at least）
输入物品的耐久最小需要满足 `value` 处所填数值。   
`Value` 处为整型。
```
item.onlyDamageAtLeast(value);
```

#### 最大耐久限定（Damage at most）
输入物品的耐久最大需要满足 `value`  处所填数值。  
`Value` 处为整型。
```
item.onlyDamageAtMost(value);
```

#### 耐久区间（Damage between）
输入物品的耐久需要在 `value1` 和 `value2`  之间。  
`Value1` 处为整型。  
`Value2` 处为整型。
```
item.onlyDamageBetween(value1, value2);
```

### 返回物品或者禁用物品重复使用
有时候你需要合成中的输入物品进行返还。  
使用 `transformDamage(int)` 你可以做到这样的合成表。


#### 耐久转换（transformDamage）
输入的物品合成后悔损失 `value` 点耐久，直到它们耐久耗尽无法合成。  
`Value` 处为整型。
```
item.transformDamage(value);
```

### NBT标签（NBT-Tags）
有时候你需要指定合成原料中物品需要满足特定的 NBT 标签。  
不过默认的合成可并不会把带有 NBT 标签的东西特殊对待。  
这样情况下，一个带有特殊附魔和描述的镐子仍然能够参与合成！

如果你使用 `withTag` jei 将会精确显示这个物品，如果你使用 `onlyWithTag`，jei 只会显示无特殊标签的物品！  所以你可以这么做：

`NBTTag` 就是你的 NBT 数据
```js
item.withTag(NBTData);
item.onlyWithTag(NBTTag);

<minecraft.iron_pickaxe>.onlyWithTag({display: {Name: "这是铁镐"}});
<minecraft.iron_pickaxe>.withTag({display: {Name: "这是铁镐"}});
```

## 输出定义（Output modifiers）

和定义输入一样，输出定义也很简单。

### 耐久（Damage）
你输出的物品会拥有 `value` 点耐久损失。  
`Value` 是整型。
```
item.withDamage(value);
```

### NBT标签（NBT-Tags）
你的输出物品会拥有 `NBTTag` 作为 NBT 标签。  
`NBTTag` 处即为你的 NBT 数据。
```
item.withTag(NBTTag);

<minecraft:iron_pickaxe>.withTag({display: {Name: "Pickle the Pickleberry"}})
```


## 注册自己的物品条件

你可以添加自己的物品条件，这里提供了特殊方法，接收 [物品](IItemStack) 本身作为单个参数。

```
conditionedItem = item.only(function(item) {return true;});
```

这个方法会返回一个布尔值，如果满足条件则会返回 true。
