# Moistener

ModTweaker allows you to add or remove forestry Moistener Recipes

## Calling
You can call the  package using `mods.forestry.Moistener`

## Recipe Removal

```JAVA
//mods.forestry.Moistener.removeRecipe(IIngredient output);
mods.forestry.Moistener.removeRecipe(<minecraft:stonebrick:1>);
```


## Addition

```JAVA
//mods.forestry.Moistener.addRecipe(IItemStack output, IItemStack input, int packagingTime); 
mods.forestry.Moistener.addRecipe(<minecraft:mycelium>, <minecraft:grass>, 60); 
```

## Fuel Removal
```JAVA
//mods.forestry.Moistener.removeFuel(IIngredient moistenerItem);
mods.forestry.Moistener.removeFuel(<minecraft:wheat>);

```


## Fuel Addition
```JAVA
//mods.forestry.Moistener.addFuel(IItemStack item, IItemStack product, int moistenerValue, int stage);
mods.forestry.Moistener.addFuel(<minecraft:gold_ingot>, <minecraft:iron_ingot>, 20, 2);
```

|Parameter       | Type                                   | Description                                                                                |
|----------------|----------------------------------------|--------------------------------------------------------------------------------------------|
|item            |[IItemStack](/Vanilla/Items/IItemStack/) |Item to become a valid fuel for the Moistener                                               |
|product         |[IItemStack](/Vanilla/Items/IItemStack/) |Item that will leave the moistener's working slot (e.g. mouldy wheat or mulch).             |
|MoistenerValue  |int                                     |How much this item contributes to the final product of the moistener.                       |
|stage           |int                                     |What stage this product represents. Resources with lower stage value will be consumed first.|