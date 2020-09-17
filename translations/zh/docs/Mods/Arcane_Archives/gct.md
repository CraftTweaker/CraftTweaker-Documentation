### 所属类名

```zenscript
导入 mods.arcanearchives.GCT;
```

#### 可用方法

```zenscript
无效 addRecipe(
  字符串名称, // 配方名称
  IItemStack 输出, // 输出为项目堆栈
  IIngredient[…]输入// 输入为成份数组
；
```

* * *

```zenscript
无效的 removeRecipe(
  IItemStack 输出 // 要删除的输出项目堆栈(数量必须匹配)
)；
```

* * *

```zenscript
无效的替换累积(
  字符串名称 // 配方名称 (必须已存在)
  IItemStack 输出， // 输出为项目堆栈
  IIngredient[…]输入// 输入为成份数组
；
```

* * *

### 例子

```zenscript
导入 mods.arcanearchives.GCT;

// 移除辐射粉尘的配方
GCT.removeRecipe(<arcanearchives:radiant_dust>*2);

// 添加新的辐射粉尘配方
GCT。 ddRecipe("radiant_dust", <arcanearchives:radiant_dust>*2, [<minecraft:flint>, <arcanearchives:raw_quartz>]);

// 替换形状的辐射方块的方块，无需对GCT 屏幕进行排序
GCT。 eplaceRecipe("shaped_quartz", <arcanearchives:shaped_quartz>, [<arcanearchives:raw_quartz>*10]);
```