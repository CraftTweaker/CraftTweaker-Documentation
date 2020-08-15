# IIsBuilder

Denotes anything that is a builder. What did you expect?

This class was added by a mod with mod-id `contenttweaker`. 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
mods.contenttweaker.api.IIsBuilder
```

## メソッド
### build

Instructs CoT to actually build whatever this builder is supposed to be building.

```zenscript
myIIsBuilder.build(resourceLocation as String);
myIIsBuilder.build("my_awesome_block");
```

| パラメータ            | タイプ  | 説明                                   |
| ---------------- | ---- | ------------------------------------ |
| resourceLocation | 文字列型 | The resource path to give this block |



