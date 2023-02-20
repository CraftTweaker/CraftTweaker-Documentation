# IWeightedIngredient
An IWeightedIngredient is an ingredient with a percentage. It is the subclass of [WeightedItemStack](/Vanilla/Items/WeightedItemStack/), [WeightedLiquidStack](/Vanilla/Liquids/WeightedLiquidStack/) and [WeightedOreDictEntry](/Vanilla/OreDict/WeightedOreDictEntry).

## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.item.IWeightedIngredient;`

## ZenGetters

| ZenGetter  | What does it do                                      | Return Type                                        |
|------------|------------------------------------------------------|----------------------------------------------------|
| ingredient | Returns the associated IIngredient                   | [IIngredient](/Vanilla/Variable_Types/IIngredient) |
| chance     | Returns the stack's chance as decimal (e.g. 0.2)     | float                                              |
| percent    | Returns the stack's chance as percentage (e.g. 20.0) | float                                              |
