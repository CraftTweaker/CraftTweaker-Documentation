# IEntityEquipmentSlot

IEntityEquipmentSlotはプレイヤーのインベントリ内のスロットです。 それは例えばmainHandや鎧スロットの1つである可能性があります。

## パッケージのインポート

問題が発生した場合は、パッケージをインポートする必要があるかもしれませんので、申し訳ありませんし、インポートを追加してください。  
`import crafttweaker.entity.IEntityEquipmentSlot;`

## ZenGetters/ZenMethods

| Getter    | タイプ |
| --------- | --- |
| インデックス    | int |
| slotIndex | int |
| 名前        | 文字列 |

### 比較

2 つの IEntityEquipmentSlot オブジェクトが等しいかどうかを確認できます:  
真偽値を返します。

```zenscript
slotOne == slotTwo;
```

## 列挙型

EntityEquipmentSlotインターフェースには6つの静的メソッドがあり、それぞれが与えられたIEntityEquipmentSlotオブジェクトを返します。

```zenscript
crafttweaker.entity.IEntityEquipmentSlot.mainHand();
crafttweaker.entity.IEntityEquipmentSlot.offhand();
crafttweaker.entity.IEntityEquipmentSlot.feet();
crafttweaker.entity.IEntityEquipmentSlot.legs();
crafttweaker.entity.IEntityEquipmentSlot.chest();
craftttweaker.head();
```