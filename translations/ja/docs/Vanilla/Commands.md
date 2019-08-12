# コマンド

CraftTwealerはスクリプト作成を手助けするコマンドを追加します。これらのコマンドはスクリプトの開発時間を短くするために提供されています。

コマンドは次のものが最初に付きます。 `/crafttweaker` または `/ct`

別名として、次のコマンドも使えます。 `/minetweaker` または `/mt`

次のコマンドは、全てのCraftTweakerコマンドを探すことができます。

`/crafttweaker help`

もしくは

`/ct help`

# コマンド一覧

## Biomes

使い方:

`/crafttweaker biomes`

`/ct biomes`

説明:

ゲーム内の全てのバイオームをリストアップします。

## BiomeTypes

使い方:

`/crafttweaker biomeTypes`

`/ct biomeTypes`

説明:

ゲーム内の全てのバイオームタイプをリストアップします。

## BlockInfo

使い方:

`/crafttweaker blockinfo`

`/ct blockinfo`

説明:

ブロック情報の読み取りを有効化・無効化します。 ブロック情報の読み取りモードでは、ブロックを右クリックすると名前を、また、取得できればメタデータやタイルエンティティデータも表示します。

## Blocks

使い方:

`/crafttweaker blocks`

`/ct blocks`

説明:

ゲーム内の全てのブロックのリストをcrafttweaker.logファイルへ出力します。

## Bugs

使い方:

`/crafttweaker bugs`

`/ct bugs`

説明:

GitHubのバグトラッカーを規定のブラウザで開きます。

## Conflict

使い方:

`/crafttweaker conflict`

`/ct conflict`

説明:

重複した作業台のレシピをcrafttweaker.logファイルに出力します。  
JEIが導入されたクライアントでしか動作しません。

## Discord

使い方:

`/crafttweaker discord`

`/ct discord`

説明:

