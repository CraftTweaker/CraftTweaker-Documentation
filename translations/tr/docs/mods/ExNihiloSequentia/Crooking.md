::requiredMod[Ex Nihilo: Sequentia]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/ex-nihilo-sequentia}

# Crooking

## Package
`import mods.exnihilosequentia.ZenCrookRecipe;`

## Methods
- **create(String name)**
- **setInput(IIngredient input)** the input
- **addDrop(IItemStack drop, float chance)** the item that drops and its chance to drop


## Addition

```zenscript
<recipetype:exnihilosequentia:crook>.create("crook_test").setInput(<item:minecraft:oak_leaves>).addDrop(<item:minecraft:nether_star>, 1);
```

## Addition

```zenscript
<recipetype:exnihilosequentia:crook>.removeRecipe(<item:exnihilosequentia:silkworm>);
```
