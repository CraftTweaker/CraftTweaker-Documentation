# Fermentation Station

### 导入

```zenscript
import mods.industrialforegoing.FermentationStation;
```

### 添加

The first and second parameters are the input and output fluids respectively.

The example shown below turns 1mB of Lava into 1mB of Blazing Pyrotheum:

```zenscript
// FermentationStation.add(ILiquidStack fluidInput, ILiquidStack fluidOutput);

FermentationStation.add(<liquid:lava> * 1, <liquid:pyrotheum> * 1);
```

### 移除配方

Put the input fluid in the parameter to remove the recipe for that specific fluid, has to match the fluid amount in the recipe.

The example shown below removes the recipe for 1mB of Lava:

```zenscript
// FermentationStation.remove(ILiquidStack fluidInput);

FermentationStation.remove(<liquid:lava> * 1);
```
