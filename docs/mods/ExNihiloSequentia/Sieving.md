# Sieving

## Package
`import mods.exnihilosequentia.ZenSieveRecipe;`

## Methods
- **create(String name)** 
- **setInput(IIngredient input)** the block that drops the output
- **addDrop((IItemStack drop, float chance))** the item that drops from the block
- **addRoll(String mesh, float chance)** the sieve mesh and its chance
- **setWaterlogged()** if the sieve must be waterlogged for the recipe


## Addition

```zenscript
<recipetype:exnihilosequentia:sieve>.create("sieve_test").setInput(<item:minecraft:cobblestone>).addDrop(<item:minecraft:netherite_ingot>).addRoll("diamond", 0.01).addRoll("string", 1.0);
```
