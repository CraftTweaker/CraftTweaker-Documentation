# IEntityAgeable

老化したエンティティは、牛のように時間が経つにつれて成長するエンティティです。

## パッケージのインポート

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.entity.IEntityAgeable;`

## 拡張する [IEntityCreature](/Vanilla/Entities/IEntityCreature/)

IEntityAgeable extends [IEntityCreature](/Vanilla/Entities/IEntityCreature/). つまり、 [IEntities](/Vanilla/Entities/IEntityCreature/) で利用可能なすべての関数は、IEntityAgeable でも利用できるということです。

## メソッド

### ZenGetters/Setters

| ZenGetter  | ZenSetter   | タイプ  |
| ---------- | ----------- | ---- |
| growingAge | growingAge  | int型 |
|            | scaleForAge | bool |

### ZenMethods

#### 年齢を追加

Methods expect an int and the second method an optional bool.  
Both methods return nothing.  
Normally, the second method does the same as the first with false as forced argument, that may differ for mod implementations, though.

```zenscript
entAgObj.ageUp(int seconds, @Optional boolean forced);
entAgObj.addGrowth(int seconds);
```