
### Classe

```zenscript
import mods.roots.SummonCreatures;
```

#### Metodi

```zenscript
void addEntity(
  IEntityDefinition entity, // the entity to be summoned
  IIngredient[] ingredients // a list of ingredients used for the summoning
);
```


---


```zenscript
void removeEntity(
  IEntityDefinition entity // the entity to remove from summoning via ricetta
);
```


---


```zenscript
void removeLifeEssence(
  IEntityDefinition entity // the entity to remove life essence for
);
```


---


```zenscript
void addLifeEssence(
  IEntityDefinition entity // the entity to add life essence for
);
```


---


```zenscript
void clearLifeEssence();
```


---


### Esempi

```zenscript
import mods.roots.SummonCreatures;

// Cancella tutte le Essenza Vita generate automaticamente aggiunte da
// la mappa di raccolta degli animali
Evoca creature. learLifeEssence();

// Aggiungi una ricetta per evocare un pollo usando 3 elementi
EvocaCreature. ddEntity(<entity:minecraft:chicken>, [<minecraft:wheat_seeds>, <minecraft:wheat>, <ore:ingotIron>]);

// Rimuovi l'enderman aggiunto dall'esempio di raccolta degli animali
// dalla lista di Essenza della Vita (presumendo che non sia stato cancellato)
EvocaCreature. emoveLifeEssence(<entity:minecraft:enderman>);

// Aggiungi manualmente una capacità di goccia di essenza della vita per un drago di un ender
EvocaCreature. ddLifeEssence(<entity:minecraft:ender_dragon>);

// Rimuovi la ricetta predefinita per le vacche
SummonCreatures.removeEntity(<entity:minecraft:cow>);
```
