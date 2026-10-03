# Advent of Ascension

**THIS HAS NOT BEEN TESTED. BEFORE USING READ [THIS](https://legacy.curseforge.com/minecraft/mc-mods/moretweaker?comment=33)**

### InfusionTable

```
import moretweaker.aoa.InfusionTable;

InfusionTable.addRecipe(IItemStack output, IItemStack mainInput, IIngredient[] inputs, optional int infusionLevel, optional int xpMin, optional int xpMax);

InfusionTable.addRecipe(String enchantmentId, int enchantmentLevel, IIngredient[] inputs, optional int infusionLevel, optional int xpMin, optional int xpMax);

InfusionTable.removeRecipe(IIngredient output);

InfusionTable.removeRecipe(String enchantmentId);

InfusionTable.removeAll();
```

### Divine Station (Upgrade Kits)

```
import moretweaker.aoa.DivineStation;

DivineStation.addRecipe(IItemStack input, IItemStack upgradeKit, IItemStack output);

DivineStation.removeRecipe(IIngredient output);

DivineStation.removeAll();
```