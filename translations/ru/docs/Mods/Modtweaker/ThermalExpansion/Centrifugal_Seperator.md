# Центрифужный сепаратор

## Пакет

`mods.thermalexpansion.Centrifuge`

## Сложение

```zenscript
//mods.thermalexpansion.Centri<unk> .addRecipe(WeightedItemStack[] outputs, IItemStack input, ILiquidStack fluid, int energy);
mods.thermalexpansion.Centri<unk> .addRecipe([(<minecraft:gold_ingot> * 5) % 10, <minecraft:iron_ingot> % 50], <minecraft:gold_ore>, <liquid:lava>;

```

## Добавление мобов

`жидкость` может быть нулевым, в этом случае будет использовано терморасширение по умолчанию, сумма, рассчитанная на основе поля `xp` с использованием константы по умолчанию `XP_TO_MB` из термоExpansion. При использовании пользовательской жидкости поле `xp` игнорируется.

**Нет пользовательской жидкости**:

```zenscript
//mods.thermalexpansion.Centri<unk> .addRecipeMob(IEntityDefinition entity, WeightedItemStack[] выводит следующие данные: @Nullable ILiquidStack fluid, int energy, int xp);
mods.thermalexpansion.Centri<unk> .addRecipeMob(<entity:minecraft:slime>, [<minecraft:clay_ball>%50, <minecraft:ghast_tear>%10], null, 2000, 5);
```

**Пользовательская жидкость**:

```zenscript
mods.thermalexpansion.Centri<unk> .addRecipeMob(<entity:minecraft:slime>, [<minecraft:gunpowder>%100], <liquid:lava>*20, 2000, 0);
```

## Удаление

```zenscript
//mods.thermalexpansion.Centri<unk> .removeRecipe(IItemStack);
mods.thermalexpansion.Centri<unk> .removeRecipe(<minecraft:gold_ore>);
```

## Удаление мобов

```zenscript
//mods.thermalexpansion.Centri<unk> .removeRecipeMob(IEntityDefinition entity);
mods.thermalexpansion.Centri<unk> .removeRecipeMob(<entity:minecraft:slime>);
```