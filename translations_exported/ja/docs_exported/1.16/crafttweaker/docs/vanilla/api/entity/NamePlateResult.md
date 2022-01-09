# NamePlateResult

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.NamePlateResult;
```


## Methods

:::group{name=getContent}

Gets the current content of the nameplate. This can be changed by mods.

Returns: The current nameplate content.  
Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
// NamePlateResult.getContent() as MCTextComponent

myNamePlateResult.getContent();
```

:::

:::group{name=getOriginalContent}

Gets the original content of the nameplate. This can not be changed by mods.

Returns: The original nameplate content.  
Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
// NamePlateResult.getOriginalContent() as MCTextComponent

myNamePlateResult.getOriginalContent();
```

:::

:::group{name=setAllow}

Forces the nameplate to be visible even when it would otherwise not be.

Return Type: void

```zenscript
// NamePlateResult.setAllow() as void

myNamePlateResult.setAllow();
```

:::

:::group{name=setContent}

Sets the new content of the nameplate.

Return Type: void

```zenscript
NamePlateResult.setContent(content as MCTextComponent) as void
```

| Parameter | Type                                                      | Description                 |
| --------- | --------------------------------------------------------- | --------------------------- |
| コンテンツ     | [MCTextComponent](/vanilla/api/util/text/MCTextComponent) | The new nameplate contents. |


:::

:::group{name=setDefault}

Sets the default vanilla behaviour of rendering nameplates.

Return Type: void

```zenscript
// NamePlateResult.setDefault() as void

myNamePlateResult.setDefault();
```

:::

:::group{name=setDeny}

Forces the display name to not render even when it should.

Return Type: void

```zenscript
// NamePlateResult.setDeny() as void

myNamePlateResult.setDeny();
```

:::


## Properties

| 名称              | Type                                                      | Has Getter | Has Setter | Description                                                                                |
| --------------- | --------------------------------------------------------- | ---------- | ---------- | ------------------------------------------------------------------------------------------ |
| コンテンツ           | [MCTextComponent](/vanilla/api/util/text/MCTextComponent) | true       | true       | Gets the current content of the nameplate. <br />  This can be changed by mods.      |
| originalContent | [MCTextComponent](/vanilla/api/util/text/MCTextComponent) | true       | false      | Gets the original content of the nameplate. <br />  This can not be changed by mods. |

