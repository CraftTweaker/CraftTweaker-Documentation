# Kreuzritter

Das Crusher-Paket kann benutzt werden, um Rezepte zum Immersive Engineering Crusher hinzuzufügen/aus dem Immersive Engineering Crusher zu entfernen.

## Hinzufügen des Packages

Du kannst das Crusher-Paket mit `mods.immersiveengineering.Crusher` anrufen.

## Rezept hinzufügen

| Benötigt | Type              | Datentyp                                            |
| -------- | ----------------- | --------------------------------------------------- |
| Benötigt | Output            | [IItemStack](/Vanilla/Items/IItemStack/)            |
| Benötigt | Input             | [IIngredient](/Vanilla/Variable_Types/IIngredient/) |
| Benötigt | Energie           | int                                                 |
| Optional | Sekundäre Ausgabe | [IItemStack](/Vanilla/Items/IItemStack/)            |
| Optional | Sekundäre Chance  | double                                              |

### Beispiel

```zenscript
//Beispiel:
mods.immersiveengineering.Crusher.addRecipe(IItemStack output, IIngredient input, int energy, @Optional IItemStack secondaryOutput, @Optional double secondaryChance);

mods.immersiveengineering.Crusher. ddRecipe(<minecraft:diamond>, <ore:logWood>, 2048);
mods.immersiveengineering.Crusher.addRecipe(<minecraft:diamond>, <ore:logWood>, 2048, <minecraft:dirt>);
Mods. mmersiveengineering.Crusher.addRecipe(<minecraft:diamond>, <ore:logWood>, 2048, <minecraft:dirt>, 0.5);
```

## Rezept durch Ausgabe entfernen

| Type   | Datentyp                                 |
| ------ | ---------------------------------------- |
| Output | [IItemstack](/Vanilla/Items/IItemStack/) |

### Beispiel

```zenscript
//Beispiel:
mods.immersiveengineering.Crusher.removeRecipe(IItemstack output);

mods.immersiveengineering.Crusher.removeRecipe(<minecraft:diamond>);
```

## Rezept durch Eingabe entfernen

| Type  | Datentyp                                 |
| ----- | ---------------------------------------- |
| Input | [IItemstack](/Vanilla/Items/IItemStack/) |

### Beispiel

```zenscript
//Beispiel:
mods.immersiveengineering.Crusher.removeRecipesForInput(IItemstack input);

mods.immersiveengineering.Crusher.removeRecipesForInput(<minecraft:diamond>);
```