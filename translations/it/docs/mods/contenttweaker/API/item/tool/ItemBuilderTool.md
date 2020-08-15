# ItemBuilderTool

Un costruttore speciale che consente di creare oggetti che possono essere utilizzati come strumenti. Dovresti aver impostato il danno massimo dell'oggetto prima di passare a questo costruttore. <p> Ha metodi speciali che consentono di impostare il livello di miniera per diversi tipi di strumenti, così come il danno di attacco.

Questa classe è stata aggiunta da una mod con mod-id `contenttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
mods.contenttweaker.item.tool.ItemBuilderTool
```

## Interfacce Implementate
ItemBuilderTool implementa le seguenti interfacce. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweaker.item.ItemTypeBuilder](/mods/contenttweaker/API/item/ItemTypeBuilder)

## Metodi
### build

Istruisce CoT per costruire realmente qualsiasi cosa il costruttore dovrebbe star costruendo.

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().build(resourceLocation as String);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().build("my_awesome_block");
```

| Parametro        | Tipo    | Descrizione                                      |
| ---------------- | ------- | ------------------------------------------------ |
| resourceLocation | Stringa | Il percorso della risorsa per dare questo blocco |


### withAttackDamage

Ti permette di impostare il bonus di danno d'attacco che ottieni tenendo premuto questo oggetto

 Restituisce: `Questo costruttore, usato per la catena di metodi`

Tipo restituito: [mods.contenttweaker.item.tool.ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackDamage(attackDamage as float);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackDamage(2.0f);
```

| Parametro     | Tipo         | Descrizione                   |
| ------------- | ------------ | ----------------------------- |
| attacco Danno | galleggiante | Il danno aggiuntivo d'attacco |


### withAttackSpeed

Permette di impostare il bonus di velocità di attacco che si ottiene tenendo questo oggetto.

 Restituisce: `Questo costruttore, usato per la catena di metodo.`

Tipo restituito: [mods.contenttweaker.item.tool.ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackSpeed(attackSpeed as double);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackSpeed(2.0d);
```

| Parametro       | Tipo   | Descrizione            |
| --------------- | ------ | ---------------------- |
| attaccoVelocità | doppia | La velocità di attacco |


### withDurabilityCostAttack

Permette di impostare la quantità di danno che questo oggetto riceverà quando colpirà i nemici. Per impostazione predefinita questo è `0`

 Restituisce: `Questo costruttore, usato per la catena di metodi`

Tipo restituito: [mods.contenttweaker.item.tool.ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withDurabilityCostAttack(durabilityCostAttack as int);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withDurabilityCostAttack(5);
```

| Parametro              | Tipo | Descrizione                               |
| ---------------------- | ---- | ----------------------------------------- |
| durabilitàCostoAttacco | int  | I punti danno che questo oggetto riceverà |


### withDurabilityCostMining

Ti permette di impostare la quantità di danno che questo oggetto riceverà quando mini blocchi. Per impostazione predefinita questo è `0`

 Restituisce: `Questo costruttore, usato per la catena di metodi`

Tipo restituito: [mods.contenttweaker.item.tool.ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withDurabilityCostMining(durabilityCostMining as int);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withDurabilityCostMining(1);
```

| Parametro             | Tipo | Descrizione                               |
| --------------------- | ---- | ----------------------------------------- |
| durabilitàCostoMining | int  | I punti danno che questo oggetto riceverà |


### withToolType

Permette di aggiungere un tipo di strumento a questo strumento. È possibile specificare il tipo, il livello di estrazione e facoltativamente la velocità di estrazione quando questo tipo viene colpito pure.

 Restituisce: `Questo costruttore, usato per la catena di metodi`

Tipo restituito: [mods.contenttweaker.item.tool.ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withToolType(toolType as mods.contenttweaker.item.MCToolType, miningLevel as int, miningSpeed as float);
new ItemBuilder(). ithMaxDamage(150).withType<ItemBuilderTool>().withToolType(<tooltype:shovel>, 3);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withToolType(<tooltype:shovel>, 3, 2.0f);
```

| Parametro   | Tipo                                                                            | Descrizione                                                          | IsOptional | Valore Predefinito |
| ----------- | ------------------------------------------------------------------------------- | -------------------------------------------------------------------- | ---------- | ------------------ |
| toolType    | [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType) | Il tipo di strumento                                                 | falso      | `null`             |
| miningLevel | int                                                                             | Il livello di miniera per questo tipo di strumento                   | falso      | `null`             |
| miningSpeed | galleggiante                                                                    | Quanto velocemente questo strumento può minare blocchi del tipo dato | vero       | `1.0`              |



