::requiredMod[Ex Nihilo: Sequentia]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/ex-nihilo-sequentia}

# Heating Sources

## Package
`import mods.exnihilosequentia.ZenHeatRecipe;`

## Methods
- **create(String nom)**
- **setBlock(MCBlock input)** Le bloc à ajouter comme source de chaleur.
- **setAmount(int amount)** La force de la source de chaleur.



## Addition

```zenscript
<recipetype:exnihilosequentia:heat>.create("heat_test").setBlock(<block:minecraft:cobblestone>).setAmount(100);
```

## Removal

```zenscript
<recipetype:exnihilosequentia:heat>.removeAll();
```
