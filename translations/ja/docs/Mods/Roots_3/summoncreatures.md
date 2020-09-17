
### クラス

```zenscript
import mods.roots.SummonCreatures;
```

#### メソッド

```zenscript
void addEntity(
  IEntityDefinition entity, // the entity to be 召喚されるエンティティ
  IIngredient[] mators // a list of method used for the 召喚に使用される食材
);
```


---


```zenscript
void removeEntity(
  IEntityDefinition entity // the entity to remove from 召喚からレシピ
);
```


---


```zenscript
void removeLifeEssentence(
  IEntityDefinition entity // the entity to remove life essence for
);
```


---


```zenscript
void addLifeessence(
  IEntityDefinition entity // the entity to add life essence for
);
```


---


```zenscript
void clearLifeessence();
```


---


### 使用例

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
