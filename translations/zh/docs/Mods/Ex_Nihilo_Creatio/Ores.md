# Ores

**需要在 `#loader 前缀` 或 `#loader contentbiner`**


## 所属包名
```zenscript
`mods.exnihilocreatio.Ore`
```

## 使用方式

- **字符串名称** 核心块/块/dust/ingot 名称
- **六边材料的字符串颜色**。
- **[IItemStack](/Vanilla/Items/IItemStack/) 输出** 需要修复.firstItem 项目或错误。
- **映射字符串[string]** 语言代码然后翻译。
- **String oredDict** The name of the oreDict you want

## 添加配方

```zenscript
mods.exnihilocreatio.Ore. ddRecipe(String,
    String,
    @Optional IItemStack,
    @Optional Map<string, String>,
    @Optional String);

模组。 xnihilocreatio.Ore.addRecipe("Stone",
    "63452D",
    <ore:stone>. irstItem,
    ~
    "en_au": "StoneDowning"
    },
    "石头";
```

## 移除

```zenscript
mods.exnihilocreatio.Ore.removeAll();
```