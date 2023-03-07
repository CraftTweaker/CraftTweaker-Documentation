# BlockIngredient

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.tfc.api.ingredient.BlockIngredient;
```


## Static Methods

:::group{name=of}

Create a block ingredient from a block

Returns:   
Return Type: [BlockIngredient](/mods/TFCTweaker/Api/Ingredient/BlockIngredient)

```zenscript
// BlockIngredient.of(block as Block) as BlockIngredient

BlockIngredient.of(<block:minecraft:dirt>);
```

| Parameter |               Type                | Description |
|-----------|-----------------------------------|-------------|
| block     | [Block](/vanilla/api/block/Block) | block       |


:::

:::group{name=of}

Create a block from an array of blocks

Returns:   
Return Type: [BlockIngredient](/mods/TFCTweaker/Api/Ingredient/BlockIngredient)

```zenscript
// BlockIngredient.of(blocks as Block[]) as BlockIngredient

BlockIngredient.of([<block:minecraft:dirt>, <block:minecraft:stone>]);
```

| Parameter |                Type                 |   Description   |
|-----------|-------------------------------------|-----------------|
| blocks    | [Block](/vanilla/api/block/Block)[] | array of blocks |


:::

:::group{name=of}

Create a block ingredient from a block tag

Returns:   
Return Type: [BlockIngredient](/mods/TFCTweaker/Api/Ingredient/BlockIngredient)

```zenscript
// BlockIngredient.of(tag as KnownTag<Block>) as BlockIngredient

BlockIngredient.of(<tag:blocks:minecraft:sand>);
```

| Parameter |                                        Type                                         | Description |
|-----------|-------------------------------------------------------------------------------------|-------------|
| tag       | [KnownTag](/vanilla/api/tag/type/KnownTag)&lt;[Block](/vanilla/api/block/Block)&gt; | block tag   |


:::

