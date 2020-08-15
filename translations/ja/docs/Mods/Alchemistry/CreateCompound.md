# 複合を作成
カスタムAlchemistry化合物生成

# パッケージ
```zenscript
mods.alchemistry.Util.createCompoundUtil.createCompound
```

## Loader
これは `#loader alchemistry` でロードする必要があります。

## メソッド
- **int meta** meta for new Compund
- **文字列名** 新しいコンパウンドの名前
- **int red** compound red shade, RGB
- **int グリーン** 化合物グリーンシェーディング, RGB
- **int blue** compound blue shade, RGB
- **Object[][]** 各ブラケットには、コンマとコンパウンドでの使用量が異なる要素が格納されています。

## 作成
```zenscript
mods.alchemistry.Atomizermods.alchemistry.Util.createCompound(int meta, String name, int red, int green, int blue, Object[][] components);

mods.alchemistry.Util.createCompound(1000, "vibranium sufide", 20, 69, 185,
[["vibranium", 1],
 ["sulfur", 3]]);Util.createCompound(1000, "vibranium sofide", 20, 69, 185,
[["vibranium", 1],
 ["sulfur", 3]]);
```

## メモ
- 小文字の名前を使用してください
- ファイルの先頭に '#loader alchemistry' 行が必要です。 このファイルは要素や化合物を作成するためにのみ使用でき、他のレシピは他のファイルに入れる必要があります。
- componentsフィールドには、要素/化合物とそれが数量であることを示すような["セルロース"、5]のような配列を必要とします。 要素/化合物のみが使用されるようにするための方法として、アイテムスタックではなく、ここで文字列引数を使用します。
- メタフィールドは、他の化合物が作成または削除された場合でも、新しい化合物に変更不可能な識別子があることを確認するために必要です。 各コンパウンドには一意のメタ値が必要です。 この執筆時点で、Modは0から35のメタ値のみを使用します。 しかし、私はあなたのカスタム化合物がAlchemistryの内部レシピと決して衝突しないことを保証するために、1000以上であなたのメタに番号を付け始めるでしょう(上記のように)。
