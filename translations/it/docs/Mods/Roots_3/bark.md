### Classe

```zenscript
import mods.roots.Bark;
```

#### Metodi

```zenscript
void addRecipe(
  nome stringa, // il nome della ricetta
  IItemStack woodLog, // l'equivalente itemstack del legname che viene rotto
  IItemStack corteccia // il itemstack del tipo di corteccia che questo registro produce (incluso il numero di pile)
);
```

* * *

```zenscript
void removeRecipe(
  IItemStack corteccia // il itemstack del tipo di corteccia da rimuovere (esclusa la dimensione dello stack)
);
```

* * *

### Esempi

```zenscript
import mods.roots.Bark;

// produrrà 2 sabbia da un blocco di melone rotto da un coltello.
Bark.addRecipe("melon", <minecraft:melon_block>, <minecraft:sand>*2);

// Rimuove corteccia di legno selvaggio dalla lista predefinita
Bark.removeRecipe(<roots:bark_wildwood>);
```