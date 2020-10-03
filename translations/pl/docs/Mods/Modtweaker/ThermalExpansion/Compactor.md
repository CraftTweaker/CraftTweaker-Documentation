# Compactor

## Package

`mods.thermalexpansion.Compactor`

The compactor supports 4 types of modifiers:

    Mint
    Press
    Storage
    Gear
    

## Mint

The Mint modifier changes the recipes registered in the `COIN` recipe map in Thermal Expansion.

Note that these recipes require the Numismatic Press Augment.

### Addition

```zenscript
mods.thermalexpansion.Compactor.addMintRecipe(IItemStack output, IItemStack input, int energy);

mods.thermalexpansion.Compactor.addMintRecipe(<minecraft:sand>, <minecraft:stick>, 1500);
```

### Removal

```zenscript
mods.thermalexpansion.Compactor.removeMintRecipe(IItemStack input);

mods.thermalexpansion.Compactor.removeMintRecipe(<thermalfoundation:material:167>);
```

## Press

The Press modifier changes the recipes not registered in the `PLATE`, `COIN`, or `GEAR` recipe maps in Thermal Expansion.

These recipes do not require a specific Augment.

### Addition

```zenscript
mods.thermalexpansion.Compactor.addPressRecipe(IItemStack output, IItemStack input, int energy);

mods.thermalexpansion.Compactor.addPressRecipe(<minecraft:sand>, <minecraft:apple>, 1500);
```

### Removal

```zenscript
mods.thermalexpansion.Compactor.removePressRecipe(IItemStack input);

mods.thermalexpansion.Compactor.removePressRecipe(<thermalfoundation:material:167>);
```

## Storage

The Storage modifier changes the recipes registered in the `PLATE` recipe map in Thermal Expansion.

These recipes do not require a specific Augment, and seemingly are used only for plates.

### Addition

```zenscript
mods.thermalexpansion.Compactor.addStorageRecipe(IItemStack output, IItemStack input, int energy);

mods.thermalexpansion.Compactor.addStorageRecipe(<minecraft:sand>, <minecraft:arrow>, 1500);
```

### Removal

```zenscript
mods.thermalexpansion.Compactor.removeStorageRecipe(IItemStack input);

mods.thermalexpansion.Compactor.removeStorageRecipe(<thermalfoundation:material:167>);
```

## Gear

The Gear modifier changes the recipes registered in the `GEAR` recipe map in Thermal Expansion.

Note that these recipes require the Gearworking Die Augment.

### Addition

```zenscript
mods.thermalexpansion.Compactor.addGearRecipe(IItemStack output, IItemStack input, int energy);

mods.thermalexpansion.Compactor.addGearRecipe(<minecraft:sand>, <minecraft:arrow>, 1500);
```

### Removal

```zenscript
mods.thermalexpansion.Compactor.removeGearRecipe(IItemStack input);

mods.thermalexpansion.Compactor.removeGearRecipe(<thermalfoundation:material:167>);
```