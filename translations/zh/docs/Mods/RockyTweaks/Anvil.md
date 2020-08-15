# 铁道体

## 所属包名

`岩石`

## 添加配方

### 单一的

创建在JEI中单独显示的个别魔法配方。

```zenscript
// addRecipe(IItemstack input1, IItemstack input2, IItemstack output, int exp-cost);
mods.rockytweaks.Anvil.addRecipe(<minecraft:book>, <minecraft:quartz> * 8, <minecraft:enchanted_book>.with({StoredEnchants: [{lvl: 1 as short, id: 16 as short}]}), 5;
```

### 配方集

通过可能的选项创建多个JEI循环的魔法配方。

```zenscript
// addRecipe(IItemstack input1, IItemstack[…]input2, IItemstack[…]output, int[…]exp-cost);
mods.rockytweaks.Anvil。 ddRecipe(<minecraft:book>,
  [
    <minecraft:quartz> * 8,
    <minecraft:quartz> * 16,
    <minecraft:quartz> * 32

  [
    <minecraft:enchanted_book>. ithTag({StoredEnchants: [{lvl: 1 as short, id: 16 as short}]}),
    <minecraft:enchanted_book>.withTag({StoredEnchants: [{lvl: 2 as short, id: 16 as short}]}),
    <minecraft:enchanted_book>. ithTag({StoredEnchants: [{lvl: 3 as short, id: 16 as short}]})
  ],
  [
    5,
    15,
    32

;
```

## 删除配方

恶魔不会使用通常意义上的配方，但你仍然能够删除/黑名单特定的输入或输出。

```zenscript
// remove(IIngredient[…]输入)
// remove(IIngredient 输出) - 移除输出

// 黑名单正序排序符(输入)
Anvil。 表情([<minecraft:enchanted_book>.withTag({StoredEnchants: [{lvl: 1 as short, id: 70 as short}]})]);

// 钻石剑上黑名单锋利V(投入)
mods. ockytweaks.Anvil.remove([<minecraft:diamond_sword>, <minecraft:enchanted_book>.withTag({StoredEnchants: [{lvl: 5 as short, id: 16 as short}]})]);

// 黑名单附魔书 (输出)
mods.rockytweugs.Anvil.remove(<minecraft:enchanted_book>);
```
