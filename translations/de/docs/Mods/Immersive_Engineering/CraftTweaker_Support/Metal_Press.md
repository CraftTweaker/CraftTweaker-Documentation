# Metallpresse

Mit dem Metallpressenpaket können Rezepte zur Immersive Maschinenbau-Metallpresse hinzugefügt bzw. entfernt werden.

## Hinzufügen des Packages

Sie können das MetalPress Paket mit `mods.immersiveengineering.MetalPress` aufrufen.

## Rezept hinzufügen

| Benötigt | Type       | Datentyp                                            |
| -------- | ---------- | --------------------------------------------------- |
| Benötigt | Output     | [IItemstack](/Vanilla/Items/IItemStack/)            |
| Benötigt | Input      | [IIngredient](/Vanilla/Variable_Types/IIngredient/) |
| Benötigt | Schimmel   | [IItemstack](/Vanilla/Items/IItemStack/)            |
| Benötigt | Energie    | Integer                                             |
| Benötigt | Input Size | Integer                                             |

### Beispiel

```zenscript
//Beispiel:
mods.immersiveengineering.MetalPress.addRecipe(IItemStack Output, IIngredient Input, IItemStack mold, int energy, @Optional int inputSize);

mods. mmersiveengineering.MetalPress.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:emerald>, 2000);
mods.immersiveengineering.MetalPress.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:emerald>, 2000, 16);
```

## Rezept entfernen

| Type   | Datentyp                                 |
| ------ | ---------------------------------------- |
| Output | [IItemstack](/Vanilla/Items/IItemStack/) |

### Beispiel

```zenscript
//Beispiel:
mods.immersiveengineering.MetalPress.removeRecipe(IItemstack output);

mods.immersiveengineering.MetalPress.removeRecipe(<minecraft:diamond>);
```

## Von Mold entfernen

| Type    | Datentyp                                 |
| ------- | ---------------------------------------- |
| Ausgang | [IItemstack](/Vanilla/Items/IItemStack/) |

### Beispiel

```zenscript
//Beispiel:
mods.immersiveengineering.MetalPress.removeRecipeByMold(IItemstack output);

mods.immersiveengineering.MetalPress.removeRecipeByMold(<minecraft:diamond>);
```