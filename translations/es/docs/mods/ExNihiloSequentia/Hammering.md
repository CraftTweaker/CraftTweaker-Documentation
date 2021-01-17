# Hammering

## Package
`import mods.exnihilosequentia.ZenHammerRecipe;`

## Methods
- **create(String name)**
- **setInput(IIngredient input)** the block that needs to be broken
- **addOutput(IItemStack drop)** the item the block drops when broken
- **addOutput(IItemStack drop, float chance)** the other item the blocks drops when broken and its chance to drop


## Addition

```zenscript
<recipetype:exnihilosequentia:hammer>.create("hammer_test").setInput(<item:minecraft:cobblestone>).addOutput(<item:minecraft:gravel>).addOutput(<item:minecraft:diamond>, 0.01);
```

## Removal

```zenscript
<recipetype:exnihilosequentia:hammer>.removeAll();
```
