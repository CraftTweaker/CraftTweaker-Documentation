
### Klasse

```zenscript
importiere mods.roots.SummonCreatures;
```

#### Methoden

```zenscript
Hinzufügen nichtig (
  IEntityDefinition, Entität, // die Entität, die beschworen werden
  IIngredient[] Zutaten // eine Liste von Zutaten, die für die Beschwörung verwendet werden
);
```


---


```zenscript
EntfernenEntität(
  IEntityDefinition Entität // Entität zum Entfernen durch Beschwören mittels Rezept
);
```


---


```zenscript
removeLifeEssence(
  IEntityDefinition Entität // Entität zum Entfernen der LebensEssenz für
);
```


---


```zenscript
void addLifeEssence(
  IEntityDefinition Entität // Entität zum Hinzufügen von LebensEssenz für
);
```


---


```zenscript
clearLifeEssence(); ungültig
```


---


### Beispiele

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
