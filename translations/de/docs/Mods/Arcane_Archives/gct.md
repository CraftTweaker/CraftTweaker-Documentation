### Klasse

```zenscript
importieren mods.arcanearchives.GCT;
```

#### Methoden

```zenscript
addRecipe(
  String Name, // Rezeptname
  IItemStack Ausgabe, // die Ausgabe als Itemstack
  IIngredient[] Eingänge // die Eingaben als Array der Zutaten
);
```

* * *

```zenscript
void removeRecipe(
  IItemStack Ausgabe // der auszugebende Elementstapel zum Entfernen (Menge muss übereinstimmen)
);
```

* * *

```zenscript
replaceRecipe(
  String-Name, ungültig // der Rezeptname (muss bereits existieren)
  IItemStack Ausgabe, // die Ausgabe als Itemstack
  IIngredient[] Eingänge // die Eingaben als Array der Zutaten
);
```

* * *

### Beispiele

```zenscript
import mods.arcanearchives.GCT;

// Entfernt das Rezept für Lichtstaub
GCT.removeRecipe(<arcanearchives:radiant_dust>*2);

// Fügt ein neues Rezept für Lichtstaub
GCT hinzu. ddRecipe("radiant_staub", <arcanearchives:radiant_dust>*2, [<minecraft:flint>, <arcanearchives:raw_quartz>]);

// Ersetzt das geformte Quarzrezept ohne den GCT-Bildschirm zu verändern
GCT. eplaceRecipe("shaped_quartz", <arcanearchives:shaped_quartz>, [<arcanearchives:raw_quartz>*10]);
```