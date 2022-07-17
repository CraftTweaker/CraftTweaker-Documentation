# Advancement

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.advancement.Advancement;
```


## Methods

:::group{name=getChatComponent}

Return Type: [Component](/vanilla/api/text/Component)?

```zenscript
// Advancement.getChatComponent() as Component?

myAdvancement.getChatComponent();
```

:::

:::group{name=getChildren}

Return Type: stdlib.Iterable&lt;T&gt;?

```zenscript
// Advancement.getChildren() as stdlib.Iterable<T>?

myAdvancement.getChildren();
```

:::

:::group{name=getCriteria}

Return Type: V[K]?

```zenscript
// Advancement.getCriteria() as V[K]?

myAdvancement.getCriteria();
```

:::

:::group{name=getDisplay}

Return Type: [DisplayInfo](/vanilla/api/advancement/DisplayInfo)?

```zenscript
// Advancement.getDisplay() as DisplayInfo?

myAdvancement.getDisplay();
```

:::

:::group{name=getId}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)?

```zenscript
// Advancement.getId() as ResourceLocation?

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

Return Type: [Advancement](/vanilla/api/advancement/Advancement)?

```zenscript
// Advancement.getParent() as Advancement?

myAdvancement.getParent();
```

:::

:::group{name=getRequirements}

Return Type: string?[][]

```zenscript
// Advancement.getRequirements() as string?[][]

myAdvancement.getRequirements();
```

:::

:::group{name=getRewards}

Return Type: [AdvancementRewards](/vanilla/api/advancement/AdvancementRewards)?

```zenscript
// Advancement.getRewards() as AdvancementRewards?

myAdvancement.getRewards();
```

:::


## Properties

|        Name         |                                Type                                | Has Getter | Has Setter |
|---------------------|--------------------------------------------------------------------|------------|------------|
| chatComponent       | [Component](/vanilla/api/text/Component)?                          | true       | false      |
| children            | stdlib.Iterable&lt;T&gt;?                                          | true       | false      |
| criteria            | V[K]?                                                              | true       | false      |
| display             | [DisplayInfo](/vanilla/api/advancement/DisplayInfo)?               | true       | false      |
| id                  | [ResourceLocation](/vanilla/api/resource/ResourceLocation)?        | true       | false      |
| maxCriteriaRequired | int                                                                | true       | false      |
| parent              | [Advancement](/vanilla/api/advancement/Advancement)?               | true       | false      |
| requirements        | string?[][]                                                        | true       | false      |
| rewards             | [AdvancementRewards](/vanilla/api/advancement/AdvancementRewards)? | true       | false      |

