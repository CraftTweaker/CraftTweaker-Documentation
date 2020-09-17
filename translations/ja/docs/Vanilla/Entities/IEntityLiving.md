# IEntityLiving

  
[IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) とは異なり、プレイヤーはIEnitiyLivingオブジェクトではありません！

## パッケージのインポート

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.entity.IEntityLiving;`

## [IEntityLivingBase を拡張する](/Vanilla/Entities/IEntityLivingBase/)

IEntityLiving extends [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/). つまり、 [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) オブジェクトで使用可能なすべての関数は、IEntityLiving オブジェクトでも使用できます。

## メソッド

### ZenGetters/ZenSetters

| ZenGetter           | ZenSetter     | タイプ                                                       |
| ------------------- | ------------- | --------------------------------------------------------- |
| attackInterval      |               | int型                                                      |
| attackTarget        | attackTarget  | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) |
| canBeSteered        |               | bool                                                      |
| canPickUpLoot       | canPickUpLoot | bool                                                      |
| canSpawnHere        |               | bool                                                      |
| getLeashedToEntity  |               | [IEntity](/Vanilla/Entities/IEntity/)                     |
| isAidisabled!       | isAidisabled! | bool                                                      |
| isAidisabled!       | isAidisabled! | bool                                                      |
| isColliding         |               | bool                                                      |
| isLeashed           |               | bool                                                      |
| isLeftHanded        | isLeftHanded  | bool                                                      |
| isNoDespawnRequired |               | bool                                                      |
| maxSpawnedInChunk   |               | int                                                       |
|                     | 前進する          | float型                                                    |
|                     | moveStrafing  | float型                                                    |
|                     | 垂直方向          | float型                                                    |
| renderSizeModifier  |               | float型                                                    |

### ZenMethods

#### ライブサウンドを再生

パラメータは必要ありません。  
何も返しません。

```zenscript
ebtLiv.playLivingSound();
```

#### 爆発粒子を出現させる

パラメータは必要ありません。  
何も返しません。

```zenscript
ebtLiv.spawnExplosionParticle();
```

#### 装備スロットのドロップ確率を設定する

[IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot/) オブジェクトとfloatが必要です。  
何も返しません。

```zenscript
ebtLiv.setDropChance(IEntityEquipmentSlot slot, float chance);
```

#### 永続化を有効にする

パラメータは必要ありません。  
何も返しません。

```zenscript
ebtLiv.enablePersistence();
```

#### ラッシュ

最初のメソッドは、 [IEntity](/Vanilla/Entities/IEntity/) オブジェクトを必要とし、真偽値を返します。 2番目のメソッドは2つの真偽値を必要とし、何も返しません。  
3番目のメソッドは [IPlayer](/Vanilla/Players/IPlayer/) オブジェクトを必要とし、boolを返します。

```zenscript
ebtLiv.setLeashedToEntity(IEntity enttiy, boolean AttachNotification);
ebtLiv.clearLeashed(boolean sendPacket, boolean dropLead);
ebtLiv.canBeLeashedTo(Player);
```