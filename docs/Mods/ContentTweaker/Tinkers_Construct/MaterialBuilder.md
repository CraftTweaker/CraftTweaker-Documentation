# Material Builder

Using this package you can create materials that you can then create tools with!

## Importing the class
It might be required for you to import the class if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops)), so better be safe than sorry and add the import.  
`import mods.contenttweaker.tconstruct.MaterialBuilder;`

## Creating a Material

First and foremost you will need to create a Material Builder.  
This can be done using the static create method.

```
//mods.contenttweaker.tconstruct.MaterialBuilder.create(String identifier);
val myMat = mods.contenttweaker.tconstruct.MaterialBuilder.create("kindlich_mat");
```

Remember, that you will need to register the material after you've done your changes.  
This can be done with the `register` method which will return a [Material Representation](Material) of the new Material.
```
myMat.register();
```

## Properties

You can set and get these properties using `myMaterial.name`.

| Property            | Type                                                               | Additional notes                                             |
|---------------------|--------------------------------------------------------------------|--------------------------------------------------------------|
| identifier          | string                                                             | Unique name                                                  |
| color               | int                                                                |                                                              |
| hidden              | bool                                                               |                                                              |
| liquid              | [ILiquidStack](/Vanilla/Liquids/ILiquidStack)                      | Smeltery output                                              |
| craftable           | bool                                                               | Can be created in the part builder                           |
| castable            | bool                                                               | Can be created using casts. Requires liquid to be set!       |
| representativeItem  | [IItemStack](/Vanilla/Items/IItemStack)                            | Shown item in the tinkers' manual                            |
| representativeOre   | [IOreDictEnty](/Vanilla/OreDict/IOreDictEnty)                      | Shown if representativeItem is null                          |
| shard               | [IItemStack](/Vanilla/Items/IItemStack)                            | Used instead of the tinker's shard item in the part builder. |
| localizedName       | string                                                             | The shown name                                               |


## Calculated Properties
### ItemLocalizer
You can use this function to calculate the material names if you need that to be the case.  
Uses a [Material Representation](Material) of this material and the name of the tool that's being renamed (e.g. "Mattock")
```
myMAt.itemLocalizer = function(thisMaterial, itemName){return "Cool " + itemName;};
```

## Add Material Items
If you use the given item in the part builder, you can set how many materialpoints that will give, or how much the item will repair. 
```
//myMaterial.addItem(IIngredient item, @Optional(1) int amountNeeded, @Optional(144) int amountMatched));
myMaterial.addItem(<item:minecraft:iron_pickaxe>);
myMaterial.addItem(<item:minecraft:iron_block>, 4, 288);

//myMaterial.removeItem(IItemStack item);
myMaterial.removeItem(<minecraft:iron_block>);
```

- `item` is the item that is matched against. You can use [Item Conditions](/Vanilla/Items/Item_Conditions) but no Transformers.  
- `amountNeeded` is the amount of items that is matched against. You can split them over all the slots the toolforge provides, which also allows you to go above 64. In the second example above, you need 4 iron blocks per addition. Defaults to 1.
- `amountMatched` is the amount of material points added per `amountNeeded`. In the second example above four iron blocks give two material points. Defaults to 144 (one ingot/one Material value).
- If you use the `remove function`, it will remove all trait ingredients that match for the item.


## Material Traits

You can add a trait to the material.  
All items made from this material will then have this trait.  
Uses a [Trait Representation](Trait), and an optional `dependency` string which will tell you which itemTypes should be affected by the trait.  
Alternatively, you can use a [Trait Builder](TraitBuilder) or a String with the identifier instead of the Trait representation.
Possible values for `dependency` are:

- `null` (default) → All items
- `"head"`
- `"handle"`
- `"extra"`
- `"bow"`
- `"bowstring"`
- `"projectile"`
- `"shaft"`
- `"fletching"`

```
myMaterial.addTrait(<ticontrait:fiery>);
myMaterial.addTrait(<ticontrait:fiery>, "bowstring");
```

You can remove materialTraits as well (which is especially useful when doing batch materials).  
You remove them using their identifier string and an optional dependency.  
If you omit the dependency or use `null` all traits with that identifier will be removed.
```
//myMaterial.remove(String identifier, @Optional String dependency);
myMaterial.remove("cactus");
myMaterial.remove("cactus", "bowstring");
```

## Material Stats

In order for TiCon to build your materials, it needs to know the material stats.  
Only tooltypes whose stat has been added will be built!
```

myMat.addHeadMaterialStats(int durability, float miningSpeed, float attackDamage, int harvestLevel);
myMat.removeHeadMaterialStats();


myMat.addHandleMaterialStats(float modifier, int durability);
myMat.removeHandleMaterialStats();


myMat.addExtraMaterialStats(int extraDurability);
myMat.removeExtraMaterialStats();


myMat.addBowMaterialStats(float drawSpeed, float range, float bonusDamage);
myMat.removeBowMaterialStats();


myMat.addBowStringMaterialStats(float modifier);
myMat.removeBowStringMaterialStats();


myMat.addArrowShaftMaterialStats(float modifier, int bonusAmmo);
myMat.removeArrowShaftMaterialStats();


myMat.addFletchingMaterialStats(float accuracy, float modifier);
myMat.removeFletchingMaterialStats();


myMat.addProjectileMaterialStats();
myMat.removeProjectileMaterialStats();
```


## Example
```
#loader contenttweaker
#modloaded tconstruct

val testMat = mods.contenttweaker.tconstruct.MaterialBuilder.create("kindlich_mat");
testMat.color = 0x8e661b;
testMat.craftable = true;
testMat.liquid = <liquid:lava>;
testMat.castable = true;
testMat.addItem(<item:minecraft:comparator>);
testMat.addItem(<item:minecraft:repeater>, 1, 2);
testMat.representativeItem = <item:minecraft:comparator>;
testMat.addHeadMaterialStats(100, 1.5f, 5.5f, 5);
testMat.addBowStringMaterialStats(0.5f);
testMat.itemLocalizer = function(thisMat, itemName){return "Cool " + itemName;};
testMat.localizedName = "Wicked";
testMat.register();
```