# 作曲家
## 所属包名
`导入 mods.gardenstuff。编程；`

## 使用方式
- **[IItemStack](/Vanilla/Liquids/IItemStack/) 项目** 即将合成的项目。
- **整数处理时间** 基线机中每个刻度生成的能量。
- **[IOreedictEnter](/Vanilla/OreDict/IOreDictEntry) oredictKey** 一个oreDictionary 条目。

## 添加可编译项
```zenscript
mods.gardenstuff。CompostBin.add(ItemStack item, int processTime);

mods.gardenstuff。CompostBin.add(<minecraft:carrot>, 150);
```

## 添加可编译的oredictionary 条目
```zenscript
mods.gardenstuff。CompostBin.add(oredictKey, int processTime);

mods.gardenstuff。CompostBin.add(<ore:cropCarrot>, 150);
```
