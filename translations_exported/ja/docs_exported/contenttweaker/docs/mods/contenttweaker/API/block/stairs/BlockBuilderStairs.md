# BlockBuilder階段

階段を作成できる特別なブロックビルダー。 <p> 階段には、供給する必要があるテクスチャが3つあります: 上部に1つ。 下に下に下に下に下に下に下に下に下に下に下に下に下に下に下に下に下に下に下に下に下に下に下に下に下に下に下に下に下に1つと側に下に1つずつ。 デフォルトでは、これらのテクスチャは `_top`、 `_bottom` または `_side` で接尾辞としてブロック名を使用します。 ほとんどの場合と同様に、サンプル画像はデフォルトで生成されます。

このクラスは mod-id `contenttweaker` を持つ mod によって追加されました。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
mods.contenttweaker.block.stores.BlockBuilder階段
```

## 実装されたインターフェース
BlockBuilderStairsは以下のインターフェースを実装しています。 つまり、利用可能な任意のメソッドはこのクラスでも使用できます。
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweaker.block.BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder)

## メソッド
### ビルド

このビルダーが構築されると思われるものは何でも実際に構築するようCoTに指示します。

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().build(resourceLocation as String);
new BlockBuilder().withType<BlockBuilderStairs>().build("my_awesome_block");
```

| パラメータ   | タイプ  | 説明               |
| ------- | ---- | ---------------- |
| リソースの場所 | 文字列型 | このブロックを与えるリソースパス |


### withBottomTexture

下側が使用するテクスチャのパスを上書きできます。 テクスチャの名前空間がCoTまたはアドオンのいずれかの名前空間にある場合(それをサポートする)は、デフォルトでイメージが作成されます。

 戻り値: `このビルダーは、メソッドチェーンに使用されます`

戻り値の型: [mods.contenttweaker.block.store.BlockBuilderStairs.](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().withBottomTexture(bottomTexture as crafttweaker.api.util.MCResourceLocation);
```

| パラメータ    | タイプ                                                                              | 説明              |
| -------- | -------------------------------------------------------------------------------- | --------------- |
| ボトムテクスチャ | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | 底面に使用されるテクスチャー。 |



下側が使用するテクスチャのパスを上書きできます。 テクスチャの名前空間がCoTまたはアドオンのいずれかの名前空間にある場合(それをサポートする)は、デフォルトでイメージが作成されます。 ブロックの名前を入力として受け取り、終了テクスチャを返す関数を使用します。

 戻り値: `このビルダーは、メソッドチェーンに使用されます`

戻り値の型: [mods.contenttweaker.block.store.BlockBuilderStairs.](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().withBottomTexture(bottomTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderStairs>().withBottomTexture((blockName as MCResourceLocation) => new MCResourceLocation(blockName.namespace, blockName.path + "_bottom"));
```

| パラメータ    | タイプ                                                                                                                                                                                                     | 説明     |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| ボトムテクスチャ | function.Function&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | 使用する関数 |


### withSidesTexture

側面が使用するテクスチャのパスを上書きできます。 テクスチャの名前空間がCoTまたはアドオンのいずれかの名前空間にある場合(それをサポートする)は、デフォルトでイメージが作成されます。

 戻り値: `このビルダーは、メソッドチェーンに使用されます`

戻り値の型: [mods.contenttweaker.block.store.BlockBuilderStairs.](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().withSidesTexture(sidesTexture as crafttweaker.api.util.MCResourceLocation);
```

| パラメータ        | タイプ                                                                              | 説明              |
| ------------ | -------------------------------------------------------------------------------- | --------------- |
| sidesTexture | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | 側面に使用されるテクスチャー。 |



側面が使用するテクスチャのパスを上書きできます。 テクスチャの名前空間がCoTまたはアドオンのいずれかの名前空間にある場合(それをサポートする)は、デフォルトでイメージが作成されます。 ブロックの名前を入力として受け取り、終了テクスチャを返す関数を使用します。

 戻り値: `このビルダーは、メソッドチェーンに使用されます`

戻り値の型: [mods.contenttweaker.block.store.BlockBuilderStairs.](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().withSidesTexture(sidesTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderStairs>().withSidesTexture((blockName as MCResourceLocation) => new MCResourceLocation(blockName.namespace, blockName.path + "_sides"));
```

| パラメータ        | タイプ                                                                                                                                                                                                     | 説明     |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| sidesTexture | function.Function&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | 使用する関数 |


### withTopTexture

上側が使用するテクスチャのパスを上書きできます。 テクスチャの名前空間がCoTまたはアドオンのいずれかの名前空間にある場合(それをサポートする)は、デフォルトでイメージが作成されます。

 戻り値: `このビルダーは、メソッドチェーンに使用されます`

戻り値の型: [mods.contenttweaker.block.store.BlockBuilderStairs.](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().withTopTexture(topTexture as crafttweaker.api.util.MCResourceLocation);
new BlockBuilder().withType<BlockBuilderStairs>().withTopTexture(<resource:contenttweaker:my_awesome_stairs_top>);
```

| パラメータ    | タイプ                                                                              | 説明                 |
| -------- | -------------------------------------------------------------------------------- | ------------------ |
| トップテクスチャ | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | トップサイドに使用するテクスチャー。 |



上側が使用するテクスチャのパスを上書きできます。 テクスチャの名前空間がCoTまたはアドオンのいずれかの名前空間にある場合(それをサポートする)は、デフォルトでイメージが作成されます。 ブロックの名前を入力として受け取り、終了テクスチャを返す関数を使用します。

 戻り値: `このビルダーは、メソッドチェーンに使用されます`

戻り値の型: [mods.contenttweaker.block.store.BlockBuilderStairs.](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().withTopTexture(topTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
```

| パラメータ    | タイプ                                                                                                                                                                                                     | 説明     |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| トップテクスチャ | function.Function&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | 使用する関数 |



