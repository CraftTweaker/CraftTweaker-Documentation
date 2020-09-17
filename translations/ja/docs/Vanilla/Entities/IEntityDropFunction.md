# IEntityDropFunction

IEntityDropFunction は、関連エンティティが殺されるたびに呼び出されます。 これでできることは想像力に任せてください。

## pacakge をインポートしています

問題が発生した場合は、パッケージをインポートする必要があるかもしれませんので、申し訳ありませんし、インポートを追加してください。  
`import crafttweaker.entity.IEntityDropFunction;`

## パラメータ

IEntityDropFunction は以下のパラメータを持つ関数です。

- [IEntity](/Vanilla/Entities/IEntity/) エンティティ → 死亡したばかりのエンティティ。
- [IDamageSource](/Vanilla/Damage/IDamageSource/) dmgSourve → エンティティの死源。

関数は [IItemStack](/Vanilla/Items/IItemStack/)、または `null` を返す必要があります。