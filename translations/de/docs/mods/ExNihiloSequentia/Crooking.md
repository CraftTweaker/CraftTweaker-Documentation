::requiredMod[Ex Nihilo: Sequentia]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/ex-nihilo-sequentia}

# Crooking

## Package
`import mods.exnihilosequentia.ZenCrookRecipe;`

## Methoden
- **create(String name) // Name des Skripts **
- **setInput(IIngredient input)** // Der Input
- **addDrop(IItemStack drop, float chance)** // Das Item und die Drop-Chance


## Addition

```zenscript
<recipetype:exnihilosequentia:crook>.create("crook_test").setInput(<item:minecraft:oak_leaves>).addDrop(<item:minecraft:nether_star>, 1);
```

## Addition

```zenscript
<recipetype:exnihilosequentia:crook>.removeRecipe(<item:exnihilosequentia:silkworm>);
```
