# 要素を作成
Alchemistryのカスタム要素の作成

# パッケージ
`mods.alchemistry.Util.createElementUtil.createElement`
## Loader
これは `#loader alchemistry` でロードする必要があります。

## メソッド
- **int atomicNumber** ID for new Element
- **文字列名** 新しい要素名
- **文字列 Abbrebiation** 新しい要素 Abbrebiation
- **int red** Element red shade, RGB
- **int 緑** 緑色のシェーディング, RGB
- **int blue** Element blue shade, RGB

## 作成
```zenscript
mods.alchemistry.Atomizermods.alchemistry.Util.createElement(int atomicNumber, String name, String abbreviation, int red, int green, int blue);

mods.alchemistry.Util.createElement(150,"vibranium","Vrb", 70, 90, 250);
mods.alchemistry.Util.createElement(151,"unobtanium","Uno",30,54,69);Util.createElement(150,"vibranium","Vrb", 70, 90, 250);
mods.alchemistry.Util.createElement(151,"unobtanium","Uno",30,54,69);
```

## メモ

- 小文字の名前を使用してください
- 既存の原子番号は上書きできません
- ファイルの先頭に '#loader alchemistry' 行が必要です。 このファイルは要素や化合物を作成するためにのみ使用でき、他のレシピは他のファイルに入れる必要があります。
- 注: v1.0.2 以降では、カスタム要素の model json と画像を含めるには、mod のリソースローダーを使用する必要があります。 これらのリソースを自動生成したい場合は、ここでコマンドラインJARプログラム [を作成しました](https://github.com/al132mc/alchemistry-resource-creator/releases)。
