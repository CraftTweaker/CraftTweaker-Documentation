# Other Examples

## About this page

This page includes examples from Mekanism's ZenClasses that aren't easily grouped.

### FloatingLong

A [FloatingLong](/mods/Mekanism/api/FloatingLong) is required as a parameter in this recipe, so we use one.

```zenscript
import mods.mekanism.api.FloatingLong;
import mods.mekanism.api.ingredient.ItemStackIngredient;

//<recipetype:mekanism:energy_conversion>.addRecipe(name as string, input as ItemStackIngredient, output as FloatingLong)

<recipetype:mekanism:energy_conversion>.addRecipe("redstone_ore_to_power", ItemStackIngredient.from(<tag:items:forge:ores/redstone>), FloatingLong.create(45000));
```

### BracketHandlers and Bracket Validators

Let's say we want to validate that some Mekanism-added Chemicals exist. This doesn't seem very helpful, but it might have a use in checking one of your custom Chemicals exist.

This will use [BracketHandlers]() and [BracketValidators]() for safety.
[BracketHandlers]() can be used to get 

We'll keep our code in a [Function](https://docs.blamejared.com/1.18/en/zencode/Functions).

```zenscript

function validateChemicals() as void {

val chemList = [
    "mekanism:ethene", "mekanism:dirty_lead", "mekanism:uranium_hexafluoride", "mekanism:does_not_exist", "mekanism:tritium"
] as string[];
 
 //Even though chemical is currently a String, we can turn a string into a Chemical object using the BracketHandlers class! We do want to validate them first in case they don't exist :P
 //This also works with your chemicals as long as everything is fine.
 for chemical in chemList {
    if (BracketValidators.validateGasStack(chemical)){
        var gasStack = BracketHandlers.getGasStack(chemical);
        println("Validated GasStack exists, with name: " + gasStack.commandString);
    }
    else if (BracketValidators.validateInfusionStack(chemical)){
        var infusionStack = BracketHandlers.getInfusionStack(chemical);
        println("Validated InfusionStack exists, with name: " + infusionStack.commandString);
    }
    else if (BracketValidators.validatePigmentStack(chemical)){
        var pigmentStack = BracketHandlers.getPigmentStack(chemical);
        println("Validated PigmentStack exists, with name: " + pigmentStack.commandString);
    }
    else if (BracketValidators.validateSlurryStack(chemical)){
        var slurryStack = BracketHandlers.getSlurryStack(chemical);
        println("Validated Slurrytack exists, with name: " + slurryStack.commandString);
    }
    else {
        println("Couldn't validate supplied chemical name: {" + chemical + "}");
    }
 }
}

validateChemicals();

```

This is the result of our script, taken from the `crafttweaker.log` file.

```
Validated GasStack exists, with name: <gas:mekanism:ethene>
Could not get gas for <gas:mekanism:dirty_leadmekanism:dirty_lead>, gas does not appear to exist!
Could not get infuse type for <infuse_type:mekanism:dirty_leadmekanism:dirty_lead>, infuse type does not appear to exist!
Could not get pigment for <pigment:mekanism:dirty_leadmekanism:dirty_lead>, pigment does not appear to exist!
Validated Slurrytack exists, with name: <slurry:mekanism:dirty_lead>
Validated GasStack exists, with name: <gas:mekanism:uranium_hexafluoride>
Could not get gas for <gas:mekanism:does_not_existmekanism:does_not_exist>, gas does not appear to exist!
Could not get infuse type for <infuse_type:mekanism:does_not_existmekanism:does_not_exist>, infuse type does not appear to exist!
Could not get pigment for <pigment:mekanism:does_not_existmekanism:does_not_exist>, pigment does not appear to exist!
Could not get slurry for <slurry:mekanism:does_not_existmekanism:does_not_exist>, slurry does not appear to exist!
Couldn't validate supplied chemical name: {mekanism:does_not_exist}
Could not get gas for <gas:mekanism:tritiummekanism:tritium>, gas does not appear to exist!
Could not get infuse type for <infuse_type:mekanism:tritiummekanism:tritium>, infuse type does not appear to exist!
Could not get pigment for <pigment:mekanism:tritiummekanism:tritium>, pigment does not appear to exist!
Could not get slurry for <slurry:mekanism:tritiummekanism:tritium>, slurry does not appear to exist!
Couldn't validate supplied chemical name: {mekanism:tritium}
```