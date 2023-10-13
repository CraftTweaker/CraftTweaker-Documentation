# Survivalist Support 1.10.2
## Support
Support is added by Survivalist.

Please report issues to their [Issue Tracker](https://github.com/BeetoGuy/BetterWithMods/issues)

## Handlers Supported
The following handlers are supported:

* Chopping Block
* Drying Rack
Non Standard Parameters

```
outputMultiplier: Changes how many outputs result from the recipe. Default is 1.0
hitCountMultiplier: Changes how many times you have to hit the Chopping Block with an axe. Default is 1.0
```
Each of these handlers can have recipes added or removed:

```zenscript
Parameters with '@Optional' are optional and can be left out
Parameters with '@oredict' are optional and can be left out

// Chopping Block
// @oredict InputStack, OutputStack, @Optional outputMultiplier, @Optional hitCountMultiplier
gigaherz.survivalist.Choppable.addRecipe(<minecraft:bone>,<minecraft:dye:15>, 1.0, 1.0);
// OutputStack
gigaherz.survivalist.Choppable.removeRecipe(<minecraft:stick>);

// Drying Rack
// @oredict InputStack, OutputStack, Time in Ticks
gigaherz.survivalist.Dryable.addRecipe(<minecraft:rotten_flesh>, <minecraft:leather>, 300);
// OutputStack, @Optional InputStack
gigaherz.survivalist.Dryable.removeRecipe(<minecraft:leather>, <minecraft:rotten_flesh>);
```