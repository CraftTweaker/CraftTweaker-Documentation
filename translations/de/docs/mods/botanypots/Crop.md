# Getreide

Klassenpfad: `mods.botanypots.Crop`

## Benutzen

Importieren Sie die Klasse mit `importieren Sie mods.botanypots.Crop;` am Anfang Ihres Skripts.

## Eine Zubereitung erstellen

`Crop.create(id, seed, display, tickRate, categories);`

- `id` &lt;string> Die ID des Zuschnitts. Dies ist eine Namensraum-id und muss im gültigen `Namensraum:path` Format sein.
- `Seed` <[Ingredient](/vanilla/api/items/IIngredient)> Das Element, das verwendet wird, um die Ernte zu pflanzen.
- `Anzeige` <[MCBlockState](/vanilla/api/blocks/MCBlockState)> Der Block, der angezeigt werden soll, wenn das Zuschneiden dargestellt wird.
- `tickRate` &lt;int> Einer der Faktoren, wie lange ein Zuschnitt dauert.
- `Kategorien` &lt;string[]> Ein Array von Bodenkategorien, in denen diese Ernte angebaut werden kann.

Dies kann verwendet werden, um eine neue Ernte zu erstellen. Beachten Sie, dass Tropfen separat hinzugefügt werden müssen.

```zenscript
Crop.create("beispielpack:gold", <item:minecraft:gold_nugget>, <blockstate:minecraft:gold_block>, 3000, 2, ["Stein"]);
```

## Ernte entfernen

`Crop.remove(id);`

- `id` &lt;string> Die ID des zu löschenden Zuschnitts. Dies ist eine Namensraum-id und muss im gültigen `Namensraum:path` Format sein.

Entfernt eine Ernte basierend auf ihrer Id.

```zenscript
Crop.remove("botanypots:crop/wheat");
```

## Seed Element setzen

`Crop.setSeed(id, seed);`

- `id` &lt;string> Die ID des Zuschnitts. Dies ist eine Namensraum-id und muss im gültigen `Namensraum:path` Format sein.
- `Seed` <[Ingredient](/vanilla/api/items/IIngredient)> Das Element, das verwendet wird, um die Ernte zu pflanzen.

Legt das Item fest, das verwendet wird, um die Ernte zu pflanzen.

```zenscript
Crop.setSeed("botanypots:crop/wheat", <item:minecraft:diamond>);
```

## Anzeigeblock setzen

`Crop.setDisplay(id, Zustand);`

- `id` &lt;string> Die ID des Zuschnitts. Dies ist eine Namensraum-id und muss im gültigen `Namensraum:path` Format sein.
- `Anzeige` <[MCBlockState](/vanilla/api/blocks/MCBlockState)> Der Block, der angezeigt werden soll, wenn das Zuschneiden dargestellt wird.

Legt den für das Zuschneiden gerenderten Block fest.

```zenscript
Crop.setDisplay("botanypots:crop/wheat", <blockstate:minecraft:snow_block>);
```

## Tickrate festlegen

`Crop.setTickRate(id, tickRate);`

- `id` &lt;string> Die ID des Zuschnitts. Dies ist eine Namensraum-id und muss im gültigen `Namensraum:path` Format sein.
- `tickRate` &lt;int> Der aktualisierte Tick-Rat. Einer der Faktoren, wie lange eine Ernte dauert.

Legt den Zuschneidenstickfaktor fest.

```zenscript
Crop.setTickRate("botanypots:crop/wheat", 5000);
```

## Erntekategorien ändern

Ändert die mit der Ernte verbundenen Kategorien. Kategorien werden verwendet, um die gültigen Böden der Ernte anzupassen.

### Kategorie einem Zuschnitt hinzufügen

`Crop.addCategory(id, categoriesToAdd);`

- `id` &lt;string> Die ID des Zuschnitts. Dies ist eine Namensraum-id und muss im gültigen `Namensraum:path` Format sein.
- `categoriesToAdd` &lt;string[]> Ein Array von Kategorien, die dem Zuschnitt zugeordnet werden sollen.

```zenscript
Crop.addCategory("botanypots:crop/wheat", ["Stein", "Schnee" ]);
```

### Entferne eine Kategorie aus einer Zubereitung

`Crop.removeCategory(id, categoriesToRemove);`

- `id` &lt;string> Die ID des Zuschnitts. Dies ist eine Namensraum-id und muss im gültigen `Namensraum:path` Format sein.
- `categoriesToRemove` &lt;string[]> Ein Array von Kategorien, die mit dem Zuschnitt getrennt werden sollen.

```zenscript
Crop.removeCategory("botanypots:crop/wheat", ["dirt"]);
```

### Alle Kategorien von Zuschneiden löschen

`Crop.clearCategories(id);`

- `id` &lt;string> Die ID des Zuschnitts. Dies ist eine Namensraum-id und muss im gültigen `Namensraum:path` Format sein.

```zenscript
Crop.clearCategories("botanypots:crop/wheat");
```

## Erntetropfen

### Drops hinzufügen

`Crop.addDrop(id, drop, chance, min, max);`

- `id` &lt;string> Die ID des Zuschnitts, zu dem ein Drop hinzugefügt werden soll. Dies ist eine Namensraum-id und muss im gültigen `Namensraum:path` Format sein.
- `Ablegen` <[IItemStack](/vanilla/api/items/IItemStack)> Das zu fallende Element.
- `Chance` &lt;schweben> Die Chance, dass sie fällt.
- `min` &lt;int> Der minimale Betrag des zu gebenden Items.
- `max` &lt;int> Der maximale Betrag des zu gebenden Elements.

Dies fügt der Ernte einen neuen potenziellen Tropfen hinzu.

```zenscript
Crop.addDrop("botanypots:crop/wheat", <item:minecraft:diamond>, 0.05, 1, 1);
```

### Drops entfernen

`Crop.removeDrop(id, toRemove);`

- `id` &lt;string> Die ID des Zuschnitts, von dem ein Drop entfernt werden soll. Dies ist eine Namensraum-id und muss im gültigen `Namensraum:path` Format sein.
- `toEntferne` <[Ingredient](/vanilla/api/items/IIngredient)> Die zutreffende Zutat für die Entfernung

Entfernt alle Drops mit einem passenden Element.

```zenscript
Crop.removeDrop("botanypots:crop/wheat", <item:minecraft:wheat_seeds>);
```

## Alle Ids abrufen

`Crop.getAllIds();`

- Gibt folgende Werte zurück: &lt;string[]> Ein Array aller bekannten Zuschneide-Ids zur Zeit dieser Reihe.

Dies gibt Ihnen ein Array aller bekannten Crop Ids zu dieser Zeit.

```zenscript
// Logge alle IDs in der crafttweaker.log Datei
für cropId in Crop.getAllIds() {
    println(cropId);
}
```

## Alle Ernten entfernen

Dadurch werden alle derzeit registrierten Kulturen vollständig entfernt. Dies ist nützlich, wenn Sie alle Daten von Grund auf durch Skripte neu erstellen möchten.

```zenscript
Crop.removeAll();
```
