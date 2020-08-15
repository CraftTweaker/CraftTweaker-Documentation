# 冷却器

冷却器管理器不属于任何特定机器，而是管理所有其他机器的冷却值。  
例如，Enervation Dynamo使用冷却值，就像Magmatic Dynamo提供的 Ientropic Reservoir 扩充一样。

## 导入软件包

To shorten method calls you can [import](/AdvancedFunctions/Import/) the package like so:

```zenscript
导入 mods.thermalext.Coolant;
```

## 添加冷却器

用它来注册一个新的冷却器。  
冷却频率必须是非负的，冷却系数必须介于1-100之间(包括在内)。  
如果不符合这些范围，冷却器将不会注册！

```zenscript
//mods.thermalreplos.Coolant.addCoolant(ILiquidStack fluid, int colantRf, int colantFactor);
mods.thermalex.Coolant.addCoolant(<liquid:lava>, 0, 1);


///These are two of the value TE uses by default:
/mods. hermalext.Coolant.addCoolant(<liquid:water>, 250000, 20);
//mods.thermalext.Coolant.addCoolant(<liquid:cryotheum>, 30000, 60);
```

## 移除冷却器

用它来取消管理器中现有的冷却器。

```zenscript
//mods.thermalext.Coolant.removeCoolant(ILiquidStack fluid);
mods.thermalext.Coolant.removeCoolant(<liquid:water>);
```