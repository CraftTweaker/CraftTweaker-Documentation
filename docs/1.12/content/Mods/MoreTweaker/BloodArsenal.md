# Blood Arsenal

### Infusion de Sanguine

```
import moretweaker.bloodarsenal.Sanguine;

Sanguine.addRecipe(IItemStack output, int lpCost, IItemStack catalyst, IIngredient[] inputs);

Sanguine.removeRecipe(IIngredient output);

Sanguine.addModifier(String modifier, int lpCost, IIngredient[] inputs);

Sanguine.removeModifier(String modifier);

Sanguine.removeAll();
```

By adding or removing modifiers, the amount of the inputs will
get multiplied with the level that gets applied.

##### Fields

The values for the `modifier` parameter are stored in fields
of the `Sanguine` class:

```
import moretweaker.bloodarsenal.Sanguine;

Sanguine.BAD_POTION;
Sanguine.BLOOD_LUST;
Sanguine.FLAME; 
Sanguine.SHARPNESS; 
Sanguine.FORTUNATE; 
Sanguine.LOOTING; 
Sanguine.SILKY; 
Sanguine.SMELTING; 
Sanguine.EXPERIENCED; 
Sanguine.BENEFICIAL_POTION; 
Sanguine.QUICK_DRAW; 
Sanguine.SHADOW_TOOL; 
Sanguine.AOD; 
Sanguine.SIGIL; 
```