# 見通しよくするためのループの使用

## 問題
We all have seen it: Scripts with more than 500 lines where it says 500 times `recipes.remove(item1);recipes.remove(item2),...`  
Not only is this a pain to write, but it is possible that you spend hours debugging a little typo when the only exception you get is `error in recipes.zs: null`

## 対応
私の経験則では、パラメータが一つだけ変わる同じコマンドを10回以上記述する場合、ループを使用します。

つまり、常に関数を書く代わりに、全ての項目を含む配列を一つ宣言し、それを反復処理します。

```zenscript
import crafttweaker.item.IIngredient;

val Array = [
    item1,
    item2,
    item3,
    ...
] as IIngredient[];


for item in Array{
    recipes.remove(item);
}
```

## 利点

- (私見ですが)スクリプトが見やすくなる
- スクリプトがどこで躓いたか分かる
- 配列への追加・削除だけのため、直前の変更が非常に簡単に済む

## 欠点

- 変わるパラメータが少ないときでしか有効に機能しません
- 配列を間違ってキャストした場合、スクリプトが検知できないエラーが発生します
- 配列での一つのエラーによって配列の宣言自体が失敗し、何も実行されないときがあります
- 配列の宣言自体が間違った場合、変なエラーメッセージが表示されることがあります