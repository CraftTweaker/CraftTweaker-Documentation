# Heating Sources

## Package
`import mods.exnihilosequentia.ZenHeatRecipe;`

## Methods
- **create(String name)** 
- **setBlock(MCBlock input)** block to add as a heat source
- **setAmount(int amount)** heating amount



## Addition

```zenscript
<recipetype:exnihilosequentia:heat>.create("heat_test").setBlock(<block:minecraft:cobblestone>).setAmount(100);
```

## Removal

```zenscript
<recipetype:exnihilosequentia:heat>.removeAll();
```
