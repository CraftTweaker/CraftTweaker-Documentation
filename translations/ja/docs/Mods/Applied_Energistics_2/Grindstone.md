# Grindstone

### インポート中

```zenscript
import mods.appledenergistics2.Grinder;
```

### 追加中

```zenscript
Grinder.addRecipe(IItemStack 出力, IItemStack 入力, int turns, @Optional IItemStack secondary1Output, @Optional float secondary1Chance, @Optional IItemStack secondary2Output, @Optional float secondary2Chance, @Optional float secondary2Chance);

Grinder. ddRecipe( 

 ,<minecraft:sapling>, <minecraft:leaves>, 4, <minecraft:sapling:5>, 0.3);
```

### 削除中

```zenscript
Grinder.removeRecipe(IItemStack input);

Grinder.removeRecipe(<minecraft:quartz_ore>);
```