# ICreativeTab

ICreativeTabObject は、創造的なインベントリタブを表します。

## パッケージのインポート

問題が発生した場合は、パッケージをインポートする必要があるかもしれませんので、申し訳ありませんし、インポートを追加してください。  
`import crafttweaker.creativetabs.ICreativeTab;`

## このようなオブジェクトを取得する

ICreativeTab は、 [Creative tab Bracket Handler](/Vanilla/Brackets/Bracket_CreativeTab/) から取得できます。

## パラメータのない ZenGetters と ZenMethods

| ZenGetter/ZenMethod | 戻り値    |
| ------------------- | ------ |
| searchBarWidth      | int    |
| tabLabel            | 文字列    |
| setNoScrollBar()    | 無効（なし） |
| setNoTitle()        | 無効（なし） |

## ZenMethod

#### 背景画像の名前を設定

Use a string (e.g. `"item_search.png"`).  
Returns void (nothing).

```zenscript
tab.setBackgroundImageName(String backgroundImage);
```