# Distillation

## entfernen

| Name       | Type   |
| ---------- | ------ |
| Rezeptname | String |

Beispiel:
```ZenScript
// mods.immersivepetroleum.DistillationTower.remove(String recipeName);

mods.immersivepetroleum.DestillationTower.remove("oilcracking");
```

## alle entfernen

| Name | Type |
| ---- | ---- |
|      |      |

Beispiel:
```ZenScript
mods.immersivepetroleum.DistillationTower.removeAll();
```

# Erbauer

## Konstrukteur

| Name | Type |
| ---- | ---- |
|      |      |

Beispiel:
```zenscript
// new mods.immersivepetroleum.DistillationBuilder();

new mods.immersivepetroleum.DistillationBuilder();
```

## setOutputFluid

| Name                | Type                                        |
| ------------------- | ------------------------------------------- |
| Ausgangsflüssigkeit | [Fluidstack](/Vanilla/Liquids/IFluidStack/) |

Beispiel:
```zenscript
// builderInstance.setOutputFluids(IFluidStack[] fluidOutputs);

builderInstance.setOutputFluids([<fluid:minecraft:water> * 1]);
```

## addByproduct(IItemStack Item, int Chance)

| Name    | Type                                        |
| ------- | ------------------------------------------- |
| Artikel | [Artikel-Stack](/Vanilla/Items/IItemStack/) |
| Hannes  | Ganzzahl (0 - 100)                          |

Beispiel:
```zenscript
// builderInstance.addByproduct(IItemStack item, int chance);

builderInstance.addByproduct(<item:minecraft:cobblestone>, 50);
```

## addByproduct(IItemStack Artikel, doppelte Chance)

| Name    | Type                                        |
| ------- | ------------------------------------------- |
| Artikel | [Artikel-Stack](/Vanilla/Items/IItemStack/) |
| Hannes  | Doppelt (0.0 - 1.0)                         |

Beispiel:
```zenscript
// builderInstance.addByproduct(IItemStack item, double chance);

builderInstance.addByproduct(<item:minecraft:stone>, 0.25);
```

## setEnergyAndTime

| Name   | Type           |
| ------ | -------------- |
| Flux/t | Ganzzahl (>=1) |
| Ticks  | Ganzzahl (>=1) |

Beispiel:
```zenscript
// builderInstance.setEnergyAndTime(int fluxPerTick, int Ticks);

builderInstance.setEnergyAndTime(1024, 1);
```

## setEnergy

| Name        | Type           |
| ----------- | -------------- |
| FluxPerTick | Ganzzahl (>=1) |

Beispiel:
```zenscript
// builderInstance.setEnergy(int fluxPerTick);

builderInstance.setEnergy(1024);
```

## setTime

| Name  | Type           |
| ----- | -------------- |
| Ticks | Ganzzahl (>=1) |

Beispiel:
```zenscript
// builderInstance.setTime(int Ticks);

builderInstance.setTime(1);
```

## bauen

| Name       | Type   |
| ---------- | ------ |
| Rezeptname | String |

Beispiel:
```zenscript
// builderInstance.build(String recipeName);

builderInstance.build("example_name");
```

---

Beispiele kopieren/einfügen:
```zenscript
new DistillationBuilder()
    .setOutputFluids([<fluid:minecraft:water> * 1]) // Anordnung von Ausgabeflüssigkeiten
    . etInputFluid(<tag:minecraft:lava>, 500) // Input Fluid Tag und die Menge an Flüssigkeiten in mB
    . ddByproduct(<item:minecraft:cobblestone>, 50) // Chance mit Integer (0 - 100)
    .addByproduct(<item:minecraft:stone>, 0.25) // Chance mit double (0. - 1.0)
    .addByproduct(<item:minecraft:obsidian>, 0. 07) // Integer ist für die Bequemlichkeit, mit doppelter gibt mehr Kontrolle
    . etEnergyAndTime(1024, 1) // Kann individuell mit setEnergy(int) und setTime(int) durchgeführt werden
    . uild("lava_to_solids");

new DistillationBuilder()
    . etOutputFluids([<fluid:minecraft:water> * 500])
    .setInputFluid(<tag:forge:concrete>, 500)
    . ddByproduct(<item:minecraft:gravel>, 0.5)
    .addByproduct(<item:minecraft:sand>, 0.25)
    .addByproduct(<item:minecraft:sand>, 0. 5)
    .addByproduct(<item:minecraft:clay_ball>, 0.125)
    .setEnergy(2048) // 2048 ist der Standard für Energie.
    .setTime(1) // 1 ist der Standard für die Zeit.
    .build("concrete_reversal");
```
