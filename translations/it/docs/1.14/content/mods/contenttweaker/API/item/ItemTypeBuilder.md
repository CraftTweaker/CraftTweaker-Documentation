# ItemTypeBuilder

Denotes a special builder that is used for builing special item types. Usato in [mods.contenttweaker.item.ItemTypeBuilder#withType](/mods/contenttweaker/API/item/ItemTypeBuilder/#withtype)

This class was added by a mod with mod-id `contenttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la Classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
mods.contenttweaker.item.ItemTypeBuilder
```

## Interfacce Implementate
ItemTypeBuilder implements the following interfaces. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)

## Metodi
### build

Istruisce CoT per costruire realmente qualsiasi cosa il costruttore dovrebbe star costruendo.

```zenscript
new ItemBuilder().withType<ItemBuilderBasic>().build(resourceLocation as String);
new ItemBuilder().withType<ItemBuilderBasic>().build("my_awesome_block");
```

| Parametro        | Tipo   | Descrizione                                      |
| ---------------- | ------ | ------------------------------------------------ |
| resourceLocation | String | Il percorso della risorsa per dare questo blocco |



