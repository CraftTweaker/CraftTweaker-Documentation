# Fluidos XP

XP Fluids se utilizan en PneumaticCraft: Represurizado por la interfaz aérea, un poderoso bloque que puede interactuar de forma remota con un jugador vinculado. Los Fluidos de XP bombeados en la interfaz aérea se convierten en niveles de experiencia del jugador, y los Fluidos de XP se extraen de la experiencia del jugador.

Por defecto, los siguientes fluidos son reconocidos por la interfaz aérea:

* Jugo de XP (EnderIO, Cyclic, Openblocks)
* Esencia de conocimiento (expansión térmica)
* Esencia de Mobs (Industrial Foregoing)

Este paquete permite que otros fluidos arbitrarios sean usados por la interfaz aérea como fluidos de XP, o que los fluidos XP existentes sean desregulados.

## Llamando

Puedes llamar al paquete de fluidos de XP usando `mods.pneumaticcraft.xpfluid`.

## Eliminando

Esta función deshace el [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) `fluido`:

```zenscript
mods.pneumaticcraft.xpfluid.removeXPFluid(ILiquidStack fluid);
// Ejemplo
mods.pneumaticcraft.xpfluid.removeXPFluid(<liquid:xpjuice>);
```

Esta función desvía *todos* fluidos XP conocidos:

```zenscript
mods.pneumaticcraft.xpfluid.removeAllXPFluids();
```

## Agregando

Esta función puede utilizarse para registrar fluidos como fluidos XP:

```zenscript
// Registrar un líquido como un fluido XP. xpRatio define la cantidad de XP del jugador por millonario de fluido.
mods.pneumaticcraft.xpfluid.addXPFluid(ILiquidStack fluid, doble ratio);

// Ejemplo: registrar LPG como un fluido XP de 10 XP por mB
mods.pneumaticcraft.xpfluid.addXPFluid(<liquid:lpg>, 10);
```