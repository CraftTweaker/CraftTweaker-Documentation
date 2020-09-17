# 粘土ナイフ

## パッケージ
```zenscript
import mods.terrafirmacraft.ClayKnapping;ClayKnapping;
```

## 追加

```zenscript
ClayKnapping.addRecipe(レジストリ名の文字列、IItemStack output, String... pattern);
```

## 削除

```zenscript
ClayNnapping.removeRecipe(IItemStack output);
ClayNnapping.removeRecipe(String registryName);
```

## 例
```zenscript
ClayKnapping.addRecipe("unfired_vessel", <tfc:ceramics/unfired/vessel>, " XXX ", "XXXXX", "XXXXX", "XXXXX", " XXX ");
```