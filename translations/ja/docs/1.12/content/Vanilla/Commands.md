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

Usage:

`/crafttweaker biomes`

`/ct biomes`

Description:

ゲーム内の全てのバイオームをリストアップします。

## BiomeTypes

Usage:

`/crafttweaker biomeTypes`

`/ct biomeTypes`

Description:

ゲーム内の全てのバイオームタイプをリストアップします。

## BlockInfo

Usage:

`/crafttweaker blockinfo`

`/ct blockinfo`

Description:

ブロック情報の読み取りを有効化・無効化します。 ブロック情報の読み取りを有効化・無効化します。 ブロック情報の読み取りモードでは、ブロックを右クリックすると名前を、また、取得できればメタデータやタイルエンティティデータも表示します。

## Blocks

Usage:

`/crafttweaker blocks`

`/ct blocks`

Description:

ゲーム内の全てのブロックのリストをcrafttweaker.logファイルへ出力します。

## Bugs

Usage:

`/crafttweaker bugs`

`/ct bugs`

Description:

GitHubのバグトラッカーを規定のブラウザで開きます。


## Conflict

Usage:

`/crafttweaker conflict`

`/ct conflict`

Description:

Outputs a list of all conflicting crafting table recipes to the crafttweaker.log file.  
Note that this only works on a CLIENT with JEI installed!

## Discord

Usage:

`/crafttweaker discord`

`/ct discord`

Description:

あなたのブラウザで[Discordのサーバーリンク](https://www.discord.blamejared.com)を開きます

## Docs

Usage:

`/crafttweaker docs`

`/ct docs`

Description:

このWikiを規定のブラウザで開きます(`/ct wiki`でもできます)。

## DumpZs

Usage:

`/crafttweaker dumpzs`

`/ct dumpzs`


Description:

Outputs a ZenScript dump to a crafttweaker_dump folder within your minecraft directory as HTML file.  
You can use one or more dump targets that will be executed consecutively (if you provide a target twice it will run twice).  
The targets can be found using auto-complete (tab key).  
By default `log`, `html` and `json` are registered as targets.  
This will include all registered Bracket Handlers, ZenTypes, Global Functions, ZenExpansions an all Registered Packages including their methods.  
Note that not all of these can be used from within the scripts!


## Entities

Usage:

`/crafttweaker entities`

`/ct entities`

Description:

ゲーム内の全てのエンティティのリストをcrafttweaker.logファイルへ出力します。


## Give Item

Usage:

`/crafttweaker give <minecraft:bedrock>`

`/ct give <minecraft:bedrock>`

Description:

Gives the player the item using CrT's Bracket handler syntax.  
You can also apply tags by appending a `.withTag()` call.  
Note that this is a pretty simple parser and may not work for every case!


## Hand

Usage:

`/crafttweaker hand`

`/ct hand`

Description:

手に持っているアイテムの名前をチャットに表示します。

また、名前をコピーしたり、鉱石辞書を出力できます。

## Inventory

Usage:

`/crafttweaker inventory`

`/ct inventory`

Description:

インベントリの中の全てのアイテムのリストをcrafttweaker.logファイルへ出力します。


## JeiCategories

Usage:

`/crafttweaker jeiCategories`

`/ct jeiCategories`

Description:

Outputs a list of all registered jei categories to the crafttweaker.log file.  
Requires JEI to be installed (surprise)!


## Json

Usage:

`/crafttweaker json` `/crafttweaker json escaped`

`/ct json` `/ct json escaped`

Description:

Prints the nbt of the item in your hand as JSON to the chat.  
This format differs from the IData formatting CraftTweaker uses.  
You can click it to be copied to your clipboard.  
You can also privide the `escaped` argumetn to automatically escape the resulting string.

## Liquids

Usage:

`/crafttweaker liquids`

`/ct liquids`

Description:

ゲーム内の全ての液体のリストをcrafttweaker.logファイルに出力します。

## Log

Usage:

`/crafttweaker log`

`/ct log`

Description:

クリックできるcrafttweaker.logを開くリンクを出力します。

## Mods

Usage:

`/crafttweaker mods`

`/ct mods`

Description:

インストールされている全てのModとそのバージョンのリストをcrafttweaker.logとゲーム内チャット欄に出力します。

## Names

Usage:

`/crafttweaker names [category]`

`/ct names [category]`

Description:

Outputs a list of all the items in the game to the crafttweaker.log file.  
The `category` argument is optional and will extend the list with the according information:

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

Usage:

`/crafttweaker nbt`

`/ct nbt`

Description:

手に持ったアイテムか、フォーカスしているブロックのNBTデータをcrafttweaker.logファイルへ出力します。


## OreDict

Usage:

`/crafttweaker oredict <name>`

`/ct oredict <name>`

Description:

ゲーム内の全ての鉱石辞書の項目のリストをcrafttweaker.logファイルへ出力します。

&lt;name&gt;に値が渡された場合、その鉱石辞書名に対応するアイテムを全てcrafttweaker.logファイルへ出力します。

## Potions

Usage:

`/crafttweaker potions`

`/ct potions`

Description:

ゲーム内の全てのポーションのリストをcrafttweaker.logファイルへ出力します。

## RecipeNames

Usage:

`/crafttweaker recipeNames`  
`/crafttweaker recipeNames [modid]`

`/ct recipeNames`  
`/ct recipeNames [modid]`

Description:

Outputs a list of all recipe names in the game to the crafttweaker.log file.  
A modid can be provided to filter results.

## Recipes

Usage:

`/crafttweaker recipes`

`/ct recipes`

Description:

ゲーム内の全てのクラフトレシピのリストをcrafttweaker.logファイルへ出力します。

## Recipes (手持ちのアイテム)

Usage:

`/crafttweaker recipes hand`

`/ct recipes hand`

Description:

プレイヤーが手に持っているアイテムの全てのクラフトレシピのリストをcrafttweaker.logファイルへ出力します。

## Recipes (かまど)

Usage:

`/crafttweaker recipes furnace`

`/ct recipes furnace`

Description:

ゲーム内の全てのかまどレシピのリストをcrafttweaker.logファイルへ出力します。

## スクリプト

Usage:

`/crafttweaker scripts`

`/ct scripts`

Description:

Sends a clickable link to open the scripts directory.  
Can also be executed from a command line which instead prints the absolute path to the directory to the log.


## Seeds

Usage:

`/crafttweaker seeds`

`/ct seeds`

Description:

インベントリの中の全ての種のリストをcrafttweaker.logファイルへ出力します。

## Syntax

Usage:

`/crafttweaker syntax`

`/ct syntax`

Description:

すべてのスクリプトを読み、見つけたすべてのエラーを出力します。 すべてのスクリプトを読み、見つけたすべてのエラーを出力します。 このコマンドではスクリプトの変更は適応されません。ゲームを再起動しなければ効果は適応されません。

## Wiki

Usage:

`/crafttweaker wiki`

`/ct wiki`

Description:

あなたのブラウザでこのWikiを開きます(`/ct docs`でもできます)

## ZsLint

Usage:

`/crafttweaker zslint`

`/ct zslint`

Description:

zslintのソケットを開始します。