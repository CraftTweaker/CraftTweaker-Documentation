# 死亡箱生成

## 导入相关包

`import mods.vanilladeathchest.DeathChestSpawning;`

## 聊天信息

```zenscript
//DeathChestSpawning.setChatMessage(string stage, string message);
DeathChestSpawning.setChatMessage("example_stage", "A chest appears at [%s, %s, %s]!");
```

字符串包括三个参数：死亡箱的 X，Y，Z 坐标。

## 容器显示名称

```zenscript
///DeathChestSpawning.setContainerDisplayName(字符串级，字符串名称)；
DeathChestSpawning.setContainerDisplayName("example_stage", "你的物品");
```

## 注册表名称正则表达式

```zenscript
///DeathChestSpawning.setRegistryNameRegex(字符串, 字符串正则表达式);
DeathChestSpawning.setRegistryNameRegex("example_stage", ".*dirt.*");
```

## 在库存中使用容器

```zenscript
///DeathChestSpawning.setUseContainerInInestory(string stage, bool flag);
DeathChestspawning.setUseContainerInInestory("example_stage", false);
```