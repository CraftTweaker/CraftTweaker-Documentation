# 手

ハンドはプレーヤーの可能な2つのハンドの列挙です：メインとオフ

## パッケージのインポート

問題が発生した場合は、パッケージをインポートする必要があるかもしれませんので、申し訳ありませんし、インポートを追加してください。  
`import mods.contenttweaker.Hand;`

## 列挙型

ハンドは以下の2つの値を指定できます:

- メイン
- オフ

```zenscript
import mods.contenttweaker.Hand;

Hand.off();
Hand.main();
Hand.fromString("off");
Hand.fromString("main");
```

## 使用

Handの主な使用法は [IItemUse Function](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemUse/) です。

## 2つのハンドオブジェクトの比較

`==` getter を使用して、2つの Hand オブジェクトを比較できます。

```zenscript
Hand.main() == Hand.main()
```