# BlockBuilderPillarRotatable

ログと同じように回転させるブロックを作成できる特別なブロックビルダー。 <p> つまり、上下に一つのテクスチャを、側面に一つのテクスチャを持つことになります。 デフォルトでは、これらの辺の位置はブロックの名前、それに続く `_end` または `辺` です。 ほとんどの場合と同様に、サンプル画像はデフォルトで生成されます。

このクラスは mod-id `contenttweaker` を持つ mod によって追加されました。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
mods.contenttweaker.block.pillar.BlockBuilderPillarRotatable
```

## 実装されたインターフェース
BlockBuilderPillarRotatableは、次のインターフェースを実装します。 つまり、利用可能な任意のメソッドはこのクラスでも使用できます。
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweaker.block.BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder)

## メソッド
### ビルド

このビルダーが構築されると思われるものは何でも実際に構築するようCoTに指示します。

```zenscript
new BlockBuilder().withType<BlockBuilderPillarRotatable>().build(resourceLocation as String);
new BlockBuilder().withType<BlockBuilderPillarRotatable>().build("my_awesome_block");
```

| パラメータ   | タイプ  | 説明               |
| ------- | ---- | ---------------- |
| リソースの場所 | 文字列型 | このブロックを与えるリソースパス |


### withEndTexture

エンドサイド (上/下) が使用するテクスチャのパスを上書きできます。 テクスチャの名前空間がCoTまたはアドオンのいずれかの名前空間にある場合(それをサポートする)は、デフォルトでイメージが作成されます。

 戻り値: `このビルダーは、メソッドチェーンに使用されます`

戻り値の型: [mods.contenttweaker.block.pillar.BlockBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable)

```zenscript
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withEndTexture(endTexture as crafttweaker.api.util.MCResourceLocation);
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withEndTexture(<resource:contenttweaker:my_awesome_pillar_end>);
```

| パラメータ      | タイプ                                                                              | 説明              |
| ---------- | -------------------------------------------------------------------------------- | --------------- |
| endTexture | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | エンド面に使用するテクスチャ。 |



エンドサイド (上/下) が使用するテクスチャのパスを上書きできます。 テクスチャの名前空間がCoTまたはアドオンのいずれかの名前空間にある場合(それをサポートする)は、デフォルトでイメージが作成されます。 ブロックの名前を入力として受け取り、終了テクスチャを返す関数を使用します。

 戻り値: `このビルダーは、メソッドチェーンに使用されます`

戻り値の型: [mods.contenttweaker.block.pillar.BlockBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable)

```zenscript
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withEndTexture(endTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withEndTexture(((blockName as MCResourceLocation) => new MCResourceLocation(blockName.namespace, blockName.path + "_end"));
```

| パラメータ      | タイプ                                                                                                                                                                                                     | 説明     |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| endTexture | function.Function&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | 使用する関数 |


### withSideTexture

辺（上下以外のすべて）が使用するテクスチャのパスを上書きできます。 テクスチャの名前空間がCoTまたはアドオンのいずれかの名前空間にある場合(それをサポートする)は、デフォルトでイメージが作成されます。

 戻り値: `このビルダーは、メソッドチェーンに使用されます`

戻り値の型: [mods.contenttweaker.block.pillar.BlockBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable)

```zenscript
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withSideTexture(sidesTexture as crafttweaker.api.util.MCResourceLocation);
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withSideTexture(<resource:contenttweaker:my_awesome_pillar_side>);
```

| パラメータ        | タイプ                                                                              | 説明            |
| ------------ | -------------------------------------------------------------------------------- | ------------- |
| sidesTexture | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | 側面に使用するテクスチャ。 |



辺（上下以外のすべて）が使用するテクスチャのパスを上書きできます。 テクスチャの名前空間がCoTまたはアドオンのいずれかの名前空間にある場合(それをサポートする)は、デフォルトでイメージが作成されます。 ブロックの名前を入力として受け取り、終了テクスチャを返す関数を使用します。

 戻り値: `このビルダーは、メソッドチェーンに使用されます`

戻り値の型: [mods.contenttweaker.block.pillar.BlockBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable)

```zenscript
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withSideTexture(sidesTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withSideTexture((blockName as RourceLocation) => new MCResourceLocation(blockName.namespace, blockName.path + "_sides"));
```

| パラメータ        | タイプ                                                                                                                                                                                                     | 説明     |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| sidesTexture | function.Function&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | 使用する関数 |



