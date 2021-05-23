::requiredMod[Ex Nihilo: Sequentia]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/ex-nihilo-sequentia}

# Sieving

## Package
`import mods.exnihilosequentia.ZenSieveRecipe;`

## Methods
- **create(String nom)**
- **setInput(IIngredient input)** L'ingédient à insérer dans le compost.
- **addDrop(IItemStack drop)** l'item qui est drop du bloc.
- **addRoll(String mesh, float chance)** le type de maille et les chances de drop de l'item.
- **setWaterlogged()** si le tamis doit être sous l'eau pour la recette.


## Addition

```zenscript
<recipetype:exnihilosequentia:sieve>.create("sieve_test").setInput(<item:minecraft:cobblestone>).addDrop(<item:minecraft:netherite_ingot>).addRoll("diamond", 0.01).addRoll("string", 1.0);
```

## Removal

```zenscript
<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:exnihilosequentia:piece_iron>);
```
