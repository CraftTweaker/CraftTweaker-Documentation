# 出生祭坛：

## 所属包名
```zenscript
naturesaura。动物生成器
```

## 使用方式
- **字符串名称**
- **字符串实体** 要生成的实体名称
- **int aura** 完成配方所需的 Aura 数量
- **整数时间** 时间过程需要进入刻度
- **[IIngredient[……]](/Vanilla/Variable_Types/IIngredient) 成分** 输入

## 添加配方

```zenscript
naturesaura。AnimalSpawner.addRecipe(名称, 字符串实体, int aura, int time, IIngredient[…]成分)
```

## 移除

```zenscript
naturesaura。动物Spawner.removeRecipe(String name)
```