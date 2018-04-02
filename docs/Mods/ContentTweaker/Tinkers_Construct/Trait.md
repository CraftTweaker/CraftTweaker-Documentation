# Trait Representation

A Trait representation represents a Tinkers' Construct Trait.  
You can get such an object either from the [Trait Builder](TraitBuilder) or from the [Trait Bracket Handler](/Mods/ContentTweaker/Tinkers_Construct/Brackets/Bracket_Trait).

## Importing the class
It might be required for you to import the class if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops)), so better be safe than sorry and add the import.  
`import mods.contenttweaker.tconstruct.Trait`

## ZenGetter

| ZenGetter     | Type    |
|---------------|---------|
| identifier    | string  |
| commandString | string  |


## Adding trait items

If you combine the given ingredient together with a tool in a tinker's tool forge, you can apply the trait as modifier.  
```
//myTrait.addModifierItem(IIngredient item, @Optional(1) int amountNeeded, @Optional(1) int amountMatched));
myTrait.addModifierItem(<item:minecraft:iron_pickaxe>);
myTrait.addModifierItem(<item:minecraft:iron_block>, 4, 2);
```

- `item` is the item that is matched against. You can use [Item Conditions](/Vanilla/Items/Item_Conditions) but no Transformers.  
- `amountNeeded` is the amount of items that is matched against. You can split them over all the slots the toolforge provides, which also allows you to go above 64. In the example above, you need 4 iron blocks per addition. Defaults to 1.
- `amountMatched` is the amount of trait points added per `amountNeeded`. In the example above four iron blocks give two trait points. Defaults to 1.
