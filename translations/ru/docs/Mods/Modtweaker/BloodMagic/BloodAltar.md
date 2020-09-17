# Кровавый Алтарь

## Пакет

`mods.bloodmagic.BloodAltar`

## Сложение

This creates a blood altar recipe that uses the given `input` item and produces the given `output` item.  
To get the `minimumTier`, substract 1 from what JEI/the sigil tells you, so a T1 altar would require `0`.  
The `syphon` value is the amount of Life Essence to syphon from the Blood Altar over the course of the craft.  
The `consumeRate` is how quickly the Life Essence is syphoned.  
The `drainRate` is how quickly progress is lost if the Blood Altar runs out of Life Essence during the craft.

```zenscript
//mods.bloodmagic.BloodAltar.addRecipe(IItemStack, IItemStack, int minimumTier, int syphon, int consumeRate, int drainRate);
mods.bloodmagic.BloodAltar.addRecipe(<minecraft:glass>, <minecraft:stick>, 0, 20,30,40);
```

## Удаление

```zenscript
//mods.bloodmagic.BloodAltar.removeRecipe(введенный IItemStack);
mods.bloodmagic.BloodAltar.removeRecipe(<minecraft:stone>);
```