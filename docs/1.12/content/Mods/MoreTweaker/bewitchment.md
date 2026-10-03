# Bewitchment

**Known Bug**: new recipes for the Spinning Wheel from Bewitchment

### Distillery

```
import moretweaker.bewitchment.Distillery;

Distillery.addRecipe(IItemStack[] outputs, IIngredient[] inputs);

Distillery.removeRecipe(IIngredient output);

Distillery.removeAll();
```

### FrostFire

```
import moretweaker.bewitchment.FrostFire;

FrostFire.addRecipe(IItemStack output, IIngredient input);

FrostFire.removeRecipe(IIngredient output);

FrostFire.removeAll();
```

### Witches Cauldron

```
import moretweaker.bewitchment.WitchesCauldron;

WitchesCauldron.addRecipe(IItemStack[] outputs, IIngredient[] inputs);

WitchesCauldron.removeRecipe(IIngredient output);

WitchesCauldron.removeAllRecipes();

WitchesCauldron.addBrew(IIngredient[] trigger, String potion, optional int duration, optional int amplifier);

WitchesCauldron.removeBrew(IIngredient trigger);

WitchesCauldron.removeAllBrews();
```

### Witches Oven

```
import moretweaker.bewitchment.WitchesOven;

WitchesOven.addRecipe(IIngredient input, IItemStack output, IItemStack byproduct, optional float chance, optional boolean requiresJar);

WitchesOven.removeRecipe(IIngredient output);

WitchesOven.removeAll();
```

### Witches Ritual

```
import moretweaker.bewitchment.WitchesRitual;

WitchesRitual.addRecipe(String name, IItemStack[] outputs, IIngredient[] inputs, String entityOutput, String entityInput, int power, int ringSmall, int ringMedium, int ringLarge)

WitchesRitual.removeByOutput(IIngredient output);

WitchesRitual.removeByInput(IIngredient input);

WitchesRitual.removeAll();
```

The values for the parameters `ringSmall`, `ringMedium` and `ringLarge` are stored in the following Fields of `moretweaker.bewitchment.WitchesRitual`:
```
import moretweaker.bewitchment.WitchesRitual;

WitchesRitual.NONE;      // No chalk

WitchesRitual.GOLDEN;    // Golden chalk

WitchesRitual.RITUAL;    // Ritual Chalk (The standard white chalk)

WitchesRitual.FIERY;     // Fiery/Infernal chalk

WitchesRitual.PHASING;   // Phasing/Otherwhere chalk

WitchesRitual.ANY;       // No matter what chalk
```

The field `GOLDEN` always throws an exception when used because you can't have golden rings.