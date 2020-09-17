# 森林仪式：

## 所属包名
```zenscript
naturesaura。TreeRitual
```

## 使用方式
- **字符串名称**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient) 锯齿类型** 需要放置和生长为树木的树苗的项目代表
- **[IItemStack](/Vanilla/Items/IItemStack) 输出** 仪式结果
- **入场时间** 进程花费在刻录中的时间
- **[IIngredient[](/Vanilla/Variable_Types/IIngredient) 项目** 仪式所需的项目

## 添加配方

```zenscript
naturesaura。TreeRitual.addRecipe(名称, IIngredient saplingType, IItemStack 输出, int time, IIngredient[…]项目)
```

## 移除

```zenscript
naturesaura。TreeRitual.removeRecipe(IItemStack output)
```