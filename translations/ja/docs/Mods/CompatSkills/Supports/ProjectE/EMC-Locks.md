# ProjectE

## EMCロック

1.5.0の時点では、アイテムのためのEMCロックをサポートしています。

## 通知

1.9.0 現在 EMC ロックが変更されています:

    変更されたProjectEのサポートで、核変換学習と凝縮器の増殖がロックされます。
    構文は mods.compatskills.EMCLock.addEMCLock(int emc, String... 要件);
    プレイヤーは、EMCロックを満たしていないが、そのアイテムを学習または複製することができないアイテムを使用することができます。 学習と複製では、プレイヤーがアイテムの要件を満たす必要があります。
    注意: 核変換テーブルにアイテムを入れるためには、emc が得られますが、アイテムを取り戻すことはできません。
    

### 構文

    // Blank Example:
    mods.compatskills.EMCLock.addEMCLock(int emc, String... locked)
    
    // 例:
    mods.compatskills.EMCLock.addEMCLock(8192, "reskillable:mining|5", "reskillable:magic|7")