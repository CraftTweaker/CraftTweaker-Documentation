# Steam 动态

## 导入软件包

To shorten method calls you can [import](/AdvancedFunctions/Import/) the package like so:

```zenscript
导入 mods.thermalext.SteamDynamo;
```

## 添加燃料

```zenscript
//mods.thermalext.SteamDynamo.addFuel(StemStack, int energy);
mods.thermalext.SteamDynamo.addFuel(<minecraft:stick>, 13);
```

## 移除燃料

```zenscript
//mods.thermalext.SteamDynamo.removeFuel(StemStack stack);
mods.thermalabov.SteamDynamo.removeFuel(<minecraft:stick>);
```