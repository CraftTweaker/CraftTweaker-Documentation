### Classe

```zenscript
import mods.roots.RunicShears;
```

#### Metodi

```zenscript
void addRecipe(
  string name, // il nome della ricetta creata
  IItemStack outputDrop, // l'output dell'oggetto ottenuto eseguendo la tosatura
  IItemStack replacementBlock, // il blocco (come un itemstack) che sostituisce il blocco che viene interagito con durante la tosatura
  IItemStack inputBlock, // il blocco che deve essere tagliato
  IItemStack jeiDisplayItem // l'elemento che deve essere visualizzato in JEI per questa ricetta
);
```

* * *

```zenscript
void addEntityRecipe(
  nome stringa, // il nome della ricetta per la tosatura
  IItemStack outputDrop, // l'elemento che viene eliminato al momento della tosatura dell'entità specificata
  EntitàDefinizione di entità, // l'entità che deve essere tosata per ottenere la goccia
  int cooldown // il numero di zecche (secondi moltiplicati per 20) ci vuole fino a quando l'entità può essere tosata di nuovo
);
```

* * *

```zenscript
void removeRecipe(
  IItemStack output // l'output itemstack che si desidera rimuovere
);
```

* * *

### Esempi

```zenscript
import mods.roots. unicShears;

// Crea una ricetta che ottiene verruca al nether dai mattoni nther rossi
// e poi converte i mattoni in normali mattoni nther
RunicShears. ddRecipe("nether_wart_block", <minecraft:nether_wart>*2, <minecraft:nether_brick>, <minecraft:red_nether_brick>, <minecraft:red_nether_brick>);

// Crea una ricetta che ottiene uova dai polli con un raffreddamento di 2 minuti
RunicShears. ddEntityRecipe("egg_from_chicken", <minecraft:egg>*2, <entity:minecraft:chicken>, 120*20);

// Rimuove tutte le ricette (sia entità & blocco) che danno pelle fey
RunicShears. emoveRecipe(<roots:fey_leather>);
```

### Note

Nota che la funzione `removeRecipe` cercherà di rimuovere qualsiasi ricetta (sia la tosatura runica dei blocchi che delle entità) che corrisponde all'output desiderato.