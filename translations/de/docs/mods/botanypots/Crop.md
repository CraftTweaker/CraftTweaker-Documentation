# Pflanzen

Klassenpfad: `mods.botanypots.Crop`

## Use

Importiere die Klasse mit `import mods.botanypots.Crop;` am Anfang deines Skripts.

## Erstelle eine Pflanze

`Crop.create(id, seed, display, tickRate, categories);`

- `id` &lt;String> Die ID der Pflanze. Dies ist die ID für den Namensraum und muss im Format `namensraum:pfad` sein.
- `seed` <[IIngredient](/vanilla/api/items/IIngredient)> Das Element, womit die Pflanze gesetzt werden kann
- `display` <[MCBlockState](/vanilla/api/blocks/MCBlockState)> Der Block, der beim Rendern angezeigt werden soll
- `tickRate` &lt;int> Ein Faktor, wie lange die Pflanze braucht zum Wachsen
- `categories` &lt;string[]> Eine Auswahl an Erdkategorien, auf der die Pflanze wachsen kann

Dies kann verwendet werden, um eine neue Pflanze zu erstellen. Beachte, dass der Pflanzendrop separat hinzugefügt werden muss!

```zenscript
Bsp.: Crop.create("examplepack:gold", <item:minecraft:gold_nugget>, <blockstate:minecraft:gold_block>, 3000, 2, ["stone"]);
```

## Eine Pflanze entfernen

`Crop.remove(id);`

- `id` &lt;String> Die ID der Pflanze, die du entfernen willst. Dies ist die ID für den Namensraum und muss im Format `namensraum:pfad` sein.

Entfernt einer Pflanze basierend auf ihrer ID.

```zenscript
Bsp.: Crop.remove("botanypots:crop/wheat");
```

## Setze Pflanzenelement

`Crop.setSeed(id, seed);`

- `id` &lt;String> Die ID der Pflanze. Dies ist die ID für den Namensraum und muss im Format `namensraum:pfad` sein.
- `seed` <[IIngredient](/vanilla/api/items/IIngredient)> Das Element, womit die Pflanze gesetzt werden kann

Legt das Element fest, das verwendet wird, um die Pflanze einzupflanzen.

```zenscript
Bsp.: Crop.setSeed("botanypots:crop/wheat", <item:minecraft:diamond>);
```

## Setze Renderblock

`Crop.setDisplay(id, state);`

- `id` &lt;String> Die ID der Pflanze. Dies ist die ID für den Namensraum und muss im Format `namensraum:pfad` sein.
- `display` <[MCBlockState](/vanilla/api/blocks/MCBlockState)> Der Block, der beim Rendern angezeigt werden soll

Legt den zu renderten Block fest.

```zenscript
Bsp.: Crop.setDisplay("botanypots:crop/wheat", <blockstate:minecraft:snow_block>);
```

## Setze Tickrate

`Crop.setTickRate(id, tickRate);`

- `id` &lt;String> Die ID der Pflanze. Dies ist die ID für den Namensraum und muss im Format `namensraum:pfad` sein.
- `tickRate` &lt;int> Die zu aktualisierenden Tickrate Ein Faktor, wie lange die Pflanze braucht zum Wachsen

Setzt die Tickrate der Pflanze fest

```zenscript
Bsp.: Crop.setTickRate("botanypots:crop/wheat", 5000);
```

## Pflanzenkategorien ändern

Ändert die mit der Pflanze verbundenen Kategorien. Kategorien werden verwendet, um die gültigen Erden der Pflanze anzupassen.

### Kategorie einer Pflanze hinzufügen

`Crop.addCategory(id, categoriesToAdd);`

- `id` &lt;String> Die ID der Pflanze. Dies ist die ID für den Namensraum und muss im Format `namensraum:pfad` sein.
- `categoriesToAdd` &lt;string[]> An array of categories to associate with the crop.

```zenscript
Crop.addCategory("botanypots:crop/wheat", ["stone", "snow"]);
```

### Remove a Category From a Crop

`Crop.removeCategory(id, categoriesToRemove);`

- `id` &lt;String> Die ID der Pflanze. Dies ist die ID für den Namensraum und muss im Format `namensraum:pfad` sein.
- `categoriesToRemove` &lt;string[]> An array of categories to dissociate with the crop.

```zenscript
Crop.removeCategory("botanypots:crop/wheat", ["dirt"]);
```

### Clear All Categories From a Crop

`Crop.clearCategories(id);`

- `id` &lt;String> Die ID der Pflanze. Dies ist die ID für den Namensraum und muss im Format `namensraum:pfad` sein.

```zenscript
Crop.clearCategories("botanypots:crop/wheat");
```

## Crop Drops

### Adding Drops

`Crop.addDrop(id, drop, chance, min, max);`

- `id` &lt;string> The id of the crop to add a drop to. Dies ist die ID für den Namensraum und muss im Format `namensraum:pfad` sein.
- `drop` <[IItemStack](/vanilla/api/items/IItemStack)> The item to drop.
- `chance` &lt;float> The chance it drops.
- `min` &lt;int> The min amount of that item to give.
- `max` &lt;int> The max amount of that item to give.

This adds a new potential drop to the crop.

```zenscript
Crop.addDrop("botanypots:crop/wheat", <item:minecraft:diamond>, 0.05, 1, 1);
```

### Removing Drops

`Crop.removeDrop(id, toRemove);`

- `id` &lt;string> The id of the crop to remove a drop from. Dies ist die ID für den Namensraum und muss im Format `namensraum:pfad` sein.
- `toRemove` <[IIngredient](/vanilla/api/items/IIngredient)> The ingredient to match against for removal

Removes any drops that have a matching item.

```zenscript
Crop.removeDrop("botanypots:crop/wheat", <item:minecraft:wheat_seeds>);
```

## Getting All Ids

`Crop.getAllIds();`

- Returns: &lt;string[]> An array of all known crop ids at the time this is ran.

This will give you an array of all the known crop ids at the time.

```zenscript
// Log all ids to the crafttweaker.log file
for cropId in Crop.getAllIds() {
    println(cropId);
}
```

## Removing All Crops

This will completely remove all the crops currently registered. This is useful for if you want to recreate all the data from scratch through scripts.

```zenscript
Crop.removeAll();
```
