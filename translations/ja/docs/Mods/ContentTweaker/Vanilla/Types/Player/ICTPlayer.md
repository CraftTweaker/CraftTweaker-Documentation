# ICTPlayer

ICTPlayer はContentTweaker の特別な [IPlayer](/Vanilla/Players/IPlayer/) オブジェクトです。  
つまり、すべての [IPlayer の](/Vanilla/Players/IPlayer/) メソッドもこのオブジェクトで利用できます！

## パッケージのインポート

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import mods.contenttweaker.Player;`

## ZenMethods

`IMutableItemStack getHeldItem(Hand hand);`

パラメータ:

- [手](/Mods/ContentTweaker/Vanilla/Types/Player/Hand/) → メインまたはオフ

与えられた [ハンド](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) で保持されている [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Player/Hand/)を返します。