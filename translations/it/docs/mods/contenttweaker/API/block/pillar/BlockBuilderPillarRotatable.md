# BlockBuilderPillarRotatable

Un Costruttore di Blocchi speciale che ti consente di creare blocchi che possono essere ruotati esattamente come i tronchi. <p> Questo significa che ha una texture per la parte superiore e inferiore ed una per i lati. Per impostazione predefinita, le posizioni di questi lati sono il nome del blocco, seguito da `_end` o `sides`. Come la maggior parte delle cose qui, le immagini di esempio sono generate per voi però per impostazione predefinita.

Questa classe è stata aggiunta da una mod con mod-id `contenttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
mods.contenttweaker.block.pillar.BlockBuilderPillarRotatable
```

## Interfacce Implementate
BlockBuilderPillarRotatable implementa le seguenti interfacce. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweaker.block.BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder)

## Metodi
### build

Istruisce CoT per costruire realmente qualsiasi cosa il costruttore dovrebbe star costruendo.

```zenscript
new BlockBuilder().withType<BlockBuilderPillarRotatable>().build(resourceLocation as String);
new BlockBuilder().withType<BlockBuilderPillarRotatable>().build("my_awesome_block");
```

| Parametro        | Tipo    | Descrizione                                      |
| ---------------- | ------- | ------------------------------------------------ |
| resourceLocation | Stringa | Il percorso della risorsa per dare questo blocco |


### withEndTexture

Ti consente di sovrascrivere il percorso della texture che i lati finali (sopra/sotto) dovrebbero usare. Se lo spazio dei nomi di quella texture sono nello spazio dei nomi di CoT o ognuno dei suoi addon (che lo supportano) allora l'immagine sarà creata per impostazione predefinita.

 Restituisce: `Questo costruttore, usato per la catena di metodi`

Tipo di restituzione: [mods.contenttweaker.block.pillar.BlockBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable)

```zenscript
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withEndTexture(endTexture as crafttweaker.api.util.MCResourceLocation);
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withEndTexture(<resource:contenttweaker:my_awesome_pillar_end>);
```

| Parametro  | Tipo                                                                             | Descrizione                            |
| ---------- | -------------------------------------------------------------------------------- | -------------------------------------- |
| endTexture | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | La texture da usare per i lati finali. |



Ti consente di sovrascrivere il percorso della texture che i lati finali (sopra/sotto) dovrebbero usare. Se lo spazio dei nomi di quella texture sono nello spazio dei nomi di CoT o ognuno dei suoi addon (che lo supportano) allora l'immagine sarà creata per impostazione predefinita. Usa una funzione che prende il nome del blocco come input e restituisce la texture finale per esso.

 Restituisce: `Questo costruttore, usato per la catena di metodi`

Tipo di restituzione: [mods.contenttweaker.block.pillar.BlockBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable)

```zenscript
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withEndTexture(endTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withEndTexture((blockName as MCResourceLocation) => new MCResourceLocation(blockName.namespace, blockName.path + "_end"));
```

| Parametro  | Tipo                                                                                                                                                                                                    | Descrizione          |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| endTexture | function.Function&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | La funzione da usare |


### withSideTexture

Ti consente di sovrascrivere il percorso della texture che i lati (tutto tranne sopra/sotto) dovrebbero usare. Se lo spazio dei nomi di quella texture sono nello spazio dei nomi di CoT o ognuno dei suoi addon (che lo supportano) allora l'immagine sarà creata per impostazione predefinita.

 Restituisce: `Questo costruttore, usato per la catena di metodi`

Tipo di restituzione: [mods.contenttweaker.block.pillar.BlockBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable)

```zenscript
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withSideTexture(sidesTexture as crafttweaker.api.util.MCResourceLocation);
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withSideTexture(<resource:contenttweaker:my_awesome_pillar_side>);
```

| Parametro    | Tipo                                                                             | Descrizione                     |
| ------------ | -------------------------------------------------------------------------------- | ------------------------------- |
| sidesTexture | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | La texture da usare per i lati. |



Ti consente di sovrascrivere il percorso della texture che i lati (tutto tranne sopra/sotto) dovrebbero usare. Se lo spazio dei nomi di quella texture sono nello spazio dei nomi di CoT o ognuno dei suoi addon (che lo supportano) allora l'immagine sarà creata per impostazione predefinita. Usa una funzione che prende il nome del blocco come input e restituisce la texture finale per esso.

 Restituisce: `Questo costruttore, usato per la catena di metodi`

Tipo di restituzione: [mods.contenttweaker.block.pillar.BlockBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable)

```zenscript
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withSideTexture(sidesTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withSideTexture(((blockName as MCResourceLocation) => new MCResourceLocation(blockName.namespace, blockName.path + "_sides"));
```

| Parametro    | Tipo                                                                                                                                                                                                    | Descrizione          |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| sidesTexture | function.Function&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | La funzione da usare |



