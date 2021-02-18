# Sieving

## Package
`import mods.exnihilosequentia.ZenSieveRecipe;`

## Methods
- **create(String name)**
- **setInput(IIngredient input)** the input
- **addDrop(IItemStack drop)** the item that drops from the block
- **addRoll(String mesh, float chance)** the mesh type and the chance for an additional item to drop
- **setWaterlogged()** if the sieve must be waterlogged for the recipe


## Addition

```zenscript
<recipetype:exnihilosequentia:sieve>.create("sieve_test").setInput(<item:minecraft:cobblestone>).addDrop(<item:minecraft:netherite_ingot>).addRoll("diamond", 0.01).addRoll("string", 1.0);
```

## Removal

```zenscript
<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:exnihilosequentia:piece_iron>);
```
