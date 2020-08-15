# レアアース抽出器

## パッケージ

```zenscript
import mods.ic2.RareEarthExtractor;
```

## 方法

- **float の値**
- **[IItemStack](/Vanilla/Items/IItemStack/)... 入力** 入力に複数の指定を行うことができます。 その場合、指定されたすべてのアイテムは同じ値を与えます。

### レアアースエントリーを追加

```zenscript
mods.ic2.RareEarthExtractor.addRareEarthEntries(float value, IItemStack... input);

mods.ic2.RareEarthExtractor.addRareEarthEntries(1.0F, <minecraft:bedrock>, <minecraft:iron_block>);
```