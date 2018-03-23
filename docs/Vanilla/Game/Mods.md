# 加载的模组

你可以使用[全局函数](/Vanilla/Global_Functions) `loadedMods` 以访问所有现在加载的模组。
使用`import crafttweaker.mods.ILoadedMods;`以导入相关包

## 检测一个模组是否被加载

使用`in`函数以检测一个模组是否被加载 ;  
你也可以使用`contains`方法:
```
//如果MinecraftCoderPack被加载
if(loadedMods in "mcp"){
	print("success!");
}

//如果MinecraftCoderPack被加载
if(loadedMods.contains("mcp")){
	print("success!!!");
}
```

## 检索指定的模组
只要你有模组的ID，你可以检索一个指定的模组，将返回IMod对象。

```
//检索minecraftCoderPack模组
val mod = loadedMods["mcp"];
```

## 遍历模组列表
你可以用以下方法遍历所有加载的模组：

```
//打印所有注册的实体定义，不推荐在大型模组整合包里使用！
//mod变量是IMod类型的
for mod in loadedMods {
	print(mod.name ~ ":");
	for item in mod.items {
		print("\t\t" ~ item.displayName);
	}
}
```



# IMod
IMod接口给你提供了一些关于模组的基本信息。 
如果需要，使用`import crafttweaker.mods.IMod;`导入相关包

| Zengetter   | 它的作用                            | 返回值类型                                 | 用法              |
|-------------|------------------------------------|-------------------------------------------|-------------------|
| id          | 返回模组ID                          | 字符串                                    | `mod.id`          |
| name        | 返回模组的内置名称                   | 字符串                                    | `mod.name`        |
| version     | 返回模组的版本                      | 字符串                                    | `mod.version`     |
| description | 返回模组简介                        | 字符串                                    | `mod.description` |
| items       | 返回这个模组添加的所有物品           | [物品堆](/Vanilla/Items/IItemStack)        | `mod.items`       |
