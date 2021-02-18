# Composting

## Package
`import mods.exnihilosequentia.ZenCompostRecipe;`

## Methoden
- **create(String name) // Name des Skripts **
- **setInput(IIngredient input)** // Der Input
- **setAmount(int amount)** // Die Höhe des Kompostlevels für ein Item (1000 = 1 Block)


## Addition

```zenscript
<recipetype:exnihilosequentia:compost>.create("compost_test").setInput(<item:minecraft:oak_leaves>).setAmount(100);
```

## Removal

```zenscript
<recipetype:exnihilosequentia:compost>.removeRecipe(<item:minecraft:melon_slice>);
```
