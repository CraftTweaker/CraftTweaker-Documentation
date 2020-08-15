# 实体随机播放器

将实体添加和移除到项目设计师的石质实体随机抛射物中使用 [IEntityDefinition](/Vanilla/Entities/IEntityDefinition/)。

注意： [IEntityDefinition](/Vanilla/Entities/IEntityDefinition/) 必须是一个活的实体。

## 添加

### 添加

```zenscript
mods.projecte.EntityRandomizer.addPeaceful(IEntityDefinition entityDefinition);

// 允许和平生物变成僵尸。 
mods.projecte.EntityRandomizer.addPeaceful(<entity:minecraft:zombie>);
```

### addMob

```zenscript
mods.projecte.EntityRandomizer.addMob(IentityDefinition entityDefinition);

// 允许将敌对生物变成猪。
mods.projecte.EntityRandomizer.addMob(<entity:minecraft:pig>);
```

## 移除配方

### 移除和平

```zenscript
mods.projecte.EntityRandomizer.removePeaceful(IEntityDefinition entityDefinition);

// 停止和平生物能够变成猪。
mods.projecte.EntityRandomizer.removePeaceful(<entity:minecraft:pig>)；
```

### removeMob

```zenscript
mods.projecte.EntityRandomizer.removeMob(IEntityDefinition entityDefinition);

// 停止敌对生物能够变成僵尸。
mods.projecte.EntityRandomizer.removeMob(<entity:minecraft:zombie>);
```

### 清除Peacefuls

```zenscript
// 移除所有随机的和平生物条目，包括CraftTinder在此通话之前注册的条目。
mods.projecte.EntityRandomizer.clearPeacefuls();
```

### clearMobs

```zenscript
// 移除所有随机的敌对生物条目，包括CraftTinder在此通话之前注册的条目。
mods.projecte.EntityRandomizer.clearMobs();
```