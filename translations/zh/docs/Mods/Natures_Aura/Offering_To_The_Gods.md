# 赠送神器

## 所属包名
```zenscript
naturesaura。提供
```

## 使用方式
- **字符串名称**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient) 输入** 的报价
- **intininputAmount** 输入所需的项目数量。 请注意，这意味着输入变量的数量被忽略
- **[Ingredient](/Vanilla/Variable_Types/IIngredient) 启动项目** 启动优惠所需项目
- **[IItemStack](/Vanilla/Items/IItemStack) 输出** 礼物

## 添加配方

```zenscript
naturesaura。offering.addRecipe(名称, IIngredient input, int inputQuant, IIngredient startItem, IItemStack 输出)
```

## 移除

```zenscript
naturesaura。移除Recipe(StemStack 输出)
```