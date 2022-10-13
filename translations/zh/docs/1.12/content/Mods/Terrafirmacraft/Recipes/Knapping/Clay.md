# Clay Knapping

## 所属包
```zenscript
import mods.terrafirmacraft.ClayKnapping;
```

## 添加

```zenscript
ClayKnapping.addRecipe(String registryName, IItemStack output, String... pattern);
```

## 移除

```zenscript
ClayKnapping.removeRecipe(IItemStack output);
ClayKnapping.removeRecipe(String registryName);
```

## 例子
```zenscript
ClayKnapping.addRecipe("unfired_vessel", <tfc:ceramics/unfired/vessel>, " XXX ", "XXXXX", "XXXXX", "XXXXX", " XXX ");
```