# Ofen

Der Ofen ist ein Multiblock, der für die schnelle Verarbeitung von Bausteinen verwendet wird, die durch das Schmelzen von etwas in einem Ofen erworben werden können.

## Paket
`mods.atum.Kiln;`

## Blacklist

Die Ofenrezepte basieren auf den Rezepten der Vanilleöfen und sortieren neben den Bausteinen alles aus. Die Blacklist ist eine Möglichkeit, um die Rezepte des Vanilleofens weiter zu minimieren.

`mods.atum.Kiln.blacklist(id);`

- `Id` Eine Namensraum-ID für den Eingabeblock/Artikel, der Blacklistiert werden soll.

Entfernt das Rezept(n) mit dem angegebenen Gegenstand/Block von den Rezepten, die der Ofen aus dem Vanilleöfen ziehen wird

```zenscript
mods.atum.Kiln.blacklist("minecraft:cobblestone");
```

## Rezept hinzufügen

`mods.atum.Kiln.addRecipe(Eingabe, Ausgabe, Erfahrung, @Optional cookTime);`

- `input` [IItemStack](/vanilla/api/items/IItemStack)
- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `Erfahrung` Schwebende Zahl
- `CookTime` Ganzzahl (Wenn leer gelassen wird, wird es standardmäßig 75)

Fügt ein Rezept mit der angegebenen Eingabe, Ausgabe, Erfahrung & Kochzeit hinzu

```zenscript
mods.atum.Kiln.addRecipe(<item:atum:dirty_bone_block>, <item:atum:alabaster>, 0.2);
```

## Rezept entfernen

Die Entfernungsmethoden funktionieren nur für Rezepte, die speziell für den Ofen von Atum hinzugefügt wurden (Oder andere Modi) Dies wird standardmäßig nur das Rezept für Marl to White Ceramic Tile Block sein. Wenn Sie etwas anderes entfernen möchten, suchen Sie wahrscheinlich die Blacklist (Dokumentation oben)

### Rezepte durch Ausgabe entfernen

`mods.atum.Kiln.removeRecipeByOutput(output);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)

Entfernt alle Rezepte, bei denen das Ausgabeergebnis der angegebene [IItemStack](/vanilla/api/items/IItemStack) ist.

```zenscript
mods.atum.Kiln.removeRecipeByOutput(<item:atum:marl>);
```

### Rezepte durch Ausgabe & Eingang entfernen

`mods.atum.Kiln.removeRecipeByOutputInput(output, input);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `input` [IItemStack](/vanilla/api/items/IItemStack)

Entfernt das spezifische Rezept mit der angegebenen Ausgabe & Eingabe

```zenscript
mods.atum.Kiln.removeRecipeByOutputInput(<item:atum:cermic_white>, <item:atum:marl>);
```

### Andere Löschmethoden

Siehe [Rezeptmanager](/recipes/recipe_managers) für andere Möglichkeiten, Spinnrad Rezepte zu entfernen
