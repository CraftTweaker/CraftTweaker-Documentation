# Quern

## Paket
`mods.atum.Quern;`

## Rezept hinzufügen

`mods.atum.Quern.addRecipe(Eingabe, Ausgabe, Drehung);`

- `input` [IItemStack](/vanilla/api/items/IItemStack)
- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `Drehungen` Jede Zahl über 0

Fügt ein Rezept mit der angegebenen Eingabe & Ausgabe hinzu, das die angegebenen Drehungen benötigt, um die Abfrage abzuschließen

```zenscript
mods.atum.Quern.addRecipe(<item:atum:fertile_soil>, <item:atum:fertile_soil_pile>, 3);
```

## Rezept entfernen

### Rezepte durch Ausgabe entfernen

`mods.atum.Quern.removeRecipeByOutput(output);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)

Entfernt alle Rezepte, bei denen das Ausgabeergebnis der angegebene [IItemStack](/vanilla/api/items/IItemStack) ist.

```zenscript
mods.atum.Quern.removeRecipeByOutput(<item:atum:emmer_flour>);
```

### Rezepte durch Ausgabe & Eingang entfernen

`mods.atum.Quern.removeRecipeByOutputInput(output, input);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `input` [IItemStack](/vanilla/api/items/IItemStack)

Entfernt das spezifische Rezept mit der angegebenen Ausgabe & Eingabe

```zenscript
mods.atum.Quern.removeRecipeByOutputInput(<item:atum:emmer_flour>, <item:atum:emmer>);
```

### Andere Löschmethoden

Siehe [Rezeptmanager](/recipes/recipe_managers) für andere Möglichkeiten, Quernenrezepte zu entfernen
