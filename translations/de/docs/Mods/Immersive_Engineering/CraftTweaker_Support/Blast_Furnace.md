# Sprengöfen

Mit dem Sprengofenpaket können Rezepte/Treibstoffe zum Immersive Ingenieurstofen hinzugefügt bzw. entfernt werden.

## Hinzufügen des Packages

Sie können das BlastFurnace Paket mit `mods.immersiveengineering.BlastFurnace` aufrufen.

## Rezept hinzufügen:

| Benötigt | Type   | Datentyp                                            |
| -------- | ------ | --------------------------------------------------- |
| Benötigt | Output | [IItemstack](/Vanilla/Items/IItemStack/)            |
| Benötigt | Input  | [IIngredient](/Vanilla/Variable_Types/IIngredient/) |
| Benötigt | Time   | Ganzzahl                                            |
| Optional | Slag   | [IItemstack](/Vanilla/Items/IItemStack/)            |

### Beispiel

```zenscript
//Beispiel:
mods.immersiveengineering.BlastFurnace.addRecipe(IItemStack Output, IIngredient Input, Int, @Optional IItemStack slag);
mods.immersiveengineering. lastFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, 2000);
mods.immersiveengineering.BlastFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, 2000, <minecraft:dirt>);
```

## Rezept entfernen

| Type   | Datentyp                                 |
| ------ | ---------------------------------------- |
| Output | [IItemstack](/Vanilla/Items/IItemStack/) |

### Beispiel:

```zenscript
//Beispiel:
mods.immersiveengineering.BlastFurnace.removeRecipe(IItemStack output);
mods.immersiveengineering.BlastFurnace.removeRecipe(<minecraft:diamond>;
```

## Brennstoff hinzufügen

| Benötigt | Type  | Datentyp                                            |
| -------- | ----- | --------------------------------------------------- |
| Benötigt | Input | [IIngredient](/Vanilla/Variable_Types/IIngredient/) |
| Benötigt | Time  | Ganzzahl                                            |

### Beispiel

```zenscript
//Beispiel:
mods.immersiveengineering.BlastFurnace.addFuel(IIngredient Input, int time);
mods.immersiveengineering.BlastFurnace.addFuel(<ore:plankWood>, 2000);
```

## Treibstoff entfernen

| Benötigt | Type    | Datentyp                                 |
| -------- | ------- | ---------------------------------------- |
| Benötigt | Ausgang | [IItemstack](/Vanilla/Items/IItemStack/) |

### Beispiel

```zenscript
//Beispiel:
mods.immersiveengineering.BlastFurnace.removeFuel(IItemStack output);
mods.immersiveengineering.BlastFurnace.removeFuel(<minecraft:planks>);
```