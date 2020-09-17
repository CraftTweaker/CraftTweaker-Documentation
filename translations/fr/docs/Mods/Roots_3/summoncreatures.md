
### Classe

```zenscript
Importer mods.roots.Invoquer des créatures ;
```

#### Méthodes

```zenscript
void addEntity(
  IEntityDefinition entity, // l'entité à invoquer
  IIngredient[] ingredients // une liste d'ingrédients utilisés pour l'invocation
);
```


---


```zenscript
void removeEntity(
  IEntityDefinition entity // l'entité à supprimer de l'invocation via la recette
);
```


---


```zenscript
void removeLifeEssence(
  IEntityDefinition entity // l'entité pour supprimer l'essence de vie pour
);
```


---


```zenscript
void addLifeEssence(
  IEntityDefinition entity // l'entité pour ajouter de l'essence de vie pour
);
```


---


```zenscript
void clearLifeEssence();
```


---


### Exemples

```zenscript
import mods.roots.SummonCreatures;

// Clear all automatically generated Life Essences added by
// the Animal Harvest map
SummonCreatures.clearLifeEssence();

// Add a recipe to summon a Chicken using 3 items
SummonCreatures.addEntity(<entity:minecraft:chicken>, [<minecraft:wheat_seeds>, <minecraft:wheat>, <ore:ingotIron>]);

// Remove the enderman added by the Animal Harvest example
// from the Life Essence list (presuming it hasn't been cleared)
SummonCreatures.removeLifeEssence(<entity:minecraft:enderman>);

// Manually add a life-essence drop capability for an ender dragon
SummonCreatures.addLifeEssence(<entity:minecraft:ender_dragon>);

// Remove the default recipe for cows
SummonCreatures.removeEntity(<entity:minecraft:cow>);
```
