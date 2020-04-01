# Bedrock Ritual

## Package
`moretweaker.bedrockcraft.BedrockRitual`

## Addition

```zenscript
//moretweaker.bedrockcraft.BedrockRitual.addRecipe(IItemStack output, IIngredient center, int bedrockAmount, IIngredient[] inputs);
//The inputs array must have a length of 2, 3, 4, 6 or 12.
moretweaker.bedrockcraft.BedrockRitual.addRecipe(<minecraft:diamond>, <minecraft:coal>, 8, [<minecraft:dirt>, <minecraft:dirt>]);
```

## Removal

```zenscript
//moretweaker.bedrockcraft.BedrockRitual.removeRecipe(IIngredient output);
moretweaker.bedrockcraft.BedrockRitual.removeRecipe(<minecraft:nether_star>);

moretweaker.bedrockcraft.BedrockRitual.removeAll();
```