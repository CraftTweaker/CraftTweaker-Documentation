# NameTagResult

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.NameTagResult;
```


## Methods

:::group{name=alwaysRender}

Forces the name tag to be visible even when it would otherwise not be.

```zenscript
// NameTagResult.alwaysRender()

myNameTagResult.alwaysRender();
```

:::

:::group{name=getContent}

Gets the current content of the name tag.
 This can be changed by mods.

Returns: The current name tag content.  
Return Type: [Component](/vanilla/api/text/Component)

```zenscript
// NameTagResult.getContent() as Component

myNameTagResult.getContent();
```

:::

:::group{name=getOriginalContent}

Gets the original content of the name tag.
 This can not be changed by mods.

Returns: The original name tag content.  
Return Type: [Component](/vanilla/api/text/Component)

```zenscript
// NameTagResult.getOriginalContent() as Component

myNameTagResult.getOriginalContent();
```

:::

:::group{name=noRender}

Forces the display name to not render even when it should.

```zenscript
// NameTagResult.noRender()

myNameTagResult.noRender();
```

:::

:::group{name=setContent}

Sets the new content of the name tag.

```zenscript
NameTagResult.setContent(content as Component)
```

| Parameter |                   Type                   |        Description         |
|-----------|------------------------------------------|----------------------------|
| content   | [Component](/vanilla/api/text/Component) | The new name tag contents. |


:::

:::group{name=setDefault}

Sets the default vanilla behaviour of rendering name tags.

```zenscript
// NameTagResult.setDefault()

myNameTagResult.setDefault();
```

:::


## Properties

|      Name       |                   Type                   | Has Getter | Has Setter |                                     Description                                     |
|-----------------|------------------------------------------|------------|------------|-------------------------------------------------------------------------------------|
| content         | [Component](/vanilla/api/text/Component) | true       | true       | Gets the current content of the name tag. <br />  This can be changed by mods.      |
| originalContent | [Component](/vanilla/api/text/Component) | true       | false      | Gets the original content of the name tag. <br />  This can not be changed by mods. |

