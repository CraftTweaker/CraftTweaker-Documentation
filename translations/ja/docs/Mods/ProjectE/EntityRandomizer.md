# エンティティランドマイザー

ProjectEの哲学者の石の実体ランダマイザ投射物からエンティティを追加および削除するには、 [IEntityDefinition](/Vanilla/Entities/IEntityDefinition/) を使用します。

注: この [IEntityDefinition](/Vanilla/Entities/IEntityDefinition/) は、生きているエンティティのためのものでなければなりません。

## 追加中

### addPeaceful

```zenscript
mods.projecte.EntityRandomizer.addPeaceful(<entity:minecraft:zombie>); 
mods.projecte.EntityRandomizer.addPeaceful(IEntityDefinition entityDefinition);

// Allows turning peaceful creatures into zombies.
```

### addMob

```zenscript
mods.projecte.EntityRandomizer.addMob(<entity:minecraft:pig>);
mods.projecte.EntityRandomizer.addMob(IEntityDefinition entityDefinition);

// Allows turning hostile mobs into pigs.
```

## 削除中

### removePeaceful

```zenscript
mods.projecte.EntityRandomizer.removePeaceful(<entity:minecraft:pig>);
mods.projecte.EntityRandomizer.removePeaceful(IEntityDefinition entityDefinition);

// Stops peaceful mobs being able to be turned into pigs.
```

### removeMob

```zenscript
mods.projecte.EntityRandomizer.removeMob(<entity:minecraft:zombie>);
mods.projecte.EntityRandomizer.removeMob(IEntityDefinition entityDefinition);

// Stops hostile mobs being able to be turned into zombies.
```

### clearPeacfuls

```zenscript
// この呼び出しの前にCraftTweakerによって登録されたものを含むすべてのランダム化された平和モブエントリを削除します。
mods.projectte.EntityRandomizer.clearPeacfuls();
```

### clearMobs

```zenscript
// CraftTweakerによって登録されたものを含むすべてのランダム化された敵対的モブエントリをこのコールの前に削除します。
mods.projectte.EntityRandomizer.clearMobs();
```