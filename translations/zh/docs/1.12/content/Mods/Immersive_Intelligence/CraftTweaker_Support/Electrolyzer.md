::requiredMod[Immersive Intelligence]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-intelligence}

# 电解机（Electrolyzer）

The `Electrolyzer` package can be used to modify the Immersive Intelligence Electrolyzer recipes.

## Importing the Package

```zenscript
import mods.immersiveintelligence.Electrolyzer;
```

## Adding Recipes

### Parameters

| 类型                                             | 名称             | Required |
| ---------------------------------------------- | -------------- | -------- |
| [ILiquidStack](/Vanilla/Liquids/ILiquidstack/) | Main Input     | Yes      |
| [ILiquidStack](/Vanilla/Liquids/ILiquidstack/) | Compound Input | Yes      |
| int                                            | Mold           | Yes      |
| int                                            | Energy         | Yes      |
| [ILiquidStack](/Vanilla/Liquids/ILiquidstack/) | Time           | No       |

### 语句

```zenscript
mods.immersiveintelligence.Electrolyzer.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput1, int energy, int time, @Optional ILiquidStack fluidOutput2);
```

### 例子

```zenscript
mods.immersiveintelligence.Electrolyzer.addRecipe(<liquid:water>*4,<liquid:lava>*4,123,200,<liquid:hydrofluoric_acid>*8);
```

## Removing Recipes

### Parameters

| 类型                                             | 名称 | Required |
| ---------------------------------------------- | -- | -------- |
| [ILiquidStack](/Vanilla/Liquids/ILiquidstack/) | 输出 | Yes      |

### 语句

```zenscript
mods.immersiveintelligence.Electrolyzer.removeRecipe(ILiquidStack output);
```

### 例子

```zenscript
mods.immersiveintelligence.Electrolyzer.removeRecipe(<liquid:water>);
```