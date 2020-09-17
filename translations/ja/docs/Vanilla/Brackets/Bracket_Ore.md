# Ore Dictionary Bracket Handler

鉱石辞書のブラケットハンドラーは、ゲーム内の鉱石辞書にアクセスできます。

鉱石辞書は、以下のように鉱石辞書のブラケットハンドラーで参照されます。

```zenscript
<ore:orename>
<ore:ingotIron>
```

Returns an [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/), as long as no `*` is in the call, otherwise returns a `List<IOreDictEntry>` If the oreDictionary is not yet in the game, will create a new and empty oreDictionary with the given name and return that. それらをどうするかについては、 [Ore Dictionary](/Vanilla/OreDict/IOreDictEntry/) を参照してください。

# 登録済みの鉱石辞書の取得

登録済みの鉱石辞書をCraftTweakerログに出力するには、次のコマンドを使用します。

    /ct oredict
    /crafttweaker oredict