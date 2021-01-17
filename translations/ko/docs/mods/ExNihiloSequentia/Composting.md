# Composting

## Package
`import mods.exnihilosequentia.ZenCompostRecipe;`

## Methods
- **create(String name)**
- **setInput(IIngredient input)** the input
- **setAmount(int amount)** the chance for an item to add a level of compost


## Addition

```zenscript
<recipetype:exnihilosequentia:compost>.create("compost_test").setInput(<item:minecraft:oak_leaves>).setAmount(100);
```

## Removal

```zenscript
<recipetype:exnihilosequentia:compost>.removeRecipe(<item:minecraft:melon_slice>);
```
