# クリエイティブタブ

これにより、クリエイティブタブをゲームに追加できます。

## ICreativeTab オブジェクトの作成

タブを追加する前に、 追加するタブのプロパティを設定できる表示を作成する必要があります。  
[VanillaFactory](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/) がある場所:

```zenscript
mods.contentTweaker.VanillaFactory.createCreativeTab(String unlocalizedName, IItemStack iItemStack);
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, ItemRepresentation iItem);
mods.contenttweaker.VanillaFactory.creativeTab(String unlocalizedName, BlockRepresentation iBlock);
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, IItemStackersupplier);
```

The String is in each of the three methods the same: It's the unlocalized name the Tab will later have.  
The second parameter is the symbol your tab will carry later on (e.g. a lava bucket for "misc").  
You can decide wheter you want to use an itemRepresentation, an itemStack, a blockrepresentation or an itemStackSupplier function.

## 既存の ICreativeTab オブジェクトを呼び出す

You can also call an [existing creative](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Creative_Tab/) tab, though you cannot change any of it's properties.  
Why would you need this, you ask?  
You will need this if you want to add a newly created block or item to an existing tab!

## プロパティー

You can call and set all these properties using the normal ZenGetters and ZenSetters  
`tab.unlocalizedName = "hh";`  
Note that you will probably hardly ever need the Setters as these Properties are already initialized to your wanted values when you create the ICreativeTab object.  
Also, you can neither set nor get properties from an existing ICreativeTab(one that you retrieved using the [Bracket handler](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Creative_Tab/))!

| プロパティ名          | タイプ                                                                                                     | 必須       | デフォルト値 | 説明/メモ          |
| --------------- | ------------------------------------------------------------------------------------------------------- | -------- | ------ | -------------- |
| unlocalizedName | 文字列                                                                                                     | はい       |        | クリエイティブタブの名前   |
| iconStack       | [IItemStack](/Vanilla/Items/IItemStack/)                                                                | はい/いいえ   |        | クリエイティブタブのアイコン |
| iconStackサプライヤー | [IItemStackSupplier](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemStackSupplier/) | いいえ / はい | null   | 何かを定義しますか？     |

## クリエイティブタブの登録

You need to call this method to register the creative Tab in the game!  
Otherwise nothing will happen!  
After you have called this function, you cannot un-register the tab or change any of it's properties!

```zenscript
tab.register();
```

## スクリプト例

```zenscript
#loader contenttweaker
import mods.contenttweaker.CreativeTab;
import mods.contenttweaker.VanillaFactory;

val zsTab = VanillaFactory.createCreativeTab("contenttweaker", <minecraft:dragon_egg>);
zsTab.register();
```