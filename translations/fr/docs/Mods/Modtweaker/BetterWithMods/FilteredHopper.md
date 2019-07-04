# Filtered Hopper

The Filtered Hopper is a block that can allow or disallow certain items based on the item currently in its Filter Slot. Additionally it can perform recipes on the items that are attempting to enter the Hopper.

# Filters

* Addition
    
    * Add a new Filter by a name and assign the items which will be used in the Filter Slot.
            mods.betterwithmods.FilteredHopper.addFilter(String name, IIngredient item)
        
            mods.betterwithmods.FilteredHopper.addFilter("modtweaker:myFilter", <minecraft:planks>);   
        
    
    * Add an allowed item to a Filter by its name.
            mods.betterwithmods.FilteredHopper.addFilteredItem(String name, IIngredient item)
        
            mods.betterwithmods.FilteredHopper.addFilteredItem("modtweaker:myFilter",<minecraft:dirt>);
            mods.betterwithmods.FilteredHopper.addFilteredItem("modtweaker:myFilter",<ore:ingotIron>);
        
    
    * Filtered Recipes - The hopper can process the item attempting to input into specific item outputs, it can either
        
        * Put into the hopper's inventory (as long as the current filter allows it).
        * Eject the items into the world above the hopper 
            mods.betterwithmods.FilteredHopper.addFilterRecipe(String name, IIngredient input, IIngredient[] insideOutput , IIngredient[] outsideOutput);
            
            //Will convert a grass block into a flint side the inventory and 9 diamonds outside the inventory
            mods.betterwithmods.FilteredHopper.addFilterRecipe("modtweaker:myFilter",<minecraft:grass>,[<minecraft:flint>],[<minecraft:diamond>*9]);
            
            //Will only eject 9 diamonds into the world
            mods.betterwithmods.FilteredHopper.addFilterRecipe("modtweaker:myFilter2",<minecraft:gravel>, [], [<minecraft:diamond>*9]);
            
            //Will only put 9 diamonds into the inventory, **only if you allow diamonds into the specific filter**
            mods.betterwithmods.FilteredHopper.addFilterRecipe("modtweaker:myFilter3",<minecraft:sand>, [<minecraft:diamond>*9], []);
            
        
        Additionally, you can add special recipes to the Filtered Hopper that will create Souls Urns from Urns.
        
               mods.betterwithmods.FilteredHopper.addSoulUrnRecipe(IIngredient input, IItemStack[] outputs, IItemStack[] secondary)
            
               mods.betterwithmods.FilteredHopper.addSoulUrnRecipe(<minecraft:stone>,[],[<minecraft:diamond>*9]);
            

* Removal
    
    * Remove the allowed items from the specified filter
            mods.betterwithmods.FilteredHopper.clearFilter(String name);
        
            mods.betterwithmods.FilteredHopper.clearFilter("betterwithmods:wicker");
        
    
    * Remove a Filtered Recipe by input or output
            mods.betterwithmods.FilteredHopper.removeRecipe(IIngredient[] insideOutput, IIngredient[] outsideOutput);
        
            mods.betterwithmods.FilteredHopper.removeRecipe([<minecraft:sand>,<minecraft:sand:1>],[<minecraft:flint>]);
        
            mods.betterwithmods.FilteredHopper.removeRecipeByInput(IIngredient input);
        
            mods.betterwithmods.FilteredHopper.removeRecipeByInput(<minecraft:sand>);