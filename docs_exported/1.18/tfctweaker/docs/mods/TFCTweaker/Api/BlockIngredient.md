# BlockIngredient

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import tfc.api.ingredient.BlockIngredient;
```


## Static Methods

:::group{name=of}

Return Type: [BlockIngredient](/mods/TFCTweaker/Api/BlockIngredient)

```zenscript
BlockIngredient.of(block as Block) as BlockIngredient
```

| Parameter |               Type                |
|-----------|-----------------------------------|
| block     | [Block](/vanilla/api/block/Block) |


:::

:::group{name=of}

Return Type: [BlockIngredient](/mods/TFCTweaker/Api/BlockIngredient)

```zenscript
BlockIngredient.of(blocks as Block[]) as BlockIngredient
```

| Parameter |                Type                 |
|-----------|-------------------------------------|
| blocks    | [Block](/vanilla/api/block/Block)[] |


:::

:::group{name=of}

Return Type: [BlockIngredient](/mods/TFCTweaker/Api/BlockIngredient)

```zenscript
BlockIngredient.of(tag as KnownTag<Block>) as BlockIngredient
```

| Parameter |                                        Type                                         |
|-----------|-------------------------------------------------------------------------------------|
| tag       | [KnownTag](/vanilla/api/tag/type/KnownTag)&lt;[Block](/vanilla/api/block/Block)&gt; |


:::

