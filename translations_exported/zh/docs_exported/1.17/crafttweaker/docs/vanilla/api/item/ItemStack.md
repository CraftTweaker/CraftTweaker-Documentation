# 物品应用

This is the vanilla ItemStack. It is recommended that you use [IItemStack](/vanilla/api/item/IItemStack) whenever possible

 They can be cast from each other, though.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.ItemStack;
```


## Casters

| 结果类型                                                   | 是否隐藏 |
| ------------------------------------------------------ | ---- |
| [材料（IIngredient）](/vanilla/api/ingredient/IIngredient) | true |
| [IItemstack](/vanilla/api/item/IItemStack)             | true |

## 使用方式

:::group{name=asIIngredient}

Return Type: [IIngredient](/vanilla/api/ingredient/IIngredient)

```zenscript
// ItemStack.asIIngredient() as IIngredient

myItemStack.asIIngredient();
```

:::

:::group{name=asIItemStack}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// ItemStack.asIItemStack() as IItemStack

myItemStack.asIItemStack();
```

:::


