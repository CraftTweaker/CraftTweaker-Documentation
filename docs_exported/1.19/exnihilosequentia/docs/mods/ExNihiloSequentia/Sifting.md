# ZenSieveRecipe

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.exnihilosequentia.ZenSieveRecipe;
```


## Static Methods

:::group{name=builder}

Return Type: [ZenSieveRecipe](/mods/ExNihiloSequentia/Sifting)

```zenscript
ZenSieveRecipe.builder(recipeId as ResourceLocation) as ZenSieveRecipe
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| recipeId  | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

## Methods

:::group{name=addDrop}

Sets the item that should drop when sifting

Return Type: [ZenSieveRecipe](/mods/ExNihiloSequentia/Sifting)

```zenscript
ZenSieveRecipe.addDrop(drop as IItemStack) as ZenSieveRecipe
```

| Parameter |                    Type                    | Description  |
|-----------|--------------------------------------------|--------------|
| drop      | [IItemStack](/vanilla/api/item/IItemStack) | dropped item |


:::

:::group{name=addRoll}

Sets the mesh type and the chance, how often the item should drop.

Return Type: [ZenSieveRecipe](/mods/ExNihiloSequentia/Sifting)

```zenscript
ZenSieveRecipe.addRoll(mesh as string, chance as float) as ZenSieveRecipe
```

| Parameter |  Type  |                        Description                         |
|-----------|--------|------------------------------------------------------------|
| mesh      | string | mesh type (only valid meshes are allowed)                  |
| chance    | float  | the chance betweet 0 and 1 (greater than 1 is not allowed) |


:::

:::group{name=setInput}

Sets the input that should be sifted

Return Type: [ZenSieveRecipe](/mods/ExNihiloSequentia/Sifting)

```zenscript
ZenSieveRecipe.setInput(input as IIngredient) as ZenSieveRecipe
```

| Parameter |                        Type                        | Description  |
|-----------|----------------------------------------------------|--------------|
| input     | [IIngredient](/vanilla/api/ingredient/IIngredient) | sifted block |


:::

:::group{name=setWaterlogged}

(Optional) The drop will only happen when the sieve is waterlogged.

Returns: needs a waterlogged sieve now  
Return Type: [ZenSieveRecipe](/mods/ExNihiloSequentia/Sifting)

```zenscript
// ZenSieveRecipe.setWaterlogged() as ZenSieveRecipe

myZenSieveRecipe.setWaterlogged();
```

:::


