# 関数をインポート

関数名全体を常に入力するのではなく、必要に応じて関数をインポートするだけです。 mod 関数を使用する場合に便利です。

## 1.12 以前のインポートについての注意

CraftTweaker 1.12 では、多くのコードが変更されました。  
以前は、すべての内部関数は `minetweaker.package.function` を使用して呼び出されていました。 Now, `minetweaker` has been replaced by `crafttweaker`, so now it sais `crafttweaker.name.function`!

このWikiからのスクリプトのインポートに問題が発生した場合は、MCのバージョンが1.12以下であるかどうかを確認することができます。

## 基本的なインポート

インポートはスクリプトの先頭で宣言する必要があります。 スクリプトごとに個別にインポートを宣言する必要があります。 同じ名前の2つの関数をインポートしないように注意してください。AS関数を使用してください

```zenscript
//This will import the hide function from JEI
import mods.jei.JEI.removeAndHide;

//And this will import the JEI package
import mods.jei.JEI;

//removeAndHide is a function, so we can just use it
removeAndHide(<minecraft:dirt>);

//JEI is a package, so we need to specify what function of it we want to use
JEI.hide(<minecraft:diamond>);
```

## 次としてインポート：

同じ名前の関数を2つインポートしたい場合や、カスタム名を使用してスクリプトをよりよく見せたい場合もあります。 インポートの最後に AS 文を追加する場合は、インポートがリッスンする名前を指定できます。

```zenscript
//This will import the hide function from JEI and make it available under the name "h"
import mods.jei.JEI.hide as h;

//And this will import the removeAndHide function from JEI and make it available under the name "rh"
import mods.jei.JEI.removeAndHide as rh;

h(<minecraft:dirt>);
rh(<minecraft:diamond>);
```