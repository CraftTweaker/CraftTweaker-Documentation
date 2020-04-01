# Sifter

## Package
`moretweaker.fossil.Sifter`

## Addition

```zenscript
//moretweaker.fossil.Sifter.addOutput(IIngredient input, IItemStack output, double weight);

//A higher weight value means a higher chance. All weight values together are 100 by default.
//That means if you set weight to 100 and don't add anything else to that input, you'd have a chance of 50%
//because the sum then is 100 + 100 = 200 and the chance = 100 / 200 = 50%

moretweaker.fossil.Sifter.addOutput(<minecraft:dirt>, <minecraft:gold_nugget>, 2);
```

## Removal

```zenscript
//moretweaker.fossil.Sifter.removeByInput(IIngredient input);
moretweaker.fossil.Sifter.removeByInput(<minecraft:dirt>);

//moretweaker.fossil.Sifter.removeByOutput(IIngredient output);
moretweaker.fossil.Sifter.removeByOutput(<minecraft:gold_nugget>);

moretweaker.fossil.Sifter.removeAll();
`````