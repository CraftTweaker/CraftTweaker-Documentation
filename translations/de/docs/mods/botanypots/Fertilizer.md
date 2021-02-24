# Dünger

Klassenpfad: `mods.botanypots.Fertilizer`

## Use

Importiere die Klasse mit `import mods.botanypots.Fertilizer;` am Anfang deines Skripts.

## Erstelle Düngemittel

`Fertilizer.create(id, ingredient, minTick, maxTick);`

- `id` &lt;String> Die ID des neuen Düngers. Dies ist die ID für den Namensraum und muss im Format `namensraum:pfad` sein.
- `seed` <[IIngredient](/vanilla/api/items/IIngredient)> Das Item, womit die Dünger gesetzt werden kann
- `minTick` &lt;int> Der Mindestbetrag an Ticks, der vom Dünger hinzugefügt wurde.
- `maxTick` &lt;int> Die maximale Menge an Ticks, die vom Dünger hinzugefügt wurde.

Erzeugt einen neuen Dünger. Diese können genutzt werden, um Pflanzen schneller wachsen zu lassen.

```zenscript
Bsp.: Fertilizer.create("examplepack:stick", <item:minecraft:stick>, 250, 550);
```

## Dünger entfernen

`Fertilizer.remove(id);`

- `id` &lt;String> Die ID des Düngers. Dies ist die ID für den Namensraum und muss im Format `namensraum:pfad` sein.

Dies kann verwendet werden, um einen Dünger zu entfernen.

```zenscript
Bsp.: Fertilizer.remove("botanypots:fertilizers/bone_meal");
```

## Düngemittel-Ticks ändern

`Fertilizer.setTicks(String id, int minTick, int maxTick);`

- `id` &lt;String> Die ID des Düngers. Dies ist die ID für den Namensraum und muss im Format `namensraum:pfad` sein.
- `minTick` &lt;int> Der neue Mindestbetrag an Ticks, der vom Dünger hinzugefügt wurde.
- `maxTick` &lt;int> Der neue maximale Betrag an Ticks, der vom Dünger hinzugefügt wurde.

Dies ändert den Tickbereich für das Wachstum durch den Dünger.

```zenscript
Bsp.: Fertilizer.setTicks("botanypots:fertilizers/bone_meal", 800, 900);
```

## Düngemittel-Zutaten ändern

`Fertilizer.setIngredient(id, ingredient);`

- `id` &lt;String> Die ID des Düngers. Dies ist die ID für den Namensraum und muss im Format `namensraum:pfad` sein.
- `seed` <[IIngredient](/vanilla/api/items/IIngredient)> Das neue Item, womit die Dünger gesetzt werden kann

Legt das neue Item für den Dünger fest.

```zenscript
Bsp.: Fertilizer.setIngredient("botanypots:fertilizers/bone_meal", <item:minecraft:sugar>);
```

## Alle ID abfragen

`Fertilizer.getAllIds();`

- Gibt folgende Werte zurück: &lt;string[]> Eine Auswahl aller bekannten Dünger-IDs zur Zeit der Abfrage.

Dies gibt eine Auswahl aller bekannten Dünger-IDs zur Zeit der Abfrage.

```zenscript
// Logge alle IDs in der crafttweaker.log Datei
for fertilizerId in Fertilizer.getAllIds() {
    println(fertilizerId);
}
```

## Alle Dünger entfernen

Dadurch werden alle derzeit registrierten Dünger vollständig entfernt. Dies ist nützlich, wenn du alle Daten von Grund auf durch Skripte neu erstellen möchten.

```zenscript
Fertilizer.removeAll();
```