# Material Representation

A Material representation represents a Tinkers' Construct Material.  
You can get such an object either from the [Material Builder](MaterialBuilder) or from the [Material Bracket Handler](/Mods/ContentTweaker/Tinkers_Construct/Brackets/Bracket_Material).

## Importing the class
It might be required for you to import the class if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops)), so better be safe than sorry and add the import.  
`import mods.contenttweaker.tconstruct.Material`

## ZenGetter

| ZenGetter     | Type    |
|---------------|---------|
| identifier    | string  |
| commandString | string  |


## Adding material items

If you use the given item in the part builder, you can set how many materialpoints that will give, or how much the item will repair. 
```
//myMaterial.addItem(IIngredient item, @Optional(1) int amountNeeded, @Optional(144) int amountMatched));
myMaterial.addItem(<item:minecraft:iron_pickaxe>);
myMaterial.addItem(<item:minecraft:iron_block>, 4, 288);
```

- `item` is the item that is matched against. You can use [Item Conditions](/Vanilla/Items/Item_Conditions) but no Transformers.  
- `amountNeeded` is the amount of items that is matched against. You can split them over all the slots the toolforge provides, which also allows you to go above 64. In the second example above, you need 4 iron blocks per addition. Defaults to 1.
- `amountMatched` is the amount of material points added per `amountNeeded`. In the second example above four iron blocks give two material points. Defaults to 144 (one ingot/one Material value).


## Adding Material Traits

You can add a trait to the material.  
All items made from this material will then have this trait.  
Uses a [Trait Representation](Trait), returns void.
```
myMaterial.addTrait(<ticontrait:fiery>);
```