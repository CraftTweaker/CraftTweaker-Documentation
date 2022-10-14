# NamePlateResult

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.NamePlateResult;
```


## Methods

:::group{name=alwaysRender}

Forces the nameplate to be visible even when it would otherwise not be.

```zenscript
// NamePlateResult.alwaysRender()

myNamePlateResult.alwaysRender();
```

:::

:::group{name=getContent}

Gets the current content of the nameplate. This can be changed by mods.

Returns: The current nameplate content.  
Return Type: [Component](/vanilla/api/text/Component)

```zenscript
// NamePlateResult.getContent() as Component

myNamePlateResult.getContent();
```

:::

:::group{name=getOriginalContent}

Gets the original content of the nameplate. This can not be changed by mods.

Returns: The original nameplate content.  
Return Type: [Component](/vanilla/api/text/Component)

```zenscript
// NamePlateResult.getOriginalContent() as Component

myNamePlateResult.getOriginalContent();
```

:::

:::group{name=noRender}

Forces the display name to not render even when it should.

```zenscript
// NamePlateResult.noRender()

myNamePlateResult.noRender();
```

:::

:::group{name=setContent}

Sets the new content of the nameplate.

```zenscript
NamePlateResult.setContent(content as Component)
```

| Parameter | Type                                     | Description                 |
| --------- | ---------------------------------------- | --------------------------- |
| コンテンツ     | [Component](/vanilla/api/text/Component) | The new nameplate contents. |


:::

:::group{name=setDefault}

Sets the default vanilla behaviour of rendering nameplates.

```zenscript
// NamePlateResult.setDefault()

myNamePlateResult.setDefault();
```

:::


## Properties

| 名称              | Type                                     | Has Getter | Has Setter | Description                                                                                |
| --------------- | ---------------------------------------- | ---------- | ---------- | ------------------------------------------------------------------------------------------ |
| コンテンツ           | [Component](/vanilla/api/text/Component) | true       | true       | Gets the current content of the nameplate. <br />  This can be changed by mods.      |
| originalContent | [Component](/vanilla/api/text/Component) | true       | false      | Gets the original content of the nameplate. <br />  This can not be changed by mods. |

