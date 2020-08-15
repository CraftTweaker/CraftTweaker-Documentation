# Entity Bracket Handler

エンティティブラケットハンドラーは、ゲーム内のエンティティ(たとえばモブ、タイルなど)にアクセスできます。 エンティティをゲームに登録することは可能です。 そのため、Modの追加や削除は、Entity Bracket HandlerでModのモブを参照すると問題が発生する可能性があります。

エンティティはこのようにしてエンティティハンドラで参照されます:

```zenscript
<entity:modID:entityName>

<entity:minecraft:sheep>
```

mob/entity が見つかった場合、IEntityDefinition Object を返します。 これらを使用して何ができるかについては、それぞれの [Wiki エントリ](/Vanilla/Entities/IEntityDefinition/) を参照してください。

# すべての登録エンティティの取得

以下のコマンドを使用して、登録された全てのエンティティをCraftTweakerログに出力できます。

    /ct entities
    /crafttweaker entities