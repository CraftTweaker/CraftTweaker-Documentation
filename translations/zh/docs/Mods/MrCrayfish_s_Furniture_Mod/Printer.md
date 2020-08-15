# 打印机

打印允许您制作一个项目的副本。

默认情况下，可以复制书面书和附魔书。

## 移除配方

## 删除匹配的可复制项目。

```zenscript
mods.cfm.Printer.remove(@可选的 IIngreent 项目)；

mods.cfm.Printer.remove(<minecraft:enchanted_book>)；
// 移除所有可打印的项目。
mods.cfm.Printer.remove();
```

## 添加

## 添加可复制项目。

```zenscript
mods.cfm.Printer.add(@Nonnull final IItemStack项目);

mods.cfm.Printer.add(<minecraft:name_tag>);
```