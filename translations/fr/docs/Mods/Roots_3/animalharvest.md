### Classe

```zenscript
Importer mods.roots.AnimalHarvest;
```

#### Méthodes

```zenscript
void addEntity(
  IEntityDefinition entity // l'entité à générer des drops pour
);
```

* * *

```zenscript
void removeEntity(
  IEntityDefinition entity // l'entité pour arrêter de générer des drops pour
);
```

* * *

```zenscript
void addFish(
  string name, // le nom du type de poisson
  IItemStack fish, // le type de poisson en tant que pile d'objet
  int poids // le poids du poisson en tant qu'entier
);
```

* * *

```zenscript
void removeFish(
  IItemStack fish // le type de poisson à supprimer en tant que pile d'élément
);
```

* * *

### Exemples

```zenscript
import mods.roots.AnimalHarvest;

// Ajoute un enderman comme cible pour le rituel de récolte des animaux.
// Généralement, il vaudrait mieux utiliser les animaux.
AnimalHarvest.addEntity(<entity:minecraft:enderman>);

// Empêche l'entité de donner des gouttes pendant le rituel
AnimalHarvest. emoveEntity(<entity:minecraft:cow>);

// Ajoute la crème de magma en tant que type de poisson avec un poids de 20 (tous les poids basés sur 
// la pêche standard. table de butin de fils)
AnimalHarvest.addFish("magma_cream", <minecraft:magma_cream>, 20);

// Supprime les poissons bouffons du rituel de récolte d'animaux
AnimalHarvest.removeFish(<minecraft:fish:3>);
```