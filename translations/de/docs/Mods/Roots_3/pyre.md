### Klasse

```zenscript
importieren mods.roots.Pyre;
```

#### Methoden

```zenscript
void addRecipe(
  String Name, // der Name des hinzugefügten Rezeptes; wenn ein existierendes Spielrezept ersetzt wird, stelle sicher, dass der richtige Name verwendet wird
  IItemStack Ausgabe, // die Ausgabe dieses Rezepts
  Ingredient[] Eingaben // eine Liste von fünf Zutaten (nicht mehr, nicht weniger)
);
```

* * *

```zenscript
void addRecipe(
  String Name, // der Name des hinzugefügten Rezeptes; wenn ein existierendes Spielrezept ersetzt wird, stelle sicher, dass der richtige Name verwendet wird
  IItemStack Ausgabe, // Ausgabe dieses Rezepts
  Ingredient[] Eingänge, // eine Liste von fünf Zutaten
  int xp // die Menge an xp in Stufen, die nach dem Herstellen von
 gewährt wurde);
```

* * *

```zenscript
Entfernenrecipe(
  IItemStack-Ausgabe // Ausgabe des Rezepts zum Entfernen von
 leer);
```

* * *

### Beispiele

```zenscript
import mods.roots.Pyre;

// Entferne das Rezept für stalicripe; beachte, dass die Menge
// nicht berücksichtigt wird, wenn das Rezept übereinstimmt.
Pyre.removeRecipe(<roots:stalicripe>);

// Erneut fügt den Stalicrein mit einem Zusatz hinzu, das keine XP zulässt,
// aber mit deutlich höheren Ausgaben
Pyre. ddRecipe("stalicripe", <roots:stalicripe>*64, [<minecraft:diamond_block>, <minecraft:gold_block>, <minecraft:iron_block>, <minecraft:emerald_block>, <minecraft:deadbush>]);

// Wie oben, aber belohnen 30 Erfahrungsstufen (berechnet ab Level 0)
Pyre. ddRecipe("stalicripe", <roots:stalicripe>*64, [<minecraft:diamond_block>, <minecraft:gold_block>, <minecraft:iron_block>, <minecraft:emerald_block>, <minecraft:deadbush>], 30);
```

### Notizen

Es ist extrem wichtig, wenn man Rezepte ersetzt, um sicherzustellen, dass der Rezeptname derselbe ist, um sicherzustellen, dass Patchouli korrekt das richtige Rezept für die Herstellung von Basisgegenständen meldet.

Für alle anderen Gegenstände bitte einen Namen verwenden, der beschreibt, was dein Rezept tut.