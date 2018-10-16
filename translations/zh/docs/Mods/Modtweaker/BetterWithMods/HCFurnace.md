# HCFurnace

The HCFurnace feature makes it so that furnace recipes can take varied amount of time depending on the item that is smelting. This does not effect how fuel works, meaning some recipes will take more or less fuel.

Allows setting the time, in ticks, that it takes a specific furnace recipe to smelt based on its input item ```mods.betterwithmods.Misc.setFurnaceSmeltingTime(IIngredient ingredient, int time)

//Make a potato take about 83 minutes to smelt, because why not mods.betterwithmods.Misc.setFurnaceSmeltingTime(<minecraft:potato>,100000); ```