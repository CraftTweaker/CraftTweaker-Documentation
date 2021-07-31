# 死亡箱生成

## 导入相关包

`import mods.vanilladeathchest.DeathChestSpawning;`

## 聊天信息

```zenscript
//DeathChestSpawning.setChatMessage(string stage, string message);
DeathChestSpawning.setChatMessage("example_stage", "A chest appears at [%s, %s, %s]!");
```

字符串包括三个参数：死亡箱的 X，Y，Z 坐标。

## Container display name

```zenscript
//DeathChestSpawning.setContainerDisplayName(string stage, string name);
DeathChestSpawning.setContainerDisplayName("example_stage", "Your Items");
```

## Registry name regex

```zenscript
//DeathChestSpawning.setRegistryNameRegex(string stage, string regex);
DeathChestSpawning.setRegistryNameRegex("example_stage", ".*dirt.*");
```

## Use container in inventory

```zenscript
//DeathChestSpawning.setUseContainerInInventory(string stage, bool flag);
DeathChestSpawning.setUseContainerInInventory("example_stage", false);
```