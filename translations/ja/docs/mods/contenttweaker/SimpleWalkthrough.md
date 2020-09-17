# シンプルなウォークスルー

こんにちは、kindlichこちら。 では、ContentTweakerを1.15で試していますね。

通常、ContentTweakerをCoTと略して数文字を割ってくれることがあります(Discordの自動化です)。だから、私と一緒にいてください。 最初にリソースマネージャーのmodをインストールすることもお勧めします。 ブロックやアイテムのテクスチャやモデルを追加する方法があるように。

ContentTweakerは、リソースフォルダに簡単なノーテクスチャ画像と同様にモデルファイルを作成しようとします。 Mod [ローダー](https://www.curseforge.com/minecraft/mc-mods/the-loader) または [オープンローダー](https://www.curseforge.com/minecraft/mc-mods/open-loader) のいずれかを検出します。 どちらもインストールされていない場合は、テクスチャが作成されないことを示すメッセージだけがログに出力されます。 ある時点で、テクスチャの生成を完全に無効にすることも可能になりますが、curren Alpha/Beta ビルドでは無効になります。

生成されたテクスチャの場合、CoT は既存のファイルを上書きしません。 従って、既存のファイルを自分のファイルで簡単に置き換えることができ、Cotはこれらの変更を元に戻しません。


さあ、始めましょう。 いくつかの簡単なブロックやアイテムの例を挙げます。 あなたがこれらのクラスのサポートをすべて見たい場合。 このファイルのすぐ下のAPIフォルダにAPIエクスポートがあります。

## Loader ContentTweaker
サーバー起動中にCraftTweakerが1.14以上でロードされるため、スクリプトを別の場所にロードする方法が必要です。 That is what the `#loader contenttweaker` is for!  
Simply put it somewhere in (preferable the top of) your file and you're set to go.  
Remember **no crafttweaker scripts are allowed** in `#loader contenttweaker`as they run at different phases of the laod cycle!


## Blocks

For creating blocks you need to create a [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder) object.  
Once you have that you can set most simple properties in a builder pattern.

You could then directly call `build(name)` on it and be done if you want to create a basic block.  
Or you could specialize the builder using `withType` and provide a specialized builder class, for example [BuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs) or [BlockBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable). 彼らが提供する追加機能を確認するために、それぞれのページを確認してください。 withType呼び出しを行うと、元に戻すことはできませんので、その呼び出しの前にすべての基本的なプロパティを設定してください。

何をしようと、チェーンの最後に ** `build(name)` を**と呼ぶ必要があります。そうでなければ何も起こらないからです！

話されるのは十分です。コピー/ペーストの例が欲しいですね。

```zenscript
#loader contenttweaker

import mods.contenttweaker.block.BlockBuilder;
import mods.contenttweaker.block.stairs.BlockBuilderStairs;
import mods.contenttweaker.block.basic.BlockBuilderBasic;
import mods.contenttweaker.block.pillar.BlockBuilderPillarRotatable;


//The simplest way, uses blockamterial IRON
new BlockBuilder()
    //Will delegate to the Basic Builder
    .build("generic_block");


//Sets a different block material.
new BlockBuilder(<blockmaterial:earth>)
    .withType<BlockBuilderBasic>()
    .build("earth_like_block");


//The Pillar Type is basically the same as logs, one texture on top/bottom and one for the sides.
//ログのようにすべての軸で回転できます。
//texture names by default will be "block_name" + "end", "_sides"
new BlockBuilder()
    .withType<BlockBuilderPillarRotatable>()
    .build("preset_pillar_rotatable_noar");


//Stairs.
//Have 3 Textures, top, bottom, sides デフォルトでは、 "block_name" + "_top", "_bottom", "_sides"
new BlockBuilder()
    .withType<BlockBuilderStairs>()
    .build("stairs_noarg");
```


## アイテム

For items you more or less do the same, but this time you need an [ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder).  
You can again, either use a `build(name)` directly, or switch to a specialized version using `withType`.  
At the time of this writing there only exists [ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool), though.

何をしようと、チェーンの最後に ** `build(name)` を**と呼ぶ必要があります。そうでなければ何も起こらないからです！

話されるのは十分です。コピー/ペーストの例が欲しいですね。
```zenscript
#loader contenttweaker

import mods.contenttweaker.item.item.ItemBuilder;
import mods.contenttweaker.item.tool.ItemBuilderTool;

//アイテムを作成する最も簡単な方法。
new ItemBuilder().build("generic_item");
new ItemBuilder().build("generic_item_2");
new ItemBuilder().build("generic_item_3");


//With setting properties
new ItemBuilder()
    .withMaxStackSize(16) //MaxStackSize and MaxDamage contradict each other, so only use 1
    .build("other_item");


//If you want tools you'll need to set the type.
//コンテキストを切り替えるタイプを設定した瞬間から、他のメソッドは使用できなくなります。
//つまり、耐久性とwithTypeコールの前に_のようなものを設定する必要があることを意味します。
new ItemBuilder()
    .withMaxDamage(100)
    .withType<ItemBuilderTool>()
    .withToolType(<tooltype:axe>, 1) //Axe harvest level = 1
    .withToolType(<tooltype:shovel>, 3, 4.0F) //Shovel harvest level 3 and destroy speed 4.0
    .build("my_tool");



//If you want a tool that does damage, you can also use the tool type
new ItemBuilder()
    .withMaxDamage(100)
    .withType<ItemBuilderTool>()
    .withAttackDamage(10.0F)
    .withAttackSpeed(5.0F)
    .withDurabilityCostAttack(1) //By default: 2
    .build("my_mace");

```

## 名前
So, how would you go about giving items proper names?  
For that, you need a lang file.  
At the time of this writing CoT did not yet create that one for ya, so you will need to create it yourself.  
In your resource pack, find the `assets/contenttweaker` folder.  
In there, create a folder named `lang` if it does not yet exist, and create a file named `en_us.json` in there.  
I recommend always starting with the en_us one, since that is what the game will fall back to if it cannot find the name for another language. その後、他のラングコードと同様にこれを繰り返すことを自由に感じてください。

そこで、エントリのキー値マップを作成する必要があります。 翻訳キーと呼ばれるキー、または以前のバージョンではローカライズされていない名前です。 は、使用したブロック/アイテムの名前に依存しており、次のようになります。
```
"<block|item>.contenttweaker.<the_name_you_gave_them>"
```
値には、そのアイテムの名前がどのように入力されているかを設定できます。 構文が不明な場合は、以下の例を確認するか、構文がダウンした場合は JSON Validator を試してみてください。


TLDR: `<resoruce_pack>/assets/contenttweaker/lang/en_us.json`.
```
{
  "block.contentweaker.generic_block": "Generic Block",
  "item.contenttweaker.generic_item": "Generic Item",
  "item.contentweaker.generic_item_2": "Generic Item the 2nd",
  "item.contentweaker.generic_item_3": "Generic Item the charmed one"
}
```