# ListData



Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.data.ListData;
```


## Interfacce Implementate
ListData implements the following interfaces. That means all methods defined in these interfaces are also available in ListData

- [ICollectionData](/vanilla/api/data/ICollectionData)
## Constructors

No Description Provided
```zenscript
new ListData() as ListData
new ListData();
```
No Description Provided
```zenscript
new ListData(list as stdlib.List<IData>) as ListData
```
| Parameter | Type                                                            | Description             |
| --------- | --------------------------------------------------------------- | ----------------------- |
| list      | stdlib.List&lt;[IData](/vanilla/api/data/IData)&gt; | No Description Provided |


## Caster

| Tipo Risultato                                                  | Implicito |
| --------------------------------------------------------------- | --------- |
| stdlib.List&lt;[IData](/vanilla/api/data/IData)&gt; | true      |

