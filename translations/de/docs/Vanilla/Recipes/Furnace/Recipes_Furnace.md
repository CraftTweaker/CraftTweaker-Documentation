# Ofen

Der CraftTweaker erlaubt dir, `Hinzufügen` und `Entfernen Sie` Ofenrezepte und ändern Sie den Kraftstoffwert der Gegenstände.

## Rezepte

### Entfernen

Es gibt 2 Möglichkeiten, Ofenrezepte zu entfernen:

```zenscript
ofen.remove(IIngrediente Ausgabe)
```

Und

```zenscript
oface.remove(IIngrediente Ausgabe, Ingredienten-Eingabe);
```

The first syntax is more flexible with the recipes that are removed and will remove all Furnace recipes that output the `output` given.  
The second syntax is more strict with the recipes that are removed and will remove all Furnace recipes that output the `output` given and has an input of `input`.

Es gibt auch eine dritte Möglichkeit, Ofenrezepte zu entfernen, obwohl diese alle im Spiel registrierten Ofenrezepte entfernen.

```zenscript
oface.removeAll();
```

### Addition

Es gibt 2 Befehle zum Hinzufügen von Ofenrezepten:

```zenscript
furnace.addRecipe(IItemStack-Ausgabe, Ingredienten-Eingabe);
```

Und

```zenscript
furnace.addRecipe(IItemStack-Ausgabe, Ingredienten-Eingabe, Doppel-xp);
```

Die erste Syntax wird ein Ofenrezept hinzufügen, das 0 xp auf smelt gibt.

Die zweite Syntax wird ein Ofenrezept hinzufügen, das `xp` xp auf smelt gibt.

## Brennstoff

### Setzen

Der Befehl zum Setzen der Kraftstoffwerte ist:

```zenscript
furnace.setFuel(IIngrediente Eingabe, Int Brennzeit);
```

Dadurch wird der Brennwert von `Eingabe` auf `Brennzeit` in Ticks gesetzt. Minecraft Kohle brennt für 1600 Zecken, 80 Sekunden, 8 Gegenstände. 1 Element in einem Minecraft-Ofen benötigt 200 Zecken um zu vervollständigen.

Setzen der `Brennzeit` auf `0` verhindert, dass `Eingang` ein Brennstoff ist.

### Erhalten

Der Befehl zum Abrufen des Kraftstoffwertes eines Elements ist:

```zenscript
furnace.getFuel(IItemStack item); 
```

Dadurch wird der Brennwert als Integer zurückgegeben

## Beispiele

### Entfernen

Dadurch werden alle Ofenrezepte entfernt, die `<minecraft:glass>` ausgeben.

```zenscript
oface.remove(<minecraft:glass>);
```

Dadurch werden alle Ofenrezepte `<minecraft:quartz>` entfernt, die `<minecraft:quartz_ore>` als Eingabe verwenden.

```zenscript
oface.remove(<minecraft:quartz>, <minecraft:quartz_ore>);
```

### Addition

Dadurch wird ein Ofenrezept hinzugefügt, das ein `<minecraft:golden_apple>` ausgibt, wenn ein `<minecraft:apple>` geschmolzen wird.

```zenscript
oface.addRecipe(<minecraft:golden_apple>, <minecraft:apple>);
```

Dadurch wird ein Ofenrezept hinzugefügt, das ein `<minecraft:speckled_melon>` ausgibt, wenn ein `<minecraft:melon>` geschmolzen ist und dem Spieler 1500 xp Punkte gibt.

```zenscript
oface.addRecipe(<minecraft:speckled_melon>, <minecraft:melon>, 1500);
```

### Brennstoff

Damit wird der Brennstoffwert von `<minecraft:rotten_flesh>` auf `100` gesetzt.

```zenscript
furnace.setFuel(<minecraft:rotten_flesh>, 100);
```

## Andere Funktionen

### Alle registrierten Ofenrezepte abrufen

```zenscript
ofen.;
```

Gibt eine [`Liste<IFurnaceRecipe>`](/Vanilla/Recipes/Furnace/IFurnaceRecipe/) zurück.