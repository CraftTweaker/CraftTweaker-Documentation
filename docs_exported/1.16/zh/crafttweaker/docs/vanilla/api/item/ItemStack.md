# 物品应用

This is the vanilla ItemStack. It is recommended that you use [IItemStack](/vanilla/api/items/IItemStack) whenever possible <p> They can be cast from each other, though.

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.ItemStack;
```


## Casters

| 结果类型                                              | 是否隐藏 |
| ------------------------------------------------- | ---- |
| [材料（IIngredient）](/vanilla/api/items/IIngredient) | true |
| [IItemStack](/vanilla/api/items/IItemStack)       | true |

## 方法

### asIIngredient

Return Type: [IIngredient](/vanilla/api/items/IIngredient)

```zenscript
ItemStack.asIIngredient() as IIngredient
myItemStack.asIIngredient();
```

### asIItemStack

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
ItemStack.asIItemStack() as IItemStack
myItemStack.asIItemStack();
```

### print

Debug method, expect this to be removed anytime!

Return Type: void

```zenscript
ItemStack.print() as void
myItemStack.print();
```


