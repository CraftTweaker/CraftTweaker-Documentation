# IEntityMod

A Mod.

## パッケージのインポート

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.entity.IEntityMob;`

## 拡張する [IEntityCreature](/Vanilla/Entities/IEntityCreature/)

IEntityMob extends [IEntityCreature](/Vanilla/Entities/IEntityCreature/). つまり、 [IEntityCreature](/Vanilla/Entities/IEntityCreature/) オブジェクトで使用可能なすべての関数は、IEntityMobでも使用できます。

## メソッド

### ZenMethods

#### Mob がプレイヤーの睡眠を妨げているかどうかを確認する

メソッドには [IPlayer](/Vanilla/Players/IPlayer/) オブジェクトが必要です。  
boolを返します。

```zenscript
entMobObj.isPreventingPlayerRest(IPlayer player);
```