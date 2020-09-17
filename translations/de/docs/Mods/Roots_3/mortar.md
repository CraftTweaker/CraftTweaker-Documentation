### Klasse

```zenscript
importieren mods.roots.Mortar;
```

#### Methoden

```zenscript
addRecipe(
  IItemStack Ausgabe, ungültig // die Artikelausgabe dieses Rezepts
  IIngredient[] Eingänge // ein Array von Zutaten, die entweder 5 lang oder 1 lang sind
 sind;
```

* * *

```zenscript
nichtig changeSpell (
  Zeichenbuchstabenname, // der Name des Zauberspruchs wie in der Zauberregistrierung
  IIngredient[] Eingabe // ein Array von 5 Elementen, die die neuen Zutaten für das Rezept sind
);
```

* * *

```zenscript
void removeRecipe(
  IItemStack Ausgabe // der Artikelstapel, der vom Rezept
 erzeugt wurde);
```

* * *

### Beispiele

```zenscript
importieren mods.roots. ortar;

// Fügt ein Rezept hinzu, das Schießpulver aus Feuerstein macht
// Da das Rezept nur einen Eingang hat, es wird automatisch
// erzeugt 5 Rezepte und erhöht die Anzahl der Eingaben und
// die Menge der Ausgabe bzw. der Ausgabe.
Mortar.addRecipe(<minecraft:gunpowder>, [<minecraft:flint>]);

// Dieses Rezept verwendet fünf Zutaten um ein Bett zu erstellen.
Mörtel. ddRecipe(<minecraft:bed>, [<minecraft:wool>, <minecraft:wool>, <minecraft:wool> , <minecraft:planks>, <minecraft:planks>, <minecraft:planks>]);

// Dadurch werden alle Rezepte mit Wurzelmehl als Ausgabe entfernt
// einschließlich aller Rezepte mit mehreren Zutaten
Mörtel. emoveRecipe(<roots:flour>);

// Dies ändert das Rezept für den Hainfleckszauber auf
// braucht einfach fünf Zuckerstücke.
Mortar.changeSpell("spell_supplication", [<minecraft:sugar>, <minecraft:sugar>, <minecraft:sugar>, <minecraft:sugar>, <minecraft:sugar>]);
```