### Klasse

```zenscript
importieren mods.roots.Fey;
```

#### Methoden

```zenscript
addRecipe(
  String Name, // Name des Rezeptes; wenn ein vorhandenes Rezept ersetzt wird, verwenden Sie den gleichen Namen, um sicherzustellen, dass Patchouli Kontinuität
  IItemStack Ausgabe, // der von diesem Rezept erzeugte Artikelstack
  IIngredient[] Eingänge // ein Array von IIngredients, die das Rezept bilden; muss 5 Elemente enthalten
);
```

* * *

```zenscript
addRecipe(
  String Name, // Name des Rezeptes; wenn ein vorhandenes Rezept ersetzt wird, verwenden Sie den gleichen Namen, um sicherzustellen, dass Patchouli Kontinuität
  IItemStack Ausgabe, // der Itemstack, der durch dieses Rezept erzeugt wurde
  IIngredient[] Eingänge, // ein Array von IIngredients, die das Rezept bilden; muss 5 Gegenstände enthalten
  int xp // die Anzahl an xp (in Ebenen) um den Spieler für die Herstellung dieses Rezepts zu belohnen
);
```

* * *

```zenscript
Entferne ungültiges Rezept (
  IItemStack Output // das von dem Rezept erstellt wurde, das du entfernen möchtest
);
```

* * *

### Beispiele

```zenscript
import mods.roots.Fey;

// Fügt ein TNT-Rezept mit 4 Schießpulver und roter Wolle
Fey hinzu. ddRecipe("tnt", <minecraft:tnt>, [<minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:wool:14>]);

// Fügt das obige Rezept hinzu, gewährt aber auch dem Spieler 6 Level (von 0-6 relativ) jedes Mal, wenn es hergestellt wird
Fey. ddRecipe("tnt", <minecraft:tnt>, [<minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:wool:14>], 6);

// Entfernt das Rezept für die lebende Axt
Fey. emoveRecipe(<roots:living_axe>);

// Fügt ein anderes Rezept für die lebende Achse hinzu, mit dem gleichen Namen, um sicherzustellen, dass sie in Patchouli erscheint. Standardmäßig sind alle Handwerksrezeptnamen identisch mit dem Registry-Namen des Artikels.
Fey.addRecipe("living_axe", <roots:living_axe>, [<minecraft:sand>, <minecraft:dirt>, <minecraft:stone>, <minecraft:glass>, <minecraft:stone_axe>]);
```

### Notizen

Es ist wichtig für Patchouli Kontinuität, dass, wenn Sie ein Standardrezept entfernen (sagen Sie `living_axe`), dass Sie es durch ein anderes Rezept ersetzen und dem Rezept den Namen geben `"living_axe"` , wenn Sie möchten, dass Patchouli das neue Rezept korrekt anzeigt.