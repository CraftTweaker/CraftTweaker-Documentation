# Advancement

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.advancement.Advancement;
```


## Methoden

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


## Properties

| Name                | Type                                                                                   | Has Getter | Has Setter | Beschreibung            |
| ------------------- | -------------------------------------------------------------------------------------- | ---------- | ---------- | ----------------------- |
| chatComponent       | [Component](/vanilla/api/text/Component)                                               | true       | false      | No Description Provided |
| children            | stdlib.Iterable&lt;[Advancement](/vanilla/api/advancement/Advancement)&gt; | true       | false      | No Description Provided |
| criteria            | [Criterion](/vanilla/api/advancement/Criterion)[string]                                | true       | false      | No Description Provided |
| display             | [DisplayInfo](/vanilla/api/advancement/DisplayInfo)                                    | true       | false      | No Description Provided |
| id                  | [ResourceLocation](/vanilla/api/resource/ResourceLocation)                             | true       | false      | No Description Provided |
| maxCriteriaRequired | int                                                                                    | true       | false      | No Description Provided |
| parent              | [Advancement](/vanilla/api/advancement/Advancement)                                    | true       | false      | No Description Provided |
| requirements        | **invalid**[][]                                                                        | true       | false      | No Description Provided |
| rewards             | [AdvancementRewards](/vanilla/api/advancement/AdvancementRewards)                      | true       | false      | No Description Provided |

