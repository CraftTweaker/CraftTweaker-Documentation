::requiredMod[Ex Nihilo: Sequentia]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/ex-nihilo-sequentia}

# Composting

## Package
`import mods.exnihilosequentia.ZenCompostRecipe;`

## Methods
- **create(String nom)**
- **setInput(IIngredient input)** L'ingédient à insérer dans le compost.
- **setAmount(int amount)** Le niveau qui sera ajouter dans le compost.


## Addition

```zenscript
<recipetype:exnihilosequentia:compost>.create("oakleaves_compost").setInput(<item:minecraft:oak_leaves>).setAmount(100);
```

## Removal

```zenscript
<recipetype:exnihilosequentia:compost>.removeRecipe(<item:minecraft:melon_slice>);
```
