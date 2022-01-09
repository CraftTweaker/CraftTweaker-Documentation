# Advancement

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.advancement.Advancement;
```


## Metodi

:::group{name=getChatComponent}

Return Type: [Component](/vanilla/api/text/Component)

```zenscript
// Advancement.getChatComponent() as Component

myAdvancement.getChatComponent();
```

:::

:::group{name=getChildren}

Return Type: stdlib.Iterable&lt;[Advancement](/vanilla/api/advancement/Advancement)&gt;

```zenscript
// Advancement.getChildren() as stdlib.Iterable<Advancement>

myAdvancement.getChildren();
```

:::

:::group{name=getCriteria}

Return Type: [Criterion](/vanilla/api/advancement/Criterion)[string]

```zenscript
// Advancement.getCriteria() as Criterion[string]

myAdvancement.getCriteria();
```

:::

:::group{name=getDisplay}

Return Type: [DisplayInfo](/vanilla/api/advancement/DisplayInfo)

```zenscript
// Advancement.getDisplay() as DisplayInfo

myAdvancement.getDisplay();
```

:::

:::group{name=getId}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// Advancement.getId() as ResourceLocation

myAdvancement.getId();
```

:::

:::group{name=getMaxCriteriaRequired}

Return Type: int

```zenscript
// Advancement.getMaxCriteriaRequired() as int

myAdvancement.getMaxCriteriaRequired();
```

:::

:::group{name=getParent}

Return Type: [Advancement](/vanilla/api/advancement/Advancement)

```zenscript
// Advancement.getParent() as Advancement

myAdvancement.getParent();
```

:::

:::group{name=getRequirements}

Return Type: **invalid**[][]

```zenscript
// Advancement.getRequirements() as invalid[][]

myAdvancement.getRequirements();
```

:::

:::group{name=getRewards}

Return Type: [AdvancementRewards](/vanilla/api/advancement/AdvancementRewards)

```zenscript
// Advancement.getRewards() as AdvancementRewards

myAdvancement.getRewards();
```

:::


## Proprietà

| Nome                | Tipo                                                                                   | Ha Getter | Ha Setter | Descrizione             |
| ------------------- | -------------------------------------------------------------------------------------- | --------- | --------- | ----------------------- |
| chatComponent       | [Component](/vanilla/api/text/Component)                                               | sì        | no        | No Description Provided |
| children            | stdlib.Iterable&lt;[Advancement](/vanilla/api/advancement/Advancement)&gt; | sì        | no        | No Description Provided |
| criteria            | [Criterion](/vanilla/api/advancement/Criterion)[string]                                | sì        | no        | No Description Provided |
| display             | [DisplayInfo](/vanilla/api/advancement/DisplayInfo)                                    | sì        | no        | No Description Provided |
| id                  | [ResourceLocation](/vanilla/api/resource/ResourceLocation)                             | sì        | no        | No Description Provided |
| maxCriteriaRequired | int                                                                                    | sì        | no        | No Description Provided |
| parent              | [Advancement](/vanilla/api/advancement/Advancement)                                    | sì        | no        | No Description Provided |
| requirements        | **invalid**[][]                                                                        | sì        | no        | No Description Provided |
| rewards             | [AdvancementRewards](/vanilla/api/advancement/AdvancementRewards)                      | sì        | no        | No Description Provided |

