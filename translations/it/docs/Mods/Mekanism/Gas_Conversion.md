# Elemento a Conversione Gas

A partire da Mekanism 9.7.5 è ora possibile avere oggetti personalizzati per le conversioni di gas in varie macchine.

Se si desidera modificare uno qualsiasi dei valori delle conversioni integrate, si consiglia di rimuovere prima la conversione e quindi aggiungerla di nuovo piuttosto che sovrascriverla. Ciò garantisce che rimuove correttamente tutti i dati come indicato al punto 9.7. non ha un output/gestione specifica di ciò che accade quando un articolo è elencato due volte.

## Addizione

```zenscript
mods.mekanism.GasConversion.register(IIngredient ingredient, IGasStack gas);

mods.mekanism.GasConversion.register(<ore:sand>, <gas:liquidosmium> * 100);
```

## Rimozione

```zenscript
mods.mekanism.GasConversion.unregister(IIngredient ingredient, IGasStack gas);

mods.mekanism.GasConversion.unregister(<ore:ingotOsmium>, <gas:liquidosmium>);
```

## Rimozione di tutte le conversioni

```zenscript
mods.mekanism.GasConversion.unregisterAll();
```