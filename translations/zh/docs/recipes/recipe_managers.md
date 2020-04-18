# 合成表配方管理\删除配方


所有相关合成表包括mod所添加的合成表都可以使用以下方式移除

```zenscript
removeRecipe(IItemStack output);
#根据输出物品删除配方
```

```zenscript
removeByName(String name);
#根据配方名称删除配方
```

```zenscript
removeByModid(String modid);
#根据模组id删除配方
```

```zenscript
removeByName(String name);
#根据配方名称删除配方(为啥会有重复的)
```

```zenscript
removeAll();
#删除所有配方(包括模组内配方)
```



