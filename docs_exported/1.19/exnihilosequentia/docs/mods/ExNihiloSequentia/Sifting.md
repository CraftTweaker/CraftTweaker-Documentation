# SieveRecipe

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.exnihilosequentia.SieveRecipe;
```


## Methods

:::group{name=addDrop}

Sets the item that should drop when sifting

Return Type: [SieveRecipe](/mods/ExNihiloSequentia/Sifting)

```zenscript
SieveRecipe.addDrop(drop as IItemStack) as SieveRecipe
```

| Parameter |                    Type                    | Description  |
|-----------|--------------------------------------------|--------------|
| drop      | [IItemStack](/vanilla/api/item/IItemStack) | dropped item |


:::

:::group{name=addRoll}

Sets the mesh type and the chance, how often the item should drop.

Return Type: [SieveRecipe](/mods/ExNihiloSequentia/Sifting)

```zenscript
SieveRecipe.addRoll(mesh as string, chance as float) as SieveRecipe
```

| Parameter |  Type  |                        Description                         |
|-----------|--------|------------------------------------------------------------|
| mesh      | string | mesh type (only valid meshes are allowed)                  |
| chance    | float  | the chance betweet 0 and 1 (greater than 1 is not allowed) |


:::

:::group{name=create}

Create a recipe name for the new recipe

Return Type: [SieveRecipe](/mods/ExNihiloSequentia/Sifting)

```zenscript
SieveRecipe.create(recipeId as string) as SieveRecipe
```

| Parameter |  Type  |  Description   |
|-----------|--------|----------------|
| recipeId  | string | name of recipe |


:::

:::group{name=setInput}

Sets the input that should be sifted

Return Type: [SieveRecipe](/mods/ExNihiloSequentia/Sifting)

```zenscript
SieveRecipe.setInput(input as IIngredient) as SieveRecipe
```

| Parameter |                        Type                        | Description  |
|-----------|----------------------------------------------------|--------------|
| input     | [IIngredient](/vanilla/api/ingredient/IIngredient) | sifted block |


:::

:::group{name=setWaterlogged}

(Optional) The drop will only happen when the sieve is waterlogged.

Returns: needs a waterlogged sieve now  
Return Type: [SieveRecipe](/mods/ExNihiloSequentia/Sifting)

```zenscript
// SieveRecipe.setWaterlogged() as SieveRecipe

mySieveRecipe.setWaterlogged();
```

:::


