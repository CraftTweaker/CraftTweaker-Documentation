# AttachmentType

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.neoforge.api.attachment.AttachmentType;
```


## Casters

| Result Type | Is Implicit |
|-------------|-------------|
| string      | false       |

## Methods

:::group{name=getCommandString}

Gets the attachment_type bracket handler syntax for this AttachmentType.

 E.G.
 `<attachment_type:minecraft:mana>`

Returns: The attachment_type bracket handler syntax for this AttachmentType.  
Return Type: string

```zenscript
// AttachmentType.getCommandString() as string

myAttachmentType.getCommandString();
```

:::

:::group{name=getRegistryName}

Gets the registry name of this AttachmentType.

Returns: A ResourceLocation of the registry name of this AttachmentType.  
Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// AttachmentType.getRegistryName() as ResourceLocation

myAttachmentType.getRegistryName();
```

:::


## Properties

|     Name      |                            Type                            | Has Getter | Has Setter |                                                               Description                                                                |
|---------------|------------------------------------------------------------|------------|------------|------------------------------------------------------------------------------------------------------------------------------------------|
| commandString | string                                                     | true       | false      | Gets the attachment_type bracket handler syntax for this AttachmentType. <br />  <br />  E.G. <br />  `<attachment_type:minecraft:mana>` |
| registryName  | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | true       | false      | Gets the registry name of this AttachmentType.                                                                                           |

