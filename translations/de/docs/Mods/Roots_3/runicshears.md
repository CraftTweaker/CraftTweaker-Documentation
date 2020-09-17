### Klasse

```zenscript
importiere mods.roots.RunicShears;
```

#### Methoden

```zenscript
addRecipe(
  String-Name, ungültig // der Name des zu erstellenden Rezepts
  IItemStack outputDrop, // die Artikelausgabe, die durch das SHören erreicht wurde
  IItemStack-Ersetzungsblock, // der Block (als ein Itemstack), der den Block, mit dem beim Scheren interagiert wird, ersetzt.
  IItemStack inputBlock, // der Block, der geschoren werden soll
  IItemStack jeiDisplayItem // das Element, das in JEI für dieses Rezept angezeigt werden soll
);
```

* * *

```zenscript
AddEntityRecipe(
  Zeichenname // der Name des Rezepts für die Abhörung
  IItemStack outputDrop, // das Element, das beim Scheren der angegebenen Entität fallen gelassen wird
  IEntityDefinition Entität, // die Entität, die geschoren werden soll, um den Drop zu erhalten
  int Abklingzeit // die Anzahl der Ticks (Sekunden multipliziert mit 20), die es dauert, bis die Entität erneut geschoren werden kann
);
```

* * *

```zenscript
Entfernungsrecipe(
  IItemStack-Ausgabe // die Ausgabe, die Sie entfernen möchten
);
```

* * *

### Beispiele

```zenscript
importieren mods.roots. unicShears;

// Erstellt ein Rezept, das Netherwarte von roten Netherziegeln erhältt
// // und wandelt die Steine in normale Netherziegel
RunicShears um. ddRecipe("nether_wart_block", <minecraft:nether_wart>*2, <minecraft:nether_brick>, <minecraft:red_nether_brick>, <minecraft:red_nether_brick>);

// Erstellt ein Rezept, das Eier von Hühnern erhält, mit einer 2-minütigen Abklingzeit
RunicShears. ddEntityRecipe("egg_from_chicken", <minecraft:egg>*2, <entity:minecraft:chicken>, 120*20);

// Entfernt alle Rezepte (beide Entität & Block), die Leder geben
RunicShears. emoveRecipe(<roots:fey_leather>);
```

### Notizen

Beachten Sie, dass die `-Funktion Rezept` versucht, jedes Rezept zu entfernen (sowohl runisches Scheren von Blöcken als auch von Entitäten), das mit der gewünschten Ausgabe übereinstimmt.