# JAOPCA

[JAOPCA](https://minecraft.curseforge.com/projects/jaopca) (只需一个矿石处理兼容性尝试) 是一个旨在将矿石处理兼容性添加到许多模式的模组。

## 导入相关包

如果你想要缩短你的方法调用，你可以导入包。  
你可以这样做。

```zenscript
导入 mods.jaopca.JAOPCA;
```

## 方法

此软件包是您的 JAOPCA 的切入点。 它提供了检查和获取 [Oreentry](/Mods/JAOPCA/OreEntry/) 对象的手段。 检查相应页面以获取更多信息，但简而言之，它们是材料名称(e)。 。"金") 然后可以有条目，例如块、粉尘和所有。

- 条目：例如，"nugget", "dust", "molten", ... (check [here](/Mods/JAOPCA/RegisteredEntries/) for a list of them all)
- [深入](/Mods/JAOPCA/OreEntry/): 例如："钻石", "Coal", "Redstone", ...
- OreType: e.g. "InGOT", "GEM", "DUST"

### 检查条目是否存在

如果存在具有给定名称的条目则返回 `true`

```zenscript
//mods.jaopca.JAOPCA.containsEntry(入口名称);
mods.jaopca.JAOPCA.containsEntry("nugget");
```

### 获取一个 Oreentre

返回给定名称的 [Oreentre](/Mods/JAOPCA/OreEntry/) 或 `null ，如果它不存在，则返回`。 *小心：大多数材料都是资本化的，是的，套装很重要！*

```zenscript
//mods.jaopca.JAOPCA.getOre(oreName);
mods.jaopca.JAOPCA.getOre("Coal");
```

### 获取所有的 Oreentres 条目以获取一个条目

返回所有 [Oreentry](/Mods/JAOPCA/OreEntry/) 对象的列表，这些对象已经注册了给定条目。

```zenscript
//mods.jaopca.JAOPCA.getOresForEntry(入口名称);
mods.jaopca.JAOPCA.getOresForEntry("nugget");
```

### 获取所有的 Oreentres 条目以获取一个条目

返回给定类型的所有 [Oreentry](/Mods/JAOPCA/OreEntry/) 对象的列表。

```zenscript
//mods.jaopca.JAOPCA.getOresForType(oreType);
mods.jaopca.JAOPCA.getOresForType("GEM");
```

### 获取所有注册的 Oreentes

返回所有注册的 [Oreentry](/Mods/JAOPCA/OreEntry/) 对象的列表。

```zenscript
mods.jaopca.JAOPCA.getAllOres();
```