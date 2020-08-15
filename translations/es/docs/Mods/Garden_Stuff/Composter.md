# Compositor
## Paquete
`import mods.gardenstuff.CompostBin;CompostBin;`

## Metodos
- **[ItemStack](/Vanilla/Liquids/IItemStack/) elemento** El elemento a componer.
- **int processTime** Cantidad de energía creada por tick en una máquina de línea base.
- **[IOreDictEntry](/Vanilla/OreDict/IOreDictEntry) OredictKey** Una entrada en oreDiccionario.

## Añadir ítem compuesto
```zenscript
mods.gardenstuff.CompostBin.add(IItemStack item, int processTime);

mods.gardenstuff.mods.gardenstuff.CompostBin.add(IItemStack item, int processTime);

mods.gardenstuff.CompostBin.add(<minecraft:carrot>, 150);
```

## Añadir entrada oreDictionary compostable
```zenscript
mods.gardenstuff.mods.gardenstuff.CompostBin.add(oredictKey, int processTime);

mods.gardenstuff.CompostBin.add(<ore:cropCarrot>, 150);CompostBin.add(<ore:cropCarrot>, 150);
```
