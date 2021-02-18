# Pflanzen

Klassenpfad: `mods.botanypots.Crop`

## Use

Importiere die Klasse mit `import mods.botanypots.Crop;` am Anfang deines Skripts.

## Erstelle eine Pflanze

`Crop.create(id, seed, display, tickRate, multiplier, categories);`

- `id` &lt;String> Die ID der Pflanze. Dies ist die ID für den Namensraum und muss im Format `namensraum:pfad` sein.
- `seed` <[IIngredient](/vanilla/api/items/IIngredient)> Das Element, womit die Pflanze gesetzt werden kann
- `display` <[MCBlockState](/vanilla/api/blocks/MCBlockState)> Der Block, der beim Rendern angezeigt werden soll
- `tickRate` &lt;int> Ein Faktor, wie lange die Pflanze braucht zum Wachsen
- `multiplier` &lt;float> Ein weiterer Faktor, wie lange die Pflanze braucht zum Wachsen
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

## Setze Wachstumsmultiplikator

`Crop.setGrowthModifier(id, multiplier);`

- `id` &lt;String> Die ID der Pflanze. Dies ist die ID für den Namensraum und muss im Format `namensraum:pfad` sein.
- `Multiplikator` &lt;float> Der zu aktualisiernde Multiplikator Ein weiterer Faktor, wie lange die Pflanze braucht zum Wachsen

Legt den Wachstumsmultiplikator/Modifikator für die Pflanze fest.

```zenscript
Bsp.: Crop.setGrowthMofieir("botanypots:crop/wheat", 1.8);
```

## Pflanzenkategorien ändern

Ändert die mit der Pflanze verbundenen Kategorien. Kategorien werden verwendet, um die gültigen Erden der Pflanze anzupassen.

### Kategorie einer Pflanze hinzufügen

`Crop.addCategory(id, categoriesToAdd);`

- `id` &lt;String> Die ID der Pflanze. Dies ist die ID für den Namensraum und muss im Format `namensraum:pfad` sein.
- `categoriesToAdd` &lt;string[]> Eine Auswahl an Kategorien, die der Pflanze zugeordnet werden sollen

```zenscript
Bsp.: Crop.addCategory("botanypots:crop/wheat", ["stone", "snow"]);
```

### Entferne eine Kategorie von einer Pflanze

`Crop.removeCategory(id, categoriesToRemove);`

- `id` &lt;String> Die ID der Pflanze. Dies ist die ID für den Namensraum und muss im Format `namensraum:pfad` sein.
- `categoriesToRemove` &lt;string[]> Eine Auswahl an Kategorien, die von der Pflanze entfernt werden sollen

```zenscript
Bsp.: Crop.removeCategory("botanypots:crop/wheat", ["dirt"]);
```

### Alle Kategorien einer Pflanze entfernen

`Crop.clearCategories(id);`

- `id` &lt;String> Die ID der Pflanze. Dies ist die ID für den Namensraum und muss im Format `namensraum:pfad` sein.

```zenscript
Bsp.: Crop.clearCategories("botanypots:crop/wheat");
```

## Pflanzendrops

### Adding Drops

`Crop.addDrop(id, drop, chance, min, max);`

- `id` &lt;String> Die ID der Pflanze, zu dem ein Drop hinzugefügt werden soll Dies ist die ID für den Namensraum und muss im Format `namensraum:pfad` sein.
- `drop` <[IItemStack](/vanilla/api/items/IItemStack)> Das hinzuzufügende Item
- `chance` &lt;float> Die Chance, dass das Item fällt.
- `min` &lt;int> Der minimale Betrag des zu gebenden Items.
- `max` &lt;int> Der maximale Betrag des zu gebenden Elements.

Dies fügt der Pflanze einen neuen Drop hinzu.

```zenscript
Bsp.: Crop.addDrop("botanypots:crop/wheat", <item:minecraft:diamond>, 0.05, 1, 1);
```

### Removing Drops

`Crop.removeDrop(id, toRemove);`

- `id` &lt;String> Die ID der Pflanze, von dem ein Drop entfernt werden soll Dies ist die ID für den Namensraum und muss im Format `namensraum:pfad` sein.
- `toRemove` <[IIngredient](/vanilla/api/items/IIngredient)> Der Drop, der entfernt werden soll

Entfernt den Drop vom zutreffenden Item

```zenscript
Bsp.: Crop.removeDrop("botanypots:crop/wheat", <item:minecraft:wheat_seeds>);
```

## Alle ID abfragen

`Crop.getAllIds();`

- Gibt folgende Werte zurück: &lt;string[]> Eine Auswahl aller bekannten Pflanzen-IDs zur Zeit der Abfrage.

Dies gibt eine Auswahl aller bekannten Pflanzen-IDs zur Zeit der Abfrage.

```zenscript
// Logge alle IDs in der crafttweaker.log Datei
for cropId in Crop.getAllIds() {
    println(cropId);
}
```

## Entferne alle Pflanzen

Dadurch werden alle derzeit registrierten Pflanzen vollständig entfernt. Dies ist nützlich, wenn du alle Daten von Grund auf durch Skripte neu erstellen möchten.

```zenscript
Crop.removeAll();
```
