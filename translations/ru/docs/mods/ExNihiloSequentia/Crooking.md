# Crooking

## Package
`import mods.exnihilosequentia.ZenCrookRecipe;`

## Methods
- **create(String name)**
- **setInput(IIngredient input)** the input
- **addDrop(IItemStack drop, float chance)** the item that drops and its chance to drop


## Сложение

```zenscript
<recipetype:exnihilosequentia:crook>.create("crook_test").setInput(<item:minecraft:oak_leaves>).addDrop(<item:minecraft:nether_star>, 1);
```

## Сложение

```zenscript
<recipetype:exnihilosequentia:crook>.removeRecipe(<item:exnihilosequentia:silkworm>);
```
