# Mana Infusion

马那注入包用于添加或移除配方到博塔尼亚马那普尔或从那里移除配方。

## 导入包

您可以使用 `mods.botania.ManaInfus` 调用ManaInfus包

## 查找所有注册的配方

You can find all registered ManaInfusion recipes using [`/ct botania infusions`](/Mods/Modtweaker/Botania/Commands/).

## 添加配方

```zenscript
//mods.botania.ManaInfusion.addInfusion.addInfusion(ItemStack output, Ingredient input, int mana);
mods.botania.ManaInfusion.addInfusion(<minecraft:grass>, <ore:stone>, 1000);

///mods.botania.ManaInfusion.addAlchemy(ItemStack output, IIngredient input, int mana);
mods. otania.ManaInfusion.addAlchemy(<minecraft:gold_ore>, <ore:stone>, 5000);

//mods.botania.ManaInfusion.addConjuration(IItemStack output, Ingredient input, int mana);
mods.botania.ManaInfusion.addConjuration(<minecraft:stone>, <minecraft:stone>, 1000);
```

## 删除配方

```zenscript
//mods.botania.ManaInfusion.removeRecipe(IIngredient output);
mods.botania.ManaInfusion.removeRecipe(<minecraft:leather>);
mods.botania.ManaInfusion.removeRecipe(<minecraft:redstone> * 2);
```