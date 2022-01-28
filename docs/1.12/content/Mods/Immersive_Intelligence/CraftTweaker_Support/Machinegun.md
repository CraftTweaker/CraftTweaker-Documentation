::requiredMod[Immersive Intelligence]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-intelligence}

# Machinegun

The `Machinegun` package can be used to tweak coolant fluids accepted by the II Machinegun.

## Importing the Package

```zenscript
import mods.immersiveintelligence.Machinegun;
```

## Adding/Setting a Coolant

### Parameters

| Type                                                  | Name    | Required |
|-------------------------------------------------------|---------|----------|
| [ILiquidStack](/Vanilla/Variable_Types/ILiquidStack/) | Coolant | Yes      |
| int                                                   | Amount  | Yes      |

### Syntax

```zenscript
mods.immersiveintelligence.Machinegun.addCoolant(ILiquidStack fuelEntry, int amountPerUse);
mods.immersiveintelligence.Machinegun.setCoolAmount(ILiquidStack fuelEntry, int amountPerUse);
```

The methods accept the same parameters, but they serve different purpose.  
To register a new Coolant use `addCoolant`, to change the value for an existing one use `setCoolAmount`.

### Example

```zenscript
mods.immersiveintelligence.Machinegun.addCoolant(<fluid:milk>, 20);
mods.immersiveintelligence.Machinegun.setCoolAmount(<fluid:water>, 5);
```

## Removing a Coolant

### Parameters

| Type                                                  | Name       | Required |
|-------------------------------------------------------|------------|----------|
| [ILiquidStack](/Vanilla/Variable_Types/ILiquidStack/) | Coolant | Yes      |

### Syntax

```zenscript
mods.immersiveintelligence.Machinegun.removeCoolant(ILiquidStack fuelEntry;
```

### Example

```zenscript
mods.immersiveintelligence.Machinegun.removeCoolant(<fluid:water>);
```