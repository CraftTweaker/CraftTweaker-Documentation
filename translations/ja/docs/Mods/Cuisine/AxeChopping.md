# 斧チョッピング

## 在庫状況

何かをする前に、アックスチョッピングが有効かどうかを確認する必要があります。

```zenscript
import mods.cuisine.AxeChopping;

if (AXeChopping.isEnabled()) {
    // do stop
} else {
    print("Axe Chopping is disabled, skipping');
}
```

## 加算

```zenscript
import mods.cuisine.AxeChopping;

AxeChopping.add(IItemStack input, IItemStack output);

AxeChopping.add(<item:minecraft:dirt>, <item:minecraft:diamond>);

// 必要に応じて、鉱石辞書を使用することも可能です。
AxeChopping.add(IOreEntry input, IItemStack output);

AxeChopping.add(<ore:cobblestone>, <item:minecraft:diamond>);
```

## 削除

```zenscript
import mods.cuisine.AxeChopping;

// Remove by input.
AxeChopping.remove(IItemStack input);

AxeChopping.remove(<item:minecraft:log>);

// 出力による削除。
AxeChopping.removeByOutput(IItemStack output);

AxeChopping.removeByOutput(<item:minecraft:plank>);

// 識別子で削除します。
AxeChopping.remove(String id);

AxeChopping.remove("recipe_name");

// すべてを削除!
AxeChopping.removeAll();
```

## Misc.

```zenscript
import mods.cuisine.AxeChopping;

val defaultPlanksOutput as int = AxeChopping.getDefaultPlanksOutput();

val defaultStickOutput as int = AxeChopping.getDefaultStickOutput();
```