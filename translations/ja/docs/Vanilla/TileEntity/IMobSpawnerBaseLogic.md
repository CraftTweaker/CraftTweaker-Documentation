# IMobSpawnerBaseLogic

IMobSpawnerBaseLogicオブジェクトには、モブのスポーン方法と場所に関するあらゆる種類の情報が含まれています。

## Importing the class

エラーを回避するには、 [クラスをインポート](/AdvancedFunctions/Import/) する必要があります。  
`import crafttweaker.tileentity.IMobSpawnerBaseLogic;`

## ZenGetters/ZenSetters

| ZenGetter          | ZenSetter          | Description            | Type                                                      |
| ------------------ | ------------------ | ---------------------- | --------------------------------------------------------- |
| `nbtData`          | `nbtData`          | スポーナーの NBT データ。 （下記参照） | [IData](/Vanilla/Data/IData/)                             |
| `entityDefinition` | `entityDefinition` | エンティティ定義を生成します。        | [IEntityDefinition](/Vanilla/Entities/IEntityDefinition/) |
| `world`            |                    | スポーン地点のワールド。           | [IWorld](/Vanilla/World/IWorld)                           |
| `blockPos`         |                    | スポナーブロックの位置            | [IBlockPos](/Vanilla/World/IBlockPos)                     |

## ZenMethods

```zenscript
void updateSpawner(); // エンティティをスポーンさせ、スポーンタイマーをティックダウンさせるためのスポーナーを更新します。

void setDelayToMin(); // スポーナーの遅延を次のスポーンの最小の遅延に設定します。
```