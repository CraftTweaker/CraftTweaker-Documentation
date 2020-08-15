# Liquid Bracket Handler

液体ブラケットハンドラーは、ゲーム内の液体へのアクセスを提供します。 ゲームに登録された液体のみを取得することが可能です。 ですから、Modを追加または削除すると、液体ブラケットハンドラーでModの液体を参照すると問題が発生する可能性があります。

液体は Liquid Bracket Handler で次のように参照されます。

```zenscript
<liquid:liquidname> または <fluid:liquidname>

<liquid:lava> または <fluid:lava>
```

液体が見つかった場合は、ILiquidStack オブジェクトを返します。 これらを使用して何ができるかについては、それぞれの [Wiki エントリ](/Vanilla/Liquids/ILiquidStack/) を参照してください。

# 登録済みのすべての液体を取得

以下のコマンドを使用して、登録済みのすべての液体をCraftTweakerログに出力できます

    /ct liquids
    /crafttweaker liquids