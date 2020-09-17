### Classe

```zenscript
import mods.roots.Transmutation;
```

#### Metodi

```zenscript
void removeRecipe(
  stringa name // il nome della ricetta che viene rimosso
);
```

* * *

```zenscript
void addBlockToBlockRecipe(
  nome stringa, // il nome della ricetta da aggiungere (deve essere unico)
  Stato IBlockState1, // lo stato iniziale del blocco come definito come stato blocco
  stato IBlockState 2 // lo stato che lo stato iniziale dovrebbe essere convertito in
);
```

* * *

```zenscript
void addBlockToItemRecipe(
  nome stringa, // il nome della ricetta da aggiungere (deve essere unico)
  stato IBlockForth, // lo stato iniziale ricercato durante la conversione (come stato di blocco)
  IItemStack stack // lo stack di elementi che sostituisce lo stato di blocco
);
```

* * *

### Esempi

```zenscript
import mods.roots.Transmutation;

// Rimuove la ricetta predefinita zucca-over-water-to-melon
Transmutation.removeRecipe("pumpkin_melon");

// Aggiunge una ricetta che converte la pietra fine in blocchi ossei
Trasmutazione. ddBlockToBlockRecipe("end_stone_to_bone", <blockstate:minecraft:end_stone>, <blockstate:minecraft:bone_block:axis=y>);

// Aggiunge una ricetta che converte tallgrass predefinito in palle di neve
Trasmutazione. ddBlockToItemRecipe("tallgrass_to_snowball", <blockstate:minecraft:tallgrass:type=tall_grass>, <minecraft:snowball>*3);
```

### Note

**Nota: le funzioni di stato complesso non sono attualmente acessibili attraverso CraftTweaker (cioè, controllare dintorni).**

È possibile trovare le informazioni sul blocco e sulle sue varianti e stati utilizzando la funzionalità di debug F3 e puntando su di esso. Sul lato destro dello schermo verrà visualizzato il nome del Registro di sistema del blocco, e quindi qualsiasi stato sotto quello.

Ad esempio, `bone_block` ha le seguenti caratteristiche:

    asse: y

Questo può essere convertito in uno stato di blocco sostituendo il `:` con `=` così: `axis=y`, significa che il blocco finale (per un blocco osseo rivolto verso l'alto) sarebbe `<blockstate:minecraft:bone_block:axis=y>`.