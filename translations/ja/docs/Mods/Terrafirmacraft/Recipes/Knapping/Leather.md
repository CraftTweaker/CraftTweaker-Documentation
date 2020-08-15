# レザーナイフ

## パッケージ
```zenscript
import mods.terrafirmacraft.leatherKnapping;
```

## 追加

```zenscript
leatherKnapping.addRecipe(レジストリ名の文字列、IItemStack output, String... pattern);
```

## 削除

```zenscript
leatherKnapping.removeRecipe(IItemStack output);
leatherKnapping.removeRecipe(String registryName);
```

## 例
```zenscript
// iver recipe
leatherNapping.addRecipe("recipe", <tfc:quiver>, " XXXXXX", "X XXX", "X XXX", "X XXX", "X XXX", "XXXX");
```