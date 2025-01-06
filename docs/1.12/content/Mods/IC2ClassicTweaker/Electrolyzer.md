# Electrolyzer

## Package

```zenscript
import mods.ic2.ClassicElectrolyzer;
```

## Methods

### Add Both Recipe 

```zenscript
mods.ic2.ClassicElectrolyzer.addBothRecipe(IItemStack output, IItemStack input, int energy);
    
mods.ic2.ClassicElectrolyzer.addBothRecipe(<minecraft:diamond>, <minecraft:dirt> * 64, 500);
```

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IItemStack](/Vanilla/Items/IItemStack/) input** Has to be an ItemStack, no oredict or other stuff.
- **int energy** Total eu received from discharge part and total energy used for charge part of the recipe.

### Add Charge Recipe 

```zenscript
mods.ic2.ClassicElectrolyzer.addChargeRecipe(IItemStack output, IItemStack input, int energy);

mods.ic2.ClassicElectrolyzer.addChargeRecipe(<minecraft:emerald>, <minecraft:stone> * 64, 500);
```

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IItemStack](/Vanilla/Items/IItemStack/) input** Has to be an ItemStack, no oredict or other stuff.
- **int energy** Total eu used in the recipe.

### Add Discharge Recipe 

```zenscript
mods.ic2.ClassicElectrolyzer.addDischargeRecipe(IItemStack output, IItemStack input, int energy);

mods.ic2.ClassicElectrolyzer.addDischargeRecipe(<minecraft:cobblestone> * 64, <minecraft:bedrock>, 500);
```

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IItemStack](/Vanilla/Items/IItemStack/) input** Has to be an ItemStack, no oredict or other stuff.
- **int energy** Total eu received from the recipe.

### Removal

Simply disable the corresponding recipe in `config/ic2/ic2machineRecipes.json`.

