### Classe

```zenscript
import mods.roots.Ritual;
```

#### Metodi

```zenscript
void modifyRitual(
  string name, // il nome del rituale di cui si desidera modificare gli ingredienti
  IIngredient[] input // una lista di cinque ingredienti (non più, non meno)
);
```

* * *

### Esempi

```zenscript
import mods.roots.Ritual;

// Cambia gli ingredienti necessari per eseguire il rituale del parabrezza
Rituale. odifyRitual("ritual_windwall", [<minecraft:feather>, <minecraft:glass>, <roots:cloud_berry>, <roots:cloud_berry>, <minecraft:web>]);
```