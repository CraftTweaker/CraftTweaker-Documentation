# Adding Support to other Mods

As long as a mod's recipes use the vanilla IRecipe Datapack system, and therefore work with [IRecipeManagers](/vanilla/API/managers/IRecipeManager), then you are able to add new recipes regardless of if the mod has native support or not.
This is still a bit tricky, but doable nonetheless. There are a couple steps to doing this:

The first one is finding the recipetype we want to add a recipe to. This should be done using `/ct dump recipetypes`. Once you've got it, you should find a `.json` recipe that belongs to that recipetype in the mods source. Only can generally be found under the datagen path of the mod, which generally is: `src/main/resources/data/recipetype/recipes` in the mods source and `data/modid/recipes` in the mod's jar. The path might change depending on the mod though.

In any case, once you have your example recipe, you can start adding things following the JSON structure. An example from [CharcoalPit2](https://github.com/EnderiumSmith/CharcoalPit2/blob/master/src/main/resources/data/charcoal_pit/recipes/barrel_recipes/beer.json) looks like this:

```json
{
  "type": "charcoal_pit:barrel",
  "item_in":{
  	"item":"minecraft:wheat"
  },
  "fluid_in":{
  	"fluid":"minecraft:water",
  	"amount": 250
  },
  "fluid_out":{
  	"fluid":"charcoal_pit:alcohol_still",
  	"amount": 250,
  	"nbt":"{CustomPotionColor:16624200,Potion:\"charcoal_pit:beer\"}"
  },
  "flags": 1,
  "time": 48000
}
```

That is pure JSON, and you need to translate that recipe into something that crafttweaker can work with. Depending on the mod each key might be named differently, and support for tags and amounts is something that changes depending on the mod.

```zenscript
<recipetype:charcoal_pit:barrel>.addJsonRecipe("crafttweaker_barrelcustom_1", {
  "item_in":{
  	"item":"minecraft:wheat"
  },
  "fluid_in":{
  	"fluid":"minecraft:water",
  	"amount": 250
  },
  "fluid_out":{
  	"fluid":"charcoal_pit:alcohol_still",
  	"amount": 250,
  	"nbt":"{CustomPotionColor:16624200,Potion:\"charcoal_pit:beer\"}"
  },
  "flags": 1,
  "time": 48000
});
```

This works, but it takes up a lot of space, so we are going to write a custom function that will handle most of our use cases. Remember that recipe names need to be unique!

```zenscript
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.fluid.IFluidStack;

function addBarrelRecipe(itemIn as IItemStack, inputFluid as IFluidStack, outputFluid as IFluidStack, flags as int, time as int) as void {
<recipetype:charcoal_pit:barrel>.addJsonRecipe("crafttweaker_barrelcustom_" + itemIn.registryName.path + time + inputFluid.registryName.path, {
  "item_in":{
  	"item": itemIn
  },
  "fluid_in":{
  	"fluid": inputFluid.registryName,
  	"amount": inputFluid.amount
  },
  "fluid_out":{
  	"fluid":outputFluid.registryName,
  	"amount": outputFluid.amount,
  },
  "flags": flags,
  "time": time
});
}

//Which would be called like this:
addBarrelRecipe(<item:minecraft:glass>, <fluid:minecraft:lava>, <fluid:contenttweaker:molten_glass>, 1, 120000);


```

Some functionality (like output nbt) might require a more complex function that checks if there is nbt in the item, or adding support for tags. But this covers the most simple use case which largely reduces script size and doesn't fill it with JSON recipes, which are sometimes tedious to write too. Pretty neat huh?