あなたのブラウザで[Discordのサーバーリンク](https://www.discord.blamejared.com)を開きます

## Docs

使い方:

`/crafttweaker docs`

`/ct docs`

説明:

このWikiを規定のブラウザで開きます(`/ct wiki`でもできます)。

## DumpZs

使い方:

`/crafttweaker dumpzs`

`/ct dumpzs`

説明:

Minecraftのディレクトリ下のcrafttweaker_dumpフォルダにZenscriptダンプをHTMLの形式で出力します  
連続してダンプする対象を1つ以上指定できます(2つ対象を指定すると、2回ダンプが実行されます)。  
ダンプする対象は自動補完で選ぶことができます(タブキーを使用)。  
デフォルトでは`log`と`html`、そして`json`がターゲットとして指定されています。  
全ての登録済みブラケット構文、ZenType、グローバル関数、ZenExpansionsとそれらのメソッドを含む全ての登録されたパッケージがそれに含まれます。  
スクリプト内でこれら全てが使用できるわけではないことに注意してください。

## Entities

使い方:

`/crafttweaker entities`

`/ct entities`

説明:

ゲーム内の全てのエンティティのリストをcrafttweaker.logファイルへ出力します。

## Give Item

使い方:

`/crafttweaker give <minecraft:bedrock>`

`/ct give <minecraft:bedrock>`

説明:

Crafttweakerのブラケット構文を利用し、プレイヤーにアイテムを渡すことができます。  
`.withTag()`を呼び出してタグに適応することもできます。  
これはかなり単純で、すべての場合にうまくいくとは限らないので注意してください。

## Hand

使い方:

`/crafttweaker hand`

`/ct hand`

説明:

手に持っているアイテムの名前をチャットに表示します。

また、名前をコピーしたり、鉱石辞書を出力できます。

## Inventory

使い方:

`/crafttweaker inventory`

`/ct inventory`

説明:

インベントリの中の全てのアイテムのリストをcrafttweaker.logファイルへ出力します。

## JeiCategories

使い方:

`/crafttweaker jeiCategories`

`/ct jeiCategories`

説明:

ゲーム内の全てのJEIカテゴリをcrafttweaker.logへ出力します。  
JEIがインストールされている必要があります。

## Json

使い方:

`/crafttweaker json` `/crafttweaker json escaped`

`/ct json` `/ct json escaped`

説明:

手に持っているアイテムのNBT情報をゲーム内チャット欄にJSONフォーマットで出力します。  
このフォーマットはCrafttweakerのIDataのフォーマットとは違うことに注意してください。  
クリックするとクリップボードへコピーできます。  
`escaped`を引数に渡せば、自動で文字列をエスケープ処理してくれます。

## Liquids

使い方:

`/crafttweaker liquids`

`/ct liquids`

説明:

ゲーム内の全ての液体のリストをcrafttweaker.logファイルに出力します。

## Log

使い方:

`/crafttweaker log`

`/ct log`

説明:

クリックできるcrafttweaker.logを開くリンクを出力します。

## Mods

使い方:

`/crafttweaker mods`

`/ct mods`

説明:

インストールされている全てのModとそのバージョンのリストをcrafttweaker.logとゲーム内チャット欄に出力します。

## Names

使い方:

`/crafttweaker names [category]`

`/ct names [category]`

説明:

ゲーム内の全てのアイテムのリストをcrafttweaker.logファイルへ出力します。  
任意の引数`category`に以下の値を指定することで、対応する情報でリストを拡張します。

* burntime
* creativetabs
* damageable
* display
* enchantability
* foodvalue
* maxdamage
* maxstack
* maxuse
* modid
* rarity
* repairable
* repaircost
* saturationvalue
* unloc

TABキーでの自動補完機能にて、利用可能な全てのパラメータを確認することもできます。

## Nbt

使い方:

`/crafttweaker nbt`

`/ct nbt`

説明:

手に持ったアイテムか、フォーカスしているブロックのNBTデータをcrafttweaker.logファイルへ出力します。

## OreDict

使い方:

`/crafttweaker oredict <name>`

`/ct oredict <name>`

説明:

ゲーム内の全ての鉱石辞書の項目のリストをcrafttweaker.logファイルへ出力します。

&lt;name&gt;に値が渡された場合、その鉱石辞書名に対応するアイテムを全てcrafttweaker.logファイルへ出力します。

## Potions

使い方:

`/crafttweaker potions`

`/ct potions`

説明:

ゲーム内の全てのポーションのリストをcrafttweaker.logファイルへ出力します。

## RecipeNames

使い方:

`/crafttweaker recipeNames`  
`/crafttweaker recipeNames [modid]`

`/ct recipeNames`  
`/ct recipeNames [modid]`

説明:

ゲーム内の全てのレシピ名をcrafttweaker.logファイルへ出力します。  
引数&lt;modid&gt;で結果をフィルタリングできます。

## Recipes

使い方:

`/crafttweaker recipes`

`/ct recipes`

説明:

ゲーム内の全てのクラフトレシピのリストをcrafttweaker.logファイルへ出力します。

## Recipes (手持ちのアイテム)

使い方:

`/crafttweaker recipes hand`

`/ct recipes hand`

説明:

プレイヤーが手に持っているアイテムの全てのクラフトレシピのリストをcrafttweaker.logファイルへ出力します。

## Recipes (かまど)

使い方:

`/crafttweaker recipes furnace`

`/ct recipes furnace`

説明:

ゲーム内の全てのかまどレシピのリストをcrafttweaker.logファイルへ出力します。

## Scripts

使い方:

`/crafttweaker scripts`

`/ct scripts`

説明:

スクリプトがあるディレクトリへのクリック可能なリンクを出力します。  
コマンドラインから、ディレクトリの絶対パスのログへの出力も可能です。

## Seeds

使い方:

`/crafttweaker seeds`

`/ct seeds`

説明:

インベントリの中の全ての種のリストをcrafttweaker.logファイルへ出力します。

## Syntax

使い方:

`/crafttweaker syntax`

`/ct syntax`

説明:

すべてのスクリプトを読み、見つけたすべてのエラーを出力します。 このコマンドではスクリプトの変更は適応されません。ゲームを再起動しなければ効果は適応されません。

## Wiki

使い方:

`/crafttweaker wiki`

`/ct wiki`

説明:

あなたのブラウザでこのWikiを開きます(`/ct docs`でもできます)

## ZsLint

使い方:

`/crafttweaker zslint`

`/ct zslint`

説明:

zslintのソケットを開始します。