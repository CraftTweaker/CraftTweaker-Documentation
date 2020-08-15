# Inumidente

ModTweaker consente di aggiungere o rimuovere le ricette di umidificatori forestali

## Chiamata

Puoi chiamare il pacchetto usando `mods.forestry.Moistener`

## Rimozione Ricetta

```zenscript
//mods.forestry.Moistener.removeRecipe(IIngredient output);
mods.forestry.Moistener.removeRecipe(<minecraft:stonebrick:1>);
```

## Addizione

```zenscript
//mods.forestry.Moistener.addRecipe(IItemStack output, IItemStack input, int packagingTime); 
mods.forestry.Moistener.addRecipe(<minecraft:mycelium>, <minecraft:grass>, 60); 
```

## Rimozione Carburante

```zenscript
//mods.forestry.Moistener.removeFuel(IIngredient moistenerItem);
mods.forestry.Moistener.removeFuel(<minecraft:wheat>);

```

## Aggiunta Di Carburante

```zenscript
//mods.forestry.Moistener.addFuel(IItemStack item, IItemStack product, int moistenerValue, int stage);
mods.forestry.Moistener.addFuel(<minecraft:gold_ingot>, <minecraft:iron_ingot>, 20, 2);
```

| Parametro      | Tipo                                     | Descrizione                                                                                              |
| -------------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| elemento       | [IItemStack](/Vanilla/Items/IItemStack/) | Oggetto per diventare un carburante valido per l'Idratante                                               |
| prodotto       | [IItemStack](/Vanilla/Items/IItemStack/) | Oggetto che lascerà lo slot di lavoro dell'idratante (ad esempio grano muffoso o pacciamatura).          |
| MoistenerValue | int                                      | Quanto questo prodotto contribuisce al prodotto finale dell'idratante.                                   |
| fase           | int                                      | Quale fase questo prodotto rappresenta. Le risorse con valore di fase inferiore saranno consumate prima. |