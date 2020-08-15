# 物品到气体转换

到Mekanism 9.7.5的时候，现在可以在各种机器中存有气体转化的定制物品。

如果您想要更改转换中内置的任何值，建议您先删除转换，然后将其添加而不是覆盖它。 这确保了它能够适当地删除9.7中的所有数据。 它没有指定的输出/处理项目被列出两次时发生的事情。

## 加

```zenscript
mods.mekanism.Gasconversion.register(IIngredient component, IGasStack gas);

mods.mekanism.Gasconversion.register(<ore:sand>, <gas:liquidosmium> * 100);
```

## 移除

```zenscript
mods.mekanism.Gasconversion.unregister(IIngredient component, IGasStack gas);

mods.mekanism.Gasconversion.unregister(<ore:ingotOsmium>, <gas:liquidosmium>);
```

## 移除所有转换

```zenscript
mods.mekanism.Gasconversion.unregisterAll();
```