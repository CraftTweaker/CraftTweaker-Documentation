# Vaniglia Fabbrica

La Vanilla Factory ti permette di creare [Blocchi](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/), [Elementi](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) e [Schede Creative](/Mods/ContentTweaker/Vanilla/Creatable_Content/Creative_Tab/) che puoi aggiungere al gioco.

## Chiamata

Puoi trovare il pacchetto su `mods.contenttweaker.VanillaFactory`

## Creazione Contenuto

### Crea Blocchi

```zenscript
mods.contenttweaker.VanillaFactory.createBlock(String unlocalizedName, IMaterialDefinition material);
```

Parametri:

- Stringa unlocalizedName: The Block's unlocalized name.
- [IMaterialDefinizione](/Mods/ContentTweaker/Vanilla/Types/Block/IMaterialDefinition/) materiale: Il materiale di base di cui è fatto il blocco.

Restituisce un oggetto [BlockRepresentation](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/). Controlla la pagina [Blocca](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/) per ulteriori informazioni e uno script di esempio!

### Crea Oggetti

```zenscript
mods.contenttweaker.VanillaFactory.createItem(String unlocalizedName);
```

Parametri:

- Stringa unlocalizedName: The item's unlocalized name.

Restituisce un oggetto [ItemRepresentation](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/). Controlla la pagina [Articolo](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) per ulteriori informazioni e uno script di esempio!

### Crea Schede Creative

```zenscript
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, IItemStack iItemStack);
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, ItemRepresentation iItem);
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, BlockRepresentation iBlock);
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, IItemStackSupplier);
```

Parametri:

- Stringa unlocalizedName: The Tab's unlocalized Name.
- Rappresentazione dell'elemento o del blocco: l'elemento/blocco da visualizzare come simbolo della scheda. In alternativa è possibile utilizzare una funzione [IItemStackSupplier](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemStackSupplier/).

Restituisce un oggetto [ICreativeTab](/Mods/ContentTweaker/Vanilla/Creatable_Content/Creative_Tab/). Controlla la pagina [della scheda creativa](/Mods/ContentTweaker/Vanilla/Creatable_Content/Creative_Tab/) per ulteriori informazioni e uno script di esempio!

### Crea Fluidi

```zenscript
mods.contenttweaker.VanillaFactory.createFluid(String unlocalizedName, int color);
mods.contenttweaker.VanillaFactory.createFluid(String unlocalizedName, CTColor color);
```

Parametri:

- Stringa unlocalizedName: The Fluid's unlocalized name.
- int colore: Il codice colore del fluido.
- [CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/) color: The fluid's color as color-Object.

Restituisce un oggetto [FluidRepresentation](/Mods/ContentTweaker/Vanilla/Creatable_Content/Fluid/). Controlla [Fluid page](/Mods/ContentTweaker/Vanilla/Creatable_Content/Fluid/) per ulteriori informazioni e uno script di esempio.

### Crea Oggetti Cibo

```zenscript
mods.contenttweaker.VanillaFactory.createItemFood(String unlocalizedName, int healAmount);
```

Parametri:

- Stringa unlocalizedName: The item's unlocalized Name.
- int healAmount: The Food Value

Restituisce un oggetto [ItemFoodRepresentation](/Mods/ContentTweaker/Vanilla/Creatable_Content/ItemFood/). Consulta la pagina [Food](/Mods/ContentTweaker/Vanilla/Creatable_Content/ItemFood/) per ulteriori informazioni e uno script di esempio.