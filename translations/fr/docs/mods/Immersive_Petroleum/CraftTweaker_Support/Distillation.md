# Distillation

## Enlever

| Nom               | Type de texte        |
| ----------------- | -------------------- |
| Nom de la recette | Chaîne de caractères |

Exemple:
```ZenScript
// mods.immersivepetroleum.DistillationTower.remove(String recipeName);

mods.immersivepetroleum.DistillationTower.remove("oilcracking");
```

## Retirer tout

| Nom | Type de texte |
| --- | ------------- |
|     |               |

Exemple:
```ZenScript
mods.immersivepetroleum.DistillationTower.removeAll();
```

# Constructeur

## constructeur

| Nom | Type de texte |
| --- | ------------- |
|     |               |

Exemple:
```zenscript
// new mods.immersivepetroleum.DistillationBuilder();

new mods.immersivepetroleum.DistillationBuilder();
```

## setOutputFluid

| Nom              | Type de texte                               |
| ---------------- | ------------------------------------------- |
| Fluide de sortie | [Fluidstack](/Vanilla/Liquids/IFluidStack/) |

Exemple:
```zenscript
// builderInstance.setOutputFluids(IFluidStack[] fluidOutputs);

builderInstance.setOutputFluids([<fluid:minecraft:water> * 1]);
```

## addByproduct(IItemStack item, int chance)

| Nom     | Type de texte                                     |
| ------- | ------------------------------------------------- |
| Élément | [format@@0 ItemStack](/Vanilla/Items/IItemStack/) |
| Chance  | Nombre entier (0 - 100)                           |

Exemple:
```zenscript
// builderInstance.addByproduct(IItemStack item, int chance);

builderInstance.addByproduct(<item:minecraft:cobblestone>, 50);
```

## addByproduct(IItemStack item, double chance)

| Nom     | Type de texte                                     |
| ------- | ------------------------------------------------- |
| Élément | [format@@0 ItemStack](/Vanilla/Items/IItemStack/) |
| Chance  | Double (0.0 - 1.0)                                |

Exemple:
```zenscript
// builderInstance.addByproduct(IItemStack item, double chance);

builderInstance.addByproduct(<item:minecraft:stone>, 0.25);
```

## setEnergyAndTime

| Nom     | Type de texte |
| ------- | ------------- |
| Flux/t  | Entier (>=1)  |
| Billets | Entier (>=1)  |

Exemple:
```zenscript
// builderInstance.setEnergyAndTime(int fluxPerTick, int ticks);

builderInstance.setEnergyAndTime(1024, 1);
```

## setÉnergie

| Nom         | Type de texte |
| ----------- | ------------- |
| FluxPerTick | Entier (>=1)  |

Exemple:
```zenscript
// builderInstance.setEnergy(int fluxPerTick);

builderInstance.setEnergy(1024);
```

## setTime

| Nom     | Type de texte |
| ------- | ------------- |
| Billets | Entier (>=1)  |

Exemple:
```zenscript
// builderInstance.setTime(int ticks);

builderInstance.setTime(1);
```

## construire

| Nom               | Type de texte        |
| ----------------- | -------------------- |
| Nom de la recette | Chaîne de caractères |

Exemple:
```zenscript
// builderInstance.build(String recipeName);

builderInstance.build("example_name");
```

---

Copier/Coller les exemples:
```zenscript
new DistillationBuilder()
    .setOutputFluids([<fluid:minecraft:water> * 1]) // Array of output fluids
    .setInputFluid(<tag:minecraft:lava>, 500) // Input Fluid Tag and the ammount of fluid in mB
    .addByproduct(<item:minecraft:cobblestone>, 50) // Chance using integer (0 - 100)
    .addByproduct(<item:minecraft:stone>, 0.25) // Chance using double (0.0 - 1.0)
    .addByproduct(<item:minecraft:obsidian>, 0.007) // Integer is for convenience, using double gives more control
    .setEnergyAndTime(1024, 1) // Can be done individualy with setEnergy(int) and setTime(int)
    .build("lava_to_solids");

new DistillationBuilder()
    .setOutputFluids([<fluid:minecraft:water> * 500])
    .setInputFluid(<tag:forge:concrete>, 500)
    .addByproduct(<item:minecraft:gravel>, 0.5)
    .addByproduct(<item:minecraft:sand>, 0.25)
    .addByproduct(<item:minecraft:sand>, 0.25)
    .addByproduct(<item:minecraft:clay_ball>, 0.125)
    .setEnergy(2048) // 2048 is the Default for Energy.
    .setTime(1) // 1 est la valeur par défaut pour le temps.
    .build("béton_reversal");
```
