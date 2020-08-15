# Spinnrad

## Paket
`mods.atum.SpinningWheel;`

## Rezept hinzufügen

`mods.atum.SpinningWheel.addRecipe(Eingabe, Ausgabe, Drehung);`

- `input` [IItemStack](/vanilla/api/items/IItemStack)
- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `Drehungen` Jede Zahl über 0

Fügt ein Rezept mit der angegebenen Eingabe & Ausgabe hinzu, das die angegebenen Drehungen benötigt, um das Rezept abzuschließen

```zenscript
mods.atum.SpinningWheel.addRecipe(<item:atum:scroll>, <item:minecraft:string>, 3);
```

## Rezept entfernen

### Rezepte durch Ausgabe entfernen

`mods.atum.SpinningWheel.removeRecipeByOutput(Ausgabe);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)

Entfernt alle Rezepte, bei denen das Ausgabeergebnis der angegebene [IItemStack](/vanilla/api/items/IItemStack) ist.

```zenscript
mods.atum.SpinningWheel.removeRecipeByOutput(<item:atum:linen_thread>);
```

### Rezepte durch Ausgabe & Eingang entfernen

`mods.atum.SpinningWheel.removeRecipeByOutputInput(Ausgabe, Eingabe);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `input` [IItemStack](/vanilla/api/items/IItemStack)

Entfernt das spezifische Rezept mit der angegebenen Ausgabe & Eingabe

```zenscript
mods.atum.SpinningWheel.removeRecipeByOutputInput(<item:atum:linen_thread>, <item:atum:flax>);
```

### Andere Löschmethoden

Siehe [Rezeptmanager](/recipes/recipe_managers) für andere Möglichkeiten, Spinnrad Rezepte zu entfernen
