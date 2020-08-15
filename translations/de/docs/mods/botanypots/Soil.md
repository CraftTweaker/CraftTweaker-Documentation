# Soils

Klassenpfad: `mods.botanypots.Boden`

## Benutzen

Importieren Sie die Klasse mit `importieren Sie mods.botanypots.Soil;` am Anfang Ihres Skripts.

## Erstelle neue Böden

`Boden.create(id, ingredient, displayState, tickRate, Kategorien);`

- `id` &lt;string> Die id des neuen Bodens. Dies ist eine Namensraum-id und muss im gültigen `Namensraum:path` Format sein.
- `Zutat` <[Ingredient](/vanilla/api/items/IIngredient)> Die Zutat, die verwendet wird, um zu bestimmen, welche Elemente/Blöcke verwendet werden, um den Boden in einen Topf zu legen.
- `Anzeigezustand` <[MCBlockState](/vanilla/api/blocks/MCBlockState)> Der Blockzustand, der für den Boden im Topf angezeigt werden soll.
- `growthModifier` &lt;float> Ändert die Zeit, die ein Zuschnitt benötigt, um zu wachsen. 1f = sofortiges Wachstum. 0 = normales Wachstum. -1f = wächst nie. 0,15 = 15% schneller, -0,15 = 15% langsamer.
- `Kategorien` &lt;string[]> Ein Array von Kategorien, die mit dem neuen Boden verknüpft sind.

Erstellt einen neuen Bodeneingang, den Spieler im Botanischen Topf verwenden können.

```zenscript
Boden.create("examplepack:rock", <item:minecraft:stone>, <blockstate:minecraft:stone>, 0, ["rocky"]);
```

## Eine Erde entfernen

`Boden.remove(id);`

- `id` &lt;string> Die Id des zu entfernenden Bodens. Dies ist eine Namensraum-id und muss im gültigen `Namensraum:path` Format sein.

Entfernt einen Boden aus den Spieldaten.

```zenscript
Boden.remove("botanypots:Boden/podzol");
```

## Änderung des Bodenwachstums

`Boden.setGrowthModifier(id, tickRate);`

- `id` &lt;string> Die id des Bodens. Dies ist eine Namensraum-id und muss im gültigen `Namensraum:path` Format sein.
- `growthModifier` &lt;float> Ändert die Zeit, die ein Zuschnitt benötigt, um zu wachsen. 1f = sofortiges Wachstum. 0 = normales Wachstum. -1f = wächst nie. 0,15 = 15% schneller, -0,15 = 15% langsamer.

Ändert den Wachstumsmodifikator eines bestimmten Bodens.

```zenscript
Boden.setGrowthModifier("botanypots:Boden/Gras", 0.15);
```

## Bodenzufuhr ändern

`Boden.setIngredient(id, Zutat);`

- `id` &lt;string> Die id des Bodens. Dies ist eine Namensraum-id und muss im gültigen `Namensraum:path` Format sein.
- `Zutat` <[Ingredient](/vanilla/api/items/IIngredient)> Die Zutat, die verwendet wird, um zu bestimmen, welche Elemente/Blöcke verwendet werden, um den Boden in einen Topf zu legen.

Ändert die Gegenstände, die verwendet werden, um den Boden in den Botanischen Topf zu legen.

```zenscript
Soil.setIngredient("botanypots:Boden/Soul_sand", <item:minecraft:sand>);
```

## Bodenanzeige ändern

`Boden.setDisplayState(id, displayState);`

- `id` &lt;string> Die id des Bodens. Dies ist eine Namensraum-id und muss im gültigen `Namensraum:path` Format sein.
- `Anzeigezustand` <[MCBlockState](/vanilla/api/blocks/MCBlockState)> Der Blockzustand, der für den Boden im Topf angezeigt werden soll.

Ändert den angezeigten Block für den Boden.

```zenscript
Soil.setDisplayState("botanypots:Boden/Schmutz", <blockstate:minecraft:snow>);
```

## Bodenkategorien ändern

Ändert die mit dem Boden verbundenen Kategorien. Diese werden verwendet, um Pflanzen mit gültigen Böden abzugleichen.

### Kategorie zu Boden hinzufügen

`Soil.addCategory(id, categoriesToAdd);`

- `id` &lt;string> Die id des Bodens. Dies ist eine Namensraum-id und muss im gültigen `Namensraum:path` Format sein.
- `categoriesToAdd` &lt;string[]> Ein Array von Kategorien, die dem Boden zugeordnet werden sollen.

```zenscript
Boden.addCategory("botanypots:Boden/soul_sand", ["Nether"]);
```

### Entferne eine Kategorie vom Boden

`Soil.removeCategory(id, categoriesToRemove);`

- `id` &lt;string> Die id des Bodens. Dies ist eine Namensraum-id und muss im gültigen `Namensraum:path` Format sein.
- `categoriesToRemove` &lt;string[]> Ein Array von Kategorien, die mit dem Boden zu trennen sind.

```zenscript
Boden.removeCategory("botanypots:Boden/soul_sand", ["soul_sand"]);
```

### Alle Kategorien von Boden löschen

`Boden.clearCategories(id);`

- `id` &lt;string> Die id des Bodens. Dies ist eine Namensraum-id und muss im gültigen `Namensraum:path` Format sein.

```zenscript
Boden.clearCategories("botanypots:Boden/Ackerland");
```

## Alle Ids abrufen

`Boden.getAllIds();`

- Gibt folgende Werte zurück: &lt;string[]> Ein Array aller bekannten Boden-Ids zu der Zeit, als diese ran.

Dadurch erhalten Sie ein Array aller bekannten Bodentypen.

```zenscript
// Logge alle IDs in der crafttweaker.log Datei
für soilId in Soil.getAllIds() {
    println(soilId);
}
```

## Alle Böden entfernen

Dadurch werden alle derzeit registrierten Böden vollständig entfernt. Dies ist nützlich, wenn Sie alle Daten von Grund auf durch Skripte neu erstellen möchten.

```zenscript
Boden.removeAll();
```
