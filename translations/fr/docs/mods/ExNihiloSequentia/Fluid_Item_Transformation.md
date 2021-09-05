::requiredMod[Ex Nihilo: Sequentia]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/ex-nihilo-sequentia}

# Transformation d'objet dans fluide

## Package
`import mods.exnihilosequentia.ZenFluidItemRecipe;`

## Methods
- **create(String nom)**
- **setFluidInTank(IFluidStack fluidInTank)** Le fluide dans le réservoir.
- **setInputItem(IIngredient inputItem)** L'ingédient à insérer dans le réservoire.
- **setResult(IItemStack resultat)** Le résultat de la recette.


## Addition

```zenscript
<recipetype:exnihilosequentia:fluid_item>.create("fluid_item_test").setFluidInTank(<fluid:minecraft:water>).setInputItem(<item:minecraft:diamond>).setResult(<item:minecraft:dirt>);
```

## Removal

```zenscript
<recipetype:exnihilosequentia:fluid_item>.removeRecipe(<item:minecraft:brain_coral_block>);
```
