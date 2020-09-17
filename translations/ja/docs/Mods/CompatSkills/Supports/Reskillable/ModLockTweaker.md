# Mod-Lock Tweaker

## モッドロック

これは1.2.0で設定機能として追加され、CRT ZenMethodがサポートされるようになりました。 これは、前述のような設定を通じても可能です。

Modロックでは、特定のロックの後ろにある特定のModからすべてのItemStackをロックできます。

### 構文

    // Blank Example
    mods.compatskills.ModLock.addModLock(String modId, String... locked);
    
    // Working Example:
    mods.compatskills.ModLock.addModLock("minecraft", "reskillable:building|4");
    
    上記のロックは mod "minecraft" から"building 4" のロックの後ろにすべてをロックします