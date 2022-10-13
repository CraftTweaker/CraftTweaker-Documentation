# MCEntityType

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la Classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.entity.MCEntityType
```

## Interfacce Implementate
MCEntityType implements the following interfaces. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Proprietà

| Nome           | Tipo                                                                                           | Ha Getter | Ha Setter |
| -------------- | ---------------------------------------------------------------------------------------------- | --------- | --------- |
| classification | [crafttweaker.api.entity.MCEntityClassification](/vanilla/api/entities/MCEntityClassification) | sì        | no        |
| commandString  | String                                                                                         | sì        | no        |
| height         | float                                                                                          | sì        | no        |
| immuneToFire   | boolean                                                                                        | sì        | no        |
| lootTable      | String                                                                                         | sì        | no        |
| nome           | String                                                                                         | sì        | no        |
| serializable   | boolean                                                                                        | sì        | no        |
| summonable     | boolean                                                                                        | sì        | no        |
| translationKey | String                                                                                         | sì        | no        |
| width          | float                                                                                          | sì        | no        |

