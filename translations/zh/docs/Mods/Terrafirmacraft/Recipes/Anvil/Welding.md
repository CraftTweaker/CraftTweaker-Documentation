# 铁水焊接公司

## 所属包名
```zenscript
导入 mods.terrafirmacraft。1. 井眼；
```

## 添加配方

```zenscript
Welding.addRecipe(注册名称，IIngredient input1，IIngredient input2，IItemStack output，int minTier)；
```

## 删除配方

```zenscript
Welding.removeRecipe(StemStack 输出);
Welding.removeRecipe(Streing registryname);
```
- 如同神秘的处方一样，这里也适用同样的输入规则。 输入必须是可锻造的(见 [ItemRegistry](/Mods/Terrafirmacraft/ItemRegistry) 因为注册一个物品的锻造能力)，无法堆栈。