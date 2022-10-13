### 类

```zenscript
import mods.arcanearchives.GCT;
```

#### 使用方式

```zenscript
void addRecipe(
  string name,         // 配方名称
  IItemStack output,   // 输出 itemstack
  IIngredient[] inputs // 输入的材料数组
);
```


---


```zenscript
void removeRecipe(
  IItemStack output // 要移除的输出 itemstack（数量必须匹配）
);
```


---


```zenscript
void replaceRecipe(
  string name,         // 配方名称（必须已存在）
  IItemStack output,   // 输出 itemstack
  IIngredient[] inputs // 输入的材料数组
);
```


---


### 示例

```zenscript
import mods.arcanearchives.GCT;

// 移除原来的辉耀晶粉配方
GCT.removeRecipe(<arcanearchives:radiant_dust>*2);

// 添加新的辉耀晶粉配方
GCT.addRecipe("radiant_dust", <arcanearchives:radiant_dust>*2, [<minecraft:flint>, <arcanearchives:raw_quartz>]);

// 将已雕琢的辉耀石英配方替换，不破坏宝石切割台（GCT）画面
GCT.replaceRecipe("shaped_quartz", <arcanearchives:shaped_quartz>, [<arcanearchives:raw_quartz>*10]);
```
