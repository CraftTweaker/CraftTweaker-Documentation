# 死亡箱生成

## 导入相关包

`import mods.vanilladeathchest.DeathChestSpawning;`

## 聊天信息

    //DeathChestSpawning.setChatMessage(string stage, string message);
    DeathChestSpawning.setChatMessage("example_stage", "A chest appears at [%s, %s, %s]!");
    

字符串包括三个参数：死亡箱的 X，Y，Z 坐标。

## Container display name

    //DeathChestSpawning.setContainerDisplayName(string stage, string name);
    DeathChestSpawning.setContainerDisplayName("example_stage", "Your Items");