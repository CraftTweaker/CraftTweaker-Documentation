# Elektrolizator

## Pakiet

```zenscript
import mods.ic2.ClassicElectrolyzer;
```

## Metody

### Dodaj obie przepisy

```zenscripts
mods.ic2.ClassicElectrolyzer.addBothRecipe(wyjście IItemStack, IItemStack wput, int energy);

mods.ic2.ClassicElectrolyzer.addBothRecipe(<minecraft:diamond>, <minecraft:dirt> * 64, 500);
```

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IItemStack](/Vanilla/Items/IItemStack/) wejście** Posiada być ItemStack, bez rekinów lub innych rzeczy.
- **int energy** Całkowita eu otrzymana z części wyładowczej i całkowitej energii użytej do naładowania części receptury.

### Dodaj przepis na ładowanie

```zenscripts
mods.ic2.ClassicElectrolyzer.addChargeRecipe(wyjście IItemStack, IItemStack input, int energy);

mods.ic2.ClassicElectrolyzer.addChargeRecipe(<minecraft:emerald>, <minecraft:stone> * 64, 500);
```

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IItemStack](/Vanilla/Items/IItemStack/) wejście** Posiada być ItemStack, bez rekinów lub innych rzeczy.
- **int energy** Suma eu użyta w recepturze.

### Dodaj przepis na rozładowanie

```zenscripts
mods.ic2.ClassicElectrolyzer.addDischargeRecipe(wyjście IItemStack, IItemStack input, int energy);

mods.ic2.ClassicElectrolyzer.addDischargeRecipe(<minecraft:cobblestone> * 64, <minecraft:bedrock>, 500);
```

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IItemStack](/Vanilla/Items/IItemStack/) wejście** Posiada być ItemStack, bez rekinów lub innych rzeczy.
- **int energy** Całkowita ilość otrzymana z receptury.

### Usuwanie

Po prostu wyłącz odpowiedni przepis w `config/ic2/ic2machineRecipes.json`.

