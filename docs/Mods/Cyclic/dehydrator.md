### Mod Info

<a href="https://github.com/Lothrazar/Cyclic/issues">Issue Tracker</a>
<br>
<a href="https://www.curseforge.com/minecraft/mc-mods/cyclic">Downloads on Curseforge</a>

### Class

```zenscript
import mods.cyclicmagic.Dehydrator;
```

#### Methods

```zenscript
void addRecipe(
  IItemStack output,   // the output as an itemstack
  IItemStack input,   // the input as an itemstack
  int ticks,   // the number of ticks to process
  );
```




---


```zenscript
void removeShapedRecipe(
  IItemStack output // the output itemstack to be removed. Will remove all recipes that output this item
);
```



---


### Example

```zenscript
import mods.cyclicmagic.Dehydrator;

// convert dirt to stone in 300 ticks
Dehydrator.addRecipe(<minecraft:stone>, <minecraft:dirt>, 300);

// remove all recipes that output sticks
Dehydrator.removeShapedRecipe(<minecraft:stick>);
```
