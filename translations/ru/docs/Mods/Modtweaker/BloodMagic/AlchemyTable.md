# Стол алхимии

## Пакет

`Алхимический Стол`

## Сложение

```zenscript
входы имеют максимальный размер 6
//mods.bloodmagic.AlchemyTable.addRecipe(IItemStack, IItemStack[] входов, Int-syphon, int ticks, int minTier);
модов. loodmagic.AlchemyTable.addRecipe(<minecraft:diamond>, [<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>], 20,10,0);
```

## Добавление зелья

```zenscript
входы имеют максимальный размер 5 для учета катализаторов (любой контейнер зелий отбрасывается)
вар бака = <potion:minecraft:strength>. akePotionEffect(6000, 1);
//mods.bloodmagic.AlchemyTable. ddPotionRecipe(IItemStack[] вводит, IPotionEffect эффекты, int syphon, int ticks, int minTier)
mods.bloodmagic.AlchemyTable.addPotionRecipe([<bloodmagic:potion_flask>, <minecraft:carrot>,<minecraft:potato>], горшок, 20, 10, 0);
```

## Удаление

```zenscript
входы имеют максимальный размер 6
//mods.bloodmagic.AlchemyTable.removeRecipe(IItemStack[] входов);
mods.bloodmagic.AlchemyTable.removeRecipe([<minecraft:carrot>,<minecraft:carrot>,<minecraft:carrot>,<minecraft:dye:15>]);
```

## Снятие зелья

Любое удаление считается потенциальным зельем, если оно не соответствует рецепту в реестре API.

```zenscript
//mods.bloodMagic.AlchemyTable.removeRecipe(IItemStack[] входов);
mods.bloodmagic.AlchemyTable.removeRecipe([<minecraft:ghast_tear>, <bloodmagic:potion_flask>]);
```