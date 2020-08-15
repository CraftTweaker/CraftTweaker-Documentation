# Clay Knapping

## パッケージ
```zenscript
import mods.terrafirmacraft.ClayKnapping;ClayKnapping;
```

## 追加

```zenscript
ClayKnapping.addRecipe(String registryName, IItemStack output, String... pattern);
```

## 削除

```zenscript
ClayKnapping.removeRecipe(IItemStack output);
ClayKnapping.removeRecipe(String registryName);
```

## 例
```zenscript
ClayKnapping.addRecipe("unfired_vessel", <tfc:ceramics/unfired/vessel>, " XXX ", "XXXXX", "XXXXX", "XXXXX", " XXX ");
```