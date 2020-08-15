# Blaupause

Das Blaupausenfertigungspaket kann verwendet werden, um Rezepte zu/von der Immersive Engineering Blaupause herzustellen oder zu entfernen.

## PSA

Der [Kategorie](/Mods/Immersive_Engineering/Variables/Categories/) String ist ganz besonders. Für jede eingegebene Zeichenkette, die noch keine etablierte Kategorie hat, wird eine neue Kategorie und damit eine neue Blaupause erstellt. Dies bedeutet, dass du eine Blaupausen-Kategorie mit dem Namen "Bananen Pfannkuchen" hinzufügen kannst, die "Nahrungsrezepte" bereitstellt. Nachdem der erste Eintrag gefunden wurde, wird er alle zusätzlichen Rezepte für diese Kategorie unter der generierten Kategorie generieren.

## Hinzufügen des Packages

Du kannst das Blaupausenpaket mit `mods.immersiveengineering.Blueprint` aufrufen.

## Rezept hinzufügen

| Benötigt | Type      | Datentyp                                                              |
| -------- | --------- | --------------------------------------------------------------------- |
| Benötigt | Kategorie | String [Kategorie](/Mods/Immersive_Engineering/Variables/Categories/) |
| Benötigt | Ausgang   | [IItemstack](/Vanilla/Items/IItemStack/)                              |
| Benötigt | Inputs    | [IIngredient](/Vanilla/Variable_Types/IIngredient/)                   |

### Beispiel

```zenscript
//Beispiel:
mods.immersiveengineering.Blueprint.addRecipe(String category, IItemStack output, IIngredient[] inputs);

//Mit einer bestehenden Kategorie String
mods.immersiveengineering.Blueprint. ddRecipe("components", <minecraft:diamond>, [<ore:logWood>, <minecraft:dirt>]);

//Benutze einen neuen Kategorie-String (dies erzeugt ein neues Blaupausenelement)
Mods. mmersiveengineering.Blueprint.addRecipe("Banana Pancakes", <minecraft:diamond>, [<ore:logWood>, <minecraft:dirt>]);
```

## Rezept entfernen

| Type   | Datentyp                                 |
| ------ | ---------------------------------------- |
| Output | [IItemstack](/Vanilla/Items/IItemStack/) |

### Beispiel:

```zenscript
//Beispiel:
mods.immersiveengineering.Blueprint.removeRecipe(IItemStack output);
mods.immersiveengineering.Blueprint.removeRecipe(<minecraft:diamond>);
```