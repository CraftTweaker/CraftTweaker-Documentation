# 已加载模组

你可以使用 [全局关键词](/Vanilla/Global_Functions/)`loadedMods` 访问当前所有加载的模组。  
如果需要，你可以使用 `import crafttweaker.mods.ILoadedMods;`导入该类

## 检查一个模组是否被加载

使用`in`关键字来检查一个模组是否被加载。你也可以使用`contains`方法。

```zenscript
//if MinecraftCoderPack is loaded
if(loadedMods in "mcp"){
    print("success!");
}

//if MinecraftCoderPack is loaded
if(loadedMods.contains("mcp")){
    print("success!!!");
}
```

## 检索特定模组

只要你有它的ID，你就可以从 IMod 检索到特定的模组

```zenscript
//检索minecraftCoderPack模组
val mod = loadedMods["mcp"];
```

## 通过 modList

您可以通过加载的模组列表进行迭代，比如：

```zenscript
//打印所有重计项目定义，不推荐在较大的包中！
//mod 变量将是loadedModMod中的
的IMod 类型。
    打印(mod)。 为 ~":";
    for item in mod. 泰姆族居民
        print("\t\t" ~ 项。 isplayname;
    }
}
```

# IMod

IMod 界面为您提供了一些特定模组的一般信息。  
如果需要，它可以用 `导入craftmilower.mods.IMod；`

| Zengetter | 功能           | 返回值类型                                      | 用法          |
| --------- | ------------ | ------------------------------------------ | ----------- |
| id        | 返回模组的id      | 字符串                                        | `mod.id`    |
| 名称        | 返回模组的内部名称    | string                                     | `mod.name`  |
| 版本        | 返回模组的版本      | 字符串                                        | `版本`        |
| 描述        | 返回模组描述       | string                                     | `描述`        |
| 项目        | 返回由模组添加的所有项目 | [IItemStack](/Vanilla/Items/IItemStack/)[] | `mod.items` |