# IEntityCreature

創造物。

## パッケージのインポート

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.entity.IEntityCreature;`

## 拡張する [IEntityLiving](/Vanilla/Entities/IEntityLiving/)

IEntityCreature extends [IEntityLiving](/Vanilla/Entities/IEntityLiving/). つまり、 [IEntityLiving](/Vanilla/Entities/IEntityLiving/) オブジェクトで利用可能なすべての関数は、IEntityCreatureでも利用できます。

## メソッド

### ZenGetters/Setters

| ZenGetter            | タイプ                                    |
| -------------------- | -------------------------------------- |
| hasPath              | bool                                   |
| isWithinHomeDistance | bool                                   |
| homePosition         | [IBlockPos](/Vanilla/World/IBlockPos/) |
| maximumHomeDistance  | float型                                 |
| hasHome              | bool                                   |

### ZenMethods

#### ライブサウンドを再生する

メソッドは何も期待しません。  
何も返しません。

```zenscript
entCreObj.playLivingSound();
```

#### ホームを設定または切り離します

最初のメソッドは [IBlockPos](/Vanilla/World/IBlockPos/) オブジェクトと int を期待します。  
2番目のメソッドは何も期待しません。  
両方のメソッドは何も返しません。

```zenscript
entAnObj.setHomePositionAndDistance(IBlockPos pos, int distance);
entAnObj.detachHome();
```

#### ホームからの距離内に位置があるかどうかを確認します

メソッドは [IBlockPos](/Vanilla/World/IBlockPos/) オブジェクトを期待します。  
ブールを返します。

```zenscript
entAnObj.isPositionWithinHomeDistance
```