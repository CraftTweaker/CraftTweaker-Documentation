# 天然祭坛：

## 所属包名
```zenscript
naturesaura。圣节
```

## 使用方式
- **字符串名称**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient) 输入** 专辑输入 </strong> 专辑.
- **[IItemStack](/Vanilla/Items/IItemStack) 输出** 专辑输出。
- **[IIngredient](/Vanilla/Variable_Types/IIngredient) 催化剂** 放在四角块之一的催化剂块可以为空
- **int aura** 完成配方所需的 Aura 数量
- **整数时间** 时间过程需要进入刻度

## 添加配方

```zenscript
naturesaura。Altar.addRecipe(名称, IIngredient input, IItemStack output, IIngredient 催化剂, int time)
```

## 移除

```zenscript
naturesaura。Altar.removeRecipe(IItemStack output)
```