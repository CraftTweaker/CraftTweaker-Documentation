# BlockBuilderBasic

Questo costruttore costruisce il tipo di blocco che viene utilizzato per impostazione predefinita in [mods.contenttweaker.block.basic. lockBuilderBasic#build](/mods/contenttweaker/API/block/basic/BlockBuilderBasic/#build) Questo costruttore non offre alcuna proprietà speciale da impostare, puoi solo costruirlo.

Questa classe è stata aggiunta da una mod con mod-id `contenttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
mods.contenttweaker.block.basic.BlockBuilderBasic
```

## Interfacce Implementate
BlockBuilderBasic implementa le seguenti interfacce. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweaker.block.BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder)

## Metodi
### build

Istruisce CoT per costruire realmente qualsiasi cosa il costruttore dovrebbe star costruendo.

```zenscript
new BlockBuilder().withType<ItemBuilderBasic>().build(resourceLocation as String);
new BlockBuilder().withType<ItemBuilderBasic>().build("my_awesome_block");
```

| Parametro        | Tipo    | Descrizione                                      |
| ---------------- | ------- | ------------------------------------------------ |
| resourceLocation | Stringa | Il percorso della risorsa per dare questo blocco |



