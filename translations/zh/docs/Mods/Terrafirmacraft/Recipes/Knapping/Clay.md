# Clay Knapping

## 所属包名
```zenscript
import mods.terrafirmacraft.ClayKnapping;
```

## 添加配方

```zenscript
ClayKnapping.addRecipe(String registryName, IItemStack output, String... pattern);
```

## 删除配方

```zenscript
ClayKnapping.removeRecipe(IItemStack output);
ClayKnapping.removeRecipe(String registryName);
```

## 例子
```zenscript
ClayKnapping.addRecipe("unfired_vessel", <tfc:ceramics/unfired/vessel>, " XXX ", "XXXXX", "XXXXX", "XXXXX", " XXX ");
```