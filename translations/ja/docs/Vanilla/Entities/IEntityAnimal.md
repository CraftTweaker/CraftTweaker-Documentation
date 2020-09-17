# IEntityAnimal

動物。

## パッケージのインポート

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.entity.IEntityAnimal;`

## 拡張する [IEntityAgeable](/Vanilla/Entities/IEntityAgeable/)

IEntityAnimal extends [IEntityAgeable](/Vanilla/Entities/IEntityAgeable/). つまり、 [IEntities](/Vanilla/Entities/IEntityAgeable/) で利用可能なすべての関数は、IEntityAnimalでも利用可能です。

## メソッド

### ZenGetters/Setters

| ZenGetter | タイプ                                                 |
| --------- | --------------------------------------------------- |
| love原因    | [IPlayer](/Vanilla/Players/IPlayer/) (Can be null!) |
| isInLove  | bool                                                |

### ZenMethods

#### 動物の繁殖に使用できるかどうかを確認する

メソッドは [IItemStack](/Vanilla/Items/IItemStack/)を期待します。  
ブールを返します。

```zenscript
entAnObj.isBreedingItem(IItemStack itemStack);
```

#### 恋に設定またはリセット

最初のメソッドは省略可能な [IPlayer](/Vanilla/Players/IPlayer/) オブジェクトを期待します。  
何も返しません。

```zenscript
entAnObj.setInLove(@Optional IPlayer player);
entAnObj.resetInLove();
```

#### 他の動物がこの動物と交尾できるかどうかを確認します。

メソッドはIEntityAnimal オブジェクトを期待します。  
boolを返します。

```zenscript
entAnObj.canMateWith(IEntityAnimal other);
```