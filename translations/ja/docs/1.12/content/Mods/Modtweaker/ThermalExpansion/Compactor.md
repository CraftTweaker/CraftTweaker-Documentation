# Compactor

## Package
`mods.thermalexpansion.Compactor`

Compactorでは、4種類の修飾子をサポートしています。

```
Mint
Press
Storage
Gear
```

## Mint(造幣)
Mint修飾子は、Thermal Expansionのレシピマップにおける、`COIN`に登録されているレシピを変更します。

これらのレシピ使うには、Numismatic Press Augmentが必要なことに注意してください。

### 加算

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
Press修飾子は、Thermal Expansionのレシピマップにおける、`PLATE`, `COIN`, または`GEAR`に登録されていないレシピを変更させます。

これらのレシピは、特定のAugmentを必要としません。

### 加算

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
Storage修飾子は、Thermal Expansionのレシピマップにおける、`PLATE`に登録されているレシピを変更します。

これらのレシピは特定のAugmentを必要とせず、どうやらプレート専用として使われているようです。

### 加算

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
Gear修飾子は、Thermal Expansionのレシピマップにおける、`GEAR`に登録されているレシピを変更します。

これらのレシピ使うには、Gearworking Die Augmentが必要なことに注意してください。

### 加算
```zenscript
mods.thermalexpansion.Compactor.addGearRecipe(IItemStack output, IItemStack input, int energy);

mods.thermalexpansion.Compactor.addGearRecipe(<minecraft:sand>, <minecraft:arrow>, 1500);
```

### Removal
```zenscript
mods.thermalexpansion.Compactor.removeGearRecipe(IItemStack input);

mods.thermalexpansion.Compactor.removeGearRecipe(<thermalfoundation:material:167>);
```
