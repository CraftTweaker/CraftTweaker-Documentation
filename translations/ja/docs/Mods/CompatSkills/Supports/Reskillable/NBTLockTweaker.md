# NBT-Lock Tweaker

## NBTロック

NBT-LocksはCompatSkills 1.4.0以上に特有で、現在最も強力な機能です。 特定のNBTタグは、特定のModIDまたはゲーム内のすべてのアイテムに限定されてロックできます。

これは、NBTタグを含むアイテムが見つかった場合、ロックが適用されることを意味します。

### 構文

    // Blank Example:
    mods.compatskills.NBTLock.addGenericNBTLock(IData tag, String... locked)
    mods.compatskills.NBTLock.addModNBTLock(String mod, IData tag, String... locked)
    
    //// Working Example:
    // Locks Silk-Touch
    addGenericNBTLock({ench:[{id: 33 as short}]}, "reskillable:magic|10");
    
    // Locks Unbreaking (No Level-Specified)
    addModNBTLock("minecraft", {ench:[{id: 34 as short}]}, "reskillable:gathering|6");
    

これには強力な意味があります これは、例えば、あなたがパックメーカーとしてロックできることを意味します:

- ティンカー材料
- Tinker Modifiers
- エンチャントメント
- エネルギー値

そして、はるかに、あなたがそれが使用するNBTタグを知っている限り!