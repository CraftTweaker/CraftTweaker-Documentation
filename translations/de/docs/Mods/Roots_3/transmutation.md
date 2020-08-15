### Klasse

```zenscript
importieren mods.roots.Transmutation;
```

#### Methoden

```zenscript
Entfernungsrecipe(
  String Name // Name des Rezepts, das entfernt wird
);
```

* * *

```zenscript
void addBlockToBlockRecipe(
  String Name, // der Name des hinzuzufügenden Rezepts (muss eindeutig sein)
  IBlockState state1, // der Anfangsstatus des Blocks, wie als Blockstatus definiert
  IBlockState state2 // der Zustand, dass der Ausgangszustand in
 umgewandelt werden soll);
```

* * *

```zenscript
addBlockToItemRecipe(
  String-Name, ungültig // der Name des hinzuzufügenden Rezepts (muss eindeutig sein)
  IBlockState Status // der Ausgangszustand, der beim Konvertieren (als Blockzustand) gesucht wird
  IItemStack // der Artikelstapel, der den Blockstatus
 ersetzt);
```

* * *

### Beispiele

```zenscript
import mods.roots.Transmutation;

// Entfernt das Standardrezept für Kürbis-über-Wasser-Melonen-Rezept
Transmutation.removeRecipe("pumpkin_melon");

// Fügt ein Rezept hinzu, das den Endstein in Knochenblöcke umwandelt
Transmutation. ddBlockToBlockRecipe("end_stone_to_bone", <blockstate:minecraft:end_stone>, <blockstate:minecraft:bone_block:axis=y>);

// Fügt ein Rezept hinzu, das Standard Hochgras in Schneebälle umwandelt
Transmutation. ddBlockToItemRecipe("tallgrass_to_snowball", <blockstate:minecraft:tallgrass:type=tall_grass>, <minecraft:snowball>*3);
```

### Notizen

**Hinweis: komplexe State functions are currently not acessible through CraftTweaker (i.e., checking surroundings).**

Es ist möglich, die Informationen über den Block und seine Varianten und Zustände zu finden, indem Sie die F3-Debug-Funktionalität nutzen und diese ausrichten. Auf der rechten Seite des Bildschirms wird der Registry-Name des Blocks angezeigt, und dann alle Zustände, die darunter stehen.

Zum Beispiel hat `bone_block` folgendes:

    axis: y

Dies kann in einen Blockstatus umgewandelt werden, indem man das `ersetzt:` durch `=` wie so: `axis=y`, bedeutet, dass der letzte Blockzustand (für einen Knochenblock nach oben) `<blockstate:minecraft:bone_block:axis=y>` ist.