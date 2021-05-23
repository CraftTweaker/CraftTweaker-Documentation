::requiredMod[Ex Nihilo: Sequentia]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/ex-nihilo-sequentia}

# Hammering

## Package
`import mods.exnihilosequentia.ZenHammerRecipe;`

## Methods
- **create(String nom)**
- **setInput(IIngrédient bloc)** Le bloc qui a besoin d'être cassé.
- **addOutput(IItemStack drop)** L'élément que le bloc drop lorsqu'il est cassé.
- **addOutput(IItemStack drop, float chance)** l'autre élément que le bloc lâchent quand il est cassé et sa chance de le drop.


## Addition

```zenscript
<recipetype:exnihilosequentia:hammer>.create("hammer_test").setInput(<item:minecraft:cobblestone>).addOutput(<item:minecraft:gravel>).addOutput(<item:minecraft:diamond>, 0.01);
```

## Removal

```zenscript
<recipetype:exnihilosequentia:hammer>.removeAll();
```
