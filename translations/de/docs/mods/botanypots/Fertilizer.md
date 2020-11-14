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

## Removing Fertilizers

`Fertilizer.remove(id);`

- `id` &lt;string> The id of the fertilizer. Dies ist die ID für den Namensraum und muss im Format `namensraum:pfad` sein.

This can be used to remove a fertilizer.

```zenscript
Fertilizer.remove("botanypots:fertilizers/bone_meal");
```

## Changing Fertilizer Ticks

`Fertilizer.setTicks(String id, int minTick, int maxTick);`

- `id` &lt;string> The id of the fertilizer. Dies ist die ID für den Namensraum und muss im Format `namensraum:pfad` sein.
- `minTick` &lt;int> The new minimum amount of ticks added by the fertilizer.
- `maxTick` &lt;int> The new maximum amount of ticks added by the fertilizer.

This will change the growth tick range added by the fertilizer.

```zenscript
Fertilizer.setTicks("botanypots:fertilizers/bone_meal", 800, 900);
```

## Changing Fertilizer Ingredients

`Fertilizer.setIngredient(id, ingredient);`

- `id` &lt;string> The id of the fertilizer. Dies ist die ID für den Namensraum und muss im Format `namensraum:pfad` sein.
- `ingredient` <[IIngredient](/vanilla/api/items/IIngredient)> The new item to be used for the fertilizer.

Sets the ingredient item that is the fertilizer.

```zenscript
Fertilizer.setIngredient("botanypots:fertilizers/bone_meal", <item:minecraft:sugar>);
```

## Alle ID abfragen

`Fertilizer.getAllIds();`

- Returns: &lt;string[]> An array of all known fertilizer ids at the time this is ran.

This will give you an array of all the known fertilizer ids at the time.

```zenscript
// Log all ids to the crafttweaker.log file
for fertilizerId in Fertilizer.getAllIds() {
    println(fertilizerId);
}
```

## Removing All Fertilizers

This will completely remove all the fertilizers currently registered. Dies ist nützlich, wenn du alle Daten von Grund auf durch Skripte neu erstellen möchten.

```zenscript
Fertilizer.removeAll();
```