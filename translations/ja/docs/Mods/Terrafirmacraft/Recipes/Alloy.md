# Alloy

## パッケージ
```zenscript
import mods.terrafirmacraft.Alloy;
import mods.terrafirmacraft.AlloyRecipeBuilder;Alloy;
import mods.terrafirmacraft.AlloyRecipeBuilder;
```

## 追加
- 合金レシピを操作するために、レシピビルダーが提供されます。
```zenscript
AlloyRecipeBuilder builder = Alloy.addAlloy(String metal);
builder.addMetal(String input, double min, double max);
builder.build();
```

## 削除

```zenscript
Alloy.removeAlloy(String metal);
```

## スクリプトの例
- TFC金属の完全な参照については、 [Metal](/Mods/Terrafirmacraft/Metal) を参照してください。
```zenscript
Alloy.addAlloy("BRONZE").addMetal("COPPER", 0.88, 0.92).addMetal("TIN", 0.08, 0.12).build();
Alloy.addAlloy("BISMUTH_BRONZE").addMetal("COPPER", 0.5, 0.65).addMetal("BISMUTH", 0.1, 0.2).addMetal("zinc", 0.2,0.3).build();
```