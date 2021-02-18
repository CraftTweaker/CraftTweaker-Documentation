# Erden

Klassenpfad: `mods.botanypots.Soil`

## Use

Importiere die Klasse mit `import mods.botanypots.Soil;` am Anfang deines Skripts.

## Erstelle neue Erden

`Soil.create(id, ingredient, displayState, tickRate, categories);`

- `id` &lt;String> Die ID der neuen Erde. Dies ist die ID für den Namensraum und muss im Format `namensraum:pfad` sein.
- `ingredient` <[Ingredient](/vanilla/api/items/IIngredient)> Die Zutat, die verwendet wird, um zu bestimmen, welche Elemente/Blöcke verwendet werden, um den Boden in einen Topf zu legen.
- `displayState` <[MCBlockState](/vanilla/api/blocks/MCBlockState)> Der Blockstatus, der im Topf angezeigt werden soll
- `tickRate` &lt;int> Die Tickrate der Erde
- `categories` &lt;string[]> Eine Auswahl an Kategorien, die der Erde hinzugefügt werden kann

Erstellt eine neue Erde, die von Spielern im Botany Pot verwendet werden können

```zenscript
Bsp.: Soil.create("examplepack:rock", <item:minecraft:stone>, <blockstate:minecraft:stone>, 100, ["rocky"]);
```

## Eine Erde entfernen

`Soil.remove(id);`

- `id` &lt;String> Die ID der Erde, die entfernt werden soll. Dies ist die ID für den Namensraum und muss im Format `namensraum:pfad` sein.

Entfernt eine Erde aus den Spieldaten.

```zenscript
Bsp.: Soil.remove("botanypots:soil/podzol");
```

## Änderung der Erden-Tickrate

`Soil.setTicks(id, tickRate);`

- `id` &lt;String> Die ID der Erde. Dies ist die ID für den Namensraum und muss im Format `namensraum:pfad` sein.
- `tickRate` &lt;int> Die neue Tickrate der Erde

Ändert die Tickrate einer gegebenen Erde.

```zenscript
Bsp.: Soil.setTicks("botanypots:soil/grass", 1300);
```

## Erditem ändern

`Soil.setIngredient(id, ingredient);`

- `id` &lt;String> Die ID der Erde. Dies ist die ID für den Namensraum und muss im Format `namensraum:pfad` sein.
- `ingredient` <[Ingredient](/vanilla/api/items/IIngredient)> Die Zutat, die verwendet wird, um zu bestimmen, welche Elemente/Blöcke verwendet werden, um den Boden in einen Topf zu legen.

Ändert den Gegenstand, der verwendet wird, um die Erde in den Botany Pot zu legen.

```zenscript
Bsp.: Soil.setIngredient("botanypots:soil/soul_sand", <item:minecraft:sand>);
```

## Erdanzeige ändern

`Soil.setDisplayState(id, displayState);`

- `id` &lt;String> Die ID der Erde. Dies ist die ID für den Namensraum und muss im Format `namensraum:pfad` sein.
- `displayState` <[MCBlockState](/vanilla/api/blocks/MCBlockState)> Der Blockstatus, der im Topf angezeigt werden soll

Ändert den anzuzeigenden Block für die Erde.

```zenscript
Bsp.: Soil.setDisplayState("botanypots:soil/dirt", <blockstate:minecraft:snow>);
```

## Erdenkategorien ändern

Ändert die mit der Erde verbundenen Kategorien. Diese werden verwendet, um Pflanzen mit gültigen Erden abzugleichen.

### Kategorie einer Erde hinzufügen

`Soil.addCategory(id, categoriesToAdd);`

- `id` &lt;String> Die ID der Erde. Dies ist die ID für den Namensraum und muss im Format `namensraum:pfad` sein.
- `categoriesToAdd` &lt;string[]> Eine Auswahl an Kategorien, die der Erde zugeordnet werden sollen

```zenscript
Bsp.: Soil.addCategory("botanypots:soil/soul_sand", ["nether"]);
```

### Entferne eine Kategorie von einer Erde

`Soil.removeCategory(id, categoriesToRemove);`

- `id` &lt;String> Die ID der Erde. Dies ist die ID für den Namensraum und muss im Format `namensraum:pfad` sein.
- `categoriesToRemove` &lt;string[]> Eine Auswahl an Kategorien, die von der Erde entfernt werden sollen

```zenscript
Bsp.: Soil.removeCategory("botanypots:soil/soul_sand", ["soul_sand"]);
```

### Alle Kategorien einer Erde entfernen

`Soil.clearCategories(id);`

- `id` &lt;String> Die ID der Erde. Dies ist die ID für den Namensraum und muss im Format `namensraum:pfad` sein.

```zenscript
Bsp.: Soil.clearCategories("botanypots:soil/farmland");
```

## Alle ID abfragen

`Soil.getAllIds();`

- Gibt folgende Werte zurück: &lt;string[]> Eine Auswahl aller bekannten Erd-IDs zur Zeit der Abfrage.

Dies gibt eine Auswahl aller bekannten Erd-IDs zur Zeit der Abfrage.

```zenscript
// Logge alle IDs in der crafttweaker.log Datei
for soilId in Soil.getAllIds() {
    println(soilId);
}
```

## Alle Erden entfernen

Dadurch werden alle derzeit registrierten Erden vollständig entfernt. Dies ist nützlich, wenn du alle Daten von Grund auf durch Skripte neu erstellen möchten.

```zenscript
Soil.removeAll();
```
