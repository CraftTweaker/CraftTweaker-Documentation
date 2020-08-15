# Vanillefabrik

In der Vanilla Factory können Sie [Blöcke](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/)erstellen, [Items](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) und [Kreative Tabs](/Mods/ContentTweaker/Vanilla/Creatable_Content/Creative_Tab/) , die du dann zum Spiel hinzufügen kannst.

## Anruf

Du findest das Paket unter `mods.contenttweaker.VanillaFactory`

## Inhalt erstellen

### Blöcke erstellen

```zenscript
mods.contenttweaker.VanillaFactory.createBlock(String unlocalizedName, IMaterialDefinition-Material);
```

Parameter:

- String unlokalisierter Name: Der unlokalisierte Name des Blocks.
- [IMaterialDefinition](/Mods/ContentTweaker/Vanilla/Types/Block/IMaterialDefinition/) Material: Das Basismaterial, aus dem der Block besteht.

Gibt ein [BlockRepresentation](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/) Objekt zurück. Schauen Sie auf der [Blockseite](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/) für weitere Informationen und ein Beispielskript!

### Artikel erstellen

```zenscript
mods.contenttweaker.VanillaFactory.createItem(String unlocalizedName);
```

Parameter:

- String unlokalisierter Name: Der unlokalisierte Name des Elements.

Gibt ein [Objektrepräsentation](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) zurück. Schauen Sie auf der [Artikelseite](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) für weitere Informationen und ein Beispielskript!

### Kreative Tabs erstellen

```zenscript
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, IItemStack iItemStack);
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, ItemRepresentation iItem);
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, BlockRepresentation iBlock);
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, IItemStackSupplier supplier);
```

Parameter:

- String unlokalisierter Name: Der unlokalisierte Name des Tabs.
- Element oder Block-Darstellung: Das Item/Block, das als Tab-Symbol angezeigt werden soll. Alternativ können Sie eine [IItemStackSupplier Funktion](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemStackSupplier/) verwenden.

Gibt ein [ICreativeTab](/Mods/ContentTweaker/Vanilla/Creatable_Content/Creative_Tab/) Objekt zurück. Schauen Sie auf die [Creative Tab Seite](/Mods/ContentTweaker/Vanilla/Creatable_Content/Creative_Tab/) für weitere Informationen und ein Beispielskript!

### Flüssigkeiten erstellen

```zenscript
mods.contenttweaker.VanillaFactory.createFluid(String unlocalizedName, int color);
mods.contenttweaker.VanillaFactory.createFluid(String unlocalizedName, CTColor color);
```

Parameter:

- String unlokalisierter Name: Der unlokalisierte Name des Fluids.
- int color: The fluid color-code.
- [CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/) Farbe: Die Flüssigkeitsfarbe als Farbeobjekt.

Gibt ein [FluidRepresentation](/Mods/ContentTweaker/Vanilla/Creatable_Content/Fluid/) Objekt zurück. Überprüfen Sie die [Fluid-Seite](/Mods/ContentTweaker/Vanilla/Creatable_Content/Fluid/) für weitere Informationen und ein Beispielskript.

### Lebensmittelartikel erstellen

```zenscript
mods.contenttweaker.VanillaFactory.createItemFood(String unlocalizedName, int healAmount);
```

Parameter:

- String unlokalisierter Name: Der unlokalisierte Name des Elements.
- int healAmount: Der Lebensmittelwert

Gibt ein [ItemFoodRepresentation](/Mods/ContentTweaker/Vanilla/Creatable_Content/ItemFood/) Objekt zurück. Schaue dir die [Food-Seite](/Mods/ContentTweaker/Vanilla/Creatable_Content/ItemFood/) für weitere Informationen und ein Beispielskript an.