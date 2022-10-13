::requiredMod[Immersive Intelligence]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-intelligence}

# Lighter Fuels

The `LighterFuels` package can be used to modify the Immersive Intelligence Engineer's Lighter Fuels.

## Importing the Package

```zenscript
import mods.immersiveintelligence.LighterFuels;
```

## Adding Fuels

### Parameters

| 类型                                             | 名称             | Required |
| ---------------------------------------------- | -------------- | -------- |
| [ILiquidstack](/Vanilla/Liquids/ILiquidstack/) | Fuel Entry     | Yes      |
| int                                            | Amount Per Use | Yes      |

### 语句

```zenscript
mods.immersiveintelligence.LighterFuels.addFuel(ILiquidStack fuelEntry, int amountPerUse);
```

### 例子

```zenscript
mods.immersiveintelligence.LighterFuels.addFuel(<liquid:water>, 463);
```

## Removing Fuels

### Parameters

| 类型                                           | 名称         | Required |
| -------------------------------------------- | ---------- | -------- |
| [ILiquidStack](/Vanilla/Items/ILiquidstack/) | Fuel Entry | Yes      |

### 语句

```zenscript
mods.immersiveintelligence.LighterFuels.removeFuel(ILiquidStack fuelEntry);
```

### 例子

```zenscript
mods.immersiveintelligence.LighterFuels.removeFuel(<liquid:water>);
```