# グローバル変数と静的変数

確かにあなたは、それぞれのスクリプトで同じ変数を何度も宣言した状況にあります。  
「なぜ、すべてのスクリプトでそれらを利用できるようにする方法がないのですか?」そのような時にあなたの頭の中で行われたものです。

そこに今安心してグローバルとスクリプトバウンド(静的)値を宣言し、アクセスする手段が追加されました!  
それらは変更できません。

## 静的とグローバルの違い

Both, statics and globals are scriptbound and instantiated before the script is executed.  
Both cannot be changed.  
The difference is how they are called:  
Globals can be called from everywhere simply by their name unless you already have a local variable that has the same name.  
Statics on the other hand, need to use the [cross-script reference](/AdvancedFunctions/Cross-Script_Reference/) to be accessed.

グローバルは、 `global` キーワードを使用して作成されます。  
静的 `キーワードを使用して静的` スタティックを作成します。

それとは別に、彼らは同じです!

## グローバル値の宣言

グローバル値を宣言することは、ローカル値を宣言するのと同じくらい簡単です。

```zenscript
import crafttweaker.item.IItemStack;


globalValue as IItemStack = <minecraft:dirt>;
static myStaticValue as IItemStack = <minecraft:sand>;
```

では、それを分解しましょう。

1. `グローバル値の宣言を示すグローバル` キーワード
2. `myGlobalValue` 値の名前
3. `as IItemStack` the type of the value (It is recommended to [import](/AdvancedFunctions/Import/) the types before casting the variable)
4. `= <minecraft:dirt>;` 値の初期化。 グローバル値が最終的な値なので、宣言中に初期化する必要があります。

## アドバイスの言葉

- 既に宣言されているグローバルにのみアクセスできます。 Use the [Priority Preprocessor](/AdvancedFunctions/Preprocessors/PriorityPreprocessor/) to make sure the scripts in which global are declared are executed first.
- グローバルはサブフォルダ内のスクリプトで宣言することはできません！ それはコンパイルされますが、巨大な FieldNotFound Exception が残されます。
- `を` 部分として省略することは技術的に可能ですが、 IAny インターフェイスはまだ完全に機能していないため、残しておくことをお勧めします。 また、スクリプトを読んだりデバッグしたりすることで、宣言をより明確にすることができます。
- ローカル変数/値 CAN オーバーシャドウグローバル変数。 スクリプトは常に変数の最も内側のスコープを検索し、キーワードを検索するときにグローバルに到達するまで外に出ます!