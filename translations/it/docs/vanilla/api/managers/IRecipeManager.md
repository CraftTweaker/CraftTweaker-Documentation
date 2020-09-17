# IRecipeManager

Interfaccia predefinita per i gestori basati sul Registro di sistema, in quanto possono rimuovere tutte le ricette da ResourceLocation.

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.registries.IRecipeManager
```

## Interfacce Implementate
IRecipeManager implementa le seguenti interfacce. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Metodi
### addJSONRecipe

Aggiunge una ricetta basata su un IData fornito. L'IData fornita dovrebbe rappresentare un DataPack JSON, questo consente effettivamente di registrare ricette per qualsiasi DataPack che supporti i sistemi IRecipeType.

```zenscript
craftingTable.addJSONRecipe(nome come String, dati come crafttweaker.api.data.IData);
craftingTable.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookingtime:100});
```

| Parametro | Tipo                                                   | Descrizione                         |
| --------- | ------------------------------------------------------ | ----------------------------------- |
| nome      | Stringa                                                | nome della ricetta                  |
| dati      | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | dati che rappresentano il file json |


### removeAll

Rimuovi tutte le ricette in questo registro

```zenscript
craftingTable.removeAll();
```

### removeByModid

Rimuovere la ricetta in base al nome del Registro di sistema

```zenscript
craftingTable.removeByModid(modid as String);
craftingTable.removeByModid("minecraft");
```

| Parametro | Tipo    | Descrizione                      |
| --------- | ------- | -------------------------------- |
| modid     | Stringa | modid delle ricette da rimuovere |


### removeByName

Rimuovi ricetta in base al nome del Registro

```zenscript
craftingTable.removeByName(name as String);
craftingTable.removeByName("minecraft:furnace");
```

| Parametro | Tipo    | Descrizione                                     |
| --------- | ------- | ----------------------------------------------- |
| nome      | Stringa | il nome del registro della ricetta da rimuovere |


### removeByRegex

Rimuovere la ricetta a base di regex

```zenscript
craftingTable.removeByRegex(regex as String);
craftingTable.removeByRegex("\\d_\\d");
```

| Parametro | Tipo    | Descrizione              |
| --------- | ------- | ------------------------ |
| regex     | Stringa | regex da abbinare contro |


### removeRecipe

Rimuovere una ricetta basata sul suo output.

```zenscript
craftingTable.removeRecipe(output as crafttweaker.api.item.IItemStack);
craftingTable.removeRecipe(<item:minecraft:glass>);
```

| Parametro | Tipo                                                              | Descrizione          |
| --------- | ----------------------------------------------------------------- | -------------------- |
| output    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | output della ricetta |



## Proprietà

| Nome          | Tipo    | Ha Getter | Ha Setter |
| ------------- | ------- | --------- | --------- |
| commandString | Stringa | vero      | falso     |

