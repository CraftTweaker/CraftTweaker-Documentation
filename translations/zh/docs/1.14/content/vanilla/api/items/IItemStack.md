# IItemStack

This represents an item. It can be retrieved using an Item BEP. Is an [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.item.IItemStack
```

## 已实现的接口
IItemStack implements the following interfaces. 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

## 使用方式
### clearCustomName

Clears any custom name set for this ItemStack

```zenscript
<item:minecraft:dirt>.clearCustomName();
```

### getRemainingItem

When this ingredient stack is crafted, what will remain in the grid? Does not check if the stack matches though! Used e.g. in CrT's net.minecraft.item.crafting.ICraftingRecipe

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.getRemainingItem(stack as crafttweaker.api.item.IItemStack);
<item:minecraft:dirt>.getRemainingItem(<item:minecraft:iron_ingot>);
```

| 参数 | 类型                                                                | 描述                                        |
| -- | ----------------------------------------------------------------- | ----------------------------------------- |
| 堆叠 | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to provide for this ingredient. |


### matches

Does the given stack match the ingredient?

返回为布尔值

```zenscript
<item:minecraft:dirt>.matches(stack as crafttweaker.api.item.IItemStack);
<item:minecraft:dirt>.matches(<item:minecraft:iron_ingot>);
```

| 参数 | 类型                                                                | 描述                 |
| -- | ----------------------------------------------------------------- | ------------------ |
| 堆叠 | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to check |


### setDisplayName

Sets the display name of the ItemStack

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.setDisplayName(name as String);
<item:minecraft:dirt>.setDisplayName("totally not dirt");
```

| 参数       | 类型          | 描述                     |
| -------- | ----------- | ---------------------- |
| name（名称） | 字符串[string] | New name of the stack. |


### withDamage

Sets the damage of the ItemStack

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.withDamage(damage as int);
<item:minecraft:dirt>.withDamage(10);
```

| 参数     | 类型  | 描述                   |
| ------ | --- | -------------------- |
| damage | int | the new damage value |


### withTag

Sets the tag for the ItemStack.

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.withTag(tag as crafttweaker.api.data.IData);
<item:minecraft:dirt>.withTag({Display: {lore: ["Hello"]}});
```

| 参数      | 类型                                                     | 描述              |
| ------- | ------------------------------------------------------ | --------------- |
| tag #标签 | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The tag to set. |



## 参数

| 名称                   | 类型                                                                  | 可获得  | 可设置   |
| -------------------- | ------------------------------------------------------------------- | ---- | ----- |
| amount               | int                                                                 | true | false |
| burnTime             | int                                                                 | true | true  |
| commandString #命令字符串 | 字符串[string]                                                         | true | false |
| damageable           | 布尔值                                                                 | true | false |
| damaged              | 布尔值                                                                 | true | false |
| displayName          | 字符串[string]                                                         | true | false |
| empty                | 布尔值                                                                 | true | false |
| food                 | [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)            | true | true  |
| getOrCreate          | [crafttweaker.api.data.IData](/vanilla/api/data/IData)              | true | false |
| getRepairCost        | int                                                                 | true | false |
| hasDisplayName       | 布尔值                                                                 | true | false |
| hasEffect            | 布尔值                                                                 | true | false |
| hasTag               | 布尔值                                                                 | true | false |
| isCrossbow           | 布尔值                                                                 | true | false |
| isEnchantable        | 布尔值                                                                 | true | false |
| isEnchanted          | 布尔值                                                                 | true | false |
| items                | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | true | false |
| maxDamage            | int                                                                 | true | false |
| maxStackSize         | int                                                                 | true | false |
| registryName         | 字符串[string]                                                         | true | false |
| stackable            | 布尔值                                                                 | true | false |
| tag #标签              | [crafttweaker.api.data.IData](/vanilla/api/data/IData)              | true | false |
| translationKey       | 字符串[string]                                                         | true | false |
| useDuration          | int                                                                 | true | false |

## 运算符
### MUL

Sets the amount of the ItemStack

```zenscript
<item:minecraft:dirt> * amount as int
<item:minecraft:dirt> * 3
```

| 参数     | 类型  | 描述         |
| ------ | --- | ---------- |
| amount | int | new amount |

## Casters

| 结果类型                                                              | 是否隐藏  |
| ----------------------------------------------------------------- | ----- |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)            | true  |
| [craftminstrer.api.data.MapData](/vanilla/api/data/MapData)       | true  |
| [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | false |

