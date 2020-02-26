# Calculator Machines

## Methods

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input** The input.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) output** The output.
- **Int powercost** The cost of power per process.
- **Int value** The amount of input adds to that machine.

## Conductor Mast

```zenscript
mods.calculator.conductorMast.addRecipe(IIngredient input, int powercost, IIngredient output);
mods.calculator.conductorMast.removeRecipe(IIngredient output);
```
or 
```zenscript
import mods.calculator.conductorMast;

conductorMast.addRecipe(IIngredient input, int powercost, IIngredient output);
conductorMast.removeRecipe(IIngredient output);
```

## Health Processor

```zenscript
mods.calculator.health.addRecipe(IIngredient input, int value);
mods.calculator.health.removeRecipe(IIngredient input);
```
or
```zenscript
import mods.calculator.health;

health.addRecipe(IIngredient input, int value);
health.removeRecipe(IIngredient input);
```

## Starch Extractor

```zenscript
mods.calculator.starch.addRecipe(IIngredient input, int value);
mods.calculator.starch.removeRecipe(IIngredient input);
```
or
```zenscript
import mods.calculator.starch;

starch.addRecipe(IIngredient input, int value);
starch.removeRecipe(IIngredient input);
```

## Redstone Extractor

```zenscript
mods.calculator.redstone.addRecipe(IIngredient input, int value);
mods.calculator.redstone.removeRecipe(IIngredient input);
```
or
```zenscript
import mods.calculator.redstone;

redstone.addRecipe(IIngredient input, int value);
redstone.removeRecipe(IIngredient input);
```

## Glowstone Extractor

```zenscript
mods.calculator.glowstone.addRecipe(IIngredient input, int value);
mods.calculator.glowstone.removeRecipe(IIngredient input);
```
or
```zenscript
import mods.calculator.glowstone;

glowstone.addRecipe(IIngredient input, int value);
glowstone.removeRecipe(IIngredient input);