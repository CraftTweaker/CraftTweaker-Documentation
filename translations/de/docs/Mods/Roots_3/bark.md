### Klasse

```zenscript
importieren mods.roots.Bark;
```

#### Methoden

```zenscript
void addRecipe(
  String Name, // Name des Rezepts
  IItemStack Holzprotokoll, // das Gegenstandsstapel, das dem Holzstamm entspricht, der gebrochen wird
  IItemStack Rinde // der Gegenstandsstapel der Art der Rinde, die in diesem Log erzeugt wird (einschließlich Stapelanzahl)
);
```

* * *

```zenscript
Entfernungsrecipe(
  IItemStack Rinde // der Itemstack des zu entfernenden Typs der Rinde (ohne Stapelgröße)
);
```

* * *

### Beispiele

```zenscript
import mods.roots.Bark;

// Wird 2 Sand aus einem Melonenblock erzeugen, der von einem Messer gebrochen wird.
Bark.addRecipe("melon", <minecraft:melon_block>, <minecraft:sand>*2);

// Entfernt Wildholzrinde von der Standardliste
Bark.removeRecipe(<roots:bark_wildwood>);
```