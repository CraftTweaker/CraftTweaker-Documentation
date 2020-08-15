# Dünger

Klassenpfad: `mods.botanypots.Fertilizer`

## Benutzen

Importieren Sie die Klasse mit `importieren Sie mods.botanypots.Fertilizer;` am Anfang Ihres Skripts.

## Erstelle Düngemittel

`Düngemittel.create(id, Zutat, MinTick, MaxTick);`

- `id` &lt;string> Die ID des neuen Düngemittels. Dies ist eine Namensraum-id und muss im gültigen `Namensraum:path` Format sein.
- `Zutat` <[Ingredient](/vanilla/api/items/IIngredient)> Das für den Dünger verwendete Element.
- `minTick` &lt;int> Der Mindestbetrag an Ticks, der vom Dünger hinzugefügt wurde.
- `maxTick` &lt;int> Die maximale Menge an Ticks, die vom Dünger hinzugefügt wurde.

Erzeugt einen neuen Dünger. Diese können genutzt werden, um Pflanzen schneller anzubauen.

```zenscript
Düngemittel.create("beispielpack:stick", <item:minecraft:stick>, 250, 550);
```

## Düngemittel entfernen

`Düngemittel.remove(id);`

- `id` &lt;string> Die ID des Düngemittels. Dies ist eine Namensraum-id und muss im gültigen `Namensraum:path` Format sein.

Dies kann verwendet werden, um einen Dünger zu entfernen.

```zenscript
Düngemittel.remove("botanypots:Düngemittel/Knochenmehl");
```

## Düngemittel-Ticks ändern

`Fertilizer.setTicks(String id, int minTick, int maxTick);`

- `id` &lt;string> Die ID des Düngemittels. Dies ist eine Namensraum-id und muss im gültigen `Namensraum:path` Format sein.
- `minTick` &lt;int> Der neue Mindestbetrag an Ticks, der vom Dünger hinzugefügt wurde.
- `maxTick` &lt;int> Die neue Höchstmenge an Ticks, die vom Dünger hinzugefügt wurde.

Dies ändert den Wachstumsstickbereich des Düngemittels.

```zenscript
Düngemittel.setTicks("botanypots:Düngemittel/Knochenmehl", 800, 900);
```

## Düngemittelwechsel

`Düngemittel.setIngredient(id, Zutat);`

- `id` &lt;string> Die ID des Düngemittels. Dies ist eine Namensraum-id und muss im gültigen `Namensraum:path` Format sein.
- `Zutat` <[Ingredient](/vanilla/api/items/IIngredient)> Das neue Element, das für den Dünger verwendet werden soll.

Legt den Zutaten-Gegenstand fest, der der Dünger ist.

```zenscript
Düngemittel.setIngredient("botanypots:Düngemittel/Knochenmehl", <item:minecraft:sugar>);
```

## Alle Ids abrufen

`Düngemittel.getAllIds();`

- Gibt folgende Werte zurück: &lt;string[]> Ein Array aller bekannten Düngemittel-Iden zur Zeit dieser Reihe.

Dies gibt dir ein Array aller bekannten Düngemittel-Iden zu dieser Zeit.

```zenscript
// Logge alle Ids in der crafttweaker.log Datei
für die fertilizerId in Fertilizer.getAllIds() {
    println(fertilizerId);
}
```

## Alle Dünger entfernen

Dadurch werden alle derzeit registrierten Düngemittel vollständig entfernt. Dies ist nützlich, wenn Sie alle Daten von Grund auf durch Skripte neu erstellen möchten.

```zenscript
Düngemittel.removeAll();
```