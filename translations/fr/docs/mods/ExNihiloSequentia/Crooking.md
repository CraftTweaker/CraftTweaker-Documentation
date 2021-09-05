::requiredMod[Ex Nihilo: Sequentia]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/ex-nihilo-sequentia}

# Crooking

## Package
`import mods.exnihilosequentia.ZenCrookRecipe;`

## Methods
- **create(String nom)**
- **setInput(IIngredient input)** L'ingédient à insérer dans le compost.
- **addDrop(IItemStack drop, float chance)** l'item qui est donner et sa chance de le drop.


## Addition

```zenscript
<recipetype:exnihilosequentia:crook>.create("crook_test").setInput(<item:minecraft:oak_leaves>).addDrop(<item:minecraft:nether_star>, 1);
```

## Addition

```zenscript
<recipetype:exnihilosequentia:crook>.removeRecipe(<item:exnihilosequentia:silkworm>);
```
